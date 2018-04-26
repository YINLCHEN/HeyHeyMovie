import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {blueGrey50, black} from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import LoginDialog from './LoginDialog';

const styles = {
    Title:{
        color: black,
        paddingLeft: '10px',
        fontSize: '24px'
    },
    SearchBar: {
        backgroundColor: blueGrey50,
        position: 'fixed',
        top: 0
    }
};

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }

    dynamicSearch = (data) => {
        this.props.dispatch({ 
            type: 'SEARCH',
            searchStr: data
        });
        this.setState({ 
            open: false
        });
    }

    handleClick() {
        this.setState({ 
            open: true
        });
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text="Hey Hey Movie" style={styles.Title} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextField hintText="Search Movie..." onChange={e => this.dynamicSearch(e.target.value)}/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Login" primary={true} onClick={() => this.handleClick()}/>
                    <LoginDialog open={this.state.open} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchStr: state.searchStr
    };
}
  
export default connect(mapStateToProps)(SearchBar);
  