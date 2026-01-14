import type { User } from "../users/users.dto";

export type RegisterDTO = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}


export type RegisterResponseDTO = {
    user: User
}

export type LoginDTO = {
    email: string;
    password: string;
}

export type LoginResponseDTO = {
    user: User,
    accessToken: string;
}