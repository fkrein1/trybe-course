//Analisará o array, independentemente da existência de outros valores ou a ordem em que os elementos estejam.
db.inventory.find({ tags: { $all: ['ssl', 'security'] } });

db.scores.find({ results: { $elemMatch: { $gte: 80, $lt: 85 } } });

db.products.find({ tags: { $size: 2 } });

db.monthlyBudget.find({
  $expr: { $gt: ['$spent', '$budget'] },
});

db.products.find({ sku: { $regex: /789$/ } });

db.inventory.find({ qty: { $mod: [4, 0] } });


