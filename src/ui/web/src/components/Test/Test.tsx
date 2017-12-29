import * as React from 'react';
import { EnthusiasmState } from '../../types';

// COMPONENTS
import TestListContainer from './TestList/TestListContainer';

// PROPS
interface Props {
    name: string;
    enthusiasm?: EnthusiasmState;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

// DEFAULT STATE (zero'd out)
const defaultEnthusiasm: EnthusiasmState = {
    enthusiasmLevel: 1,
};

// COMPONENT
const Test = ( {name, enthusiasm = defaultEnthusiasm, onIncrement, onDecrement}: Props ) => {
    if ( enthusiasm && enthusiasm.enthusiasmLevel <= 0 ) { 
        throw new Error( 'You could be more enthusiastic!' );
    }

    return (
        <div>
            <div className="greeting">test rendering: {name + getExclaimationMarks( enthusiasm.enthusiasmLevel )} </div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
            <TestListContainer/>
        </div>
    );
};

// HELPERS
const getExclaimationMarks = ( numChars: number ) => {
    return Array( numChars + 1 ).join( '!' );
};

export default Test;