import * as React from 'react';
import { EnthusiasmState } from '../../../types';
import TestListApollo from './TestListApollo';

// PROPS
export interface Props {
    enthusiasm: EnthusiasmState;
}

// STYLE
import './TestList.style.css';

// COMPONENTS
import TestListItem from './TestListItem';

// COMPONENT
const TestList = ( {enthusiasm}: Props ) => {
    return (
        <div className="test-list__container">
            {getListItems( enthusiasm.enthusiasmLevel )}
            <TestListApollo/>
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