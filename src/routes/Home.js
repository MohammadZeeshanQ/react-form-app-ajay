import React, { useEffect, useState } from "react";
import { Container, Box, Grid, TextField, Button, MenuItem, Typography } from "@mui/material/";
import { Link } from "react-router-dom";

export default function Home({ languageTest, setLanguageTest, setUserName, userName, setUserGender, userGender }) {
	const menuGenderData = [
		{
			value: "Male",
			label: "Male",
		},
		{
			value: "Female",
			label: "Female",
		},
	];

	const menuLanguageData = [
		{
			value: "React",
			label: "React",
		},
		{
			value: "Javascript",
			label: "Javascript",
		},
		{
			value: "Html",
			label: "Html",
		},
	];

	// To get user Name
	const handleNameChange = (event) => {
		setUserName(event.target.value);
	};

	// To get user gender
	const handleGenderChange = (event) => {
		setUserGender(event.target.value);
	};

	// To get user Text Preference
	const handleLanguageChange = (event) => {
		event.preventDefault();
		setLanguageTest(event.target.value);
	};

	return (
		<div
			style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}
		>
			<Container>
				<Grid container alignItems='center'>
					<Grid item xs={12} sm={6} md={6}>
						<Typography variant='h1' gutterBottom sx={{ fontSize: "2.5rem" }}>
							Welcome, <br />
							Enter Your Details
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Box>
							<TextField
								id='outlined-basic'
								label='Name'
								variant='outlined'
								onChange={handleNameChange}
								fullWidth={true}
								sx={{ m: 1 }}
							/>
						</Box>
						{/* Gender */}
						<Box>
							<TextField
								id='outlined-select-Gender'
								select
								label='Gender'
								value={userGender}
								onChange={handleGenderChange}
								fullWidth={true}
								sx={{ m: 1 }}
							>
								{menuGenderData.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Box>

						{/* Test Language */}
						<Box>
							<TextField
								id='outlined-select-Language'
								select
								label='Language'
								value={languageTest}
								onChange={handleLanguageChange}
								fullWidth={true}
								sx={{ m: 1 }}
							>
								{menuLanguageData.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Box>
						<Box>
							<Link to='/question-one'>
								<Button variant='contained' color='primary' size='large' sx={{ m: 1 }}>
									Submit
								</Button>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
