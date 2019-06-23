# React todo app

It's a React todo app based on feature slices approach with atomic design, react hooks and linaria for styling.

Feature slices and atomic design were choosed only because I wanted to try these approaches. It's so overcomplicated in such a simple app, but it's very good for a huge long living projects.

## My thoughts about Feature slices

It's very cool approach, which is suitable for both small and large applications. You can combine it with any state manager and design system.

## My thoughts about Atomic design

If project is designed well before development, it will be easy to implement atomic design and maintain project in future.
But in the case of this project it was difficult because I didn't have a design before development, and because of that I had to think a lot about what component is an atom, what molecule, etc.

## Aliases

- @features -> `./src/features`
- @ui -> `./src/ui`
- @lib -> `./src/lib`

## Scripts

### `yarn dev`

Runs the app in development mode on http://localhost:8080.

Enabled HMR, react-axe a11y audit.

### `yarn test`

Runs the test runner in watch mode.

### `yarn analyze`

Runs the webpack bundle analyzer.

### `yarn build`

Builds the app for production to the `dist` folder.
