# Project

To create a successful project using TypeScript you need to understand the various project organization language features available. In this section we will cover "compilation context", declaration spaces and modules.

# Versioning
Also, the caret (^) at the start of the package version number in the package.json file. This is used to indicate what can be done if new versions of the package are found during an npm install step. If we use the caret (^), this means that npm will upgrade the package if a new minor version or patch version is found. So "^7.1.0" will upgrade if a minor version number "7.2.0" is found or if a new patch version "7.1.1" is found.

If we use the tilde ( ~ ) character at the start of the version number, as in "~7.1.0", then only patch versions will be used if a new version is found. So, "~7.1.0" will upgrade if a new patch version "7.1.1" is found, but will not upgrade if a new minor version is found, as in "7.2.0".

If we do not use a preceding character, and simply leave the version at "7.1.0", then npm will not attempt to upgrade packages and will leave the version as stated.
