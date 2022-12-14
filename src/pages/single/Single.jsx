import React from 'react'
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar" ;
import Charts from '../../components/Charts/Charts';
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="" 
                   className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Nigga</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue"> 1jon@gmail.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"> +91 81 6085 3783</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue"> Deep PG</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue"> India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={4/1} title="User Spending(Last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
