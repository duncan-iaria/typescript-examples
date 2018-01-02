import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// PROPS
export interface Props {
    // enthusiasm: EnthusiasmState;
}

// STYLE
import './TestList.style.css';

// COMPONENTS
// import TestListItem from './TestListItem';

const FOLK_QUERY = gql`
    query GetFolk {
        User {
            _id
            firstName
            lastName
            email
        }
    }
`;

type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
};

type Response = {
    user: User;
};

// COMPONENT
const TestListApollo = graphql<Response>( FOLK_QUERY );

//     return (
//         <div className="test-list__container">
//             {getListItems( enthusiasm.enthusiasmLevel )}
//         </div>
//     );
// };

// HELPERS

export default TestListApollo( ( { data } ) => {
    console.log( data );
    return(
        <div>hello</div>
    );
} );