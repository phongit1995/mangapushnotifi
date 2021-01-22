import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { User } from 'src/database/user.model';
import { RoleType } from '../constants/role-type';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly _reflector:Reflector,
  private readonly jwtService:JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let roles = this._reflector.get<RoleType[]>('roles',context.getHandler());
    if(!roles){
      roles=[RoleType.MEMBER];
    }
    if( roles?.length==0 || roles?.includes(RoleType.MEMBER)==true){
      return true ;
    }
    const request = context.switchToHttp().getRequest();
    let user:User = <User> request.user;
    if(!user){
      throw new HttpException("Not Permission",HttpStatus.UNAUTHORIZED);
    }
    return true ;
  }
}
