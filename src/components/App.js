import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './SearchBar/SearchBar';
import MoviePreview from './MoviePreview/BackgroundBase';
import MovieContent from './MovieContent/MovieContent';
import axios from 'axios';

import '../css/App.css';
import '../css/bootstrap-grid.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadFromServer = this.loadFromServer.bind(this);
    }

    componentDidMount() {
        this.loadFromServer();
    }

    loadFromServer() {
        axios.get(this.props.url)
             .then(res => {
                this.setState({ data: res.data });
            })
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <SearchBar />
                </MuiThemeProvider>

                <MoviePreview props = {this.state.data} />
            
                <div className="App-Content">
                    <MovieContent props = {this.state.data} />
                </div>
            </div>
        );
    }
}

export default App;
