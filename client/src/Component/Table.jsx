import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Table({ UpdatedUser,isUpdateLoading}) {

  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  
  
 
  const fetchData = async () => {
    try {
      const user = await axios.get("http://localhost:8080/api/getUsers");
      const response = await user.data;
  
      setData(response.finalUsers);
      console.log("this is users data")
      console.log(response.finalUsers)
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  },[isLoading,isUpdateLoading]);


  
  const createUser = async (userId) => {
    setIsLoading(true)
    let newUser = {}
    for(let i = 0 ;i<data.length;i++){
        if(data[i].id === userId){
            newUser = data[i]
        }
    }
    try {
      const adduser = await axios.post('http://localhost:8080/api/createUser', newUser)
      console.log("main data here")
      console.log(data)
      const response = adduser.data
      if (response.success) {
          toast.success(response.Message)
          CloseRef.current.click()
      }

      console.log(response)
  } catch (error) {
      console.log(error)
  }
  setIsLoading(false)
  };

  const deleteUser = async (userId) => {
    setIsLoading(true)
     console.log(userId);
    try {
      const DeletUser = await axios.delete(`http://localhost:8080/api/deleteUser/${userId}`)
      const response = DeletUser.data
            if (response.success) {
                toast.success(response.message)
            }

      console.log(response)
  } catch (error) {
      console.log(error)
  }
  setIsLoading(false)
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
                          // data-bs-toggle="modal"
                          // data-bs-target="#deleteEmployeeModal"
                          onClick={() => deleteUser(elem._id)}
                          // onClick={() => Deletuser(elem._id)}
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
                      <button onClick={() => createUser(elem.id,elem._id)}>
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
