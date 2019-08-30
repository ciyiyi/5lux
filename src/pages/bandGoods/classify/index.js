import React, { Component } from 'react';
import {CTStyled} from "./styled"


class App extends Component {
  constructor(){
    super();
  }
  render() {
    let {value1,value2,flagF}=this.props;
    console.log(value1,value2);
    return (
      <CTStyled>
        <div>
            <div className="title">分类</div>

                <div>{value2}</div>

                <div>{
                          value1.map((item,index)=>(
                            <p onClick={this.handleClick.bind(this)}>{value1[index]}</p>
                            ))
                    
                }
            </div>

        </div>
      </CTStyled>
    );
  }

  handleClick(e){
    this.props.handle(e);
  }
}

export default App;