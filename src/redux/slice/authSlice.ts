import { createUserAPI, isUserLoginAPI, loginUserAPI, logoutUserAPI } from '@/service/authApiService'
import type { CommonResponse, InitialStateType, IsLoginUserResponse, LoginData, LoginResponse, SignupResponse, UserData } from '@/types/AuthTypes'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'

export const loginUser = createAsyncThunk<LoginResponse, LoginData, { rejectValue: string }>('loginUser', async (loginData, { rejectWithValue }) => {
    try {
        const response = await loginUserAPI(loginData)
        return response
    } catch (error) {
        const err = error as AxiosError<{ message: string }>
        return rejectWithValue(err.response?.data?.message || "Failed To Login User!!")
    }
})

export const signupUser = createAsyncThunk<SignupResponse, UserData, { rejectValue: string }>("signupUser", async (signupData, { rejectWithValue }) => {
    try {
        const response = await createUserAPI(signupData)
        return response
    } catch (error) {
        const err = error as AxiosError<{ message: string }>
        return rejectWithValue(err.response?.data?.message || "failed To Create User")
    }
})


export const logoutUser = createAsyncThunk<CommonResponse, void, { rejectValue: string }>('logoutUser', async (_, { rejectWithValue }) => {
    try {
        const response = await logoutUserAPI()
        return response
    } catch (error) {
        const err = error as AxiosError<{ message: string }>
        return rejectWithValue(err.response?.data?.message || "Failed To Logout User!!")
    }
})



export const isUserLoggedIn = createAsyncThunk<IsLoginUserResponse, void, { rejectValue: string }>('isLoginUser', async (_, { rejectWithValue }) => {
    try {
        const response = await isUserLoginAPI()

        return response
    } catch (error) {
        const err = error as AxiosError<{ message: string }>
        return rejectWithValue(err.response?.data?.message || "Failed To get User login or not!!")
    }
})


const initialState: InitialStateType = {
    // signupData: { userName: "", role: "", email: "", password: "", image: "", contactNo: "" },
    // loginData: { email: "", password: "" },
    isUserLogin: undefined,
    user: null
    //     signupData: { userName: "", role: "", email: "", password: "", image: "", contactNo: "" },
    //     loginData: { email: "", password: "" },
    //     isUserLogin: undefined, // Use undefined to indicate unknown initially
    //     user: null,
    //     isAuthLoading: false,   // Add this line
    // };
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getSignUpData: () => {
            // state.signupData = action.payload
        },
        getLoginData: () => {
            // state.loginData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state) => {
                // state.loginData = { email: "", password: "" }
                state.isUserLogin = true
            })
            .addCase(signupUser.fulfilled, () => {
                // state.signupData = { userName: "", role: "", email: "", password: "", image: "", contactNo: "" }
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isUserLogin = false
                state.user = null
            })
            .addCase(isUserLoggedIn.fulfilled, (state, action) => {
                state.isUserLogin = true
                state.user = action.payload.result || null
            })
            .addCase(isUserLoggedIn.rejected, (state) => {
                state.isUserLogin = false;
                state.user = null;
                // state.isAuthLoading = false;
            })
    }
});
export const { getSignUpData, getLoginData } = authSlice.actions;
export default authSlice.reducer