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

export default function QuestionFive({ languageTest, score, setScore }) {
	const [questionOne, setQuestionOne] = useState("");
	const [answerCorrectOne, setAnswerCorrectOne] = useState("system");
	const [answerUserOne, setAnswerUserOne] = useState("user");

	// state for options
	const [optionOne, setOptionOne] = useState("");
	const [optionTwo, setOptionTwo] = useState("");
	const [optionThree, setOptionThree] = useState("");

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
				setQuestionOne("this.State() is used to change the state of React Component");
				setAnswerCorrectOne(true);
				console.log(`correct answer:${answerCorrectOne}`);
				break;
			case "Javascript":
				setQuestionOne("valueOf() function of Number object returns the number's value?");
				setAnswerCorrectOne(true);
				console.log(`correct answer:${answerCorrectOne}`);
				break;
			case "Html":
				setQuestionOne("<html> tag is first tag in any HTML document?");
				setAnswerCorrectOne(true);
				console.log(`correct answer:${answerCorrectOne}`);
				break;
			default:
		}
	};

	// check answer by user
	const answerCheckerHandler = (correctAnswer, userAnswer) => {
		if (correctAnswer == userAnswer) {
			console.log("Right Answer");
			console.log(`correct: ${correctAnswer}`);
			console.log(`user: ${userAnswer}`);
			setScore(score + 1);
		} else if (correctAnswer != userAnswer) {
			console.log("Wrong Answer");
			console.log(`correct: ${correctAnswer}`);
			console.log(`user: ${userAnswer}`);
			console.log("No Point");
		}
	};

	useEffect(() => {
		languageQuestionHandler(languageTest);
		console.log(languageTest);
	}, []);

	useEffect(() => {
		answerCheckerHandler(answerCorrectOne, answerUserOne);
		console.log(score);
	}, [answerUserOne]);

	return (
		<div>
			<Box sx={{ width: "80%", m: "auto", pt: 6 }}>
				<Stepper activeStep={4} alternativeLabel sx={{ cursor: "pointer" }}>
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
							Question: 5
						</Typography>
					</Box>
					<Box>
						<Typography variant='h5'>{questionOne}</Typography>
					</Box>
					<Box sx={{ mt: 2, mb: 4 }}>
						<FormControl>
							<RadioGroup>
								<FormControlLabel
									value={true}
									control={<Radio onChange={() => setAnswerUserOne(true)} />}
									label='True'
								/>
								<FormControlLabel
									value={false}
									control={<Radio onChange={() => setAnswerUserOne(false)} />}
									label='False'
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box>
						<Link to='/result'>
							<Button variant='contained' color='primary' size='large'>
								Submit
							</Button>
						</Link>
					</Box>
				</Container>
			</div>
		</div>
	);
}
