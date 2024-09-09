import orderModel from "../model/orderModel.js";
import orderItemModel from "../model/orderItemModel.js";
import customerModel from "../model/customerModel.js";
import paymentModel from "../model/paymentModel.js";
import receiptsModel from "../model/receiptsModel.js";
import salesReportModel from "../model/salesReportModel.js";
import loyaltyProgramsModel from "../model/loyaltyProgramsModel.js";
const salesService ={


    ordersCretaed:async(data)=>{
        const {
            order_id,
            customer_id,
            order_status,
            total_amount,
            payment_method 
        }=data;
        try{
            const createOrder=await orderModel.create(
            {
            order_id,
            customer_id,
            order_status,
            total_amount,
            payment_method 
        });
            return createOrder;
        }catch(error){
          throw error;
        }
      },
//==============================================
    getOrder:async (Order_id) => {
        try {
        const getIdOrders = await orderModel.findById(Order_id);
        return getIdOrders;
        }catch(error) {
            throw error;
        }
    },
//=============================================
    updateOrder:async (data) => {
            const { 
            Order_id,
            order_id,
            customer_id,
            order_status,
            total_amount,
            payment_method } = data;
        try {
            const updateOnlyId = await orderModel.findByIdAndUpdate(Order_id, 
            { 
            Order_id,
            order_id,
            customer_id,
            order_status,
            total_amount,
            payment_method 
            }, 
            { new: true });
            return updateOnlyId;
        } catch (error) {
          throw new error;
        }
      },
    //==================================================
    createOrderitem:async(data)=>{
            const {
            order_item_id,
            order_id,
            product_id,
            quantity,
            price
            }=data;
        try{
            const createOrderItem=await orderItemModel.create(
            {
            order_item_id,
            order_id,
            product_id,
            quantity,
            price
            });
            return createOrderItem;
        }catch(error){
            throw error;
        }
      },
//====================================================
    getOrderItems:async (Order_Item_id) => {
        try {
            const getIdOrderItem = await orderItemModel.findById(Order_Item_id);
            return getIdOrderItem;
        } catch (error) {
            throw error;
        }
      },
//================================================
    updateOrderItems:async (data) => {
            const {
            Order_Item_id,
            order_item_id,
            order_id,
            product_id,
            quantity,
            price
            } = data;
        try {
            const updateOnlyId = await orderItemModel.findByIdAndUpdate(Order_Item_id, 
            { 
            order_item_id,
            order_id,
            product_id,
            quantity,
            price
            }, 
            { new: true });
            return updateOnlyId;
        } catch (error) {
            throw new error;
        }
    },
    //=====================================
    createCustomerDetails:async(data)=>{
        const {
            customer_id,
            name,
            email,
            phone_number,
            loyalty_points
        }=data;
    try{
        const custoersDetail=await customerModel.create(
        {
            customer_id,
            name,
            email,
            phone_number,
            loyalty_points
        });
        return custoersDetail;
    }catch(error){
        throw error;
    }
  },
  //=============================================
  getCustomers:async (Customer_id) => {
    try {
        const getIdCustomer = await customerModel.findById(Customer_id);
        return getIdCustomer;
    } catch (error) {
        throw error;
    }
  },
  //================================================
  updateCustomers:async (data) => {
    const {
        Customer_id,
        customer_id,
        name,
        email,
        phone_number,
        loyalty_points
    } = data;
try {
    const updateOnlyId = await customerModel.findByIdAndUpdate(Customer_id, 
    {
        Customer_id,
        customer_id,
        name,
        email,
        phone_number,
        loyalty_points
    }, 
    { new: true });
    return updateOnlyId;
    } catch (error) {
        throw new error;
    }
},
    //========================================
    getallCustomers:async () => {
        try {
            const overallCustomers = await customerModel.find();
            return overallCustomers;
        } catch (error) {
            throw new error;
        }
    },
    //=======================================
    createPayments:async(data)=>{
        const {
            payment_id,
            order_id,
            payment_amount,
            payment_status,
            payment_date
        }=data;
    try{
        const createPayment=await paymentModel.create(
        {
            payment_id,
            order_id,
            payment_amount,
            payment_status,
            payment_date
        });
        return createPayment;
    }catch(error){
        throw error;
    }
  },
  //==================================================
  getPayments:async (Payment_id) => {
    try {
        const getIdPayment = await paymentModel.findById(Payment_id);
        return getIdPayment;
    } catch (error) {
        throw error;
    }
  },
  //=============================================
    createReceipts:async(data)=>{
        const {
            receipt_id,
            order_id,
            receipt_type,
            receipt_date,
            receipt_data
        }=data;
    try{
        const createReceipts=await receiptsModel.create(
        {
            receipt_id,
            order_id,
            receipt_type,
            receipt_date,
            receipt_data  
        });
        return createReceipts;
    }catch(error){
        throw error;
    }
  },
  //===================================
  getReceipts:async (receipts_id) => {
    try {
        const getIdReceipts = await receiptsModel.findById(receipts_id);
        return getIdReceipts;
    } catch (error) {
        throw error;
    }
  },
  //=================================
    salesReportsCreate:async(data)=>{
        const {
            report_id,
            report_date,
            total_sales,
            total_transactions,
            report_data 
        }=data;
    try{
        const createReceipts=await salesReportModel.create(
        {
            report_id,
            report_date,
            total_sales,
            total_transactions,
            report_data  
        });
        return createReceipts;
    }catch(error){
        throw error;
    }
  },
  //=======================================
  getSalesReport:async (salesReport_id) => {
    try {
        const getsalesReport = await salesReportModel.findById(salesReport_id);
        return getsalesReport;
    } catch (error) {
        throw error;
    }
  },
  //========================================
    loyaltyProgramsCreate:async(data)=>{
        const {
            loyalty_program_id,
            customer_id,
            reward_points,
            last_updated
        }=data;
    try{
        const createReceipts=await loyaltyProgramsModel.create(
        {
            loyalty_program_id,
            customer_id,
            reward_points,
            last_updated
        });
        return createReceipts;
    }catch(error){
        throw error;
    }
  },
  //======================================
  getIdLoyaltyPrograms:async (Loyalty_program_id) => {
    try {
        const loyaltyProgramsId = await loyaltyProgramsModel.findById(Loyalty_program_id);
        return loyaltyProgramsId;
    } catch (error) {
        throw error;
    }
  },
  //======================================
    allOrdersFilter: async (
        order_date,
        order_status
    ) => {
        try {
            const filter = {};
            
            if (order_date) {
                filter. order_date= order_date;
                console.log('Fetching by order_item_id:', filter.order_date);
                const orderDate = await orderModel.find(filter);
                console.log(orderDate);
                return orderDate; 
                //return allOrderItems.map(item => ({ order_item_id: order_item_id}));
            } 
            if (order_status) {
                filter.order_status = order_status;
                console.log('Fetching by order_id:', filter.order_status);
                const orderStatus = await orderModel.find(filter);
                console.log(orderStatus);
                return orderStatus;//return allOrderItems.map(item => ({ order_id: order_id}));
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
    //==========================================
    getallitems: async (
        order_item_id,
        order_id,
        product_id,
        quantity,
        price
    ) => {
        try {
            const filter = {};
            
            if (order_item_id) {
                filter.order_item_id = order_item_id;
                console.log('Fetching by order_item_id:', filter.order_item_id);
                const allOrderItems = await orderItemModel.find(filter);
                //return allOrderItems.map(item => ({ order_item_id: order_item_id}));
            } 
            if (order_id) {
                filter.order_id = order_id;
                console.log('Fetching by order_id:', filter.order_id);
                const allOrderItems = await orderItemModel.find(filter);
                console.log(allOrderItems);
                return allOrderItems;//return allOrderItems.map(item => ({ order_id: order_id}));
            } 
            if (product_id) {
                filter.product_id = product_id;
                console.log('Fetching by product_id:', filter.product_id);
                const allOrderItems = await orderItemModel.find(filter);
                console.log(allOrderItems);//return allOrderItems.map(item => ({ product_id: product_id}));
                return allOrderItems;
            } 
            if (quantity) {
                filter.quantity = quantity;
                console.log('Fetching by quantity:', filter.quantity);
                const allOrderItems = await orderItemModel.find(filter);
                console.log(allOrderItems);
                return allOrderItems;
                //return allOrderItems.map(item => ({ quantity: quantity}));
            } 
            if (price) {
                filter.price = price;
                console.log('Fetching by price:', filter.price);
                const allOrderItems = await orderItemModel.find(filter);
                console.log(allOrderItems);
                return allOrderItems;
                //return allOrderItems.map(item => ({ price: price}));
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
    //=========================================
    getAllcustomers: async (
        name,
        email,
        phone_number,
        loyalty_points
    ) => {
        try {
            const filter = {};
            
            if (name) {
                filter.name= name;
                console.log('Fetching by order_item_id:', filter.name);
                const nameCustomer = await customerModel.find(filter);
                console.log(nameCustomer);
                return nameCustomer; 
                //return allOrderItems.map(item => ({ order_item_id: order_item_id}));
            } 
            if (email) {
                filter.email = email;
                console.log('Fetching by order_id:', filter.email);
                const emailId = await customerModel.find(filter);
                console.log(emailId);
                return emailId;//return allOrderItems.map(item => ({ order_id: order_id}));
            }
            if (phone_number) {
                filter.phone_number = phone_number;
                console.log('Fetching by order_id:', filter.phone_number);
                const phoneNumber = await customerModel.find(filter);
                console.log(phoneNumber);
                return phoneNumber;//return allOrderItems.map(item => ({ order_id: order_id}));
            }
            if (loyalty_points) {
                filter.loyalty_points = loyalty_points;
                console.log('Fetching by order_id:', filter.loyalty_points);
                const  loyaltyPoints= await customerModel.find(filter);
                console.log(loyaltyPoints);
                return loyaltyPoints;//return allOrderItems.map(item => ({ order_id: order_id}));
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
    //==============================================================
   getallPayment: async (
        payment_status,
        payment_date
    ) => {
        try {
            const filter = {};
            
            if (payment_status) {
                filter.payment_status=payment_status;
                console.log('Fetching by order_item_id:', filter.payment_status);
                const paymentStatus = await paymentModel.find(filter);
                console.log(paymentStatus);
                return paymentStatus; 
                //return allOrderItems.map(item => ({ order_item_id: order_item_id}));
            } 
            if (payment_date) {
                filter.payment_date =payment_date;
                console.log('Fetching by order_id:', filter.payment_date);
                const paymentDate = await paymentModel.find(filter);
                console.log(paymentDate);
                return paymentDate;//return allOrderItems.map(item => ({ order_id: order_id}));
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
    //======================================================
    getAllReceipts:async (
        order_id,
        receipt_type,
        receipt_date,
        receipt_data
    ) => {
        try {
            const filter = {};
            
            if (order_id) {
                filter.order_id= order_id;
                console.log('Fetching by order_item_id:', filter.order_id);
                const userorderId = await receiptsModel.find(filter);
                console.log(userorderId);
                return userorderId; 
                //return allOrderItems.map(item => ({ order_item_id: order_item_id}));
            } 
            if (receipt_type) {
                filter.receipt_type = receipt_type;
                console.log('Fetching by order_id:', filter.receipt_type);
                const receiptType = await receiptsModel.find(filter);
                console.log(receiptType);
                return receiptType;//return allOrderItems.map(item => ({ order_id: order_id}));
            }
            if (receipt_date) {
                filter.receipt_date = receipt_date;
                console.log('Fetching by order_id:', filter.receipt_date);
                const receiptDate = await receiptsModel.find(filter);
                console.log(receiptDate);
                return receiptDate;//return allOrderItems.map(item => ({ order_id: order_id}));
            }
            if (receipt_data) {
                filter.receipt_data = receipt_data;
                console.log('Fetching by order_id:', filter.receipt_data);
                const  receiptData= await receiptsModel.find(filter);
                console.log(receiptData);
                return receiptData;//return allOrderItems.map(item => ({ order_id: order_id}));
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
    //==============================================
    getallSalesreport: async (
        report_date
    ) => {
        try {
            const filter = {};
            
            if (report_date) {
                filter.report_date=report_date;
                console.log('Fetching by order_item_id:', filter.report_date);
                const salesreportDate = await salesReportModel.find(filter);
                console.log(salesreportDate);
                return salesreportDate; 
                //return allOrderItems.map(item => ({ order_item_id: order_item_id}));
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
    //======================================================
    getAllLoyaltyProgram:async (
        customer_id,
        reward_points,
        last_updated
    ) => {
        try {
            const filter = {};
            
            if (customer_id) {
                filter.customer_id= customer_id;
                console.log('Fetching by order_item_id:', filter.customer_id);
                const customerId = await loyaltyProgramsModel.find(filter);
                console.log(customerId);
                return customerId; 
                //return allOrderItems.map(item => ({ order_item_id: order_item_id}));
            } 
            if (reward_points) {
                filter.reward_points = reward_points;
                console.log('Fetching by order_id:', filter.reward_points);
                const rewardPoints = await loyaltyProgramsModel.find(filter);
                console.log(rewardPoints);
                return rewardPoints;//return allOrderItems.map(item => ({ order_id: order_id}));
            }
            if (last_updated) {
                filter.last_updated = last_updated;
                console.log('Fetching by order_id:', filter.last_updated);
                const lastUpdate = await loyaltyProgramsModel.find(filter);
                console.log(lastUpdate);
                return lastUpdate;//return allOrderItems.map(item => ({ order_id: order_id}));
            } 
            if (Object.keys(filter).length === 0) {
                throw new Error('No valid filter criteria provided');
            }
            
            //const allOrderItems = await orderItemModel.find(filter);
            //return allOrderItems.map(item => ({ product_id: item.product_id }));
            
        } catch (error) {
            throw new Error('Error fetching orders: ' + error.message);
        }
}
    
}


export default salesService;