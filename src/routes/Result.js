import React, { useEffect, useState } from "react";
import { Container, Box, Button, Typography, Grid } from "@mui/material/";
import { PieChart } from "react-minimal-pie-chart";

export default function Result({ userName, userGender, languageTest, score }) {
	const [percent, setPercent] = useState(0);
	const wrongAnswer = 5 - score;
	console.log(wrongAnswer);

	const percentageData = (score) => {
		return setPercent((score / 5) * 100);
	};

	useEffect(() => {
		percentageData(score);
	}, []);

	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Grid container justifyContent='space-around'>
				<Grid item xs={12} sm={5} md={4}>
					<Box sx={{ p: 1 }}>
						<Typography variant='h5'>
							Name:<span style={{ fontWeight: "bold" }}> {userName}</span>
						</Typography>
						<Typography variant='h5'>
							Gender:<span style={{ fontWeight: "bold" }}> {userGender}</span>
						</Typography>
						<Typography variant='h5'>
							Test Language:<span style={{ fontWeight: "bold" }}> {languageTest}</span>
						</Typography>
					</Box>
					<Box sx={{ mt: 4 }}>
						<Button href='/' color='primary' variant='contained' size='large'>
							Home
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} sm={5} md={4}>
					<Box sx={{ p: 1 }}>
						<Typography variant='h5'>
							Score:<span style={{ fontWeight: "bold" }}> {score}/5</span>
						</Typography>

						<Typography variant='h5'>
							Percentage:<span style={{ fontWeight: "bold" }}> {percent}%</span>
						</Typography>
					</Box>
					<Box>
						<PieChart
							data={[
								{ title: "Correct Answer", value: score, color: "#1CEA11" },
								{ title: "Wrong Answer", value: wrongAnswer, color: "#EA2F11" },
							]}
						/>
						;
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}
