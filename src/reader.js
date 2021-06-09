
/**
 * 询问问题，获得输入值
 */
const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  },
  {
    type: 'input',
    name: 'age',
    message: "What's your age?"
  }
]

inquirer.prompt(questions).then(answers => {
    console.log(answers);
  console.log(`Hi ${answers['name']},you are ${answers.age} year!`)
})