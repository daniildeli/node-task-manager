require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('635c41d4986b5d250f9ca3d1', { age: 1 }).then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
// }).then(count => {
//     console.log(count);
// }).catch(e => {
//     console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
    await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;   
}

updateAgeAndCount('635c41d4986b5d250f9ca3d1', 2).then(count => {
    console.log('Count:', count);
}).catch(e => {
    console.log('Error', e);
});
