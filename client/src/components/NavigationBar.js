import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image"

const NavigationBar = ({
	activePage,
	setActivePage
}) => {

	const handleClick = (pageName) => {
		setActivePage(pageName)
	}

	return (
		<Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Food Saver</Navbar.Brand>
					<Navbar.Collapse >
						<Nav>
							<Nav.Link 
								onClick={() => {
									handleClick("About Us")
								}} 
								style={{background: activePage==="About Us" ? "green" : ""}}
							>
								About Us
							</Nav.Link>
							<Nav.Link 
								onClick={() => {
									handleClick("View Donations")
								}} 
								style={{background: activePage==="View Donations" ? "green" : ""}}
							>
								View Donations
							</Nav.Link>
							<Nav.Link 
								onClick={() => {
									handleClick("Add Donation")
								}}  
								style={{background: activePage==="Add Donation" ? "green" : ""}}
							>
								Add Donation
							</Nav.Link>
							
							{/* <NavDropdown title={
								<Image 
									// src={} 
									style={{"height": "40px", "width": "40px"}}
								/>
							} id="navbarScrollingDropdown"
								align="end"
							>
								<NavDropdown.Item disabled style={{"color": "#000000"}}>Website Stats</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
        <Navbar.Toggle />
      </Container>
    </Navbar>
	)
}

export default NavigationBar