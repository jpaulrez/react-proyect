import './Productos.css';
import React, { useEffect, useState } from "react";

function Productos() {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        readService();
    }, []);


    const readService = async () => {
        const serviceRoute = 'https://servicios.campus.pe/servicioproductostodos.php';
        fetch(serviceRoute)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setProductsList(data);
            })
    }

    const drawTable = () => {
        return (
            <div className="container p-4">
                <h2>Productos</h2>
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-4">
                    {productsList.map(item =>
                        <div className="col" key={item.idproducto}>
                            <div className="card h-100">
                                <img src={"https://servicios.campus.pe/" + item.imagengrande}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">{item.nombre}</h4>
                                    <h5 className="card-title">{item.detalle}</h5>
                                    <span className="precio-lista">
                                        {item.preciorebajado !== "0"
                                            ? "(S/ " + parseFloat(item.precio).toFixed(2) + ")"
                                            : ""}
                                    </span>
                                    <p className="card-text">S/ {item.preciorebajado === "0"
                                        ? parseFloat(item.precio).toFixed(2)
                                        : parseFloat(item.preciorebajado).toFixed(2)}</p>


                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        )
    }

    return (
        <>
            {drawTable()}
        </>
    )
}

export default Productos