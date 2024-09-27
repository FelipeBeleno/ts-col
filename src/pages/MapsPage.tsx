import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { MapInterface } from "../models/MapInterface";

export const MapsPage = () => {


    const [maps, setMaps] = useState<MapInterface[]>([]);

    const getData = useCallback(async () => {
        const response = await axiosInstance.get<MapInterface[]>('Map');
        setMaps(response.data);
    }, []);

    useEffect(() => {
        getData();
    }, []);


    return (


        <div className="grid grid-cols-2 gap-4">
            {
                maps.map((m) => {
                    return <div className="xs:col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                        <Card className="h-full p-5">
                            <CardHeader>
                                <h1 className="text-2xl font-bold">
                                    {m.name}
                                </h1>

                            </CardHeader>
                            <CardBody>
                                <p>{m.description}</p>
                                <Image
                                    src={m.urlImages[0]}
                                />
                            </CardBody>
                        </Card>
                    </div>
                })
            }

        </div>

    )
}

