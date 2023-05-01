import React from 'react';
import account from '../logo/account.png';
import personal from '../logo/personal.png';
import billing from '../logo/billing.png';
import done from '../logo/done.png';
import TextArea from './TextArea';
const Body = () => {
  return (
    <div className='Body'>
      <div className='Top'>
        <div className='icon-container'>
          <img src={account} alt="icon" className='icon1' />
          <span className='dot dot1'></span>
          <img src={personal} alt="icon" />
          <span className='dot'></span>
          <img src={billing} alt="icon" />
          <span className='dot'></span>
          <img src={done} alt="icon" className='icon2' />
        </div>
        <div className='Texts'>
          <div className='text1'>Account</div>
          <div>Personal</div>
          <div>Billing</div>
          <div className='text2'>Done</div>
        </div>
      </div>

      <div className='Content' style={{ marginTop: '3rem' }}>
        <TextArea />
      </div>

    </div>
  )
}

export default Body
