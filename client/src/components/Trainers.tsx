import React, { FC } from 'react';
import { Box } from '@mui/material';
import PageTopBar from './page-top-bar/PageTopBar';
import PageSearchBar from './PageSearchBar';
import PageTable from './PageTable';
import { PageTableData } from '../types/PageTableData';

const Trainers: FC = () => {
  const trainers = [
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
      login: 'user_123',
      phone: '+71230901200',
    },
    {
      id: 30,
      name: 'Степанов Петр Иванович',
      login: 'user_123',
      phone: '+71230901200',
    },
  ];

  const data: PageTableData = {
    headerCells: ['Ф.И.О.', 'Логин', 'Телефон'],
    bodyCells: trainers.map((trainer) => {
      return {
        key: trainer.id,
        values: [trainer.name, trainer.login, trainer.phone],
      };
    }),
  };

  return (
    <Box>
      <PageTopBar
        title="Тренеры"
        buttonTitle="Новый тренер"
        onButtonClick={() => console.log('add trainer')}
      />
      <PageSearchBar
        label="Найти тренера"
        onReset={() => console.log('reset trainer search')}
      />

      <PageTable
        data={data}
        onRowClick={(idx) => console.log('row idx', idx)}
      />
    </Box>
  );
};

export default Trainers;
