import { use } from "react";
import { useParams } from "react-router";
import { BsAlarmFill, BsChatDots, BsCameraVideo } from "react-icons/bs";
import { MdArchive, MdDelete, MdEdit } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const friendsPromise = fetch("/data.json").then((res) => res.json());

const FriendDetails = () => {
  const { id } = useParams();
  const friends = use(friendsPromise);
  const friend = friends.find((friend) => id == friend.id);

  const formattedDate = new Date(friend.next_due_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[1fr_auto] gap-4">

          {/* Profile Card — row 1, col 1 */}
          <div className="md:row-start-1 md:col-start-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
              {friend.name}
            </h2>

            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full text-white mb-2 ${
                friend.status === "overdue"
                  ? "bg-red-500"
                  : friend.status === "almost due"
                  ? "bg-yellow-400"
                  : "bg-green-500"
              }`}
            >
              {friend.status === "overdue"
                ? "Overdue"
                : friend.status === "almost due"
                ? "Almost Due"
                : "On Track"}
            </span>

            <div className="flex flex-wrap justify-center gap-1.5 mb-3">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 italic mb-1">"{friend.bio}"</p>
            <p className="text-xs text-gray-400">Preferred: email</p>
          </div>

          {/* Action Buttons — row 2, col 1 */}
          <div className="md:row-start-2 md:col-start-1 flex flex-col gap-3">
            <button className="w-full flex items-center gap-3 px-5 py-3 text-sm text-gray-700 bg-white hover:bg-gray-50 transition-all rounded-2xl shadow-sm border border-gray-100 active:scale-95">
              <BsAlarmFill className="text-gray-500 text-base" />
              Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 text-sm text-gray-700 bg-white hover:bg-gray-50 transition-all rounded-2xl shadow-sm border border-gray-100 active:scale-95">
              <MdArchive className="text-gray-500 text-base" />
              Archive
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3 text-sm text-red-500 bg-white hover:bg-red-50 transition-all rounded-2xl shadow-sm border border-gray-100 active:scale-95">
              <MdDelete className="text-red-500 text-base" />
              Delete
            </button>
          </div>

          {/* Stat + Relationship Goal — row 1, col 2-3 */}
          <div className="md:row-start-1 md:col-start-2 md:col-span-2 flex flex-col gap-4">

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  {friend.days_since_contact}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  {friend.goal}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">Goal (Days)</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 text-center">
                <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  {formattedDate}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-gray-700">
                  Relationship Goal
                </h3>
                <button className="flex items-center p-3 rounded-lg bg-gray-100 gap-1 text-xs text-gray-600 hover:text-gray-800 transition-all active:scale-95">
                  <MdEdit className="text-sm" />
                  Edit
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Connect every{" "}
                <span className="font-bold text-gray-900">{friend.goal} days</span>
              </p>
            </div>

          </div>

          {/* Quick Check-In — row 2, col 2-3 */}
          <div className="md:row-start-2 md:col-start-2 md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col bg-gray-100 items-center justify-center gap-2 py-3 rounded-xl hover:bg-gray-300 transition-all border border-gray-100 active:scale-95">
                <IoCall className="text-xl text-gray-700" />
                <span className="text-xs text-gray-500">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center bg-gray-100 gap-2 py-3 rounded-xl hover:bg-gray-300 transition-all border border-gray-100 active:scale-95">
                <BsChatDots className="text-xl text-gray-700" />
                <span className="text-xs text-gray-500">Text</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 py-3 bg-gray-100 rounded-xl hover:bg-gray-300 transition-all border border-gray-100 active:scale-95">
                <BsCameraVideo className="text-xl text-gray-700" />
                <span className="text-xs text-gray-500">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;