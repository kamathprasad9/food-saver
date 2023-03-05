import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image"

const NavigationBar = () => {

	return (
		<Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Food Saver</Navbar.Brand>
					<Navbar.Collapse className="justify-content-end">
						<Nav>
							<NavDropdown title={
								<Image 
									// src={} 
									style={{"height": "40px", "width": "40px"}}
								/>
							} id="navbarScrollingDropdown"
								align="end"
							>
								<NavDropdown.Item disabled style={{"color": "#000000"}}>Website Stats</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
        <Navbar.Toggle />
      </Container>
    </Navbar>
	)
}

export default NavigationBar