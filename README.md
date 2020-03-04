Boilerplate for a new Nuxt project, including:

-   Automatic global registration for everything in the `~/components` directory
    -   `~/components/MyComponent.vue` becomes `<my-component>`
    -   `~/components/grouped/Component.vue` becomes `<grouped-component>`
-   A simplified `pages/index.vue`
-   All `.scss` vars/mixins/functions in `~/assets/scss` included globally using [style-resources](https://github.com/nuxt-community/style-resources-module) module

## Recommended Workflow

1. Copy the script in `scripts/install.sh` and run locally, or do:
   `curl -o- https://raw.githubusercontent.com/SaFrMo/nuxt-boilerplate/boardgame/scripts/install.sh | bash`
