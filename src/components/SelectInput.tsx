
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

interface SelectInputProps {
    getClassId({ classId }: { classId: string }): void;
    fetchClassData(): void,
    classData: ClassResult[] | ActiveClassType[]
}




export const SelectInput: React.FC<SelectInputProps> = ({ getClassId, fetchClassData, classData }) => {


    useEffect(() => {
        fetchClassData()
    }, [])
    return (
        <Select onValueChange={(value) => getClassId({ classId: value })} >
            <SelectTrigger className="w-full text-white">
                <SelectValue placeholder="Select a Class" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {/* <SelectLabel>Role</SelectLabel> */}
                    {classData && classData.map((c, index) => (
                        <SelectItem key={index} value={c.classId._id}>{`${c.classId.className}-(${c.classId.time})`}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
