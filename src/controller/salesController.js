import salesService from "../service/salesService.js";


const salesController={

    ordersCretaed:async(req,res,next)=>{
        try{
            const createOrders=await salesService.ordersCretaed(req.body);
            res.status(200).json({
                mesage:"Create Order Successfully",
                data:createOrders
            });
        }catch(error){
            error.error=error.message;
            console.error(error);
            error.statuscode=400;
            next(error);
        }
      },
      //================================
      getOrder:async(req,res,next)=>{
        const Order_id=req.params.id;
        try{
          const getIdOrdersonly=await salesService.getOrder(Order_id);
          res.status(200).json({
            message:"Get order Details",
            data:getIdOrdersonly
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
      },
      //==============================
      updateOrder:async(req,res,next)=>{
        try{
          const updateOrderDetails=await salesService.updateOrder(req.body);
          res.status(200).json({
            mesage:"Update Orders Successfully",
            data:updateOrderDetails
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
      },
      //===================================
      createOrderitem:async(req,res,next)=>{
        try{
            const orderItemCreate=await salesService.createOrderitem(req.body);
            res.status(200).json({
                mesage:"Orderitem Create Successfully",
                data:orderItemCreate
            });
        }catch(error){
            error.error=error.message;
            console.error(error);
            error.statuscode=400;
            next(error);
        }
      },
      //===================================
      getOrderItems:async(req,res,next)=>{
        const Order_Item_id=req.params.id;
        try{
          const getIdOrderItem=await salesService.getOrderItems(Order_Item_id);
          res.status(200).json({
            message:"Get OrderItem Details",
            data:getIdOrderItem
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
      },
      //====================================
      updateOrderItems:async(req,res,next)=>{
        try{
          const updateOrderItem=await salesService.updateOrderItems(req.body);
          res.status(200).json({
            mesage:"Updated Successfully",
            data:updateOrderItem
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
      },
    //============================================
    createCustomerDetails:async(req,res,next)=>{
        try{
            const customersDetails=await salesService.createCustomerDetails(req.body);
            res.status(200).json({
                mesage:"Customers Create Successfully",
                data:customersDetails
            });
        }catch(error){
            error.error=error.message;
            console.error(error);
            error.statuscode=400;
            next(error);
        }
      },
    //==================================
    getCustomers:async(req,res,next)=>{
        const Customer_id=req.params.id;
        try{
          const getIdCustomers=await salesService.getCustomers(Customer_id);
          res.status(200).json({
            message:"Get Customer Details Successfully",
            data:getIdCustomers
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //====================================
    updateCustomers:async(req,res,next)=>{
        try{
          const updateCustomersDetails=await salesService.updateCustomers(req.body);
          res.status(200).json({
            mesage:"Updated Successfully",
            data:updateCustomersDetails
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //======================================
    getallCustomers:async(req,res,next)=>{
        try{
          const getallDetails=await salesService.getallCustomers();
          res.status(200).json({
            message:"Get Overall details",
            data:getallDetails
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
  //===========================================
  createPayments:async(req,res,next)=>{
    try{
        const payments=await salesService.createPayments(req.body);
        res.status(200).json({
            mesage:"Payment Created Successfully",
            data:payments
        });
    }catch(error){
        error.error=error.message;
        console.error(error);
        error.statuscode=400;
        next(error);
    }
  },
  //============================================
  getPayments:async(req,res,next)=>{
    const Payment_id=req.params.id;
    try{
      const getIdPayment=await salesService.getPayments(Payment_id);
      res.status(200).json({
        message:"Get Payment Details ",
        data:getIdPayment
      });
    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //====================================
  createReceipts:async(req,res,next)=>{
    try{
        const receiptsCreate=await salesService.createReceipts(req.body);
        res.status(200).json({
            mesage:"Receipts Create Successfully",
            data:receiptsCreate
        });
    }catch(error){
        error.error=error.message;
        console.error(error);
        error.statuscode=400;
        next(error);
    }
  },
  //============================================
  getReceipts:async(req,res,next)=>{
    const receipts_id=req.params.id;
    try{
      const getIdReceipts=await salesService.getReceipts(receipts_id);
      res.status(200).json({
        message:"Get Receipts Details",
        data:getIdReceipts
      });
    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //=============================================
  salesReportsCreate:async(req,res,next)=>{
    try{
        const salesReport=await salesService.salesReportsCreate(req.body);
        res.status(200).json({
            mesage:"SalesReports Create Successfully",
            data:salesReport
        });
    }catch(error){
        error.error=error.message;
        console.error(error);
        error.statuscode=400;
        next(error);
    }
  },
  //===========================================
  getSalesReport:async(req,res,next)=>{
    const salesReport_id=req.params.id;
    try{
      const getIdSalesreport=await salesService.getSalesReport(salesReport_id);
      res.status(200).json({
        message:"Get Salesreport Details",
        data:getIdSalesreport
      });
    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //=====================================
  loyaltyProgramsCreate:async(req,res,next)=>{
    try{
        const loyaltyPrograms=await salesService.loyaltyProgramsCreate(req.body);
        res.status(200).json({
            mesage:"loyaltyPrograms Create Successfully",
            data:loyaltyPrograms
        });
    }catch(error){
        error.error=error.message;
        console.error(error);
        error.statuscode=400;
        next(error);
    }
  },
  //=====================================
  getIdLoyaltyPrograms:async(req,res,next)=>{
    const Loyalty_program_id=req.params.id;
    try{
      const getIdLoyalty=await salesService.getIdLoyaltyPrograms(Loyalty_program_id);
      res.status(200).json({
        message:"Get LoyaltyPrograms Details",
        data:getIdLoyalty
      });
    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //=========================================
  allOrdersFilter:async (req, res, next) => {
    try {
        const { 
          order_date,
          order_status
        } = req.query;
    
        const getAllOrderFilter = await salesService.allOrdersFilter(
          order_date,
          order_status
        );
        res.status(200).json({
            message: "Get All Order Filter Details",
            data: getAllOrderFilter
        });
    } catch (error) {
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
},
  //==================================================
    getallitems: async (req, res, next) => {
        try {
            const { 
              order_item_id,
              order_id,
              product_id,
              quantity,
              price 
            } = req.query;
        
            const getAllOrderItem = await salesService.getallitems(
              order_item_id,
              order_id,
              product_id,
              quantity,
              price
            );
        
            res.status(200).json({
                message: "Get All Order Details",
                data: getAllOrderItem
            });
        } catch (error) {
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //=======================================
    getAllcustomers:async (req, res, next) => {
      try {
          const { 
            name,
            email,
            phone_number,
            loyalty_points
          } = req.query;
      
          const getAllCustomers = await salesService.getAllcustomers(
            name,
            email,
            phone_number,
            loyalty_points
          );
      
          res.status(200).json({
              message: "Get All customers Details",
              data: getAllCustomers
          });
      } catch (error) {
        error.error=error.message;
        console.error(error);
        error.statuscode=400;
        next(error);
      }
  },
  //====================================
  getallPayment:async (req, res, next) => {
    try {
        const { 
          payment_status,
          payment_date
        } = req.query;
    
        const getallPayment = await salesService.getallPayment(
          payment_status,
          payment_date
        );
        res.status(200).json({
            message: "Get All payment Details",
            data: getallPayment
        });
    } catch (error) {
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //==============================================
  getAllReceipts:async (req, res, next) => {
    try {
        const { 
          order_id,
          receipt_type,
          receipt_date,
          receipt_data
        } = req.query;
    
        const getallReceipts = await salesService.getAllReceipts(
          order_id,
          receipt_type,
          receipt_date,
          receipt_data
        );
        res.status(200).json({
            message: "Get All receipts Details",
            data: getallReceipts
        });
    } catch (error) {
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //==========================================
  getallSalesreport:async (req, res, next) => {
    try {
        const { 
          report_date
        } = req.query;
    
        const getReportDate = await salesService.getallSalesreport(
          report_date
        );
        res.status(200).json({
            message: "Get All report Details",
            data: getReportDate
        });
    } catch (error) {
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //======================================
  getAllLoyaltyProgram:async (req, res, next) => {
    try {
        const { 
          customer_id,
          reward_points,
          last_updated
        } = req.query;
    
        const getAllLoyaltyPrograms = await salesService.getAllLoyaltyProgram(
          customer_id,
          reward_points,
          last_updated
        );
        res.status(200).json({
            message: "Get All Loyalty Details",
            data: getAllLoyaltyPrograms
        });
    } catch (error) {
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //===========================================
  
}



export default salesController;