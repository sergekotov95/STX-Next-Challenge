import { createStore } from "redux";
import films from "../reducers/films";

const store = createStore (films, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store; 