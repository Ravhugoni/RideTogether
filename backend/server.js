const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// ------------------------------------------------------------
const rideRegi = require('./ride/register')
const ridelogin = require('./ride/login')
const message = require('./ride/messege')
const users = require('./ride/users')
const cars = require('./ride/cars')
const booking = require('./ride/booking')


// -------------------------------------------------------------

const port = 3300;
// const dotenv = require('dotenv');
const cors = require('cors');

var corsOptions = {
    origin:"*"
}
app.use(cors(corsOptions));
// dotenv.config();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// -------------------------------------------------------------

app.post('/register', rideRegi.registerUser)
app.post('/login', ridelogin.login)
app.post('/messages/addMessage', message.addMasege)
app.post('/messages/getMessegeByRoom', message.GetMessageByRoom)
app.get('/getUsers', users.getUsers)
app.post('/cars/GetAvailableVehicles', cars.GetAvailbleVehicles)
app.get('/cars/GetAvailableVehicle', cars.GetAvailbleVehicle)
app.get('/cars/GetFullDetailsOfVehicle', cars.GetFullDetailsOfVehicle)
app.post('/booking/addBooking', booking.addBooking)
app.get('/booking/GetFullBookingDetails', booking.GetFullBookingDetails)

// --------------------------------------------------------------

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
