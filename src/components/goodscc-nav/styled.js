import styled from "styled-components"
export const GoodsNav = styled.div `
   
    height:0.8rem;
    width:100%;
    border:0.02rem solid #ccc;
    position:fixed;
    top:.88rem;
    right:0;
    font-size:0.28rem;
    z-index:13;
    background:#f2f2f2;;
    ul{
        display:flex;
        justify-content:space-around;
        line-height:0.8rem;
    }
    .one{display:flex;}
    .index img{
        width:0.12rem;
        height:0.18rem;
        }
    .filter{
        float:right;
        position:relative;
        top:0.25rem;
        right:0;
    }
`
