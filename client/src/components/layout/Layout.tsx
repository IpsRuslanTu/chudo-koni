import React, { FC, useState } from 'react';
import { NavigationListItem } from '../../types/NavigationListItem';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import PeopleIcon from '@mui/icons-material/People';
import ViewListIcon from '@mui/icons-material/ViewList';
import PaymentsIcon from '@mui/icons-material/Payments';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import TopBar from '../topbar/TopBar';
import Dashboard from '../Dashboard';
import styles from './layout.module.scss';
import Profile from '../profile/Profile';

const Layout: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems: NavigationListItem[] = [
    {
      link: '/dashboard',
      title: 'Dashboard',
      icon: <DashboardCustomizeIcon color={'primary'} />,
    },
    {
      link: '/customers',
      title: 'Клиенты',
      icon: <SwitchAccountIcon color={'primary'} />,
    },
    {
      link: '/trainers',
      title: 'Тренеры',
      icon: <PeopleIcon color={'primary'} />,
    },
    {
      link: '/services',
      title: 'Услуги',
      icon: <ViewListIcon color={'primary'} />,
    },
    {
      link: '/payments',
      title: 'Оплата',
      icon: <PaymentsIcon color={'primary'} />,
    },
    {
      link: '/profile',
      title: 'Профиль',
      icon: <ManageAccountsIcon color={'primary'} />,
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        navItems={navItems}
        isOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box component="main" className={styles.main}>
        <Toolbar />
        {/*<Dashboard />*/}
        <Profile />
      </Box>
    </Box>
  );
};

export default Layout;
