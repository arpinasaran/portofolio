import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react"
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
              Hi, I&apos;m Arvin Wijayanto!
            </h1>
            <p className="font-sans text-xl md:text-2xl text-cream-beige/90">
              AI/ML enthusiast focused on Indonesian NLP and multilingual LLM systems. Research and competition track record across Bahasa Indonesia and regional languages.
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
                <Link href="https://github.com/arpinasaran" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-cream-beige text-maroon-red transition-all duration-300 font-medium"
                asChild
              >
                <Link href="mailto:arvinwijayanto2@gmail.com">
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
                <h3 className="font-serif text-2xl font-bold text-cream-beige">Indonesian NLP, by Choice</h3>
                <p className="text-lg leading-relaxed text-cream-beige/90">
                  I spend most of my time on Bahasa Indonesia and Javanese NLP problems: building datasets, fine-tuning encoder models (IndoBERT, IndoBERTweet), and lately fine-tuning open-source LLMs (Qwen3.5 via Unsloth/LoRA) for regional-language use cases. My work sits between research (with Dr. Fajri Koto at MBZUAI) and applied competitions/hackathons.
                </p>

                <div className="flex flex-wrap gap-2 justify-center my-6">
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">Indonesian NLP</Badge>
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">LLM Fine-tuning</Badge>
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">Dataset Curation</Badge>
                  <Badge className="bg-cream-beige text-forest-green hover:bg-cream-beige/80 text-sm py-2 px-4 font-medium">Multilingual Retrieval</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-cream-beige">Leading and Teaching</h3>
                <p className="text-lg leading-relaxed text-cream-beige/90">
                  Outside research, I led the largest student-run data competition in Indonesia (Datathon RISTEK Fasilkom UI 2025, 800+ participants, IDR 500M sponsorship), and mentor 100+ members as Data Science Lead at GDG Fasilkom UI. On the side, I coach high-school olympiad teams (NOI, NOAI), with multiple coachees medaling at national level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - Maroon */}
        <section id="education" className="py-16 px-6 md:px-12 section-maroon-red">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-4 uppercase text-sm font-medium tracking-wider">
                Education
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige">My Education</h2>
            </div>
            <Card className="border-cream-beige/30 bg-cream-beige/10">
              <CardContent className="p-6 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-cream-beige">Universitas Indonesia — Faculty of Computer Science</h3>
                  <span className="text-sm text-cream-beige/80">Aug 2023 — Present</span>
                </div>
                <p className="text-cream-beige/90">B.Sc. Computer Science · GPA 3.80 / 4.00</p>
                <p className="text-cream-beige/90">
                  Tanoto Foundation Scholarship Awardee · 3rd Place, Outstanding Student Award (Mawapres), Fasilkom UI 2025
                </p>
                <p className="text-cream-beige/80 text-sm pt-2">
                  Relevant coursework: Artificial Intelligence, Data Science, Information Retrieval, Statistics, Database, Big Data.
                </p>
              </CardContent>
            </Card>
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
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-cream-beige">AI Engineer Intern</h3>
                    <span className="text-sm text-cream-beige/80">Dec 2025 — Feb 2026</span>
                  </div>
                  <p className="text-lg text-cream-beige/80">Pintarly</p>
                  <p className="mt-2 text-cream-beige/90">
                    Indonesia&apos;s fastest-growing edutech startup, reaching 100,000+ users within 4 months. Engineered multi-personality Bahasa Indonesia AI chatbots and a Manim-based educational video generation pipeline (30 chapters in 7 subjects) with three-provider TTS fallback and 2.8x throughput improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-cream-beige">AI &amp; Data Engineer</h3>
                    <span className="text-sm text-cream-beige/80">Jun — Aug 2025</span>
                  </div>
                  <p className="text-lg text-cream-beige/80">Sobat Bisnis Group (SBG)</p>
                  <p className="mt-2 text-cream-beige/90">
                    Indonesian enterprise IT and AI consulting firm backed by Mayapada Group. Prototyped a LangChain text-to-SQL summarization pipeline in Bahasa Indonesia; developed Indonesian KYC document extraction (KTP, SIM) using Qwen-VL, time-series food inventory forecasting, and an MVP image-to-caption automation for Shopee marketplace.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-cream-beige">Teaching Assistant</h3>
                    <span className="text-sm text-cream-beige/80">2024 — Present</span>
                  </div>
                  <p className="text-lg text-cream-beige/80">Universitas Indonesia (Fasilkom UI)</p>
                  <p className="mt-2 text-cream-beige/90">
                    Teaching Assistant for Data Structures &amp; Algorithms and Foundation of Programming 2, authoring problem-solving exercises, leading in-class sessions, and mentoring undergraduate students.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-cream-beige">Olympiad Coach</h3>
                    <span className="text-sm text-cream-beige/80">2024 — Present</span>
                  </div>
                  <p className="text-lg text-cream-beige/80">KOJA Olimpiade &amp; Private Coaching</p>
                  <p className="mt-2 text-cream-beige/90">
                    Coached 100+ high-school students for NOI (National Olympiad in Informatics) and NOAI (National Olympiad in AI); multiple coachees won medals and finalist placements at the national level.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8 text-center">
                Leadership &amp; Service
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-cream-beige/30 bg-cream-beige/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cream-beige">Project Officer · Datathon RISTEK 2025</h3>
                    <p className="mt-2 text-cream-beige/90">
                      Led a 30-person organizing team for the largest student-run data competition in Indonesia (800+ participants); secured IDR 500M sponsorship, ran a 500+ attendee offline workshop with national media partner coverage and Indonesian minister attendance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cream-beige/30 bg-cream-beige/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cream-beige">Data Science Lead · GDG Fasilkom UI 2025</h3>
                    <p className="mt-2 text-cream-beige/90">
                      Mentored 100+ members through an end-to-end data science curriculum from fundamentals to advanced topics; designed workshops, study groups, and project guidance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cream-beige/30 bg-cream-beige/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cream-beige">Vice Project Director · Referendum TSA UI</h3>
                    <p className="mt-2 text-cream-beige/90">
                      Managed the university-wide election process for TSA UI presidency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cream-beige/30 bg-cream-beige/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cream-beige">Volunteer · Jakarta Mengabdi &amp; GDGOC Academic Team</h3>
                    <p className="mt-2 text-cream-beige/90">
                      Engaged in community teaching activities across Jakarta; facilitated the KRITIS program empowering high-school students to address sustainable development goals.
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8">Achievements</h2>
            </div>

            <div className="space-y-6">
              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">1st</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">Innovation Frontier #1 — Bank Indonesia &amp; OJK Hackathon 2025</h3>
                      <p className="mt-1 text-cream-beige/90">SRIKANDI: multi-modal AI for village cooperative intervention across 83,762 Indonesian villages.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">1st</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">Champion — Gov-AI Hackathon Kementerian Keuangan 2024 (IDR 50M)</h3>
                      <p className="mt-1 text-cream-beige/90">NutriAI: ResNet50 + OpenAI fine-tuned Bahasa Indonesia chatbot + recommender for Indonesia&apos;s Free Nutritious Meals (MBG) program.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">1st</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">1st Place — FIT Competition 2025</h3>
                      <p className="mt-1 text-cream-beige/90">Satellite image segmentation and weather classification (100+ teams).</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">2nd</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">2nd Place — ParkTheGate Hackathon 2025</h3>
                      <p className="mt-1 text-cream-beige/90">ALPR license-plate recognition using YOLO and OpenCV.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">HM</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">Gemastik 2025 Honorable Mention + Rank 1 Leaderboard</h3>
                      <p className="mt-1 text-cream-beige/90">Aksara Jawa Hanacaraka OCR: no-internet competition coded from scratch, highest accuracy across all teams using ResNet.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">HM</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">Gemastik 2024 Honorable Mention + Publication</h3>
                      <p className="mt-1 text-cream-beige/90">JAKI citizen-report classification (IndoBERTweet + Continual Learning, F1 Micro 0.7465). Published in Buletin Pagelaran Mahasiswa Nasional Bidang TIK, Vol. 1, Jun 2024.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">3rd</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">3rd Place — Outstanding Student Award (Mawapres), Fasilkom UI 2025</h3>
                      <p className="mt-1 text-cream-beige/90">Faculty-level award recognizing academic and extracurricular achievement.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">★</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">Best Presentation — Airnology Datathon 2024</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">★</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">Bronze Medal — OSN Informatika 2022 (Indonesian National Science Olympiad)</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cream-beige rounded-full p-3 text-maroon-red font-bold min-w-[3rem] text-center">★</div>
                    <div>
                      <h3 className="text-xl font-bold text-cream-beige">Finalist — ICPC Regional Asia-Jakarta 2024</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section - Forest Green */}
        <section id="projects" className="py-16 px-6 md:px-12 section-forest-green">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-cream-beige/20 text-cream-beige rounded-md mb-4 uppercase text-sm font-medium tracking-wider">
                Portfolio
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-2">Research &amp; Projects</h2>
              <p className="text-cream-beige/80 text-sm">Decks and writeups available on request.</p>
            </div>

            <h3 className="font-serif text-2xl font-bold text-cream-beige mt-8">Research &amp; Publications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">Culturally Aware Indonesian NLP Research</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">Ongoing · with Dr. Fajri Koto (MBZUAI) &amp; Dr. Rahmad Mahendra (Fasilkom UI)</p>
                  <p className="mt-2 text-cream-beige/90">
                    Systematic review and evaluation of 20+ Indonesian NLP benchmarks against cultural relevance criteria; designing annotation guidelines grounded in 11 cultural proxy dimensions (Liu et al., 2025).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">JAKI Citizen Report Classification</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">Gemastik 2024 HM · Published, Buletin Mahasiswa Nasional TIK Vol. 1</p>
                  <p className="mt-2 text-cream-beige/90">
                    Curated, preprocessed, and tokenized a 161,547-report Bahasa Indonesia dataset. Fine-tuned IndoBERTweet with Continual Learning (replay buffer), achieving F1 Micro 0.7465.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">IndoMath</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">Research contribution · MBZUAI-led collaboration</p>
                  <p className="mt-2 text-cream-beige/90">
                    Contributed to a benchmark evaluating global frontier LLMs (GPT, Gemini, Claude, Qwen) on Indonesian culturally-grounded mathematics questions in Bahasa Indonesia.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="font-serif text-2xl font-bold text-cream-beige mt-10">Competitions &amp; Hackathons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">Merdesa</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">Lead Architect · 1st Submission Digdaya Hackathon 2026 (BI &amp; OJK)</p>
                  <p className="mt-2 text-cream-beige/90">
                    Javanese multidialect (Ngoko, Krama, Ngapak) WhatsApp AI agent for the Indonesian government Village Cooperative program. Fine-tuning Qwen3.5-Instruct via LoRA bf16 (Unsloth) for &gt;90% transaction-extraction accuracy vs ~65% GPT-4 baseline.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">SRIKANDI</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">Innovation Frontier #1 · BI–OJK Hackathon 2025</p>
                  <p className="mt-2 text-cream-beige/90">
                    Multi-modal AI for village cooperative intervention across 83,762 Indonesian villages: IndoBERT + BERTopic-style topic modelling, U-Net for satellite land-use segmentation, multi-modal NN fusion, and a personalized Parent-Child Retrieval RAG chatbot.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">NutriAI</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">Juara 1 (IDR 50M) · Gov-AI Hackathon Kemenkeu 2024</p>
                  <p className="mt-2 text-cream-beige/90">
                    AI pipeline for the MBG (Free Nutritious Meals) program: ResNet50 for nutritional-deficiency detection from child photos, OpenAI-based Bahasa Indonesia Q&amp;A chatbot, and a recommendation system for personalized meal plans.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">Satria Data NLP Classification</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">National Data Science Competition 2024 &amp; 2025 (Semifinalist 2025)</p>
                  <p className="mt-2 text-cream-beige/90">
                    Bahasa Indonesia text classification (emotion, topic) experimenting across IndoBERT, IndoBERTweet, BERT, BERT+GBT hybrid, with data augmentation, layer freezing, pseudo-labeling, stacking, and k-fold CV.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">Bobobu Health AI Backend</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">Client work · FK UIN Jakarta Pilmapres submission</p>
                  <p className="mt-2 text-cream-beige/90">
                    Three multimodal AI backend features: NutriBot (Bahasa Indonesia chatbot grounded on AKG 2019), NutriScan (food image analysis via GPT-4V), Conjunctiva (anemia detection from eye images). Stack: Hono, Cloudflare Workers, D1.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cream-beige">Multi-lingual Polyglot Search Engine</h3>
                  <p className="text-sm italic text-cream-beige/70 mt-1">Information Retrieval project</p>
                  <p className="mt-2 text-cream-beige/90">
                    Multilingual semantic search engine using BGE, Jina, and Qwen embedding models, with multi-language query expansion to improve cross-lingual recall across Bahasa Indonesia and other languages.
                  </p>
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-beige mb-8">Where I&apos;m Going</h2>
            </div>

            <div className="space-y-6 text-cream-beige/90">
              <p className="text-lg leading-relaxed">
                I want to keep building Indonesian-first AI: language models that understand Bahasa Indonesia and regional languages the way Indonesians actually speak them, evaluated against benchmarks that take culture seriously. Near-term, that means shipping Merdesa beyond a hackathon proposal, continuing cultural-NLP research with MBZUAI, and joining a team where Indonesian-language AI is a first-class problem.
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
                <Link href="https://github.com/arpinasaran" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-cream-beige hover:text-maroon-red hover:bg-cream-beige/20 transition-all duration-300"
                asChild
              >
                <Link href="mailto:arvinwijayanto2@gmail.com">
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
