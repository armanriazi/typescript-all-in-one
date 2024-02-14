/// `>tags:` #Important #InstanceOf
class A {}

class BfromA extends A {}

class CfromA extends A {}

class DfromC extends CfromA {}

// Log the result of "new A() instanceof A"
console.log(`A instance of A :
 ${new A() instanceof A}`);

// Log the result of "new BfromA() instanceof A"
console.log(`BfromA instance of A :
 ${new BfromA() instanceof A}`);

// Log the result of "new BfromA() instanceof BfromA"
console.log(`BfromA instance of BfromA :
 ${new BfromA() instanceof BfromA}`);

 console.log(`CfromA instance of BfromA :
 ${new CfromA() instanceof BfromA}`);