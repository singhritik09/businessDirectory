const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;


mongoose.connect('mongodb://127.0.0.1/UserCollection')
    .then(() => console.log("Successfuly connected"))
    .catch(err => console.log("Error"))

const User = require("./models/users");
const Business=require("./models/business")
app.use(cors())
app.use(express.json());



// const mongoURI = 'mongodb+srv://singhritik09:hashpassword1199@cluster0.au2um80.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });

async function getAllBusiness() {
  const biz=await Business.find({}).select({name:1}) //.sort({name:1})     //    const course=await Course.find({publisher:"Name"})
  console.log(biz)
}

async function createBusiness(aname,alocation,aproducts,atags,aabout,agst)
{
  const biz=new Business({
    name:aname,
    location:alocation,
    products:aproducts,
    tags:atags,
    about:aabout,
    gst:agst
  })


  const res = await biz.save()
  console.log(res)

}

async function getUsers()
{
  const users=await User.find({}).select({name:1})
  console.log(users)
}

async function getByName(nm)
{
  const biz=await Business.find({name:nm})
  console.log(biz)
}

async function getByLocation(loc)
{
  const biz=await Business.find({location:loc})
  console.log(biz)
}

async function getByTag(tg)
{
  const biz=await Business.find({"tags" : {$regex : tg}})
  console.log(biz)
}
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/create',(req,res)=>{
  const name=req.body.name
  const location=req.body.location
  const products=req.body.products
  const tags=req.body.tags
  const about=req.body.about
  const gst=req.body.gst
  createBusiness(name,location,products,tags,about,gst)
  res.send("Successfully added business")
})

app.get('/users',(req,res)=>{
  getUsers();
  res.send("All users")
})

app.get('/allBusiness',(req,res)=>{
  getAllBusiness();
  res.send("Fetched Business details")
})

app.get('/getName',(req,res)=>
{
  const name=req.body.name
  getByName(name);
  res.send("Query Results")
})

app.get('/getLocation',(req,res)=>{
  const location=req.body.location
  getByLocation(location)
  res.send("Query Results")
})

app.get('/getTags',(req,res)=>{
  const tag=req.body.tag
  getByTag(tag)
  res.send("Query Results")
})

app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, name, descr, tag, contact, gst, location } = req.body;

    const newUser = await User.create({
      email,
      password,
      name,
      descr,
      tag,
      contact,
      gst,
      location
    });

  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ status: 'error', message: 'An error occurred while creating the user.' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });
    if (user) {
      console.log(user.json);
      res.json({ success: true, message: 'Login successful' });
    }
    else {
      res.json({ success: false, message: "No" });
    }
  }
  catch (err) {
    res.send({ status: "error" })
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
