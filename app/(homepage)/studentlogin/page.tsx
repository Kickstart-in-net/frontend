// homepage/studentloggedin/page.tsx
import React from 'react';

export default function StudentLoggedIn() {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Welcome back, [Username]</h2>
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          {/* User Profile Avatar */}
          <img
            src="/path/to/avatar.jpg"
            alt="Profile Avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-lg">Username</h3>
            <p className="text-sm">Membership: Active</p>
          </div>
        </div>
      </section>

      {/* Active Courses */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold">Active Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Course Cards */}
          <div className="bg-gray-800 p-4 rounded-md shadow-md">
            <img src="/path/to/course-image.jpg" alt="Course Thumbnail" className="w-full rounded-md" />
            <h3 className="mt-2 text-lg">Course Title</h3>
            <p className="text-sm">Course description or details here...</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 rounded-md">Resume Course</button>
          </div>
          {/* Repeat for more courses */}
        </div>
      </section>

      {/* Recommended Courses */}
      <section>
        <h2 className="text-lg font-semibold">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Recommended Course Cards */}
          <div className="bg-gray-800 p-4 rounded-md">
            <img src="/path/to/recommendation.jpg" alt="Recommendation Thumbnail" className="w-full rounded-md" />
            <h3 className="mt-2 text-sm">Recommended Title</h3>
          </div>
          {/* Repeat for more recommended items */}
        </div>
      </section>
    </div>
  );
}
