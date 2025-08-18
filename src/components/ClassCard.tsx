import { Card, CardContent } from "./ui/card";

interface ClassCardProps {
    className: string;
    trainer: string;
    time: string;
}

export const ClassCard: React.FC<ClassCardProps> = ({ className, trainer, time }) => {
    return (
        <Card className="w-full bg-[#111827] border border-[#1F2937] p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
            <CardContent className="p-0">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-base sm:text-lg font-semibold text-white">{className}</h2>
                    <p className="text-xs sm:text-sm text-gray-400">{time}</p>
                </div>

                {/* Trainer Info */}
                <p className="mt-1 text-sm text-gray-300">{trainer}</p>
            </CardContent>
        </Card>
    );
};