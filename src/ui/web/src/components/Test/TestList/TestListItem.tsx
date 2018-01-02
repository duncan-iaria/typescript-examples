import * as React from 'react';

interface Props {
    id: number;
    firstName?: string;
    lastName?: string;
}

const TestListItem = ( { id, firstName, lastName }: Props ) => {
    return(
        <div className="test-list__item">
            <div className="test-list__item-header">
                <div className="test-list__id">{id}</div>
                <h1 className="test-list__title">
                    {firstName && lastName ? `${ firstName } ${ lastName }` : `Test List Item`}
                </h1>
            </div>
        </div>
    );
};

export default TestListItem;