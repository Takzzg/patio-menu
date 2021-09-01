import React, { useState } from 'react'
import { Carrito, Category, Plato } from '../index'
import './SearchBar.sass'
import IndexCarritos from '../../dataCarritos/index.js'

function SearchBar(props) {
    const { onNavigate } = props
    const [input, setInput] = useState('')
    const [matches, setMatches] = useState({})

    const handleChange = (inputValue) => {
        let tempMatches = {}
        setInput(inputValue)

        if (inputValue !== '') {
            for (let carr in IndexCarritos) {
                for (let cat in IndexCarritos[carr].carta) {
                    let catName = cat.toLowerCase().split('_')
                    for (var i = 0; i < catName.length; i++) {
                        catName[i] =
                            catName[i].charAt(0).toUpperCase() +
                            catName[i].substring(1)
                    }
                    catName.join(' ')

                    if (
                        catName[0]
                            .toUpperCase()
                            .includes(inputValue.toUpperCase())
                    ) {
                        tempMatches[carr] = {}
                        tempMatches[carr][cat] = IndexCarritos[carr].carta[cat]
                    } else
                        for (let plato of IndexCarritos[carr].carta[cat]) {
                            if (
                                plato.nombre
                                    .toUpperCase()
                                    .includes(inputValue.toUpperCase()) ||
                                plato.desc
                                    .toUpperCase()
                                    .includes(inputValue.toUpperCase())
                            ) {
                                if (!tempMatches.hasOwnProperty(carr))
                                    tempMatches[carr] = {}
                                if (!tempMatches[carr].hasOwnProperty(cat))
                                    tempMatches[carr][cat] = []
                                tempMatches[carr][cat].push(plato)
                            }
                        }
                }
            }
        }
        setMatches(tempMatches)
    }

    const renderMatches = () =>
        Object.keys(matches).map((carr) => (
            <>
                <Carrito onClick={onNavigate} noDesc key={carr} carrId={carr} />
                {Object.keys(matches[carr]).map((cat) => (
                    <Category key={cat} nombre={cat}>
                        {matches[carr][cat].map((plato) => (
                            <Plato
                                key={`${carr}-${cat}-${plato.id}`}
                                plato={plato}
                            />
                        ))}
                    </Category>
                ))}
            </>
        ))

    return (
        <div className="search-container">
            <div id="results">
                <input
                    id="searchInput"
                    onChange={(e) => handleChange(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Buscar..."
                />
                {Object.keys(matches).length > 0 ? (
                    React.Children.toArray(renderMatches())
                ) : input !== '' ? (
                    <p>No se encontraron resultados para la busqueda</p>
                ) : null}
            </div>
        </div>
    )
}

export default SearchBar
