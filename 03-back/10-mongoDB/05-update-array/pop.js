db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });
db.supplies.updateOne({ _id: 1 }, { $pop: { items: 1 } });
