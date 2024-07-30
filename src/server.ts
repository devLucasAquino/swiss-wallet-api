import fastify from "fastify";
import { env } from "./env";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createNewUser } from "./routes/create-new-user";

const app = fastify();

app.setValidatorCompiler( validatorCompiler );
app.setSerializerCompiler( serializerCompiler );

app.register(createNewUser)


app.listen({port: env.PORT}).then(() => {
    console.log('server running!')
})