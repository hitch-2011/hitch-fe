import React, {FC} from 'react';

interface ProfileButtonProps {
  friendStatus?: string | undefined;
  email?: string | undefined
}

const ProfileButton:FC<ProfileButtonProps> = ({friendStatus, email}) => {
  const text = () => {
    if(friendStatus === 'add') {
      return 'Request a Hitch';
    } else if(friendStatus === 'pending') {
      return 'Pending';
    } else if(friendStatus === 'approved') {
      return email
    } else if(friendStatus === 'self') {
      return 'Add Route'
    }
  }
  return (
    <button 
      data-cy='request-hitch' 
      className="profile__button btn" 
      disabled={friendStatus === 'pending'}
    >
      {text()}
    </button>    
  )
}

export default ProfileButton;
