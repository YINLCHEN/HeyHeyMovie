import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {blueGrey50, black} from 'material-ui/styles/colors';

const styles = {
    Title:{
        color: black,
        paddingLeft: '10px',
        fontSize: '24px'
    },
    SearchBar: {
        backgroundColor: blueGrey50,
        position: 'fixed',
        top: 1
    }
};

class SearchBar extends Component {
    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text="Hey Hey Movie" style={styles.Title} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextField hintText="Search Movie..." />
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Login" primary={true} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
  }
  
  export default SearchBar;
  