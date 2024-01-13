# The TypeScript MDBook

The Concise TypeScript Book provides a comprehensive and succinct overview of TypeScript's capabilities. It offers clear explanations covering all aspects found in the latest version of the language, from its powerful type system to advanced features. Whether you're a beginner or an experienced developer, this book is an invaluable resource to enhance your understanding and proficiency in TypeScript.

This book is completely Free and Open Source.

If you found this TypeScript book valuable and wish to contribute, consider supporting my efforts via cryptocurrency. Thanks!

```md
0xde5D732a5AB44832E1c69b18be30834639F44A2c
```

---

## Downloads

You can also download the Epub version here:

<https://github.com/armanriazi/typescript-all-in-one/tree/main/downloads>



<!-- markdownlint-disable MD004 
- [The Concise TypeScript Book](#the-concise-typescript-all-in-one)

  - [Downloads](#downloads)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [About the Author](#about-the-author)
    - [jsx](#jsx)
    - [skipLibCheck](#skiplibcheck)
    - [files](#files)
    - [include](#include)
    - [exclude](#exclude)
    - [importHelpers](#importhelpers)
    - [Migration to TypeScript Advice](#migration-to-typescript-advice)
  - [Exploring the Type System](#exploring-the-type-system)
    - [The TypeScript Language Service](#the-typescript-language-service)
    - [Structural Typing](#structural-typing)
    - [TypeScript Fundamental Comparison Rules](#typescript-fundamental-comparison-rules)
    - [Types as Sets](#types-as-sets)
    - [Assign a type: Type Declarations and Type Assertions](#assign-a-type-type-declarations-and-type-assertions)
      - [Type Declaration](#type-declaration)
      - [Type Assertion](#type-assertion)
      - [Ambient Declarations](#ambient-declarations)
    - [Property Checking and Excess Property Checking](#property-checking-and-excess-property-checking)
    - [Weak Types](#weak-types)
    - [Strict Object Literal Checking (Freshness)](#strict-object-literal-checking-freshness)
    - [Type Inference](#type-inference)
    - [More Advanced Inferences](#more-advanced-inferences)
    - [Type Widening](#type-widening)
    - [Const](#const)
      - [Const Modifier on Type Parameters](#const-modifier-on-type-parameters)
      - [Const assertion](#const-assertion)
    - [Explicit Type Annotation](#explicit-type-annotation)
    - [Type Narrowing](#type-narrowing)
      - [Conditions](#conditions)
      - [Throwing or returning](#throwing-or-returning)
      - [Discriminated Union](#discriminated-union)
      - [User-Defined Type Guards](#user-defined-type-guards)
  - [Primitive Types](#primitive-types)
    - [string](#string)
    - [boolean](#boolean)
    - [number](#number)
    - [bigInt](#bigint)
    - [Symbol](#symbol)
    - [null and undefined](#null-and-undefined)
    - [Array](#array)
    - [any](#any)
  - [Type Annotations](#type-annotations)
  - [Optional Properties](#optional-properties)
  - [Readonly Properties](#readonly-properties)
  - [Index Signatures](#index-signatures)
  - [Extending Types](#extending-types)
  - [Literal Types](#literal-types)
  - [Literal Inference](#literal-inference)
  - [strictNullChecks](#strictnullchecks)
  - [Enums](#enums)
    - [Numeric enums](#numeric-enums)
    - [String enums](#string-enums)
    - [Constant enums](#constant-enums)
    - [Reverse mapping](#reverse-mapping)
    - [Ambient enums](#ambient-enums)
    - [Computed and constant members](#computed-and-constant-members)
  - [Narrowing](#narrowing)
    - [typeof type guards](#typeof-type-guards)
    - [Truthiness narrowing](#truthiness-narrowing)
    - [Equality narrowing](#equality-narrowing)
    - [In Operator narrowing](#in-operator-narrowing)
    - [instanceof narrowing](#instanceof-narrowing)
  - [Assignments](#assignments)
  - [Control Flow Analysis](#control-flow-analysis)
  - [Type Predicates](#type-predicates)
  - [Discriminated Unions](#discriminated-unions)
  - [The never Type](#the-never-type)
  - [Exhaustiveness checking](#exhaustiveness-checking)
  - [Object Types](#object-types)
  - [Tuple Type (Anonymous)](#tuple-type-anonymous)
  - [Named Tuple Type (Labeled)](#named-tuple-type-labeled)
  - [Fixed Length Tuple](#fixed-length-tuple)
  - [Union Type](#union-type)
  - [Intersection Types](#intersection-types)
  - [Type Indexing](#type-indexing)
  - [Type from Value](#type-from-value)
  - [Type from Func Return](#type-from-func-return)
  - [Type from Module](#type-from-module)
  - [Mapped Types](#mapped-types)
  - [Mapped Type Modifiers](#mapped-type-modifiers)
  - [Conditional Types](#conditional-types)
  - [Distributive Conditional Types](#distributive-conditional-types)
  - [infer Type Inference in Conditional Types](#infer-type-inference-in-conditional-types)
  - [Predefined Conditional Types](#predefined-conditional-types)
  - [Template Union Types](#template-union-types)
  - [Any type](#any-type)
  - [Unknown type](#unknown-type)
  - [Void type](#void-type)
  - [Never type](#never-type)
  - [Interface and Type](#interface-and-type)
    - [Common Syntax](#common-syntax)
    - [Basic Types](#basic-types)
    - [Objects and Interfaces](#objects-and-interfaces)
    - [Union and Intersection Types](#union-and-intersection-types)
  - [Built-in Type Primitives](#built-in-type-primitives)
  - [Common Built-in JS Objects](#common-built-in-js-objects)
  - [Overloads](#overloads)
  - [Merging and Extension](#merging-and-extension)
  - [Differences between Type and Interface](#differences-between-type-and-interface)
  - [Class](#class)
    - [Class Common Syntax](#class-common-syntax)
    - [Constructor](#constructor)
    - [Private and Protected Constructors](#private-and-protected-constructors)
    - [Access Modifiers](#access-modifiers)
    - [Get \& Set](#get--set)
    - [Auto-Accessors in Classes](#auto-accessors-in-classes)
    - [this](#this)
    - [Parameter Properties](#parameter-properties)
    - [Abstract Classes](#abstract-classes)
    - [With Generics](#with-generics)
    - [Decorators](#decorators)
      - [Class Decorators](#class-decorators)
      - [Property Decorator](#property-decorator)
      - [Method Decorator](#method-decorator)
      - [Getter and Setter Decorators](#getter-and-setter-decorators)
      - [Decorator Metadata](#decorator-metadata)
    - [Inheritance](#inheritance)
    - [Statics](#statics)
    - [Property initialization](#property-initialization)
    - [Method overloading](#method-overloading)
  - [Generics](#generics)
    - [Generic Type](#generic-type)
    - [Generic Classes](#generic-classes)
    - [Generic Constraints](#generic-constraints)
    - [Generic contextual narrowing](#generic-contextual-narrowing)
  - [Erased Structural Types](#erased-structural-types)
  - [Namespacing](#namespacing)
  - [Symbols](#symbols)
  - [Triple-Slash Directives](#triple-slash-directives)
  - [Type Manipulation](#type-manipulation)
    - [Creating Types from Types](#creating-types-from-types)
    - [Indexed Access Types](#indexed-access-types)
    - [Utility Types](#utility-types)
      - [Awaited\<T\>](#awaitedt)
      - [Partial\<T\>](#partialt)
      - [Required\<T\>](#requiredt)
      - [Readonly\<T\>](#readonlyt)
      - [Record\<K, T\>](#recordk-t)
      - [Pick\<T, K\>](#pickt-k)
      - [Omit\<T, K\>](#omitt-k)
      - [Exclude\<T, U\>](#excludet-u)
      - [Extract\<T, U\>](#extractt-u)
      - [NonNullable\<T\>](#nonnullablet)
      - [Parameters\<T\>](#parameterst)
      - [ConstructorParameters\<T\>](#constructorparameterst)
      - [ReturnType\<T\>](#returntypet)
      - [InstanceType\<T\>](#instancetypet)
      - [ThisParameterType\<T\>](#thisparametertypet)
      - [OmitThisParameter\<T\>](#omitthisparametert)
      - [ThisType\<T\>](#thistypet)
      - [Uppercase\<T\>](#uppercaset)
      - [Lowercase\<T\>](#lowercaset)
      - [Capitalize\<T\>](#capitalizet)
      - [Uncapitalize\<T\>](#uncapitalizet)
  - [Others](#others)
    - [Errors and Exception Handling](#errors-and-exception-handling)
    - [Mixin classes](#mixin-classes)
    - [Asynchronous Language Features](#asynchronous-language-features)
    - [Iterators and Generators](#iterators-and-generators)
    - [TsDocs JSDoc Reference](#tsdocs-jsdoc-reference)
    - [@types](#types)
    - [JSX](#jsx-1)
    - [ES6 Modules](#es6-modules)
    - [ES7 Exponentiation Operator](#es7-exponentiation-operator)
    - [The for-await-of Statement](#the-for-await-of-statement)
    - [New.target](#newtarget)
    - [Dynamic Import Expressions](#dynamic-import-expressions)
    - ["tsc –watch"](#tsc-watch)
    - [Non-null Assertion Operator (Postfix !)](#non-null-assertion-operator-postfix-)
    - [Defaulted declarations](#defaulted-declarations)
    - [Optional Chaining](#optional-chaining)
    - [Nullish coalescing operator (??)](#nullish-coalescing-operator-)
    - [Template Literal Types](#template-literal-types)
    - [Function overloading](#function-overloading)
    - [Recursive Types](#recursive-types)
    - [Recursive Conditional Types](#recursive-conditional-types)
    - [ECMAScript Module Support in Node.js](#ecmascript-module-support-in-nodejs)
    - [Assertion Functions](#assertion-functions)
    - [Variadic Tuple Types](#variadic-tuple-types)
    - [Boxed types](#boxed-types)
    - [Covariance and Contravariance in TypeScript](#covariance-and-contravariance-in-typescript)
      - [Optional Variance Annotations for Type Parameters](#optional-variance-annotations-for-type-parameters)
    - [Template String Pattern Index Signatures](#template-string-pattern-index-signatures)
    - [The satisfies Operator](#the-satisfies-operator)
    - [Type-Only Imports and Export](#type-only-imports-and-export)
    - [using declaration and Explicit Resource Management](#using-declaration-and-explicit-resource-management)
      - [await using declaration](#await-using-declaration)
 markdownlint-enable MD004 -->

## Introduction

Welcome to The Concise TypeScript Book! This guide equips you with essential knowledge and practical skills for effective TypeScript development. Discover key concepts and techniques to write clean, robust code. Whether you're a beginner or an experienced developer, this book serves as both a comprehensive guide and a handy reference for leveraging TypeScript's power in your projects.

<!--This book covers TypeScript 5.2.-->

## About the Author

Arman Riazi is an experienced Senior Backend-end Developer with a passion for Rust, R&D and Blockchain since 2012.
You can reach Arman Riazi on the following platforms:

- [x] LinkedIn: <https://www.linkedin.com/in/armanriazi
- [x] GitHub: <https://github.com/armanriazi>
- [x] Twitter: <https://twitter.com/armanriazi.meta>
- [x] Instagram: <https://instagram.com/armanriazi_meta>
- [x] Email: armanriyazi.github.io📧gmail.com

