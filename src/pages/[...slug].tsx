import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { WikipediaResponse } from '../../types/wikipedia';
import { Header } from '../components/Header';
import { Wikipedia } from '../components/Wikipedia';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 240,
    },
  }),
);

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState<WikipediaResponse>(null);
  const classes = useStyles();

  const slug = router.query.slug || [];
  const point = slug[slug.length - 1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${point}`);
        const data = await res.json();
        setData(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {data && (
              <Card>
                <CardActionArea>
                  <CardMedia className={classes.media} image={data.originalimage.source} title={data.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {point}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )}
          </Grid>
          <Grid item xs={12}>
            <Wikipedia data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Page.getInitialProps = ({ query }) => {
  return {
    slug: query.slug,
  };
};

export default Page;
