const express = require('express');
const userController = require('../controllers/userController')
const hotelController = require('../controllers/hotelController')
const reservaController = require('../controllers/reservasController')
const router = express.Router();

router.get( `/api/users`,userController.listall )
router.post( `/api/users`,userController.insert )
router.put( `/api/users`,userController.update )
router.delete( `/api/users`,userController.delete )

router.get( `/api/users`,hotelController.listall )
router.post( `/api/users`,hotelController.insert )
router.put( `/api/users`,hotelController.update )
router.delete( `/api/users`,hotelController.delete )


router.get( `/api/users`,reservaController.listall )
router.post( `/api/users`,reservaController.insert )
router.put( `/api/users`,reservaController.update )
router.delete( `/api/users`,reservaController.delete )

module.exports = router;