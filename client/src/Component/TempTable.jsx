import React from 'react'

const TempTable = () => {

    const tempData = [{
        "id": 1,
        "name": "aaaaaaaaaaaaaa",
        "username": "aaaaaaaaaaa1111111",
        "email": "aaaaaaaaaa@gmail.com",
        "phone":"1111111111"
    },
    {
        "id": 2,
        "name": "bbbbbbbbbbbb",
        "username": "bbbbbbbbbbbbb2222222222",
        "email": "bbbbbbbbb@gmail.com",
        "phone":"2222222222"
    },
    {
        "id": 3,
        "name": "cccccccccccc",
        "username": "ccccccccccc3333333333",
        "email": "ccccccccccc@gmail.com",
        "phone":"3333333333333"
    },
    {
        "id": 4,
        "name": "ddddddddddddd",
        "username": "dddddddd44444444",
        "email": "dddddddddd@gmail.com",
        "phone":"44444444444"
    },
    {
        "id": 5,
        "name": "eeeeeeeeeeeee",
        "username": "eeeeeeeeee5555555",
        "email": "eeeeeeeee@gmail.com",
        "phone":"55555555555"
    },
 

]
  return (
    <>
       <div className="container" style={{"width":"100%"}}>
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Users</b></h2>
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
                            {tempData.map((elem, index) => {
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.username}</td>
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

export default TempTable
