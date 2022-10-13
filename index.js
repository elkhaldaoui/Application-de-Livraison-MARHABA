const express = require("express")
const app = express()

app.get('/', (req,res)=> {
res.send(" it is working from web")
})

// bringg events routes
const events = require('./routes/event-routes')
app.use('/events', events)

// listen to port 3000

app.listen(5000, ()=>{
    console.log('its work from port 5000')
})

