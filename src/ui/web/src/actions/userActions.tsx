interface User {
    name: string;
}

interface CreateUser {
    type: 'CREATE_USER';
    payload: UserPayload;
}

interface UserPayload {
    user?: User;
}

export function createUser( tUser: User ): CreateUser {
    return {
        type: 'CREATE_USER',
        payload: {
            user: tUser,
        }
    };
}

const userActions = {
    createUser,
};

export default userActions;