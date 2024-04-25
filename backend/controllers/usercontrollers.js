import usermodel from "../models/User.js"
import deleteusermodel from "../models/Deleteuser.js"
import axios from 'axios'

 const create=async(req,res)=>{
  try {
    const {name,email,fathername,phone}=req.body
    const Newuser=  new usermodel({
    name,fathername,email,phone
   })
   await Newuser.save()

   res.status(200).json({success:true,message:"User Created Successfully.", Newuser})
  } catch (error) {
    console.log(error)
  return  res.status(500).json({success:false,message:"Interl server eror"})
  }
}

///////Read api
const get=async(req,res)=>{
       
   try {
    const users= await usermodel.find()
    if (!users) {
      return  res.status(404).json({success:false})
    }

    res.status(200).json({users})
} catch (error) {
    console.log(error)
    
    res.status(500).json({success:false})
   }

}

const getdeleteuser=async(req,res)=>{
       
   try {
    const usersdeleted= await deleteusermodel.find()
    console.log(usersdeleted)
    if (!usersdeleted) {
      return  res.status(404).json({success:false})
    }

    res.status(200).json({usersdeleted})

} catch (error) {
    console.log(error)
    
    res.status(500).json({success:false})
   }

}

////////update user api
const Updated=async(req,res)=>{
 try {
     const userId=req.params.id
 
 const updateuser=await usermodel.findByIdAndUpdate(userId,req.body,{new:true})
   if (!updateuser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
     res.status(200).json({ success: true, message: 'User updated successfully', updateuser });
 } catch (error) {
     console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
 }
}

// delet user ap
const Delete=async(req,res)=>{
try {
   const userId=req.params.id
   const deletuser= await usermodel.findByIdAndDelete(userId)

   const Deleteuser=  new deleteusermodel({
       name:deletuser['name'],
       email:deletuser['email'],
       phone:deletuser['phone'],
   })
   await Deleteuser.save()

   if (!deletuser) {
   return res.status(404).json({ success: false, message: 'user Not found' });
   }
   res.status(200).json({ success: true, message: 'user Deleted successfully' });
} catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' });
}
}

const Getapidata=async(req,res)=>{
  try {
      const myPosts = await fetch("https://jsonplaceholder.typicode.com/users")
      const response = await myPosts.json();
      for(let i = 0 ;i<response.length;i++){
        const Apiuserdata =  new usermodel({
          name:response[i]['name'],
          email:response[i]['email'],
          phone:response[i]['phone'],
          
         })
         await Apiuserdata.save()
      }

  } catch (error) {
      console.log(error) 
      
  }
}

export {create,get,Updated,Delete,Getapidata,getdeleteuser}