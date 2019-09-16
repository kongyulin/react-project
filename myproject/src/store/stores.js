import { createStore } from "redux"
import reducer from './reducer'

const storeObj = createStore(reducer)

export default storeObj;