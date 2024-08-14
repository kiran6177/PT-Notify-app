import mongoose from 'mongoose'
export const connection = ()=>{
    mongoose.connect('mongodb://localhost:27017/notify')
    mongoose.connection.on("connected", () => {
        console.log("APP Connected to MongoDB");
      })
      
      mongoose.connection.on("error", (err) => {
        console.log("APP Error connecting to MongoDB");
      })
      
      mongoose.connection.on("disconnected", () => {
        console.log("APP Disconnected from MongoDB");
      })
}