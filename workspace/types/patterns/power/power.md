
### ES7 Exponentiation Operator

The exponentiation (`**`) operator computes the value obtained by raising the first operand to the power of the second operand. It functions similarly to `Math.pow()`, but with the added **capability of accepting BigInts as operands**.
TypeScript fully supports this operator using as `target` in your tsconfig.json file `es2016` or larger version.

```typescript
console.log(2 ** (2 ** 2)); // 16
```