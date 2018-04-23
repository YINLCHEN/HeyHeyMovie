import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../../css/Background.css';

class BackgroundBase extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            imageSrcArray: [
                'https://s-media-cache-ak0.pinimg.com/originals/88/2c/dc/882cdca85526dfb9d9f03cf192c0846c.png',
                'https://i.pinimg.com/originals/61/d4/be/61d4be8bfc29ab2b6d5cab02f72e8e3b.jpg',
                'https://s-media-cache-ak0.pinimg.com/originals/48/b5/d3/48b5d3d3c909db8283ba3c54e10b37b7.png',
                'https://s-media-cache-ak0.pinimg.com/originals/32/9d/d6/329dd6bb6819396c66d91a8867d7964f.jpg',
                'https://s-media-cache-ak0.pinimg.com/564x/92/ce/2e/92ce2efa74649cdd0042d469d4690d96.jpg'
            ]
        };
    }

    componentDidMount() {
        this.setState({
            imageSrcArray: this.state.imageSrcArray
        });

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
            backgroundImage: 'url(' + this.state.imageSrcArray[counter] + ')',
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