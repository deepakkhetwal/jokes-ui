export class PostJoke {
    description: string;
    user_email: string;
    constructor(
        description: string,
        user_email: string
    ){
        this.description = description;
        this.user_email = user_email;
    }
}