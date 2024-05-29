import { RequestHandler } from 'express';
import { userService } from './user.service';
import sendRespone from '../../app/utils/sendRespone';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';

const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { students: studentData, password } = req.body;

  // const { value, error } = studentValidationSchema.validate(studentData);

  // const zodParsedData = studentZodSchema.parse(studentData);

  // if (error) {
  //   return res.status(500).json({
  //     success: true,
  //     message: 'student is failed to validate',
  //     data: error,
  //   });
  // }

  const result = await userService.createStudentIntoDb(password, studentData);

  // send response

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'user is created successfully',
    data: result,
  });
});

export const userController = {
  createStudent,
};
