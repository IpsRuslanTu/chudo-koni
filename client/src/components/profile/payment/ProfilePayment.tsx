import React, { FC } from 'react';
import ProfileDataBlock from '../data-block/ProfileDataBlock';
import { PageTableData } from '../../../types/PageTableData';
import PageTable from '../../PageTable';

const ProfilePayment: FC = () => {
  const payments = [
    { id: 1, date: '2022-07-21', price: 1500 },
    { id: 2, date: '2022-07-22', price: 2500 },
  ];

  const data: PageTableData = {
    headerCells: ['Дата', 'Стоимость'],
    bodyCells: payments.map((payment) => {
      return {
        key: payment.id,
        values: [payment.date, payment.price.toString()],
      };
    }),
  };

  return (
    <ProfileDataBlock title="Оплата занятий" isSubmitRequired={false}>
      <PageTable data={data} onRowClick={() => {}} />
    </ProfileDataBlock>
  );
};

export default ProfilePayment;
