import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {Link} from "react-router-dom";
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{textDecoration:"none"}}>
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
                <PersonOutlineIcon className="icon"/>
                <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}}>
             <li>
                <LocalGroceryStoreIcon className="icon"/>
                <span>Products</span>
            </li>
            </Link>
            <li>
                <ViewStreamIcon className="icon"/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>   
                <QueryStatsIcon className="icon"/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsIcon className="icon"/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <BookIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountBoxIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className="icon"/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
         
      </div>
    </div>
  )
}

export default Sidebar
