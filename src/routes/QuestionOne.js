import React, { useEffect, useState } from "react";
import {
	Container,
	Box,
	Button,
	Typography,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	Stepper,
	Step,
	StepLabel,
} from "@mui/material/";
import { Link } from "react-router-dom";

export default function QuestionOne({ languageTest, score, setScore }) {
	const [questionOne, setQuestionOne] = useState("");
	const [answerCorrectOne, setAnswerCorrectOne] = useState("system");
	const [answerUserOne, setAnswerUserOne] = useState("user");

	// steps for the above navigation
	const steps = [
		{ name: "Question 1", link: "/question-one" },
		{ name: "Question 2", link: "/question-two" },
		{ name: "Question 3", link: "/question-three" },
		{ name: "Question 4", link: "/question-four" },
		{ name: "Question 5", link: "/question-five" },
	];

	// Changes the question based on the user previous selected language
	const languageQuestionHandler = (selectedLanguage) => {
		switch (selectedLanguage) {
			case "React":
				setQuestionOne('"npm create-next-app" command to create a new React project?');
				setAnswerCorrectOne(false);
				break;
			case "Javascript":
				setQuestionOne("<script> is HTML element do we put the JavaScript?");
				setAnswerCorrectOne(true);
				break;
			case "Html":
				setQuestionOne("HTML is a programming Language?");
				setAnswerCorrectOne(false);
				break;
			default:
				alert("No Language Selected");
		}
	};

	// check answer by user
	const answerCheckerHandler = (correctAnswer, userAnswer) => {
		if (correctAnswer === userAnswer) {
			console.log("Right Answer");
			setScore(score + 1);
		} else if (correctAnswer !== userAnswer) {
			console.log("Wrong Answer");
			console.log("No Point");
		}
	};

	useEffect(() => {
		languageQuestionHandler(languageTest);
	}, []);

	useEffect(() => {
		answerCheckerHandler(answerCorrectOne, answerUserOne);
		console.log(score);
	}, [answerUserOne]);

	return (
		<div>
			<Box sx={{ width: "80%", m: "auto", pt: 6 }}>
				<Stepper activeStep={0} alternativeLabel sx={{ cursor: "pointer" }}>
					{steps.map((item, index) => (
						<Step key={index}>
							<Link to={item.link}>
								<StepLabel>{item.name}</StepLabel>
							</Link>
						</Step>
					))}
				</Stepper>
			</Box>
			<div
				style={{
					height: "100vh",
					width: "100vw",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Container>
					<Box>
						<Typography variant='h6' sx={{ mb: 1 }}>
							Question: 1
						</Typography>
					</Box>
					<Box>
						<Typography variant='h5'>{questionOne}</Typography>
					</Box>
					<Box sx={{ mt: 2, mb: 4 }}>
						<FormControl>
							<RadioGroup>
								<FormControlLabel
									value='true'
									control={<Radio onChange={() => setAnswerUserOne(true)} />}
									label='True'
								/>
								<FormControlLabel
									value='false'
									control={<Radio onChange={() => setAnswerUserOne(false)} />}
									label='False'
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box>
						<Link to='/question-two'>
							<Button variant='contained' color='primary' size='large'>
								Next
							</Button>
						</Link>
					</Box>
				</Container>
			</div>
		</div>
	);
}
