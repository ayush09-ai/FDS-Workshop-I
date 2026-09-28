import express from 'express'
// const app= express()
const app = express();
const userData = [{
    id:101,
    name:"abs",
    email:"anc@gamil.com"
}];


app.get ("/msg",(req,res) => {
    res.status(200).json({
        message:"Welcome user"
    });
});


app.get ("/users",(req,res) => {
    res.status(200).json({
        message:"Data recieved"
    });
});


app.post("/create",(req,res)=>{
    const{id,name,email}=req.body
    const newuser={
        id,
        name,
        email
    }
    userData.push(newuser);
    res.status=(201).jason({message:"user created successful",newuser})
});


app.listen(4000,()=>{
    console.log("Server sis running on port number 4000");
})