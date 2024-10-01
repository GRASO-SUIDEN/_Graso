import './profile-settings.css'


function ProfileSettings() {
  return <div className="profile-wrapper">
 
 
  <div className="profile-container">


    <div className="background-layer">
      <header><h1>Profile </h1></header>
      <div className="setting-container">

      <div className="personal-details">
          <img src="https://github.com/chiscookeke11/Test-pagea/blob/main/carlo-img.jpg?raw=true" className='profile-pic' alt="Profile-pic" />
          <h2>Calvin Carlo</h2>
          <h4>calvin@hotmail.com</h4>
          </div>

          <div className="form-settings">

            <div className="personal-detail-form">
              <h1>Personal Detail :</h1>
              <form action="" className='form1'>

                <div className="inputs">
                <span>
                  <h1>First Name :</h1>
                  <input type="text"  placeholder='First Name:' required/>
                </span>

                <span>
                  <h1>Last Name :</h1>
                  <input type="text" placeholder='Last Name' required  />
                </span>

                <span>
                  <h1>Your Email :</h1>
                  <input type="email" placeholder='Email'  required/>
                </span>
                

                <span>
                  <h1>Occupation :</h1>
                  <input type="text" placeholder='Occupation' required />
                </span>
                </div>

                <span className='description'>
                  <h1>Description</h1>
                <textarea name="description" ></textarea>
                 
                </span>
                <button>Save Changes</button>
              </form>
            </div>




            
            <div className="contact-detail-form">
              <form className="contact-form">
                <h1>Contact Info</h1>

                <span>
                  <h1>Phone No. :</h1>
                  <input type="tel" name="phone_number" placeholder='Phone' required/>
                </span>

                <span>
                  <h1>Website :</h1>
                  <input type="text" name="URL"  />
                </span>
                <button>Add</button>
              </form>


              <form className="password-form">
                <h1>Change Password</h1>

                <span>
                  <h1>Old password :</h1>
                  <input type="password" name="password" placeholder='Old password' required  />
                </span>
                
                <span>
                  <h1>New password :</h1>
                  <input type="password" name="password" placeholder='New password' required    />
                </span>

                
                <span>
                  <h1>Re-type New password :</h1>
                  <input type="password" name="password" placeholder='Re-type password' required   />
                </span>

                <button>Save password</button>
              </form>
            </div>

            <div className="delete-box">
              <h1>Delete Account :</h1>
              <p>Do you want to delete the account? Please press below "Delete" button</p>
              <button>Delete</button>
            </div>
          </div>
      </div>
    </div>
</div>
</div>
}

export default ProfileSettings;
