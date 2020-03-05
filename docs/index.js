const express = require('express')

const app = express();

app.use(express.static('docs'));

app.get('/ally', (req, res) => {
     res.send('It is pitch black... You are likely to be eaten by a Grue.');
});


app.listen(3000, () => console.log('NodeJS Server Listening on 127.0.0.1:3000'));

/*
     hello
*/




