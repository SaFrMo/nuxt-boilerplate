Boilerplate for a new Nuxt + boardgame.io project, including:

-   Automatic global registration for everything in the `~/components` directory
    -   `~/components/MyComponent.vue` becomes `<my-component>`
    -   `~/components/grouped/Component.vue` becomes `<grouped-component>`
-   A simplified `pages/index.vue`
-   All `.scss` vars/mixins/functions in `~/assets/scss` included globally using [style-resources](https://github.com/nuxt-community/style-resources-module) module

## Recommended Workflow

1. Copy the script in `scripts/install.sh` and run locally.

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
