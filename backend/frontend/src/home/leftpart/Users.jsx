import React from 'react'
import User from './User';
import useGetAllUsers from '../../Context/useGetAllUsers';
function Users() {

  const [allUsers, loading]=useGetAllUsers();
  console.log(allUsers)
  return (
    <>
<div>
      <h1 className='bg-slate-800 px-8 py=2 text-white font-semibold rounded-md'>Messages</h1>
</div>
<div className='overflow-y-auto' style={{maxHeight:"calc(84vh - 10vh)"}}>

{allUsers.length > 0 ? (
                    allUsers.map((user, index) => (
                        <User key={index} user={user} />
                    ))
                ) : (
                    <p>No users found.</p>
                )}

</div>
 </>
  )}
export default Users;
