import React from 'react'
// import { useUsers } from '../../contexts/userContext'
import "./Address.css";

function Address({selectedUser}) {

  return (
    <div className='address-container'>
        {
          selectedUser.map(user=>{
            return (
              <>
                  <div className='text-address'>
                    <p className='address-title'>Addrerss:</p>
                    <div><span>Street</span> : <strong>{user.address.street}</strong></div>
                    <div><span>Suite</span> : <strong>{user.address.suite}</strong></div>
                    <div><span>City</span> : <strong>{user.address.city}</strong></div>
                    <div><span>Zipcode</span> : <strong>{user.address.zipcode}</strong></div>
                </div>

                <div className='geo-address'>
                </div>

                <div className='geo-lattitudes'>
                  <div> <span>Lat: </span><strong>{user.address.geo.lat}</strong></div>
                  <div> <span>Long: </span><strong>{user.address.geo.lng}</strong></div>
                </div>
              </>
            )}
          )
        }
        
    </div>
  )
}

export { Address }