const express = require('express');
const HLTV = require('hltv-api').default;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css',express.static(__dirname +'/css'));
app.use('/js',express.static(__dirname +'/js'));
app.use('/audio',express.static(__dirname +'/audio'));
app.use('/images',express.static(__dirname +'/images'));
app.use('/webfonts',express.static(__dirname +'/webfonts'));
app.use('/views', express.static(__dirname + '/views'))
app.use('/ML', express.static(__dirname + '/ML'))

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'indexCSGO.html'));
})

app.get('/teams', async (req, res) => {
    const teams = await HLTV.getTopTeams();
    res.json(teams);
});

mongoose.connect("mongodb://0.0.0.0:27017/webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Not connected");
});

app.listen(port);
console.log('Server started at http://localhost:' + port);