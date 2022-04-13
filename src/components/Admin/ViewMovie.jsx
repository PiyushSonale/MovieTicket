import React, { Component } from 'react';
import axios from 'axios';

class ViewMovie extends Component {
    constructor(props){
        super(props);
        this.state={
            op:this.props.match.params.movieId,
            theatreOb:[],
            theatreCity:'',
            theatreName:'',
            screenName:'',
            showName:'',
            showDate:'',
            showStartTime:'',
            showEndTime:'',
            movieName:'',
            movieHours:'',
            showId:''
            
        }

    }
    componentDidMount(){
        console.log("in component didmount of view movie");
        axios.get(`http://localhost:8080/theatre/findbyMovie/${this.state.op}`)
        .then((response)=>{
            let theatre=response.data;
            
            this.setState({theatreOb:theatre});
            console.log(this.state.theatreOb);
            console.log("printing theatreId");
            this.state.theatreOb.map((theatre)=>{
                this.setState({theatreName:theatre.theatreName});
                this.setState({theatreCity:theatre.theatreCity});

                console.log(theatre.theatreId,theatre.theatreName,theatre.theatreCity,
                   theatre.screen);
                   theatre.screen.map((screen1)=>{
                       this.setState({screenName:screen1.screenName});
                       console.log(screen1.screenId,screen1.screenName)
                       screen1.show.map((show1)=>{
                          this.setState({movieName:show1.movie.movieName});
                          this.setState({movieHours:show1.movie.movieHours});
                          this.setState({showName:show1.showName});
                          this.setState({showDate:show1.showDate});
                          this.setState({showStartTime:show1.showStartTime});
                          this.setState({showEndTime:show1.showEndTime});
                          this.setState({showId:show1.showId});

                           console.log(show1.showName,show1.showDate)
                           console.log(show1.movie.movieId)
                           
                       })
                       
                   })
                   

            })
        
            
            
   
         })
    }
    render() {
        return (
            <div>
                <div>
                <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                
                                <th>TheatreName</th>
                                <th>TheatreCity</th>
                                <th>ScreenName</th>
                                
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {   
                                <tr >
                                    <td>{this.state.theatreName}</td>
                                    <td>{this.state.theatreCity}</td>
                                    <td>{this.state.screenName}</td>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </tr>
                            }
                        </tbody>
                        

                    </table>
                    </div>
                    <div>
                <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                
                                <th>MovieName</th>
                                <th>MovieHours</th>
                                <th>ShowId</th>
                                <th>ShowName</th>
                                <th>ShowDate</th>
                                <th>Show StartTime</th>
                                <th>Show EndTime</th>
                                
                                
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {   
                                <tr >
                                    <td>{this.state.movieName}</td>
                                    <td>{this.state.movieHours}</td>
                                    <td>{this.state.showId}</td>
                                    <td>{this.state.showName}</td>
                                    <td>{this.state.showDate}</td>
                                    <td>{this.state.showStartTime}</td>
                                    <td>{this.state.showEndTime}</td>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </tr>
                            }
                        </tbody>
                        

                    </table>
                    </div>
            </div>
        );
    }
}

export default ViewMovie;