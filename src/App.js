import React, { Component } from 'react';

import {routeConfig} from "@router"

import BaseRoute from "@common/baseRoute"
import DatePicker from 'antd/es/date-picker'; // 加载 JS
import 'antd/es/date-picker/style/css'; // 加载 CSS
// import 'antd/es/date-picker/style';         // 加载 LESS
import {Switch,Redirect,Route} from "react-router-dom";

 class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact/>
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
