import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CommonInitialState {
    classSearch: string,
    // userSearch: string,
    // search: string,
    error: { [key: string]: string },
    loading: { [key: string]: boolean },
    currentClass: string | null,
    sidebar: boolean,
    pages: {
        pageNum: number,
        totalPages: number
    },
    todaysDate: {
        date: string,
        time: string
    }
}

const initialState: CommonInitialState = {
    // search: "",
    classSearch: "",
    // userSearch: "",
    error: {},
    loading: {},
    currentClass: null,
    sidebar: true,
    pages: { pageNum: 0, totalPages: 0 },
    todaysDate: {
        date: "",
        time: ""
    }
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setClassSearch: (state, action) => {
            state.classSearch = action.payload
        },
        setCurrentClass: (state, action) => {
            state.currentClass = action.payload
        },
        setSidebar: (state) => {
            state.sidebar = !state.sidebar
        },
        clearPagesValue: (state) => {
            state.pages = { pageNum: 0, totalPages: 0 }
        },
        setTodaysDateData: (state, action) => {
            state.todaysDate = action.payload
        }
        // getSignUpData: (state, action) => {
        //     state.signupData = action.payload
        // },
        // getLoginData: (state, action) => {
        //     state.loginData = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending, (state, action) => {
                const key = action.type.replace('/pending', '')
                state.loading[key] = true
                delete state.error[key]
                state.pages = { pageNum: 0, totalPages: 0 }
                // console.log("get Response In Matcher :", action.payload);

                //  const key=action.type.s
            })
            .addMatcher(isFulfilled, (state, action) => {
                const key = action.type.replace('/fulfilled', '')
                state.loading[key] = false;
                delete state.error[key]

                state.pages =
                    (action.payload as { pages: { pageNum: number, totalPages: number } })?.pages
                    || { pageNum: 0, totalPages: 0 }

                // console.log("get Response In Matcher :", action.payload);
            })
            .addMatcher(isRejected, (state, action) => {
                const key = action.type.replace('/rejected', '');
                console.log("failed Key Is :", key);

                state.loading[key] = false;

                if (typeof action.payload === 'string') {
                    state.error[key] = action.payload

                    toast.error(`${action.payload}`)
                }
                state.pages = { pageNum: 0, totalPages: 0 }
            })
    }
});
export const { setClassSearch, setCurrentClass, setSidebar, clearPagesValue, setTodaysDateData } = commonSlice.actions;
export default commonSlice.reducer