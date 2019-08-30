import styled from "styled-components"

export const ResultWrapper = styled.div`
    width:100%;
    background:#fff;
    .result-top{
        width:100%;
        height:0.9rem;
        background:#ccc;
    
    }
    .result-top-span{
        float:left;
       margin-left:0.2rem;
       line-height:0.9rem;
    }
    .result-top-h2{
        width:95%;
        text-align:center;
        line-height:0.9rem;
    }
    
    .result-center{
        width:100%;
        height:10rem;
        
    }
    .result-center-li{
        width:49.9%;
        border-bottom:0.02rem solid #ccc;
        text-align:center;
        float:left;
        margin-top:0.02rem;
    }
    .result-center-li:nth-of-type(2n+1){
        border-right:0.04rem solid #ccc;
    }
    .result-center-img{
        display:block;
        width:2.9296rem;
        height:3.0426rem;
        margin:0 auto;
        margin-bottom:0.7rem;
    }
    .result-center-span1{
        
        width:100%;
        line-height:0.4rem;
        font-size:0.26rem;
        color:#333;
      
       

    }
    .result-center-span2{
        width:100%;
        line-height:0.4rem;
        font-size:0.24rem;
        color:#333;
      
    
    }
    .result-center-li-div-span1{
        line-height:0.7rem;
        color:#9b885f;
        

    }
    .result-center-li-div-span2{
        margin-left:0.3rem;
       text-decoration:line-through;
        
    }

    `