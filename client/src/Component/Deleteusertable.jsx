import React from 'react'
import { useState } from 'react'

const Deleteusertable = () => {


    const [deleteUserData, setDeleteUserData] = useState([])



    useEffect(() => {
        async function FeatchDataa() {
            try {
                const userremoved = await axios.get('http://localhost:8000/api/getdeleteuser')
                const response = userremoved.data
                setDeleteUserData(response)
            } catch (error) {
                console.log(error)
            }
        }
        FeatchDataa()

    }, [deleteUserData])

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
                                <th>Father</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data.users?.map((elem, index) => {
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.fathername}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                    </tr>
                                )
                            })} */}

                        </tbody>
                    </table>
                </div>
            </div >


    </>
  )
}

export default Deleteusertable
