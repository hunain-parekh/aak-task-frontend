import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  LoginPayload,
  LoginResponse,
  User,
  SignupPayload,
} from "../../types/auth.type";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth/`,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<void, SignupPayload>({
      query: (credentials) => ({
        url: "signup/",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (credentials) => ({
        url: "login/",
        method: "POST",
        body: credentials,
      }),
    }),
    getMe: builder.query<User, void>({
      query: () => ({
        url: "me/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // better to manage token in state
        },
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetMeQuery } = authApi;
