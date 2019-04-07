var db = require("./database")

module.exports=(req,res)=>{
  var member_name = req.body.member_name;
    if(req.files.pimg1!=""){
    var file = req.files.pimg1;
    var pimg1 = file.name;
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg"
    ) {
      var uploadpath = "public/images/" + pimg1;
      var sqldata =
      "update add_new_member set pimg1='" +
      pimg1 +
      "' where project_member = '" +
      member_name +
      "'  ";
    db.query(sqldata, (err, results, fields) => {
      if (err) console.log("error occured", err);
      else {
        return res.redirect("/member");
      }
    });
    file.mv(uploadpath, err => {
      if (err) throw err;
      else console.log("file uploaded");
    });
  } else res.send("Wrong file format");
    }
    }