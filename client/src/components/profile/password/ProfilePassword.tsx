import React, { ChangeEvent, FC, useState } from 'react';
import { TextField } from '@mui/material';
import ProfileDataBlock from '../data-block/ProfileDataBlock';

const ProfilePassword: FC = () => {
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off">
      <ProfileDataBlock
        title="Пароль"
        subTitle="Изменить пароль личного кабинета"
        submitText="Сохранить"
      >
        <TextField
          fullWidth
          label="Текущий пароль"
          margin="normal"
          name="currentPassword"
          onChange={handleChange}
          type="password"
          value={values.currentPassword}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Новый пароль"
          margin="normal"
          name="newPassword"
          onChange={handleChange}
          type="password"
          value={values.newPassword}
          variant="outlined"
        />
      </ProfileDataBlock>
    </form>
  );
};

export default ProfilePassword;
