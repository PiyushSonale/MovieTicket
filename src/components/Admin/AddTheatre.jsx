import React, { Component } from 'react';
import TheatreService from '../../services/TheatreService';
import './AddTheatre.css';

class AddTheatre extends Component {
    constructor(){
        super();
        this.state={
            theatre_name :'',
            theatre_city :'',
            manager_contact:'',
            manager_name:''

        }
        this.changeTheatreNameHandler=this.changeTheatreNameHandler.bind(this);
        this.changeTheatreCityHandler=this.changeTheatreCityHandler.bind(this);
        this.changeManagerContactHandler=this.changeManagerContactHandler.bind(this);
        this.changeManagerNameHandler=this.changeManagerNameHandler.bind(this);
        this.addTheatre=this.addTheatre.bind(this);


    }
    addTheatre=(u)=>{
        u.preventDefault();
        let theatre={theatreName:this.state.theatre_name,
                     theatreCity:this.state.theatre_city,
                     managerName:this.state.manager_name,
                     managerContact:this.state.manager_contact}
                     console.log((JSON.stringify(theatre)));
                     TheatreService.theatreAdd(theatre)
                     .then(response => {
                        console.log('Theatre Added successfully', response.data);
                        this.props.history.push('/TheatreList');
                    });
    }
    changeTheatreNameHandler=(event)=>{this.setState({theatre_name:event.target.value});}
    changeTheatreCityHandler=(event)=>{this.setState({theatre_city:event.target.value});}
    changeManagerContactHandler=(event)=>{this.setState({manager_contact:event.target.value});}
    changeManagerNameHandler=(event)=>{this.setState({manager_name:event.target.value});}

    render() {
        return (
            <section>
  <div class="custom-container">
    
    <form  onSubmit={this.addTheatre}>
      <div class="form-row">
        <div class="form-group">
            <h1>Theatre Details</h1>
            <br></br>
          <div class="input-data">
            <input
              type="text"
              class="form-control"
              formControlName="theatreName"
              required
            
              value={this.state.theatre_name} 
              onChange={this.changeTheatreNameHandler}
            />
            <div class="underline"></div>
            <label for="">Theatre Name</label>
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
                formControlName="theatreCity"
                required
                
              value={this.state.theatre_city} 
              onChange={this.changeTheatreCityHandler}
              />
              <div class="underline"></div>
              <label for="">Theatre City</label>
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
                formControlName="managerName"
                required
                
              value={this.state.manager_name} 
              onChange={this.changeManagerNameHandler}
              />
              <div class="underline"></div>
              <label for="">Manager Name</label>
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
                formControlName="managerContact"
                required
                
              value={this.state.manager_contact} 
              onChange={this.changeManagerContactHandler}
              />
              <div class="underline"></div>
              <label for="">Manager Contact</label>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button type="submit" class="btn btn-primary">Add Theatre</button>
      </div>
    </form>
  </div>
</section>
        );
    }
}

export default AddTheatre;