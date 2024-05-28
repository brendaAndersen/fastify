export class AppError {
    public message: string;
    public statusCode: number;

    constructor(message: string, statusCode = 500){
        this.message = message;
        this.statusCode = statusCode;
    }
}