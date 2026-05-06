import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();
const FriendContextProvider = ({ children }) => {
  const [storedFriends, setStoredFriends] = useState([]);

  console.log(storedFriends)

  const handleIsExistFriend = (addedFriend) => {

    setStoredFriends([...storedFriends, addedFriend]);
    toast.success(
      `${addedFriend.type} with ${addedFriend.name}`,
      {
        autoClose: 2000,
      },
    );
  };

  const data = {
    storedFriends,
    setStoredFriends,
    handleIsExistFriend,
  };

  return (
    <>
      <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    </>
  );
};

export default FriendContextProvider;
