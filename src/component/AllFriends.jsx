import { use } from "react";
import FriendCard from "./FriendCard";

const friendsPromise = fetch('/data.json').then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);

  return (
    <div className="pb-10 sm:pb-14">
      <h2 className="text-lg sm:text-xl font-bold mb-3">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {friends.map((friend, indx) => (
          <FriendCard key={indx} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default AllFriends;