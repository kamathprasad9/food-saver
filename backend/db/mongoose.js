const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB!');
})
.catch((err) => {
    console.error('Error connecting--> ', err);
});