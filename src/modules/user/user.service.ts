import crypto from "crypto"
import { AppError } from "../../app.error";

export type User = {
    id?: string,
    name: string,
    username: string
}

export class UserService {

    users: User[] = []


    create(user: User) {
        const userFound = this.users.find(userF => userF.username === user.username);

        if (userFound) throw new AppError("User already exists", 400)

        user.id = crypto.randomUUID();

        this.users.push(user)
        return user;
    }

    findAll() {
        return this.users;
    }
}