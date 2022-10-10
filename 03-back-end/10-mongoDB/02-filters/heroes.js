// docker cp books.json mongo-teste:/tmp/heroes.json
// docker exec -it mongo-teste bash
// mongoimport -d hero -c heroes --file /tmp/books.json
// docker exec -it mongo-teste monosh

// {"name": "A-Bomb", "alignment": "good", "gender": "Male", "race": "Human", "aspects": {"eyeColor": "yellow", "hairColor": "No Hair", "height": 203.0, "weight": 200.0}, "publisher": "Marvel Comics"}

// 🚀 Exercício 2
db.heroes.find({ 'aspects.height': { $lt: 180 } });

//🚀 Exercício 3
db.heroes.find({ 'aspects.height': { $lt: 180 } }).count();

//Exercício 4
db.heroes.find({ 'aspects.height': { $lte: 180 } }).count();

//Exercicio 5
db.heroes.find({ 'aspects.height': { $gte: 200 } });

//Exercicio 6
db.heroes.find({ 'aspects.height': { $gte: 200 } }).count();

//Exercício 7
db.heroes.find({ 'aspects.eyeColor': 'green' });

//Exercicio 8
db.heroes.find({ 'aspects.eyeColor': 'blue' }).count();

//Exercico 9
db.heroes.find({ 'aspects.hairColor': { $in: ['No Hair', 'Black'] } });

//Exercicio 10
db.heroes.find({ 'aspects.hairColor': { $in: ['No Hair', 'Black'] } }).count();

//Exercicio 11
db.heroes.find({ 'aspects.hairColor': { $nin: ['No Hair', 'Black'] } }).count();

//Exercicio 12
db.heroes.find({ 'aspects.height': { $not: { $gt: 180 } } }).count();

//Exercicio 13
db.heroes.find({
  $nor: [{ race: 'Human' }, { 'aspects.height': { $gt: 180 } }],
});

//Exercicio 14
db.heroes.find({
  'aspects.height': { $in: [180, 200] },
  publisher: 'Marvel Comics',
});

//Exercico 15
db.heroes.find({
  $and: [
    { 'aspects.weight': { $gt: 80, $lt: 100 } },
    { publiser: { $ne: 'DC Comics' } },
    {race: {$in: ["Human", "Mutant"]}}
  ],
});

//Exercicio 16
db.heroes.find({race: {$exists: false}}).count()

//Exercico 17
db.heroes.find({"aspects.hairColor": {$exists: true}}).count()

//Exercicio 18
db.heroes.deleteOne({publisher: "Sony Pictures"})

//Exercicio 19
db.heroes.deleteMany({publisher: "George Lucas"})
