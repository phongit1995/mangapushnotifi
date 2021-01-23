import * as mongoose  from 'mongoose';
export const historySchema= new mongoose.Schema({
    IndexName:{
        type:String
    },
    Chapter:{
        type:Number
    }
},{timestamps:true})
export interface History extends mongoose.Document{
    IndexName?:string,
    Chapter?:number
}