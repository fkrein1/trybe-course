db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
    $set : {
      "ingredients.$[elemento].name": "Farinha Integral",
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha" } ] },
);


db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
    $set : {
      "ingredients.$[elemento].actor": "xícara",
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha Integral" } ] },
);