///`>tags:` #Important #Interface #function_in_function #Generic #Class

interface IPrint {
    print(): void;
   }
   
   interface ILogInterface<T extends IPrint> {
    logToConsole(iPrintObj: T): void;
   }
   
   class LogClass<T extends IPrint>
    implements ILogInterface<T>
   {
    logToConsole(iPrintObj: T): void {
    iPrintObj.print();
    }
   }

   let printObject: IPrint = {
    print() { console.log(`printObject.print() called`) }
   }
   
   let logClass = new LogClass();
   logClass.logToConsole(printObject);