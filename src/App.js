import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home, Carritos, Contacto, Carta } from './pages'
import { createCarritoItem } from './api'

function App() {
    const [carritoNombre, setNombre] = useState('')
    const [carritos, setCarritos] = useState([])

    const handleCarritoNombreChange = (event) => {
        console.log(event.target.value)
        setNombre(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createCarritoItem(carritoNombre).then((res) => {
            console.log(`Carrito ${carritoNombre} agregado!`)
        })
        resetInputField()
    }

    const resetInputField = () => {
        setNombre('')
    }

    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/carritos">Carritos</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/carritos" component={Carritos} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route path="/carritos/:nombre" component={Carta} />
                </Switch>

                <form action="GET">
                    <input
                        type="text"
                        name={carritoNombre}
                        value={carritoNombre}
                        placeholder="Nombre del Carrito"
                        onChange={handleCarritoNombreChange}
                    />
                    <input
                        type="submit"
                        value="Agregar"
                        onClick={handleSubmit}
                    />
                </form>
            </div>
        </Router>
    )
}

export default App

// fnAEPRKPMtAAQ__Fn2iGSCLqDWiw1tcnL8_beGO_
