import Realm from 'realm';
import _ from 'lodash';
let realm = new Realm({
  schema: 
  [
    {
      name: 'Tasks', 
      properties: 
      {
          name: 'string', 
          category: 'string', 
      }
    },
    {
        name: 'Quests', 
        properties: 
        { 
            id: 'int',
            name: 'string',
            category: 'string',
            date: 'string',
            status: 'string',
        }
    },
    {
        name: 'User', 
        properties: 
        { 
            name:  {type: 'string'},
            avatar: {type: 'string'},
            level: {type: 'int'},
            interest: {type: 'string'},
            hp: {type: 'float'},
            mana: {type: 'float'},
            xp: {type: 'float'},
        }
    },
  ]
});

let User = {};

User.getName = () => {
  let user = realm.objects('User')[0].name;
  return user;
}
User.getLvl = () => {
  let user = realm.objects('User')[0].level;
  return user;
}
User.getMana = () => {
  let user = realm.objects('User')[0].mana;
  return user;
}
User.getHp = () => {
  let user = realm.objects('User')[0].hp;
  return user;
}
User.getXp = () => {
  let user = realm.objects('User')[0].xp;
  return user;
}
User.updateProgress = (data) => {
  console.log(data);
  console.log('wew');
  let user = realm.objects('User')[0];
  realm.write(() => { 
      user.mana = data.mana,
      user.hp = data.hp,
      user.xp = data.xp
  });
}
User.lvlUp = () => {
  let lvl = realm.objects('User')[0].level;
  let newLvl = lvl + 1;
  let user = realm.objects('User')[0];
  console.log(user);
  realm.write(() => { 
      user.level = newLvl
  });
}
User.lvlDown = () => {
  let lvl = realm.objects('User')[0].level;
  let newLvl = lvl - 1;
  let user = realm.objects('User')[0];
  console.log(user);
  realm.write(() => { 
      user.level = newLvl
  });
}

module.exports = User;