import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    <>
      <Link to={`/friendDetails/${friend.id}`} className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center text-center w-full max-w-70 sm:max-w-75 mx-auto">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-200 mb-3 sm:mb-4">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          {friend.name}
        </h2>

        <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 rounded-full text-white ${
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
      </Link>
    </>
  );
};

export default FriendCard;
