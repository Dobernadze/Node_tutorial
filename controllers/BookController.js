const {ObjectId} = require('mongodb')
const Book = require ('../models/Book')
/* const connect = require('./../database/db'); */

exports.index = async(req, res) => {
    /* const db = await connect() */
    /* const books = await db.collection('book').find().toArray(); */
    const books = await Book.find()
    res.json(books)
 }

 exports.store = async(req, res) => {
    try {
    await Book.create(req.body)
    res.status(201).json({data: 'Book is stored'}) 
  } catch (error){
      res.json(error.errors)
  }
 }
  exports.show = async(req, res) => {
    const _id = ObjectId(req.params.id)
    const book = await Book.find({_id})
    /* const db = await connect()
    const book = await db.collection('book').find({_id}).toArray() */
    res.json(book)
  }

  exports.update = async(req, res) => {
    const _id = ObjectId(req.params.id)
    /* const db = await connect() */
    await Book.updateOne({_id}, {$set:req.body})
    res.json({data:'Book is updated'})
}

  exports.delete = async(req, res) => {
    const _id = ObjectId(req.params.id)
    const db = await connect()
    await db.collection('book').deleteOne({_id})
    res.status(204).json()
  
}