import React, {FC} from 'react';

interface ProfileButtonProps {
  friendStatus?: Array<string | number> | undefined;
  email?: string | undefined
}

const ProfileButton:FC<ProfileButtonProps> = ({friendStatus, email}) => {

  const text = () => {
    if(!friendStatus) {
      return
    }
    if(friendStatus[0] === 'add') {
      return 'Request a Hitch';
    } else if(friendStatus[0] === 'pending') {
      return 'Pending';
    } else if(friendStatus[0] === 'approved') {
      return email
    } else if(friendStatus[0] === 'self') {
      return 'Add Route'
    }
  }
  const disableButton = () => {
    if(!friendStatus) {
      return false
    } else if(friendStatus[0] === 'pending' || friendStatus[0] === 'approved') {
      return true
    }
  }



  return (
    <button 
      data-cy='request-hitch' 
      className="profile__button btn" 
      disabled={disableButton()}
    >
      {text()}
    </button>    
  )
}

export default ProfileButton;
