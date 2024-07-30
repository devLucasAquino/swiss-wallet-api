import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function getUsers(app: FastifyInstance){
    app.withTypeProvider<ZodTypeProvider>().get(
        '/users', {}, async (request) => {

            const user = await prisma.user.findMany({
                select:{
                    id: true,
                    name: true,
                    date_born: true,
                    email: true,
                    cpf: true,
                    phone: true,
                },
                
            })

            return user


        })


}
