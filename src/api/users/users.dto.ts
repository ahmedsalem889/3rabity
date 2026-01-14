export type User = {
    id: string;
    createdAt: string;
    firstName: string;
    lastName: string;
    email: string;
    googleId: string | null;
    isVerified: boolean;
    role: string;
    image: string | null;
    updatedAt: string;
}

export type GetProfileDTO = {
    user: User
}