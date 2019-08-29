import styled from "styled-components"

export const ContextWrapper = styled.div `
     color:#333;
    .pro_title{background-image:url(data:image/png;base64,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);
   
    width: 4.25rem;
    height: 0.28rem;
    background-size: 4.25rem 0.28rem;
    background-repeat: no-repeat;
    margin:0.2rem auto 0.1rem;
    }

    .fashion_list{
        display:flex;
        flex-wrap:wrap;
        li{
            width:50%;
            height:8.5rem;
            background:red;
            img{
                width:3.75rem;
                height:6.45rem;
            }
        }
        }
    .sotre_list_con{
        margin: 0.4rem 0.3rem 0.6rem;
        text-align: center;
        
        font-size:0.26rem;
        .colorP{color:#333;font-weight: 500;}
        color:#9B885F;
        del{
            color:#999;
        }
    }
`