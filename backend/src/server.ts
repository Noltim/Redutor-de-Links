import app from './app';
import database from './database'



database.sync();
console.log("Database on!")


app.listen(3000);
console.log("Server listening on port 3000");