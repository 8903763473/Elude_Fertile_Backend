import reservationModel from "../model/reservationModel.js";
import tableAssignmentModel from "../model/tableAssignmentModel.js";
import tableTurnoverModel from "../model/tableTurnoverModel.js";
import waitingListModel from "../model/waitingListModel.js";
import userModel from "../model/userModel.js";
import TablesModel from "../model/TablesModel.js";

const tableService={
    reservations:async (data) => {
        const {
            reservation_id,
            customer_id,
            table_id,
            reservation_date,
            reservation_time
        }=data;
        try{
            const reservationCreate=await reservationModel.create(
            {
            reservation_id,
            customer_id,
            table_id,
            reservation_date,
            reservation_time
        });
            return reservationCreate;
        }catch(error){
          throw error;
        }
    },
    //==================================================
    getReservations:async (reservation_id) => {
        try {
        const reservationsId = await reservationModel.findById(reservation_id);
        return reservationsId;
        }catch(error) {
            throw error;
        }
    },
    //==============================================
    updateReservations: async (data) => {
        const {
            reservation_id,
            customer_id,
            table_id,
            reservation_date,
            reservation_time
        } = data
        try {
          const reservationsUpdate = await reservationModel.findByIdAndUpdate(
            reservation_id, {
                customer_id,
                table_id,
                reservation_date,
                reservation_time
            }, {
              new: true
            });
          return reservationsUpdate;
        } catch (error) {
          throw error;
        }
    },
    //============================================
    deleteReservations:async (reservation_id) => {
        try {
          const deletedetails = await reservationModel.findByIdAndDelete(reservation_id);
          return deletedetails;
        } catch (error) {
          throw error;
        }
    },
    //============================================
    overallReservations:async () => {
        try {
        const reservationsId = await reservationModel.find();
        return reservationsId;
        }catch(error) {
            throw error;
        }
    },
    //==========================================
    tableAssignments:async (data) => {
        const {
            assignment_id,
            order_ide,
            table_id,
            assignment_date,
            assignment_time
        }=data;
        try{
            const tableAssignmentsCreate=await tableAssignmentModel.create(
            {
            assignment_id,
            order_ide,
            table_id,
            assignment_date,
            assignment_time
        });
            return tableAssignmentsCreate;
        }catch(error){
          throw error;
        }
    },
    //===========================================
    getTableAssignments:async (assignment_id) => {
        try {
        const tableAssignmentIdOnly = await tableAssignmentModel.findById(assignment_id);
        return tableAssignmentIdOnly;
        }catch(error) {
            throw error;
        }
    },
    //========================================
    updateTableAssignments:async (data) => {
        const {
            assignment_id,
            order_ide,
            table_id,
            assignment_date,
            assignment_time
        } = data
        try {
          const updateDetails = await tableAssignmentModel.findByIdAndUpdate(
            assignment_id,{
            order_ide,
            table_id,
            assignment_date,
            assignment_time
            }, {
              new: true
            });
          return updateDetails;
        } catch (error) {
          throw error;
        }
    },
    //=========================================
    getallTablesAssignments:async () => {
        try {
        const tableAssignmentsId = await tableAssignmentModel.find();
        return tableAssignmentsId;
        }catch(error) {
            throw error;
        }
    },
    //=========================================
    tableTurnover:async (data) => {
        const {
            turnover_id,
            table_id,
            occupied_start_time,
            occupied_end_time,
            total_turnover_time
        }=data;
        try{
            const tableTurnoverCreate=await tableTurnoverModel.create(
            {
                turnover_id,
                table_id,
                occupied_start_time,
                occupied_end_time,
                total_turnover_time
        });
            return tableTurnoverCreate;
        }catch(error){
          throw error;
        }
    },
    //=======================================
    getTableTurnover:async (turnover_id) => {
        try {
        const turnOverId = await tableTurnoverModel.findById(turnover_id);
        return turnOverId;
        }catch(error) {
            throw error;
        }
    },
    //========================================
    getAlltableTurnover:async () => {
        try {
        const getAllDetails = await tableTurnoverModel.find();
        return getAllDetails;
        }catch(error) {
            throw error;
        }
    },
    //==============================================
    waitingList:async (data) => {
        const {
            waitlist_id,
            customer_id,
            waitlist_date,
            estimated_wait_time,
            status
        }=data;
        try{
            const createWaitingList=await waitingListModel.create(
            {
            waitlist_id,
            customer_id,
            waitlist_date,
            estimated_wait_time,
            status
        });
            return createWaitingList;
        }catch(error){
          throw error;
        }
    },
    //====================================================
    getWaitingList:async (waitlist_id) => {
        try {
        const  getIddetails= await waitingListModel.findById(waitlist_id);
        return getIddetails;
        }catch(error) {
            throw error;
        }
    },
    //===========================================
    updateWaitingList:async (data) => {
        const {
            waitlist_id,
            customer_id,
            waitlist_date,
            estimated_wait_time,
            status
        } = data
        try {
          const updateDetails = await waitingListModel.findByIdAndUpdate(
            waitlist_id,{
                customer_id,
                waitlist_date,
                estimated_wait_time,
                status
            }, {
              new: true
            });
          return updateDetails;
        } catch (error) {
          throw error;
        }
    },
    //========================================
    getAllwaitingList:async () => {
        try {
        const getAllDetails = await waitingListModel.find();
        return getAllDetails;
        }catch(error) {
            throw error;
        }
    },
    //====================================
    users:async (data) => {
        const {
            customer_id,
            name,
            email,
            phone_number,
            special_requests
        }=data;
        try{
            const createCustomer=await userModel.create(
            {
            customer_id,
            name,
            email,
            phone_number,
            special_requests
        });
            return createCustomer;
        }catch(error){
          throw error;
        }
    },
    //========================================
    getUsers:async (customer_id) => {
        try {
        const  getIdUsers= await userModel.findById(customer_id);
        return getIdUsers;
        }catch(error) {
            throw error;
        }
    },
    //==============================================
    auditTrails:async()=>{
        try{
        const tableAssignments= await tableAssignmentModel.find();
        const reservations=await reservationModel.find();

        return {tableAssignments,reservations};
        }catch(error){
            throw error;
        }
    },
    //=============================================
    tables:async(data)=>{
        const {
            table_id,
            table_number,
            seating_capacity,
            status,
            location 
        }=data;
        try{
            const createTables=await TablesModel.create({
            table_id,
            table_number,
            seating_capacity,
            status,
            location });
            return createTables;
        }catch(error){
            throw new error;
        }
    },
    //===================================
    getTables:async (table_id) => {
        try {
        const  getTableId= await TablesModel.findById(table_id);
        return getTableId;
        }catch(error) {
            throw error;
        }
    },
    //====================================
    updateTables: async (data) => {
        const {
            table_id,
            status,
            table_number,
            seating_capacity,
            location
        } = data;
    
        try {
            let updateResult;
            
            if (table_id) {
                updateResult = await TablesModel.findByIdAndUpdate(
                    table_id,
                    {
                        table_number,
                        seating_capacity,
                        status,
                        location
                    },
                    {
                        new: true
                    }
                );
            } else if (status) {
                updateResult = await TablesModel.findOneAndUpdate(
                    { status },
                    {
                        table_number,
                        seating_capacity,
                        location
                    },
                    {
                        new: true
                    }
                );
            } else {
                throw new Error("Either table_id or status must be provided.");
            }
            return { updateResult };
        } catch (error) {
            throw error;
        }
    },
    //=================================================
    
}


export default tableService;