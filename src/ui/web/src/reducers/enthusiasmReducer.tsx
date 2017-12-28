import { EnthusiasmAction } from '../actions';
// import { StoreState } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

export function enthusiasmReducer( state: any = { troll: 'yas', time:'yazzz!' }, action: EnthusiasmAction ): any {
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