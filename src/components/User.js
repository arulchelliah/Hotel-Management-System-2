import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const User = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone.No</th>
            <th>Email</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {post.map(x => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.ph}</td>
              <td>{x.email}</td>
              <td>{x.feedback}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
