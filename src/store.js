import { createStore } from 'redux'

import rootReduser from './reducers/root-reducer'

const store = createStore(rootReduser);

export default store;
