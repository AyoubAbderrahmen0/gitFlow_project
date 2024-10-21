//require express 
const  express = require ('express');
//Instance express
const app = express();
// Création Middleware
app.use(express.json());
//create Port
const PORT=8000
// Lancer le serveur
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on PORT ${PORT}`);
});
