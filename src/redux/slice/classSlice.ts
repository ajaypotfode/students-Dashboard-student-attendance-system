import { generateClassQrAPI, getActiveClassesAPI, getClassAttendenceSummaryAPI, getClassesAPI } from '@/service/classApiService'
import type { ActiveClassResponse, AttendanceSummaryParamsType, ClassResponseType, GetAttendenceSummaryResponse, InitialStateType, QrResponseType } from '@/types/ClassTypes'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'

export const getClasses = createAsyncThunk<ClassResponseType, void, { rejectValue: string }>('getClasses', async (_, { rejectWithValue }) => {
    try {
        const response = await getClassesAPI()
        return response
    } catch (error) {
        const err = error as AxiosError<{ message: string }>
        return rejectWithValue(err.response?.data?.message || "Failed To Fetch Classes!!")
    }
})


export const getActiveClasses = createAsyncThunk<ActiveClassResponse, void, { rejectValue: string }>('getActiveClasses', async (_, { rejectWithValue }) => {
    try {
        const response = await getActiveClassesAPI()
        return response
    } catch (error) {
        const err = error as AxiosError<{ message: string }>
        return rejectWithValue(err.response?.data?.message || "Failed To Fetch Active Classes!!")
    }
})



export const generateClassQr = createAsyncThunk<QrResponseType, string, { rejectValue: string }>('generateQr', async (classId, { rejectWithValue }) => {
    try {
        const response = await generateClassQrAPI(classId)
        return response
    } catch (error) {
        const err = error as AxiosError<{ message: string }>
        return rejectWithValue(err.response?.data?.message || "Failed To Generate Qr!!")
    }
})



export const getAttendenceSummary = createAsyncThunk<GetAttendenceSummaryResponse, AttendanceSummaryParamsType, { rejectValue: string }>(
    'getAttendenceSummary',
    async (data, { rejectWithValue }) => {
        try {
            const response = await getClassAttendenceSummaryAPI(data)
            return response
        } catch (error) {
            const err = error as AxiosError<{ message: string }>
            return rejectWithValue(err.response?.data?.message || "Failed To Get Attendence Summary!!")
        }
    })




const initialState: InitialStateType = {
    activeClasses: [],
    attendenceSummary: null,
    allClasses: [],
    qrData: { qrToken: "", classData: null },
    currentClassId: ''
}

const classDataSlice = createSlice({
    name: 'classData',
    initialState,
    reducers: {
        setClassId: (state, action) => {
            state.currentClassId = action.payload
            // state.loginData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getClasses.fulfilled, (state, action) => {
                state.allClasses = action.payload.result || []
            })
            .addCase(getActiveClasses.fulfilled, (state, action) => {
                state.activeClasses = action.payload.result || []
            })
            .addCase(generateClassQr.fulfilled, (state, action) => {
                state.qrData.classData = action.payload.result || null
                state.qrData.qrToken = action.payload.qrtoken || ""
            })
            .addCase(getAttendenceSummary.fulfilled, (state, action) => {
                state.attendenceSummary = action.payload.result || null
            })
    }
});
export const { setClassId } = classDataSlice.actions;
export default classDataSlice.reducer