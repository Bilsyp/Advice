import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Button } from '@material-ui/core';
function App() {
	const [Advice, setAdvice] = useState('');
	const GetAdvice = () => {
		try {
			const Data = axios
				.get('https://api.adviceslip.com/advice')
				.then(res => setAdvice(res.data.slip.advice));
		} catch (error) {
			setAdvice(error);
		}
	};
	useEffect(() => {
		GetAdvice();
	}, []);
	return (
		<main>
			<div className="container">
				<div className="card">
					<h1>{Advice}</h1>
					<Button onClick={GetAdvice} style={{marginTop:"20px"}} color="secondary" variant="outlined">Give Me Advice</Button>
				</div>
			</div>
		</main>
	);
}

export default App;
