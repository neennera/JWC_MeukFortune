import {BrowserRouter, Route, Switch } from 'react-router-dom'
/*import PageNotFound from './pages/pagenotfound/PageNotFound'*/
import Home from './pages/home'
import Queue from './pages/queue'


const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route {...rest} render={props=>(
        <Layout><Component {...props}></Component></Layout>
    )}></Route>
)

const Routes = () => {

    return (

        <BrowserRouter>

            <Switch>

                {/* Frontend */}
                <AppRoute path="/" exact={true}  component={Home} />
                <AppRoute path="/home" component={Home} />
                <AppRoute path="/queue" component={Queue} />

            </Switch>

        </BrowserRouter>

    )
}

export default Routes