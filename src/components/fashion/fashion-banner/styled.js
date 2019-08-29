import styled from "styled-components"

export const BannerCom=styled.div`
    .con{border-bottom: 0.2rem solid #ccc;}
    margin-top:0.88rem;
    width:100%;
    .banner{
        width:7.5rem;
    }
    .banner_bottom{
        display:flex;
        justify-content:space-around;
        align-items:center;
        margin-top:0.2rem;
       
        div:nth-of-type(1){
            width: 1.09rem;
            height: 0.54rem;
            border: 0.02rem solid #000;
            
        }
        div:nth-of-type(2){
            width: 0.8rem;
            height: 0.4rem;
            background: #000;
            color:#fff;
            text-align:center;
            font-size:0.24rem;
        }
        p{
            width:4.93rem;
            overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
            font-size:0.26rem;
        }
    }
    .logo{width:1.03rem;height:0.2rem;margin-top:0.14rem;}
`