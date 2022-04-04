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

export default function QuestionThree({ languageTest, score, setScore }) {
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
				setQuestionOne("React.js had Written in ................");
				setAnswerCorrectOne("JavaScript");
				setOptionOne("JavaScript");
				setOptionTwo("Python");
				setOptionThree("Java");
				break;
			case "Javascript":
				setQuestionOne(
					".................... function of Array object joins all elements of an array into a string?"
				);
				setAnswerCorrectOne("join()");
				setOptionOne("join()");
				setOptionTwo("pop()");
				setOptionThree("concat()");
				break;
			case "Html":
				setQuestionOne("....................... is the full form of HTML");
				setAnswerCorrectOne("HyperText Markup Language");
				setOptionOne("HyperText Markup Language");
				setOptionTwo("Hyper Teach Markup Language");
				setOptionThree("Hyper Tech Markup Language");
				break;
			default:
		}
	};

	// check answer by user
	const answerCheckerHandler = (answer) => {
		if (answer === answerCorrectOne) {
			setScore(score + 1);
			if (score > 3) {
				return;
			}
			console.log(answer);
		}
	};

	useEffect(() => {
		languageQuestionHandler(languageTest);
	}, []);

	useEffect(() => {
		answerCheckerHandler(answerUserOne);
		console.log(score);
	}, [answerUserOne]);

	return (
		<div>
			<Box sx={{ width: "80%", m: "auto", pt: 6 }}>
				<Stepper activeStep={2} alternativeLabel sx={{ cursor: "pointer" }}>
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
							Question: 3
						</Typography>
					</Box>
					<Box>
						<Typography variant='h5'>{questionOne}</Typography>
					</Box>
					<Box sx={{ mt: 2, mb: 4 }}>
						<FormControl>
							<RadioGroup>
								<FormControlLabel
									value={optionOne}
									control={<Radio onChange={() => setAnswerUserOne(optionOne)} />}
									label={optionOne}
								/>
								<FormControlLabel
									value={optionTwo}
									control={<Radio onChange={() => setAnswerUserOne(optionTwo)} />}
									label={optionTwo}
								/>
								<FormControlLabel
									value={optionThree}
									control={<Radio onChange={() => setAnswerUserOne(optionThree)} />}
									label={optionThree}
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box>
						<Link to='/question-four'>
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
