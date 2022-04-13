import React, { Component } from 'react';
import MovieService from '../../services/MovieService';

class EditMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            op:this.props.match.params.id,
            movie_Id:'',
            movie_name:'',
            movie_genre:'',
            movie_language:'',
            movie_hours:'',
            movie_rating:'',
            movie_description:'',
            movie_date:''
        }
    }
    componentDidMount(){
        MovieService.getByMovieId(this.state.op).then((response)=>{
            let movieob=response.data;
            this.setState({movie_Id:movieob.movieId,
                movie_name:movieob.movieName,
                movie_genre:movieob.movieGenre,
                movie_lanuage:movieob.movieLanguage,
                movie_hours:movieob.movieHours,
                movie_rating:movieob.movieRating,
                movie_description:movieob.movieDescription,
                movie_date:movieob.movieDate });
        })
       
    }

    editMovie=(e)=>{
        e.preventDefault();
        console.log(this.state);
        let movie={ movieId:this.state.movie_Id,
            movieName:this.state.movie_name,
            movieGenre:this.state.movie_genre,
            movieLanguage:this.state.movie_language,
            movieHours:this.state.movie_hours,
            movieRating:this.state.movie_rating,
            movieDescription:this.state.movie_description,
            movieDate:this.state.movie_date}
           console.log((JSON.stringify(movie)));
           MovieService.editMovie(movie);
           console.log("movie details updated succesfully");

           this.props.history.push('/Admin');
    }
    
    
    changeMovieNameHandler=(event)=>{this.setState({movie_name:event.target.value});}
    changeMovieGenreHandler=(event)=>{this.setState({movie_genre:event.target.value});}
    changeMovieLanguageHandler=(event)=>{this.setState({movie_language:event.target.value});}
    changeMovieHoursHandler=(event)=>{this.setState({movie_hours:event.target.value});}
    changeMovieRatingHandler=(event)=>{this.setState({movie_rating:event.target.value});}
    changeMovieDescriptionHandler=(event)=>{this.setState({movie_description:event.target.value});}
    changeMovieDateHandler=(event)=>{this.setState({movie_date:event.target.value});}
    changeMovieIdHandler=(event)=>{this.setState({movie_Id:event.target.value});}


    render() {
        return (
            <section>
            <div class="custom-container">
              
              <form onSubmit={this.editMovie} style={{background:'white'}}>
                <div class="col-lg-6 text-center text-lg-left" >
                  <div class="section-title">
                    <h1>Edit Movie Details</h1>
                  </div>
                </div>
                <hr />
                <div class="form-row">
                  <div class="form-group">
                    <div class="input-data">
                      <input
                        type="text"
                        class="form-control"
                        formControlName="movieId"
                        name='movie_Id'
                        id='movie_Id'
                        required
                        value={this.state.movie_Id} 
                        onChange={this.changeMovieIdHandler}
          
                      />
                      <div class="underline"></div>
                      <label for="">Movie Id</label>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <div class="input-data">
                      <input
                        type="text"
                        class="form-control"
                        formControlName="movieName"
                        name='movie_name'
                        id='movie_name'
                        required
                        value={this.state.movie_name} 
                        onChange={this.changeMovieNameHandler}
          
                      />
                      <div class="underline"></div>
                      <label for="">Movie Name</label>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <div class="row">
                      <div class="col input-data">
                        <input
                          type="text"
                          class="form-control"
                          formControlName="movieGenre"
                          name='movie_genre'
                          id='movie_genre'
                          value={this.state.movie_genre} 
                        onChange={this.changeMovieGenreHandler}
          
                          required
                        />
                        <div class="underline"></div>
                        <label for="">Movie Genre</label>
                      </div>
                      <div class="col input-data">
                        <input
                          type="text"
                          class="form-control"
                          formControlName="movieLanguage"
                          name='movie_language'
                          id='movie_language'
                          value={this.state.movie_language} 
                        onChange={this.changeMovieLanguageHandler}
                          required
                        />
                        <div class="underline"></div>
                        <label for="">Movie Language</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <div class="row">
                      <div class="col input-data">
                        <input
                          type="text"
                          class="form-control"
                          formControlName="movieHours"
                          name='movie_hours'
                          id='movie-hours'
                          value={this.state.movie_hours} 
                        onChange={this.changeMovieHoursHandler}
                          required
                        />
                        <div class="underline"></div>
                        <label for="">Movie Hours</label>
                      </div>
                      <div class="col input-data">
                        <input
                          type="number"
                          class="form-control"
                          formControlName="movieRating"
                          name='movie_rating'
                          id='movie_rating'
                          value={this.state.movie_rating} 
                        onChange={this.changeMovieRatingHandler}
                          required
                        />
                        <div class="underline"></div>
                        <label for="">Movie Rating</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-row">
                    <div class="input-data textarea">
                      <textarea
                        rows="8"
                        cols="80"
                        formControlName="movieDescription"
                        name='movie_description'
                        id='movie_description'
                        value={this.state.movie_description} 
                        onChange={this.changeMovieDescriptionHandler}
                        required
                      ></textarea>
                      <div class="underline"></div>
                      <label for="">Movie Description</label>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="date">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Enter Movie Date"
                        formControlName="movieDate"
                        name='movie_date'
                        id='movie_date'
                        value={this.state.movie_date} 
                        onChange={this.changeMovieDateHandler}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    
                  >
                    update changes
                  </button>
                </div>
              </form>
            </div>
          </section>
        );
    }
}

export default EditMovie;