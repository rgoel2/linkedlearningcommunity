export interface User {
    email: string;
    uid?: string;
    imageURL: string;
    lastname: string;
    firstname:string;
    school:string;
    role:string;
    connectionRequestsReceived: Array<String>;
    connectionRequestsSent:Array<String>;
}
