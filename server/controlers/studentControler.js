

const stuHome=async(req,res)=>{
    res.send("student home page")
}


const stuAbout=async(req,res)=>{
    res.send("about page")
}

const stuContact=async(req,res)=>{
    res.send("contact pages!!!!")
}

const stuService=async(req,res)=>{
    res.send("server page!!!")
}

export default stuHome;
export{
    stuAbout,
    stuContact,
    stuService
}