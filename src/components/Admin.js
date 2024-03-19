import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

export const Admin = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [ph, setPh] = useState('');
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3001/students')
      .then(res => {
        setPost(res.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedId) {
      axios.put(`http://localhost:3001/students/${selectedId}`, { "name": name, "ph": ph, "email":email, "feedback": feedback })
        .then(res => {
          console.log(res);
          setSelectedId();
          fetchData();
        })
        .catch(error => console.error('Error updating data:', error));
    } else {
      axios.post('http://localhost:3001/students', { "name": name, "ph": ph, "email":email, "feedback": feedback })
        .then(res => {
          console.log(res);
          fetchData();
        })
        .catch(error => console.error('Error creating data:', error));
    }

    setId('');
    setName('');
    setPh('');
    setEmail('');
    setFeedback('');
  };

  const handleDelete = (id) => {
    console.log('Deleting item with ID:', id);
    axios.delete(`http://localhost:3001/students/${id}`)
      .then(res => {
        console.log('Delete response:', res);
        fetchData();
      })
      .catch(error => console.error('Error deleting data:', error));
  };

  const handleUpdate = (item) => {
    setSelectedId(item._id);
    setName(item.name);
    setPh(item.ph);
    setEmail(item.email);
    setFeedback(item.feedback);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br /><br />

        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

        <label>Phoneno:</label>
        <input type="text" value={ph} onChange={(e) => setPh(e.target.value)} /><br /><br />
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

        <label>Feedback:</label>
        <input type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} /><br /><br />

        <button type='submit' >{selectedId ? 'Update' : 'Submit'}</button><br /><br />
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Feedback</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {post.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.ph}</td>
              <td>{item.email}</td>
              <td>{item.feedback}</td>
              <td>
                <button onClick={() => handleUpdate(item)}>Update</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
