import {GET_ONE_QUIZ, GET_ALL_QUIZZES,UPDATE_QUIZ} from './types'

const initialState= {
    quizzes: [],
}

const quizInitialState ={
    quiz: {}
}

const getOneQuiz = quiz => ({
    type: GET_ONE_QUIZ,
    quiz
})

const getAllQuizzes = quizzes => ({
    type: GET_ALL_QUIZZES,
    quizzes
})

//Thunks

export const gotAllQuizzes = () => async dispatch =>{
    try{
        let response = await fetch('http://localhost:8080/api/quizzes/')
        response = await response.json()
        dispatch(getAllQuizzes(response))
    }catch(error){
        console.error(`Your error is:`,error)
    }
}

export const gotOneQuiz = id => async dispatch => {
    try{
        let response = await fetch(`http://localhost:8080/api/quizzes/quiz/${id}`)
        response = await response.json()
        dispatch(getOneQuiz(response))
    }catch(error){
        console.error(`Your error is:`,error)
    }
}




