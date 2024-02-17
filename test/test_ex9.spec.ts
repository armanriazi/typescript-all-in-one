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
  
  });
  