const express = require('express');
const app = express();

app.use(express.static('public'));

app.post('/*', function(req, res){

    console.log("Got a post, isn't that funny");
    console.log(req);
    return("Post response")

})

app.get('/*', (req, res) => {

    console.log("Got a get, that's hilarious");
    console.log(req);
    return("<p>Get response</p>");

    })

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => console.log(`Running at localhost:`+port));

// http://localhost:3000/chess.html