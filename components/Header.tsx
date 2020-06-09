import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Wanna Be
        </Typography>
        <IconButton aria-label="map" edge="end" color="inherit">
          <MapIcon fontSize="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
