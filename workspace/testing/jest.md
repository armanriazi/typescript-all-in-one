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

### Example async

Jest has built-in async/await support. e.g.

```js
test('basic',async () => {
  expect(sum()).toBe(0);
});

test('basic again', async () => {
  expect(sum(1, 2)).toBe(3);
}, 1000 /* optional timeout */);
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

## Reasons why we like jest

> [For details on these features see jest website](http://facebook.github.io/jest/)

* Built-in assertion library.
* Great TypeScript support.
* Very reliable test watcher.
* Snapshot testing.
* Built-in coverage reports.
* Built-in async/await support.
