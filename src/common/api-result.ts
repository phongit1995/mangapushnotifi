import { HttpStatus } from '@nestjs/common';

export enum ApiStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}
export class ApiResult<T> {
    public status: ApiStatus = ApiStatus.ERROR;
  
    public code: number;
  
    public errorCode: string;
  
    public message: string;
  
    public data: T;
    public success(data?: T, message?: string) {
      this.status = ApiStatus.SUCCESS;
      this.code = HttpStatus.OK;
      if (message) { this.message = 'OK'; }
      this.data = data;
  
      return this;
    }
  
    public setMessage(message: string) {
      this.message = message;
  
      return this;
    }
  
    public error(message: string, code: number=400, errorCode?: string) {
      this.status = ApiStatus.ERROR;
      this.errorCode = errorCode;
      this.message = message;
      this.code = code;
  
      return this;
    }
  }
  