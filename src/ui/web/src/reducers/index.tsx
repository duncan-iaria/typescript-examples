import { combineReducers } from 'redux';
import { enthusiasmReducer as enthusiasm } from './enthusiasmReducer';

export const rootReducer = combineReducers({
    enthusiasm, 
});