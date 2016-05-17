/**
 * Created by yuan on 2016/5/17.
 */
import React, { Component } from 'react';

import {
    SpreadDemo,
    StateDemo,
    PropsDemo,
    PropTypesDemo,
    LifeCycleDemo,
    DestroyComponent,
    HandleDOMComponent,
    Refs,
    HandleEvent,
    UseChildrenComponent
} from '../components';

let data = {
    name:'wallace',
    type:'react'
}

class App extends Component{
    render(){
        return (
            <div>
                {

                }
                <SpreadDemo {...data}/>
                <DestroyComponent />
                <PropsDemo title="设置的标题"/>
                <StateDemo />
                <PropTypesDemo title="设置的Type标题"/>
                <HandleDOMComponent />
                <Refs />
                <HandleEvent />
                <UseChildrenComponent />
            </div>
        )
    }
}

export default App;
