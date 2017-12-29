import { EnthusiasmAction } from '../actions';
import { EnthusiasmState } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

const initialState: EnthusiasmState = {
    enthusiasmLevel: 1,
};

export function enthusiasmReducer( state: EnthusiasmState = initialState, action: EnthusiasmAction ): EnthusiasmState {
    switch  ( action.type ) {
        case INCREMENT_ENTHUSIASM:
            console.log( action.payload );
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max( 1, state.enthusiasmLevel - 1 ) };
        default:
            return { ...state };
    }
}