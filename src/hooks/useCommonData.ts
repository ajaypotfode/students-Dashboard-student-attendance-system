import { useAppDispatch, useAppSelector } from '@/redux/reduxHook'
import { setClassSearch, setSidebar, setTodaysDateData } from '@/redux/slice/commonSlice'
import { format } from 'date-fns'
// import React, { useCallback } from 'react'

const UseCommonData = () => {
    const { classSearch, sidebar, pages,todaysDate } = useAppSelector(state => state.common)
    // const {debouncing,search,}=UseCommonData()
    const dispatch = useAppDispatch()


    // const debouncing = <Func extends (search?: string, pageNum?: number) => void>(func: Func, delay: number) => {

    //     let timer: ReturnType<typeof setTimeout>
    //     return (search?: string, pageNum?: number) => {
    //         clearTimeout(timer)

    //         timer = setTimeout(() => {
    //             func(search, pageNum)
    //         }, delay)
    //     }
    // }


    const getClassSearchValue = (value: string) => {
        dispatch(setClassSearch(value))
        // console.log("value is :",value);

    }
    // const debouncingClass=useCallback(

    // )

    const handleSidebar = () => {
        dispatch(setSidebar())
    }
    

    const todaysDateData = () => {
        const currentDate = new Date()

        const date = format(currentDate, 'do MMMM yyyy')
        const time = format(currentDate, 'h:mm:ss a')

        dispatch(setTodaysDateData({ date, time }))
    }

    



    return {
        // debouncing,
        // userSearch,
        classSearch,
        // getUserSearchValue,
        getClassSearchValue,
        sidebar,
        handleSidebar,
        pages,
        todaysDateData,
        todaysDate
    }
}

export default UseCommonData