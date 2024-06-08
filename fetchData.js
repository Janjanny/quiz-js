const axios = require('axios');

// URl
const url = '';

const fetchQuiz = (amount, difficulty, type) => {
    axios.get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`).then(response => { console.log('Data: ', response.data)}).catch(error => console.log('Error: ', error))
}

module.exports = fetchQuiz



