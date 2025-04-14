import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Github, Linkedin, Mail, Twitter, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FlipCard } from "@/components/layout/flipCard"

// Mock workshops data
const workshops = [
  {
    id: 1,
    title: "Advanced React Patterns",
    description: "Learn advanced React patterns and techniques to build scalable applications.",
    date: "April 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    image: "/placeholder.svg?height=300&width=500",
    status: "Upcoming",
    slug: "advanced-react-patterns",
  },
  {
    id: 2,
    title: "TypeScript for JavaScript Developers",
    description: "A comprehensive introduction to TypeScript for experienced JavaScript developers.",
    date: "May 10, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Tech Hub, San Francisco",
    image: "/placeholder.svg?height=300&width=500",
    status: "Upcoming",
    slug: "typescript-for-javascript-developers",
  },
  {
    id: 3,
    title: "Building with Next.js",
    description: "Explore the features of Next.js and learn how to build performant web applications.",
    date: "March 5, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Online",
    image: "/placeholder.svg?height=300&width=500",
    status: "Past",
    slug: "building-with-nextjs",
  },
]


export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="heading-xl mb-4">Vinícius Simões</h1>
              <p className="text-muted-foreground text-sm mb-2 font-medium">aka, Bigeus...</p>
              <h2 className="heading-md text-muted-foreground">Full Stack Developer with a growing expertise in Cybersecurity</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              Passionate about building secure, accessible applications and currently deepening my skills in ethical hacking, secure coding, and system hardening.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border animate-pulse-glow m-12 md:m-12">
              {/* <Image
                src="/FotoBigeus.jpg"
                alt="John Doe"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              /> */}
              <FlipCard />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              About
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">01</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="body-lg mb-6">
              I'm a Full Stack Developer with over 5 years of experience in modern web technologies, actively deepening my expertise in Cybersecurity,
              including ethical hacking, secure coding practices, and system hardening.
            </p>
            <p className="body-lg mb-6">
              Currently studying Systems Analysis and Development at FACENS and expanding my knowledge in ethical hacking,
              penetration testing, and cyber defense techniques.
            </p>
            <p className="body-lg mb-6">
              Beyond development, I enjoy exploring the intersection of usability and security—ensuring that applications are both elegant and safe.
              I'm also passionate about knowledge-sharing,
              having taught English and and worked as a teaching assistant in Database and Object-Oriented Programming courses for a total of 1.5 years.
            </p>
            {/* <p className="body-lg mb-10">
              I also regularly conduct{" "}
              <Link href="/workshops" className="font-medium underline underline-offset-4">
                workshops and training sessions
              </Link>{" "}
              for developers looking to level up their skills in modern web technologies.
            </p> */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read My Blog</Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg">
                <Link href="/workshops">View Workshops</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Featured Projects
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
          </h2>
          <Link href="/projects" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Projects
          </Link>
        </div>

        <div className="grid gap-24">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                    0{project}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                    Project {project}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    A detailed description of this project, including the problem it solves, the technologies used, and
                    the challenges overcome during development.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/projects/project-${project}`}>View Project</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src={`/placeholder.svg?height=270&width=480`}
                      alt={`Project ${project}`}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops Section */}
      {/* <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Workshops
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">03</span>
          </h2>
          <Link href="/workshops" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Workshops
          </Link>
        </div> */}

      {/*  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={workshop.status === "Upcoming" ? "default" : "secondary"}>{workshop.status}</Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{workshop.title}</CardTitle>
                <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{workshop.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/workshops/${workshop.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Skills Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Skills
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">04</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="body-lg mb-6">
              I specialize in the following technologies and areas:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Full Stack Development</strong></li>
              <li><strong>React</strong> - Building responsive and interactive user interfaces</li>
              <li><strong>Next.js</strong> - Server-side rendering and API integration</li>
              <li><strong>Java (Spring Boot)</strong> - Backend development with secure RESTful APIs</li>
              <li><strong>Node.js</strong> - Scalable server-side applications and RESTful APIs</li>
              <li><strong>Prisma ORM</strong> - Type-safe database access and modeling</li>
              <li><strong>Tailwind CSS</strong> - Utility-first CSS framework for fast UI development</li>
              <li style={{marginBottom: '2rem'}}><strong>Bootstrap</strong> - Rapid prototyping and responsive design</li>
            </ul>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Cybersecurity</strong></li>
              <li><strong>Penetration Testing</strong> - Simulating attacks to identify and fix vulnerabilities</li>
              <li><strong>OWASP Top 10</strong> - Knowledge of common vulnerabilities and how to mitigate them</li>
              <li><strong>Secure Coding Practices</strong> - Writing secure code to prevent common exploits</li>
              <li><strong>Vulnerability Assessment</strong> - Identifying weaknesses in software and systems</li>
              <li><strong>Cryptography</strong> - Implementing encryption and security protocols for data protection</li>
            </ul>
            {/* <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/skills">Explore More Skills</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-custom section-spacing">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Contact
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">05</span>
            </h2>
            <p className="body-lg mb-6">
              Interested in collaborating or just want to chat about secure development or tech? Feel free to reach out.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/bigeus" target="_blank">
                <Github className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/in/bigeus/" target="_blank">
                <Linkedin className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="mailto:contato@bigeus.com" target="_blank">
                <Mail className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://twitter.com/bigeus" target="_blank">
                <Twitter className="text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div>
            <form
              action="https://formsubmit.co/contato@bigeus.com"
              method="POST"
              className="space-y-4"
            >
              {/* Redirecionamento para a página de obrigado */}
              <input type="hidden" name="_next" value="https://bigeus.com/thank-you" />

              {/* Anti-spam (honeypot) */}
              <input type="hidden" name="_honey" style={{ display: 'none' }} />

              {/* Desativa CAPTCHA do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Nome */}
              <div>
                <label className="block text-sm mb-2" htmlFor="name">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="w-full p-3 border border-border rounded"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2" htmlFor="email">
                  Seu email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Seu email"
                  className="w-full p-3 border border-border rounded"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm mb-2" htmlFor="message">
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Sua mensagem"
                  className="w-full p-3 border border-border rounded"
                  rows={5}
                ></textarea>
              </div>

              {/* Botão de envio */}
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>

          </div>
        </div>
      </section>
    </div>
  )
}
