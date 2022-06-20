import {BrowserRouter, Route, Routes } from 'react-router-dom'
/*import {BrowserRouter, Route, Switch } from 'react-router-dom'
import PageNotFound from './pages/pagenotfound/PageNotFound'*/
import Home from './pages/home'
import Queue from './pages/queue'

{/*
const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route {...rest} render={props=>(
        <Layout><Component {...props}></Component></Layout>
    )}></Route>
)
    */}
const App = () => {

    return (
        <BrowserRouter>

            <Routes>

                {/* Frontend 
                <Route exact={true} path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/queue" component={Queue} />*/}

                <Route exact={true} path="/" element={<Home/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/queue" element={<Queue/>} />
            </Routes>

        </BrowserRouter>

    )
}

export default App