const app = require("./src/server");
const conDb = require("./src/config/conDb");

conDb().then((res) => {
    
    app.listen(3001, () => {
        console.log("Servidor iniciado port 3001");
    })
})
.catch((err) => {
    console.log("Error al conectar la BDD ", err.message);
})

