import style from 'styled-components';
export const ContentStyle=style.div`
   
    
    .shop{
            width:100%;
            display:flex;
            flex-wrap:wrap
            div{
                width:3.6rem;
                height:4.6rem;
                img{
                    width:2.44rem;
                    height:3.6rem;
                    margin-left:.6rem;
                }
                p{
                    font-size:.28rem;
                    font-weight:900;
                    text-align:center;
                    margin-bottom:.2rem;
                }
            }
        }
        .module_top{
            margin-top:4.8rem;
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
`