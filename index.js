const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(
    'index', 
    { 
      title: 'AWS Cetified Developer', 
      mainText: 'AWS Cetified Developer - Associate Certificate Registrations', 
      subText: `Drop your email address below to Register. 
      <br>Nikhil & Shailesh`
    }
    );
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
