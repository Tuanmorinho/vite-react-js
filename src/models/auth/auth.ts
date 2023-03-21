export interface ILoginPayload {
    username: string;
    password: string;
}

export interface IAuthUser {
    accessToken: string;
    email: string;
    preferred_username: string;
    given_name: string;
    sid: string;
    resource_access: {
        frontend: {
            roles: string[]
        }
    }
}