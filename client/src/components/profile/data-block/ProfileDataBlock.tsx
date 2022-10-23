import React, { FC, ReactNode } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';
import styles from './profile-data-block.module.scss';

interface ProfileDataBlockProps {
  title: string;
  subTitle?: string;
  isSubmitRequired?: boolean;
  submitText?: string;
  children: ReactNode;
}

const ProfileDataBlock: FC<ProfileDataBlockProps> = ({
  title,
  subTitle,
  isSubmitRequired = true,
  submitText,
  children,
}) => {
  return (
    <Card>
      <CardHeader title={title} subheader={subTitle} />
      <Divider />
      <CardContent>{children}</CardContent>
      {isSubmitRequired && submitText ? (
        <>
          <Divider />
          <Box className={styles.submitSection}>
            <Button type="submit" color="primary" variant="contained">
              {submitText}
            </Button>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ProfileDataBlock;
