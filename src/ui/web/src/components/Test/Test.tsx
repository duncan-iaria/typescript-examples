import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

// COMPONENT
const Test = ( {name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props ) => {
    if ( enthusiasmLevel <= 0 ) { 
        throw new Error( 'You could be more enthusiastic!' );
    }

    return (
        <div>
            <div className="greeting">test rendering: {name + getExclaimationMarks( enthusiasmLevel )} </div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
};

// HELPERS
const getExclaimationMarks = ( numChars: number ) => {
    return Array( numChars + 1 ).join( '!' );
};

export default Test;