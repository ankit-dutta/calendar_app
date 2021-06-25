if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}


const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');
const Calendar = require('./models/calendar')
const methodOverride = require('method-override');


//CONNECTING TO THE DATABASE

connectDB();


app.set('view engine' , 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.render("home");
})

//all schedule
app.get('/calendars',async(req,res) =>{
    const calendars = await Calendar.findAll();
    res.render('schedule',{calendars});
})

//getting a schedule form
app.get('/calendars/new',(req,res) =>{
    res.render('new');
})

//Create a new schedule
app.post('/calendars',async(req,res)=>{
    const calendar = await Calendar.create(req.body);
    res.redirect('/calendars');
})





app.get('/calendars/:id/edit',async(req,res) =>{
    const calendar = await Calendar.findOne({
        where:{
            id:req.params.id
        }
    })
    res.render('edit',{calendar});
})

app.patch('/calendars/:id',async(req,res) =>{
    await Calendar.update(req.body,{
        where:{
            id:req.params.id
        }
    })
    res.redirect(`/calendars`); 
})

app.delete('/calendars/:id',async(req,res)=>{
          
    await Calendar.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect('/calendars');
})









app.listen(process.env.PORT || 8080,()=>{
    console.log('server connected');
})