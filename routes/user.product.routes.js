const express = require('express')
const router = express.Router()

const UserProductController = require('../controllers/user.product.controller')

router.get('/findOne/:username', UserProductController.findOne)
router.post('/create', UserProductController.create)
router.patch('/update', UserProductController.update)
router.delete('/delete/:username/:product', UserProductController.delete)
router.get('/stats1/:username', UserProductController.stats1)

module.exports = router