import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createDonation } from '../apiCalls';

const AddDonation = () => {

	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [foodItems, setFoodItems] = useState("")
	const [forNumberOfPeople, setForNumberOfPeople] = useState("")
	const [address, setAddress] = useState("")

	const onSubmit = async () => {
		const donation = {
			"title": title,
			"description": description,
			"foodItems": foodItems,
			"forNumberOfPeople": Number(forNumberOfPeople),
			"address": address,
			"donationMode": "Pick Up",
			"donationStatus": "Active"
		}
		await createDonation(
			donation	
		)
	}

	return (
		<Form style={{
			marginLeft: "20%",
			width: "40%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(event) => {
					setTitle(event.target.value)
				}} />
      </Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" onChange={(event) => {
					setDescription(event.target.value)
				}} />
      </Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Food Items</Form.Label>
        <Form.Control type="text" placeholder="Enter food items" onChange={(event) => {
					setFoodItems(event.target.value)
				}} />
      </Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>For Number of People</Form.Label>
        <Form.Control type="text" placeholder="Enter number of people" onChange={(event) => {
					setForNumberOfPeople(event.target.value)
				}} />
      </Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" onChange={(event) => {
					setAddress(event.target.value)
				}} />
      </Form.Group>

      <Button variant="primary" type="submit"
				onClick={onSubmit}
			>
        Submit
      </Button>
    </Form>
	)
}

export default AddDonation