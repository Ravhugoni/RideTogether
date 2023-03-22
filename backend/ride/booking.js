
const pool = require("../../connection/connection")

const addBooking = (req, res) => {

    const { userid, carid, pickup_date, dropoff_date, bk_status, seat_available, co_passenge} = req.body

    console.log(req.body)
    pool.query('INSERT INTO public.booking(userid, carid, pickup_date, dropoff_date, bk_status, seat_available, co_passenger) VALUES ($1, $2, $3, $4, $5, $6, $7)',  [userid, carid, pickup_date, dropoff_date, bk_status, seat_available, co_passenge], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`User Booking with ID: ${results.insertId}`)
    })  
  }
  const GetFullBookingDetails = (req, res) => {

    pool.query('SELECT b.userid as BookerPerson, b.carid, b.pickup_date, b.dropoff_date, b.bk_status, b.seat_available, b.co_passenger, b."bookingID", c."carID", c."carName", c."carImage", c.model, c."numberPlate", c.make, c.category, c.status, c."userID" as Driver, c."seatNo" FROM public.booking b, public.vehicle c WHERE b."carid" = c."carID" ORDER BY b."bookingID";', (error, results) => {
     
      res.status(200).json(results.rows)
    })
  }

  module.exports = {
    addBooking,
    GetFullBookingDetails
  }