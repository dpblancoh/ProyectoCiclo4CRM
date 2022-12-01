import mongoose from 'mongoose'
const url = 'mongodb+srv://root:root@ciclo4.isgvcg4.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )

export default db


//mongodb+srv://root:<password>@ciclo4.isgvcg4.mongodb.n