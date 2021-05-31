const Category = require('../models/category.model.js');

exports.createCategory = (req, res, next) => {
    let category = new Category({
        name: req.body.name
    })

    Category.create(category, (err, data) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(data)
        }
    })
}

exports.getCategory = (req, res, next) => {
    const id = req.params.id;

    Category.selectCategory(id, (err, data) => {
        if (err) {
            res.status(404).json({ response: 'Category Not Found' })
        } else {
            res.status(200).send(data)
        }
    })
}

exports.getAllCategory = (req, res, next) => {
    Category.selectAllCategory((err, data) => {
        if (err) {
            res.status(404).json({ response: 'Category Not Found' })
        } else {
            res.status(200).send(data)
        }
    })
}

exports.deleteCategory = (req, res, next) => {
    const id = req.params.id;

    Category.delCategory(id, (err, data) => {
        if (err) {
            res.status(404).json({ response: 'Not Found' })
        } else {
            res.status(200).json({ response: 'Votre catégorie à bien été supprimé !' })
        }
    })
};