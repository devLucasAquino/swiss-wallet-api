import fastify from "fastify";
import cors from '@fastify/cors';
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createNewUser } from "./routes/create-new-user";
import { getUsers } from "./routes/get-users";

const app = fastify();

app.register(cors, {
    origin: '*',
})

app.setValidatorCompiler( validatorCompiler );
app.setSerializerCompiler( serializerCompiler );

app.register(createNewUser)
app.register(getUsers)


app.listen({port: 3333}).then(() => {
    console.log('server running!')
})