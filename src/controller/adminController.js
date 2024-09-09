import adminService from "../service/adminService.js"

const adminController = {
    createApp: async (req, res, next) => {
        try {

            const createdApp = await adminService.createApp(req.body);
            //    console.log(createdApp)
            res.status(200).json({
                message: 'App created successfully',
                data: createdApp
            });
        } catch (error) {
            console.error(error);
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },

    // ========================================
    getApp: async (req, res, next) => {
        try {
            const getApp = await adminService.getApp();
            res.status(200).json({
                message: 'successfully',
                data: getApp
            });
        } catch (error) {
            console.error('Error in getApp controller:', error);
            res.status(500).json({
                message: 'Internal server error',
                error: error.message
            });
        }
    },
    // =====================================
    updateApp: async (req, res, next) => {
        const {
            applogo_id,
            appLogo,
            sub_Category
        } = req.body
        try {
            const updateApp = await adminService.updateApp(req.body)
            res.status(200).json({
                message: 'successfully',
                data: updateApp
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // =========================
    deleteApp: async (req, res, next) => {
        const {
            id
        } = req.params
        try {
            const deleteApp = await adminService.deleteApp(id)
            res.status(200).json({
                msg: "deleted succesfully",
                data: deleteApp
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // ---------------------
    status: async (req, res) => {
        try {
            const result = await adminService.status(req.body);
            res.status(200).json({
                message: 'status created successfully',
                data: result
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating status'
            });
        }
    },

    // ========================================
    getAllstatus: async (req, res, next) => {
        try {
            const getAllstatus = await adminService.getAllstatus(req.body)
            res.status(200).json({
                msg: "successfully",
                data: getAllstatus
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // =====================================
    updatestatus: async (req, res, next) => {
        try {
            const updatestatus = await adminService.updatestatus(req.body)
            res.status(200).json({
                msg: "updated",
                data: updatestatus
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // =========================
    deletestatus: async (req, res, next) => {
        const {
            status_id
        } = req.body;
        try {
            const deletestatus = await adminService.deletestatus(status_id)
            res.status(200).json({
                msg: "deleted",
                data: deletestatus
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // ---------------------
    createCategory: async (req, res, next) => {
        try {
            const createCategory = await adminService.createCategory(req.body)
            res.status(200).json({
                data: createCategory
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }

    },
    // ========================================
    getAllCategory: async (req, res, next) => {
        try {
            const getAllCategory = await adminService.getAllCategory()
            res.status(200).json({
                data: getAllCategory
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // =====================================
    updateCategory: async (req, res, next) => {
        try {
            const updateCategory = await adminService.updateCategory(req.body)
            res.status(200).json({
                msg: "updated",
                data: updateCategory
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // =========================
    deleteCategory: async (req, res, next) => {
        const {
            id: category_id
        } = req.params;

        try {
            const deletedCategory = await adminService.deleteCategory(category_id);
            res.status(200).json({
                data: deletedCategory
            });
        } catch (error) {
            console.error('Error in deleteCategory controller:', error);
            error.statuscode = error.statuscode || 500;
            next(error);
        }
    },
    deleteTables: async (req, res, next) => {
        try {
            const deleteDeails = await adminService.deleteTables(req.body);
            res.status(200).json({
                message: "deleted successfully",
                data: deleteDeails
            });
        } catch (error) {
            error.error = error.message;
            console.error(error);
            error.statuscode = 400;
            next(error);
        }
    },



    // ==================================
    register: async (req, res, next) => {
        // console.log(req.body,"k")
        try {
            const register = await adminService.register(req.body)
            res.status(200).json({
                message: "registered successfully",
                data: register
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }

    },
    // ================
    updatePassword: async (req, res, next) => {
        try {
            const updatePassword = await adminService.updatePassword(req.body)
            res.status(200).json({
                message: "successfully",
                data: updatePassword
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // ===============
    userregister: async (req, res, next) => {
        // console.log(req.body, "")
        try {
            const register = await adminService.userregister(req.body)
            res.status(200).json(register);
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }

    },
    // ==========================
    userlogin: async (req, res, next) => {
        // console.log(req.body, "")
        try {
            const userlogin = await adminService.userlogin(req.body)
            res.status(200).json(userlogin);
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }

    },
    // ----------------------------------
    UserupdatePassword: async (req, res, next) => {
        // console.log(req.body, "")
        try {
            const UserupdatePassword = await adminService.UserupdatePassword(req.body)
            res.status(200).json(UserupdatePassword);
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }

    },
    // ====================
    login: async (req, res, next) => {
        console.log(req.body, "sk");
        try {
            const login = await adminService.login(req.body);
            res.status(200).json({
                message: "successfully",
                data: login
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error.error || 'An error occurred'
            });
        }
    },

    // ------------------------
    getOrganisation: async (req, res, next) => {
        const {
            admin_id
        } = req.body
        try {
            const getOrganisation = await adminService.getOrganisation(admin_id)
            res.status(200).json({
                message: "successfully",
                data: getOrganisation
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },
    // ================
    getOverAllorganisation: async (req, res, next) => {
        try {
            const getOverAllorganisation = await adminService.getOverAllorganisation()
            res.status(200).json({
                data: getOverAllorganisation
            });
        } catch (error) {
            error.message = error.error;
            console.log(error);
            error.statuscode = 500;
            next(error);
        }
    },

    deleteOrganization: async (req, res, next) => {
        try {
            const deleteOrgDetails = await adminService.deleteOrganization(req.body);
            res.status(200).json(deleteOrgDetails);
        } catch (error) {
            error.error = error.message;
            console.error(error);
            error.statuscode = 400;
            next(error);
        }
    },
    // ======================

    productDetails: async (req, res, next) => {
        try {
            const productList = await adminService.productDetails(req.body);
            res.status(200).json({
                message: "Product Stored",
                data: productList
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //=====================================
    getproductDetails: async (req, res, next) => {
        const {
            id
        } = req.params
        try {
            const getIdProduct = await adminService.getproductDetails(id);
            res.status(200).json({
                data: getIdProduct
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //=============================
    getOverallProduct: async (req, res, next) => {
        try {
            const getOverAllProducts = await adminService.getOverallProduct();
            res.status(200).json({
                data: getOverAllProducts
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //===============================
    Productupdate: async (req, res, next) => {
        try {
            const updateidProducts = await adminService.Productupdate(req.body);
            res.status(200).json({
                data: updateidProducts
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //============================
    updateProductname: async (req, res, next) => {
        try {
            const updateProductName = await adminService.updateProductname(req.body);
            res.status(200).json({
                data: updateProductName
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //=============================
    deleteProductDetails: async (req, res, next) => {
        const {
            Product_id
        } = req.body;
        try {
            const removeProductDetails = await adminService.deleteProductDetails(req.body);
            res.status(200).json({
                data: removeProductDetails
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    // ----------------------------
    registerApp: async (req, res, next) => {
        try {
            const userDetails = await adminService.register(req.body);
            res.status(200).json({
                message: "Details Stored",
                data: userDetails
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //===================================
    updateUserdetails: async (req, res, next) => {
        try {
            const updateIdUserDetails = await adminService.updateUserdetails(req.body);
            res.status(200).json({
                data: updateIdUserDetails
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //===================================
    deleteuserdetails: async (req, res, next) => {
        const user_id = req.params.id;
        try {
            const deleteDetails = await adminService.deleteuserdetails(user_id);
            res.status(200).json({
                msg: "deleted",
                data: deleteDetails
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    // =========================================
    createRoomcategory: async (req, res, next) => {
        try {
            const categoryofRoomsTable = await adminService.createRoomcategory(req.body);
            res.status(200).json({
                message: "Details Stored",
                data: categoryofRoomsTable
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //==================================
    getRoomsAndTables: async (req, res, next) => {
        const tablerooms_id = req.params.id;
        try {
            const getsubroomsAndTables = await adminService.getRoomsAndTables(tablerooms_id);
            res.status(200).json({
                // message:"Get Rooms and Tables",
                data: getsubroomsAndTables
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //==================================
    getOverAllroomsAndtables: async (req, res, next) => {
        try {
            const getoverallSubroomsandTables = await adminService.getOverAllroomsAndtables();
            res.status(200).json({
                data: getoverallSubroomsandTables
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    //==================================
    updatesubroomsandtable: async (req, res, next) => {
        try {
            const updateId = await adminService.updatesubroomsandtable(req.body);
            res.status(200).json({
                data: updateId
            });
        } catch (error) {
            error.message = error.error;
            error.statuscode = 400;
            console.error(error);
            next(error);
        }
    },
    // ==========================

    iconandNameCreated: async (req, res, next) => {
        try {
            const iconandNameCreated = await adminService.iconandNameCreated(req.body);
            res.status(200).json({
                msg: "icon created successfully",
                data: iconandNameCreated
            });
        } catch (error) {
            error.error = error.message;
            console.error(error);
            error.statuscode = 400;
            next(error);
        }
    },
    //=========================================
    geticon: async (req, res, next) => {
        const icon_id = req.params.id;
        try {
            const getOnlyIddetails = await adminService.geticon(icon_id);
            res.status(200).json({
                data: getOnlyIddetails
            });
        } catch (error) {
            error.error = error.message;
            console.error(error);
            error.statuscode = 400;
            next(error);
        }
    },
    //=========================================
    getOverallDetails: async (req, res, next) => {
        try {
            const getOverAlldetails = await adminService.getOverallDetails();
            res.status(200).json({
                data: getOverAlldetails
            });
        } catch (error) {
            error.error = error.message;
            console.error(error);
            error.statuscode = 400;
            next(error);
        }
    },
    //========================================
    updateIcon: async (req, res, next) => {
        try {
            const idupdateDetails = await adminService.updateIcon(req.body);
            res.status(200).json(idupdateDetails);
        } catch (error) {
            error.error = error.message;
            console.error(error);
            error.statuscode = 400;
            next(error);
        }
    },
    //======================================
    deleteIcon: async (req, res, next) => {
        const {
            id
        } = req.params
        try {
            const deleteDetails = await adminService.deleteIcon(id);
            res.status(200).json(deleteDetails);
        } catch (error) {
            error.error = error.message;
            console.error(error);
            error.statuscode = 400;
            next(error);
        }
    },
    // =================================
    sendEmail: async (req, res, next) => {
        const {
            email,
            link
        } = req.body;

        try {
            const sendEmail = await adminService.sendEmailService(email, link);
            res.status(200).send('Email sent successfully')
        } catch (error) {
            error.error = error.message;
            console.error(error);
            error.statuscode = 400;
            next(error);
        }
    },


    //   =====================================
    getallCategoryStock:async (req, res, next) => {
        try {
            const { 
                ProductImage,
                ProductName,
                ProductCatagory,
                Price
            } = req.query;
        
            const getAllCategoryStock = await adminService.getallCategoryStock(
                ProductImage,
                ProductName,
                ProductCatagory,
                Price
            );
            res.status(200).json({
                message: "Get All category Details",
                data: getAllCategoryStock
            });
        } catch (error) {
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
      },
 



      //===================================
      getOverallOrder:async(req,res,next)=>{
        try{
          const getOverAllOrders=await adminService.getOverallOrder();
          res.status(200).json({
            message:"Get Overall Orders",
            data:getOverAllOrders
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //==================================
    gatallOrderItems:async(req,res,next)=>{
        try{
          const getallOrderlist=await adminService.gatallOrderItems();
          res.status(200).json({
            message:"Get OverallItems details",
            data:getallOrderlist
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //=============================================
    getallCustomers:async(req,res,next)=>{
        try{
          const getallDetails=await adminService.getallCustomers();
          res.status(200).json({
            message:"Get OverallCustomers details",
            data:getallDetails
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //===============================================
    getallPayments:async(req,res,next)=>{
        try{
          const getallPayments=await adminService.getallPayments();
          res.status(200).json({
            message:"Get Overall Payments details",
            data:getallPayments
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //==============================================
    getallReceipts:async(req,res,next)=>{
        try{
          const getallReceipts=await adminService.getallReceipts();
          res.status(200).json({
            message:"Get Overall Receipts Details",
            data:getallReceipts
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //==============================================
    getallSalesReport:async(req,res,next)=>{
        try{
          const getallSalesReport=await adminService.getallSalesReport();
          res.status(200).json({
            message:"Get Overall SalesReport Details",
            data:getallSalesReport
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //===============================================
    getAllLoyaltyPrograms:async(req,res,next)=>{
        try{
          const getOverallLoyaltyPrograms=await adminService.getAllLoyaltyPrograms();
          res.status(200).json({
            message:" Overall LoyaltyPrograms Details",
            data:getOverallLoyaltyPrograms
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //=================================================
    getallTables:async(req,res,next)=>{
        try{
          const getallTable=await adminService.getallTables();
          res.status(200).json({
            message:" Overall Tables Details",
            data:getallTable
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },  


}
export default adminController