const express = require('express');
const app = express();

//Set template engine and where to find files.
app.set('view engine', 'pug');
app.set('views', `${__dirname}/templates`);

//If any URL matches a file in directory, express will respond
//to the request with the file instead. Else, it will pass through
//one of the routes below.
app.use(express.static(`${__dirname}/public`));

//Routes.
app.get('/', (req,res) => {
  res.render('home/index');
})

app.get('/calendar', (req,res) => {
  res.render('calendar/index');
})

app.get('/notes',(req,res) => {
  res.render('notes/index');
})

app.listen(8080, function() {
  console.log("Listening on port 8080");
})
