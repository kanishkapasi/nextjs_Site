"use client";

import { useState, useEffect } from "react";

export default function ManageLead() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    // Replace this with actual API call to fetch leads from the server
    setTimeout(() => {
      const sampleLeads = [
        {
          id: 1,
          name: "John Doe",
          contactInfo: "john@example.com",
          vehicleDetails: "Toyota Camry",
          leadSource: "Website Inquiry",
          qualificationStatus: "Qualified",
          isAssigned: true,
        },
        // Add more lead objects here
      ];
      setLeads(sampleLeads);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLeadNameClick = (lead) => {
    setSelectedLead(lead);
  };

  const toggleAssignment = (lead) => {
    const updatedLeads = leads.map((l) => {
      if (l.id === lead.id) {
        // Toggle the isAssigned property
        return { ...l, isAssigned: !l.isAssigned };
      }
      return l;
    });
    setLeads(updatedLeads);
  };

  const clearSelectedLead = () => {
    setSelectedLead(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Manage Leads
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3 text-left">Lead Name</th>
                <th className="py-2 px-3 text-left">Contact Info</th>
                <th className="py-2 px-3 text-left">Vehicle Details</th>
                <th className="py-2 px-3 text-left">Lead Source</th>
                <th className="py-2 px-3 text-left">Qualification Status</th>
                <th className="py-2 px-3 text-left">Assigned</th>
                <th className="py-2 px-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td
                    className="py-2 px-3 whitespace-nowrap cursor-pointer"
                    onClick={() => handleLeadNameClick(lead)}>
                    {lead.name}
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    {lead.contactInfo}
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    {lead.vehicleDetails}
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    {lead.leadSource}
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    <span
                      className={`py-1 px-2 rounded-full text-xs font-semibold ${
                        lead.qualificationStatus === "Qualified"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}>
                      {lead.qualificationStatus}
                    </span>
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    <button
                      className={`py-1 px-2 rounded-full text-xs font-semibold ${
                        lead.isAssigned
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                      onClick={() => toggleAssignment(lead)}>
                      {lead.isAssigned ? "Assigned" : "Not Assigned"}
                    </button>
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    <button className="bg-blue-500 hover-bg-blue-600 text-white py-1 px-2 rounded-full text-xs font-semibold">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Display lead details when a lead is selected */}
      {selectedLead && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">Lead Details</h2>
          <p>Name: {selectedLead.name}</p>
          <p>Contact Info: {selectedLead.contactInfo}</p>
          <p>Vehicle Details: {selectedLead.vehicleDetails}</p>
          <p>Lead Source: {selectedLead.leadSource}</p>
          <p>Qualification Status: {selectedLead.qualificationStatus}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-full text-xs font-semibold mt-2"
            onClick={clearSelectedLead}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
