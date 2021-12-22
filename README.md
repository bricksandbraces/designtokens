# @openbricksandbraces/designtokens

Awesome collection of tokens for the Bricks & Braces brand.
The repository exports JSON and PostCSS definitions for usage within designsystems and other products.

## How to use

First install this module to your package

```bash
yarn add @openbricksandbraces/designtokens
```

Then import the definitions of your need into your project.
**Mind** that you will have to configure a postcss plugin matching our variable definitions e.g. [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) as well as an import plugin most commonly [postcss-import](https://github.com/postcss/postcss-import).

CSS:

```css
@import "@openbricksandbraces/designtokens/dist/pcss/colors.pcss";
```

JS:

```js
import colors from "@openbricksandbraces/designtokens/dist/json/colors.json";
```

To import all definitions, simply import the index file.

CSS:

```css
@import "@openbricksandbraces/designtokens/dist/pcss/index.css";
```

JS:

```js
import tokens from "@openbricksandbraces/designtokens/dist/json/index.json";
```

## Ingredients

### Colors

All colors used by Bricks & Braces.

### Typography

- Font Family
- Font Size
- Line Height (Leading)
- Font Style
- Font Weight

### Metrics

- Spacing
- Container Size
- Field Size
- Border Radius
- Shadows
- Overlays
- Breakpoints
- Component specificas

### Animations

- Transitions

### Other commands

```bash
yarn format:check
yarn format:fix
```

## Publishing and dealing with yarn berry

> Disclaimer: Because we are using yarn berry options from .yarnrc and .npmrc will be IGNORED. Please look into the [offical documentation](https://yarnpkg.com/configuration/yarnrc) for the new file structure.

1. Insert `yarn npm login --publish` and authenticate using the npm account of **openbricksandbraces**.
2. Make sure you've installed the dependencies `yarn`.
3. Using `yarn npm publish --tag latest` you will be able to publish a new version of the package! 🎉

## License

Bricks & Braces Internal Property. No License given.
