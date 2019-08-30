import React, { Component,Fragment } from 'react';
import Layout from "@layout";
import {Route} from "react-router-dom"
import auth from "@common/auth"


class BaseRoute extends Component {
    render() {
        let {component,path,children,...rest}=this.props;
        console.log(children);
        if(children){
            return (
                <Layout {...rest}>
                    <Route path={path} render={()=>{return(
                    <Fragment>
                     <Route component={component}/>
                     {
                  children.map((item,index)=>(
                      <Route key={index} path={item.path} component={item.component}/>
                  ) )
                 }
                </Fragment>)}}/> 
                 </Layout>
          );
        }else{
            
            return(
                <Layout {...rest}>
                <Route path={path} component={component}/>
            </Layout>
            )     
        }
    }
}
    export default auth(BaseRoute);

