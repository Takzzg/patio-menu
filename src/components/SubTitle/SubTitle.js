import React from 'react'
import './SubTitle.sass'

function SubTitle(props) {
    const { lights, table, children } = props
    return (
        <div className="subTitle">
            {lights ? (
                <img
                    className="lights-img"
                    src="../images/stringLights.png"
                    alt="stringlights"
                />
            ) : null}
            {children}
            {table ? (
                <img
                    className="table-img"
                    src="../images/table.png"
                    alt="stringlights"
                />
            ) : null}
        </div>
    )
}

export default SubTitle
