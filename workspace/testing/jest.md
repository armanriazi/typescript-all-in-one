# Using Jest with TypeScript
Jest is a simple-to-configure and powerful JavaScript unit testing framework that is built on top of the popular Jasmine framework.
> [Pro egghead lesson on Jest / TypeScript](https://egghead.io/lessons/typescript-getting-started-with-jest-using-typescript)

No testing solution out there is perfect. That said, jest is an excellent unit testing option which provides great TypeScript support.

> Note: We assume you start off with a simple node package.json setup. Also all TypeScript files should be in a `src` folder which is always recommended (even without Jest) for a clean project setup.

## Step 1: Install

Install the following using npm:

```bash
npm install jest --save-dev
#npm i jest @types/jest ts-jest typescript -D
pnpm install ts-jest --save-dev
pnpm ts-jest config:init
pnpm install typescript --save-dev
```

Explanation:

- [x] Install `jest` framework (`jest`)
- [x] Install the types for `jest` (`@types/jest`)
- [x] Install the TypeScript preprocessor for jest (`ts-jest`) which allows jest to transpile TypeScript on the fly and have source-map support built in.
- [x] Install the TypeScript compiler ('typescript') which is prerequisite for 'ts-jest'.
- [x] Save all of these to your dev dependencies (testing is almost always a npm dev-dependency)

## Step 2: Configure Jest

Add the following `jest.config.js` file to the root of your project:

```js
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
```

Note: There are also a number of keyboard shortcuts available to run a subset of tests.
- [x] Hitting the “f” key will run only failed tests.
- [x] Hitting the “o” key will only run tests related to changed files.
- [x] The “p” and “t” options allow for filtering tests based on regex patterns.

(If your `package.json` file contains `"type": "module"`, which causes Node to assume modules are in es6 format, you can convert the above to es6 format by replacing the top line to `export default { ` .)

Explanation:

- [x] We always recommend having *all* TypeScript files in a `src` folder in your project. We assume this is true and specify this using the `roots` option.
- [x] The `testMatch` config is a glob pattern matcher for discovering .test / .spec files in ts / tsx / js format.
- [x] The `transform` config just tells `jest` to use `ts-jest` for ts / tsx files.

## Step 3: Run tests

Run `pnpm jest` from your project root and jest will execute any tests you have.

### Optional: Add script target for npm scripts

Add `package.json`:

```json
{
  "test": "jest"
}
```

- [x] This allows you to run the tests with a simple `npm t`.
- [x] And even in watch mode with `npm t -- --watch`.


### Optional: Run jest in watch mode

`pnpm jest --watch`

### ts-jest
ts-jest is a TypeScript to Jest bridge and will take care of the compilation step and integration with Jest for us.
In fact, ts-jest will compile and execute our TypeScript tests without even generating JavaScript files. This means that we can write unit tests in TypeScript, and ts-jest will run them within Jest seamlessly.

```bash
pnpm install --save-dev jest typescript ts-jest @types/jest
pnpm ts-jest config:init
```

add `preset: "ts-jest"` to jest.config.js file.


### Grouping tests

Within a test specification file, we may want to group our tests into logical sets. Jest uses the function **describe** for this purpose.
`it` is a function containing the **set of tests**.

### Force Test

Using the it function (Jasmine default) instead of the test function (Jest default) for tests means that we only have to prefix an it test with the letter `f` in order to force it, that is, fit versus it. This is quite a time saver, instead of having to type test.only to force a test instead of the normal test.
`fdescribe` used to force a group of tests.

### Skipping tests

The opposite of forcing tests is to skip tests. To skip a test, we can prefix the test with the letter x so it becomes `xit`.
Skipping tests just because they are failing is the antithesis of test-driven development and should be avoided at all costs.

### Example

* For a file `foo.ts`:

```js
export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);
```

A simple `foo.test.ts`:

```js
import { sum } from '../foo';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});
 ```

Notes:

- [x] Jest provides the global `test` function.
- [x] Jest comes prebuilt with assertions in the form of the global `expect`.


### Test setup and teardown

The beforeEach function is being called before each of these tests, and it resets the value of the count property back to 0 every time.

```ts
/// test setup and teardown
class GlobalCounter {
    count: number = 0;
    increment(): void {
      this.count++;
    }
   }
describe("test setup and teardown", () => {
  
    let globalCounter: GlobalCounter;
    beforeAll(() => {
      globalCounter = new GlobalCounter();
    });
    
    beforeEach(() => {
      globalCounter.count = 0;
    });
    
    afterEach(() => {
      console.log(`globalCounter.count =
      ${globalCounter.count}`);
    });
  
    it("should increment", () => {
        globalCounter.increment();
        expect(globalCounter.count).toEqual(1);
    });

    it("should increment twice", () => {
        globalCounter.increment();
        globalCounter.increment();
        expect(globalCounter.count).toEqual(2);
    });
  });
  
```

## Data-Driven Test

To use data-driven tests in TypeScript to run the same test multiple times with different input values. Data-driven tests are a convenient way of writing unit tests where the only real change to a series of tests is either an input or a resulting value, but the body of the test itself remains the same.
Data-driven tests dosen't check the database integration of an application.

```ts
function testUsing<T>
    (values: T[], func: Function) {
    for (let value of values) {
        func.apply(Object, [value]);
    }
}
//....
```

### Jest Mocks and Spies
To use Jest mocks and spies to test that functions are called with the **correct arguments.**
When writing a test for our initialize function, we would want to ensure that all of the calls to REST services were called. **To ensure that functions are called, we use Jest mocks or Jest spies.**

```ts
//...
it("should call testFunction with argument using mock", () => {
  let mock = jest.fn();
  
  let myCallbackClass = new MyCallbackClass();
  myCallbackClass.executeCallback("argument_1", mock);
  expect(mock).toHaveBeenCalledWith("argument_1");
});
```

Spy:

```ts
//...
it("should call testSpiedFunction", () => {
  let mySpiedClass = new MySpiedClass();
  const testFunctionSpy = jest.spyOn(mySpiedClass, "testSpiedFunction");
  mySpiedClass.testFunction();
  expect(testFunctionSpy).toHaveBeenCalled();
});
```

Spy Sample two:

Here, we have used the mockImplementation function on our spy to provide an implementation of the function that will be called during the test. This mock implementation will log a message to the console showing that it will be called instead of the class method.

When we run the test, we can see that the mock implementation of the testFunction method was invoked instead of the actual implementation of the testFunction method.
 If we want to override the body of the method and not allow the body of the method to be invoked, then we need to provide a mock implementation.

 This distinction of whether or not the body of the method is invoked is extremely important when writing tests. As an example, let’s assume that a method will connect to a database, run a query, and return results. In this instance, we do not want the body of the method to be run, as we do not have a database instance to connect to. We want to mock out any interactions with a database completely. In these cases, we will need to provide a mock implementation.

```ts
it("should call mock of testFunction", () => {
    let mySpiedClass = new MySpiedClass();
    const testFunctionSpy = jest.spyOn(
    mySpiedClass, 'testFunction')
    .mockImplementation(() => {
    console.log(`mockImplementation called`);
    });
    mySpiedClass.testFunction();
    expect(testFunctionSpy).toHaveBeenCalled();
   });
```

Returning values(Ref.To example test_ex15.spec.ts) from mock implementations means that we can simulate any sort of external interaction with other systems within our tests. We can mock out calls to a database or calls to a REST endpoint and inject standard values that we can test against.

#### Jest Writing a parameterized test

```ts
function squared(input: number): number {
    return input * input;
}

describe('this is our test suite', () => {
    [1, 5, 10, 100].forEach(num =>
        it(`should multiply ${num}`, () => {
            const result = squared(num);

            expect(result).toEqual(num * num);
        }));
});
```

### Property-based testing

```ts
import * as fc from 'fast-check'
function product(first: number, second: number) {
    return first * second;
}

describe('product tests', () => {
    it('should multiply the given numbers', () => {
        const randomFirst: fc.Arbitrary<number> = fc.integer(); 
        const randomSecond: fc.Arbitrary<number> = fc.integer(); 

        fc.assert(
            fc.property(randomFirst, randomSecond, (first, second) => {
                const result = product(first, second);
                
                expect(result).toBe(first * second);
            })
        ); 
    });
});

```

### Example async
This often presents problems in our unit testing, where we need to wait for an asynchronous event to complete before we can continue with our test.

```ts
class MockAsync {
  executeSlowFunction(complete: (value: string) => void) {
    setTimeout(() => {
      complete(`completed`);
    }, 1000);
  }
}
describe("failing async tests", () => {
  it("should wait for callback to complete", () => {
    let mockAsync = new MockAsync();
    console.log(`1. calling executeSlowFunction`);
    let returnedValue!: string;
    mockAsync.executeSlowFunction((value: string) => {
      console.log(`2. complete called`);
      returnedValue = value;
    });
    console.log(`3. checking return value`);
    expect(returnedValue).toBe("completed");
  });
});

```

`> Output:`

```ts
failing async tests › should wait for callback to complete
```
Our test is also failing, as the expected value of the returnedValue variable should be "completed", but is, in fact, undefined.

What is causing this test to fail is the fact that the test itself is not waiting for 1 second for the executeSlowFunction function to call the complete callback. What we really need is a way to signal to our test that it should only execute the test expectation once the asynchronous call has completed.

The **done function** can be passed in as an argument in any beforeAll, beforeEach, or it function and will allow our *asynchronous test to wait for the done function to be called before continuing.*


Next Example:
Jest has built-in async/await support. e.g.

```js
test('basic',async () => {
  expect(sum()).toBe(0);
});

test('basic again', async () => {
  expect(sum(1, 2)).toBe(3);
}, 1000 /* optional timeout */);
```

Next Example:

```ts
class AsyncWithPromise {
  delayedPromise(): Promise<string> {
    return new Promise<string>(
      (resolve: (str: string) => void, reject: (str: string) => void) => {
        setTimeout(() => {
          console.log(`2. returning success`);
          resolve("success");
        }, 1000);
      }
    );
  }
}
describe("async test", () => {
  it("should wait 1 second for promise to resolve", async () => {
    let asyncWithPromise = new AsyncWithPromise();
    console.log(`1. calling delayedPromise`);
    let returnValue = await asyncWithPromise.delayedPromise();
    console.log(`3. after await`);
    expect(returnValue).toEqual("success");
  });
});

```


### Example enzyme

> [Pro egghead lesson on Enzyme / Jest / TypeScript](https://egghead.io/lessons/react-test-react-components-and-dom-using-enzyme)

Enzyme allows you to test react components with dom support. There are three steps to setting up enzyme:

1. Install enzyme, types for enzyme, a better snapshot serializer for enzyme, enzyme-adapter-react for your react version `npm i enzyme @types/enzyme enzyme-to-json enzyme-adapter-react-16 -D`
2. Add `"snapshotSerializers"` and `"setupTestFrameworkScriptFile"` to your `jest.config.js`:  

```js
module.exports = {
  // OTHER PORTIONS AS MENTIONED BEFORE

  // Setup Enzyme
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
}
```

3. Create `src/setupEnzyme.ts` file.

```js
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
```

Now here is an example react component and test:

* `checkboxWithLabel.tsx`:

```typescript
import * as React from 'react';

export class CheckboxWithLabel extends React.Component<{
  labelOn: string,
  labelOff: string
}, {
    isChecked: boolean
  }> {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

```

* `checkboxWithLabel.test.tsx`:

```typescript
import * as React from 'react';
import { shallow } from 'enzyme';
import { CheckboxWithLabel } from './checkboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  // Interaction demo
  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');

  // Snapshot demo
  expect(checkbox).toMatchSnapshot();
});
```

## jsdom Library

Jest uses a library named jsdom to allow for testing HTML elements and interactions. The jsdom is not an actual browser; it is a library that implements the JavaScript DOM API, and can, therefore, simulate a full-blown browser experience. The benefit of using jsdom is in the speed at which we can run our tests and the fact that we do not have to provide an environment that can run a full browser.

```bash
pnpm install jsdom --save-dev
pnpm install @types/jsdom --save-dev
pnpm install jquery
pnpm install @types/jquery --save-dev
```

### Checking DOM updates
With jsdom and jquery installed, we can write a test that checks whether the DOM has been updated. Consider the following code:

```ts
function setTestDiv(text: string) {
  $("#test_div").html(`<p>${text}</p>`);
}
```

Test function with jsdom and jQuery

```ts
it("should set text on div", () => {
  document.body.innerHTML = `<div id="test_div"></div>`;
  let htmlElement = $("#test_div");
  expect(htmlElement.length).toBeGreaterThan(0);
  setTestDiv("Hello World");
  expect(htmlElement.html()).toContain("Hello World");
});
```
We can use this sort of technique for other DOM events, including onchange, onfocus, ondrag, or anything else. Having the ability to construct snippets of HTML and test them is a very powerful feature of Jest and jsdom. We can fill in forms, click on the “submit”, “cancel”, or “OK” buttons, and generally simulate user interaction with our application.

## Reasons why we like jest

> [For details on these features see jest website](http://facebook.github.io/jest/)

- [x] Built-in assertion library.
- [x] Great TypeScript support.
- [x] Very reliable test watcher.
- [x] Snapshot testing.
- [x] Built-in coverage reports.
- [x] Built-in async/await support.
