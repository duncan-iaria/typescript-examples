import * as React from 'react';

// PROPS
export interface Props {
    enthusiasmLevel: number;
}

// STYLE
import './TestList.style.css';

// COMPONENTS
import TestListItem from './TestListItem';

// COMPONENT
const TestList = ( {enthusiasmLevel}: Props ) => {
    return (
        <div className="test-list__container">
            {getListItems( enthusiasmLevel )}
        </div>
    );
};

// HELPERS
const getListItems = ( numItems: number ) => {
    let tempItems: Array<{}> = [];
    for ( let i: number = 0; i < numItems; i++ ) {
        tempItems.push( <TestListItem key={i} id={i + 1}/> );
    }

    return tempItems;
};

export default TestList;