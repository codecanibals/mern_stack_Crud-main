import usermodel from "../models/User.js"
import deleteusermodel from "../models/Deleteuser.js"
import axios from 'axios'
import https from 'https'


 const createUser=async(req,res)=>{
  try {
    const {name,username,email,phone,id}=req.body
    const Newuser=  new usermodel({
    name,username,email,phone,id
   })

  await Newuser.save()
  // let users = this.getUsers()

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
       id:deletuser['id'],
      // id:deletuser[i]['id'],
      // name:deletuser[i]['name'],
      // username:deletuser[i]['username'],
      // email:deletuser[i]['email'],
      // phone:deletuser[i]['phone'],
      // website:deletuser[i]['website'],
      // status:"",

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
          // name:response[i]['name'],
          // email:response[i]['email'],
          // phone:response[i]['phone'],

          id:response[i]['id'],
          name:response[i]['name'],
          username:response[i]['username'],
          email:response[i]['email'],
          phone:response[i]['phone'],
          website:response[i]['website'],
          status:"",
          
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

const getUsers = async (req, res) => {
  try {
    const usr = await axios.get(url, { httpsAgent });
    let users = usr.data;
    if (!users) {
      return res.status(404).json({ success: false });
    }

    let dbUsers= await usermodel.find()
    let dbDeletedUsers= await deleteusermodel.find()

    // let dbUsers = [];
    // let dbUsr = {
    //   id: 5,
    //   name: "Mrs. Dennis Schulist",
    //   username: "Leopoldo_Corkery",
    //   email: "Karley_Dach@jasper.info",
    //   phone: "1-477-935-8478 x6430",
    //   website: "ola.org",
    // };
    // dbUsers.push(dbUsr);

    let finalUsers = [];
    let userFound = false;
    // console.log("users:" + JSON.stringify(users));
    // console.log("dbUsers:" + JSON.stringify(dbUsers));
    if (users.length > 0 && dbUsers.length > 0) {
      console.log("users and dbUsers having data ...");

      for (var i = 0; i < users.length; i++) {
        for (var j = 0; j < dbUsers.length; j++) {
          let usr = users[i];
          let dbUsr= dbUsers[j];
          if (dbUsr.id === usr.id) {
            dbUsr.status = "Available";
            finalUsers.push(dbUsr);
            userFound = true
          } /*
          else {
            usr.status = "";
            finalUsers.push(usr);
          }*/
        }
        if(!userFound){
      
          finalUsers.push(users[i])
        }
        userFound = false
      }
    } else {
      console.log("else block");
      for (var i = 0; i < users.length; i++) {
        let usr = users[i];
        //console.log("i value :"+i+ " usr details:"+usr);
        usr.status = "";
        //console.log("i value :"+i+ " usr details updated:"+JSON.stringify(usr));
        finalUsers.push(usr);
      }
    }

    if(dbDeletedUsers.length>0){
      console.log("inside db deleted users")
    for(let k = 0 ;k<finalUsers.length;k++){
      for(let j = 0 ;j<dbDeletedUsers.length;j++){
           if (finalUsers[k].id === dbDeletedUsers[j].id){
            console.log("users is deleteing for main data")
             finalUsers.splice(k,1);
           }
      }
    }
  }
    //console.log("finalUsers:"+finalUsers)
    // console.log(" users : " +  users);
    console.log("finalUsers")
    console.log(finalUsers)
    // console.log("finalUsers:"+JSON.stringify(finalUsers));
    res.status(200).json({ finalUsers});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};


export {createUser,getUserData,updateUser,deleteUser,getDeleteUser,getUsers,getMockUsers,getApiData}