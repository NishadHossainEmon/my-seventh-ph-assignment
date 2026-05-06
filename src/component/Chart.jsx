import { useContext } from 'react';
import { Legend, Tooltip } from 'recharts';
import { Pie, PieChart } from 'recharts';
import { FriendContext } from './FriendContextProvider';


const Chart = () => {

  const ContextFriend = useContext(FriendContext)
  const {storedFriends} = ContextFriend

  const call = storedFriends.filter((friend) => friend.type == 'Call')
  const text = storedFriends.filter((friend) => friend.type == 'Text')
  const video = storedFriends.filter((friend) => friend.type == 'Video')

  const data = [
    {name: 'Call', value: call.length, fill: '#006400'},
    {name: 'Text', value: text.length, fill: '#008000'},
    {name: 'Video',value: video.length, fill: '#800080'}
  ]
  return (
    <>
      <div className="bg-gray-100">
        <div className="w-[80%] mx-auto pb-7">
          <h2 className="text-3xl font-bold py-6">Friendship Analytics</h2>
          <div className='bg-white shadow-xl rounded-xl py-8'>
            <h2 className='text-green-800 text-xl font-semibold pl-6'>By Interaction Type</h2>
            <PieChart
              style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "80vh",
                margin: 'auto',
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
            <Legend wrapperStyle={{ paddingTop: "20px" }}></Legend>
            <Tooltip></Tooltip>
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
