import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (credentials) => {
    const user = await authService.login(credentials);
    return user;
  }
);

export const profileThunk = createAsyncThunk("auth/profile", async () => {
  const response = await authService.profile();
  console.log("*********************");
  console.log(response)
  console.log("*********************");
  console.log("*********************");
  return response;
});

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});

export const registerThunk = createAsyncThunk("auth/register", async(credentials) => {
    const user = await authService.register(credentials);
    return user;
});

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    const updatedUser = await authService.updateUser(user);
    console.log("hiiiiiiiiiiiiiiiiii");
    console.log("hiiiiiiiiiiiiiiiiii");
    console.log(updatedUser);
    console.log("hiiiiiiiiiiiiiiiiii");
    console.log("hiiiiiiiiiiiiiiiiii");
    return updatedUser;
  }
);
