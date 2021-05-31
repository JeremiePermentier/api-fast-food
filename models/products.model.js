const sql = require('./db.js');

const Product = function(product) {
    this.name;
    this.description;
    this.price;
    this.imgUrl;
    this.idCategory;
    this.createdAt;
}

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO Products SET ?", newProduct, (err, res) => {

        if (err) {
            console.log("error : ", err);
            result(err, null);
            return
        }

        console.log("Created product : ", ...newProduct);
        result(null, { ...newProduct })
    });
};

Product.selectProduct = (id, result) => {
    sql.query(`SELECT * FROM Products WHERE idProduct = ${id}`, (err, res) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, res)
    })
}

Product.selectAllProduct = (id , result) => {
    sql.query("SELECT * FROM Products", (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        result(null, res)
    })
}

Product.delProduct = (id, result) => {
    sql.query(`DELETE FROM Products WHERE idProduct = ${id}`, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null)
            return
        }

        result(null, res)
    })
}

module.exports = Product;