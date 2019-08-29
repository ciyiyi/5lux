import React, { Component } from 'react'
import ServiceHead from "./service-head"
import ServiceCenter from "./serviceCenter"
import BScrollComponent from "@common/bscroll"
export default class Service extends Component {
    render() {
        return (
            <BScrollComponent>
                <div>
                    <ServiceHead />
                    <ServiceCenter />
                </div>

            </BScrollComponent>
        )
    }
}






