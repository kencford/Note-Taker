const router = require('express').Router();
const fs = require("fs");
const dbFile = require("../db/db.json");
const { v1: uuidv1 } = require("uuid");

router.get("/notes", (req, res) => {
    return res.json(dbFile);
});


// posting a note
router.post("/notes", (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv1()
    }

    dbFile.push(note);

    fs.writeFile('./db/db.json', JSON.stringify(dbFile), (err) => {
        if (err) {
            console.log(err)
        }
    })
    return res.json(dbFile);
});



// delete a note}




module.exports = router;

