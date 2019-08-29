import styled from "styled-components"

export const HeaderWrapper=styled.div`
    width:100%;
    height:0.88rem;
    width: 100%;
    position:fixed;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.25);
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAACACAYAAACbUtgKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODBCNEIzQTUwODhEMTFFNzg4OEI4MkVBQkZBNjY0NTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODBCNEIzQTYwODhEMTFFNzg4OEI4MkVBQkZBNjY0NTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MEI0QjNBMzA4OEQxMUU3ODg4QjgyRUFCRkE2NjQ1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MEI0QjNBNDA4OEQxMUU3ODg4QjgyRUFCRkE2NjQ1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppo5pc8AAAKoSURBVHja7NzBDYMwFAVBQ9J/ZakpQBfIf2ckGvBp9cAca63fAgAg4/s8l2MAABCAAAAIQAAAJjgdAQBAiwUQAEAAAgAgAAEAGBWAf8cAANAKQAsgAIAABABAAAIAIAABABCAAABsEIBuAQMAxALQAggAIAABABCAAACMCUDfAAIAxALQAggAEAtACyAAQCwALYAAALEAtAACAMQC0AIIABALQAsgAEAsAC2AAACxALQAAgDEAtACCAAQC0ALIABALAAtgAAAsQC0AAIACEAAACYHoFfAAACxALQAAgAIQAAABCAAAGMC0DeAAACxALQAAgAIQAAABCAAAAIQAIA9A9AlEACAWABaAAEABCAAAAIQAAABCACAAAQAQAACACAAAQB4NQD9BxAAIBaAFkAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCACAAAQAQAACACAAAQAQgAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCACAAAQAQAACACAAAQAEoAAEABCAAAAIQAAAJgXg5RgAAFoBaAEEABCAAAAIQAAABCAAAAIQAAABCACAAAQA4NUA9B9AAIBYAFoAAQAEIAAAAhAAAAEIAMCeAegSCABALAAtgAAAAhAAAAEIAMCYAPQNIABALAAtgAAAAhAAgMkB6BUwAEAsAC2AAACxALQAAgDEAtACCAAQC0ALIABALAAtgAAAsQC0AAIAxALQAggAEAtACyAAQCwALYAAALEAtAACAMQC0AIIABALQAsgAIAABABAAAIAMCYAfQMIABALQAsgAIAABABAAAIAIAABABCAAABsEIBuAQMAxALQAggAIAABAJjq8zyHYwAA6DgdAQBAiwUQACAYgAAAhNwCDAAHuXv9VQGAtwAAAABJRU5ErkJggg==);
    display: flex;
    align-items: center;
    .search-text{
        flex: 1;
        height:0.6rem;
        border-radius:0.08rem;
        background:#fff;
        background-color: hsla(0,0%,100%,.25);
        margin-right:0.32rem;
        margin-left:0.34rem;
        display:flex;
        justify-content:flex-start;
        align-items:center;

        .search-logo{
            width:0.26rem;
            height:0.26rem;
            
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMAEM+/QO+AcGAwn1D/kKMAAACYSURBVBjTYwACcevdu80FGCCALXo3EIRBOIzau8FAEcwT3b3bwsXDevdWsFrt3ZpAklN7twJI1+5dYEGp3dvAChWh2kFKq3dPgJg2e3cBA4P1ZqhFzLsNGBh274DyOHZvAPK2QHks+Hmo+lDNRLUP1S3o7kT4YSOy/3ZvEoD6HeZ7RLgIASURYcaoDZREAKAkEg8oyYAiCQDnr0zCoGOvDwAAAABJRU5ErkJggg==");
            background-size: 0.26rem 0.26rem;
            background-repeat: no-repeat;
            margin: 0 8px;
        }
        .search-logo-s{
            width:1.5rem;
            height:0.24rem;
            background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAYCAMAAAAvZfR4AAAAM1BMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzeCmiAAAAAEHRSTlMAv4BA7xAwn88g32BQcK+PwlJoNQAAAshJREFUSMetl1mShSAMRYUwyKTZ/2rbBB4RynKo6nx06wWTQ8L0lsO0WFr+x5zelFLaDVphLXchAFgLZKH1gAS2t6KYIkHRP7HhlbsUxE0kGxHdAAUrNoupa6prpUka8Seqw0GK/OgbIyCuqtn+AoslLF3yiPrc3x4Cks8a0LK4n7U1/LDEdB+KgV8riNNXWNZIgnKVhIr8+8xF8cRgKzqqqmlzRHY/LOMTZG9qGncAHbm1frJ8xFqghWNCE8buGPsww8GYOYQRTR1vthWxfuoMdoe+T6X4FYtd+trKccV09S+5SzwXjRONI49lSgfWb3BrrQTi9hVLcErDk/UzJY8T2qkkchqw7DEYGRh5DjxjAeA9lhTPIUZ77uwp4GSaI0zwUbDEr3SnabJvdWm6D1hLpmq1hIsZijdZRDMKTO/usTSKpfdYvObjnAfXBTE71bktmXKP5WmZareEYqjvCyyZIfIm4eASYTYKfYul+vZGJYEPWHBguVdY8B3LS4qDQfUBi7bs7RVW/o61UKpkuoTXWJrnVroq2ON8c49Y82DfYjkq/jrtUlbyJ2ZwnaVCGXzGktZygRUnLLk3OJxCbojhYjeAiz3jFisADNtcFiyprD3PiR6rXAwtTYtzPEBPkf0tFv0ZnIJgiZjmZ7k3qCkVatqlsuMU+smjsbdY4zpRlNsZyxqMtlfO8GPo94bQW23RQO8DQ6Hj0JJmT1QU8x7LnjJcSBCs+VLAG5se7w2ct+2nIdRLytrCOdJy1WL7IGx8nDxgcVA3hFcYtRjU69Ke894TUehhPp35jvm7PMVd652OAZOYL5LmD3crMtUjFp8+6+Gk3wsVikkXNoaZ7g021oISTWFhk6+Vk5t0M87CM9aSTOu/2eUaa4GN26EfhjCuNF/dqAbrfEROz3mVc/LQbLkJz/tW3uXn039ZcE8aaB06i04nGf4Ab603CCduDYwAAAAASUVORK5CYII=);
            background-size:1.5rem 0.24rem;
            background-repeat:no-repeat;
        }
        
    }
    .shop_cart{
        width:0.44rem;
        height:0.44rem;
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAv4BA789gIJ8Q348wr3BQisJoTQAAATJJREFUOMuNlduOxCAMQ0mAXuhlzv9/7a7KdLIr6BC/VFhuMK5RQwdrjHEPHsxauHBMI+mqAFmkAOX1fWwGedkO27e5ifSy1QbLsziT57/rCc4nrZLm/8wJ86OJ5kTyZOQktyd+Gi1MvWP044a1JbXvYyd12IgEN92y66SqC0Ub3OxuBhIjmHO5qpNJ0qKyhU8oMI08Z7ZP8PGim29irCL3mvqxm0Yaq5S7W6m+Ap3BwD3Qttih8WHsfnfk4Lg2kKO5pcZCfCenYYjE+X4O77FNhDgWL9VrrN4HUMRiHmGC+k4eKW3khjjEaz2ZsAUHuK5+dsRcZc7kbgOzU6yIN7la0lpQb3bqSq6WtBbUA4hWUEdJraCOklrM45JKgNMnLixhgU0dEIhhTjixXH8wceE3hx9LbBNhHZzz6AAAAABJRU5ErkJggg==);
        background-size:0.44rem 0.44rem;
        background-repeat: no-repeat;
        margin-right: 0.34rem;
        position: relative;
        .totalNum{
            width:0.3rem;height:0.3rem;background:#f33;color:#fff;border-radius:50%;border:0.02rem solid #fff;font-size:0.2rem;position:absolute;left:0.24rem;top:-0.06rem;text-align:center;
        }
    }
    z-index:9;
   
`
export default HeaderWrapper;