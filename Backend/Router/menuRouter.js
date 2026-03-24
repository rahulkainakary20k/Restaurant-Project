
const express =require ('express')
const router = express.Router ()
 const menuController =require ('../Controller/menuController')


router.post ('/',menuController.createMenu)

router.get ('/',menuController.getAllMenu)

router.get ('/:id',menuController.getSinglemenu)

router.put ('/:id',menuController.updateMenu)

router.patch ('/:id',menuController.patchMenu)

router.delete ('/:id',menuController.deleteMenu)

module.exports =router
