import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [certData, setCertData] = useState({
    name: "",
    institution: "",
    image: null,
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setCertData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log("Certificate Data Added:", certData);
    alert("Certificate Added Successfully! (Simulated)");
    setCertData({ name: "", institution: "", image: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation */}
      <nav className="p-6 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-gray-800">Admin Profile</h1>
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            Back to Home
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="py-16 px-6 text-center bg-gray-800 text-white">
        <h2 className="text-5xl font-extrabold mb-4">Manage Portfolio Content</h2>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Upload new certificates and update your experience categories from here.
        </p>
      </header>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Add New Certificate</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Certificate Name</label>
            <input
              type="text"
              name="name"
              required
              value={certData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="e.g., Meta Front-End Developer"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Institution</label>
            <input
              type="text"
              name="institution"
              required
              value={certData.institution}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="e.g., Coursera"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Certificate Image</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={handleFileChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white p-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition shadow-md"
          >
            Add Certificate
          </button>
        </form>
      </div>

      {/* Guidance Section */}
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-blue-50 text-blue-800 rounded-lg border border-blue-200">
        <p className="font-semibold italic">
          💡 Note: In this prototype, adding a certificate logs the data to the console. To make it persistent, you can integrate this with a backend like MongoDB or use Cloudinary for image storage.
        </p>
      </div>
    </div>
  );
}

export default Profile;
