import React, { useState } from 'react'
import "./datatable.scss"
import {DataGrid} from "@mui/x-data-grid";
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
 

const Datatable = () => {
      const[data, setData] = useState(userRows)

      const handleDelete=(id)=>{
        setData(data.filter((row)=>
          row.id !== id        ))
      }
      const actionColumn = [
        {field: "action", headerName:"Action", width:250, renderCell:(params)=>{
          return(
            <div className='cellAction'>
              <Link to="/users/test" style={{textDecoration:"none"}}>
              <div className="viewButton">View</div>
              </Link>
              <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
            </div>
          )
        }}
      ]
  return (
    
    <div className='dataTable'>
      <div className="datatableTitle">
        Add new user
        <Link to="/users/new" style={{textDecoration:"none"}} className='link'>
          Add new
        </Link>
      </div>
      <DataGrid
      className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        
      />
    </div>
  )
}

export default Datatable
