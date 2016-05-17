/**
 * Created by yuan on 2016/5/17.
 */
import React,{Component} from 'react';

class HandleEvent extends Component{
    state = {
        liked:true
    }
    handleClick = (event) => {
        this.setState({liked:!this.state.liked})
    }
    render(){
        let text = this.state.liked?'喜欢':'不喜欢';
        return(
            <h1 onClick ={this.handleClick}>
                我{text}你
            </h1>
        )
    }
}
export default HandleEvent;