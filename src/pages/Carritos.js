import React from 'react'
import { Link } from 'react-router-dom'
import dataCarritos from '../dataCarritos'

function Carritos() {
    return (
        <>
            {dataCarritos.map((carr) => (
                <Link key={carr.nombre} to={`/carritos/${carr.nombre}`}>
                    {carr.nombre}
                </Link>
            ))}
        </>
    )
}

export default Carritos
