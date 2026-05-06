import { createBrowserRouter } from "react-router";
import MainLayOut from "./MainLayOut";
import HomePage from "./HomePage";
import FriendDetails from "../FriendDetails";
import TimeLine from "../TimeLine";
import Chart from "./Chart";


export const router = createBrowserRouter([
  {
     path: '/',
     element: <MainLayOut></MainLayOut>,
     children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
         path: '/friendDetails/:id',
         element: <FriendDetails></FriendDetails>
      },
      {
         path: '/timeline',
         element: <TimeLine></TimeLine> 
      },
      {
         path: '/chart',
         element: <Chart></Chart>
      }
     ]
  }
])