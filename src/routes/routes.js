const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.prefix('/route')

router.get('/',async(ctx)=>{
    console.log("Hiiiiiiiiii")
})

module.exports = router;