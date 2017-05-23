import Realm from 'realm'

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

let Initials = {};

Initials.initializeTasks = () => {
    let tasks = realm.objects('Tasks');
    if(!tasks.length) {
        realm.write(() => {
            realm.create('Tasks', {
                name: 'Wash the dishes',
                category: 'chores',
            });
            realm.create('Tasks', {
                name: 'Water the plants',
                category: 'chores',
            });
            realm.create('Tasks', {
                name: 'Clean your room',
                category: 'chores',
            });
            realm.create('Tasks', {
                name: 'Clean the house',
                category: 'chores',
            });
            realm.create('Tasks', {
                name: 'Do the laundry',
                category: 'chores',
            });
            realm.create('Tasks', {
                name: 'Practice some math',
                category: 'education',
            });
            realm.create('Tasks', {
                name: 'Read a novel',
                category: 'education',
            });
            realm.create('Tasks', {
                name: 'Do your assignments',
                category: 'education',
            });
            realm.create('Tasks', {
                name: 'Understand some art',
                category: 'education',
            });
            realm.create('Tasks', {
                name: 'Play memory games',
                category: 'education',
            });
            realm.create('Tasks', {
                name: 'Jog for a mile',
                category: 'health',
            });
            realm.create('Tasks', {
                name: 'Eat some veggies',
                category: 'health',
            });
            realm.create('Tasks', {
                name: 'Do yoga',
                category: 'health',
            });
            realm.create('Tasks', {
                name: 'Drink a glass of water',
                category: 'health',
            });
            realm.create('Tasks', {
                name: 'Take your vitamins',
                category: 'health',
            });

            realm.create('Tasks', {
                name: 'Watch a movie',
                category: 'recreation',
            });
            realm.create('Tasks', {
                name: 'Hang out with friends',
                category: 'recreation',
            });
            realm.create('Tasks', {
                name: 'Go to a park',
                category: 'recreation',
            });
            realm.create('Tasks', {
                name: 'Watch the sunset',
                category: 'recreation',
            });
            realm.create('Tasks', {
                name: 'Play a video game',
                category: 'recreation',
            });
            realm.create('Tasks', {
                name: 'Greet a stranger',
                category: 'social',
            });
            realm.create('Tasks', {
                name: 'Compliment someone',
                category: 'social',
            });
            realm.create('Tasks', {
                name: 'Do someone a favor',
                category: 'social',
            });
            realm.create('Tasks', {
                name: 'Smile to someone',
                category: 'social',
            });
            realm.create('Tasks', {
                name: 'Make a new friend',
                category: 'social',
            });
            //realm.delete(tasks);
        });
    }
}
Initials.initializeUser = () => {
    let user = realm.objects('User');
  /*  realm.write(() => {
        realm.delete(user);
    });*/
    if(!user.length) {
        realm.write(() => {
        //realm.delete(user);
            realm.create('User', {
                name: 'Douchebag',
                avatar: '../assets/images/avatars/avatar1.jpg',
                level: 1,
                interest: 'chores,education,recreation,social,health',
                hp:1,
                mana:1,
                xp:0.8,
            });
        });
    }
}

module.exports = Initials;

