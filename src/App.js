import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home, Carritos, Contacto, Carta } from './pages'

function App() {
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
            </div>
        </Router>
    )
}

export default App
