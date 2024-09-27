import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { CountryInterface } from "../models/ColombiaInterface";
import LoaderAll from "../helpers/LoaderAll";
import { useSnackbar } from "notistack";
import { CardInfo } from "../components/CardInfo";


export const HomePage = () => {

    const { enqueueSnackbar } = useSnackbar();

    const [colombiaData, setColombiaData] = useState<CountryInterface>();

    const getData = useCallback(
        async () => {
            try {



                const { data } = await axiosInstance.get<CountryInterface>('Country/Colombia');
                setColombiaData(data);

            } catch (error) {
                enqueueSnackbar('Error en obtener la información', { variant: 'error' })
            }
        },
        [],
    )


    useEffect(() => {
        getData()
    }, [])


    return colombiaData ? (
        <div className="grid gri-col-12 gap-5">
            <div className="grid col-span-12 grid-cols-3 gap-5">


                <Card className="col-span-3">
                    <CardHeader className="bg-primary p-4">
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <div className="flex flex-row items-start justify-between">

                            <div>

                                <h1 className="text-3xl uppercase font-bold">Colombia</h1>
                            </div>
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl w-full"
                                src={colombiaData.flags[0]}
                                width={50}
                            />
                        </div>

                        {colombiaData.description}

                    </CardBody>
                </Card>


                <CardInfo
                    color="#FFD700"
                    description={`${colombiaData.population.toLocaleString('es-ES')} de habitantes`}
                    title="Población"
                />


                <CardInfo
                    color="#0033A0"
                    description={`${colombiaData.stateCapital}`}
                    title="Capital"
                />

                <CardInfo
                    color="#CE1126"
                    description={`${colombiaData.languages.toString()}`}
                    title="Idiomas"
                />



            </div>




        </div>
    ) : <LoaderAll />;
};