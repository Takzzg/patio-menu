import { useState } from 'react'
import { Category, Plato } from '../index'
import SearchIcon from '@material-ui/icons/Search'
import './SearchBar.sass'

function SearchBar(props) {
    const { carr, children } = props
    const [input, setInput] = useState('')
    const [matches, setMatches] = useState({})

    const handleChange = (inputValue) => {
        let tempMatches = {}
        setInput(inputValue)
        if (inputValue !== '') {
            for (let cat in carr.carta) {
                for (let plato in carr.carta[cat]) {
                    if (
                        carr.carta[cat][plato].nombre
                            .toUpperCase()
                            .includes(inputValue.toUpperCase()) ||
                        carr.carta[cat][plato].desc
                            .toUpperCase()
                            .includes(inputValue.toUpperCase())
                    ) {
                        if (!tempMatches.hasOwnProperty(cat))
                            tempMatches[cat] = []
                        tempMatches[cat].push(carr.carta[cat][plato])
                    }
                }
            }
        }
        setMatches(tempMatches)
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <SearchIcon />
                <input
                    onChange={(event) => handleChange(event.target.value)}
                    value={input}
                    className="icon"
                    type="text"
                    placeholder="Buscar..."
                />
            </div>
            {Object.keys(matches).length > 0 ? (
                Object.keys(matches).map((cat) => (
                    <Category key={cat} nombre={cat}>
                        {matches[cat].map((plato) => (
                            <Plato key={`${cat}-${plato.id}`} plato={plato} />
                        ))}
                    </Category>
                ))
            ) : (
                <>
                    <p>No se encontraron resultados para la busqueda</p>
                    {children}
                </>
            )}
        </div>
    )
}

export default SearchBar
