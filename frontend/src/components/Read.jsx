import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [error, setError] = useState('');
  const [data, setData] = useState();
  const getData = async () => {
    let response = await fetch('http://localhost:4000');
    let result = await response.json();

    if (!response.ok) {
      setError(result.error);
    }
    else {
      setData(result);
    }

  }

  useEffect(() => {
    getData();
  }, [])

  const handleDelete = async(id) => {
    let response = await fetch(`http://localhost:4000/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      setError(result.error);
    }
    else {
      setError("Deleted successfully..");
      setTimeout(() => {
        setError('')
        getData();
      }, 1500);
    }
    
  }

  return (
    <div className='container my-2'>
      {error && <div className='alert alert-danger'>{error}</div>}
      <h2 className='text-center'>All Data</h2>
      <div className="row">
        {
          data?.map((user) => (
            <div key={user._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
                <p>{user.age}</p>
                <a href="#" className="card-link" onClick={()=>handleDelete(user._id)}>Delete</a>
                <Link to={`/${user._id}`} className="card-link">Edit link</Link>
              </div>
            </div>
          </div> 
          ))
            
        }

      </div>
    </div>
  )
}

export default Read


       