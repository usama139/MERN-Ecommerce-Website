import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy policy"}>
         <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><span className='span'>Personal Information Collection:</span> We collect personal data such as name, email, address, phone number, and payment information for order processing and service improvement.</p>
          <p><span className='span'>Non-Personal Information Collection:</span> We gather non-personal data like browser type and IP address for site analytics.</p>
          <p><span className='span'>Cookies:</span> We use cookies to enhance user experience, which can be disabled through browser settings.</p>
          <p><span className='span'>Data Security:</span> We implement security measures to protect your personal information.</p>
          <p><span className='span'>Consent:</span> By using our Site, you agree to our privacy practices.</p>

          
        </div>
      </div>
    </Layout>
  )
}

export default Policy