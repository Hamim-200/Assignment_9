import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizDetail.css'


const QuizDetail = () => {
  const quizes = useLoaderData().data

  const qustions = (quizes.questions)
  return (
    <div className='quistion-container'>
      <div className='cate-info'>
        <img src={quizes.logo} alt="" />
        <h3>Category Of quiz: {quizes.name}</h3>
      </div>
      <div className='all-qustions ' >
        {
          qustions.map((quize, index) => <Quiz key={quize.id} quize={quize} index={index} ></Quiz>)
        }
      </div>
    </div>
  );
};

export default QuizDetail;