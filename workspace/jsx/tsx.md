# JSX Support

[![DesignTSX](https://raw.githubusercontent.com/armanriazi/typescript-all-in-one/master/images/designtsx-banner.png)](https://designtsx.com)

TypeScript supports JSX transpilation and code analysis. If you are unfamiliar with JSX here is an excerpt from the [official website](https://facebook.github.io/jsx/):

TypeScript extends the capabilities of JSX by providing type checking and static analysis. This decreases the chances of errors and increases the maintainability of your user interfaces.

To use JSX you need to set the **`jsx` compiler option** in your `tsconfig.json` file. Two common configuration options:

- [x] "preserve": emit .jsx files with the JSX unchanged. This option tells TypeScript to **keep the JSX syntax** as-is and not transform it during the compilation process. You can use this option if you have a separate tool, like Babel, that handles the transformation.
- [x] "react": **enables TypeScript's built-in JSX transformation**. React.createElement will be used.

All options are available here:
<https://www.typescriptlang.org/tsconfig#jsx>

> JSX is an XML-like syntax extension to ECMAScript without any defined semantics. It's NOT intended to be implemented by engines or browsers. It's NOT a proposal to incorporate JSX into the ECMAScript spec itself. It's intended to be used by various **preprocessors (transpilers)** to transform these tokens into standard ECMAScript.

The motivation behind JSX is to allow users to write **HTML like views in JavaScript** so that you can, It is commonly used in React to define the HTML structure.
:

- [x] Have the view Type Checked by the same code that is going to check your JavaScript
- [x] Have the view be aware of the context it is going to operate under (i.e. strengthen the *controller-view* connection in traditional MVC).
- [x] Reuse JavaScript patterns for HTML maintenance e.g. `Array.prototype.map`, `?:`, `switch` etc instead of creating new (and probably poorly typed) alternatives.


