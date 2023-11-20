export default function dashboard() {
  // Dummy data for notifications and recent activity
  const notifications = [
    "New Lead: Lead #123 assigned.",
    "Task completed: Task #456.",
    "New message from client: Client ABC.",
  ];

  const recentActivity = [
    "John Doe updated lead #123.",
    "Jane Smith assigned task #789.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 w-[100%]">
      <div>
        <div className="bg-gray-800 shadow-md rounded-b-xl">
          <div className="container mx-auto py-6">
            <h1 className="text-3xl font-semibold text-gray-100 px-6">
              CRM System Dashboard
            </h1>
          </div>
        </div>

        <div className="container mx-auto py-10 px-6 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <DashboardCard title="Total number of leads" />
          <DashboardCard title="New leads" />
          <DashboardCard title="Qualified leads" />
          <DashboardCard title="Unqualified leads" />
          <DashboardCard title="Number of tasks completed" />
          <DashboardCard title="Number of tasks in progress" />
          <DashboardCard title="Number of tasks assigned to drivers" />
          <DashboardCard title="Summary of driver payments" />
          <DashboardCard title="Upcoming payment deadlines" />
        </div>

        <div className="container mx-auto py-6 px-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <NotificationsPanel notifications={notifications} />
          <RecentActivityLog recentActivity={recentActivity} />
        </div>
      </div>
    </div>
  );
}

const DashboardCard = ({ title }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
    <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
    {/* Add content for each card here */}
  </div>
);

const NotificationsPanel = ({ notifications }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
    <ul>
      {notifications.map((notification, index) => (
        <li key={index} className="mb-2">
          <span className="text-blue-500">{notification}</span>
        </li>
      ))}
    </ul>
  </div>
);

const RecentActivityLog = ({ recentActivity }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
    <ul>
      {recentActivity.map((activity, index) => (
        <li key={index} className="mb-2">
          <span className="text-gray-600">{activity}</span>
        </li>
      ))}
    </ul>
  </div>
);
