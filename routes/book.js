const express = require('express');
const bookRouter = express.Router();
const connect = require('./../database/db')

bookRouter
  .route('/') 
  .get(async(req, res) => {
    const db = await connect()
    const books = await db.collection('book').find().toArray()
    res.json(books)
})
  .post(async(req, res) => {
    const db = await connect()
    /* const data = {
      title:"111",
      author:"222"
    } */
    await db.collection('book').insertOne(req.body)
    res.json({data:'Book is stored'})
  })



bookRouter
.route('/:id')
.get((req, res) => {
  res.send(`Single book of ID:${req.params.id}`)
})
 .patch((req, res) => {
  res.send(`Single book of ID:${req.params.id} to update`)
})

.delete((req, res) => {
  res.send(`Single book of ID:${req.params.id} to delete`)
})


module.exports = bookRouter