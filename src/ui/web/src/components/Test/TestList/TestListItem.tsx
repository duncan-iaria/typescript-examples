import * as React from 'react';

interface Props {
    id?: number;
}

const TestListItem = ( {id}: Props ) => {
    return(
        <div className="testlist__item">
            <div className="testlist__id">{id}</div>
            <h1 className="testlist__title">Test List Item</h1>
        </div>
    );
};

export default TestListItem;