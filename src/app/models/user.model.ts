export class user {

    name: string;
    firstName: string;
    userName: string
    email: string;
    password: string;

    constructor(name: string, firstName: string, email: string, password: string) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
        this.userName = firstName.substring(0,1) + name;
    }

}