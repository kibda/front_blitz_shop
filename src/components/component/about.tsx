
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 space-y-8 lg:space-y-12">
            <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-[1fr_400px]">
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Elevate Your Gaming Experience
                </h1>
                <p className="text-gray-500 md:text-xl lg:text-lg dark:text-gray-400">
                  At Acme Gaming, we re passionate about creating the ultimate gaming setup for enthusiasts and
                  professionals alike. Our mission is to provide high-quality, cutting-edge products that enhance your
                  gaming performance and immersion.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Shop Now
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 lg:space-y-12">
            <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Explore Our Product Categories
              </h2>
              <p className="text-gray-500 md:text-xl lg:text-lg dark:text-gray-400">
                Discover the best gaming gear to elevate your setup.
              </p>
            </div>
            <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <ComputerIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Gaming PCs</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Powerful, customizable gaming rigs for the ultimate performance.
                  </p>
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                    href="#"
                  >
                    Shop Now
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <MouseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Peripherals</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    High-performance mice, keyboards, and other gaming accessories.
                  </p>
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                    href="#"
                  >
                    Shop Now
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <HeadphonesIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Accessories</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enhance your gaming experience with our selection of accessories.
                  </p>
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                    href="#"
                  >
                    Shop Now
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 space-y-8 lg:space-y-12">
            <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Committed to Sustainability
              </h2>
              <p className="text-gray-500 md:text-xl lg:text-lg dark:text-gray-400">
                At Blitz shop, we believe in responsible and ethical practices that minimize our environmental impact.
              </p>
            </div>
            <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <RecycleIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Recycling Program</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We offer a comprehensive recycling program for your old gaming gear.
                  </p>
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                    href="#"
                  >
                    Learn More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <LeafIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Eco-Friendly Packaging</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our products are shipped in sustainable, recyclable packaging.
                  </p>
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                    href="#"
                  >
                    Learn More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <GiftIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Charitable Initiatives</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We support various charitable organizations in the gaming community.
                  </p>
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                    href="#"
                  >
                    Learn More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 lg:space-y-12">
            <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Meet the Team</h2>
              <p className="text-gray-500 md:text-xl lg:text-lg dark:text-gray-400">
                The passionate individuals behind Blitz shop.
              </p>
            </div>
            <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <img
                    alt="Team Member"
                    className="rounded-full"
                    height="96"
                    src="/dr_walid.jpg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Dr.walid</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder & COO</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    dr.walid is an experienced operations executive with a deep understanding of the gaming industry.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>
                    <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <img
                    alt="Team Member"
                    className="rounded-full"
                    height="96"
                    src="/homeless_skander.png"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Homeless Skander</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder & CEO</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Skander is a seasoned entrepreneur with a passion for gaming and technology.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>
                    <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <img
                    alt="Team Member"
                    className="rounded-full"
                    height="96"
                    src="/nemer.jpg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Nemer Pet</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder & COO</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Nemer is an experienced operations executive with a deep understanding of the gaming industry.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>
                    <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <CardHeader>
                  <img
                    alt="Team Member"
                    className="rounded-full"
                    height="96"
                    src="/dedication_edo.png"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Dedication Edo</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder & COO</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Edo is an experienced operations executive with a deep understanding of the gaming industry.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>
                    <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function MouseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  )
}


function RecycleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
