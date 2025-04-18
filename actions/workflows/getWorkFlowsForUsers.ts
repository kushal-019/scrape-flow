'use server';

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GetWorkFlowsForUser(){
    const {userId} = auth();
    if(!userId){
        throw new Error("UnAuthenticated")
    }
    return prisma.workflow.findMany({
        where: {
            userId,
        },
        orderBy:{
            createdAt : 'asc',
        },
    });
}