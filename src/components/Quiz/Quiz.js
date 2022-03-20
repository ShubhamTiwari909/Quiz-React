import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import Tada from 'react-reveal/Tada';
import Flash from 'react-reveal/Flash';

import './Quiz.css'
export default function Quiz() {

	const questions = [
		{
			questionText: 'CSS stands for -',
			answerOptions: [
				{ answerText: 'Color and style sheets', isCorrect: false },
				{ answerText: 'Cascade style sheets', isCorrect: false },
				{ answerText: 'Cascading style sheets', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'The property in CSS used to change the background color of an element is -',
			answerOptions: [
				{ answerText: 'bg-color', isCorrect: false },
				{ answerText: 'background-color', isCorrect: true },
				{ answerText: 'color', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: ' Which of the following is the correct syntax to display the hyperlinks without any underline?',
			answerOptions: [
				{ answerText: 'a {text-decoration : none;}', isCorrect: true },
				{ answerText: 'a {text-decoration : underline;}', isCorrect: false },
				{ answerText: 'a {decoration : no-underline;}', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'Are the negative values allowed in padding property?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: true },
				{ answerText: 'Cant say', isCorrect: false },
				{ answerText: 'Maybe', isCorrect: false },
			],
		},
		{
			questionText: 'The CSS property used to specify the transparency of an element is -',
			answerOptions: [
				{ answerText: 'filter', isCorrect: false },
				{ answerText: 'visibility', isCorrect: false },
				{ answerText: 'overlay', isCorrect: false },
				{ answerText: 'opacity', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following class in Bootstrap is used to provide a responsive fixed width container?',
			answerOptions: [
				{ answerText: '.conatiner=fixed', isCorrect: false },
				{ answerText: '.container-fluid', isCorrect: false },
				{ answerText: '.container', isCorrect: true },
				{ answerText: 'none of these', isCorrect: false },
			],
		},
		{
			questionText: ' Which of the following is the correct syntax of creating a standard navigation tab?',
			answerOptions: [
				{ answerText: '<ul class="nav nav-tabs">', isCorrect: true },
				{ answerText: '<ul class="navigation nav-tabs">', isCorrect: false },
				{ answerText: '<ul class="navigation tabs">', isCorrect: false },
				{ answerText: '<ul class="nav tab">', isCorrect: false },
			],
		},
		{
			questionText: 'Which type of JavaScript language is ',
			answerOptions: [
				{ answerText: 'Object-Oriented', isCorrect: false },
				{ answerText: 'Object-based', isCorrect: true },
				{ answerText: 'Assembly-language', isCorrect: false },
				{ answerText: 'High Level', isCorrect: true },
			],
		},
		{
			questionText: ' When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints',
			answerOptions: [
				{ answerText: 'Prints an exception error', isCorrect: false },
				{ answerText: 'Prints an overflow error', isCorrect: false },
				{ answerText: 'Prints the value as such', isCorrect: false },
				{ answerText: 'MaybeDisplays "Infinity"', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?',
			answerOptions: [
				{ answerText: 'toExponential()', isCorrect: false },
				{ answerText: 'toFixed()', isCorrect: true },
				{ answerText: 'toPrecision()', isCorrect: false },
				{ answerText: 'toLocaleString()', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
			/* you can also use 'auto' behaviour
			   in place of 'smooth' */
		});
	};


	return (
		<div className='app'>

			<div className='p-10 md:p-16 lg:px-40 lg:py-20'>

				{showScore ? (
					<div className='score-section bg-gradient-to-r from-black via-slate-800 to-neutral-900 rounded-md ring-2 ring-red-400
					text-slate-200 text-center font-sans font-semibold text-xl md:text-2xl lg:text-4xl'>
						You scored {score} out of {questions.length}
					</div>
				) : (
					<div className='questions bg-gradient-to-r from-black via-slate-800 to-neutral-900 rounded-md ring-2 ring-red-400'>
						<div className='question-section text-center text-slate-200'>
							<div className='question-count my-5'>
								<span className='font-sans font-semibold text-md md:text-2xl lg:text-4xl'>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<Flash spy={currentQuestion}>
								<div className='question-text font-sans font-semibold text-sm md:text-2xl lg:text-3xl'>
									{questions[currentQuestion].questionText}
								</div>
							</Flash>
						</div>
						<div className='answer-section text-center text-slate-200 grid grid-cols-1'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<Tada spy={currentQuestion}>
									<button className='my-5 px-5 py-2 text-xs md:text-xl lg:text-2xl text-stone-800 
								font-serif font-semibold bg-gradient-to-r from-slate-400 via-slate-300 
								to-slate-200 rounded-md ring-2 ring-indigo-300 ring-offset-4 ring-offset-indigo-800
								hover:ring-4 hover:ring-indigo-800 hover:ring-offset-slate-300'
										onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
								</Tada>
							))}
						</div>
					</div>
				)}
			</div>
			<div>
				<button className="fixed bottom-0 right-0 m-10 hover:animate-pulse"><FaArrowCircleUp color="crimson" size="2rem" onClick={scrollToTop} /></button>
			</div>
		</div>

	);
}

