import { Avatar } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React from 'react';

const iconSwitch = (iconName) => {
  switch (iconName.toLowerCase()) {
    case 'lock':
      return <LockOutlined />;
    default:
      return null;
  }
};

function FormAvatar(props) {
  const { icon, ...rest } = props;
  return <Avatar {...rest}>{iconSwitch(icon)}</Avatar>;
}

export default FormAvatar;
