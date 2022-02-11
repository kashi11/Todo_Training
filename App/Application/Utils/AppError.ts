export default class AppError extends Error {
  public status: number;

  constructor(message: any, status: number) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.status = status || 500;
  }
}
