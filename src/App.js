import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Carritos, Contacto, Carta } from './pages'
import { Navbar } from './components'
import './App.scss'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
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
