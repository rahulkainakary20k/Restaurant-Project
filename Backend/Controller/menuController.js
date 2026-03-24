

const Menu = require ("../Models/Menu")

exports .createMenu =async (req,res)=>{
    try {
        const menu = await Menu.create (req.body)
        res.status (201).json(menu)
    } catch (error) {
        res.status (400).json ({message: error.message})
    }
}
exports.getAllMenu = async (req,res)=>{
   try {
    const menu =await Menu.find ()
    res.status (200).json (menu)

   }catch (error) {
     res.status (500).json ({message:error.message})
   }
}

exports. getSinglemenu = async (req,res)=>{
    try {
        const menu = await Menu.findById (req.params.id) 
        if (!menu) {
            return res.status(404).json({message:"Menu not found"})
        }
        res.status (200).json (menu)

    }catch (error) {
        res.status(500).json ({message: error.message})
    }
}
exports.updateMenu =async (req,res)=>{
    try {
         const menu = await Menu.findByIdAndUpdate(req.params.id,req.body, {
            new : true, 
            runValidators: true
         })
         if (!menu) {
          return   res.status (404).json ({message:"Menu not found"})
         }
         res.status (200).json (menu)
    } catch (error) {
        res.status (400).json ({message:error.message})
    }
}
exports.patchMenu =async (req,res) => {
    try {
        const menu =await Menu.findByIdAndUpdate(req.params.id,{$set:req.body},
            { new: true,
                runValidators :true
            }
        )
        if (!menu) {
         return   res.status (404).json ({message: "menu not found"})
        }
        res.status (200).json(menu)
    }catch (error) {

        return res. status (400).json ({message : error.message})
    }
}

exports.deleteMenu = async (req, res) => {
    try {
        const menu = await Menu.findByIdAndDelete(req.params.id)

        if (!menu) {
            return res.status(404).json({ message: "Menu not found" })
        }

        res.status(200).json({ message: "Menu deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
