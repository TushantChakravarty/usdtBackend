const express=require("express")
const { processTransactionTest, processTransactionTest2, bazorPay } = require("../controllers/paymentController")
// Importing all the routes
const router=express.Router()

  
// Creating express server

router.post("/test",async (req,res)=>{
    console.log(req.body)
   const response =await processTransactionTest2(req.body)
    .then((response)=>{
        return response
    })
    if(response)
    {
        if(response.success==true)
        {

            return res.json({status:200,data:response})
        }
        else{
            const resp = await bazorPay(req.body)
            if(resp.status==true)
            {
                return res.json({status:200,data:resp})
            }else{
                return res.send({status:403,message:'internal server error'})
            }
        }

    }else{
        return res.send({status:403,message:'internal server error'})
    }
})

module.exports=router