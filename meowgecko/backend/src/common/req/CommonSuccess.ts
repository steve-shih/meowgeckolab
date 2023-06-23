import { CustomError } from './CustomError';

interface SuccessResponse {
  code: string;
  message: string;
  data?: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const successResponse: SuccessResponse = {
  code: 'SUCCESS',
  message: 'Operation completed successfully',
  data: {
    // any data you want to include
  },
};

export async function successReq(data: any): Promise<SuccessResponse> {
  try {
    return {
      code: 'SUCCESS',
      message: 'Operation completed successfully',
      data,
    };
  } catch (error) {
    throw new CustomError('ERR01', 'An error occurred');
  }
}
