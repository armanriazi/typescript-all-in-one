## Type-Only Imports and Export

Type-Only Imports and Export allows you to import or **export types without importing or exporting the values or functions associated** with those types. This can be useful for reducing the size of your bundle.

To use type-only imports, you can use the `import type` keyword.

TypeScript permits using both declaration and implementation file extensions (.ts, .mts, .cts, and .tsx) in type-only imports, regardless of `allowImportingTsExtensions` settings.

For example:

<!-- skip -->
```typescript
import type { House } from './house.ts';
```

The following are supported forms:

<!-- skip -->
```typescript
import type T from './mod';
import type { A, B } from './mod';
import type * as Types from './mod';
export type { T };
export type { T } from './mod';
```