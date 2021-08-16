import { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from 'react-router-dom'
import { Home, Carritos, Carta } from './pages'
import { Navbar, BgOverlay } from './components'
import './App.sass'

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
                <BgOverlay>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/carritos" component={Carritos} />
                        <Route path="/carritos/:nombre" component={Carta} />
                    </Switch>
                </BgOverlay>
            </div>
        </Router>
    )
}

export default App
