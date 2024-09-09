import express from "express";
import adminController from "../../src/controller/adminController.js";


const router = express.Router();

router.post("/createApp",adminController.createApp);
router.get("/getApp",adminController.getApp);
router.put("/updateApp",adminController.updateApp);
router.delete("/deleteApp/:id",adminController.deleteApp);

router.post("/status",adminController.status);
router.get("/getAllstatus",adminController.getAllstatus);
router.put("/updatestatus",adminController.updatestatus);
router.delete("/deletestatus",adminController.deletestatus);


router.post("/createCategory",adminController.createCategory);
router.get("/getAllCategory",adminController.getAllCategory);
router.put("/updateCategory",adminController.updateCategory);
router.delete("/deleteCategory/:id",adminController.deleteCategory);


router.post("/userregister",adminController.userregister);//this means after admin create payment,then set the password to apps
router.post("/userlogin",adminController.userlogin);
router.put("/UserupdatePassword",adminController.UserupdatePassword)
router.delete("/deleteuserdetails/:id",adminController.deleteuserdetails);
router.post("/register",adminController.register);
router.put("/updatePassword",adminController.updatePassword);
router.post("/login",adminController.login);


router.get("/getorganisation",adminController.getOrganisation)
router.get("/getOverAllorganisation",adminController.getOverAllorganisation)
router.delete("/deleteOrganization",adminController.deleteOrganization);

router.post("/productDetails",adminController.productDetails);
router.get("/getproductDetails/:id",adminController.getproductDetails);
router.get("/getOverallProduct",adminController.getOverallProduct);
router.put("/Productupdate",adminController.Productupdate);
router.put("/updateProductname",adminController.updateProductname);
router.post("/deleteProductDetails",adminController.deleteProductDetails);


// router.post("/register",adminController.register);
// router.put("/updateUserdetails",adminController.updateUserdetails);

router.post("/createRoomcategory",adminController.createRoomcategory);
router.get("/getRoomsAndTables/:id",adminController.getRoomsAndTables);
router.get("/getOverAllroomsAndtables",adminController.getOverAllroomsAndtables);
router.put("/updatesubroomsandtable",adminController.updatesubroomsandtable);
router.delete('/deleteTables',adminController.deleteTables);

router.post("/icon",adminController.iconandNameCreated);
router.get("/geticon/:id",adminController.geticon);
router.get("/getOverallDetails",adminController.getOverallDetails);
router.put("/updateIcon",adminController.updateIcon);
router.delete("/deleteIcon/:id",adminController.deleteIcon);

router.post("/sendEmail",adminController.sendEmail);
   

export default router
