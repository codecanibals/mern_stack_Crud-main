import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Deleteusertable = ({isDeleteLoading}) => {


    const [deleteUserData, setDeleteUserData] = useState([])
  

    useEffect(() => {
        async function FeatchDataa() {
            try {
                const userremoved = await axios.get('http://localhost:8080/api/getDeleteUser')
                const response = userremoved.data
                setDeleteUserData(response)
                console.log("this is deleted data")
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        FeatchDataa()

    }, [isDeleteLoading])

  return (
    <>

      <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Delete <b>Employees History</b></h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                {/* <th>Father</th> */}
                                <th>Email</th>
                                <th>Phone</th>
                                {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {deleteUserData.usersdeleted?.map((elem, index) => {
                          
                                return (
                                
                                    <tr>
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div >


    </>
  )
}

export default Deleteusertable
