import { Switch } from "@/components/ui/switch"
import { useState } from "react"
export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`${darkMode ? "dark" : ""} bg-background text-foreground min-h-screen font-sans`}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-md">
        <h1 className="text-xl font-bold"></h1>
        <nav className="space-x-4 flex items-center">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#contact" className="hover:text-accent">Contact</a>

          {/* Dark/Light Switch */}
          <Switch checked={darkMode} onCheckedChange={setDarkMode} className="ml-4" />
        </nav>
      </header>


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 space-y-6 bg-accent/10">
        <h2 className="text-5xl font-extrabold">Hi, I'm Arpit</h2>
        <p className="text-lg max-w-xl">
          Loading...
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 max-w-4xl mx-auto space-y-8">
        <h3 className="text-3xl font-bold text-center">About Me</h3>
        <p className="text-center text-lg">
          Loading...
        </p>
      </section>
      {/* Contact / Footer */}
      <footer id="contact" className="py-12 px-4 bg-muted text-muted-foreground text-center space-y-4">
        <p>Loading...</p>
      </footer>
    </div>
  )
}
