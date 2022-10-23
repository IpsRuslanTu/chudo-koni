import React, { FC } from 'react';
import { Box, Drawer } from '@mui/material';
import { NavigationListItem } from '../../types/NavigationListItem';
import { NoopFn } from '../../types/NoopFn';
import styles from './sidebar.module.scss';
import SidebarDrawer from './drawer/SidebarDrawer';

interface SidebarProps {
  navItems: NavigationListItem[];
  isOpen: boolean;
  handleDrawerToggle: NoopFn;
}

const Sidebar: FC<SidebarProps> = ({
  navItems,
  isOpen,
  handleDrawerToggle,
}) => {
  return (
    <Box component="nav" className={styles.sidebar}>
      <Drawer
        className={styles.sidebarXs}
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <SidebarDrawer navItems={navItems} />
      </Drawer>
      <Drawer className={styles.sidebarLg} variant="permanent" open>
        <SidebarDrawer navItems={navItems} />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
