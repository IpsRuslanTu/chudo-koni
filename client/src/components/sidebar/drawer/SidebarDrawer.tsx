import React, { FC } from 'react';
import styles from '../sidebar.module.scss';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import { NavigationListItem } from '../../../types/NavigationListItem';

interface DrawerProps {
  navItems: NavigationListItem[];
}

const SidebarDrawer: FC<DrawerProps> = ({ navItems }) => {
  return (
    <div className={styles.sidebarContent}>
      <div>
        <Box sx={{ p: 3 }}>
          <ApiRoundedIcon className={styles.icon} color={'success'} />
        </Box>
        <Box sx={{ px: 2, pb: 4 }}>
          <Box className={styles.userInfo}>
            <div>
              <Typography color="inherit" variant="subtitle1">
                User name here
              </Typography>
              <Typography color="neutral.400" variant="body2">
                Your tier : Premium
              </Typography>
            </div>
          </Box>
        </Box>
      </div>

      <Divider sx={{ borderColor: '#2D3748' }} />

      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton className={styles.navItem}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SidebarDrawer;
