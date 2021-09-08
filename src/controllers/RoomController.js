module.exports = {  
    create(req, res) {
        let roomId = 125452

        

        res.redirect(`/room/${roomId}`)
    }
}