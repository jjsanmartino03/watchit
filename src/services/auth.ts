import {fetchUserAttributes, getCurrentUser, signOut as signOutAmplify} from "aws-amplify/auth";

export async function currentAuthenticatedUser() {
    let user = await getCurrentUser();

    if (user) {
        const userAttributes = await fetchUserAttributes();
        user = {
            ...user,
            ...userAttributes
        }
    }

    return user
}

export async function signOut() {
    await signOutAmplify();
}