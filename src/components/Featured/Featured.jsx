import React from 'react'
import "./feature.scss"
import MoreVerticon from "@mui/icons-material/MoreVert"
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpOutlined from '@mui/icons-material/KeyboardArrowUpOutlined'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVerticon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$786</p>
        <p className="desc">Previous transaction processing. Last payements may not be added</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize='small'/>
              <div className="resultAmount">$2k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize='small'/>
              <div className="resultAmount">$14.7k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultAmount">$45.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
