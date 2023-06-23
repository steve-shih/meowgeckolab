export class CustomError extends Error {
  code: string;
  message: string;

  constructor(code: string, message: string) {
    super();
    this.code = code;
    this.message = message;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}
