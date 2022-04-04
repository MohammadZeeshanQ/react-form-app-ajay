import React, { useEffect, useState } from "react";
import { Container, Box, Button, Typography, Grid } from "@mui/material/";

export default function Result({ userName, userGender, languageTest, score }) {
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
				</Grid>
				<Grid item xs={12} sm={5} md={4}>
					<Box sx={{ p: 1 }}>
						<Typography variant='h5'>
							Score:<span style={{ fontWeight: "bold" }}> {score}</span>
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}
