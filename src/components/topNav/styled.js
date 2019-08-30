import styled from "styled-components"

export const TopNavWrapper=styled.div`
    width:100%;
    height:0.79rem;
    background:#fff;
    border-bottom:1px solid #ccc;
    position:relative;
    .topNav-ul{
        width:100%;
        height:0.79rem;
        display:flex;
        justify-content:center;
        align-items:center;
        .topNav-ul-li1{
            width:100%;
            text-align:center;
            border-right:1px solid #ccc;
        }
        .topNav-ul-li2{
            width:100%;
            text-align:center
        }
    }
    .toggleType{
        width:100%;
        background:#fff;
        position:absolute;
        top:.79rem;
        display:${props=>props.flag ? 'block' : 'none'}
        .toggleType-div{
            width:100%;
            line-height:0.8rem;
            text-align:center;
            border-bottom:1px solid #ccc;
        }
    }
`




