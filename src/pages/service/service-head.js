import React, { Component } from 'react'
import DatePicker from 'antd/es/date-picker'; // 加载 JS
import 'antd/es/date-picker/style/css'; // 加载 CSS
// import 'antd/es/date-picker/style';         // 加载 LESS


import { Carousel, WingBlank } from 'antd-mobile';

export default class ServiceHead extends Component {
    state = {
        data: ['1', '2', '3','4'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['2019/07/04/mn/156223072079_750x560',
             '2019/08/07/rs/156516384923_750x560',
              '2019/08/20/rs/156629900050_750x560',
              '2019/08/13/jk/156568244379_750x560'],
          });
        }, 100);
      }
      render() {
        return (
          <WingBlank>
            <Carousel className="space-carousel"
              frameOverflow="visible"
              cellSpacing={10}
              slideWidth={0.8}
              autoplay
              infinite

              afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.state.data.map((val, index) => (
                <a
                  key={val}
                  href=""
                  style={{
                    display: 'block',
                    position: 'relative',
                    top: this.state.slideIndex === index ? -10 : 0,
                    height: this.state.imgHeight,
                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src={`http://img550.5lux.com.cn/${val}.jpg`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
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