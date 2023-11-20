"use client";
import { useState } from "react";

export default function Driver() {
  const drivers = [
    {
      id: 1,
      name: "John Doe",
      contact: "john@example.com",
      availability: "Available",
      tasks: ["Task A", "Task B"],
    },
    {
      id: 2,
      name: "Jane Smith",
      contact: "jane@example.com",
      availability: "Busy",
      tasks: ["Task C", "Task D"],
    },
    {
      id: 3,
      name: "Alex Smich",
      contact: "Alex@example.com",
      availability: "Busy",
      tasks: ["Task q", "Task D"],
    },
    {
      id: 4,
      name: "Sara forex",
      contact: "Sara@example.com",
      availability: "Available",
      tasks: ["Task d", "Task l"],
    },
    // Add more drivers as needed
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter drivers based on the search query
  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto w-[100%] p-10">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border rounded-lg px-3 py-2 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Availability
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Assigned Tasks
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredDrivers.map((driver) => (
            <tr key={driver.id}>
              <td className="px-6 py-4 whitespace-nowrap">{driver.name}</td>
              <td className="px-6 py-4">{driver.contact}</td>
              <td className="px-6 py-4">
                <span
                  className={`${
                    driver.availability === "Available"
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  } px-2 py-1 rounded-full text-xs`}>
                  {driver.availability}
                </span>
              </td>
              <td className="px-6 py-4">
                <ul>
                  {driver.tasks.map((task, index) => (
                    <li key={index} className="list-disc list-inside">
                      {task}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
