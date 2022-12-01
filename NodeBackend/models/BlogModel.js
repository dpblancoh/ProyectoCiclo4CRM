import mongoose from "mongoose";
const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
    empresa: {type:String, required:true},
    nit: {type:Number, required:true},
    nombres: {type:String, required:true},
    apellidos: {type:String, required:true},
    telefono: {type:String, required:true},
    direccion: {type:String, required:true},
    email: {type:String, required:true},
    departamento: {type:String, required:false},
    ciudad: {type:String, required:true},
    cargo: {type:String, required:false}
    },
    {collection: 'blogs'}
)

export default mongoose.model('BlogModel', blogSchema)