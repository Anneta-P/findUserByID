const DB = {
  levels: [
    {id: '1', name: 'junior'},
    {id: '2', name: 'middle'},
    {id: '3', name: 'senior'},
  ],
  skills: [
    {id: '1', name: 'html/css'},
    {id: '2', name: 'js'},
    {id: '3', name: 'nodejs'},
    {id: '4', name: 'react'},
    {id: '5', name: 'TypeScript'},
  ],
  users: [
    {
      id: '1',
      levelId: '3',
      name: 'Andriy Petrash',
      skills: ['1', '2', '3', '4', '5'],
    },

    {
      id: '2',
      levelId: '1',
      name: 'Oleg',
      skills: ['1', '2'],
    },
  ],
};

const findUserById = id => {
  const user = DB.users.find(user => user.id === id);

  if (!user) {
    return 'Not Found';
  }

  const level = DB.levels.find(level => level.id === user.levelId);

  const skills = user.skills.map(skillId => {
    return DB.skills.find(skill => skill.id === skillId).name;
  });

  return {
    name: user.name,
    position: level.name,
    skills: skills,
  };
};

const oleg = findUserById('2');
console.log(oleg);

const andriy = findUserById('1');
console.log(andriy);

const notFoundUser = findUserById('33');
console.log(notFoundUser);
