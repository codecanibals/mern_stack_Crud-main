import React,{useState,useEffect} from 'react'
import axios from 'axios'
const PostsTable = () => {

  const [postsData, setPostsData] = useState([]);
  const [isPostsLoading,setIsPostsLoading] = useState(false)
 
  const fetchPostsData = async () => {
    try {
      const posts = await axios.get("http://localhost:8080/api/getPosts");
      const response = await posts.data;
  
      setPostsData(response.postsData);
      
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPostsData();
  },[isPostsLoading]);


// const createPost (postId)=>{
//     console.log("hello")
// }

  return (
    <>
    {console.log(postsData)}
     <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b> Employees Posts</b>
                </h2>
              </div>
              {/* <div className="col-sm-6">
                <a
                  href="#"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <i className="material-icons">&#xE147;</i>{" "}
                  <span>Add New Employee</span>
                </a>
              </div> */}
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Post Id</th>
                <th>Employee Id</th>
                <th>Post Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {postsData?.map((elem, index) => {
               
                return (
                  <tr>
                    <td></td>
                    <td>{elem.id}</td>
                    <td>{elem.userId}</td>
                    <td>{elem.title}</td> 
                        <div>
                      <button onClick={() => createPost(elem.id)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                   
                      </div>
                 
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PostsTable
