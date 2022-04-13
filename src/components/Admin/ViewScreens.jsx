import React, { Component } from 'react';
import ScreenService from '../../services/ScreenService';

class ViewScreens extends Component {
    constructor(props){
        super(props);
        this.state={
            op:this.props.match.params.id,
            theatreob:[],
            screenArr:[]
        }
    }
    componentDidMount(){
        console.log("in theatre and screen didiMount");
        ScreenService.getTheatreById(this.state.op).then((response)=>{
            let theatreob1=response.data;
            this.setState({theatreob:theatreob1,
                           screenArr:theatreob1.screen})
            console.log(this.state.theatreob)
            console.log(this.state.screenArr)
   
         })

    }
    addshow=(theatreId,screenId)=>{
        console.log("in add show method of viewscreen component")
        window.location.replace(`/Admin/Addshow/${theatreId}/${screenId}`)
    }
    render() {
        return (
            <div className='container'>
                <h1> Screen Details</h1>
                <hr/>
                <div>
                    <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                <th>TheatreId</th>
                                <th>TheatreName</th>
                                <th>theatreCity</th>
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {
                                <tr >
                                    <td>{this.state.theatreob.theatreId}</td>
                                    <td>{this.state.theatreob.theatreName}</td>
                                    <td>{this.state.theatreob.theatreCity}</td>
                                    
                                    
                                    
                                    
                                </tr>
                            }
                        </tbody>
                        

                    </table>
                </div>
                <div>
                <table className='table table-bordered table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                <th>ScreenId</th>
                                <th>ScreenName</th>
                                <th>rows</th>
                                <th>columns</th>
                                 
                            </tr>


                        </thead>
                        <tbody>
                            {
                                this.state.screenArr.map((screen)=>
                                <tr key={screen.screenId}>
                                    <td>{screen.screenId}</td>
                                    <td>{screen.screenName}</td>
                                    <td>{screen.rows}</td>
                                    <td>{screen.columns}</td>
                                    <td> <button className="btn btn-danger" onClick={()=>this.addshow(this.state.theatreob.theatreId,screen.screenId)}>add show</button></td>

                                </tr>)
                                
                                    
                                    
                                    
                                    
                                    
                            
                            }
                        </tbody>
                        

                    </table>
                </div>
            </div>
        );
    }
}

export default ViewScreens;