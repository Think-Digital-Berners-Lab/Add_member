var db = require("./database")
module.exports = (req,res)=>{
    var member_name = req.body.member_name;
    

    var member_description=req.body.member_description
    
    var sql = "insert into add_new_member (member_name,member_description)  values  ('"+member_name+"','"+member_description+"') "
    db.query(sql,(err,result)=>{
        if(err)
        console.log(err)
        else
        return res.redirect('/member')
        
    })
      
}