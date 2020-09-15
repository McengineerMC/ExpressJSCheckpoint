const express=require("express")
const hbs=require("hbs")
const app = express()


//middleware for static file
/*app.use(express.static('public/image'));
app.use(express.static('public/css'));*/


app.use(time=(req,res,next)=>{
    const date =new Date();
    console.log(date);
    if (date.getDay() !== 0 && date.getDay() !== 6 && date.getHours()>=9 && date.getHours()<=17) {next()}
    else {res.send("page not available : you are outside of working time..........")}
})

app.set("views engine", hbs);

app.get("/homepage",(req,res)=>{

    res.render("Home page.hbs")

})

app.get("/ourservice",(req,res)=>{
    res.render("Our Services.hbs")
})
app.get("/contactus",(req,res)=>{
    res.render("Contact us.hbs")
})



//server run
app.listen(5000,(err)=>{
if(err) {console.log('server not run')}
else { console.log('server run on port 5000')}
})