const express = require('express')
const app = express()
const path = require('path')
app.use(express.json());
app.use(express.urlencoded()); 
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.post('/calcul', (req, res) => {
    var miliseconds = req.body.miliseconds;
    var minutes, seconds, total_hours, total_minutes, total_seconds;
  
    total_seconds = parseInt(Math.floor(miliseconds / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));

    seconds = parseInt(total_seconds % 60);
    minutes = parseInt(total_minutes % 60);

    res.send(total_hours +' Hours, '+ minutes +' Minutes, '+ seconds +' Seconds');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
