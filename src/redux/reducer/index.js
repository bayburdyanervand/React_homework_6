import {combineReducers} from "redux";
import CarsReducers from "./car";
import MusicReducers from './music';

const allReducers = combineReducers({
    cars: CarsReducers,
    music:MusicReducers,
})

export default allReducers