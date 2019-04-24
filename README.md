Boilerplate for a new Nuxt project, including:

-   Automatic global registration for everything in the `~/components` directory
    -   `~/components/MyComponent.vue` becomes `<my-component>`
    -   `~/components/grouped/Component.vue` becomes `<grouped-component>`
-   A simplified `pages/index.vue`

## Recommended Workflow

1. Install `degit` if you don't have it: `npm i -g degit`
1. Use this bash script:
    ```
    nuxt() {
        npx create-nuxt-app "$1"
        cd "$1"
        find . -name \"README.md\" -delete
        degit safrmo/nuxt-boilerplate -f
        npm i node-sass sass-loader -D
        npm i lodash
        cd ..
    }
    ```
1. Run `nuxt my-new-project-name` to run `create-nuxt-app`, install this boilerplate, and add SASS and Lodash
