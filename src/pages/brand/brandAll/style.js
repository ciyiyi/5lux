import style from 'styled-components';


export const CommondAll=style.div`
height:14.5rem;
p{
    margin-top:1rem
    padding-top:.4rem;
    height:.88rem;
    width:7.5rem;
    font-size:.3rem;
    span{
        display:inline-block
    }
    span:nth-of-type(1),span:nth-of-type(3){
        height:0;
        width:1rem;
        border-bottom:3px solid black
    }
    span:nth-of-type(1){
        margin-left:1.9rem;
        margin-bottom:.1rem;
        margin-right:.2rem;
    }
    span:nth-of-type(3){
        margin-left:.2rem;
        margin-bottom:.1rem;
    }

}
.commond_brand{
    margin-top:.5rem;
    display:flex;
    flex-wrap:wrap;
    justify-content: left
    li{
        height:1.76rem;
        width:1.76rem;
        border-top:.02rem solid #ccc;
        border-left:.02rem solid #ccc;
        img{
            padding:.2rem;
            padding-top:.5rem;
            width:1.76rem;
            display:inline-block
        }
        a{
            height:1.76rem;
            width:1.76rem;
        }
    }
}

.Title{
    position:fixed;
    width:.4rem;
    top:1rem;
    right:.08rem;
    background:#fff;
    p{
        height:.3rem;
        margin:0;
        padding:0;
    }
}
p{
    padding-top:.4rem;
    height:.88rem;
    width:7.5rem;
    font-size:.3rem;
    span{
        display:inline-block
    }
    span:nth-of-type(1),span:nth-of-type(3){
        height:0;
        width:1rem;
        border-bottom:3px solid black
    }
    span:nth-of-type(1){
        margin-left:1.9rem;
        margin-bottom:.1rem;
        margin-right:.2rem;
    }
    span:nth-of-type(3){
        margin-left:.2rem;
        margin-bottom:.1rem;
    }

}
.brandAll{
     ul>p{
         margin:0;
         padding:0;
         padding-left:.4rem;
          font-size:.5rem;
       line-height:.48rem;
        height:.48rem;
         background:#999;
         color:#ccc;
     } 
     ul>li{
         color:#ccc;
         font-size:.2rem;
         width:100%;
         height:.88rem;
         line-height:.88rem;
         padding-left:.4rem;
     }
}

`