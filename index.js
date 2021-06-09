// const http = require('http')

// const hostname = '127.0.0.1'
// const port = '9999'

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World!\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
//   })

var argv = require('minimist')(process.argv.slice(2));
console.log(argv);

console.log('my name is %s','林益杰')
const info = {
    name:'海带丝',
    age:18
}
console.log('info:%o',info)
console.log(info);

const x = 1
console.count('x'+x);
console.count('x'+x);
console.count('x'+x);
console.count('x'+x);
console.count('x'+x);
console.count('x'+x);

const function2 = () => console.trace()
const function1 = () => function2()
function1()

const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

console.log('\x1b[33m%s\x1b[0m', 'hi!')
const chalk = require('chalk')
console.log(chalk.yellow('hi!'))