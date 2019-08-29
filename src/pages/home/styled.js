
  import styled from "styled-components"

  export const WeekWrapper=styled.div`
  
    .slider-list{
      display:flex;
      justify-content:space-around;
      height:1.5rem;
      align-items:center;
      .list_item{
          width:20%;
          text-align:center;
      }
      .list_img_item{
          display:block;
          margin:0 auto;
          margin-bottom:0.2rem;
          width:0.45rem;
          height:0.45rem;  
      }
    }
    .adv1_warpper{
        display:flex;
        flex-wrap:wrap;
        
    }
    .adv1_warpper li{
        border-bottom:0.17rem solid #fff;
    }
    .adv1_warpper .adv1_item{
        
        box-sizing:border-box;
    }
    .adv1_warpper .adv1_item:nth-of-type(2n+1){ border-right:0.07rem solid #fff;}
    .adv1_warpper .adv1_item:nth-of-type(2n){ border-left:0.07rem solid #fff;}
    .adv1_warpper .adv1_item a{display:block;}
    .vip{display:flex;flex-wrap:wrap;}
    .adv1_warpper .adv1_item img{width:3.68rem;height:2.6rem;}
    .vip li{border-bottom:0.17rem solid #fff;}
    .vip .main_img:nth-of-type(n+2){padding: 0 0.07rem;}
    .vip .main_img:nth-of-type(1){padding:0;}
    .vip .main_img:nth-of-type(2){padding-left: 0.14rem;}
    .vip .main_img:nth-of-type(5){padding-right: 0.14rem;}
    .artical_wrapper{padding:0.36rem 0.4rem 0.4rem;border-bottom:.02rem #ccc solid;}
    .artical_wrapper strong{display:block;height:0.36rem;font-size:0.28rem;margin:0 0 0.36rem;}
    .artical_wrapper p{font-size:0.24rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding:0.2rem 0 0.1rem;}

    .product_con{display:flex;width:100%;overflow:auto;padding:0.4rem 0.2rem;    margin: 0 auto;}
    .product_item{width:2.6rem;}
    .product_img{width:2.4rem;height:2.4rem;}
    .product_item_text{font-size:0.26rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:center;padding:0.04rem 0.02rem;}
    .dog{width:100%;height:.5rem;}
    
  `