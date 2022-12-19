import mongoose from "mongoose";

class Database {
    private DB_URL = "mongodb://127.0.0.1:27017/db_portal";

    createConnection(){
        mongoose.set('strictQuery', false)
        mongoose.connect(this.DB_URL, () => {
            console.log('Database conectado')
        });
    }
}

export default Database;