import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
export default class routerView extends Component {
    static defaultProps = {
        routes:[],
        match:''
    }
    // beforeEnter = (item,match) =>{
    //  const flagBtn=localStorage.getItem('user');
    //  if(flagBtn){
    //     let Com =item.component
    //     return <Route  path={match+item.path} render={(props)=><Com {...props} routes={item.children}></Com>}></Route>
    //  }else{
    //      return <Redirect exact to={'/login'}></Redirect>
    //  }
    // }
    render() {
        let {routes,match} = this.props
        return (
            <Switch>
                {
                  routes ? routes.map((item,index)=>{
                      if(item.from!==undefined){
                          return <Redirect key={-1} exact from={match+item.from} to={match+item.to}></Redirect>
                      }
                      let Com =item.component
                   return <Route key={index} path={match+item.path} render={(props)=><Com {...props} routes={item.children}></Com>}></Route>
                  }) : null
                }
            </Switch>
        )
    }
}
