import Response from "../mongo-models/response.js"
export default class MongoService{

    static saveResponseToDatabase = async (id, data)=>{
        try {
            // Establish a connection to your MongoDB database
            // Replace the connection string and any other relevant configurations
            await mongoose.connect('mongodb://localhost:27017/your_database_name', {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            });
      
            // Create a new document using the Response model and save it to the database
            const response = new Response({ id, data });
            await response.save();
      
            // Close the database connection after saving the data
            await mongoose.connection.close();
            
            // Return a success message or any necessary information
            return { success: true, message: 'Response saved to database successfully' };
          } catch (error) {
            // Handle errors
            console.error('Error saving response to database:', error);
            throw new Error('Error saving response to database');
          }
    }
}