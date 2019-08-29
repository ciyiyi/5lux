import styled from "styled-components"

export const SearchWrapper = styled.div`
    width:100%;
    background:#fff;
   
    .search-center{
        width:100%;
        height:100%;
        overflow:scroll;
     
    }
    .search-hot{
        width:100%;
        margin-top:1.1rem;
        color:#333;
       
    }
    .search-hot>h3{
        width:100%;
        height:0.8rem;
        font-size:0.26rem;
        background:#f2f2f2;
        padding:0 0.3rem;
        color:#333;
        line-height:0.8rem;
    }
    .search-hot-ul{
        width:99%;
        margin:0 auto;
        background:#fff;
        padding:0.2rem;
    }
    .search-hot-li{
        display: inline-block;
        border:1px solid #ccc;
        padding:0rem 0.2rem;
        margin:0 0.2rem 0.2rem 0;
        color:#999;
        text-align:center;
        line-height:0.6rem;
        border-radius:0.07rem;
    }
    .search-hot-li>a{
        color:#999;
    }
    .search-reslut{
        width:100%;
    }
    .search-reslut>h4{
        width:100%;
        height:0.92rem;
        color:#999;
        background:#f2f2f2;
        font-size:0.28rem;
        text-align:center;
        line-height:0.92rem;
    }
    .search-result-d{
        width:100%;
        margin:0.3rem;
        background:red;
    }
    .search-result-div{
        width:44%;
        float:left;
        margin:0.2rem;

    }
    .search-result-img{
        width:2.8rem;
        height:2.8rem;
    }
    .search-result-p{
    width:90%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    padding:0.22rem 0 0.2rem;
    color:#333;
    height:0.66rem;
    line-height:0.66rem;
    

    }
    .search-result-span{
        display:block;
        width:90%;
        color:#999;
        text-align:center;
        line-height:0.4rem;
        margin-top:0.1rem;
    }

`