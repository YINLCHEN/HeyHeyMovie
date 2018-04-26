import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../../css/Background.css';

class BackgroundBase extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            data: [],
            imageSrcArray:[]
        };
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.props
        const element =  Object.keys(data).map((key, index) => 
            data[key].vertivcal_poster
        )
        this.setState({
            imageSrcArray: element
        });
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 5000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            counter: this.state.counter+1
        });
    }

    render(){
        const counter = this.state.counter % 5;
        var divStyle = {
            backgroundImage: this.state.imageSrcArray[counter] ? 'url(' + this.state.imageSrcArray[counter] + ')' : null,
            height: '100%',
            backgroundPosition: 'top center',
        }
        return (
            <div style={{width:'100%', height:'500px', position: 'relative'}}>
                <ReactCSSTransitionGroup
                    transitionName="carousel"
                    transitionEnterTimeout={2500}
                    transitionLeaveTimeout={1}>
                    <div style={divStyle} key={this.state.imageSrcArray[counter] }/>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default BackgroundBase;