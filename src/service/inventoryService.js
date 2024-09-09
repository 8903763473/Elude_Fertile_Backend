import inventoryModel from "../model/InventoryModel.js";
import inventoryMomentModel from "../model/inventoryMoment.js";
import locationModel from "../model/locationModel.js";
import purchaseItermModel from "../model/purchaseOrderItemModel.js";
import purchaseModel from "../model/PurchaseOrderModel.js";
import stockValidationModel from "../model/StockValuationReports.js";
import supplierModel from "../model/SupplierModel.js";

const inventoryService = {
    inventory: async (data) => {
        const {
            product_id,
            location_id,
            quantity,
            reorder_point,
            stock_status
        } = data;
        try {
            const inventory = await inventoryModel.create({
                product_id,
                location_id,
                quantity,
                reorder_point,
                stock_status
            });
            return inventory;
        } catch (error) {
            throw error;
        }
    },
    //   -------------------------------------------
    getinventory: async (inventory_id) => {
        console.log(inventory_id, "in")
        try {
            const getinventory = await inventoryModel.findById(inventory_id);
            return getinventory;
        } catch (error) {
            throw error;
        }
    },
    //   -------------------------
    updateInventory: async (inventory_id, data) => {

        const {
            product_id,
            location_id,
            quantity,
            reorder_point,
            stock_status
        } = data;

        try {
            const updatedInventory = await inventoryModel.findByIdAndUpdate(
                inventory_id, {
                    product_id,
                    location_id,
                    quantity,
                    reorder_point,
                    stock_status,
                }, {
                    new: true,

                }
            );

            return updatedInventory;
        } catch (error) {
            console.error('Error updating inventory:', error);
            throw error; // Let the calling function handle this error
        }
    },

    //   -----------------------
    getAllInventory: async (filters) => {
        console.log(filters)
        try {
            const {
                location,
                status
            } = filters;
            const filter = {};

            if (location) {
                filter.location = location;
            }

            if (status) {
                filter.status = status;
            }
            const inventoryItems = await inventoryModel.find(filter);

            return inventoryItems
        } catch (error) {
            throw error
        }
    },
    // ===============================
    suppliers: async (data) => {
        const {
            supplier_name,
            contact_information,
            address
        } = data;
        try {
            const suppliers = await supplierModel.create({
                supplier_name,
                contact_information,
                address
            });
            return suppliers;
        } catch (error) {
            throw error;
        }
    },
    // ==============================
    getSuppliers: async (supplier_id) => {
        console.log(supplier_id, "in")
        try {
            const getSuppliers = await supplierModel.findById(supplier_id);
            return getSuppliers;
        } catch (error) {
            throw error;
        }
    },
    // ===============================
    updateSuppliers: async (supplier_id, data) => {

        const {
            supplier_name,
            contact_information,
            address
        } = data;

        try {
            const updateSuppliers = await supplierModel.findByIdAndUpdate(
                supplier_id, {
                    supplier_name,
                    contact_information,
                    address
                }, {
                    new: true,

                }
            );

            return updateSuppliers;
        } catch (error) {
            console.error('Error updating inventory:', error);
            throw error;
        }
    },
    // ---------------------------------
    getAllSuppliers: async (data) => {
        const {
            supplier_name,
            contact_information,
            address
        } = data;
        try {
            const filter = {};
            if (supplier_name) filter.supplier_name = {
                $regex: supplier_name,
                $options: 'i'
            };
            if (contact_information) filter.contact_information = contact_information;
            if (address) filter.address = address;
            const suppliers = await supplierModel.find(filter);
            return suppliers;
        } catch (error) {
            throw error;
        }
    },
    // =======================
    purchaseOrders: async (data) => {
        const {
            supplier_id,
            status,
            total_amount
        } = data;
        try {
            const purchaseOrders = await purchaseModel.create({
                supplier_id,
                status,
                total_amount
            });
            return purchaseOrders;
        } catch (error) {
            throw error;
        }
    },
    // ==============================
    getPurchaseOrders: async (PurchaseOrder_id) => {
        console.log(PurchaseOrder_id, "in")
        try {
            const getPurchaseOrders = await purchaseModel.findById(PurchaseOrder_id);
            return getPurchaseOrders;
        } catch (error) {
            throw error;
        }
    },
    // ===============================
    updatePurchaseOrder: async (PurchaseOrder_id, data) => {

        const {
            supplier_id,
            status,
            total_amount
        } = data;
        console.log(data)
        try {
            const updatePurchaseOrder = await purchaseModel.findByIdAndUpdate(
                PurchaseOrder_id, {
                    supplier_id,
                    status,
                    total_amount
                }, {
                    new: true,

                }
            );

            return updatePurchaseOrder;
        } catch (error) {
            console.error('Error updating PurchaseOrder:', error);
            throw error;
        }
    },
    // ---------------------------------
    getAllPurchaseOrder: async (data) => {
        const {
            startDate,
            endDate,
            status
        } = data;

        try {
            const filter = {};

            if (startDate && endDate) {
                filter.order_date = {
                    $gte: new Date(startDate),
                    $lte: new Date(new Date(endDate).setUTCHours(23, 59, 59, 999)) // End of the range (full day)
                };
            }
            // If only startDate is provided, fetch data exactly matching that date (ignoring time)
            else if (startDate) {
                const start = new Date(startDate);
                const end = new Date(startDate);
                end.setUTCHours(23, 59, 59, 999); // End of the day

                filter.order_date = {
                    $gte: start, // From start of the day
                    $lte: end // Until the end of the day
                };
            }

            if (status) {
                filter.status = status;
            }

            console.log('Filter:', filter); // For debugging purposes
            const purchaseOrders = await purchaseModel.find(filter);
            return purchaseOrders;
        } catch (error) {
            throw error;
        }
    },

    //   ==============================
    locations: async (data) => {
        const {
            location_name,
            address
        } = data;
        try {
            const locations = await locationModel.create({
                location_name,
                address
            });
            return locations;
        } catch (error) {
            throw error;
        }
    },
    // ==============================
    getlocations: async (location_id) => {

        try {
            const getlocations = await locationModel.findById(location_id);
            return getlocations;
        } catch (error) {
            throw error;
        }
    },
    // ===============================
    updatelocations: async (location_id, data) => {

        const {
            location_name,
            address
        } = data;

        try {
            const updatelocations = await locationModel.findByIdAndUpdate(
                location_id, {
                    location_name,
                    address
                }, {
                    new: true,

                }
            );

            return updatelocations;
        } catch (error) {
            console.error('Error updatelocations:', error);
            throw error;
        }
    },
    // ---------------------------------
    getAlllocations: async (filters) => {
        try {
            const query = {};



            if (filters.location_name) {
                query.location_name = filters.location_name;
            }

            if (filters.address) {
                query.address = filters.address;
            }
            const location = await locationModel.find(query);
            return location;
        } catch (error) {
            throw error;
        }
    },
    // -------------------
    inventoryMovements: async (data) => {
        const {
            inventory_id,
            movement_type,
            quantity,
            movement_date,

        } = data;
        try {
            const inventoryMovements = await inventoryMomentModel.create({
                inventory_id,
                movement_type,
                quantity,
                movement_date,

            });
            return inventoryMovements;
        } catch (error) {
            throw error;
        }
    },
    // ==============================
    getinventoryMovements: async (movement_id) => {

        try {
            const getinventoryMovements = await inventoryMomentModel.findById(movement_id);
            return getinventoryMovements;
        } catch (error) {
            throw error;
        }
    },
    // ===============================
 
    // ---------------------------------
    getAllinventoryMovements: async (data) => {
        const {
            startDate,
            endDate,
            movement_type
        } = data;

        try {
            const filter = {};

            if (startDate && endDate) {
                filter.movement_date = {
                    $gte: new Date(startDate),
                    $lte: new Date(new Date(endDate).setUTCHours(23, 59, 59, 999)) // End of the range (full day)
                };
            }
            // If only startDate is provided, fetch data exactly matching that date (ignoring time)
            else if (startDate) {
                const start = new Date(startDate);
                const end = new Date(startDate);
                end.setUTCHours(23, 59, 59, 999); // End of the day

                filter.movement_date = {
                    $gte: start, 
                    $lte: end 
                };
            }

            if (movement_type) {
                filter.movement_type = movement_type;
            }

            console.log('Filter:', filter); 
            const getAllinventoryMovements = await inventoryMomentModel.find(filter);
            return getAllinventoryMovements;
        } catch (error) {
            throw error;
        }
    },
    // ----------------------
    stockValuationReports:async (data) => {
        const {
            total_value,
      report_data,
        } = data;
        try {
            const stockValuationReports = await stockValidationModel.create({
                total_value,
                report_data,
            });
            return stockValuationReports;
        } catch (error) {
            throw error;
        }
    },
    // ==============================
    getstockValuationReports: async (report_id) => {

        try {
            const getstockValuationReports = await stockValidationModel.findById(report_id);
            return getstockValuationReports;
        } catch (error) {
            throw error;
        }
    },
    // ---------------------
    getAllstockValuationReports:async (data) => {
        const {
            startDate,
            endDate,
            
        } = data;

        try {
            const filter = {};

            if (startDate && endDate) {
                filter.report_date = {
                    $gte: new Date(startDate),
                    $lte: new Date(new Date(endDate).setUTCHours(23, 59, 59, 999)) // End of the range (full day)
                };
            }
            // If only startDate is provided, fetch data exactly matching that date (ignoring time)
            else if (startDate) {
                const start = new Date(startDate);
                const end = new Date(startDate);
                end.setUTCHours(23, 59, 59, 999); // End of the day

                filter.report_date = {
                    $gte: start, 
                    $lte: end 
                };
            }

           
            console.log('Filter:', filter); 
            const getAllstockValuationReports = await stockValidationModel.find(filter);
            return getAllstockValuationReports;
        } catch (error) {
            throw error;
        }
    },
}
export default inventoryService