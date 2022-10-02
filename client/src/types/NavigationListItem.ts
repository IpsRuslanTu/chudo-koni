import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';
import React from 'react';

export interface NavigationListItem {
  link: string;
  title: string;
  icon: React.ReactElement<SvgIconProps>;
}
