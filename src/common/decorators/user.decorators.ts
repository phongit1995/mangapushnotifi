import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/database/user.model';
export const UserInfo = createParamDecorator((data:unknown,ctx: ExecutionContext)=>{
    const request = ctx.switchToHttp().getRequest();
    return <User> request.user ;
})