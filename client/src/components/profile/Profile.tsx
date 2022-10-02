import React, { FC } from 'react';
import { Box } from '@mui/material';
import PageTitle from '../PageTitle';
import UserInfo from './user-info/UserInfo';
import ProfilePassword from './password/ProfilePassword';
import ProfilePayment from './payment/ProfilePayment';

const Profile: FC = () => {
  //TODO: canDeactivate? if there are unsaved changes

  return (
    <Box>
      <PageTitle>Личный кабинет</PageTitle>
      <UserInfo />

      <Box sx={{ mt: 4 }}>
        <ProfilePassword />
      </Box>

      <Box sx={{ mt: 4 }}>
        <ProfilePayment />
      </Box>
    </Box>
  );
};

export default Profile;
