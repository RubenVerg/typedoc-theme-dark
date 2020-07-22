# Dark theme for TypeDoc

## Install
```
npm add --dev typedoc-theme-dark
```

![screen2](https://gitlab.com/rockerBOO/typedoc-theme-dark/-/raw/master/resources/screen2.png)

![screen3-light](https://gitlab.com/rockerBOO/typedoc-theme-dark/-/raw/master/resources/screen3-light.png)

## Usage
```
typedoc ./file.ts --theme ./node_modules/typedoc-theme-dark/dist/dark/
```

## Build
To make a build:

```
npm run build
```

This puts the theme you want to use in `dist/dark/`. 

```
typedoc ./file.ts --theme path/to/dist/dark/
```

As a side note, this seems to work for me. I forked the https://github.com/TypeStrong/typedoc-default-themes repo and kept a lot of things. If there is something wrong or could be done better, make an issue or merge request.

Visit https://typedoc.org/ to learn more about TypeDoc.
Theme Docs: https://typedoc.org/guides/themes/

## License
Copyright (c) 2020 [Dave Lage](https://davelage.com)<br>
Copyright (c) 2015 [Sebastian Lenz](http://www.sebastian-lenz.de).<br>
Copyright (c) 2016-2020 [TypeDoc Contributors](https://github.com/TypeStrong/typedoc/graphs/contributors).<br>
Licensed under the Apache License 2.0.

