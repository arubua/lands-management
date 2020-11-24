export interface IUser {
    id: number;
    fullName:string;
    idNumber: number;
    lastSeenOn: string;
    password: string;
    phoneNumber: string;
    pic: string;
    _id: string;
    roles: [];
    email: string;
    accessToken: string;
    address: {
        county: string;
        mailbox: string;
    };
}

export interface User {
    id: number,
    fullName:string,
    idNumber: number,
    lastSeenOn: string,
    password: string,
    phoneNumber: string,
    pic: string,
    _id: string,
    roles: [],
    email: string,
    accessToken: string,
    address: {
        county: string,
        mailbox: string,
    },
    blockChainKey: string
}