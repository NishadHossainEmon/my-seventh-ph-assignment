import AllFriends from "./AllFriends";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <>
     <div className="bg-gray-100">
      <div className="w-[80%] mx-auto">
        <Banner></Banner>
        <AllFriends></AllFriends>
      </div>
     </div>
      
    </>
  );
};

export default HomePage;
