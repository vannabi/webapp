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
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 140,
    },
  }),
);

const DynamicWiki = dynamic(() => import('../components/Wikipedia').then((mod) => mod.Wikipedia));

const Page: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug || [];
  const classes = useStyles();
  const point = slug[slug.length - 1];
  const subtitle = typeof slug !== 'string' ? slug.slice(0, slug.length - 1).join(', ') : slug;

  return (
    <>
      <Header />
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {point}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <DynamicWiki />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(
//     '//en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Minsk&rvslots=*&rvprop=content&formatversion=2',
//   );
//   const data = await res.json();
//   return { props: { data } };
// };

export default Page;
