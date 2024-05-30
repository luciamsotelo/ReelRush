import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchData = async () => {
    const response = await fetch('/api/feedback');
    const data = await response.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container style={{ padding: '20px' }}>
      <h4>Feedbacks</h4>
      {feedbacks.length === 0 ? (
        <p>No feedback available</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.subject}</td>
                <td>{feedback.message}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default FeedbackList;

