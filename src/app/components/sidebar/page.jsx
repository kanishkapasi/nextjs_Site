"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);
  const [showSubMenu4, setShowSubMenu4] = useState(false);

  const toggleSubMenu = (submenu) => {
    switch (submenu) {
      case 1:
        setShowSubMenu1(!showSubMenu1);
        break;
      case 2:
        setShowSubMenu2(!showSubMenu2);
        break;
      case 3:
        setShowSubMenu3(!showSubMenu3);
        break;
      case 4:
        setShowSubMenu4(!showSubMenu4);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen">
      <div className="py-6 pl-6 pr-4 bg-gray-800">
        <h1 className="text-2xl font-bold">
          C<span className="text-blue-600">R</span>M
        </h1>
      </div>

      <ul className="mt-6">
        <li>
          <Link
            href="/"
            className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
            <span className="text-lg mr-3">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            Dashboard
          </Link>
        </li>
        <li>
          <button
            onClick={() => toggleSubMenu(1)}
            className="flex items-center w-full px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
            <span className="text-lg mr-3">
              <i className="fas fa-users"></i>
            </span>
            Lead
            <span className="ml-auto">
              {showSubMenu1 ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
            </span>
          </button>
          {showSubMenu1 && (
            <ul className="pl-9">
              <li>
                <Link
                  href="/dashboard/lead/add-new-lead"
                  className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                  Add new lead
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/lead/manage-lead"
                  className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                  Manage lead
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* Add more menu items with submenus below */}
        {/* Menu 2 */}
        <li>
          <button
            onClick={() => toggleSubMenu(2)}
            className="flex items-center w-full px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
            <span className="text-lg mr-3">
              <i className="fas fa-tasks"></i>
            </span>
            Tasks
            <span className="ml-auto">
              {showSubMenu2 ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
            </span>
          </button>
          {showSubMenu2 && (
            <ul className="pl-9">
              <li>
                <Link
                  href="/dashboard/tasks/asign-tasks"
                  className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                  Assign Tasks
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/tasks/view-assigned-tasks"
                  className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                  View Assigned Tasks
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/tasks/my-tasks"
                  className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                  My Tasks
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/tasks/task-history"
                  className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                  Task History
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* Menu 3 */}
        <li>
          <button
            onClick={() => toggleSubMenu(3)}
            className="flex items-center w-full px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
            <span className="text-lg mr-3">
              <i className="fas fa-truck"></i>
            </span>
            Drivers
            <span className="ml-auto">
              {showSubMenu3 ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
            </span>
          </button>
          {showSubMenu3 && (
            <ul className="pl-9">
              <li>
                <Link
                  href="/dashboard/drivers/driver-list"
                  className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                  Driver list
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/drivers/driver-payment"
                  className="block px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
                  Driver Payments
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Menu 4*/}
        <li>
          <Link
            href="/dashboard/reports"
            className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
            <span className="text-lg mr-3">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            Reports
          </Link>
        </li>
        {/* Menu 5*/}
        <li>
          <Link
            href="/dashboard/helpcenter"
            className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
            <span className="text-lg mr-3">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            Help & Support
          </Link>
        </li>
        {/* Menu 6*/}
        <li>
          <Link
            href="/"
            className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white">
            <span className="text-lg mr-3">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
}
