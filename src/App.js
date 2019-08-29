import React, { Component } from 'react';
import {routeConfig} from '@router';
import {Switch,Redirect,Route} from 'react-router-dom';
import BaseRoute from '@common/baseRoute';


class App extends Component {
  render() {
    return (
      <Switch>
      <Redirect from="/" to="/brand" exact/>
        {
          routeConfig.map((item,index)=>(
            <BaseRoute key={index} {...item}/>
          ))
        }
      </Switch>
    );
  }
}

export default App;