import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MovieDialog from './MovieDialog';

const styles = {
    Element:{
        width: '200px',
        margin: '50px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    Image:{
        width: '100%',
        cursor: 'pointer'
    },
    Name:{
        color: 'white',
        textAlign: 'center'
    }
};

class MovieElement extends Component {

    constructor(props){
        super(props);
        this.state = {
            year: this.props.year,
            name: this.props.movieName,
            total_views: this.props.movie_total_views,
            total_eps: this.props.movie_total_eps,
            vertical_poster: this.props.movie_vertical_poster,
            data: this.props.data,
            open: false
        };
    }

    handleClick(data) {
        this.setState({ 
            open: true,
            data: data
        });
    }

    render() {
        return (
            <div style={styles.Element}>
                <div style={{height:'280px',overflow: 'hidden'}}>
                    <img style={styles.Image} src={this.state.vertical_poster} alt={this.state.name} 
                         onClick={() => this.handleClick(this.state.data)}/>          
                </div>
                <div style={styles.Name}>{this.state.name}</div>
                <MuiThemeProvider>
                    <MovieDialog open={this.state.open} data={this.state.data}/>
                </MuiThemeProvider>
            </div>
        );
    }
  }
  
  export default MovieElement;
  