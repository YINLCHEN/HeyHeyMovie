import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './SearchBar/SearchBar';
import MoviePreview from './MoviePreview/BackgroundBase';
import MovieContent from './MovieContent/MovieContent';

import '../css/App.css';
import '../css/bootstrap-grid.css';

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <SearchBar />
                </MuiThemeProvider>

                <MoviePreview />
            
                <div className="App-Content">
                    <MovieContent />
                </div>
            </div>
        );
    }
}

export default App;
