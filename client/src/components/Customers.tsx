import React, { FC } from 'react';
import { Box } from '@mui/material';
import PageTopBar from './page-top-bar/PageTopBar';
import PageSearchBar from './PageSearchBar';
import PageTable from './PageTable';
import { PageTableData } from '../types/PageTableData';

const Customers: FC = () => {
  const customers = [
    {
      id: 1,
      name: 'Иванов Петр Степанович',
      login: 'user_123',
      phone: '+71230901200',
    },
    {
      id: 2,
      name: 'Петров Николай Степанович',
      login: 'user_123',
      phone: '+71230901200',
    },
    {
      id: 3,
      name: 'Степанов Петр Иванович',
      login: 'user_123',
      phone: '+71230901200',
    },
    {
      id: 11,
      name: 'Иванов Петр Степанович',
      login: 'user_123',
      phone: '+71230901200',
    },
    {
      id: 12,
      name: 'Петров Николай Степанович',
      login: 'user_123',
      phone: '+71230901200',
    },
    {
      id: 13,
      name: 'Степанов Петр Иванович',
      login: 'user_123',
      phone: '+71230901200',
    },
    {
      id: 10,
      name: 'Иванов Петр Степанович',
      login: 'user_123',
      phone: '+71230901200',
    },
    {
      id: 20,
      name: 'Петров Николай Степанович',
      login: 'user_pnc_Q',
      phone: '+71230901200',
    },
    {
      id: 30,
      name: 'Дмитриев Олег Иванович',
      login: 'user_dmitry',
      phone: '+71230901200',
    },
  ];

  const data: PageTableData = {
    headerCells: ['Ф.И.О.', 'Логин', 'Телефон'],
    bodyCells: customers.map((customer) => {
      return {
        key: customer.id,
        values: [customer.name, customer.login, customer.phone],
      };
    }),
  };

  return (
    <Box>
      <PageTopBar
        title="Клиенты"
        buttonTitle="Новый клиент"
        onButtonClick={() => console.log('add customer')}
      />
      <PageSearchBar
        label="Найти клиента"
        onReset={() => console.log('reset customer search')}
      />

      <PageTable
        data={data}
        onRowClick={(idx) => console.log('row idx', idx)}
      />
    </Box>
  );
};

export default Customers;
