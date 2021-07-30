import React from 'react'

function Category({ nombre, children }) {
    return (
        <div>
            <p>{nombre}</p>
            {children}
        </div>
    )
}

export default Category
