const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const login = require('./controllers/login');
const register = require('./controllers/register');
const user = require('./controllers/users');
const job = require('./controllers/jobs');
const cat = require('./controllers/category');
const rate = require('./controllers/rate');

// ------------------------------------------------------------
const rideRegi = require('./controllers/ride/register')
const ridelogin = require('./controllers/ride/login')
const message = require('./controllers/ride/messege')
const users = require('./controllers/ride/users')
const cars = require('./controllers/ride/cars')
const booking = require('./controllers/ride/booking')


// -------------------------------------------------------------

const port = 3000;
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

//routes for login
app.post('/users/login', login.login)

//routes for registering
app.post('/users/register', register.registerUser)

//routes for users
app.get('/users', user.getUsers)
app.patch('/users/:id', user.updateUser)

//routes for Jobs
app.get('/jobs', job.getJobs)
app.post('/jobs', job.postJob)
app.post('/bidjob', job.bidJob)
app.get('/bidjob', job.getBidJobs)

//routes for Jobs
app.get('/category', cat.getCategory)

//routes for Jobs
app.get('/rate', rate.getRatings)
app.post('/rate', rate.postRate)
app.get('/numRate', rate.getTotalRatings)
app.get('/rateByRater', rate.getRatingsByRater)
app.get('/rateByRated', rate.getRatingsByRated)


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
