import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import { index_carousel } from "@api/home"
export class BannerCarousel extends Component {
  constructor(){
    super()
    this.state={
      data:[],
      imgHeight: "8.25rem",
      imgWidth: "7.5rem",
    }
  }
    async componentDidMount() {
        let data = await index_carousel();
        this.setState({
          data: data.data,
        })
    }
    render() {
        return (
            <WingBlank>
            <Carousel
              autoplay={true}
              infinite={true}
              style={{ width: "100%", marginLeft: 0, marginRight: 0 }}
              dotStyle={{ width: "0.26rem", height: "0.26rem",marginBottom:'0.26rem' }}
              dotActiveStyle={{ width: "0.26rem", height: "0.26rem",marginBottom:'0.26rem' }}
            >
              {this.state.data.map((item, index) => (
                <a
                  key={index}
                  href={item.slide_url}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={item.silde_original}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}

                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        );
    }
}

export default BannerCarousel;
