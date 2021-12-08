const router = require('express').Router();
const fs = require("fs");
const dbFile = require("../db/db.json");
const uniqid = require("uniqid");

// Note: 
// const sample = require("sample");
// if use uniqid (better?) change "sample" to uniqid
router.get("/api/notes", (req, res) => {
    return res.json(dbFile);
});


// router.get("/api/notes", (req, res) => {
//     fs.readFile(dbFile, "utf8", (err, data) => {
//         // console.log(json(JSON.parse(data)));
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(JSON.parse(data));
//         }
//     });   
// });


// posting a note
router.post("/api/notes", (req, res) => {
    // fs.readFile(dbFile, "utf8", (err, data) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var noteId = uniqid();
            var id = "id";
            noteNew[id] = noteId;
            var jsonDB = JSON.parse(data);
            var noteNew = req.body;
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(jsonDB), (err) => {
                if (err) throw err;
                res.json(jsonDB);
            })
        }

    });
});

// delete a note}




module.exports = router;

