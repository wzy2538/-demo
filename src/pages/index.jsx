import React, { Component } from 'react'
import RouteView from '../router/routerView';
import {NavLink} from 'react-router-dom'
export default class Index extends Component {
   toSearch = () =>{
       this.props.history.push('/search')
   }
    render() {
        let {routes,match} = this.props
        console.log(this)
        return (
            <div className='wrapper'>
                   <div className="left">
                      {
                          routes ? routes.map((item,index)=>{
                              if(!item.from){
                                return <NavLink key={index} to={match.path+item.path}>{item.title}</NavLink>
                              }
                            return null
                          }) : null
                      }
                </div>
                <div className="content">
                  <RouteView routes={routes} match={match.path}></RouteView>
                </div>
             
            </div>
        )
    }
}
