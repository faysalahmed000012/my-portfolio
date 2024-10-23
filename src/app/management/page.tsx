import Link from "next/link";

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center gap-2 flex-1 w-full h-full">
        <Link
          className="border border-white rounded-xl px-3 py-6 hover:bg-gray-800 transition-all duration-300 ease-in-out"
          href="/management/manageBlogs"
        >
          Manage Blogs
        </Link>
        <Link
          className="border border-white rounded-xl px-3 py-6 hover:bg-gray-800 transition-all duration-300 ease-in-out"
          href="/management/manageProjects"
        >
          Mange Projects
        </Link>
        <Link
          className="border border-white rounded-xl px-3 py-6 hover:bg-gray-800 transition-all duration-300 ease-in-out"
          href="/management/manageSkills"
        >
          Manage Skills
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
