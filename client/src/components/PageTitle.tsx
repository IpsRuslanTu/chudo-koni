import React, { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <Typography
      variant="h4"
      sx={{ fontSize: '1.75rem', fontWeight: 700, mb: 4 }}
      noWrap
      component="h2"
    >
      {children}
    </Typography>
  );
};

export default PageTitle;
