import { Button, Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';
import { WikipediaResponse } from '../../types/wikipedia';

interface WikipediaProps {
  data: WikipediaResponse;
}

export const Wikipedia = ({ data }: WikipediaProps) => {
  const goToUrl = () => (window.location.href = data.content_urls.desktop.page);

  return (
    data && (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Wikipedia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.extract}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={goToUrl}>
            Learn more
          </Button>
          <IconButton aria-label="share" style={{ marginLeft: 'auto' }} href={window.location.href}>
            <ShareIcon />
          </IconButton>
          
          <!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f170cc656eed19a"></script>

        </CardActions>
      </Card>
    )
  );
};
