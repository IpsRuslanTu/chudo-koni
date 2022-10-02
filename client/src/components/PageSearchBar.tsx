import React, { FC } from 'react';
import {
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { NoopFn } from '../types/NoopFn';

interface PageSearchBarProps {
  label: string;
  onInputChange?: NoopFn;
  onReset: NoopFn;
}

const PageSearchBar: FC<PageSearchBarProps> = ({
  label,
  onInputChange,
  onReset,
}) => {
  return (
    <Card sx={{ mt: 2, mb: 4, px: 2, py: 4 }}>
      <FormControl sx={{ m: 1, width: '95%' }} variant="outlined">
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          type="text"
          // value={values.password}
          // onChange={handleChange('password')}
          startAdornment={
            <InputAdornment position="end">
              <IconButton sx={{ mr: 1 }} edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton sx={{ mr: 0.5 }} onClick={onReset} edge="end">
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    </Card>
  );
};

export default PageSearchBar;
