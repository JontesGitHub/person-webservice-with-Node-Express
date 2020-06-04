const express = require('express');
const router = express.Router();
const Person = require('./Person');

router.get('/', (req, res) => {
    // Person.create({
    //     firstname: 'jonte',
    //     lastname: 'ebbasson',
    //     email: 'jonte@mail.se'
    // }, (err, person) => {
    //     if (err) return res.status(500).send('did not work jonti');
    //     res.status(200).send(person);
    // });
    Person.find({}, (err, people) => {
        if (err) return res.status(400).send('Could not be reached');
        res.send(people);
    })
});

router.get('/:id', (req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if (err) return res.status(400).send(`No person exists with that ID; ${req.params.id}`);
        res.status(200).send(person);
    })
});

router.post('/', (req, res) => {
        Person.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        }, (err, person) => {
                if (err) return res.status(400).send('Person could not be created');
                res.status(200).send(person);
            });       
});

router.put('/:id', (req, res) => {
    Person.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, person) => {
        if (err) return res.status(400).send(`Could not update person with ID: ${req.params.id}`);
        res.status(200).send(person);
    });
});

router.delete('/:id', (req, res) => {
    Person.findByIdAndDelete(req.params.id, (err, person) => {
        if (err) return res.status(400).send(`Could not delete person with ID: ${req.params.id}`);
        res.status(200).send(`Person: ${person.firstname} was deleted.`)
    })
})



module.exports = router;