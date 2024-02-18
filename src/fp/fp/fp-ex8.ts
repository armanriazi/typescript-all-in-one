type NetworkLoadingState = {
    state: "loading";
  };
  
  type NetworkFailedState = {
    state: "failed";
    code: number;
  };
  
  type NetworkSuccessState = {
    state: "success";
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };
  
  type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;
  
  function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
  }
  
  function logger(s: NetworkState): string {
    switch (s.state) {
      case "loading":
        return "loading request";
      case "failed":
        return `failed with code ${s.code}`;
      case "success":
        return "got response";
      default:
        return assertNever(s); // fails if we don't handle every possible state
    }
  }
  
  let networkState1:NetworkLoadingState = { state:"loading" };
  let returnedValue1 = logger(networkState1);
  console.log(returnedValue1);
  
  let networkState2:NetworkFailedState = { state: "failed", code: 404 };
  let returnedValue2 = logger(networkState2);
  console.log(returnedValue2);
  
  let networkState3:NetworkSuccessState = { state: "success", response: { title: "Hello World", duration: 50, summary: "This is a summary" } };
  let returnedValue3 = logger(networkState3);
  console.log(returnedValue3);