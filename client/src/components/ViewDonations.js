import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { getAllDonations } from '../apiCalls';

const ViewDonations = () => {

	const [donations, setDonations] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const tempData = await getAllDonations()
			console.log(tempData)
			setDonations(tempData)
		}
		fetchData()
	}, [])

	return (
		<div>
			<Container>
				<Row>
					{donations.map(don => {
						return (
						<Col>
							<Card 
								style={{ 
									width: '18rem',
									marginLeft: "20px",
									marginTop: "20px",
									marginBottom: "10px"
								}}
								key={don._id}
							>
								<Card.Body>
									<Card.Title>{don.title}</Card.Title>
									<Card.Text>
										{don.description}<br/>
										Food Information: {don.foodItems}<br/>
										Food For: {don.forNumberOfPeople} people<br/>
										Pickup Address: {don.address}<br/>
									</Card.Text>
									{/* <Button variant="primary">Request Donation</Button> */}
								</Card.Body>
							</Card>
						</Col>
						)
					})}
				</Row>
    </Container>
		</div>
	)
}

export default ViewDonations