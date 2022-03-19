import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function AccessibleBadges() {
  return (
    <div className='row justify-content-end'>
          <IconButton aria-label={notificationsLabel(100)}>
      <Badge badgeContent={10} color="secondary">
        <NotificationsIcon 
            className='icon'
        />
      </Badge>
    </IconButton>
    </div>
  
  );
}
