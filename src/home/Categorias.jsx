import './Categorias.css';
import React, { useEffect, useState } from "react";
function Categorias() {
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        readService();
    }, []);

    const readService = async () => {
        const serviceRoute = 'https://servicios.campus.pe/categorias.php';
        fetch(serviceRoute)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setCategoriesList(data);
            })
    }

    const drawTable = () => {
        return (
            <div className="container p-4">
                <h2 className='text-center p-4'>Categorias de productos</h2>
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-4">
                    {categoriesList.map(item =>
                        <div className="card h-100">
                            <div className='card-body'>
                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </a>
                                <h4>{item.nombre}</h4>
                                <p>{item.descripcion}</p>
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

export default Categorias