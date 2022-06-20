import {BrowserRouter, Route, Routes } from 'react-router-dom'
/*import {BrowserRouter, Route, Switch } from 'react-router-dom'
import PageNotFound from './pages/pagenotfound/PageNotFound'*/
import Home from './pages/home'
import Queue from './pages/queue'
import Blog from './pages/blog'

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
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/queue" element={<Queue/>} />
                <Route exact path="/blog" element={<Blog/>} />
            </Routes>

        </BrowserRouter>

    )
}

export default App