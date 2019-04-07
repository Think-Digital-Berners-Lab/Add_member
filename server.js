var express = require("express")
var morgan = require("morgan")
var bodyParser = require("body-parser")
var fileUpload = require("express-fileupload")
var path = require("path")
var ejs = require("ejs")
var db = require("./routes/database")
var app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.use(fileUpload())
//dashboard
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/dashboard.html")
})

//member
app.get('/member',(req,res)=>{
    db.query("select * from add_new_member",(err,results)=>{
        res.render('member',{
            member:results
        })
    })
        
})


//add_member
var add_new_member = require("./routes/add_new_member")
app.route("/add_new_member").post(add_new_member)
app.get('/add_new_member',(req,res)=>{
    res.sendFile(__dirname+"/add_new_member.html")
})

//project
app.get('/project',(req,res)=>{
    res.sendFile(_dirname+"project.html")
})

//events
app.get('/events',(req,res)=>{
    res.sendFile(__dirname+"/events.html")
})

//sponsers
app.get('/sponsers',(req,res)=>{
    res.sendFile(__dirname+"/sponsers.html")
})

//update_member
app.get("/update_member/:id",(req,res)=>{
    db.query("select * from add_new_member where member_name = '"+req.params.id+"'",(err,results)=>{
        res.render('update_member',{
            update_member:results
        })
    })
})


//upload_image1
var upload_image1 = require("./routes/upload_image1")
app.get("/upload_image1/:id",(req,res)=>{
    db.query("select * from add_new_member where member_name = '"+req.params.id+"'",(err,results)=>{
        res.render('upload_image1',{
            upload_image:results
        })
    })
})
app.route("/upload_image1").post(upload_image1)



//update
var update = require("./routes/update")
app.route("/update").post(update)

//delete
app.get('/delete/:id',(req,res)=>{
    db.query("delete from add_new_member where member_name = '"+req.params.id+"'",(err,results)=>{
        res.redirect("http://localhost:3000/member")
    }) 
})


app.listen(3000,(err)=>{
    if(err)
    console.log(err)
    else
    console.log("Server Connected at port 3000...")
})