import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/">Home</Link>
                <Link to="/carritos">Carritos</Link>
                <Link to="/contacto">Contacto</Link>

                <Switch>
                    <Route exact={true} path="/">
                        <Home />
                    </Route>
                    <Route path="/carritos">
                        <Carritos />
                    </Route>
                    <Route path="/contacto">
                        <Contacto />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

const Home = () => {
    return <h1>Home</h1>
}
const Carritos = () => {
    return <h1>Carritos</h1>
}
const Contacto = () => {
    return <h1>Contacto</h1>
}

export default App
