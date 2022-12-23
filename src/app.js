const koa = require('koa')
const app = new koa()
const router = require('./routes/routes')
const customer = require('./routes/customerRoute')

app.use(router.routes()).use(router.allowedMethods()); // registering routes to the application
app.use(customer.routes()).use(customer.allowedMethods()); // registering routes to the application

app.listen(2400, () => console.log('Server running at PORT 2400'))

