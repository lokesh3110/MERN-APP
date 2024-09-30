const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./routes/userRoute');

dotenv.config();
const PORT = Number(process.env.PORT) || 4000;
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

mongoose.connect(process.env.URI)
.then(() => {
    console.log("connection successfull");
    app.listen(PORT, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Listening at port ${PORT}.`);
        }
    });
}).catch((err) => console.log(err))

app.use(userRouter);



 

