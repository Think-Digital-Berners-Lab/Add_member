var db = require("./database")
module.exports = (req,res)=>{
    var member_name = req.body.member_name;
    

    var member_description=req.body.member_description
    
    
    var mathPName = "SELECT * from add_new_member WHERE member_name = '"+member_name+"'"
    db.query(mathPName,(err,results)=>{
        if(err)
        throw err
        else {
            if(results.length>0){    
                   
                
                    var sql = "update add_new_member set member_description='"+member_description+"',where member_name='"+member_name+"' "
                    db.query(sql,(err,result)=>{
                        if(err)
                        console.log(err)
                        else
                        return res.redirect('/member')
                        
                    })
            }
            else{
                res.send({
                    status:"Invalid Member Name"
                })
            }
        }
    })
  

    

      
}