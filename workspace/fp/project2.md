In our first project, we consciously limited ourselves to the basics. We created an example event and passed it to our application from our IDE. Furthermore, we simply printed results in the output instead of saving them to a database and taking additional actions.

Now, we’ll expand our scope. We’ll actually deploy and run our application in the cloud, bringing us one step closer to the look of a real project. Instead of starting with our types, we’ll adopt a looser approach, coding as we go. But first, a word about our platform, AWS Lambda.

## Why use Lambda for our project?

There are several reasons to use Lambda. First, it simplifies matters for the reader. There’s no need to set up infrastructure, perhaps through a console and SSH-ing into an instance and ensuring our environment is identical. Simply deploy the project manually or with bash, and everything will work. Secondly, Lambda is cheap for exploring. Users have performed many experiments with it while maintaining several functions running daily in their personal accounts, never paying a cent. Compare that to countless warnings from online courses reminding us to turn off our EC2/ECS/EKS instances lest we receive an unexpected cloud bill.

Finally, in general, AWS Lambda and serverless are a good fit for FP. Both like to abstract away concerns, in the case of FP low-level concepts such as loops, and Lambda, the underlying infrastructure. Both AWS Lambda and serverless prefer to create small components (functions) that can be combined with other managed services, in the case of AWS, to create larger applications. FP tries to keep most of its code/functions pure, whereas AWS Lambda is stateless.
What’s Infrastructure as Code?

The AWS Cloud offers several options for creating applications. We can simply click together what we need in the console for experimenting. Or, we can use the CLI/SDK and create our application through code. But for real applications, Infrastructure as Code (IaC) is recommended. Infrastructure as Code describes our infrastructure at a high level in the form of a text document. We define what we need without going into the how. We leave it up to our cloud provider to bring our description to life.

This has many advantages over clicking together an infrastructure or the imperative commands of a CLI. We know exactly what kind of infrastructure we have because it’s described in the document we created, which serves as our single source of truth. Our information about what our infrastructure looks like won’t turn stale as long as we only change infrastructure by changing that document. It’s also easy to recreate our setup (by deleting the current infrastructure and running the document again) or move it to a different AWS region.

In AWS, IaC is provided by AWS CloudFormation. With CloudFormation, we describe our infrastructure as a JSON or YAML file called a template8. The various pieces of infrastructure we need (such as an S3 bucket, SQS queue, EC2 instance, or Lambda) are called Resources. Once we send our file to AWS and our actual infrastructure is created, the result shown in the CloudFormation console is called a stack. So, instead of describing what elements to click in the console, we’re going to write a template that automatically creates the infrastructure stack.

More specifically, we’ll use the Serverless Application Model (SAM), which is a layer on top of CloudFormation specifically designed to simplify the creation of serverless applications. Several interesting alternatives exist, including the AWS CDK (definitely more appropriate for complicated or non-serverless projects), Troposphere, Terraform, and the powerful Serverless framework. Most of these also created Cloudformation “under the hood.”

    Note: If we want to deploy an application in the cloud, we’ll have to perform some setup. First, we’ll need to create an AWS account if we don’t already t have one. We’ll also install the AWS CLI (refer to the official documentation) and set default credentials with either the right permissions for deploying, or Admin—with the latter certainly recommended for AWS newbies. We’ll need an S3 bucket in which to store the zipped code. We can create a bucket manually through the AWS console. If you don’t want to do any of this, that’s fine as well. Just follow along with the code.

Let’s try to bring our entire program together for the first time. We want our handler to look like this:

```ts
// some imports

export const handler = async () => {
    return pipe(
        generateConfig(),
        T.fromIO,
        T.chain(checkLambda),
        T.map(httpResultFromStats),
    )();
};
```

To make inference and usage of fp-ts simple, we again resort to using a pipe. Inside that pipe, we generate the configuration and get back an IO. But our other actions are all asynchronous and therefore Tasks! So, how do we deal with this mismatch? One way to do it is to lift our IO stuff to Task. For that, we can use one of the built-in Task functions, fromIO. From that point on, we’re working with a Task, which is why we use its chain to pass our config to an as-yet-unwritten checkLambda function.

    Note: We could also have used tagless final to abstract away the concrete monads we’re using, but that’s a more advanced technique we’ll briefly discuss later on.

This function runs our metric retrieval and transformations for the Lambda, which is passed in through config. It therefore takes in a config and returns ReducedStats, which then maps to an HTTP result using a function we wrote earlier. Let’s fill in the implementation:

```ts
const checkLambda = (config: Config) => {
    return pipe(
        retrieveMetrics(config.between, METRICS)(config.functionName),
        TE.map(statsResultToStatsSumResult),
        TE.map(statsReducer),
        TE.fold(
            (message) => T.task.of(reducedStatsForFailure(message)),
            T.task.of),
    );
}
```

We’re combining the functions we wrote in the previous pages. We pass our metrics, time, and function name to our retrieveMetrics call. Next, we transform those results twice, using map and two of the pure transformers we defined earlier. Unfortunately, our call could fail because we’re dealing with a TaskEither! How do we go from this monad to a Task? Here we chose to use fold, which in the case of a TaskEither requires two functions, one for handling the left value and one for the right. Right is easy because we simply need to place it inside another Task! On the left side, though, we only have a string containing an error message. Here we take that message and pass it into a new function called reducedStatsForFailure, which is placed in the transformers folder and looks like this:

```ts
export const reducedStatsForFailure = (message: string): ReducedStats => ({
    status: 'ERR',
    message: `Could not retrieve info for this function. Error: ${message}`,
}); 
```


Lines 2–3: If we encounter an error, we definitely want to report it, so we set the status to ERR and add a message.

In both cases, we get back a Task containing ReducedStats. In one case, it contains a message with information about the function, and in the other case, we have an error because we couldn’t retrieve information from AWS.

Putting it all together gives us the following index (which we can place directly under the src folder).

```ts
import * as TE from 'fp-ts/lib/TaskEither';
import * as T from 'fp-ts/lib/Task';
import {Config} from "./util/types";
import {METRICS} from "./util/constants";
import {retrieveMetrics} from "./metric-gateway/entrypoint";
import {pipe} from "fp-ts/pipeable";
import {
    httpResultFromStats,
    reducedStatsForFailure,
    statsReducer,
    statsResultToStatsSumResult,
} from "./transformations/transformations";
import {generateConfig} from "./util/config";

// the function we just discussed
const checkLambda = (config: Config) => {
    return pipe(
        retrieveMetrics(config.between, METRICS)(config.functionName),
        TE.map(statsResultToStatsSumResult),
        TE.map(statsReducer),
        TE.fold(
            (message) => T.task.of(reducedStatsForFailure(message)),
            T.task.of),
    );
}

// our handler, discussed earlier
export const handler = async () => {
    return pipe(
        generateConfig(),
        T.fromIO,
        T.chain(checkLambda),
        T.map(httpResultFromStats),
    )(); //34
};
```


Line 34: Note the additional (). To actually get a result, we need to go back to ordinary JavaScript. Because Task is simply a function that returns a Promise, we simply have to call the result of our piping to get that Promise. This is why we return from the handler.

Our index performs the high-level gluing. It generates config, retrieves the metrics for our Lambda, and returns it as an HTTP result. If a failure occurs, we output an HTTP result with an error message. Finally, we return a Promise, which AWS Lambda knows how to handle.

The only thing left to do is to add the function name as an environment variable. This only requires a minor change in our infrastructure:

```ts
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31

Resources:
  MetricsLambda:
    Type: AWS::Serverless::Function
    Properties:
      Handler: main.handler
      Runtime: nodejs12.x
      MemorySize: 512
      Timeout: 20
      CodeUri: dist/cloudwatch.zip
      Policies:
        - AWSLambdaExecute
        - Version: "2012-10-17"
          Statement:
            - Effect: Allow
              Action:
                - "cloudwatch:Get*"
                - "cloudwatch:List*"
              Resource:
                - "*"
      Environment: //34
        Variables:
          FUNCTION_NAME: monitoring-example-MetricsLambda-123456789
```


Lines 23–25: Here we inform AWS Lambda that we’d like to add an environment variable called FUNCTION_NAME, with the given value, to our Lambda environment. The value of FUNCTION_NAME will be different in your case. Check your CloudFormation or Lambda console.

`Note:`
Ideally, you wouldn’t refer to a hardcoded value in your YAML file. You could write code to retrieve the correct name. Or, if the Lambda you want to check is in the same template as your MetricsLambda, you could use “Ref” to get the right name injected by CloudFormation. In this case it would fail, though, because we have Lambda, which is observing itself, and it would result in a circular dependency. But in real scenarios, that would be the way to go.

That’s it. We can now deploy the Lambda again and view the results when we trigger it.

A few remarks before we continue. First, there were several valid ways to use the functions defined in the transformations folder. Here we chose to combine them at the very last moment. We could’ve used compose or flow to reduce the number of maps needed in our index. For example:

```ts
export const combined = (results: readonly StatsResult[]): ReducedStats => {
    return flow(
        statsResultToStatsSumResult,
        statsReducer,
    )(results);
};
```

The code above shows one less map in checkLambda. But we could’ve gone a step further:

```ts
export const combined = (results: readonly StatsResult[]): HttpResult => {
    return flow(
        statsResultToStatsSumResult,
        statsReducer,
        httpResultFromStats,
    )(results);
};
```

In this case, we’d remove the last map in index.ts and transform the failure to HttpResult in checkLambda. Both approaches (composing with maps or with flow) have their advantages and disadvantages. Composing within the transformers file exposes less surface, resulting in a better-defined module. That is, transformers is a module that changes the result into something we can give back, and we have no business knowing how exactly it goes about doing this. That’s an implementation detail.

On the other hand, that approach can be too rigid. What if this code was shared by two Lambdas and the second one wanted to use ReducedStats to generate an email, meaning that it doesn’t need the final HttpResult transformation? We’d have to add another function to transformers, composing the first two and adding a new third function. Or, if we’d exposed more functions, we could leave it up to the Lambdas themselves to use the transforms available to get the right results. So, minimizing the surface area (the number of exposed functions) is a good idea, but we still want to retain a bit of flexibility. In the end, we’ll be combining functions regardless.

It’s also best practice to avoid putting too much logic in the index file when writing Lambda code. This is because it often contains initialization content that might make the unit test difficult. We could extract checkLambda into another file. Also, note that a Lambda container can be reused by subsequent invocations. If we have a request A at time zero and a request B at time one, any logic outside of the handler function will be initialized only once. This means that a Lambda with the following code, when invoked twice, might print the same time more than once, depending on whether we received a new container from AWS, or the old one.

```ts
console.log(`current time is ${Date.now()}`);
export const handler = async () => {
    return pipe(
        // ...
    )();
};
```

This means we can optimize our code by performing as much initialization as possible outside our handler function because anything outside the handler is subject to reuse. In our case, though, there’s little to optimize. We could create the config beforehand, but we’d risk continually getting old Between values. Your perspective will determine whether the Lambda container could be reused for hours.

Finally, a minor improvement would be to make a newtype FunctionName to replace the string from Config. That way, we ensure that no one passes a faulty string to the relevant functions by mistake.

