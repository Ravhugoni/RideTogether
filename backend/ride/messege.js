
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
  const GetMessageByRoom = (req, res) => {

    const { roomID } = req.body
    pool.query('SELECT * FROM public.messege WHERE "conversationId" = $1 ORDER BY _id ASC ', [roomID], (error, results) => {
     
      res.status(200).json(results.rows)
    })
  }

  module.exports = {
    addMasege,
    GetMessageByRoom
  }
  