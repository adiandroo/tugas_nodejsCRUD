// contactModel.js
var mongoose = require('mongoose');

// Setup schema
var siswaSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    tanggallahir: {
        type: String,
        required: true
    },
    jeniskelamin: String,
    hobi: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
var Siswa = module.exports = mongoose.model('siswa', siswaSchema);
module.exports.get = function (callback, limit) {
    Siswa.find(callback).limit(limit);
}