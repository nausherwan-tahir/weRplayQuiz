import {ScienceGameData, SportsGameData, MathsGameData} from "../../../GameData";
  
export const questionSuccess = success => ({
    type: "QUESTIONS_SUCCESS",
    data: success
});
export const scoreSuccess = success => ({
    type: "SCORE_SUCCESS",
    data: success
});
export const questionError = error => ({
    type: "QUESTIONS_ERROR",
    error
});
export const scoreError = error => ({
    type: "SCORE_ERROR",
    error
});
export const setQuestions = Info => ({
    type: "SET_QUESTIONS",
    Info
});
export const setSports = Info => ({
    type: "SET_SPORTS",
    Info
});
export const setScience = Info => ({
    type: "SET_SCIENCE",
    Info
});
export const setMaths = Info => ({
    type: "SET_MATHS",
    Info
});
export const getScore = () => ({
    type: "GET_SCORE",
});

// Load questions
export const loadQuestions = (course) => async dispatch => {
    const data = course === 1 ? SportsGameData : course === 2 ? ScienceGameData : MathsGameData;
    try {
      dispatch(setQuestions(data));
      return dispatch(questionSuccess(data));
    } catch (err) {
        return dispatch(questionError(err || 'ERROR'));
    }
}
// Load score
export const loadScore = (score, course) => async dispatch => {
    try {  
        let func = course === 1 ? (setSports(score)) : course === 2 ? (setScience(score)) : (setMaths(score))
        let response = dispatch(func);
        console.log({ScoreUpdateSuccess: response})
        return dispatch(scoreSuccess(true));
    } catch (err) {
        return dispatch(scoreError(err || 'ERROR'));
    }
}