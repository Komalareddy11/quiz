import React, { useState } from 'react';
import './Quiz.css';
import { Data } from '../../Data';

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Data[index]); 
  const [isLastPage, setIsLastPage] = useState(false);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);

 
  function nextQuestion() {
    setLock(false); 
    if (index < Data.length - 1) {
      setIndex(index + 1);
      setQuestion(Data[index + 1]); 
    } else {
      setIsLastPage(true); 
    }
  }

  
  function checkAnswer(e, ans) {
    if (!lock) {
     
      if (ans === question.ans) {
        
        setScore(score + 1); 
        e.target.classList.add('correct'); 
      } else {
       
        e.target.classList.add('incorrect'); 
        const correctOption = document.querySelector(`li:nth-child(${question.ans})`);
        correctOption.classList.add('corect');
      }
      setLock(true); 
    }
  }

  
  if (isLastPage) {
    return (
      <div className='Quiz'>
        <h3>Congratulations! Quiz Completed....!<br />Quiz score: {score} </h3>
      </div>
    );
  }

  return (
    <div className='Quiz'>
      <h1 className='h1'>KOD QUIZ</h1>
      
      <h3>{question.Question}</h3>
      <ul>
        <li onClick={(e) => checkAnswer(e, '1')}>{question.Option1}</li>
        <li onClick={(e) => checkAnswer(e, '2')}>{question.Option2}</li>
        <li onClick={(e) => checkAnswer(e, '3')}>{question.Option3}</li>
        <li onClick={(e) => checkAnswer(e, '4')}>{question.Option4}</li>
      </ul>
      <button onClick={nextQuestion}>NEXT</button>
      <div>Question: {index + 1} of {Data.length}</div>
    </div>
  );
}
