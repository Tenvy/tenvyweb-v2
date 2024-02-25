'use client'
import { ChangeEvent, useState } from 'react';
import { updateUser } from '@/services/user';
import { signOut, getSession } from 'next-auth/react';
import { UserType } from '@/types/user';
import Image from 'next/image';

const EmailUpdateForm = () => {
  const [values, setValues] = useState<UserType>({
    uuid: '',
    username: '',
    nickname: '',
    email: '',
    password: '',
    role: '',
    profileImage: ''
  });
  const [image, setImage] = useState<File>()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateUser(values, image);
    } catch (error) {
      // Handle any errors that may occur during the update
      console.error('Error updating email:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className=''>
        {
          image ? (
            <Image src={image ? URL.createObjectURL(image) : ""} alt="Book Image" width={240} height={240} className="border border-dashed" />
          ) : (
            <div className='w-[240px] h-[240px] border border-dashed'/>
          )
        }
        <div className='my-4'>
          <input type="file" className='hidden' name='file-input' onChange={handleFileChange} id='file-input' />
          <label htmlFor="file-input" className='bg-black py-2 px-4 rounded cursor-pointer'>Select Image</label>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <input
            type="text"
            name="nickname"
            className='text-black'
            onChange={handleInputChange}
            placeholder="Enter new Nickname"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            className='text-black'
            onChange={handleInputChange}
            placeholder="Enter new Email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className='text-black'
            onChange={handleInputChange}
            placeholder="Enter new Password"
          />
        </div>
        <div>
          <button onClick={handleUpdate} className='bg-black py-2 px-4 rounded'>Save</button>
        </div>
      </div>
    </div >
  );
};

export default EmailUpdateForm
