import { PrismaClient } from "@prisma/client";

declare global{
    var cacherPrisma: PrismaClient;
}

let prisma: PrismaClient;
if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
}else {
    if(!global.cacherPrisma){
        global.cacherPrisma = new PrismaClient();
    }
    prisma = global.cacherPrisma;
}
export const prismaClient = prisma;