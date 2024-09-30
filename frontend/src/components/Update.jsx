import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  let {id} = useParams();
  
  // getting single user data.
  const getSingleUser = async() => {
    let response = await fetch(`http://localhost:4000/${id}`);
    let result = await response.json();
        
        if(!response.ok){
            setError(result.error || 'An error occurred');
        }
        else{
           setName(result.name);
           setEmail(result.email);
           setAge(result.age);
        }
  }

  useEffect(() => {
    getSingleUser();
  }, [])
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    let updatedData = {name, email, age};
    let response = await fetch(`http://localhost:4000/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedData),
        headers: {
            'Content-Type': 'application/json '
        }
    });
    let result = await response.json();
        
    if(!response.ok){
        setError(result.error || 'An error occurred');
    }
    else{
        navigate('/all');
    }

  }
  
  return (
      <div className='container'>
          {error && <div className='alert alert-danger'>{error}</div>}
          <h2 className='text-center'>Edit the data</h2>
          <form onSubmit={handleUpdate}>
              <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
  )
}

export default Update
