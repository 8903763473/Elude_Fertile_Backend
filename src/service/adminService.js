import categoryModel from "../model/categoryTable.js";
import iconModel from "../model/iconModel.js";
import applogoModel from "../model/logoModel.js";
import organizationModel from "../model/organizationModel.js";
import ProductModel from "../model/productModel.js";
import registerModel from "../model/registerModel.js";
import roomstableModel from "../model/roomsModel.js";
import statusColorModel from "../model/statusColorModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import nodemailer from "nodemailer"
import downloadedAppModel from "../model/userRegModel.js";
import "dotenv/config";

import path from 'path';
import {
  fileURLToPath
} from 'url';

import orderModel from "../model/orderModel.js";
import orderItemModel from "../model/orderItemModel.js";
import customerModel from "../model/customerModel.js";
import paymentModel from "../model/paymentModel.js";
import receiptsModel from "../model/receiptsModel.js";
import salesReportModel from "../model/salesReportModel.js";
import loyaltyProgramsModel from "../model/loyaltyProgramsModel.js";
import TablesModels from "../model/TablesModel.js";


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});
const adminService = {
  createApp: async (data) => {
    const {
      appLogo,
      mainCategory_id,
      sub_Category
    } = data;
    try {
      const createdApp = await applogoModel.create({
        appLogo,
        mainCategory_id,
        sub_Category
      });
      return createdApp;
    } catch (error) {
      throw error;
    }
  },
  // ===============================
  getApp: async () => {

    try {
      const getApp = await applogoModel.find();

      return getApp;
    } catch (error) {
      throw error;
    }
  },
  // ============================
  updateApp: async (data) => {
    const {
      applogo_id,
      appLogo,
      sub_Category
    } = data
    try {
      const updateApp = await applogoModel.findByIdAndUpdate(
        applogo_id, {
          appLogo,
          sub_Category
        }, {
          new: true
        });
      if (!updateApp) {
        throw new Error("not found");
      }

      return updateApp;
    } catch (error) {
      throw error;
    }
  },
  // ================================
  deleteApp: async (applogo_id) => {
    console.log(applogo_id, "jjjj")
    try {
      const deleteApp = await applogoModel.findByIdAndDelete(
        applogo_id
      );
      if (!deleteApp) {
        throw new Error("logo not found");
      }
      return deleteApp;
    } catch (error) {
      throw error;
    }
  },
  // ========================
  status: async (data) => {
    const {
      statusColor,
      statusName
    } = data;
    try {
      const createdStatus = await statusColorModel.create({
        statusColor,
        statusName
      });
      return createdStatus;
    } catch (error) {
      throw error;
    }
  },
  // ===============================
  getAllstatus: async () => {

    try {
      const getApp = await statusColorModel.find();

      return getApp;
    } catch (error) {
      throw error;
    }
  },
  // ============================
  updatestatus: async (data) => {
    const {
      status_id,
      statusColor,
      statusName
    } = data
    try {
      const updatestatus = await statusColorModel.findByIdAndUpdate(status_id, {
        statusColor,
        statusName
      }, {
        new: true
      });

      return updatestatus;
    } catch (error) {
      throw error;
    }
  },
  // ================================
  deletestatus: async (status_id) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(status_id)) {
        throw new Error("Invalid status_id format.");
      }

      console.log("Attempting to delete status with ID:", status_id);

      const deleteApp = await statusColorModel.findByIdAndDelete(status_id);

      if (!deleteApp) {
        console.log(`No record found with status_id: ${status_id}`);
      } else {
        console.log(`Deleted document:`, deleteApp);
      }
      return deleteApp;
    } catch (error) {
      throw error;
    }
  },
  // ===========================
  createCategory: async (data) => {
    const {
      categoryName,
      price
    } = data;

    try {
      const createCategory = await categoryModel.create({
        categoryName,
        price
      });
      console.log("Successfully stored");
      return createCategory;
    } catch (error) {
      throw error;
    }
  },
  // ===============================
  getAllCategory: async () => {

    try {
      const getApp = await categoryModel.find();
      return getApp;
    } catch (error) {
      throw error;
    }
  },
  // ============================
  updateCategory: async (data) => {
    const {
      category_id,
      categoryName,
      price,
    } = data
    try {
      const updateCategory = await categoryModel.findByIdAndUpdate(category_id, {
        categoryName,
        price,

      }, {
        new: true
      });

      return updateCategory;
    } catch (error) {
      throw error;
    }
  },
  // ================================
  deleteCategory: async (category_id) => {
    try {
      console.log("Deleting category with ID:", category_id);
      const deletedCategory = await categoryModel.findByIdAndDelete(category_id);
      console.log(deletedCategory, "Deleted category");
      if (!deletedCategory) {
        throw new Error("Category not found");
      }
      return "deleted";
    } catch (error) {
      console.error("Error occurred while deleting category:", error);
      throw error;
    }
  },



  deleteTables: async (data) => {
    const {
      tablerooms_id
    } = data;
    try {
      const removeTableRooms = await roomstableModel.findByIdAndDelete(tablerooms_id);
      return removeTableRooms;
    } catch (error) {
      throw error;
    }
  },


  // =================
  register: async (data) => {
    const {
      category_id,
      email
    } = data;

    try {
      const organization = await adminService.organization(category_id);
      const register = await adminService.registers({
        org_id: organization._id,
        email
      });
      // console.log(register, "Registration created");

      const updateOrg = await adminService.updateOrganization({
        org_id: organization._id,
        admin_id: register._id
      });
      // console.log(updateOrg, "Organization updated");

      return {
        organization,
        updateOrg,
        register
      };
    } catch (error) {
      throw error;
    }
  },


  // ===================
  registers: async (data) => {
    const {
      org_id,
      email
    } = data;

    try {
      const register = await registerModel.create({
        org_id,
        email,
        applogo_id: 0,
        userName: "",
        password: ""
      });
      console.log(register, "Registration created");
      return register;
    } catch (error) {
      throw error;
    }
  },

  // =============================
  organization: async (category_id) => {
    try {
      const organization = await organizationModel.create({
        category_id,
        admin_id: 0
      });
      console.log(organization, "Organization created");
      return organization
    } catch (error) {
      throw error
    }
  },
  // =======================
  updateOrganization: async (data) => {
    const {
      org_id,
      admin_id
    } = data
    console.log(data, "dataa")
    try {
      const updateOrg = await organizationModel.findByIdAndUpdate(
        org_id, {
          admin_id: admin_id
        }, {
          new: true
        }
      );
      console.log(updateOrg, "Organization updated with admin_id");
      return updateOrg
    } catch (error) {
      throw error
    }
  },
  // =================
  updatePassword: async (data) => {
    const {
      admin_id,
      userName,
      password
    } = data
    try {

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashedPassword", hashedPassword);

      const updatePassword = await registerModel.findByIdAndUpdate(admin_id, {
        userName,
        password: hashedPassword
      }, {
        new: true
      })
      return updatePassword
    } catch (error) {
      throw error
    }
  },

  // ===================
  userregister: async (data) => {
    console.log(data, "j")
    const {
      admin_id,
      applogo_id,
      userName,
      password
    } = data;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashedPassword", hashedPassword);
      const adminregister = await downloadedAppModel.create({
        admin_id,
        applogo_id,
        userName,
        password: hashedPassword
      });
      console.log("Successfully stored");
      return adminregister;
    } catch (error) {
      throw error;
    }
  },
  // ====================
  userlogin: async (data) => {
    const {
      admin_id,
      password
    } = data;
    console.log(data, "Fd")
    try {
      const admin = await downloadedAppModel.findOne({
        admin_id
      });
      if (!admin) {
        throw {
          error: "Admin not found"
        };
      }
      const isPasswordMatch = await bcrypt.compare(password, admin.password);
      if (!isPasswordMatch) {
        throw {
          error: "Invalid password"
        };
      }
      const token = jwt.sign({
        admin_id: admin._id
      }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
      });
      return {
        token,
        _id: admin._id
      };
    } catch (error) {
      throw error;
    }
  },
  // -----------------------
  UserupdatePassword: async (data) => {
    const {
      applogo_id,
      userName,
      password
    } = data;
    console.log(data);

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashedPassword", hashedPassword);

      const updatePassword = await downloadedAppModel.findOneAndUpdate({
        applogo_id
      }, {
        userName,
        password: hashedPassword
      }, {
        new: true
      });

      console.log(updatePassword, "k");
      return updatePassword;
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    }
  },

  // ================
  login: async (data) => {
    const {
      email,
      password
    } = data;
    try {
      const admin = await registerModel.findOne({
        email
      });
      if (!admin) {
        throw {
          error: "Admin not found"
        };
      }
      const isPasswordMatch = await bcrypt.compare(password, admin.password);
      if (!isPasswordMatch) {
        throw {
          error: "Invalid password"
        };
      }
      const token = jwt.sign({
        admin_id: admin._id
      }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
      });
      return {
        token,
        _id: admin._id
      };
    } catch (error) {
      throw error;
    }
  },

  // ===========================
  getOrganisation: async (admin_id) => {

    try {
      const getOrganisation = await organizationModel.find({
        admin_id
      });
      return getOrganisation;
    } catch (error) {
      throw error;
    }
  },
  // ================
  getOverAllorganisation: async () => {

    try {
      const getOverAllorganisation = await organizationModel.find();
      return getOverAllorganisation;
    } catch (error) {
      throw error;
    }
  },


  deleteOrganization: async (data) => {
    const {
      organization_id
    } = data;
    try {
      const deleteDetailOrgId = await organizationModel.findByIdAndDelete(organization_id);
      if (!deleteDetailOrgId) {
        throw new Error("Organization not found");
      }
      return deleteDetailOrgId;
    } catch (error) {
      throw error;
    }
  },
  // ==================================
  productDetails: async (data) => {
    const {
      ProductImage,
      ProductName,
      ProductCatagory,
      Price,
      stock_quantity,
      supplier_id
    } = data;
    try {
      const createProductList = await ProductModel.create({
        ProductImage,
        ProductName,
        ProductCatagory,
        Price,
        stock_quantity,
        supplier_id
      });
      return createProductList;
    } catch (error) {
      throw error;
    }
  },
  //======================================
  getproductDetails: async (Product_id) => {

    try {
      const getProductId = await ProductModel.findById(Product_id);
      return getProductId;
    } catch (error) {
      throw error;
    }
  },
  //===================================
  getOverallProduct: async () => {

    try {
      const getOverAllProductdetails = await ProductModel.find();
      return getOverAllProductdetails;
    } catch (error) {
      throw error;
    }
  },
  //====================================
  Productupdate: async (data) => {
    const {
      Product_id,
      ProductImage,
      ProductName,
      ProductCatagory,
      Price,
      stock_quantity,
      supplier_id
    } = data;
    try {
      const idUpdate = await ProductModel.findByIdAndUpdate(Product_id, {
        ProductImage,
        ProductName,
        ProductCatagory,
        Price,
        stock_quantity,
        supplier_id
      }, {
        new: true
      });
      return idUpdate;
    } catch (error) {
      throw error;
    }
  },
  //=================================
  updateProductname: async (data) => {
    const {
      ProductName,
      ProductImage,
      ProductCatagory,
      Price,
      stock_quantity,
      supplier_id
    } = data;
    try {
      const changeProductDetails = await ProductModel.findOneAndUpdate({
        ProductName
      }, {
        $set: {
          ProductImage,
          ProductCatagory,
          Price,
          stock_quantity,
          supplier_id
        }
      }, {
        new: true
      });
      return changeProductDetails;
    } catch (error) {
      throw error;
    }
  },
  //=================================
  deleteProductDetails: async (data) => {
    const {
      Product_id
    } = data;
    try {
      const removeProduct = await ProductModel.findByIdAndDelete(Product_id);
      if (!removeProduct) {
        throw "not found"
      }
      return removeProduct;
    } catch (error) {
      throw error;
    }
  },
  //   ===========================
  // register:async(data)=>{
  //     const {Admin_id,App_id,UserName,Password}=data;
  //     try{
  //       const userDetails=await registerModel.create({
  //         Admin_id,
  //         App_id,
  //         UserName,
  //         Password
  //       });
  //       return userDetails;
  //     }catch(error){
  //       throw error;
  //     }
  //   },
  //=============================
  updateUserdetails: async (data) => {
    const {
      user_id,
      Admin_id,
      App_id,
      UserName,
      Password
    } = data;
    try {
      const updateUserdetails = await registerModel.findByIdAndUpdate(user_id, {
        Admin_id,
        App_id,
        UserName,
        Password
      }, {
        new: true
      });
      return updateUserdetails;
    } catch (error) {
      throw error;
    }
  },
  //============================
  deleteuserdetails: async (user_id) => {
    try {
      const deletedetails = await registerModel.findByIdAndDelete(user_id);
      if (!deletedetails) {
        throw {
          error: "not found"
        }
      }
      return deletedetails;
    } catch (error) {
      throw error;
    }
  },
  //   ===========================
  createRoomcategory: async (data) => {
    const {
      Admin_id,
      org_id,
      rooms
    } = data;
    try {
      const category = await roomstableModel.create({
        Admin_id,
        org_id,
        rooms
      });
      return category;
    } catch (error) {
      throw error;
    }
  },
  //===============================================
  getRoomsAndTables: async (tablerooms_id) => {
    try {
      const getroomsandtableDetails = await roomstableModel.findById(tablerooms_id);
      return getroomsandtableDetails;
    } catch (error) {
      throw error;
    }
  },
  //==============================================
  getOverAllroomsAndtables: async () => {

    try {
      const getoverallSubroomsandTables = await roomstableModel.find();
      return getoverallSubroomsandTables;
    } catch (error) {
      throw error;
    }
  },
  //===============================================
  updatesubroomsandtable: async (data) => {
    const {
      tablerooms_id,
      Admin_id,
      org_id,
      rooms
    } = data;
    try {
      const updateDetails = await roomstableModel.findByIdAndUpdate(tablerooms_id, {
        Admin_id,
        org_id,
        rooms
      }, {
        new: true
      });
      return updateDetails;
    } catch (error) {
      throw error;
    }
  },
  //   ======================================
  iconandNameCreated: async (data) => {
    const {
      iconImage,
      iconName
    } = data;
    try {
      const createLogoandName = await iconModel.create({
        iconImage,
        iconName
      });
      return createLogoandName;
    } catch (error) {
      throw new error;
    }
  },
  //=======================================
  geticon: async (icon_id) => {
    try {
      const getIddetails = await iconModel.findById(icon_id);
      return getIddetails;
    } catch (error) {
      throw error;
    }
  },
  //========================================
  getOverallDetails: async () => {
    try {
      const getAlldetails = await iconModel.find();
      return getAlldetails;
    } catch (error) {
      throw new error;
    }
  },
  //========================================
  updateIcon: async (data) => {
    const {
      icon_id,
      iconImage,
      iconName
    } = data;
    try {
      const updateOnlyId = await iconModel.findByIdAndUpdate(icon_id, {
        iconImage,
        iconName
      }, {
        new: true
      });
      return updateOnlyId;
    } catch (error) {
      throw new error;
    }
  },
  //=====================================
  deleteIcon: async (icon_id) => {

    try {
      const deleteIcon = await iconModel.findByIdAndDelete(icon_id);
      console.log(deleteIcon)
      if (!deleteIcon) {
        throw new Error("Icon not found.");
      }
      return "deleted";
    } catch (error) {
      throw error;
    }
  },
  // ===============================
  sendEmailService: async (email, link) => {
    if (!email) {
      throw new Error('Recipient email is required');
    }


    const emailTemplate = `
<div class="email-container" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
  <!-- Header -->
  <div class="header" style="background-color: #ff5e5e; padding: 20px; text-align: center; color: #ffffff; min-height: 200px; background-image: url('cid:mailbg');">
    <h1 style="margin: 0; font-size: 28px;">Elude Fertile</h1>
    <p style="margin: 10px 0 0; font-family: Inter; font-size: 14px; font-weight: 400; line-height: 24px; text-align: center;">
      Join more than 85,000 professionals that have already registered. Get exclusive product update reveals.
    </p>
  </div>

  <!-- Main Content -->
  <div class="main-content" style="padding: 20px; text-align: center;">
    <h2 style="font-size: 22px; color: #333333; font-family: Inter; font-weight: bold; line-height: 24px; text-align: center;">
      Elevate '22 is happening this Thursday.<br>Register now or lose the opportunity!
    </h2>
    <p style="font-size: 16px; color: #666666; line-height: 1.5; font-family: Inter; font-weight: 400; text-align: center;">
      Join more than 85,000 professionals that have already registered. Get exclusive product update reveals and
      critical insights from world-renowned leaders, like Robin Sharma, on how to navigate the future of work.
    </p>
    <a href="http://localhost:8100/admin/setPassword" class="cta-button" style="background-color: #ff5e5e; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 30px; display: inline-block; margin: 20px 0; font-size: 16px;">
      Click The Link
    </a>
    <p style="font-size: 14px; font-family: Inter; font-weight: 400; line-height: 24px; text-align: center;">
      I understand that clicking this button registers me to the Elevate 2022 event, and I approve the Elevate Terms
      and Conditions and monday.com's Privacy Policy.
    </p>
  </div>

  <!-- Secondary Content -->
  <div class="secondary-content" style="padding: 20px; background-color: #F0F3FF; text-align: center; color: #666666;">
    <p style="font-family: Inter; font-size: 14px; font-weight: 400; line-height: 24px; text-align: center; color: #595AD4;">
      Oh, and all Elevate '22 attendees will automatically be added to a raffle for the chance to win a free iPhone 14
      or Oculus 2!
    </p>
    <p><a style="color: grey; text-decoration: none;">Click here to read the full terms and conditions</a></p>
  </div>

  <!-- Footer -->
  <div class="footer" style="padding: 20px; background-color: #F0F3FF; text-align: center; color: #888888; border-top: 1px solid #d5d5d5;">
    <div class="social-icons" style="margin-top: 15px;">
      <a><img src="cid:facebook" alt="Facebook" style="width: 24px; height: 24px; margin: 0 5px;"></a>
      <a><img src="cid:instagram" alt="Instagram" style="width: 24px; height: 24px; margin: 0 5px;"></a>
      <a><img src="cid:tiktok" alt="TikTok" style="width: 24px; height: 24px; margin: 0 5px;"></a>
      <a><img src="cid:linkedin" alt="LinkedIn" style="width: 24px; height: 24px; margin: 0 5px;"></a>
    </div>
  </div>
</div>
`;


    const __filename = fileURLToPath(
      import.meta.url);
    const __dirname = path.dirname(__filename);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Here is your link',
      text: `Click the following link: ${link}`,
      html: emailTemplate, // html body
      attachments: [{
          filename: 'mail-bg.png',
          path: path.join(__dirname, '..', 'images', 'mailBg.png'),
          cid: 'mailbg' // same cid value as in the html img src
        },
        {
          filename: 'Facebook.png',
          path: path.join(__dirname, '..', 'images', 'Facebook.png'),
          cid: 'facebook'
        },
        {
          filename: 'insta.png',
          path: path.join(__dirname, '..', 'images', 'insta.png'),
          cid: 'instagram'
        },
        {
          filename: 'tic.png',
          path: path.join(__dirname, '..', 'images', 'tic.png'),
          cid: 'tiktok'
        },
        {
          filename: 'in.png',
          path: path.join(__dirname, '..', 'images', 'in.png'),
          cid: 'linkedin'
        }
      ]
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return reject(error);
        }
        resolve(info);
      });
    });
  },


  getallCategoryStock: async (
    ProductImage,
    ProductName,
    ProductCatagory,
    Price
  ) => {
    try {
      const filter = {};

      if (ProductImage) {
        filter.ProductImage = ProductImage;
        console.log('Product Image:', filter.ProductImage);
        const productImages = await ProductModel.find(filter);
        console.log(productImages);
        return productImages;
        //return allOrderItems.map(item => ({ order_item_id: order_item_id}));
      }
      if (ProductName) {
        filter.ProductName = ProductName;
        console.log('Product Name:', filter.ProductName);
        const productNames = await ProductModel.find(filter);
        console.log(productNames);
        return productNames; //return allOrderItems.map(item => ({ order_id: order_id}));
      }
      if (ProductCatagory) {
        filter.ProductCatagory = ProductCatagory;
        console.log('Fetching by order_id:', filter.ProductCatagory);
        const catagoryProduct = await ProductModel.find(filter);
        console.log(catagoryProduct);
        return catagoryProduct; //return allOrderItems.map(item => ({ order_id: order_id}));
      }
      if (Price) {
        filter.Price = Price;
        console.log('Fetching by order_id:', filter.Price);
        const PriceProduct = await ProductModel.find(filter);
        console.log(PriceProduct);
        return PriceProduct; //return allOrderItems.map(item => ({ order_id: order_id}));
      }
      if (Object.keys(filter).length === 0) {
        throw new Error('No valid filter criteria provided');
      }

      //const allOrderItems = await orderItemModel.find(filter);
      //return allOrderItems.map(item => ({ product_id: item.product_id }));

    } catch (error) {
      throw new Error('Error fetching orders: ' + error.message);
    }
  },
  //=========================================================

  getOverallOrder: async () => {
    try {
      const overallOrders = await orderModel.find();
      return overallOrders;
    } catch (error) {
      throw new error;
    }
  },
  //===========================================
  gatallOrderItems: async () => {
    try {
      const overallOrderItem = await orderItemModel.find();
      return overallOrderItem;
    } catch (error) {
      throw new error;
    }
  },
  //==============================================
  getallCustomers: async () => {
    try {
      const overallCustomers = await customerModel.find();
      return overallCustomers;
    } catch (error) {
      throw new error;
    }
  },
  //=========================================
  getallPayments: async () => {
    try {
      const overallPayments = await paymentModel.find();
      return overallPayments;
    } catch (error) {
      throw new error;
    }
  },
  //=========================================
  getallReceipts: async () => {
    try {
      const overallReceipts = await receiptsModel.find();
      return overallReceipts;
    } catch (error) {
      throw new error;
    }
  },
  //=======================================
  getallSalesReport: async () => {
    try {
      const overallSalesReceipts = await salesReportModel.find();
      return overallSalesReceipts;
    } catch (error) {
      throw new error;
    }
  },
  //=============================================
  getAllLoyaltyPrograms: async () => {
    try {
      const overallLoyaltyPrograms = await loyaltyProgramsModel.find();
      return overallLoyaltyPrograms;
    } catch (error) {
      throw new error;
    }
  },
  //=====================================
  getallTables: async () => {
    try {
      const getAlltables = await TablesModels.find();
      return getAlltables;
    } catch (error) {
      throw new error;
    }
  },


}
export default adminService