const KoaRouter = require('koa-router')
const router = new KoaRouter()
const {getAll,addCustomer} = require('./../controller/customerController')

router.prefix('/customer')

router.get('/',async(ctx)=>{
    await getAll(ctx);
})

router.post('/add',async(ctx)=>{
    await addCustomer(ctx.request,ctx.response);
})

module.exports = router;