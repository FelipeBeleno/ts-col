import { TableDynamic } from "../components/TableDynamic"

const DepartamentoPage = () => {


    const headers = [
        {
            label: 'Nombre', keyAccess: 'name'
        }, {
            label: 'Población', keyAccess: 'population'
        },
        {
            label: 'Municipios', keyAccess: 'municipalities'
        },
        {
            label: 'Superficie', keyAccess: 'surface'
        },
        {
            label: 'Prefijo telefonico', keyAccess: 'phonePrefix'
        }
    ]

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <TableDynamic headers={headers} accessPath="Department" search={true} accessPathSearch="Department/name/" />
            </div>


        </div>
    )
}

export default DepartamentoPage