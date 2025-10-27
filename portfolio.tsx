"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Database,
  Server,
  Smartphone,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Calendar,
  Eye,
  Star,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const socialLinks = [
  { Icon: Github, href: "https://github.com/mintemulu" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/mintesinotmulu/" },
  { Icon: Mail, href: "mailto:mintesinotmulu18@gmail.com" },
];

  const skills = {
    frontend: ["React.js", "Next.js", "React Native", "Expo","TypeScript", "Tailwind CSS", "Redux", "Redux toolkit","HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "SQL","firebase"],
    tools: ["Git","AWS", "Vercel", "Postman", "VS Code","Netlify"],
  }

  const projects = [
  {
    title: "Patient Medical Registration Portal",
    description: "A web-based portal for hospitals where admins can register doctors and patients, and doctors can manage patient medical records. Features role-based access control and secure authentication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "@emotion/react", "JavaScript"],
    github: "https://github.com/mintemulu/completeproject",
    live: "https://patient-record-management-system-six.vercel.app/",
    image: "/medical.jpg",
    stats: { stars: 0, views: 0 },
  },
  
  {
    title: "Finance Manager",
    description: "A web application to manage personal finances, track income, expenses, and visualize monthly spending patterns with interactive charts.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "CSS"],
    github: "https://github.com/mintemulu/myapp-personal-finance-manager",
    live: "https://myapp-five-dusky.vercel.app/",
    image: "/finance.jpg",
    stats: { stars:0, views:0},
  },
  
  {
    title: "Amazon Frontend Clone",
    description: "A frontend clone of Amazon e-commerce website featuring product listings, shopping cart, and responsive UI. Focused on recreating Amazon’s design and layout.",
    tech: ["React.js", "CSS", "JavaScript", "Redux"],
    github: "https://github.com/mintemulu/amazon-frontend-react",
    live: "https://amazon-frontend-app.netlify.app/",
    image: "/amazon.jpg",
    stats: { stars: 124, views: 2300 },
  },
  {
    title: "Apple Clone",
    description: "A frontend clone of Apple’s official website showcasing products, responsive design, and interactive UI elements.",
    tech: ["React.js",  "CSS", "JavaScript", "@emotion/react"],
    github: "https://github.com/mintemulu/apple-clone",
    live: "https://apple-project-yakw.vercel.app/",
    image: "/apple.jpg",
    stats: { stars: 0, views: 0 },
  },
  {
    title: "Netflix Frontend Clone",
    description: "A frontend clone of Netflix, including movie listings, responsive layout, and interactive components. Built to practice API integration and frontend architecture.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Redux"],
    github: "https://github.com/mintemulu/netflix-clone",
    live: "https://eehjnkk.netlify.app/",
    image: "/netflix.jpg",
    stats: { stars: 124, views: 2300 },
  },
  ]

  const experiences = [
    {
  title: "Junior Developer Intern",
  company: "Ministry of Innovation and Technology",
  period: "Sept 2024 - Jan 2025",
  location: "Addis Ababa, Ethiopia (On-site)",
  description:
    "Developed the Patient Medical Registration Portal using the MERN stack (MongoDB, Express.js, React.js, Node.js) with role-based access control for admins and doctors. Integrated secure authentication and patient record management features. Collaborated with a team of six interns to gain hands-on experience in IoT, working with Arduino components and sensors. Strengthened backend API development, database management, and responsive UI design skills during the internship.",
},

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-400/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
            >
              {"<Dev />"}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "education", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 relative ${
                    activeSection === item ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button whileTap={{ scale: 0.95 }} className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4 space-y-4"
              >
                {["home", "about", "skills", "projects", "experience", "education", "contact"].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize py-2 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="text-white">Developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Junior developer passionate about building modern web applications with the MERN stack
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-3 text-lg shadow-lg shadow-cyan-500/25"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank" // 👈 opens in a new tab
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="text-cyan-400" size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">About Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-2xl"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                >
                  <img
                    src="/my pic.png"
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate junior MERN stack developer eager to apply my skills in building modern web
                applications. I recently completed an internship at the Ministry of Innovation and Technology where I
                gained hands-on experience with real-world projects.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm enthusiastic about learning new technologies and continuously improving my skills. My focus is on
                creating clean, efficient code and building intuitive user interfaces. I'm looking for opportunities to
                grow as a developer and contribute to meaningful projects.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-black/40 rounded-lg border border-cyan-500/20 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-cyan-400">15+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-black/40 rounded-lg border border-green-500/20 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-green-400">1+</div>
                  <div className="text-sm text-gray-400">Year Experience</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-black/40 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Smartphone className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white">Frontend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-black/40 border-green-500/30 hover:border-green-500/60 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Server className="text-green-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white">Backend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-black/40 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Database className="text-blue-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white">Tools & Others</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card className="bg-black/40 border-cyan-500/30 hover:border-cyan-400/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-cyan-500/20 to-transparent flex items-center justify-center"
                      >
                        <div className="flex space-x-4">
                          <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-black/60 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-500/80 transition-all duration-300"
                          >
                            <Github size={20} />
                          </motion.a>
                          <motion.a
                            href={project.live}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-black/60 rounded-full text-green-400 hover:text-white hover:bg-green-500/80 transition-all duration-300"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        </div>
                      </motion.div>

                      {/* Stats Overlay */}
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs"
                        >
                          <Star size={12} className="text-yellow-400" />
                          <span className="text-white">{project.stats.stars}</span>
                        </motion.div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.1 }}
                          className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs"
                        >
                          <Eye size={12} className="text-cyan-400" />
                          <span className="text-white">{project.stats.views}</span>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div
                      className="p-6"
                      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      {/* Glowing bottom border on hover */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 origin-left"
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black/40 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Education</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="bg-black/40 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Bachelor of Science in Electrical and Computer Engineering</h3>
                      <p className="text-cyan-400 font-medium">Jimma University</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar size={16} className="mr-1" />
                        2021- 2025
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={16} className="mr-1" />
                        Jimma , Ethiopia
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                   <span>
                    Studied core computer science concepts including data structures, algorithms, software engineering, and web development. Completed coursework in React, Node.js, and database management systems, and developed the Patient Medical Registration Portal project with role-based access control and secure backend functionality.
                  </span>

                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="bg-black/40 border-green-500/30 hover:border-green-500/60 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Evangadi Tech</h3>
                      <p className="text-green-400 font-medium">Online Learning Platform</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar size={16} className="mr-1" />
                        2023
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={16} className="mr-1" />
                        Online
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Intensive training in modern web development technologies including the MERN stack (MongoDB,
                    Express.js, React.js, Node.js). Developed multiple full-stack applications
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{"Let's work together"}</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <motion.div whileHover={{ x: 10 }} className="flex items-center">
                  <Mail className="text-cyan-400 mr-4" size={20} />
                  <span className="text-gray-300">mintesinotmulu18@gmail.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center">
                  <MapPin className="text-cyan-400 mr-4" size={20} />
                  <span className="text-gray-300">Addis Ababa,Ethiopia</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        placeholder="Your Name"
                        className="bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => window.location.href = "mailto:mintesinotmulu18@gmail.com"}
                      className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white shadow-lg shadow-cyan-500/25">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-8 px-4 border-t border-cyan-500/20 bg-black/20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 MERN Stack Developer. Built with React & Next.js</p>
        </div>
      </motion.footer>
    </div>
  )
}
