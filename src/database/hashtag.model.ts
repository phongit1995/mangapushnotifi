import * as mongoose  from 'mongoose';
export const hashtagSchema= new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String,
    },
    hashtag:[
        {
            type:String
        }
    ]
},{timestamps:true})
export interface HashTag extends mongoose.Document {
    name?:string,
    image?:string,
    hashtag?:Array<string>
}