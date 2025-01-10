import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItem'
import { useContext, useState } from 'react'
import BecomeSellerModal from '../../../Modal/BecomeSellerModal'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import { AuthContext } from '../../../../providers/AuthProvider'
import toast from 'react-hot-toast'
const CustomerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const axiosSecure=useAxiosSecure();
  const{user}=useContext(AuthContext)

  const closeModal = () => {
    setIsOpen(false)
  }

  const requestHandler = async () => {
    try {
      const { data } = await axiosSecure.patch(`/users/${user?.email}`);
      console.log(data);
      toast.success("Successfully applied for a seller account");
    } catch (err) {
      console.error(err); // Log the full error for debugging
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
    finally{
      closeModal();
    }
  };
  

  return (
    <>
      <MenuItem icon={BsFingerprint} label='My Orders' address='my-orders' />

      <button
        onClick={() => setIsOpen(true)}
        className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
      >
        <GrUserAdmin className='w-5 h-5' />

        <span className='mx-4 font-medium'>Become A Seller</span>
      </button>

      <BecomeSellerModal requestHandler={requestHandler} closeModal={closeModal} isOpen={isOpen} />
    </>
  )
}

export default CustomerMenu