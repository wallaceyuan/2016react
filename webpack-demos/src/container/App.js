/**
 * Created by yuan on 2016/5/16.
 */
import React, {Component} from 'react';
import Button from '../components/Button/Button';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    render(){
        return(
            <div className="myApp">
                <Button></Button>
                <div className ="controller">
                    <div className ="col-sm-6 offset-sm-3">
                        {/* 这里我们使用以下图标字体 */}
                        <span className="glyphicon glyphicon-asterisk"></span>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
