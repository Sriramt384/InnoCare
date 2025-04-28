import { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get year, month, and day details
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date().getDate(); // Ensure we compare against the actual today's date
  const currentMonth = new Date().getMonth(); // Actual current month
  const currentYear = new Date().getFullYear(); // Actual current year

  // Days in current month and the first day index
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  // Days in the previous month
  const prevDaysInMonth = new Date(year, month, 0).getDate();

  // Generate the days array for the calendar
  const days: { day: number; isCurrentMonth: boolean; }[] = [];

  // Fill in the days from the previous month
  for (let i = firstDayIndex; i > 0; i--) {
    days.push({ day: prevDaysInMonth - i + 1, isCurrentMonth: false });
  }

  // Fill in the current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isCurrentMonth: true });
  }

  // Fill in the next month's days to complete the grid
  while (days.length % 7 !== 0) {
    days.push({ day: days.length - daysInMonth - firstDayIndex + 1, isCurrentMonth: false });
  }

  // Change month handlers
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="w-full max-w-full rounded-sm border border-strokedark bg-boxdark shadow-default">
      <div className="flex items-center justify-between p-4 bg-primary text-white rounded-t-sm">
        <button onClick={handlePrevMonth} className="p-2 font-bold">&#8592;</button>
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={handleNextMonth} className="p-2 font-bold">&#8594;</button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-7 bg-primary text-white">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <th
                key={day}
                className="flex h-20 items-center justify-center p-2 text-xs font-semibold sm:text-base xl:p-5"
              >
                <span>{day}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            // Create rows for every 7 days
            Array.from({ length: days.length / 7 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="grid grid-cols-7">
                {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => (
                  <td
                    key={index}
                    className={`ease relative h-32 cursor-pointer border border-strokedark p-4 transition duration-500 hover:bg-meta-4 dark:border-strokedark dark:hover:bg-meta-4 md:h-36 md:p-6 xl:h-40 
                      ${day.isCurrentMonth
                        ? day.day === today && month === currentMonth && year === currentYear
                          ? "bg-blue-500 text-white font-bold" // Highlight for today's date
                          : "text-white"
                        : "text-gray-600"
                      }`}
                  >
                    <span className="font-medium">{day.day}</span>
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
