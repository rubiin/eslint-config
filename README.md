# ESLint Configuration Monorepo for React and TypeScript

Welcome to my ESLint Config Monorepo! 🚀 Here, you'll find meticulously crafted ESLint configurations tailored for React and TypeScript projects. Whether you're a coding newbie or experienced developer, we've got you covered with just one-line configuration. Elevate your code quality with our industry best practices for React, and TypeScript. Happy linting! 🧹📝

## Table of Contents

- [Packages](#packages)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Support and Feedback](#support-and-feedback)
- [License](#license)

## Packages

### [eslint-config-react](./packages/eslint-config-react)

This package provides a comprehensive ESLint configuration tailored specifically for React projects. It includes a set of rules and plugins that promote best practices, improve code readability, and prevent common pitfalls in React development.

### [eslint-config-typescript](./packages/eslint-config-typescript)

The `eslint-config-typescript` package is designed to enhance TypeScript projects by applying ESLint rules optimized for TypeScript-specific features. This configuration helps catch type-related errors, enforces consistent coding styles, and fosters a more robust TypeScript codebase.

## Getting Started

Installed the desired package:

1.Install the required dependencies 
```sh
npm install <package-name> -D
pnpm install <package-name> -D
yarn add <package-name> -D
```

2. Update your project's `.eslintrc.js` file to extend our configuration:
```javascript
module.exports = {
  extends: ['@eslint-config-react'],
  // Your other ESLint settings...
};
```
> **_NOTE:_**  Since the code styling too is handled by eslint, you might want to remove prettier or they will be in conflict

## License
This project is licensed under the MIT License. You can find the complete license terms in the LICENSE file.

