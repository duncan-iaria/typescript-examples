import * as React from 'react';

interface Props {
    id: number;
}

const TestListItem = ( { id }: Props ) => {
    return(
        <div className="test-list__item">
            <div className="test-list__item-header">
                <div className="test-list__id">{id}</div>
                <h1 className="test-list__title">Test List Item</h1>
            </div>
        </div>
    );
};

export default TestListItem;