import React, { FC } from 'react';
import PageTitle from '../PageTitle';
import { Box, Button } from '@mui/material';
import { NoopFn } from '../../types/NoopFn';
import styles from './page-top-bar.module.scss';

interface PageTopBarProps {
  title: string;
  buttonTitle: string;
  onButtonClick: NoopFn;
}

const PageTopBar: FC<PageTopBarProps> = ({
  title,
  buttonTitle,
  onButtonClick,
}) => {
  return (
    <Box className={styles.pageTopBar}>
      <PageTitle>{title}</PageTitle>
      <Button
        size={'large'}
        variant="contained"
        color="primary"
        onClick={onButtonClick}
      >
        {buttonTitle}
      </Button>
    </Box>
  );
};

export default PageTopBar;
