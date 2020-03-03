Boilerplate for a new Nuxt project, including:

-   Automatic global registration for everything in the `~/components` directory
    -   `~/components/MyComponent.vue` becomes `<my-component>`
    -   `~/components/grouped/Component.vue` becomes `<grouped-component>`
-   A simplified `pages/index.vue`
-   All `.scss` vars/mixins/functions in `~/assets/scss` included globally using [style-resources](https://github.com/nuxt-community/style-resources-module) module

## Recommended Workflow

1. Install `degit` if you don't have it: `npm i -g degit`
1. Either:
    1. Run:
        1. `PROJECT_NAME=my-new-project` (replace `my-new-project` with your project name)
        1. `npx create-nuxt-app $PROJECT_NAME && cd $PROJECT_NAME && find . -name README.md -delete -o -name Logo.vue -delete && degit safrmo/nuxt-boilerplate#boardgame -f && npm i node-sass sass-loader @nuxtjs/style-resources -D && npm i lodash && && git submodule add https://github.com/safrmo/boardgame-utils && git submodule add https://github.com/safrmo/vue-three-wrap && cd ..`
    1. Or, use this bash script:
        ```
        nuxt() {
            npx create-nuxt-app "$1"
            cd "$1"
            find . -name "README.md" -delete
            rm ./components/Logo.vue
            degit safrmo/nuxt-boilerplate -f
            npm i node-sass sass-loader @nuxt/style-resources -D
            npm i lodash
            cd ..
        }
        ```
        1. Then run `nuxt my-new-project-name` to run `create-nuxt-app`, remove extra Nuxt boilerplates, install this boilerplate, and add SASS and Lodash.
