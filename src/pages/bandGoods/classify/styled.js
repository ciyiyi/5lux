import style from 'styled-components';

export const CTStyled=style.div`
    height:13.34rem;
    position:fixed;
    top:0;
    right:0;
    z-index:10;
    background:rgba(0,0,0,.3);
    width:7.5rem;
    >div{
        position:absolute;
        right:0;
        background:#fff;
        height:13.34rem;
        width:6rem;
        div:nth-of-type(2){
            font-size:.4rem;
            padding-left:.3rem;
            height:.7rem;
            line-height:.7rem;
            border-bottom:1px solid #ccc;
        }
        div:nth-of-type(3){
            font-size.3rem;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
            >p{
                margin-bottom:.2rem;
                text-align:center;
                height:1rem;
                width:1.8rem;
                line-height:1rem;
                border:1px solid #ccc;    
            }
        }
    }
    .title{
        height:.8rem;
        line-height:.8rem;
        border-bottom:1px solid black;
        text-align:center;
        margin-top:.2rem;
        font-size:.4rem;
    }
`