require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('635c41d4986b5d250f9ca3d1', { age: 1 }).then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
}).then(count => {
    console.log(count);
}).catch(e => {
    console.log(e);
})