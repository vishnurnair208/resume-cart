import { useContext} from 'react'
import './Dashboard.css'
import profilePic from '../Templates/Faslu/images/photo.jpg'
import { UserContext } from '../Context/UserContext'
import { useState } from 'react/cjs/react.development';

const Dashboard = () => {
    const[password,setPassword] = useState({
        oldpassword:"",
        newpassword:"",
        confirmpassword:""
    })
    const{oldpassword,newpassword,confirmpassword}=password
    const onChange = (key,value)=>{
        setPassword(prev=>({
            ...prev,
            [key]:value
        }))
    }
    // console.log(oldpassword);

    const { userData} = useContext(UserContext)
    return (
    <div className='dashboard-container'>
        <div className="dashboard-left-section">
            <img src={profilePic}/>
            <div className='dashboard-name'>{userData.fullname}</div>
            <div className="dashboard-contents">Profile</div>
            <div className="dashboard-contents">{userData.email}</div>
            <div className="dashboard-contents">Password<button className='dashboard-reset-button'>RESET</button></div>
        </div>
        <div className="dashboard-right-section">
            <div className="dashboard-section">
                 <label for ="dashboard-password">Old Password</label>
                 <div className="dashboard-input">
                     <input type="text" 
                        // value={oldpassword}
                        onChange={
                            (e)=>{onChange("oldpassword",e.target.value)}
                        }  
                     /><br/></div>
             </div>
             <div className="dashboard-section">
                 <label for ="dashboard-password">New Password</label>
                 <div className="dashboard-input">
                     <input type="text"
                        // value={newpassword}
                        onChange={
                            (e)=>{onChange("newpassword",e.target.value)}
                        } 
                     /><br/></div>
             </div>
             <div className="dashboard-section">
                 <label for ="dashboard-password">Confirm New Password</label>
                 <div className="dashboard-input">
                     <input type="text"
                        // value={confirmpassword}
                        onChange={
                            (e)=>{onChange("confirmpassword",e.target.value)}
                        } 

                     /><br/></div>
            </div>
            <div>
            <button className='dashboard-button'>UPDATE</button>
            </div>
        </div>
    </div>
      
    )
}

export default Dashboard
    