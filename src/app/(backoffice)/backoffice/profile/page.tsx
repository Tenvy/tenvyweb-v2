'use client'
import { useState } from 'react';
import { updateEmail } from '@/services/user';
import { useSession, signOut } from 'next-auth/react';

const EmailUpdateForm = () => {
  const [newEmail, setNewEmail] = useState('');
  const session:any = useSession()

  const handleEmailUpdate = async () => {
    try {
      await updateEmail(session.data.user.uuid, newEmail );
      console.log('Email updated successfully');
    } catch (error) {
      // Handle any errors that may occur during the update
      console.error('Error updating email:', error);
    }
  };

  console.log(session.data.user)

  return (
    <div>
      <input
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        placeholder="Enter new email"
      />
      <button onClick={handleEmailUpdate}>Update Email</button>
    </div>
  );
};

export default EmailUpdateForm