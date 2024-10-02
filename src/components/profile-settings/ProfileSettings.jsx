import './profile-settings.css'


function ProfileSettings() {
  return <div className="profile-wrapper">
 
 
  <div className="profile-container">


    <div className="background-layer">
      <header><h1>Profile </h1></header>
      <div className="setting-container">

      <div className="personal-details">
          <img src="https://github.com/chiscookeke11/Test-pagea/blob/main/profile-pic.jpg?raw=true" className='profile-pic' alt="Profile-pic" />
          <h2>Calvin Carlo</h2>
          <h4>calvin@hotmail.com</h4>

          <input type="file" accept="image/*" required />
          </div>

          <div className="form-settings">

            <div className="personal-detail-form">
              <h1>Personal Detail :</h1>
              <form action="" className='form1'>

                <div className="inputs">
                <span>
                  <h1>First Name :</h1>
                  <input type="text"  placeholder='First Name:' required  style={{backgroundImage:'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/7ca18b59f75d204eae57a396e96faa486be860a6/firstname.svg)'}}/>
                </span>

                <span>
                  <h1>Last Name :</h1>
                  <input type="text" placeholder='Last Name' required style={{backgroundImage: 'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/7ca18b59f75d204eae57a396e96faa486be860a6/lastname.svg)'}}  />
                </span>

                <span>
                  <h1>Your Email :</h1>
                  <input type="email" placeholder='Email'  required style={{backgroundImage: 'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/7ca18b59f75d204eae57a396e96faa486be860a6/envelope.svg)'}}/>
                </span>
                

                <span>
                  <h1>Occupation :</h1>
                  <input type="text" placeholder='Occupation' required style={{backgroundImage: 'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/027744a31961da362f47071db998283ef6cdc65b/bookmark.svg)'}} />
                </span>
                </div>

                <span className='description'>
                  <h1>Description</h1>
                <textarea name="description" style={{backgroundImage: 'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/7ca18b59f75d204eae57a396e96faa486be860a6/chat.svg)'}} ></textarea>
                 
                </span>
                <button>Save Changes</button>
              </form>
            </div>




            
            <div className="contact-detail-form">
              <form className="contact-form">
                <h1>Contact Info</h1>

                <span>
                  <h1>Phone No. :</h1>
                  <input type="tel" 
                  name="phone_number" 
                  placeholder='Phone' 
                  required 
                  style={{backgroundImage:'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/7ca18b59f75d204eae57a396e96faa486be860a6/telephone.svg)'}}/>
                </span>

                <span>
                  <h1>Website :</h1>
                  <input type="text" name="URL" placeholder='URL' style={{backgroundImage: 'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/7ca18b59f75d204eae57a396e96faa486be860a6/globe.svg)'}} />
                </span>
                <button>Add</button>
              </form>


              <form className="password-form">
                <h1>Change Password</h1>

                <span>
                  <h1>Old password :</h1>
                  <input type="password" name="password" placeholder='Old password' required style={{backgroundImage: 'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/7ca18b59f75d204eae57a396e96faa486be860a6/password.svg)'}} />
                </span>
                
                <span>
                  <h1>New password :</h1>
                  <input type="password" name="password" placeholder='New password' required   style={{backgroundImage: 'url(https://raw.githubusercontent.com/chiscookeke11/Test-pagea/7ca18b59f75d204eae57a396e96faa486be860a6/password.svg)'}} />
                </span>

                
                <span>
                  <h1>Re-type New password :</h1>
                  <input type="password" name="password" placeholder='Re-type password' required style={{backgroundImage: 'url()'}}  />
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
