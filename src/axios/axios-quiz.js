import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-3a5c3.firebaseio.com/'
})