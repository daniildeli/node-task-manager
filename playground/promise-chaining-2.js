require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('635c325a84c918ab56149f34').then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then(count => {
    console.log(count);
}).catch(e => {
    console.log(e);
})