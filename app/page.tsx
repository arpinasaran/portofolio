import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Introduction Section - Maroon */}
        <section
          id="intro"
          className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 relative section-maroon-red"
        >
          <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-10 md:mb-0">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-cream-beige uppercase">
              Hi, I'm Arvin Wijayanto!
            </h1>
            <p className="font-sans text-xl md:text-2xl text-cream-beige/90">
              A passionate explorer in technology and innovation, constantly driven by curiosity and meaningful
              connections.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                variant="outline"
                className="bg-cream-beige text-maroon-red transition-all duration-300 font-medium"
                asChild
              >
                <Link href="https://linkedin.com/in/arvinwijayanto" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-cream-beige text-maroon-red transition-all duration-300 font-medium"
                asChild
              >
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=arvinwijayanto2@gmail.com&su=Halo%20Arvin&body=Hai%20Arvin%2C%20saya%20tertarik%20dengan%20portofoliomu!">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-cream-beige">
                <Image
                  src="/images/arvin-photo.jpg"
                  alt="Arvin Wijayanto"
                  width={320}
                  height={320}
                  className="object-cover object-[45%_60%]"
                  priority
                />
                <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-30 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-cream-beige" />
          </div>
        </section>

        {/* About Me Section - Forest Green */}
        <section id="about" className="py-16 px-6 md:px-12 section-forest-green">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-4 uppercase text-sm font-medium tracking-wider">
                About
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8">Know Me Further</h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-cream-beige">Eagerness to Explore</h3>
                <p className="text-lg leading-relaxed text-cream-beige/90">
                  My curiosity knows no bounds, pushing me to explore diverse areas beyond academic subjects alone. One
                  notable instance was during my recent holiday when I ventured into building a simple robotic car using
                  Arduino. This project not only challenged me to step outside my comfort zone but also ignited my
                  creativity, allowing me to see tangible results and experience genuine excitement when my creation
                  came to life. Such explorations broaden my perspective and constantly fuel my strategic thinking and
                  insatiable love for learning.
                </p>

                <div className="flex flex-wrap gap-2 justify-center my-6">
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">
                    Strategist
                  </Badge>
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">
                    Philomath
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-cream-beige">Leadership Personality</h3>
                <p className="text-lg leading-relaxed text-cream-beige/90">
                  My leadership style revolves around empathy, guidance, and collective enjoyment. A prime example was
                  during a class assignment to produce a musical video. Despite having no prior experience, I quickly
                  learned video production and assumed the role of director. My teammates, equally inexperienced, found
                  support and confidence through my leadership, resulting in a pleasant and successful shoot. Our
                  collaborative efforts culminated in receiving an 'A' grade, highlighting my effectiveness in managing
                  both project quality and team morale.
                </p>

                <div className="flex flex-wrap gap-2 justify-center my-6">
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">
                    Deliverer
                  </Badge>
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">
                    Empathizer
                  </Badge>
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">
                    Coach
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - Maroon */}
        <section id="education" className="py-16 px-6 md:px-12 section-maroon-red">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3 space-y-6">
                <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-2 uppercase text-sm font-medium tracking-wider">
                  Education
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige">My Education</h2>

                <p className="text-lg leading-relaxed text-cream-beige/90">
                  My educational journey has been a continuous quest for self-improvement and excellence. Starting from
                  a prestigious Islamic middle school in Central Java, I pushed myself to attend one of Indonesia's
                  top-ranked high schools, ultimately securing a place at Universitas Indonesia, the nation's best
                  university. Each step of my academic path reflects determination, adaptability, and a commitment to
                  growth. Yet, I see this as just the beginning—my ambitions extend further, envisioning advanced
                  studies culminating in a Ph.D. from a globally recognized university, empowering me to make
                  significant, lasting contributions to the world.
                </p>
              </div>

              <div className="w-full md:w-1/3 hidden md:flex justify-center">
                <div className="relative w-40 h-40">
                  <Image
                    src="/images/makara-ui-yellow.png"
                    alt="Makara UI Logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section - Forest Green */}
        <section id="experience" className="py-16 px-6 md:px-12 section-forest-green">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-4 uppercase text-sm font-medium tracking-wider">
                Experience
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8">Work Experience</h2>
            </div>

            <div className="space-y-8">
              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="inline-block px-2 py-0.5 bg-cream-beige/20 text-cream-beige rounded text-sm mb-2">
                    Present
                  </div>
                  <h3 className="text-xl font-bold text-cream-beige">AI Engineer Intern</h3>
                  <p className="text-lg text-cream-beige/80">Sobatbisnis</p>
                  <p className="mt-2 text-cream-beige/90">
                    Developing impactful AI solutions to enhance business intelligence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">Teaching Assistant Coordinator</h3>
                  <p className="mt-2 text-cream-beige/90">
                    Coordinating teaching assistants for challenging courses like Data Structures & Algorithms and
                    teaching foundational programming concepts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">Olympiad Tutor</h3>
                  <p className="mt-2 text-cream-beige/90">
                    Mentoring high school students for the National Olympiad in Informatics, guiding three students to
                    national finals.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8 text-center">
                Another Experience
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-cream-beige/30 bg-cream-beige/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cream-beige">Project Director - Datathon</h3>
                    <p className="mt-2 text-cream-beige/90">
                      Leading Indonesia's largest data science competition, fostering innovation among bright minds.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cream-beige/30 bg-cream-beige/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cream-beige">Vice Project Director - Referendum TSA UI</h3>
                    <p className="mt-2 text-cream-beige/90">
                      Managing the university-wide election process for TSA UI presidency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cream-beige/30 bg-cream-beige/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cream-beige">Volunteer - Jakarta Mengabdi</h3>
                    <p className="mt-2 text-cream-beige/90">
                      Engaged in impactful activities, teaching and empowering communities across Jakarta.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cream-beige/30 bg-cream-beige/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cream-beige">Volunteer - GDGOC Academic Team</h3>
                    <p className="mt-2 text-cream-beige/90">
                      Facilitating the KRITIS program, empowering high school students to address sustainable
                      development goals (SDGs) practically.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section - Maroon */}
        <section id="achievements" className="py-16 px-6 md:px-12 section-maroon-red">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-4 uppercase text-sm font-medium tracking-wider">
                Recognition
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8">My Achievement</h2>
            </div>

            <div className="space-y-6">
              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold">1st</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">Champion - Gov AI Hackathon 2024</h3>
                      <p className="mt-1 text-cream-beige/90">
                        Winner of national AI competition hosted by the Ministry of Finance, developing "Nusantap," an
                        app optimizing nutritional meals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold">3rd</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">3rd Runner-Up - Data Mining GEMASTIK 2024</h3>
                      <p className="mt-1 text-cream-beige/90">
                        Developed AI-based automation solutions for Jakarta's Super App.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold">2nd</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">
                        2nd Runner-Up - Most Outstanding Student Compsci UI
                      </h3>
                      <p className="mt-1 text-cream-beige/90">
                        Recognized for developing "Leximate," an app supporting dyslexic individuals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section - Forest Green */}
        <section id="projects" className="py-16 px-6 md:px-12 section-forest-green">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-4 uppercase text-sm font-medium tracking-wider">
                Portfolio
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8">My Project</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-cream-beige/30 overflow-hidden bg-cream-beige/10">
                <div className="h-48 relative">
                  <Image src="/images/nusantap-app.png" alt="Nusantap Project" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-30 mix-blend-overlay"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">Nusantap</h3>
                  <p className="mt-2 text-cream-beige/90">AI-driven meal optimization.</p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 overflow-hidden bg-cream-beige/10">
                <div className="h-48 relative">
                  <Image src="/images/jaki-app.jpg" alt="JAKI Report Automation" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-30 mix-blend-overlay"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">JAKI Report Automation</h3>
                  <p className="mt-2 text-cream-beige/90">Public report classification automation.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Maroon */}
        <section id="testimonials" className="py-16 px-6 md:px-12 section-maroon-red">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-4 uppercase text-sm font-medium tracking-wider">
                Feedback
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8">Testimonials</h2>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Future Mission Section - Forest Green */}
        <section id="future" className="py-16 px-6 md:px-12 section-forest-green">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-4 uppercase text-sm font-medium tracking-wider">
                Vision
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8">Future Mission</h2>
            </div>

            <div className="space-y-6 text-cream-beige/90">
              <p className="text-lg leading-relaxed">
                My aspiration is to become a CTO/CIO in a prominent tech company, leveraging my passion for designing
                impactful technology systems. My vision is to create intuitive, effective technological solutions that
                enhance organizational productivity, foster seamless human-technology interactions, and transform my
                workplace into a highly efficient and innovative environment.
              </p>
            </div>
          </div>
        </section>

        {/* Footer - Maroon */}
        <footer className="py-8 px-6 md:px-12 section-maroon-red">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-bold text-cream-beige">Arvin Wijayanto</h3>
              <p className="text-sm text-cream-beige/80">© {new Date().getFullYear()} All rights reserved</p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-cream-beige hover:text-maroon-red hover:bg-cream-beige/20 transition-all duration-300"
                asChild
              >
                <Link href="https://linkedin.com/in/arvinwijayanto" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-cream-beige hover:text-maroon-red hover:bg-cream-beige/20 transition-all duration-300"
                asChild
              >
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=arvinwijayanto2@gmail.com&su=Halo%20Arvin&body=Hai%20Arvin%2C%20saya%20tertarik%20dengan%20portofoliomu!">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
