import moment from 'moment';
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
let today = moment().format('YYYY-MM-DD');
let Quests = {};

Quests.getQuestsForToday = () => {
    let quests = [];
    let currentDay = "'"+today+"'";
    let filter = "date = "+ currentDay;
    let currentQuests = realm.objects('Quests').filtered(filter);
    for(let i= 0; i<currentQuests.length;i++) {
        quests.push(currentQuests[i]);
    }
    return quests;
}

Quests.updateQuest = (data) => {
    let filter = "id = "+data.id;
    let quest = realm.objects('Quests').filtered(filter)[0];
    realm.write(() => { 
        quest.status = data.status;
    })
    console.log(quest);
}

Quests.addQuest = (data) => {
    let len = realm.objects('Quests').length + 1;
    realm.write(() => {
        realm.create('Quests', {
            id: len,
            name: data.name,
            category: data.category,
            date: today,
            status: 'ongoing',
        });
    });
}

module.exports = Quests;