
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { ActiveClassType, ClassResult } from "@/types/ClassTypes";
import React, { useEffect } from "react";
import { Spinner } from "./Spinner";

interface SelectInputProps {
    getClassId({ classId }: { classId: string }): void;
    fetchClassData(): void,
    classData: ClassResult[] | ActiveClassType[],
    loading: { [key: string]: boolean }
}




export const SelectInput: React.FC<SelectInputProps> = ({ getClassId, fetchClassData, classData, loading }) => {


    useEffect(() => {
        fetchClassData()
    }, [])
    return (
        <Select onValueChange={(value) => getClassId({ classId: value })} >
            <SelectTrigger className="w-full text-white bg-gray-800 ">
                <SelectValue placeholder="Select a Class" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900">
                <SelectGroup className="text-white">
                    {/* <SelectLabel>Role</SelectLabel> */}
                    {loading['getActiveClasses'] ? <Spinner /> : (classData.map((c, index) => (
                        <SelectItem key={index} value={c.classId._id} >
                            {`${c.classId.className}-(${c.classId.time})`}
                        </SelectItem>
                    )))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
