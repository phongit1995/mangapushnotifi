import * as mongoose  from 'mongoose';
export enum POST_TYPE{
    FOLLOW="FOLLOW",
    LIKE="LIKE"
}
export const postSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    type_post:{
        type:String,
        default:POST_TYPE.FOLLOW
    },
    user_target:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    totalCount:{
        type:Number
    },
    balance :{
        type:Number
    },
    status:{
        type:Boolean,
        default:true
    },
    user_active:[
        {
            user_id:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'user'
            },
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ]

},{timestamps:true})
export interface Post extends mongoose.Document{
    user_id?:string,
    user_target?:string,
    type_post?:string,
    totalCount?:number,
    balance?:number,
    status?:boolean,
    user_active?:Array<{user_id:string,createdAt?:Date}>
}