import * as React from 'react';
import {Typography, Link} from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/profile.php?id=100005652616509">
        Nguyễn Văn Thưởng
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}