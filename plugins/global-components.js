import Vue from 'vue'

// globally register everything in the /components folder
export default async () => {
    const components = require.context('~/components', true)
    components.keys().map(component => {
        // turn './ComponentName.vue' into 'component-name'
        const componentName = _kebabCase(
            component.replace(/^\.\//, '').replace(/\.vue$/, '')
        )

        // register new component globally
        Vue.component(componentName, components(component).default)
    })
}
