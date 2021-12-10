const router = require('express').Router();
const fs = require("fs");
const path = require("path")
let dbFile = require("../db/db.json");
const { v1: uuidv1 } = require("uuid");

router.get("/notes", (req, res) => {
    return res.json(dbFile);
});


// posting existing notes in db.json into browser
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

// removing selected note from list and writing new list back to json.db
router.delete("/notes/:id", (req, res) => {
    let notesLeft = dbFile.filter((note) => {
        return (note.id != req.params.id)
    })
    dbFile = notesLeft;
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notesLeft))
    res.send("Note deleted")
})

module.exports = router;

