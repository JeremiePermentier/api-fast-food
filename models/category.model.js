const sql = require('./db.js');

const Category = function(category) {
    this.name = category.name;
    this.createdAt = new Date()
};


Category.create = (newCategory, result) => {
    sql.query("INSERT INTO Category SET ?", newCategory, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newCategory});
    })
}

Category.selectCategory = (id, result) => {
    sql.query(`SELECT * FROM Category WHERE idCategory = ${id}`, (err, res) => {
        if (err) {
            result(err, null)
        }

        result(null, res)
    })
}

Category.selectAllCategory = (result) => {
    sql.query(`SELECT * FROM Category`, (err, res) => {
        if (err) {
            result(err, null)
        }

        result(null, res)
    })
}

Category.delCategory = (id, result) => {
    sql.query(`DELETE FROM Category WHERE idCategory = ${id}`, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return;
        }

        result(null, res)
    })
}

module.exports = Category;