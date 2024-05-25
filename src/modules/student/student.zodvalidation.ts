import { z } from 'zod';

// Define the UserName Zod Zodschema
const userNameZodSchema = z.object({
  firstName: z
    .string()
    .max(20, 'First Name can not be more than 20')
    .regex(/^[A-Z][a-z]*$/, 'First name is not in capitalize format'),
  middleName: z.string().optional(),
  lastName: z.string().regex(/^[A-Za-z]+$/, 'Last name is not valid'),
});

// Define the Guardian Zod Zodschema
const guardianZodSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Define the LocalGuardian Zod Zodschema
const localGuardianZodSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Define the Student Zod Zodschema
const studentZodSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: userNameZodSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().optional(),
  email: z.string().email('Email is not valid'),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+']).optional(),
  presentAddress: z.string(),
  parmanentAddres: z.string(),
  guardian: guardianZodSchema,
  localGuardian: localGuardianZodSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']),
  // isDeleted: z.boolean(),
});

export default studentZodSchema;