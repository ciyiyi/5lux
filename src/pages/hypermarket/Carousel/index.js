import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {hyperMarketCaro} from '@api/hyperMarket.js';
class Carousel_c extends Component {
    state = {
        listImg: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            listImg: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
        this.handleWeekGetData();
      }
      render() {
        return (
             <WingBlank>
            <Carousel
            style={{marginTop:"1.7rem"}}
              autoplay={true}
              infinite
              beforeChange={(from, to) =>(`slide from ${from} to ${to}`)}
              afterChange={index =>('slide to', index)}
            >
              {this.state.listImg.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val.silde_original}
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
      async handleWeekGetData() {
        let data = await hyperMarketCaro();
        this.setState({
            listImg: data.data,
        })
    }

    }

export default Carousel_c;