import styled from 'styled-components';
export const MainStyle=styled.div`
    .baogeli_all{
        border-bottom:.02rem solid #ccc;
    }
    .all_flag_link{width: 2.7rem;
        height: .48rem;
        background: #333;
        background-image: initial;
        background-position-x: initial;
        background-position-y: initial;
        background-size: initial;
        background-repeat-x: initial;
        background-repeat-y: initial;
        background-attachment: initial;
        background-origin: initial;
        background-clip: initial;
        background-color: rgb(51, 51, 51);
        text-align: center;
        line-height: .48rem;
        color: #fff;
        font-size: .28rem;
        border-radius: .1rem;
        margin-top:.2rem;
        margin-left:2.5rem;
        margin-bottom:.4rem;
    
    }
    .baogeliCon{overflow:auto;display:flex;}
    .baogeli{
        display:flex;
        div{
            height:2.42rem;
            wdith:2.24rem;
            position:relative;
            margin-right:.05rem;
            img{
                height:2.42rem;
                wdith:2.24rem;
            }
            p{
                position:absolute;
                font-size:.26rem;
                bottom:0;
                color:#fff;
                text-align:center;
                margin-bottom:.05rem;
            }
        }
    }
    .module{
        margin-top:.3rem;
        p{
            width:100%;
            text-align:center;
            font-size: .36rem;
            font-weight: 700;
            padding:.16rem 0 .1rem;
            span:nth-of-type(3){
                height:.4rem;
                background:red;
                margin-bottom:.2rem
            }
        }



        .module_bottom{
            div{position:relative}
            div p{position:absolute;bottom:0;color: #fff;
                background: -webkit-gradient(linear,0 0,0 bottom,from(transparent),to(rgba(0,0,0,.7)));}
            div:nth-of-type(1) img{
                width:100%;
                height:4.22rem;
                margin-bottom:.05rem;
            }
            div:nth-of-type(2){
                float:left;
            }
            div:nth-of-type(3){
                float:right;
            }
            div:nth-of-type(2) img{
                width:3.6rem;
                height:4.22rem;
                margin-bottom:.05rem;
                margin-right:.1rem;
            }
            div:nth-of-type(3) img{
                width:3.6rem;
                height:4.22rem;
                padding-bottom:.05rem;
            }   
            div:nth-of-type(2) p,div:nth-of-type(3) p{font-size:.4rem}
        }
    }
`