import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC } from "react";


interface Props {
    color: string;
    title: string;
    description: string;
}

export const CardInfo: FC<Props> = ({ color, title, description }) => {
    return (
        <Card className="xs:col-span-3 sm:col-span-3 bg-white shadow-lg rounded-lg overflow-hidden col-span-1">
            <CardHeader className={`bg-[${color}] text-white p-4`}>
            </CardHeader>
            <CardBody className="flex flex-col justify-between">
                <p className="text-3xl font-bold">{title}</p>
                <p className="text-gray-600"><b>{description}</b></p>
            </CardBody>
        </Card>
    )
}
