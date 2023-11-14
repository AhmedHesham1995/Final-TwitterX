
const express=require('express')
var router=express.Router()
const {auth}=require('../middlewares/auth')

var {getAllPosts,addPost,getOnePost,updatePost,deletePost, addReply, editReply, removeReply}=require('../controllers/posts')

//posts (ahmed hesham)
router.get('/',getAllPosts)


// router.use(auth) in case we apply authorization authentication on all methods






router.post('/',addPost)


router.get('/:id',getOnePost)


router.patch('/:id',updatePost)


router.delete('/:id',deletePost)


//replies (essam)
router.put('/', addReply)

router.patch('/', editReply)

router.delete('/',removeReply)


module.exports=router