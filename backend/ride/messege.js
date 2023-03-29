
const pool = require("../connection/connection")
const io = require('socket.io')

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
  const GetMessageByRoom = (req, res) => {

    const { roomID } = req.body
    pool.query('SELECT * FROM public.messege WHERE "conversationId" = $1 ORDER BY _id ASC ', [roomID], (error, results) => {
     
      res.status(200).json(results.rows)
    })
  }

  const socket = (req, res) =>{

    req.body;
    
    io.on('connection', (socket) => {
      console.log('a user connected');
    
      socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
      });
    
      socket.on('disconnect', () => {
        console.log('a user disconnected!');
      });
    });
  }

  module.exports = {
    addMasege,
    GetMessageByRoom,
    socket
  }
  