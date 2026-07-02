import dotenv from "dotenv"; 
import criarApp from "./app";

dotenv.config()

async function start() {
    //await connectDatabase();

    //implementação das interfaces

    const app = criarApp()

    app.listen(
        process.env.PORT, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT}`);
        }
    )
}