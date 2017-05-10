import Realm from 'realm';
import _ from 'lodash';
import Quests from './Quests'
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
let tasks = realm.objects('Tasks');
let quests = realm.objects('Quests');
let user = realm.objects('User')[0];
let allTasks = [];
for(let i=0;i<tasks.length;i++) {
    allTasks.push(tasks[i]);
}
let Tasks = {};

Tasks.generateTasks = () => {
    selectedIndex = [];
    valid = false;
    let interest = user.interest;
    interest = interest.split(',');
    for(let i=0;i<5;i++) {
        let randomInterest = Math.floor(Math.random() * interest.length);
        let selectedInterest = interest[randomInterest];
        let tasksWithInterest = _.filter(allTasks, { 'category': selectedInterest });
        while(!valid) {
            let randomTask = Math.floor(Math.random() * tasksWithInterest.length);
            if(!selectedIndex.includes(randomTask)) {
                selectedIndex.push(randomTask);
                Quests.addQuest(tasksWithInterest[randomTask]);
                break;
            }
        }
    }
}



module.exports = Tasks