import React, { Component,Fragment } from 'react';
import "./index.css"
class Bottom extends Component {
    render() {
        return (
            <Fragment>
                <div className="bottom">
                    <div className="first first1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAM1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZwOlLNAAAAEHRSTlMAQL+A7xAgz3BgUK+f348wlnYDGAAAAOtJREFUOMvNkkmSwyAMRSUhZhz/+5+248bdJGZIVqm8KjbwQF8APeNuGyqZaYHBA+JmmhVA0nm0Ueg+8Tw0PqTwM7NcFmyGjqongLsSMhA3GLqwt72NCLX9LQyOzDCD/oAuZZ3qt4fLDMPTgIDSRcwjkSFdbPPFoi04mIkqko2rD7oUK/H3z/CqtGcOAiRS8OuMBZ6As5nbQrTAn5ggq66byN8t2vdEj/JaZCglQIxbi6zHLUcAQrbw6q39kc8Fk2iC1e7HrDCfFdOG/w+1IU49hzt13QnUTsUAuY8TZXpH1LzTHKe1dGPdTOMHJO0Pm1vucfQAAAAASUVORK5CYII=" />
                        <p>客服</p>
                    </div>
                    <div className="first">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAM1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZwOlLNAAAAEHRSTlMAv4BAn+/fr3BgMCAQz49QNjmm3gAAARBJREFUOMuNUtuuwyAMI9xpufj/v/ZsJWjiwMj80ErGCdiyWmCS1u1WAm7r8MDHfNLpt4R0pffffNdZgPpxTh5IB93nLNuvygiYec5tPWWHODMFdr/Q/w8K2K0kpJWKG+FmPCJsooZbOANSO1LkciSiAkczBhfa580C2OUFBK0tvJ4xOD9ya8DxjQYYlSmvb4W7ZtngrhFcfeaAdSVzowME3cklXeZGCfwjTBTmq5kbm3jzEbbfdQPXWahBit2fkboiwglCA4zFZ+TuIsAqAUBj8wIKJ50kIaHKMbKNx1KWhZ5LJufDJTuCi1bFGNmHnA4XzYtCzprTkYsGtF+EpAqcllCBqAx+QcmvkAKJsFn9Af8iEXaLKSehAAAAAElFTkSuQmCC"/>
                        <p>购物袋</p>
                    </div>
                    <div  className="btn">加入购物袋</div>
                    <div  className="btn shop">立即购买</div>
                </div>
            </Fragment>
        );
    }
}

export default Bottom;
