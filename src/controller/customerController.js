const getAll = async (ctx) =>{
//    console.log(ctx.request.body.name)
    ctx.response.status = 200;
    ctx.response.body = {
        msg : "Get All Customer"
    }
}

const addCustomer = async (request,response) => {
        response.status = 200;
        response.body = {
            msg : "Added Customer"
        }
}

module.exports = {
    getAll,
    addCustomer
};
