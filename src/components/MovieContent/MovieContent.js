import React, { Component } from 'react';
import MovieElement from './MovieElement';

const styles = {
    Content:{
        display: 'flex',
        flexWrap: 'wrap'
    }
};

class MovieContent extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.props
        });
     }

    render() {
        const data = this.state.data
        const element =  Object.keys(data).map((key, index) => 
            <MovieElement 
                key = {index}
                movie = {data[key].year}
                movieName = {data[key].name}
                movie_total_views = {data[key].total_views}
                movie_total_eps = {data[key].total_eps}
                movie_vertical_poster = {data[key].vertivcal_poster}
            />
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={styles.Content}>
                            {element}
                        </div>
                    </div>
                </div>
            </div>       
        );
    }
  }
  
  export default MovieContent;
  