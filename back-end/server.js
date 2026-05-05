const express = require('express')
const postgres = require('postgres')
const cors = require('cors')


const app = express()





app.use(cors({
    origin: "http://192.168.1.100:3000"
}))
app.use(express.json())




app.post('/create', async (req,res) => {
    const { url, id, task, status } = req.body
    

    const sql = await postgres(url)
    const createTask = await sql`insert into tarefas (id, tarefa, status) VALUES (${id}, ${task}, ${status})`

    res.json({tarefaCriada: createTask})

})


app.delete('/delete', async (req, res) => {
    const { url, id } = req.body

    const sql = await postgres(url)
    const deleteTask = await sql`DELETE FROM tarefas WHERE id=${id}`

    res.status(200).json( "usuário deletado")

})

app.put('/updateStatus', async (req, res) => {

    const { url, id, newStatus} = req.body

    const sql = await postgres(url)
    const updatedTask = await sql`UPDATE tarefas SET status=${newStatus} WHERE id=${id}`

    res.json("task atuliazada ")
})







const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado! http://localhost:${PORT}`))