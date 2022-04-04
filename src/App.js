import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import component Routes
import Home from "./routes/Home";
import QuestionOne from "./routes/QuestionOne";
import QuestionTwo from "./routes/QuestionTwo";
import QuestionThree from "./routes/QuestionThree";
import QuestionFour from "./routes/QuestionFour";
import QuestionFive from "./routes/QuestionFive";
import Result from "./routes/Result";

function App() {
	// states
	const [languageTest, setLanguageTest] = useState("");
	const [userName, setUserName] = useState("");
	const [userGender, setUserGender] = useState("");
	const [success, setSuccess] = useState(false);
	const [score, setScore] = useState(0);

	// Correct Answer States
	const [answerOneParent, setAnswerOneParent] = useState("");
	const [answerTwoParent, setAnswerTwoParent] = useState("");
	const [answerThreeParent, setAnswerThreeParent] = useState("");
	const [answerFourParent, setAnswerFourParent] = useState("");
	const [answerFiveParent, setAnswerFiveParent] = useState("");

	// Answer States by User
	const [answerUserOneParent, setAnswerUserOneParent] = useState("");
	const [answerUserTwoParent, setAnswerUserTwoParent] = useState("");
	const [answerUserThreeParent, setAnswerUserThreeParent] = useState("");
	const [answerUserFourParent, setAnswerUserFourParent] = useState("");
	const [answerUserFiveParent, setAnswerUserFiveParent] = useState("");

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							setLanguageTest={setLanguageTest}
							languageTest={languageTest}
							setUserName={setUserName}
							userName={userName}
							setUserGender={setUserGender}
							userGender={userGender}
						/>
					}
				/>
				<Route
					path='/question-one'
					element={<QuestionOne languageTest={languageTest} score={score} setScore={setScore} />}
				/>
				<Route
					path='/question-two'
					element={<QuestionTwo languageTest={languageTest} score={score} setScore={setScore} />}
				/>
				<Route
					path='/question-three'
					element={<QuestionThree languageTest={languageTest} score={score} setScore={setScore} />}
				/>
				<Route
					path='/question-four'
					element={<QuestionFour languageTest={languageTest} score={score} setScore={setScore} />}
				/>
				<Route
					path='/question-five'
					element={<QuestionFive languageTest={languageTest} score={score} setScore={setScore} />}
				/>
				<Route
					path='/result'
					element={
						<Result userName={userName} userGender={userGender} languageTest={languageTest} score={score} />
					}
				/>
				<Route path='*' element={<div>Path Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
