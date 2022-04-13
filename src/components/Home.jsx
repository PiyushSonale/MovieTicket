
import React, { Component } from 'react';
import background from './images/moviesBG.png'
import{Card} from 'react-bootstrap';




class Home extends Component {
    render() {
        return (
            <div className='text-center'>
           <Card className="bg-dark text-white">
  <Card.Img src={background} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title><h1>Online Ticket Booking System</h1></Card.Title>
    <Card.Text></Card.Text>
    <Card.Text></Card.Text>
    <Card.Text>	</Card.Text>
  </Card.ImgOverlay>
</Card>
            
            
            </div>
        );
    }
}

export default Home;