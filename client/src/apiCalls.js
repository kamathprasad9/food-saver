import axios from 'axios'

export const getAllDonations = async () => {
	const result = await axios.get(
		"http://localhost:5000/api/donations",
	)
	return result.data
}

export const createDonation = async (
	donation	
) => {
	await axios.post(
		"http://localhost:5000/api/donations",
		{
			data: {
				"title": donation.title,
				"description": donation.description,
				"foodItems": donation.foodItems,
				"forNumberOfPeople": donation.forNumberOfPeople,
				"address": donation.address,
				"donationMode": donation.donationMode,
				"donationStatus": donation.donationStatus
			},
			headers: { 
				'Content-Type' : 'application/json' 
			}
		}
	)
}

export const updateDonation = async (
	donation
) => {
	await axios.patch(
		`http://localhost:5000/api/donations/${donation._id}`,
		{
			data: {
				...donation
			},
			headers: { 
				'Content-Type' : 'application/json' 
			}
		}
	)
}