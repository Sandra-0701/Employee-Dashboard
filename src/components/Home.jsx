import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Home.css'; // Import CSS file

const Home = () => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setDataset(res.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="home-container">
      <Grid container spacing={2}>
        {dataset.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card className="card">
              <CardContent className="card-content">
                <Typography variant="h6" component="h2" className="card-id">
                  ID: {user.id}
                </Typography>
                <Typography variant="body1" component="p" className="card-name">
                  Name: {user.name}
                </Typography>
                <Typography variant="body1" component="p" className="card-email">
                  Email: {user.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
