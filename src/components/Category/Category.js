import React from 'react'
import './Category.scss'

function Category(props) {
    const { nombre, children } = props

    const capitalized = (nombre) => {
        var splitStr = nombre.toLowerCase().split('_')
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
        }
        return splitStr.join(' ')
    }

    return (
        <div className="category">
            <div className="header">
                <hr />
                {capitalized(nombre)}
                <hr />
            </div>
            <div className="children">{children}</div>
        </div>
    )
}

export default Category
