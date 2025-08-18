// import React from 'react'

import { useAppDispatch, useAppSelector } from "@/redux/reduxHook"
import { generateClassQr, getActiveClasses, getAttendenceSummary, getClasses, setClassId } from "@/redux/slice/classSlice";

const UseClassData = () => {
    const dispatch = useAppDispatch();
    const { allClasses, activeClasses, attendenceSummary, qrData, currentClassId } = useAppSelector(state => state.classData)


    const fetchClasses = () => {
        dispatch(getClasses());
    }

    const fetchActiveClasses = () => {
        dispatch(getActiveClasses());
    }

    const generateQr = ({ classId }: { classId: string }) => {
        dispatch(generateClassQr(classId))
    }


    const fetchAttendenceSummary = ({ pageNum, classId }: { pageNum?: number, classId?: string }) => {
        const alternateClassId = classId || currentClassId
        dispatch(getAttendenceSummary({ pageNum, classId: alternateClassId }))
        if (classId) {
            dispatch(setClassId(classId))
        }
    }


    return {
        fetchClasses,
        fetchActiveClasses,
        generateQr,
        fetchAttendenceSummary,
        allClasses,
        activeClasses,
        attendenceSummary,
        qrData,

    }
}

export default UseClassData