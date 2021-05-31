const sql = require('./db.js');

// Constructor

const User = function(user) {
    this.email = user.email;
    this.password = user.password;
    this.pseudo = user.pseudo;
    this.createdAt = new Date()
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return
        }

        console.log("Created customer : ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findByEmail = (userEmail, result) => {
    sql.query(`SELECT * FROM Users WHERE email="${userEmail}"`, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Found user : ", res[0]);
            result(null, res[0]);
            return
        }

        result({ kind: "not found" }, null );
    })
};

User.selectUser = (id, result) => {
    sql.query(`SELECT * FROM Users WHERE idUsers = ${id}`, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        result(null, res)
    })
}

User.selectAllUser = (result) => {
    sql.query(`SELECT * FROM Users`, (err, res) => {
        if (err) {
            result(err, null)
        }

        result(null, res)
    })
}

User.delUser = (id, result) => {
    sql.query(`DELETE FROM Users WHERE idUsers = ${id}`, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return
        }

        result(null, res)
    })
};

module.exports = User;