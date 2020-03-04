#!/bin/bash

# project name
(
echo Enter your project name:
read PROJECT_NAME

# create nuxt boilerplate and remove unnecessary files
npx create-nuxt-app "$PROJECT_NAME"
cd "$PROJECT_NAME"
find . -name README.md -delete -o -name Logo.vue -delete

# degit boilerplate into the new project
degit safrmo/nuxt-boilerplate\#boardgame -f

# install dependencies
npm i node-sass sass-loader @nuxtjs/style-resources concurrently -D
npm i lodash

# add submodules
git submodule add https://github.com/safrmo/boardgame-utils
git submodule add https://github.com/safrmo/vue-three-wrap

# edit package.json
PROJECT_NAME=$PROJECT_NAME PACKAGE_JSON="$(cat package.json)" node > package.json <<EOF
const package = JSON.parse(process.env.PACKAGE_JSON)
package.scripts.dev = 'concurrently \"tsc -w\" \"' + package.scripts.dev + '\"'
console.log(JSON.stringify(package))
EOF

# cleanup
exit 0
)
