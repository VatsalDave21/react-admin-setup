import React from 'react'
import "./widgets.scss"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined"
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline'

const Widgets = ({type}) => {
    let balance = 1000;
    let diff = 20;
    let data = {
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon: <PersonOutlinedIcon className='icon' style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2"}}/>
    }

    switch (type) {
        case "order":
            data= {title:"ORDERS",
                    isMoney:false,
                    link:"See all Orders",
                    icon: <ShoppingCartOutlinedIcon className='icon' style={{color:"goldenrod", backgroundColor:"yellow"}}/>
                    }
            break;
         
            case "earning":
            data ={title:"Earnings",
                isMoney:true,
                link:"View net earnings",
                icon: <MonetizationOnOutlinedIcon className='icon' style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)"}}/>

        } 
            break;
            case "balance":
                data = {title:"BALANCE",
                    isMoney:true,
                    link:"See details",
                    icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color:"purple", backgroundColor:"pink"}}/>
    
                }    
                break;    
        default:
            break;
    }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {balance}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets
