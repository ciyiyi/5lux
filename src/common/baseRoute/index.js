import React, { Component } from 'react';
import Layout from "@layout";
import {Route} from "react-router-dom"
import auth from "@common/auth"
export class BaseRoute extends Component {
    render() {
        let {path,component,...rest}=this.props;
        return (
            <Layout {...rest}>
                <Route path={path} component={component}/>
            </Layout>
        );
    }
}

export default auth(BaseRoute);
