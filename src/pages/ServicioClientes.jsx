import { useEffect, useState } from 'react'
function ServicioClientes() {
    const [customerServiceList, setCustomerServiceList] = useState([]);

    useEffect(() => {
        readService();
    }, []);


    const readService = async () => {
        const serviceRoute = 'https://servicios.campus.pe/servicioclientes.php';
        fetch(serviceRoute)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setCustomerServiceList(data);
            })
    }

    const drawTable = () => {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Nombres</th>
                        <th>Cargo</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>

                    {customerServiceList.map( item =>
                        <tr>
                            <td>{item.idcliente}</td>
                            <td>{item.nombres}</td>
                            <td>{item.cargo}</td>
                            <td>{item.direccion}</td>
                            <td>{item.telefono}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        )
    }

    return (
        <div className='container p-4'>
            <h2>Clientes</h2>
            {drawTable()}
        </div>
    )

}

export default ServicioClientes