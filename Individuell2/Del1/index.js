const express = require("express");
const app = express();

app.listen(3000);
console.log("Kör servern på localhost:3000");

app.use(express.static("publik"));


let fs = require("fs"); 
app.get("/", (req, res) => {
    fs.readFile("form.html", function(err, htmlData) {

        fs.readFile("data.txt", function(err, textData) {
            let htmlText = htmlData.toString();
            let textText = textData.toString();
            let output = htmlText.replace(/Formulär/, textText);
            console.log(output);
            res.send(output);
        });
    });

});

app.use(express.urlencoded({extended: true}));
app.post("/", (req, res) => {
    let input = "Namn: " + req.body.name.replace(/</g, "&lt;") + "<br>\n" + "Email: " + req.body.email.replace(/</g, "&lt;") + "<br>\n" + "Phone: " + req.body.phone.replace(/</g, "&lt;") + "<br>\n" + "Comment: " + req.body.comment.replace(/</g, "&lt;") + "<br> <br> <br>\n\n";
    fs.appendFile("data.txt", input, function(err) {
        if (err) throw err;

        fs.readFile("form.html", function(err, htmlData) {
            fs.readFile("data.txt", function(err, textData) {
                let htmlText = htmlData.toString();
                let textText = textData.toString();
                let output = htmlText.replace(/Formulär/, textText);
                console.log(output);
                res.send(output);
            });
        });
    });
});


