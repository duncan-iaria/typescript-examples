import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, QueryProps } from 'react-apollo';

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

export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
};

type UserList = User[];

type Response = {
    User: User;
    userList: UserList;
};

type WrappedProps = Response & QueryProps;

// COMPONENT
const TestListApollo = graphql<Response, {}, WrappedProps>( FOLK_QUERY, {
    props: ({ data }) => ({ ...data }),
});

export default TestListApollo( ( props ) => {
    // console.log( loading );
    return(
        props.User ? (
                console.log( props ),
                <div>
                    <h1>{`${ props.User.firstName } ${ props.User.lastName }`}</h1>
                    <h2>{`${ props.User.email }`}</h2>
                </div>
            )
        : // ELSE
            <div>Loading</div>
    );
} );