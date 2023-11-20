"use client";

import { useState, useEffect } from "react";

export default function TaskHistory() {
  const initialTasks = [
    // Replace with your actual task data
    {
      id: 1,
      leadName: "John Doe",
      driverName: "Alice Johnson",
      taskStatus: "Completed",
      scheduledDate: "2023-10-10",
    },
    {
      id: 2,
      leadName: "Jane Smith",
      driverName: "Bob Williams",
      taskStatus: "In Progress",
      scheduledDate: "2023-10-12",
    },
    // Add more tasks
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    driver: "",
    status: "",
    keyword: "",
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    const filtered = initialTasks.filter((task) => {
      const startDateCondition =
        !filters.startDate || task.scheduledDate >= filters.startDate;
      const endDateCondition =
        !filters.endDate || task.scheduledDate <= filters.endDate;
      const driverCondition =
        !filters.driver || task.driverName === filters.driver;
      const statusCondition =
        !filters.status || task.taskStatus === filters.status;
      const keywordCondition =
        !filters.keyword ||
        task.leadName.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        task.driverName.toLowerCase().includes(filters.keyword.toLowerCase());

      return (
        startDateCondition &&
        endDateCondition &&
        driverCondition &&
        statusCondition &&
        keywordCondition
      );
    });

    setFilteredTasks(filtered);
  };

  return (
    <div className="bg-gray-900 p-6  shadow-lg text-white w-[100%]">
      <h1 className="text-3xl font-bold mb-4">Task History</h1>
      <div className="grid grid-cols-1 gap- 4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <input
            type="text"
            placeholder="Search by keyword"
            value={filters.keyword}
            onChange={(e) =>
              setFilters({ ...filters, keyword: e.target.value })
            }
            className="bg-gray-800 text-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Start Date"
            value={filters.startDate}
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
            className="bg-gray-800 text-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="End Date"
            value={filters.endDate}
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
            }
            className="bg-gray-800 text-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <select
            value={filters.driver}
            onChange={(e) => setFilters({ ...filters, driver: e.target.value })}
            className="bg-gray-800 text-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500">
            <option value="">All Drivers</option>
            {/* Populate with driver options */}
          </select>
        </div>
        <div>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="bg-gray-800 text-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500">
            <option value="">All Statuses</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            {/* Add more status options if needed */}
          </select>
        </div>
      </div>

      <table className="mt-8 w-full">
        <thead>
          <tr className="bg-gray-800">
            <th className="text-left py-2 px-4">Lead Name</th>
            <th className="text-left py-2 px-4">Driver Name</th>
            <th className="text-left py-2 px-4">Task Status</th>
            <th className="text-left py-2 px-4">Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-700">
              <td className="py-2 px-4">{task.leadName}</td>
              <td className="py-2 px-4">{task.driverName}</td>
              <td className="py-2 px-4">{task.taskStatus}</td>
              <td className="py-2 px-4">{task.scheduledDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
