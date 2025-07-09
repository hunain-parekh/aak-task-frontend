export interface APIError {
  status: number;
  data: {
    [key: string]: string[] | string;
  };
}
