export type TerrorSource = {
  path: string | number;
  message: string;
}[];

export type TgenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TerrorSource;
};
