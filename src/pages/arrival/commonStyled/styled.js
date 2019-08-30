import styled from "styled-components"

export const HeaderWrapper = styled.div`
    width:100%;
    height:1.7rem;
    position:fixed;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    background:#fff;
    .header-top{
        height:0.8rem;
        width:100%;
        position:fixed;
        left:0;
        top:0;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.3rem;
        border-bottom:1px solid #ccc;
        }
       .header-top-span{
            text-align:center;
            
            }
        .header-top-span-l{
            display:block;
            width:1.5rem;
            height:0.4rem;
            border:1px solid #000;
            border-right:none;
            border-radius:0.05rem 0 0 0.05rem;
            float:left;
            color:#999;
            }
            .header-top-span-l:hover{
                background:#000;
                color:#999;
            }
        .header-top-span-r{
            display:block;
            width:1.5rem;
            height:0.4rem;
            border:1px solid #000;
            border-radius: 0 0.05rem 0.05rem 0 ;
            float:left;
            color:#999;
            }
            .header-top-span-r:hover{
                background:#000;
                color:#fff;
            }
        .header-top-right{
            position:absolute;
            right:.2rem;
            font-size:.3rem;
            display:flex;
            justify-content:space-between;

            }
        .header-top-right>img{
            display:block;
            width:0.35rem;
            height:0.35rem;
            margin-left:0.25rem;  
            color:#999;            
            }
            .header-top-navlink>img{
                display:block;
            width:0.35rem;
            height:0.35rem;
            margin-left:0.25rem;  
            color:#999;
            }


        .header-nav{
            width:100%;
            height:0.8rem;
            position:absolute;
            top:0.8rem;
            left:0;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:.3rem;
            font-weight:600;
            border-bottom:1px solid #ccc;
        }
        .header-nav-city{
            width:33%;
            
        }
      
        .header-nav-pinpai{
            width:33%;
            color:#999;
        }
        .header-nav-near{
            width:30%;
            text-align:right;
            padding-right:0.3rem;
        }

`
