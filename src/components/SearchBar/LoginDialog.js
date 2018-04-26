import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class LoginDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.open
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open
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
                label="Next"
                secondary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        
        return (
            <div>
                <Dialog
                    title="Welcome"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <TextField
                        hintText="Email"
                        floatingLabelText="Email"
                        />
                    <br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                        />
                    <br />
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;