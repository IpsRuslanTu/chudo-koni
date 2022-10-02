import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import ProfileDataBlock from '../data-block/ProfileDataBlock';

const UserInfo: FC = () => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '+79871230012',
    login: 'Alabama',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form autoComplete="off" onSubmit={onFormSubmit}>
      <ProfileDataBlock title="Пользователь" submitText="Сохранить">
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Имя"
              name="firstName"
              onChange={handleChange}
              required
              value={values.firstName}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Фамилия"
              name="lastName"
              onChange={handleChange}
              required
              value={values.lastName}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Отчество"
              name="patronymic"
              onChange={handleChange}
              required
              value={values.lastName}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Логин"
              name="login"
              onChange={handleChange}
              required
              value={values.login}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              onChange={handleChange}
              required
              value={values.email}
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Телефон"
              name="phone"
              onChange={handleChange}
              type="tel"
              required
              value={values.phone}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </ProfileDataBlock>
    </form>
  );
};

export default UserInfo;
