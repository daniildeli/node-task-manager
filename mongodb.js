// eslint-disable-next-line no-unused-vars
const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectId();

// console.log(id, id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database');
        return;
    }

    // eslint-disable-next-line no-unused-vars
    const db = client.db(databaseName);

    // ------------- CREATE --------------

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert user');
    //         return;
    //     }

    //     console.log(result.insertedId)
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunter',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert documents');
    //         return;
    //     }

    //     console.log(result.insertedIds);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Description for the task 1',
    //         completed: true
    //     },
    //     {
    //         description: 'Description for the task 2',
    //         completed: true
    //     },
    //     {
    //         description: 'Description for the task 3',
    //         completed: false
    //     }
    // ]).then((result) => {
    //     console.log(result.insertedIds);
    // }).catch(() => {
    //     console.log('Unable to insert documents');
    // });

    // --------------- READ ---------------------- //

    // db.collection('users').findOne({ _id: new ObjectId('6355ae76339431066860411f') })
    //     .then(user => {
    //         console.log(user)
    //     })
    //     .catch(() => {
    //         console.log('Unable to fetch')
    //     });

    // db.collection('tasks').find({ completed: false }).toArray().then(users => {
    //     console.log(users)
    // })

    // db.collection('users').countDocuments({ age: 27 }).then(count => {
    //     console.log(count)
    // })

    // --------------- UPDATE ----------------------

    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectId('6356dae1fe30c8a5aef26f0e')
    //     },
    //     {
    //         // $set: {
    //         //     name: 'Mike'
    //         // }
    //         $inc: {
    //             age: -1
    //         }
    //     }
    // ).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, { $set: { completed: true }})
    //     .then(result => {
    //         console.log(result)
    //     }).catch(error => {
    //         console.log(error)
    //     })

    //  ------------------ DELETE ------------------

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Description for the task 3'
    // }).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })
});