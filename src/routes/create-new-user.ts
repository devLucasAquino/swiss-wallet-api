import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function createNewUser(app: FastifyInstance){
    app.withTypeProvider<ZodTypeProvider>().post(
        '/login', 
        {
            schema:{

                body: z.object({
                    name: z.string().min(2),
                    date_born: z.coerce.date(),
                    email: z.string().email(),
                    cpf: z.string().min(11),
                    phone: z.string(),
                    // password: z.string(),
                })
            }
        }, async (request) => {
                const { name, date_born, email, cpf, phone } = request.body;

                const user = await prisma.user.create({
                    data: {
                        name,
                        date_born,
                        email,
                        cpf,
                        phone,
                    }
                })
                    
        return user
        
        })










}

