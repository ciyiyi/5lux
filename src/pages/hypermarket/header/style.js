import styled from "styled-components"


export const HeaderWrapper = styled.div`
position:fixed;
top:0;
z-index:10;
.search{width:100%;height: .88rem;background: black;display: flex;padding: .1rem .3rem}

.search>div:nth-of-type(1){background: hsla(0,0%,100%,.25);width: 86%;height: 100%;border-radius: .1rem;display: flex;}

.search>div:nth-of-type(1)>div:nth-of-type(1){width: .26rem;height: .26rem;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMAEM+/QO+AcGAwn1D/kKMAAACYSURBVBjTYwACcevdu80FGCCALXo3EIRBOIzau8FAEcwT3b3bwsXDevdWsFrt3ZpAklN7twJI1+5dYEGp3dvAChWh2kFKq3dPgJg2e3cBA4P1ZqhFzLsNGBh274DyOHZvAPK2QHks+Hmo+lDNRLUP1S3o7kT4YSOy/3ZvEoD6HeZ7RLgIASURYcaoDZREAKAkEg8oyYAiCQDnr0zCoGOvDwAAAABJRU5ErkJggg==);
background-size: cover;margin-left: .2rem;margin-top: .2rem;
}

.search>div:nth-of-type(1)>div:nth-of-type(2){
    width: 1.5rem;height: .24rem;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAYCAMAAAAvZfR4AAAAM1BMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzeCmiAAAAAEHRSTlMAv4BA7xAwn88g32BQcK+PwlJoNQAAAshJREFUSMetl1mShSAMRYUwyKTZ/2rbBB4RynKo6nx06wWTQ8L0lsO0WFr+x5zelFLaDVphLXchAFgLZKH1gAS2t6KYIkHRP7HhlbsUxE0kGxHdAAUrNoupa6prpUka8Seqw0GK/OgbIyCuqtn+AoslLF3yiPrc3x4Cks8a0LK4n7U1/LDEdB+KgV8riNNXWNZIgnKVhIr8+8xF8cRgKzqqqmlzRHY/LOMTZG9qGncAHbm1frJ8xFqghWNCE8buGPsww8GYOYQRTR1vthWxfuoMdoe+T6X4FYtd+trKccV09S+5SzwXjRONI49lSgfWb3BrrQTi9hVLcErDk/UzJY8T2qkkchqw7DEYGRh5DjxjAeA9lhTPIUZ77uwp4GSaI0zwUbDEr3SnabJvdWm6D1hLpmq1hIsZijdZRDMKTO/usTSKpfdYvObjnAfXBTE71bktmXKP5WmZareEYqjvCyyZIfIm4eASYTYKfYul+vZGJYEPWHBguVdY8B3LS4qDQfUBi7bs7RVW/o61UKpkuoTXWJrnVroq2ON8c49Y82DfYjkq/jrtUlbyJ2ZwnaVCGXzGktZygRUnLLk3OJxCbojhYjeAiz3jFisADNtcFiyprD3PiR6rXAwtTYtzPEBPkf0tFv0ZnIJgiZjmZ7k3qCkVatqlsuMU+smjsbdY4zpRlNsZyxqMtlfO8GPo94bQW23RQO8DQ6Hj0JJmT1QU8x7LnjJcSBCs+VLAG5se7w2ct+2nIdRLytrCOdJy1WL7IGx8nDxgcVA3hFcYtRjU69Ke894TUehhPp35jvm7PMVd652OAZOYL5LmD3crMtUjFp8+6+Gk3wsVikkXNoaZ7g021oISTWFhk6+Vk5t0M87CM9aSTOu/2eUaa4GN26EfhjCuNF/dqAbrfEROz3mVc/LQbLkJz/tW3uXn039ZcE8aaB06i04nGf4Ab603CCduDYwAAAAASUVORK5CYII=);background-size: cover;margin-left: .3rem;margin-top: .2rem;
}

.search>div:nth-of-type(2){height: .44rem;width: .44rem;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAv4BA789gIJ8Q348wr3BQisJoTQAAATJJREFUOMuNlduOxCAMQ0mAXuhlzv9/7a7KdLIr6BC/VFhuMK5RQwdrjHEPHsxauHBMI+mqAFmkAOX1fWwGedkO27e5ifSy1QbLsziT57/rCc4nrZLm/8wJ86OJ5kTyZOQktyd+Gi1MvWP044a1JbXvYyd12IgEN92y66SqC0Ub3OxuBhIjmHO5qpNJ0qKyhU8oMI08Z7ZP8PGim29irCL3mvqxm0Yaq5S7W6m+Ap3BwD3Qttih8WHsfnfk4Lg2kKO5pcZCfCenYYjE+X4O77FNhDgWL9VrrN4HUMRiHmGC+k4eKW3khjjEaz2ZsAUHuK5+dsRcZc7kbgOzU6yIN7la0lpQb3bqSq6WtBbUA4hWUEdJraCOklrM45JKgNMnLixhgU0dEIhhTjixXH8wceE3hx9LbBNhHZzz6AAAAABJRU5ErkJggg==);background-size: cover;margin-left: .4rem;margin-top: .1rem;}

.title{padding-left: .4rem;height: .8rem;width: 100%;overflow-x: auto;overflow-y: auto;display: flex;width:7.5rem;background:white}
.title>div{height: 100%;display: flex;justify-content:space-between}
.title>div>div{height: 100%;width: 1rem;font-size: .3rem;font-weight: 800;color:#999;line-height: .8rem;margin-right: .6rem;display: flex;}

`