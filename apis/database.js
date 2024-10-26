require('dotenv').config();
const mongoose = require('mongoose');

// Connection string for MongoDB (replace 'mydatabase' with your preferred name)

// const DB_URL = process.env.MONGO_ATLAS_URI;
const DB_URL=process.env.MONGO_ATLAS_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(DB_URL, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("MongoDB connected successfully!!");

  }catch(error){
    console.error("MongoDB connection error:", error.message);
    process.exit(1);

  }finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);


// const connectDB = async () => {
//     try {
//         await mongoose.connect(DB_URL, { // Use DB_URL variable
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB connected successfully!");
//     } catch (error) {
//         console.error("MongoDB connection error:", error.message);
//         process.exit(1); // Exit the process with failure
//     }
// };

// connectDB();

module.exports = mongoose;
