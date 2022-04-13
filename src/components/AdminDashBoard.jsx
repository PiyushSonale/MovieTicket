import React, { Component } from 'react';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';


class AdminDashBoard extends Component {
    render() {
        return (
            <div>
                <div>
            
              <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="./Home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Dropdown"
          menuVariant="dark"
        >
          <NavDropdown.Item href="./AddMovie">Add Movie</NavDropdown.Item>
          <NavDropdown.Item href="./AddTheatre">Add Theatre</NavDropdown.Item>
          <NavDropdown.Item href="./TheatreList">show Listed Theatres</NavDropdown.Item>
          <NavDropdown.Item href="./Admin/ScreenDashBoard">show Listed screens</NavDropdown.Item>
          <NavDropdown.Item href="./Admin/AddSeat">Add Seat</NavDropdown.Item>
          <NavDropdown.Item href="./Admin/viewSeats">seatChart</NavDropdown.Item>
          <NavDropdown.Item href="./Admin/BookingList">BookingList</NavDropdown.Item>
          
          
          <NavDropdown.Item href="./Movies">Show Listed Movies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <Nav className=" text-right">
      <Nav.Link href="./Login">SignOut</Nav.Link>

    
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

</div>
            
        );
    }
}

export default AdminDashBoard;