import { combineReducers } from 'redux'

import {MovieslistReducer} from './MoviesList'

export const rootReducer=combineReducers({
    movies:MovieslistReducer
});
