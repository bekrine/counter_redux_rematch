import {init} from '@rematch/core'
import toaster from './models/toaster'
import counter from './models/counter'
const models={
    counter,
    toaster
}

const store=init({
    models,
})

export default store