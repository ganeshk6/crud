import mongoose from "mongoose";

const Connection = async (username, password) => {
    try{
        await mongoose.connect(`mongodb+srv://${username}:${password}@crud-app.syamlv0.mongodb.net/crud-app?retryWrites=true&w=majority`, {useUnifiedTopology: true,useNewUrlParser: true });
        console.log('Database connected successfully ');
    }catch(error){
        console.log('Error while connecting with the database', error);
    }
    
}

export default Connection;