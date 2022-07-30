export const userColumns =[
  { field: 'id', headerName: 'ID', width: 130 },
  { field: "username", headerName: "User", width: 280, renderCell:(params)=>{
    return(
      <div className="cellWithImg">
        <img src={params.row.avatar}className="cellImg" alt="avatar" />
        {params.row.username}
      </div>
    )
  }},
  { field:"email", headerName:"Email", width:280},
  { field:"age", headerName:"Age", width:150},
  {
    field:"status", headerName:"Status", width:210,
    renderCell: (params)=>{
      return(
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      )
    }
  }
]
export const userRows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1jon@gmail.com",
      status: "active",
      age:35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2jon@gmail.com",
      status: "passive",
      age:37,
    },
    {
      id: 3,
      username: "Lanniester",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "3jon@gmail.com",
      status: "pending",
      age:28,
    },
    {
      id: 4,
      username: "Stark",
      avatar:
        " https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "4jon@gmail.com",
      status: "active",
      age:46,
    },
    {
      id: 5,
      username: "Targaryen",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "5jon@gmail.com",
      status: "active",
      age:36,
    },
    {
      id: 6,
      username: "Melisandre",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "6jon@gmail.com",
      status: "pending",
      age:24,
    },
    {
      id: 7,
      username: "Frances",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "7jon@gmail.com",
      status: "active",
      age:75,
    },
    {
      id: 8,
      username: "Roxie",
      avatar:
        "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "8jon@gmail.com",
      status: "passive",
      age:31,
    },
    {
      id: 9,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "9jon@gmail.com",
      status: "active",
      age:36,
    },
    {
      id: 10,
      username: "Arya Stark",
      avatar:
        "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "10jon@gmail.com",
      status: "pending",
      age:39, 
    },
  ];