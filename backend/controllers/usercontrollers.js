import usermodel from "../models/User.js"
import deleteusermodel from "../models/Deleteuser.js"
import axios from 'axios'
import https from 'https'


 const createUser=async(req,res)=>{
  try {
    const {name,username,email,phone}=req.body
    const Newuser=  new usermodel({
    name,username,email,phone
   })
   await Newuser.save()

   res.status(200).json({success:true,message:"User Created Successfully.", Newuser})
  } catch (error) {
    console.log(error)
  return  res.status(500).json({success:false,message:"Interl server eror"})
  }
}

///////Read api
const getUserData=async(req,res)=>{
       
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

const getDeleteUser=async(req,res)=>{
       
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
const updateUser=async(req,res)=>{
 try {
     const userId=req.params.id
     console.log(userId)
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

// delet user api
const deleteUser=async(req,res)=>{
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


const getApiData=async(req,res)=>{
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


const url = "https://jsonplaceholder.typicode.com/users";
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const getUsers = async (req, res) => {
  try {
    const usr = await axios.get(url, { httpsAgent });
    let users = usr.data

   /* for(let i = 0 ;i<users.length;i++){
      const Apiuserdata =  new usermodel({
        name:users[i]['name'],
        email:users[i]['email'],
        phone:users[i]['phone'],
        
       })
       await Apiuserdata.save()
    }
    */
    const dbUsers= await usermodel.find()
  
    let valueFind = false;
    let mainUserData = [];
    let status = "";
    // Note - users compare with db users data
    for(let i = 0 ;i<users.length;i++){
      for(let j = 0 ;j<dbUsers.length;j++)
      {
       
        if(dbUsers[j].id === users[i].id){
          valueFind = true
        }
      }
      if (!valueFind){
        // let mainUserObject = {
        //   id:users[i]['id'],
        //   name:users[i]['name'],
        //   username:users[i]['username'],
        //   email:users[i]['email'],
        //   phone:users[i]['phone'],
        //   website:users[i]['website'],
        //   status:"",

        // }

        const apiUserData =  new usermodel({
          id:users[i]['id'],
          name:users[i]['name'],
          username:users[i]['username'],
          email:users[i]['email'],
          phone:users[i]['phone'],
          website:users[i]['website'],
          status:"",
         })
         await apiUserData.save()   
       }
      valueFind = false
    }
   mainUserData = await usermodel.find()
   console.log(mainUserData)
  
    if (!mainUserData) {
      return res.status(404).json({ success: false })
    }
    res.status(200).json({ mainUserData })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false })
  }
}

const getMockUsers = async (req, res) => {
  try {
    let users = [{ "name": "1", "fathername": "xyz", "email": "mno", "phone": "xyz@mno.com" }]
    if (!users) {
      return res.status(404).json({ success: false })
    }

    res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false })
  }
}


export {createUser,getUserData,updateUser,deleteUser,getDeleteUser,getUsers,getMockUsers,getApiData}