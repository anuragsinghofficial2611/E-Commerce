const app = require('./app/app')
const connectDB = require('./app/configs/db')

connectDB();

app.listen(3000,() => {
    console.log('server is live at 3000');
})