/**
 * Created by yuan on 2016/5/17.
 */
import React,{Component} from 'react';

class PropsDemo extends Component{
    props = {
        title:'这是默认的title'
    }
    render(){
        console.log(this.props.title);
        return <b>{this.props.title}</b>
    }
}

export default PropsDemo;
