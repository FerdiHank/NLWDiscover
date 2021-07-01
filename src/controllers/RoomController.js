module.exports = {
    create(req, res){
      const roomId = 123456

      

        res.render(`./room/${roomId}`)
    }
}