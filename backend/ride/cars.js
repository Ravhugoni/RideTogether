// SELECT *
// FROM public.vehicle
// WHERE "carID" not in (SELECT carID
// 						FROM BOOKING
// 						WHERE pickup_date BETWEEN '2023-03-20 21:14:58.104093+02' AND '2023-03-20 23:13:58.104093+02');



// SELECT *
// FROM public.vehicle
// WHERE "carID" not in (SELECT carID
// 					  FROM BOOKING
// 					  WHERE pickup_date BETWEEN '2023-03-20 21:14:58.104093+02' AND '2023-03-20 23:13:58.104093+02'
// 					  OR dropoff_date BETWEEN '2023-03-20 21:14:58.104093+02' AND '2023-03-20 23:13:58.104093+02')
// AND status = 'available';

//sql search for available cars

// SELECT * FROM public.vehicle WHERE "carID" not in (SELECT carID FROM BOOKING  WHERE pickup_date BETWEEN '2023-03-20 21:14:58.104093+02' AND '2023-03-20 23:13:58.104093+02' OR dropoff_date BETWEEN '2023-03-20 21:14:58.104093+02' AND '2023-03-20 23:13:58.104093+02') AND status = 'available';

const pool = require("../../connection/connection")

const addMasege = (req, res) => {

    const { conversationId, senderId, receiverId, message, userIsSender, status, createdAt} = req.body

    console.log(req.body)
    pool.query('INSERT INTO public.messege("conversationId", "senderId", "receiverId", message, "userIsSender", status, "createdAt") VALUES ($1, $2, $3, $4, $5, $6, $7)',  [conversationId, senderId, receiverId, message, userIsSender, status, createdAt], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`User message with ID: ${results.insertId}`)
    })  
  }
  const GetAvailbleVehicles = (req, res) => {

    const { pickup_date, dropoff_date } = req.body

    console.log(req.body)
    pool.query(`SELECT * FROM public.vehicle WHERE "carID" not in (SELECT carID FROM public.booking WHERE pickup_date BETWEEN $1 AND $2 OR dropoff_date BETWEEN $1 AND $2 AND status = 'available';`, [pickup_date, dropoff_date], (error, results) => {
    //   res.status(200).json(results.rows)
    console.log('hello')
    });
  }

  const GetAvailbleVehicle = (req, res) => {

    // const { pickup_date, dropoff_date } = req.body
    pool.query(`SELECT * FROM public.vehicle WHERE "carID" not in (SELECT carID FROM public.booking  WHERE pickup_date BETWEEN '2023-03-20 21:14:58.104093+02' AND '2023-03-20 23:13:58.104093+02' OR dropoff_date BETWEEN '2023-03-20 21:14:58.104093+02' AND '2023-03-20 23:13:58.104093+02') AND status = 'available';`, (error, results) => {
     
      res.status(200).json(results.rows)
    })
  }

  const GetFullDetailsOfVehicle = (req, res) => {

    pool.query(`SELECT * FROM public.vehicle v, public.users u WHERE v."userID" = u."userID";`, (error, results) => {
     
      res.status(200).json(results.rows)
    })
  }

  module.exports = {
    addMasege,
    GetAvailbleVehicles,
    GetAvailbleVehicle,
    GetFullDetailsOfVehicle 
  }