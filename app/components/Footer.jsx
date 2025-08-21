export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Productify. All rights reserved.</p>
        <p className="text-gray-400 mt-2">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}