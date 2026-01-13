import { User } from "../users/users.dto";
export type RegisterDTO = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export type LoginDTO = {
    email: string;
    password: string;
}

export type LoginReturnDTO = {
    user: User,
    accessToken: string;
}