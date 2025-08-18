export type UserData = {
    role: 'admin' | 'trainer' | string,
    userName: string,
    email: string
    image: string
    password: string
    contactNo: string
}

export type LoginData = {
    email: string,
    password: string
}

export interface CommonResponse {
    message: string,
    success: boolean,
    error?: string
}


export interface SignupResponse extends CommonResponse {
    result?: {
        role: string,
        userName: string,
        email: string,
        image: string,
        contactNo: string,
        _id: string,
        createdAt: string,
        updatedAt: string,
        __v: number
    },
    error?: string
}


export interface LoginResponse extends SignupResponse {
    token: string
}

export interface IsLoginUserResponse extends CommonResponse {
    result?: {
        userId: string,
        role: string,
        status: string,
        iat?: number,
        exp?: number
    }
}


export interface InitialStateType {
    // signupData: UserData;
    // loginData: LoginData;
    isUserLogin: boolean | undefined;
    // role: string
    user: {
        role: string,
        status: string,
        userId: string
    } | null
}