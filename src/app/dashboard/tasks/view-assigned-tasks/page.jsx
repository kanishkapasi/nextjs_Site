export default function ViewAssigneTasks() {
  return (
    <div className="min-h-screen bg-gray-900 w-[100%]">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Assigned tasks</h1>
        <br />
        <table className="min-w-full table-fixed bg-white shadow-lg rounded-xl">
          <thead>
            <tr className="bg-gray-200">
              <th className="w-1/4 py-2">Lead's Name</th>
              <th className="w-1/4 py-2">Driver's Name</th>
              <th className="w-1/4 py-2">Task Status</th>
              <th className="w-1/4 py-2">Scheduled Date and Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="w-1/4 px-4 py-2">Tom benx</td>
              <td className="w-1/4 px-4 py-2">Malcolm Lockyer</td>
              <td className="w-1/4 px-4 py-2">1961</td>
              <td className="w-1/4 px-4 py-2">1961</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="w-1/4 px-4 py-2">Witchy Woman</td>
              <td className="w-1/4 px-4 py-2">Sara jennifor</td>
              <td className="w-1/4 px-4 py-2">1972</td>
              <td className="w-1/4 px-4 py-2">1961</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="w-1/4 px-4 py-2">Shining Star</td>
              <td className="w-1/4 px-4 py-2">Alex margen</td>
              <td className="w-1/4 px-4 py-2">1975</td>
              <td className="w-1/4 px-4 py-2">1961</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="w-1/4 px-4 py-2">Kareem kin</td>
              <td className="w-1/4 px-4 py-2">Jennifor </td>
              <td className="w-1/4 px-4 py-2">1975</td>
              <td className="w-1/4 px-4 py-2">1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
