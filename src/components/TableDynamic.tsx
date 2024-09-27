import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue, Input, Button } from "@nextui-org/react";
import { Header } from "../models/HeadersInterface";
import { axiosInstance } from "../helpers/axiosInstance";
import { Department, DepartmentResponse } from "../models/DepartamentResponse";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useSnackbar } from "notistack";

interface Props {
    headers: Header[];
    accessPath: string;
    search: boolean;
    accessPathSearch?: string;
}

export const TableDynamic: FC<Props> = ({ headers, accessPath, accessPathSearch }) => {


    const { enqueueSnackbar } = useSnackbar();

    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;
    const [data, setData] = useState<DepartmentResponse | null>(null);

    const [inputValue, setInputValue] = useState('');

    const getData = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get<DepartmentResponse>(`${accessPath}/pagedList?Page=${page}&PageSize=${rowsPerPage}`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                enqueueSnackbar("Error en carga de información", { variant: 'error' })
            } finally {
                setIsLoading(false);
            }
        },
        [page, accessPath],
    );


    useEffect(() => {
        getData();
    }, [page, getData]);


    const pages = data?.totalRecords ? Math.ceil(data.totalRecords / rowsPerPage) : 0;


    const items = useMemo(() => {
        if (!data || !Array.isArray(data.data)) {
            return [];
        }
        return data.data;
    }, [data]);


    async function handleSubmit() {

        if (inputValue.trim().length === 0) {
            getData()
        }
        try {

            const response = await axiosInstance.get<Department>(`${accessPathSearch}/${inputValue}`);



            if (Array.isArray(response.data) && response.data.length === 0) {
                enqueueSnackbar("Sin coincidencias", { variant: 'warning' })

            }
            setData({
                page: 1,
                pageSize: 1,
                totalRecords: 1,
                pageCount: 1,
                data: response.data,
            });




        } catch (e) {
            enqueueSnackbar("Error en carga de información", { variant: 'error' })

        }

    }


    return (
        <>

            <Table
                aria-label="Tabla de departamentos"
                topContent={<div className="flex flex-row">
                    <Input
                        value={inputValue}
                        placeholder="Busqueda por nombre"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button isIconOnly color="primary" onClick={handleSubmit}>
                        <MagnifyingGlass />
                    </Button>
                </div>
                }
                bottomContent={
                    pages > 0 ? (
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="primary"
                                page={page}
                                total={pages}
                                onChange={(newPage) => setPage(newPage)}
                            />
                        </div>
                    ) : null
                }
            >
                <TableHeader>
                    {headers.map((h) => (
                        <TableColumn key={h.keyAccess}>{h.label}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody
                    loadingContent={<Spinner />}
                    loadingState={isLoading ? "loading" : "idle"}
                    items={items}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {headers.map((h) => (
                                <TableCell key={h.keyAccess}>{getKeyValue(item, h.keyAccess)}</TableCell>
                            ))}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </>
    );
};
