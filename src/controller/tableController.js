import tableService from "../service/tableService.js";


const tableController={
    reservations:async(req,res,next)=>{
        try{
            const createReservations=await tableService.reservations(req.body);
            res.status(200).json({
                mesage:"Create reservations Successfully",
                data:createReservations
            });
        }catch(error){
            error.error=error.message;
            console.error(error);
            error.statuscode=400;
            next(error);
        }
    },
    //==========================================
    getReservations:async(req,res,next)=>{
        const reservation_id=req.params.id;
        try{
          const reservationsId=await tableService.getReservations(reservation_id);
          res.status(200).json({
            message:"Get reservations Details",
            data:reservationsId
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //=======================================
    updateReservations:async(req,res,next)=>{
        try{
          const reservationUpdate=await tableService.updateReservations(req.body);
          res.status(200).json({
            mesage:"Update reservations Successfully",
            data:reservationUpdate
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //===================================
    deleteReservations:async(req,res,next)=>{
        const reservation_id=req.params.id;
        try{
            const deleteDetails=await tableService.deleteReservations(reservation_id);
            res.status(200).json({
                message:"deleted successfully",
                data:deleteDetails
            });
        }catch(error){
            error.message=error.error;
            error.statuscode=400;
            console.error(error);
            next(error);
        }
    },
    //=============================================
    overallReservations:async(req,res,next)=>{
        try{
          const getOverallDetails=await tableService.overallReservations();
          res.status(200).json({
            message:"Get Reservations Details",
            data:getOverallDetails
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //=============================================
    tableAssignments:async(req,res,next)=>{
        try{
            const createtableAssignments=await tableService.tableAssignments(req.body);
            res.status(200).json({
                mesage:"Create tableAssignments Successfully",
                data:createtableAssignments
            });
        }catch(error){
            error.error=error.message;
            console.error(error);
            error.statuscode=400;
            next(error);
        }
    },
    //==========================================
    getTableAssignments:async(req,res,next)=>{
        const assignment_id=req.params.id;
        try{
          const tableAssignmentId=await tableService.getTableAssignments(assignment_id);
          res.status(200).json({
            message:"Get tableAssignments Details",
            data:tableAssignmentId
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //==================================
    updateTableAssignments:async(req,res,next)=>{
        try{
          const updateDetails=await tableService.updateTableAssignments(req.body);
          res.status(200).json({
            mesage:"update TableAssignments Successfully",
            data:updateDetails
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //=========================================
    getallTablesAssignments:async(req,res,next)=>{
        try{
          const getOverallDetails=await tableService.getallTablesAssignments();
          res.status(200).json({
            message:"Getall TablesAssignments  Details",
            data:getOverallDetails
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //=====================================
    tableTurnover:async(req,res,next)=>{
        try{
            const createtableTurnover=await tableService.tableTurnover(req.body);
            res.status(200).json({
                mesage:"Create createtableTurnover Successfully",
                data:createtableTurnover
            });
        }catch(error){
            error.error=error.message;
            console.error(error);
            error.statuscode=400;
            next(error);
        }
    },
    //=====================================
    getTableTurnover:async(req,res,next)=>{
        const turnover_id=req.params.id;
        try{
          const tableTurnoverId=await tableService.getTableTurnover(turnover_id);
          res.status(200).json({
            message:"Get tableTurnover Details",
            data:tableTurnoverId
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //===============================================
    getAlltableTurnover:async(req,res,next)=>{
        try{
          const getOverallTurnover=await tableService.getAlltableTurnover();
          res.status(200).json({
            message:"Getall Turnover Details",
            data:getOverallTurnover
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //===============================================
    waitingList:async(req,res,next)=>{
        try{
            const createwaitingList=await tableService.waitingList(req.body);
            res.status(200).json({
                mesage:"Create createwaitingList Successfully",
                data:createwaitingList
            });
        }catch(error){
            error.error=error.message;
            console.error(error);
            error.statuscode=400;
            next(error);
        }
    },
    //===============================================
    getWaitingList:async(req,res,next)=>{
        const turnover_id=req.params.id;
        try{
          const idWaitingList=await tableService.getWaitingList(turnover_id);
          res.status(200).json({
            message:"Get WaitingList Details",
            data:idWaitingList
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //=====================================
    updateWaitingList:async(req,res,next)=>{
        try{
          const updateDetails=await tableService.updateWaitingList(req.body);
          res.status(200).json({
            mesage:"update WaitingList Successfully",
            data:updateDetails
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //========================================
    getAllwaitingList:async(req,res,next)=>{
        try{
          const getoverallList=await tableService.getAllwaitingList();
          res.status(200).json({
            message:"Getall waiting list ",
            data:getoverallList
          });
        }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
        }
    },
    //====================================
    users:async(req,res,next)=>{
      try{
          const createUser=await tableService.users(req.body);
          res.status(200).json({
              mesage:"Create Users",
              data:createUser
          });
      }catch(error){
          error.error=error.message;
          console.error(error);
          error.statuscode=400;
          next(error);
      }
  },
  //=======================================
  getUsers:async(req,res,next)=>{
    const customer_id=req.params.id;
    try{
      const idGetUsers=await tableService.getUsers(customer_id);
      res.status(200).json({
        message:"Get WaitingList Details",
        data:idGetUsers
      });
    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //=============================================
  auditTrails:async(req,res,next)=>{
    try{
      const  tableAssignments=await tableService.auditTrails();
      const  reservations=await tableService.auditTrails();
      const result={
        tableAssignments,
        reservations
      }
      res.status(200).json({
        message:"Table Assignments , Reservations",
        data:result});

    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //==========================================
  tables:async(req,res,next)=>{
    try{
      const tablecreate=await tableService.tables(req.body);
      res.status(200).json({
        message:"table created successfully",
        data:tablecreate});
    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //============================================
  getTables:async(req,res,next)=>{
    const table_id=req.params.id;
    try{
      const idTables=await tableService.getTables(table_id);
      res.status(200).json({
        message:"Get WaitingList Details",
        data:idTables
      });
    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
  },
  //=============================================
  updateTables:async(req,res,next)=>{
    try{
      const updateTables=await tableService.updateTables(req.body);
      res.status(200).json({
        mesage:"update WaitingList Successfully",
        data:updateTables
      });
    }catch(error){
      error.error=error.message;
      console.error(error);
      error.statuscode=400;
      next(error);
    }
},
}



export default tableController;