import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import Charts from '../../components/Charts/Charts'
import Featured from '../../components/Featured/Featured'
import Widgets from '../../components/widgets/Widgets'
import Navbar from "../../components/navbar/Navbar"
import List from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="balance"/>
          <Widgets type="earning"/>
        </div>
        <div className="charts">
          <Featured/>
          <Charts aspect={3/1} title="Last 6 months (revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Home
