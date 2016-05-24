/**
 * Created by Yuan on 2016/5/24.
 */
import React from 'react';

var SetIntervalMixin = {
    componentWillCount :function(){
        this.intervals = [];
    },
    setInterval :function(){
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount:function(){
        this.intervals.forEach(clearInterval);
    }
};

var MixinDemo = React.createClass({
    // Use the mixin
    mixins: [SetIntervalMixin],
    getInitialState: function() {
        return {seconds: 0};
    },
    componentDidMount: function() {
        // Call a method on the mixin
        this.setInterval(this.tick, 1000);
    },
    tick: function() {
        this.setState({seconds: this.state.seconds + 1});
    },
    render: function() {
        return (
            <p>
            计时器已经运行了： {this.state.seconds} 秒.
        </p>
        );
    }
});

export default MixinDemo;
