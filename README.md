# Dark/light theme for TypeDoc

This theme will use the color scheme the user prefers. Setting CSS variables to set the color variables. Defaults to the **dark theme** if no preference.

```css
@media (prefers-color-scheme: dark) 
```

## Install
```sh
npm add --dev typedoc-theme-dark
```

![screen2](https://gitlab.com/rockerBOO/typedoc-theme-dark/-/raw/master/resources/screen2.png)

![screen3-light](https://gitlab.com/rockerBOO/typedoc-theme-dark/-/raw/master/resources/screen3-light.png)

## Usage
```sh
typedoc ./file.ts --theme ./node_modules/typedoc-theme-dark/dist/dark/
```

## Build
To make a build:

```sh
npm run build
```

This puts the theme you want to use in `dist/dark/`. 

```sh
typedoc ./file.ts --theme path/to/dist/dark/
```

## Custom CSS Variables

I put a good effort into updating all the colors to use CSS Variables. This allows us to use the built in `@media(prefers-color-scheme: x)` to change the color. If you want to make a theme with color schemes, this might be good to fork and start with.

See: [src/default/assets/css/_constants.sass](src/default/assets/css/_constants.sass)

As a *side note*, this seems to work for me. I forked the https://github.com/TypeStrong/typedoc-default-themes repo and kept a lot of things. If there is something wrong or could be done better, make an issue or merge request.

Visit https://typedoc.org/ to learn more about TypeDoc.
Theme Docs: https://typedoc.org/guides/themes/

## License
Copyright (c) 2020 [Dave Lage](https://davelage.com)<br>
Copyright (c) 2015 [Sebastian Lenz](http://www.sebastian-lenz.de).<br>
Copyright (c) 2016-2020 [TypeDoc Contributors](https://github.com/TypeStrong/typedoc/graphs/contributors).<br>
Licensed under the Apache License 2.0.

