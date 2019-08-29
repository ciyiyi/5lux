import style from 'styled-components';
export const HeaderStyle=style.div`
    position:fixed;
    top:0
    height:.88rem;
    width:7.5rem;
    background:black;
    line-heigth:.88rem;
    z-index:10;
    a{
        font-size:.32rem;
        color:#fff;
        
    }
    a:nth-of-type(1){
        margin-top:.2rem;
        margin-left:.2rem;
        display:inline-block;
        height:.44rem;
        width:.44rem;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAGFBMVEUAAAD///////////////////////////8jfp1fAAAAB3RSTlMAzxCArzBgeLMqdgAAADxJREFUKM9jGDjAZIpVWLEYq2JxIayKCxVGFRNQzCBejgUU4hImFaQoYBV2F2IgwYlM4sNQeTGuZD/AAACSviB4Odp+PwAAAABJRU5ErkJggg==);
    }
    a:nth-of-type(2),a:nth-of-type(3),a:nth-of-type(4){
        margin-left:1.5rem;
    }
    a:nth-of-type(3),a:nth-of-type(4){
        margin-left:.6rem;
    }
`