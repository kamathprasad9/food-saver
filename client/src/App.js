import { useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import NavigationBar from './components/NavigationBar';

function App() {

	const [activePage, setActivePage] = useState("About Us")


  return (
		<>
			<NavigationBar 
				activePage={activePage} 
				setActivePage={setActivePage}
			/>
			<MainContent
				activePage={activePage}
			/>
		</>
  );
}

export default App;
