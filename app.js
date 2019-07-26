const source=require('./public/src/source')
const express=require('express')
const path=require('path')
const hbs=require('hbs')


const app=express()


app.set('view engine','hbs')

hbs.registerPartials(path.join(__dirname,'/partials'))
app.use(express.static(path.join(__dirname,'/public')))


app.get('/',(req,res)=>{
    res.render('index',{
        title:'diksha'
    })
})

        
app.get('/source',(req,res)=>{
    if(!req.query.category){
        res.send({
        error: 'you must provide an address'
    })
    }
    source(req.query.category,(error,data)=>{
        if(error){
            return res.send(error)
        }
        res.send(
            data
                
        )
    })
 })

app.listen(28280)