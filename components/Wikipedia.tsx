import { Button, Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { useEffect, useState } from 'react';

export function Wikipedia() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=revisions&titles=${data}&rvslots=*&rvprop=content&formatversion=2&format=json`,
        );
        const data = await res.json();
        setData(data.query.pages[0].revisions[0].slots.main.content);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    data && (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Wikipedia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn more
          </Button>
          <IconButton aria-label="share" style={{ marginLeft: 'auto' }}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  );
}
