/**
 * Created by yuan on 2016/5/17.
 */
import React,{Component} from 'react';

class StateDemo extends Component {
    state = {
        secondsElapsed: 0
    }
    tick(){
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }
    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this),1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <div>目前已经过去{this.state.secondsElapsed}</div>
        )
    }
}

export default StateDemo;
