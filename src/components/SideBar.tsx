
import {
    Avatar,
    BreadcrumbItem,
    Breadcrumbs,
    Button,
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image,

} from "@nextui-org/react";
import { FC, ReactNode, createElement, useEffect, useState } from "react";

import {
    ArrowBendRightDown,
    Book,
    Buildings,
    ChartPie,
    List,
    MapPin,
    User,
} from "@phosphor-icons/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../slices/loginSlice";
import { useSnackbar } from "notistack";





const menus = [
    { name: "Dashboard", link: "/", icon: ChartPie },
    { name: "Presidentes", link: "/presidents", icon: User },
    { name: "Departamentos", link: "/departaments", icon: Buildings },
    { name: "Constitución", link: "/constitution", icon: Book },
    { name: "Mapas", link: "/maps", icon: MapPin },

];

type Props = {
    children: ReactNode;
};

export const SideBar: FC<Props> = ({ children }) => {

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const [open, setOpen] = useState(false);

    const login = useSelector((state: RootState) => state.login);

    const dispatch = useDispatch()


    const [isActivate, setIsActivate] = useState({
        name: "",
        link: "",
    });
    const location = useLocation()



    useEffect(() => {


        let [act] = menus.filter((m) => m.link === location.pathname);
        setIsActivate({
            link: act?.link,
            name: act?.name,
        });


    }, [location])




    return <div className="flex">
        <div
            className={`${open ? "xs:w-72 " : "w-0"} 
             ${open ? "sm:w-72 " : "w-0"}
             ${open ? "md:w-72" : "md:w-20"} 
             ${open ? "lg:w-72" : "lg:w-20"}
             ${open ? "xl:w-72" : "xl:w-20"} 
             ${open ? "2xl:w-72" : "2xl:w-24"} 
             duration-300 h-screen bg-white shadow-2xl
            `}
        >
            <div
                className={`p-8 flex gap-x-4 ${open ? "justify-start" : "justify-center"
                    } items-center`}
            >
                <div className={`${open ? "" : "xs:hidden"}`}>
                    <Image
                        src="https://flagcdn.com/co.svg"
                        width={50}
                    />
                </div>
                {open && (
                    <h1 className="origin-left font-medium text-md">Colombia App</h1>
                )}
            </div>

            <div
                className={`p-8 flex flex-col gap-5 gap-x-4 ${open ? "justify-start" : "justify-center"
                    }  ${open ? "" : "xs:hidden"} items-center`}
            >
                {menus.map((m, i) => {
                    return !open ? (

                        <Button
                            className="duration-300"
                            key={i}
                            isIconOnly
                            variant={isActivate.name === m.name ? "solid" : "bordered"}
                            color="primary"
                            aria-label={m.name}
                            onClick={() => {
                                navigate(m.link)
                            }}
                        >
                            {createElement(m.icon)}
                        </Button>

                    ) : (

                        <Button
                            className="duration-300 w-full"
                            key={i}
                            fullWidth
                            variant={isActivate.name === m.name ? "solid" : "bordered"}
                            color="primary"
                            aria-label={m.name}
                            startContent={createElement(m.icon)}
                            onClick={() => {
                                navigate(m.link)
                            }}
                        >
                            {m.name}
                        </Button>

                    );
                })}
            </div>
        </div>

        <div className="w-full h-screen overflow-auto bg-gray-100 ">
            <div className="w-full flex flex-row justify-between items-center bg-gray-100 sticky top-0">
                <div className="flex flex-row gap-1 justify-start items-center pt-5 pb-7">
                    <Button
                        size="lg"
                        onClick={() => setOpen(!open)}
                        isIconOnly
                        variant="light"
                        aria-label="Like"
                    >
                        <List />
                    </Button>
                </div>

                <div className="flex flex-row gap-1 justify-start items-center pt-5 pb-7">


                    <Divider style={{ height: "2.5rem" }} orientation="vertical" />

                    <div className="flex ">
                        <Avatar src={''} size="md" />
                        <Dropdown>
                            <DropdownTrigger>


                                <Button endContent={<ArrowBendRightDown />} variant="light">

                                    Hola,<b>{login.name}</b>{" "}
                                </Button>
                            </DropdownTrigger>

                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem
                                    onClick={() => {
                                        dispatch(logout())
                                        enqueueSnackbar('Cierre de sesión exitoso', { variant: 'success' })

                                    }}
                                    key="delete"
                                    className="text-danger"
                                    color="danger"
                                    textValue="Cierre de sessión"
                                >
                                    Cierre de sesión
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            <div className="px-5 bg[rgb(250, 251, 251)]">
                <div className="grid grid-cols-12 gap-5 w-full">
                    <div className="col-span-12 flex flex-col  gap-5">
                        <div>
                            <h1 className="text-2xl font-black">{isActivate.name}</h1>
                        </div>
                        <div>
                            <Breadcrumbs isDisabled>
                                <BreadcrumbItem>Inicio</BreadcrumbItem>
                                <BreadcrumbItem>{isActivate.name}</BreadcrumbItem>
                            </Breadcrumbs>
                        </div>
                    </div>
                    <div className="col-span-12">

                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>

};
