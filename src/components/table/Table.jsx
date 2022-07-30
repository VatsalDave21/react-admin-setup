import React from 'react'
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
    const rows = [
        {
            id: 1456,
            product: "Acer Nitro 5",
            img:"https://m.media-amazon.com/images/I/61KrXqYarIL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 July",
            amount: 785,
            method: "Online Payment",
            status: "Approved",
        },
        {
            id: 2631,
            product: "Play Station 5",
            img:" https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNIJ-CSjLwomnnr_qhr9gH-YxLw4rSh8FOgWlIj8khFU3yOtkI5gYXndvzUv2HWq32Z2IMdfjYfYQ&usqp=CAc",
            customer: "William Blake",
            date: "9 July",
            amount: 500,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 6699,
            product: "Razer Blade 15",
            img:" https://m.media-amazon.com/images/I/71K7P66CGnL._SX679_.jpg",
            customer: "Adam Warlock",
            date: "10 August",
            amount: 920,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 7845,
            product: "ASUS ROG strix",
            img:"https://m.media-amazon.com/images/I/81isDVo0CmL._SX679_.jpg",
            customer: "Kritesh Dimp",
            date: "10 August",
            amount: 1200,
            method: "Online",
            status: "Approved",
        }
    ]
  return (
    
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell >{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt={row.product} className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
