const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skillsArray = student => {
  let keys = Object.keys(student);
  let values = Object.values(student);
  let skills = [];
  for (let i = 0; i < keys.length; i += 1) {
    skills.push(`${keys[i]}, Nível: ${values[i]}`);
  }
  return skills
}

console.log(skillsArray(student2));

////////

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};


console.log(coolestTvShow['genre'])

const test = Object.entries(coolestTvShow);

console.log(coolestTvShow);

console.log(test[0][1])