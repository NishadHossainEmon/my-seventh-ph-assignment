import { use, useState, useEffect } from "react";
import FriendCard from "./FriendCard";

const friendsPromise = fetch("/data.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="pb-10 sm:pb-14">
      <h2 className="text-xl sm:text-2xl font-bold mb-3">Your Friends</h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {friends.map((friend, indx) => (
            <FriendCard key={indx} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFriends;