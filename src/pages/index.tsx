import { Button, Container, Grid, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { Header } from '../components/Header';

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: '100%',
    minWidth: '100%',
    objectFit: 'cover',
    verticalAlign: 'bottom',
  },
  imageContainer: {
    display: 'flex',
    height: '25vh',
    flexGrow: 1,
  },
  title: {
    marginTop: '2rem',
  },
  subtitle: {
    marginTop: '0.5rem',
    marginBottom: '1rem',
    color: theme.palette.grey[600],
  },
}));

const Home: FC = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=pk.eyJ1IjoiYXJ0ZGF3IiwiYSI6ImNrOGFzODg0MTA1M3MzZm1qMTAxNjJ6bjEifQ.CDaURiTGZYvrUNSspris3Q`,
    );
    const data = await res.json();
    const url = data.features[0].place_name
      .split(',')
      .map((e) => e.trim())
      .reverse()
      .join('/');
    router.push('/' + url);
  };

  return (
    <>
      <Header />
      <div className={classes.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="vannabi.in"
          className={classes.image}
        />
      </div>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" className={classes.title}>
              We all dream of being in other places
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              What is the place where you would rather be?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                id="search"
                placeholder="Search"
                variant="standard"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button type="submit">Search</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
