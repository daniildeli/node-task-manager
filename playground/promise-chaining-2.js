require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('635c325a84c918ab56149f34').then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then(count => {
//     console.log(count);
// }).catch(e => {
//     console.log(e);
// });

const deleteTaskAndCount = async id => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;   
}

deleteTaskAndCount('635c4477fd5d3a2724bb3eda', 2).then(count => {
    console.log('Count:', count);
}).catch(e => {
    console.log('Error', e);
});
