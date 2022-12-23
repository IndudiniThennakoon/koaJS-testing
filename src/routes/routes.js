const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get('/',async(ctx)=>{
    console.log("Hiiiiiiiiii")
})

module.exports = router;