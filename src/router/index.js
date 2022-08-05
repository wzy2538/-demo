import React from 'react';
import routes from './route.config';
import RouteView from './routerView'
import {BrowserRouter} from 'react-router-dom';


const Main = () =>{
    return <BrowserRouter>
        <RouteView routes={routes}></RouteView>
    </BrowserRouter>
}
export default Main