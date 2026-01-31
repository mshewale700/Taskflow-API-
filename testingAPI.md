Base URL with port : http://localhost:5000


* Register New User first :
* method: Post // URL: http://localhost:5000/api/auth/register
    JSON DATA: {
  "name": "Mayur Sheawale",
  "email": "mshewale700@gmail.com",
  "password": "Mayur@003"
}

Success Response be like : 
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "id": "697d4e3c364d6e8cfe9ed190",
        "name": "Mayur Sheawale",
        "email": "mshewale700@gmail.com"
    }
} 

status : Passed Successfully 

//////////////////////////////////////////////////////////////////////////////////////////
*** LOGIN User using credential : 
    Method : Post  URL : http://localhost:5000/api/auth/login

    using credential : 
    {
  "email": "admino@gmail.com",
  "password": "Admino@003"
}
  
Success Response be like : {
    "success": true,
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5N2Q0ZmY1MzY0ZDZlOGNmZTllZDE5MyIsImlhdCI6MTc2OTgyMDU5MSwiZXhwIjoxNzY5OTA2OTkxfQ.uZRJE4GFsE6LUBcEZwLPjSqfShwogUd-7KaC-yJI1ZM"
}
status : Passed Successfully 
IMP
we have to use token for this user
/////////////////////////////////////////////////////////////////////////////////////////////////

***Create a task 

Method : Post URL: http://localhost:5000/api/tasks

Input :: {
  "title": "complete the taskflow project",
  "description": "test all API",
  "priority": "high",
  "due_date": "2026-02-03"
}

Success Response be like :
{
    "success": true,
    "message": "Task created successfully",
    "data": {
        "id": "697d587b7f46b16b1a91a4f1",
        "title": "complete the taskflow project",
        "description": "test all API",
        "priority": "high",
        "status": "pending",
        "due_date": "2026-01-31T00:00:00.000Z",
        "created_at": "2026-01-31T01:18:51.944Z"
    }
}

status : success 

//////////////////////////////////////////////////////////////////////////////////////

****GET ALL TASKS with FILTER 

Method : Get URL : /api/tasks?status=pending&priority=high&page=1&limit=10

BODY : NONE 
 
 Success Response be like : {
    "success": true,
    "data": [
        {
            "id": "697d587b7f46b16b1a91a4f1",
            "title": "complete the taskflow project",
            "priority": "high",
            "status": "pending",
            "due_date": "2026-01-31T00:00:00.000Z"
        }
    ],
    "pagination": {
        "current_page": 1,
        "total_pages": 1,
        "total_tasks": 1
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

Get Single Task::;
Method : Get URL :http://localhost:5000/api/tasks/1

Success Response be like :{
  "title": "complete the taskflow project",
  "description": "test all API",
  "priority": "high",
  "due_date": "2026-02-03"
}
/////////////////////////////////////////////////////////////////////////////////////////////

Update Task:: 
MEthod : PUT  URL : http://localhost:5000/api/tasks/1
Success Response be like    
{
    "success": true,
    "message": "Task updated successfully",
    "data": {
        "id": 1,
        "title": "complete the taskflow project",
        "priority": "low",
        "status": "completed",
        "updated_at": "2026-01-31T02:42:19.951Z"
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

 Delete Task
method : Delete URl : http://localhost:5000/api/tasks/3
Success Response be like 

{
    "success": true,
    "message": "Task deleted successfully"
}