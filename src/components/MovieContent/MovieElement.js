import React, { Component } from 'react';

const styles = {
    Element:{
        width: '200px',
        margin: '50px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    Image:{
        width: '100%',
    }
};

class MovieElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            year: this.props.movie_year,
            name: this.props.movieName,
            total_views: this.props.movie_total_views,
            total_eps: this.props.movie_total_eps,
            vertical_poster: this.props.movie_vertical_poster
        };
    }
    render() {
        return (
            <div style={styles.Element}>
                <img style={styles.Image} src={this.state.vertical_poster} alt={this.state.name}/>
            </div>
        );
    }
  }
  
  export default MovieElement;
  