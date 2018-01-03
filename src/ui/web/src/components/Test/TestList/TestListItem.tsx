import * as React from 'react';

interface Props {
    id: number;
    firstName?: string;
    lastName?: string;
    openUser?: Function;
}

const TestListItem = ( { id, firstName, lastName, openUser }: Props ) => {
    
    let tempOpenUser = openUser ?
        () => { openUser( id ); }  
        : // ELSE
        () => { return null; };
    
    return(
        <div className="test-list__item" onClick={tempOpenUser}>
            <div className="test-list__item-header">
                <div className="test-list__id">{id}</div>
                <h1 className="test-list__title">
                    {firstName && lastName ? `${ firstName } ${ lastName }` : `Test List Item`}
                </h1>
            </div>
            <div className="test-list__item-content">
                Here is some content to view.
            </div>
        </div>
    );
};

export default TestListItem;