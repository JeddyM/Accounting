import React from "react";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="text-xl font-bold">Human Resources</div>
      <nav className="hidden md:flex space-x-6">
        <a href="/">Home</a>
        <a href="/solutions">Solutions</a>
        <a href="/pricing">Pricing</a>
        <a href="/company">Company</a>
        <a href="/blogs">Blogs</a>
      </nav>
      
    </header>
  );
}

export default Navbar;
