// docker pull mongo
// docker run --name mongo-teste -d -p 27017:27017 mongo

// docker exec -it mongo-teste monosh

//show dbs
// use nomeDoBanco 

// Ex01
db.bios.find({ _id: 8 });

// Ex02
db.bios.find({ _id: 8 }, { name: 1 });

//Ex03
db.bios.find({ _id: 8 }, { _id: 0, name: 1, birth: 1 });

//Ex04
db.bios.find({ 'name.first': 'John' }).pretty();

//Ex05
db.bios.find().limit(3).pretty();

//Ex06
db.bios.find().skip(5).limit(2);

//Ex 07
// docker cp books.json mongo-teste:/tmp/books.json
// docker exec -it mongo-teste bash
// mongoimport -d bios -c books --file /tmp/books.json
db.books.countDocuments({});

// Ex08
db.books.countDocuments({ status: 'PUBLISH' });

// Ex09
db.books.find({}, { title: 1, isbn: 1, _id: 0, pageCount: 1 }).limit(3);

// Ex10
db.books
  .find({ status: 'MEAP' }, { title: 1, authors: 1, status: 1 })
  .skip(5)
  .limit(10);
