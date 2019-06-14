// //
// const db = require('./app2_lab11_db.js');

// module.exports = class Task {
//     constructor(task) {
//         Object.assign(this, task);
//     }

//     async save() {
//         const _db = await db();
//         return _db.collection('todolist').insertOne(this);
//     }
// }

const mongoose = require('mongoose');

module.exports = mongoose.model('Task', {
    label: String,
    completed: {
        type: Boolean,
        default: false,
    },
});