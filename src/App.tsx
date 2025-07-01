"use client"

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "./components/ui/button.tsx"
import { Card, CardContent } from "./components/ui/card.tsx"

export default function App() {

  const projects = [
              {
                title: "Image Toolbox",
                description: "CLI Application using Go to manipulate images",
                tech: ["Go", "Cobra"],
              },
              {
                title: "REST API Platform",
                description: "Developed comprehensive REST APIs with Java Spring Boot for e-commerce platform.",
                tech: ["Java", "Spring Boot", "MySQL"],
              },
            ]

  return (
    <div className="min-h-screen bg-[#f5f1e8] relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light leading-tight">
                I'm a <span className="font-bold text-gray-900">backend</span> developer
              </h1>
              <p className="text-base sm:text-lg text-gray-600 font-light">- Mostly developing in Go and Java.</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/lagoela"
                className="p-2 sm:p-3 hover:bg-gray-200 rounded-full transition-colors touch-manipulation"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </a>
              <a
                href="https://linkedin.com/in/enzolagoela"
                className="p-2 sm:p-3 hover:bg-gray-200 rounded-full transition-colors touch-manipulation"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </a>
              <a
                href="mailto:lagoela.dev@gmail.com"
                className="p-2 sm:p-3 hover:bg-gray-200 rounded-full transition-colors touch-manipulation"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </a>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Go", "Java", "PostgreSQL", "Docker", "React"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-white/60 rounded-full text-xs sm:text-sm text-gray-700 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative order-2">
            {/* Profile Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="relative mb-3 sm:mb-4">
                  <img
                    src="me.png"
                    alt="Enzo Lagoela"
                    className="w-full h-64 sm:h-80 object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 lg:absolute lg:-bottom-8 lg:-right-4 xl:-right-8">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border">
                <div className="text-center lg:text-left space-y-1">
                  <p className="text-xs sm:text-sm text-gray-600">This is</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900">ENZO!</h2>
                  <Button
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 sm:px-6 text-sm sm:text-base touch-manipulation min-h-[44px]"
                    onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Click me to know my work!
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <section id="work" className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">My Work</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Here are some of the projects I've been working on, focusing on backend systems and API development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Let's Work Together</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Feel free to contact me for any collaboration, freelance opportunities, or just to connect and chat about backend development!
          </p>
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 sm:px-8 text-sm sm:text-base touch-manipulation min-h-[44px]"
            onClick={() => (window.location.href = "mailto:enzo@lagoela.me")}
          >
            Get In Touch
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
