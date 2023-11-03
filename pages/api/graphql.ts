import {ApolloServer} from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next";
 import {prisma} from "@/prisma/db";
 import{PrismaClient }  from "@prisma/client";
 
 export type Context ={
     prisma:PrismaClient
 }
 const applloServer= new ApolloServer<Context>({});
 export default startServerAndCreateNextHandler(server,{context:async({req,res,prisma })})