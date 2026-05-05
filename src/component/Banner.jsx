import { HiPlus } from "react-icons/hi";

export default function Banner() {
  const stats = [
    { label: "Total Friends", value: 10 },
    { label: "On Track", value: 3 },
    { label: "Need Attention", value: 6 },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="md:pt-10 pb-7">
      <div className="text-center">

        <h1 className="text-2xl pt-3 sm:text-3xl font-bold text-gray-900 mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-sm text-gray-500 max-w-xs sm:max-w-sm mx-auto leading-relaxed mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="inline-flex items-center gap-1.5 bg-[#244d3f] hover:bg-[#162e25] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors">
          <HiPlus className="text-base" />
          Add a Friend
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 md:mt-10 border-b-2 border-b-gray-300 pb-9 ">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-center shadow-lg"
            >
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
}