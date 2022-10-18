import React from 'react';
import Swal from 'sweetalert2';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Quiz.css'

const Quiz = ({ quize, index }) => {
    const { question, correctAnswer } = quize

    const answer = correctAnswer => {
        alert('Correct answer is:', correctAnswer)
    }
    const test = (e) => {
        if (e === correctAnswer) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Correct Answer',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Sorry',
                text: 'Answer was not correct',
            })
        }
    }
    console.log(quize.correctAnswer)
    return (
        <div className=' quizes-container '>
            <div className='quiz-question'>
                <h2>Quistion no: {index + 1} {question}</h2>
                <button onClick={() => answer(correctAnswer)}   >See Answer  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </button>
            </div>
            <div className='quiz-options'>
                {
                    quize.options.map(option =>
                        <label className='options  bg-green-500' onClick={() => test(option)} htmlFor="">
                            <input type="radio" name="action" />
                            <p className='option'>{option}</p>
                        </label>,
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;