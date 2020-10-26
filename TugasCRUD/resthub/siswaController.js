// contactController.js
// Import contact model
Siswa = require('./siswaModel');

// Handle index actions
exports.index = function (req, res) {
    Siswa.get(function (err, siswas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Data Siswa Berhasil Di Ambil",
            data: siswas
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var siswa = new Siswa();
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;

    // save the contact and check for errors
    siswa.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'Siswa Berhasil Di Tambahkan',
            data: siswa
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Siswa.findById(req.params.siswa_id, function (err, siswa) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: siswa
        });
    });
};

// handle update data
exports.update = function (req, res) {
    Siswa.findById(req.params.siswa_id, function (err, siswa) {
        if (err)
            res.send(err);
            siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
            siswa.tanggallahir = req.body.tanggallahir;
            siswa.jeniskelamin = req.body.jeniskelamin;
            siswa.hobi = req.body.hobi;

        // save contact
        siswa.save(function (err) {
            if (err)
                req.json(err);
            req.json({
                message: 'siswa Berhasil Terupdate',
                data: siswa
            });
        });
    });
};

// handle delete data
exports.delete = function (req, res) {
    Siswa.remove({
        _id: req.params.siswa_id
    }, function (err, siswa) {
        if (err)
            res.send(err);

        req.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {
    Siswa.findById(req.params.siswa_id, function (err, siswa) {
        if (err)
            res.send(err);
        siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
        siswa.tanggallahir = req.body.tanggallahir;
        siswa.jeniskelamin = req.body.jeniskelamin;
        siswa.hobi = req.body.hobi;
        // save the contact and check for errors
        siswa.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: siswa
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Siswa.remove({
        _id: req.params.siswa_id
    }, function (err, siswa) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};