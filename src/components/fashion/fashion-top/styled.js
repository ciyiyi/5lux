import styled from "styled-components"

export const TopWrapper = styled.div `
    .top{
        height:0.88rem;
        width:100%;
        position:fixed;
        top:0;
        left:0;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background-color:#fff;
        .span_img{
            width:.44rem;height:.44rem;display:block;background-image: url(http://m.5lux.com/static/img/backWhiteBg@2x.png);
            background-size:.44rem .44rem;
            background-repeat: no-repeat;
        }
        border-bottom:.02rem solid #ccc;
    }
`