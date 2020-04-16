const quicksaveKey = 'quicksave'

export const state = () => {
    return {
        // starting state
    }
}

export const mutations = {
    QUICKSAVE(state) {
        window.localStorage.setItem(quicksaveKey, JSON.stringify(state))
    },
    QUICKLOAD(state) {
        const loaded = window.localStorage.getItem(quicksaveKey)
        if (loaded) {
            const parsed = JSON.parse(loaded)
            load(state, parsed)
        } else {
            console.log('no quicksave found')
        }
    },
    RESET_SAVE(localState) {
        load(localState, state())
    }
}

// helper load function
const load = function(localState, newState) {
    Object.keys(newState).forEach(key => {
        localState[key] = newState[key]
    })
}
