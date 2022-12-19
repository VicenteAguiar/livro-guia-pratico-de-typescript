import StartUp from "./startUp";

const port = process.env.PORT || 5000;

StartUp.app.listen(
    port,
    () => console.log(`Servidor rodando na porta: ${port}`)
)