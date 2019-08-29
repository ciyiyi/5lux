import style from 'styled-components';

export const RightStyle=style.div`
    float:right;
    overflow:scroll;
    height:12rem;
    width:5.6rem;
        >div>p{
            padding-top:.3rem;
            padding-bottom:.3rem;
            span:nth-of-type(1){
                margin-right:.2rem;
                margin-left:1rem;
            }
            span:nth-of-type(3){
                margin-left:.2rem;
            }

            span:nth-of-type(1),span:nth-of-type(3){
                display:inline-block;
                height:0;
                width:1rem;
                border-bottom:.02rem solid #ccc;
                margin-bottom:.18rem;
            }
            font-size:.4rem;
        }
        >div>div{
            display:flex;
            justify-content: space-around

            flex-wrap:wrap;
            img{
                width:1.68rem;
                height:1.68rem;
            }
            p{
                font-size:.3rem;
                text-align:center;
                amrgin-bottom:.2rem;
            }
        }
`