import { useCallback, useEffect, useState } from "react"
import { axiosInstance } from "../helpers/axiosInstance"
import { PresidentIterface } from "../models/PresidentInterface";



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';

import { EffectCards } from 'swiper/modules';
import { Avatar, Card, CardBody, CardFooter, CardHeader, Image, Skeleton } from "@nextui-org/react";


const PresidentesPage = () => {



    const [presidentSelected, setPresidentSelected] = useState<PresidentIterface>();
    const [presidents, setPresidents] = useState<PresidentIterface[]>();


    const getData = useCallback(
        async () => {
            const { data } = await axiosInstance.get<PresidentIterface[]>('president');

            setPresidents(data)
        },
        [],
    )


    useEffect(() => {
        getData()
    }, [])


    return (
        <div>


            <div className="grid grid-cols-12 gap-5">


                <div className="xs:col-span-12 sm:col-span-12 col-span-4">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        loop={true}
                    >
                        {
                            presidents?.map((p, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="w-full h-full flex flex-col justify-between"
                                        onClick={() => setPresidentSelected(p)}
                                    >
                                        <div className="w-full h-3/4">
                                            <Image
                                                src={p.image ? p.image : 'https://via.placeholder.com/240x320.png?text=No+Image'}
                                                className="object-cover w-full h-full"
                                                alt={p.name}
                                                width='260px'
                                                height='305px'

                                            />
                                        </div>
                                        <p className="text-white text-sm text-center p-3 bg-black bg-opacity-50 w-full">
                                            {p.name + ' ' + p.lastName}
                                        </p>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>


                </div>
                <div className="col-span-8 xs:col-span-12 sm:col-span-12">

                    {
                        presidentSelected
                            ? <Card >
                                <CardHeader className="justify-between">
                                    <div className="flex gap-5">
                                        <Avatar isBordered radius="full" size="md" src={presidentSelected.image} />
                                        <div className="flex flex-col gap-1 items-start justify-center">
                                            <h4 className="text-small font-semibold leading-none text-default-600">{presidentSelected.name + ' ' + presidentSelected.lastName} </h4>
                                            <h5 className="text-small tracking-tight text-default-400">{presidentSelected.startPeriodDate} - {presidentSelected.endPeriodDate ? presidentSelected.endPeriodDate : 'Actualmente'}</h5>
                                        </div>
                                    </div>

                                </CardHeader>
                                <CardBody className="px-3 py-0 text-small text-default-400">
                                    <p>
                                        {presidentSelected.description}
                                    </p>

                                </CardBody>
                                <CardFooter className="gap-3">
                                    <div className="flex gap-1">
                                        <p className="font-semibold text-default-400 text-small">Partido Politico</p>
                                        <p className=" text-default-400 text-small">{presidentSelected.politicalParty}</p>
                                    </div>
                                </CardFooter>
                            </Card>
                            :
                            <Card className=" h-full space-y-5 p-4" radius="lg">

                                <Skeleton className="rounded-lg">
                                    <div className="h-24 rounded-lg bg-default-300"></div>
                                </Skeleton>
                                <div className="space-y-3">
                                    <Skeleton className="w-3/5 rounded-lg">
                                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-4/5 rounded-lg">
                                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-2/5 rounded-lg">
                                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                    </Skeleton>

                                    <Skeleton className="w-3/5 rounded-lg">
                                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-4/5 rounded-lg">
                                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-2/5 rounded-lg">
                                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                    </Skeleton>
                                    <Skeleton className="w-3/5 rounded-lg">
                                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-4/5 rounded-lg">
                                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                    </Skeleton>
                                    <Skeleton className="w-2/5 rounded-lg">
                                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                    </Skeleton>

                                </div>
                            </Card>
                    }



                </div>


            </div>

        </div>
    )
}

export default PresidentesPage