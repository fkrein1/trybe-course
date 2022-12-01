db.inventory.updateOne(
  { item: "paper" },
  { $set: { "size.uom": "cm", status: "P" } }
);

db.inventory.updateMany(
  { "qty": { $lt: 50 } },
  { $set: { "size.uom": "in", status: "P" } }
);

db.inventory.update(
  { item: "journal" },
  { $mul: { "size.h": NumberDecimal("1.25"), qty: 2 } }
);

db.inventory.update(
  { item: "planner" },
  { $inc: { qty: 12 } }
);


db.inventory.update(
  { item: "notebook" },
  { $min: { qty: 10 } }
);

db.inventory.update(
  { item: "postcard" },
  { $max: { qty: 120 } }
);

db.inventory.updateMany(
  {},
  {$rename: {item: "itemName"}}
  )

// $currentDate

db.inventory.updateMany(
  {},
  {$unset: {status: ""}}
)
// use conteudo_trybe;
db.inventory.insertMany([
{ "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
{ "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
{ "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
{ "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
{ "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
]);