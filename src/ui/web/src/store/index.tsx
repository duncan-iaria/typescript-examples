import { createStore, compose } from 'redux';
import { rootReducer } from '../reducers';
// import { StoreState } from '../types';

// tslint:disable-next-line
declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const initialState: StoreState = {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// };

export function configureStore( initialState: {} ) {
    return createStore<{}>(
        rootReducer,
        initialState,
        composeEnhancers()
    );
}

// export const store = createStore<any>( 
//     rootReducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );