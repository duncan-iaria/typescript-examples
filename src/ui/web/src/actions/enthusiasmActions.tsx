import * as constants from '../constants';

interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
    payload: Object;
}

interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM,
        payload: { troll: 'yas' },
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

// EXPORTS
const enthusiasmActions = {
    incrementEnthusiasm,
    decrementEnthusiasm,
};

// DEFAULT EXPORT
export default enthusiasmActions;