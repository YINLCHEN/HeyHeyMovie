import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class MovieDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.open,
            data: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            data: nextProps.data
        });
     }

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
    
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Play!"
                target="_blank"
                href={this.state.data.src}
                secondary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
       
        var Title = this.state.data.year + "年 " + this.state.data.name;
        var Content = this.state.data.total_views + "人數觀看 總共" + this.state.data.total_eps + "集";

        return (
            <div>
                <Dialog
                    title={Title}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    {Content}
                </Dialog>
            </div>
        );
    }
}

export default MovieDialog;