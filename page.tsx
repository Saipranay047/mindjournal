import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, LineChartIcon, PenIcon, SearchIcon, ShieldIcon, HeartIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <PenIcon className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">MindJournal</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="rounded-lg">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-teal-600 hover:bg-teal-700 rounded-lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Mental Health Journey Starts Here
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Track your moods, record your thoughts, and gain insights into your emotional well-being with our
                    secure and intuitive journaling platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 rounded-full">
                      Start Journaling
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline" className="rounded-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?q=80&w=1000"
                width={550}
                height={550}
                alt="Person writing in journal with a cup of coffee"
                className="mx-auto aspect-video overflow-hidden rounded-3xl object-cover object-center sm:w-full lg:order-last shadow-xl"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to track and improve your mental well-being
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <PenIcon className="h-6 w-6 text-teal-500" />
                  <CardTitle>Journal Entries</CardTitle>
                  <CardDescription>
                    Create detailed entries with titles, dates, and rich text formatting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Express yourself freely with our intuitive editor. Tag entries to organize your thoughts.</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <LineChartIcon className="h-6 w-6 text-teal-500" />
                  <CardTitle>Mood Tracking</CardTitle>
                  <CardDescription>Visualize your emotional journey with interactive charts and graphs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Track patterns in your mood over time and gain insights into your emotional well-being.</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CalendarIcon className="h-6 w-6 text-teal-500" />
                  <CardTitle>Calendar View</CardTitle>
                  <CardDescription>
                    See your journaling history at a glance with our calendar visualization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Quickly navigate to past entries and maintain a consistent journaling practice.</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <SearchIcon className="h-6 w-6 text-teal-500" />
                  <CardTitle>Advanced Search</CardTitle>
                  <CardDescription>Find entries by keywords, tags, dates, or mood</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Powerful search capabilities help you revisit important moments and track recurring themes.</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ShieldIcon className="h-6 w-6 text-teal-500" />
                  <CardTitle>Privacy & Security</CardTitle>
                  <CardDescription>Your data is encrypted and protected</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>We prioritize your privacy with secure authentication and data protection measures.</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <HeartIcon className="h-6 w-6 text-teal-500" />
                  <CardTitle>Wellness Tools</CardTitle>
                  <CardDescription>Access guided breathing exercises and affirmations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Enhance your mental well-being with our collection of wellness resources and tools.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Track Your Mood Journey
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Visualize your emotional patterns over time with our intuitive mood tracking tools. Identify
                    triggers and celebrate progress.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500 p-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Daily mood check-ins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500 p-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Interactive mood charts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500 p-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Pattern recognition insights</span>
                  </li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000"
                width={550}
                height={400}
                alt="Mood tracking chart visualization"
                className="mx-auto aspect-video overflow-hidden rounded-3xl object-cover object-center shadow-xl"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your Mental Health Journey Today
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of users who are improving their mental well-being through journaling
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 rounded-full">
                    Create Free Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 MindJournal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-gray-500 underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
