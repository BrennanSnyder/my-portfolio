import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-100 to-pink-100 text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-transparent shadow p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold">Brennan Snyder</h1>
        <nav className="space-x-2">
          {['home', 'about', 'projects', 'skills', 'resume', 'contact'].map(tab => (
            <button
              key={tab}
              className={`px-3 py-1 rounded transition-all duration-200 text-sm font-medium ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'hover:bg-blue-100 text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="p-6 md:p-12">
        {activeTab === 'home' && (
          <section className="text-center py-16">
            <img
              src="/profile.jpg"
              alt="Brennan Snyder"
              className="w-24 h-24 mx-auto rounded-full mb-4 shadow-md"
            />
            <h2 className="text-4xl font-bold mb-4">Hi, I'm Brennan</h2>
            <p className="text-lg max-w-xl mx-auto text-gray-700">
              Computer Science student passionate about systems, AI, and software.
            </p>
          </section>
        )}

        {activeTab === 'about' && (
          <section className="bg-transparent rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p>
              I'm a CS major at University of Minnesota College of Science and Engineering graduating in 2026. I enjoy building tools, exploring system internals,
              and working on team-based software projects. I've developed web apps, experimented with interpreters in OCaml,
              and built memory allocators in C.
            </p>
          </section>
        )}

        {activeTab === 'projects' && (
  <section className="bg-transparent rounded-xl shadow-md p-8 max-w-5xl mx-auto">
    <h3 className="text-2xl font-semibold mb-6">💼 Projects</h3>
    <div className="grid gap-6 md:grid-cols-2">
      {/* Golf Rewards App */}
      <div className="p-4 border rounded shadow-sm bg-blue-50">
        <h4 className="font-bold mb-2">Golf Rewards App (In Progress)</h4>
        <p className="mb-2">React + Firebase app for managing points and rewards at a golf course.</p>
        <img
          src="/golf-app.png"
          alt="Golf Rewards App"
          className="rounded shadow-md w-full h-auto max-h-60 object-cover"
        />
      </div>

      

      {/* Chess Game */}
      <div className="p-4 border rounded shadow-sm bg-blue-50">
        <h4 className="font-bold mb-2">Chess Game</h4>
        <p className="mb-4">Built a two-player chess game in Java with a fully functional terminal interface and intuitive gameplay.</p>
        <img
          src="/chess-game.png"
          alt="Chess Game Screenshot"
          className="rounded shadow-md w-full object-contain h-48"
        />
      </div>

      {/* Weather App */}
      <div className="p-4 border rounded shadow-sm bg-blue-50">
        <h4 className="font-bold mb-2">Weather App</h4>
        <p className="mb-2">Developed using JavaScript and an API to fetch real-time weather data. Users can view weather details accross multiple locations in Minnesota.</p>
      
      </div>

      {/* Image Editor */}
      <div className="p-4 border rounded shadow-sm bg-blue-50">
        <h4 className="font-bold mb-2">Image Editor</h4>
        <p className="mb-2">Created a Python-based image editing program, allowing users to apply filters and edit image metadata.</p>
      
      </div>

    </div>
  </section>
)}


        {activeTab === 'skills' && (
          <section className="bg-transparent rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">🧰 Skills</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
              <li>Python, C, JavaScript, OCaml</li>
              <li>Java, Assembly, SQL, R</li>
              <li>React, Tailwind CSS, Firebase</li>
              <li>Git, VS Code, Linux, Docker</li>
              <li>Data Structures & Algorithms</li>
              <li>Memory Management, Systems Programming</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Microsoft Office, G Suite</li>
            </ul>
          </section>
        )}

        {activeTab === 'resume' && (
          <section className="bg-transparent rounded-xl shadow-md p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">📄 Resume</h3>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">📬 Contact</h3>
            <p>Email: brennansnyder207@gmail.com</p>
            <p className="mt-2">
              <a href="https://github.com/BrennanSnyder" className="text-blue-500">GitHub</a> ·
              <a href="https://linkedin.com/in/brennans207" className="text-blue-500 ml-2">LinkedIn</a>
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;