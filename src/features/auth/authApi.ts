import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
import type {
  LoginPayload,
  LoginResponse,
  MeResponse,
  SignupPayload,
} from "../../types/auth.type";

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
    getMe: builder.query<MeResponse, void>({
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
