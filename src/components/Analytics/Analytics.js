import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Analytics = () => {
    const [quiz, setQuiz] = useState([]);
    const [totalQuiz, setTotalQuiz] = useState([]);

    useEffect(() => {
        const quizName = [];
        const totalQuiz = [];
        const getQuiZData = async () => {
            const quizsDatas = await fetch('https://openapi.programming-hero.com/api/quiz');
            const quizData = await quizsDatas.json()
            const qData = quizData.data;
            console.log(qData);

            for (let i = 0; i < qData.length; i++) {
                quizName.push(qData[i].name)
                totalQuiz.push(qData[i].total)
            }
            setQuiz(quizName);
            setTotalQuiz(totalQuiz)

            console.log(quiz)
            console.log(totalQuiz);
        }

        getQuiZData()
    },);

    const data = [
        {
            name: quiz,
            total_quiz: totalQuiz.at(0),

        },
        {
            name: quiz,
            total_quiz: totalQuiz.at(1),

        },
        {
            name: quiz,
            total_quiz: totalQuiz.at(2),

        },
        {
            name: quiz,
            total_quiz: totalQuiz.at(3),

        },
    ]

    return (
        <div className='lg:w-[40%]  mx-auto mt-7 sm:ms-0 custom'>
            <div className='justify-items-center '>
                <BarChart width={370} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total_quiz" fill="#FF5733" />
                </BarChart>
            </div>
        </div>
    );

}





export default Analytics;