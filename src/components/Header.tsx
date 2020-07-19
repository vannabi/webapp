import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';

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
        <Link href="/">
          <Typography variant="h6" className={classes.title}>
            Vanabi.in – Where Do You Want To Be?
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
