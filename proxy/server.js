require('newrelic');
const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const proxy = require('http-proxy-middleware')
const compression = require('compression')
const app = express();

const port = 80
app.get('/loaderio-68cde58e4824629a3fbe14c5c4e38a81', (req,res) => {
  res.send('loaderio-68cde58e4824629a3fbe14c5c4e38a81')
  
})

app.get('/loaderio-adbd35723a84b8dd5a28a589c1d2d272', (req,res) => {
  res.send('loaderio-adbd35723a84b8dd5a28a589c1d2d272')
  
})
// app.use(compression());
// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/overview', proxy({
  target: 'http://ec2-52-53-226-76.us-west-1.compute.amazonaws.com/'
}));
app.use('/api/photos', proxy({
  target: 'http://ec2-52-15-166-74.us-east-2.compute.amazonaws.com/'
}));
app.use('/api/reserve', proxy({
  target: 'http://ec2-18-217-214-176.us-east-2.compute.amazonaws.com/'
}));
app.use('/menu', proxy({
  target: 'http://ec2-54-166-217-205.compute-1.amazonaws.com'
}));
// app.use('/overview', proxy({
//   target: 'http://ec2-18-191-13-163.us-east-2.compute.amazonaws.com/'
// }));
// app.use('/overview', proxy({
//   target: ''
// }));

app.use('/:id', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Listening to server at http://localhost:${port}`);
})
