# Contributing

This book is developed using [MdBook](https://github.com/rust-lang/mdBook/releases/download/v0.4.14/mdbook-v0.4.14-x86_64-unknown-linux-gnu.tar.gz). Authored in Markdown files (I use [atom](http://atom.io)).

[Here's how to setup a Dev Environment](https://rust-lang.github.io/mdBook/index.html):

```
cargo install mdbook
mdbook serve --open
```
> Note: serve needs port `35729` (for live reload) and `4000` for serving http://localhost:4000.

Also you can mostly just edit the `.md` files in [`/docs`](https://github.com/armanriazi/typescript-all-in-one/docs) using github and create a Pull Request (PR).

# Code
All the code for the book is in the `/code` folder. Tested with `atom-typescript`.

### More Gitbook Tips
* Links best work if they are relative (e.g. `./foo.md`) to the *current* file.
* For links in the same file (`#foo-bar` style links) best to click the heading on github to get what gitbook expects.

### TypeScript Compiler Docs
Thanks to the TypeScript team for providing much of the docs: https://github.com/Microsoft/TypeScript/wiki/Architectural-Overview that are used to write the compiler story.
