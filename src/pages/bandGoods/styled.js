import style from 'styled-components';


export const GoodsStyle=style.div`
    margin-top:1rem;
    position:relative;
    >div:nth-of-type(1){
    overflow:hidden;
        a{
            position:absolute;
            top:0;
            left:0;
            display: block;
            width: .66rem;
            height:.66rem;
            background-image: url(http://m.5lux.com/static/img/backWhiteBg@2x.png);
            background-size: .66rem .66rem;
            background-repeat: no-repeat;
            position: absolute;
            background-position: 15px 11px;
            left: 0;
            top: 0;
            z-index: 2;
            float:left;
        }
        p{
            float:right;
            width:6rem;
            height:.66rem;
            line-height:.66rem;
            font-size:.38rem;
            margin-top:.1rem;
            font-weight:800;
        }
    }
    >div:nth-of-type(2){
        display:flex;
        width;100%;
        justify-content:space-around;
        margin-top:.4rem;
        margin-bottom:.4rem;
        font-size:.3rem;
        p:nth-of-type(1){
            color:#9b885f;
            position:relative;
        }

    }
    >div:nth-of-type(3){
        display:flex;
        flex-wrap:wrap;
        div{
            border:1px solid #ccc;
            height:6rem;
            width:3.7rem;
            img{
                margin-top:.4rem;
                margin-left:.45rem;
            }
            p{
                text-align:center;
            }
            p:nth-of-type(1){
                font-size:.4rem;
            }
            p:nth-of-type(2){
                font-size:.3rem;
                color:#ccc;
            }
            p:nth-of-type(3){
                span:nth-of-type(1){
                    margin-right:.2rem;
                    color:#9b885f;
                    font-size:.3rem;
                }
                span:nth-of-type(2){
                    font-size:.3rem;
                    text-decoration:line-through;
                    
                }
            }
        }
    }
    .hidden{
        left:-.89rem;
        position:absolute;
        width:7.5rem;
        background:#fff;
        font-size:.3rem;
        color:#9b885f;
        li{
            height:.8rem;
            line-height:.8rem;
        padding-left:.7rem;
        }
    }
`