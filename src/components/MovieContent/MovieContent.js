import React, { Component } from 'react';
import MovieElement from './MovieElement';

const styles = {
    Content:{
        display: 'flex',
        flexWrap: 'wrap'
    }
};

class MovieContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={styles.Content}>
                            <MovieElement 
                                movie = "2017"
                                movieName = "黑騎士"
                                movie_total_views = "532"
                                movie_total_eps = "20"
                                movie_vertical_poster = "https://s-media-cache-ak0.pinimg.com/originals/88/2c/dc/882cdca85526dfb9d9f03cf192c0846c.png"
                                />
                            <MovieElement 
                                movie = "2017"
                                movieName = "黑騎士"
                                movie_total_views = "532"
                                movie_total_eps = "20"
                                movie_vertical_poster = "https://i.pinimg.com/originals/61/d4/be/61d4be8bfc29ab2b6d5cab02f72e8e3b.jpg"
                                />
                            <MovieElement 
                                movie = "2017"
                                movieName = "黑騎士"
                                movie_total_views = "532"
                                movie_total_eps = "20"
                                movie_vertical_poster = "https://s-media-cache-ak0.pinimg.com/originals/48/b5/d3/48b5d3d3c909db8283ba3c54e10b37b7.png"
                                />
                            <MovieElement 
                                movie = "2017"
                                movieName = "黑騎士"
                                movie_total_views = "532"
                                movie_total_eps = "20"
                                movie_vertical_poster = "https://s-media-cache-ak0.pinimg.com/originals/32/9d/d6/329dd6bb6819396c66d91a8867d7964f.jpg"
                                />
                            <MovieElement 
                                movie = "2017"
                                movieName = "黑騎士"
                                movie_total_views = "532"
                                movie_total_eps = "20"
                                movie_vertical_poster = "https://s-media-cache-ak0.pinimg.com/564x/92/ce/2e/92ce2efa74649cdd0042d469d4690d96.jpg"
                                />
                        </div>
                    </div>
                </div>
            </div>       
        );
    }
  }
  
  export default MovieContent;
  