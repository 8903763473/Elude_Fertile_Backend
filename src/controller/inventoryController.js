import inventoryService from "../service/inventoryService.js";

const inventoryController = {
  inventory: async (req, res, next) => {
    const {
      product_id,
      location_id,
      quantity,
      reorder_point,
      stock_status
    } = req.body;
    try {
      const inventory = await inventoryService.inventory(req.body);
      res.status(200).json({
        message: 'successfully',
        data: inventory
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },

  getinventory: async (req, res, next) => {
    const {
      id
    } = req.params;
    try {
      const inventory = await inventoryService.getinventory(id);
      res.status(200).json({
        data: inventory,
      });
    } catch (error) {
      console.error('Error fetching inventory:', error);

      const err = new Error('Failed to fetch inventory');
      err.statuscode = 500;
      next(err);
    }
  },

  // ==============
  updateInventory: async (req, res, next) => {
    const {
      id
    } = req.params;
    const {
      product_id,
      location_id,
      quantity,
      reorder_point,
      stock_status
    } = req.body;
    console.log(req.body, 'kj')

    try {
      const updatedInventory = await inventoryService.updateInventory(id, req.body);
      res.status(200).json({
        message: 'Updated successfully',
        data: updatedInventory,
      });
    } catch (error) {
      console.error('Error updating inventory:', error);
      const err = new Error('Failed to update inventory');
      err.statuscode = 500;
      next(err);
    }
  },

  // ===
  getAllInventory: async (req, res, next) => {
    const filters = req.query;
    try {
      const inventoryItems = await inventoryService.getAllInventory(filters);
      res.status(200).json({
        success: true,
        count: inventoryItems.length,
        data: inventoryItems,
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ===========================================
  suppliers: async (req, res, next) => {
    const {

      supplier_name,
      contact_information,
      address
    } = req.body;
    try {
      const suppliers = await inventoryService.suppliers(req.body);
      res.status(200).json({
        message: 'successfully',
        data: suppliers
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ===============
  getSuppliers: async (req, res, next) => {
    const {
      id
    } = req.params;
    try {
      const getSuppliers = await inventoryService.getSuppliers(id);
      res.status(200).json({
        data: getSuppliers,
      });
    } catch (error) {
      console.error('Error fetching inventory:', error);

      const err = new Error('Failed to fetch inventory');
      err.statuscode = 500;
      next(err);
    }
  },
  // =============================
  updateSuppliers: async (req, res, next) => {
    const {
      id
    } = req.params;
    const {
      supplier_name,
      contact_information,
      address
    } = req.body;
    console.log(req.body, 'kj')

    try {
      const updateSuppliers = await inventoryService.updateSuppliers(id, req.body);
      res.status(200).json({
        message: 'Updated successfully',
        data: updateSuppliers,
      });
    } catch (error) {
      console.error('Error updating inventory:', error);
      const err = new Error('Failed to update inventory');
      err.statuscode = 500;
      next(err);
    }
  },
  // ================================
  getAllSuppliers: async (req, res, next) => {
    const {
      supplier_name,
      contact_information,
      address
    } = req.body;
    try {
      const getAllSuppliers = await inventoryService.getAllSuppliers(req.body);
      res.status(200).json({
        success: true,
        data: getAllSuppliers,
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ==========================
  purchaseOrders: async (req, res, next) => {
    const {
      supplier_id,
      status,
      total_amount
    } = req.body;
    try {
      const purchaseOrders = await inventoryService.purchaseOrders(req.body);
      res.status(200).json({
        message: 'successfully',
        data: purchaseOrders
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ===============
  getPurchaseOrders: async (req, res, next) => {
    const {
      id
    } = req.params;
    try {
      const getPurchaseOrders = await inventoryService.getPurchaseOrders(id);
      res.status(200).json({
        data: getPurchaseOrders,
      });
    } catch (error) {
      console.error('Error fetching inventory:', error);

      const err = new Error('Failed to fetch inventory');
      err.statuscode = 500;
      next(err);
    }
  },
  // =============================
  updatePurchaseOrder: async (req, res, next) => {
    const {
      id
    } = req.params;
    const {
      supplier_id,
      status,
      total_amount
    } = req.body;
    console.log(req.body, 'kj')

    try {
      const updateSuppliers = await inventoryService.updatePurchaseOrder(id, req.body);
      res.status(200).json({
        message: 'Updated successfully',
        data: updateSuppliers,
      });
    } catch (error) {
      console.error('Error updating inventory:', error);
      const err = new Error('Failed to update inventory');
      err.statuscode = 500;
      next(err);
    }
  },
  // ================================
  getAllPurchaseOrder: async (req, res, next) => {
    const {
      startDate,
      endDate,
      status
    } = req.body;

    try {
      // Fetch purchase orders with optional filters
      const purchaseOrders = await inventoryService.getAllPurchaseOrder({
        startDate,
        endDate,
        status
      });

      // Send the response with the data
      res.status(200).json({
        success: true,
        data: purchaseOrders,
      });
    } catch (error) {
      // Log the error
      console.error('Error fetching purchase orders:', error);

      // Pass the error to the error-handling middleware
      next({
        status: 500,
        message: 'Error fetching purchase orders',
      });
    }
  },
  // =====================
  purchaseOrderItems: async (req, res, next) => {
    const {

      order_id,
      product_id,
      quantity,
      price
    } = req.body;
    try {
      const purchaseOrderItems = await inventoryService.purchaseOrderItems(req.body);
      res.status(200).json({
        message: 'successfully',
        data: purchaseOrderItems
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ===============
  getpurchaseOrderItems: async (req, res, next) => {
    const {
      id
    } = req.params;
    try {
      const getpurchaseOrderItems = await inventoryService.getpurchaseOrderItems(id);
      res.status(200).json({
        data: getpurchaseOrderItems,
      });
    } catch (error) {
      console.error('Error fetching inventory:', error);

      const err = new Error('Failed to fetch inventory');
      err.statuscode = 500;
      next(err);
    }
  },
  // =============================
  updatepurchaseOrderItems: async (req, res, next) => {
    const {
      id
    } = req.params;
    const {
      order_id,
      product_id,
      quantity,
      price
    } = req.body;
    console.log(req.body, 'kj')

    try {
      const updatepurchaseOrderItems = await inventoryService.updatepurchaseOrderItems(id, req.body);
      res.status(200).json({
        message: 'Updated successfully',
        data: updatepurchaseOrderItems,
      });
    } catch (error) {
      console.error('Error updating inventory:', error);
      const err = new Error('Failed to update inventory');
      err.statuscode = 500;
      next(err);
    }
  },
  // ================================
  getAllpPurchaseOrderItems: async (req, res, next) => {
    const filters = req.body;
    try {
      const getAllpPurchaseOrderItems = await inventoryService.getAllpPurchaseOrderItems(req.body);
      res.status(200).json({
        success: true,
        data: getAllpPurchaseOrderItems,
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ====================
  locations: async (req, res, next) => {
    const {

      location_name,
      address
    } = req.body;
    try {
      const locations = await inventoryService.locations(req.body);
      res.status(200).json({
        message: 'successfully',
        data: locations
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ===============
  getlocations: async (req, res, next) => {
    const {
      id
    } = req.params;
    try {
      const getlocations = await inventoryService.getlocations(id);
      res.status(200).json({
        data: getlocations,
      });
    } catch (error) {
      console.error('Error fetching getlocations:', error);

      const err = new Error('Failed to fetch getlocations');
      err.statuscode = 500;
      next(err);
    }
  },
  // =============================
  updatelocations: async (req, res, next) => {
    const {
      id
    } = req.params;
    const {
      location_name,
      address
    } = req.body;
    console.log(req.body, 'kj')

    try {
      const updatelocations = await inventoryService.updatelocations(id, req.body);
      res.status(200).json({
        message: 'Updated successfully',
        data: updatelocations,
      });
    } catch (error) {
      console.error('Error updating locations:', error);
      const err = new Error('Failed to update locations');
      err.statuscode = 500;
      next(err);
    }
  },
  // ================================
  getAlllocations: async (req, res, next) => {
    const filters = req.body;
    try {
      const getAlllocations = await inventoryService.getAlllocations(req.body);
      res.status(200).json({
        success: true,
        data: getAlllocations,
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ====================================
  inventoryMovements: async (req, res, next) => {
    const {
      inventory_id,
      movement_type,
      quantity,
      movement_date,
      
    } = req.body;
    try {
      const inventoryMovements = await inventoryService.inventoryMovements(req.body);
      res.status(200).json({
        message: 'successfully',
        data: inventoryMovements
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ===============
  getinventoryMovements: async (req, res, next) => {
    const {
      id
    } = req.params;
    try {
      const getinventoryMovements = await inventoryService.getinventoryMovements(id);
      res.status(200).json({
        data: getinventoryMovements,
      });
    } catch (error) {
      console.error('Error fetching getinventoryMovements:', error);

      const err = new Error('Failed to fetch getinventoryMovements');
      err.statuscode = 500;
      next(err);
    }
  },
 
  // ================================
  getAllinventoryMovements: async (req, res, next) => {
    const filters = req.body;
    try {
      const getAllinventoryMovements = await inventoryService.getAllinventoryMovements(req.body);
      res.status(200).json({
        success: true,
        data: getAllinventoryMovements,
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // =========================
  stockValuationReports:async (req, res, next) => {
    const {
      total_value,
      report_data,
     
      
    } = req.body;
    try {
      const stockValuationReports = await inventoryService.stockValuationReports(req.body);
      res.status(200).json({
        message: 'successfully',
        data: stockValuationReports
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ===============
  getstockValuationReports: async (req, res, next) => {
    const {
      id
    } = req.params;
    try {
      const getstockValuationReports = await inventoryService.getstockValuationReports(id);
      res.status(200).json({
        data: getstockValuationReports,
      });
    } catch (error) {
      console.error('Error fetching getstockValuationReports:', error);

      const err = new Error('Failed to fetch getstockValuationReports');
      err.statuscode = 500;
      next(err);
    }
  },
 
  // ================================
  getAllstockValuationReports: async (req, res, next) => {
    const filters = req.body;
    try {
      const getAllstockValuationReports = await inventoryService.getAllstockValuationReports(req.body);
      res.status(200).json({
        success: true,
        data: getAllstockValuationReports,
      });
    } catch (error) {
      console.error(error);
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },


}
export default inventoryController