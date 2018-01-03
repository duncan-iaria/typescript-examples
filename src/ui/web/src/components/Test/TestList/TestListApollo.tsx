import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { get } from 'lodash';

// COMPONENTS
import TestListItem from './TestListItem';

// STYLE
import './TestList.style.css';

const FOLK_QUERY = gql`
    query GetFolk {
        User {
            _id
            firstName
            lastName
            email
        }

        UserList(length: 10) {
            _id
            firstName
            lastName
            email
        }
    }
`;

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

interface Response {
    User: User;
    UserList: User[];
}

// COMPONENT
const TestListApollo = graphql<Response>(FOLK_QUERY);

export default TestListApollo( ( props ) => {

    const gotoUser = ( tId: number ) => {
        console.log( `navigating to user ${ tId } route` );
    };

    const user: User = get( props, 'data.User' );
    const userList: User[] = get(props, 'data.UserList');
    return(
        user ? (
                <div>
                    <h1>{`${ user.firstName } ${ user.lastName }`}</h1>
                    <h2>{`${ user.email }`}</h2>
                    <div className="test-list__container">
                        {
                            userList.map( ( tUser, index )  => {
                                return (
                                    <TestListItem 
                                        key={index + 1}
                                        id={index}
                                        firstName={tUser.firstName}
                                        lastName={tUser.lastName}
                                        openUser={gotoUser}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            )
        : // ELSE
            <div>Loading</div>
    );
} );