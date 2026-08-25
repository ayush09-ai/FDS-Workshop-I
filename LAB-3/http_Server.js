import http from  'http';
// import { type } from 'os';
const server = http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/msg' && method=='GET')
        res.end("This is welcome message from server")
})
server.listen(3000,()=>{
    console.log("Server is running on port : 3000");
});
 