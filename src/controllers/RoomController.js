const  Database = require("../db/config")

module.exports = {  
    async create(req, res) {
        const db = await Database()
        const pass = req.body.passwaord
        let roomId
        
        for(let i = 0; i < 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
        }

        await db.run(`
            INSERT INTO roooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}
            )
        `)

        await db.close()


        res.redirect(`/room/${roomId}`)
    }
}