import React from 'react'
import './Category.scss'

function Category(props) {
    const { nombre, children } = props
    return (
        <div className="category">
            <div className="header">
                <hr />
                <>{nombre.toUpperCase()}</>
                <hr />
            </div>
            {children}
        </div>
    )
}

export default Category
