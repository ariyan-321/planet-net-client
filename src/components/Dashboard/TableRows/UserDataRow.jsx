import { useState } from 'react'
import UpdateUserModal from '../../Modal/UpdateUserModal'
import PropTypes from 'prop-types'
const UserDataRow = ({user}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      {
        user?.status?      <p className={`${user?.status==="requested"?"text-yellow-600 whitespace-nowrap":"text-green-600 whitespace-nowrap"}`}>{user?.status}</p>
        : <p className='text-red-500'>N/A</p>
      }
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </span>
        {/* Modal */}
        <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </td>
    </tr>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
}

export default UserDataRow