import { useContext, useState } from "react";
import { FriendContext } from "./component/FriendContextProvider";

const TimeLine = () => {
  const ContextFriend = useContext(FriendContext);
  const { storedFriends } = ContextFriend;
  const [filteredTimeLine, setFilteredTimeLine] = useState(storedFriends);

  const handleSortedTimeLine = () => {
    
     const result = [...storedFriends].sort(
        (a, b) => new Date(a.date) - new Date(b.date),
      );
    setFilteredTimeLine(result);
    //.sort((a, b) => new Date(a.date) - new Date(b.date))
  };
  const handleFilteredTimeLine = (type) => {
    const result = storedFriends.filter((friend) => friend.type == type);
    setFilteredTimeLine(result);
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="w-[80%] mx-auto flex flex-col gap-3 pt-5 pb-10">
          <h2 className="font-bold text-3xl mb-3">Timeline</h2>
          <div className="flex justify-between">
            <select defaultValue="Medium" className="select select-md">
              <option disabled={true}>Filter Timeline</option>
              <option onClick={() => handleFilteredTimeLine("Call")}>
                Call
              </option>
              <option onClick={() => handleFilteredTimeLine("Text")}>
                Text
              </option>
              <option onClick={() => handleFilteredTimeLine("Video")}>
                Video
              </option>
            </select>
            <div className="dropdown dropdown-center">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort ⬇️
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li onClick={() => handleSortedTimeLine()}>
                  <a>By Date</a>
                </li>
              </ul>
            </div>
          </div>

          {filteredTimeLine.length === 0 ? (
            <div className="flex items-center justify-center bg-white shadow rounded-xl py-10">
              <p className="text-black font-bold text-2xl">No activity found</p>
            </div>
          ) : (
            filteredTimeLine.map((friend, indx) => (
              <div
                key={indx}
                className="flex items-center gap-3 bg-white shadow rounded-xl py-3 pl-3"
              >
                <img src={friend.image} className="w-[35px]" alt="" />
                <div>
                  <h4>
                    <span className="font-bold">{friend.type}</span>{" "}
                    <span className="font-normal text-gray-500">
                      with {friend.name}
                    </span>
                  </h4>
                  <h5 className="text-sm text-gray-500">{friend.date}</h5>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default TimeLine;
