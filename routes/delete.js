var db = require("./database")
module.exports = (req,res)=>{
    var member_name = req.params.id
    var sql = "delete from add_new_member where member_name ='"+member_name+"'"
    db.query(sql,(err,results)=>{
        if(err)
        throw err
        else
        return res.redirect('/member')
    })
}