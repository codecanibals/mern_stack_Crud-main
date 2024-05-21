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
                                <h2>Deleted <b>Users History</b></h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr style={{width:"600px"}}>
                                <th></th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deleteUserData.finalUsersDeleted?.map((elem, index) => {
                          
                                return (
                                
                                    <tr >
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.username}</td>
                                        <td>{elem.email}</td>
                                        <td style={{width:"250px"}}>{elem.phone}</td>
                                        <td>
                                            <button>Activate</button>
                                        </td>
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
