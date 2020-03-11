Boilerplate for a new Nuxt + boardgame.io project, including:

-   Automatic global registration for everything in the `~/components` directory
    -   `~/components/MyComponent.vue` becomes `<my-component>`
    -   `~/components/grouped/Component.vue` becomes `<grouped-component>`
-   A simplified `pages/index.vue`
-   All `.scss` vars/mixins/functions in `~/assets/scss` included globally using [style-resources](https://github.com/nuxt-community/style-resources-module) module

## Recommended Workflow

1. Copy the script in `scripts/install.sh` and run locally.

## Suggestions

-   **Everything that can go in a .ts file should.** This includes mixins for Vue components that interface with boardgame.io logic, since type checking is extremely useful when in the middle of a project.
-   Use the `G = /* your move function */; return G` pattern instead of just modifying G in your moves. This creates a more reliable pattern and easier error handling.
-   Build your core game logic, then add everything else as WordPress-style filters and hooks.
-   Make functions as self-contained as possible. Avoid using `this` and pass context explicitly in boardgame.io functions.

## TODO

-   Structure that acts like enum but can export a list of values:

```
enum Thing {
    Example1,
    Example2
}

const ThingOptions = // something that exports ['Example1', 'Example2']

export {Thing, ThingOptions}
```
