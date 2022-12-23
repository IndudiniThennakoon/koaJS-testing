const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.prefix('/customer')

router.get('/',async(ctx)=>{
    console.log("customer")
})

module.exports = router;