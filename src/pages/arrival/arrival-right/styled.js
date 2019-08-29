import styled from "styled-components";

export const ArrivalRightWrapper=styled.div`
    width:100%;
    padding:0 .4rem;
    background:#fff;
    .StoreItem{
        padding-top:.1rem;
        width:100%;

        margin-top:0.2rem;
    }
    .StoreItem-img{
       width:6.704rem;
       height:6.704rem;
    
    }
    .StoreItem-img>img{
        display:block;
        width:100%;
      height:100%;
    }
    .Store_title{
        width:6.704rem;
        height:0.802rem;
        padding:0.25rem 0.25rem 0.2rem;
        font-size:0.36rem;
        color:#000;
        line-height:0.802rem;
    
        font-weight:600;
    }
    .Store_tuijian{
        width:100%;
        height:0.36rem;
        line-height:0.36rem;
        margin-top:0.3rem;
    }
    .Store_tui{
        display:block;
        background:#9B885F;
        color:#fff;
        width:15%;
        height:0.36rem;
        line-height:0.36rem;
        text-align:center;
        float:left;
        font-size:0.24rem;
        margin-left:0.2rem;
        
    }
    .Store_no{
        display:block;
        width:80%;
        height:0.36rem;
        line-height:0.36rem;
        text-align:center;
        color:#999;
        font-size:0.3rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .Store_bottom{
        width:100%;
        height:0.6rem;
        color:#7E8c8D;
        font-size:0.28rem;
        padding:0.27rem 0.42rem 0;
        font-weight:600;
    }
    .Store_tu{
        width:0.22rem;
        height:0.26rem;
        background:url("@static/dizhi.png");
        color:#9B885F;
    }
    .Store_shang{
        width:33%;
        color:#9B885F;
        
    }
    .Store_men{
        width:33%;
        color:#000;
        float:right;
        text-align:right;
    }
    .active{
        background:#000;
            color:#fff;
    }

`