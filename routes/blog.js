const express=require('express')
const path=require('path')
const blogs=require('../data/blogs.js')
const router=express.Router()

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))

})
router.get('/blog',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
})
router.get('/blogpost/:slug',(req,res)=>{
    console.log('______+++++++++==========');
    let myBlog=blogs.filter((e)=>{
  return( e.slug == req.params.slug)
})
console.log('................>>>',typeof myBlog);
    
    res.sendFile(path.join(__dirname,'../templates/blogPage.html'))
    

})
module.exports=router;