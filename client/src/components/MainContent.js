import About from "./About"
import ViewDonations from "./ViewDonations"
import AddDonation from "./AddDonation"

const MainContent = ({activePage}) => {
	console.log(activePage)
	return (
		<>
			{
				activePage === "About Us" ?
				<About />
				:
				activePage === "View Donations" ?
				<ViewDonations />
				:
				<AddDonation />
			}
		</>
	)
}

export default MainContent