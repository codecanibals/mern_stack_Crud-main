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

  const fetchData = async () => {
    try {
      const user = await axios.get("http://localhost:8080/api/getUsers");
      const response = await user.data;
      //console.log(response);
      // dataa = response
      //console.log(data)
      setData(response);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);



  const updateUser = async (userId,dbUserId) => {
    let newUser = {}
    for(let i = 0 ;i<data.length;i++){
        if(data.mainUserData.id === userId){
            newUser = data[i]
        }
    }
    // let newUser = data.mainUserData[userId-1]
    newUser.status = true;
    console.log(newUser)

    try {
        const UpdatedUser = await axios.put(`http://localhost:8080/api/updateUser/${dbUserId}`,newUser)
        const response = UpdatedUser.data
        // if (response.success) {
        //     toast.success(response.message)
        // }
    } catch (error) {
        console.log(error)
    }
    // console.log(value)
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
              {data.mainUserData?.map((elem, index) => {
                return (
                  <tr>
                    <td></td>
                    <td>{elem.name}</td>
                    <td>{elem.username}</td>
                    <td>{elem.email}</td>
                    <td>{elem.phone}</td>
                    {elem.status ? (
                      <td>
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
                        {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                      </td>
                    ) : (
                      <button onClick={() => updateUser(elem.id,elem._id)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
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
