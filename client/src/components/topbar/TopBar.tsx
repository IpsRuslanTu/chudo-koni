import React, { FC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NoopFn } from '../../types/NoopFn';
import styles from './topbar.module.scss';

interface TopBarProps {
  handleDrawerToggle: NoopFn;
}

const TopBar: FC<TopBarProps> = ({ handleDrawerToggle }) => {
  return (
    <AppBar className={styles.appBar} color={'default'} position="fixed">
      <Toolbar>
        <IconButton
          className={styles.iconButton}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap component="div" sx={{ ml: 2 }}>
          Чудо кони
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
