import { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from 'react-router-dom'
import { Home, Carritos, Contacto, Carta } from './pages'
import { Navbar } from './components'
import './App.scss'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

function App() {
    return (
        <Router>
            <ScrollToTop />
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
