import styled from "styled-components"

export const SearchTopWrapper = styled.div`
    width:100%;

    .search-top{
       width:100%;
       height:0.9rem;
        font-size:0.3rem;
        position:fixed;
        top:0;
        left:0;
        margin-top:0.2rem;
    }
    .search-top-input{
        padding:0.1rem 0.3rem;
        width:75%;
        background:#DDDDDD;
        border-radius:0.05rem;
    }
    .search-top-button{
        height:0.7rem;
        border:0;
    }
    .search-top-del{
        font-size:0.32rem;
        width:10%;
        text-align:right;
        margin-left:0.2rem;
        color:#000;
    }
    .searcch-top-ul{
        width:100%;
        display:${props=>props.flag ? 'block' : 'none'};
        margin-top:1.4rem;
        background:red;
        position:absolute;
        height:100%;
        background:#fff;
    }

    .searcch-top-ul-li{
        width:100%;
        height:0.6rem;
    
        border-bottom:0.01rem solid #ccc;
        display:flex;
    }
    .searcch-top-ul-li-p{
        width:50%;
        line-height:0.6rem;
        padding-left:0.2rem;
        float:left;
    }
    .searcch-top-ul-li-span{
        width:45%;
        line-height:0.6rem;
        padding-right:0.05rem;
        float:right;
        text-align:right;

    }
`