import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Table({ Deletuser, UpdatedUser }) {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //     async function FeatchData() {
  //         try {
  //             const user = await axios.get('http://localhost:8000/api/get')
  //             const response = user.data
  //             // console.log(response.users)
  //             setData(response)
  //             // console.log(response.data.users.email, 'email')
  //         } catch (error) {
  //             console.log(error)
  //         }
  //     }
  //     FeatchData()
  // }, [data])

  const [data, setData] = useState([]);
  
   console.log( "this is the backend data",data);

  const fetchData = async () => {
    try {
      const user = await axios.get("http://localhost:8080/api/getUsers");
      const response = await user.data;
      console.log(response);
      // dataa = response
      //console.log(data)
      setData(response.finalUsers);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);



  const updateUser = async (userId,dbUserId) => {
    console.log("Hello")
    let newUser = {}
    for(let i = 0 ;i<data.length;i++){
        if(data[i].id === userId){
            newUser = data[i]
        }
    }
    
    newUser = data[userId-1]
    // newUser.status = "Available";
    // console.log(newUser)

    try {
      const adduser = await axios.post('http://localhost:8080/api/createUser', newUser)
      console.log("main data here")
      console.log(data)
      const response = adduser.data
      setData(data)
      if (response.success) {
          toast.success(response.Message)
          CloseRef.current.click()
      }

      console.log(response)
  } catch (error) {
      console.log(error)
  }
  
  };

  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Employees</b>
                </h2>
              </div>
              <div className="col-sm-6">
                {/* <a href="http://localhost:5173/api/getUsers" className="btn btn-success" >
                                    <span>Get Api Data</span>
                                </a> */}
                <a
                  href="#"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <i className="material-icons">&#xE147;</i>{" "}
                  <span>Add New Employee</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                {/* <th>Status</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((elem, index) => {
                return (
                  <tr>
                    <td></td>
                    <td>{elem.name}</td>
                    <td>{elem.username}</td>
                    <td>{elem.email}</td>
                    <td>{elem.phone}</td>
                    {/* <td>  {elem.status?(<i className='fa fa-check'></i>):(   <i className="fa-solid fa-xmark"></i>)}</td> */}
                  
                    {elem.status ? (
                      <td>
                        <div>
                        <a
                          href="#"
                          className="edit cursor-pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#editEmployeeModal"
                          onClick={() => UpdatedUser(elem._id,elem)}
                        >
                          <i
                            className="material-icons"
                            data-bs-toggle="tooltip"
                            title="Edit"
                          >
                            &#xE254;
                          </i>
                        </a>
                        <a
                          href="#"
                          className="delete cursor-pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteEmployeeModal"
                          onClick={() => Deletuser(elem._id)}
                        >
                          <i
                            className="material-icons"
                            data-bs-toggle="tooltip"
                            title="delete"
                          >
                            &#xE872;
                          </i>
                        </a>
                        
                        </div>
                        {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                      </td>
                    ) : (
                        <div>
                      <button onClick={() => updateUser(elem.id,elem._id)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                   
                      </div>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
