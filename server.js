const express = require('express') //on appelle le "express" installé
const app = express() //affecte toutes les fonctionalités de expr a la const app

const courses = [
    { id: 1, name: 'oignons' },
    { id: 2, name: 'plantains' },
    { id: 3, name: 'viande' },
]

app.get('/', (req, res) => {
    res.send('Helloooo')
})

app.get('/ange', (req, res) => {
    res.send('Session apprentissage node')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.post('api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    course.push(course)
    res.send(course)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Id n'est pas présent dans le panier")
    res.send(course)
})


app.listen(3000, () => console.log('Listen on port 3000'))

//http code status 
//1xx : 101,102 --> information requete a envoyer
//2xx : {200...206} --> action ou requete a ete un succes
//3xx: {300...307} --> Redirection
//4xx:{400...417} --> erreur requête
//5xx: erreur serveur

//get: rechercher; post: trier; push: