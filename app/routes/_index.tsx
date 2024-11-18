import type { MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'Leah Parchinski Design' },
    { name: 'description', content: 'Creative Solutions for Your Business' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  ];
};

export default function Index() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-purple-100 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-200 mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-200 mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.div>

      {/* Header */}
      <motion.header
        className="py-8 px-4 text-center relative z-10"
        variants={itemVariants}
      >
        <h1 className="text-4xl font-serif text-teal-800 mb-2">
          Leah Parchinski Design
        </h1>
        <p className="text-purple-700">Creative Solutions for Your Business</p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        className="container mx-auto px-4 py-8 relative z-10"
        variants={containerVariants}
      >
        {/* Creative Partnering Section */}
        <motion.section className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-serif mb-4 text-teal-800">
            CREATIVE PARTNERING is our SPECIALTY
          </h2>
          <p className="mb-4 text-purple-700">
            We specialize in making the most out of you!
          </p>
          <p className="mb-4">
            Years of experience partnering up with top consulting companies,
            in-house design teams and small businesses, has taught us one
            thing...
          </p>
          <p className="font-bold mb-4 text-teal-800">
            You are already awesome.
          </p>
          <p>
            What we bring to the table is unique, fresh new ideas and creative
            solutions. We offer specific help with branding, print projects,
            social media and more.
          </p>
        </motion.section>

        {/* Improved Services Diagram */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="relative w-full h-80">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <linearGradient
                  id="circleGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#7e22ce" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="url(#circleGradient)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <circle cx="200" cy="140" r="60" fill="#0d9488" opacity="0.2" />
                <text
                  x="200"
                  y="135"
                  textAnchor="middle"
                  fill="#0d9488"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Small
                </text>
                <text
                  x="200"
                  y="155"
                  textAnchor="middle"
                  fill="#0d9488"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Businesses
                </text>
              </motion.g>
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <circle cx="130" cy="260" r="60" fill="#7e22ce" opacity="0.2" />
                <text
                  x="130"
                  y="255"
                  textAnchor="middle"
                  fill="#7e22ce"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Consulting
                </text>
                <text
                  x="130"
                  y="275"
                  textAnchor="middle"
                  fill="#7e22ce"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Firms
                </text>
              </motion.g>
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <circle cx="270" cy="260" r="60" fill="#0d9488" opacity="0.2" />
                <text
                  x="270"
                  y="245"
                  textAnchor="middle"
                  fill="#0d9488"
                  fontSize="16"
                  fontWeight="bold"
                >
                  In-house
                </text>
                <text
                  x="270"
                  y="265"
                  textAnchor="middle"
                  fill="#0d9488"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Design
                </text>
                <text
                  x="270"
                  y="285"
                  textAnchor="middle"
                  fill="#0d9488"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Teams
                </text>
              </motion.g>
            </svg>
          </div>
        </motion.section>

        {/* Capabilities Section */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-serif mb-8 text-center text-teal-800">
            OUR CAPABILITIES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">
                  ANY TYPE OF PRINT DESIGN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Logos</li>
                  <li>Postcards</li>
                  <li>Ads</li>
                  <li>Posters</li>
                  <li>Magazines</li>
                  <li>Catalogs</li>
                  <li>Annual Reports</li>
                  <li>Brochures</li>
                  <li>Invitations</li>
                  <li>Billboards</li>
                  <li>You name it, we can design it</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">ILLUSTRATION</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Custom Infographics</li>
                  <li>T-shirt</li>
                </ul>
              </CardContent>
              <CardHeader className="pt-4">
                <CardTitle className="text-purple-700">
                  DIGITAL DESIGN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Animated GIF's</li>
                  <li>Email marketing</li>
                  <li>Social Media Graphics</li>
                  <li>Websites</li>
                  <li>Online Ads</li>
                  <li>Mobile Platforms</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">STRATEGY</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Campaign Cohesiveness</li>
                  <li>Integrated Campaigns</li>
                  <li>Digital Marketing</li>
                  <li>Social Strategies</li>
                </ul>
              </CardContent>
              <CardHeader className="pt-4">
                <CardTitle className="text-purple-700">
                  CREATIVE THINKING
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>BRANDING</li>
                  <li>EXHIBIT/CONFERENCE DESIGN</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-serif mb-8 text-center text-teal-800">
            ABOUT
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <motion.div
                className="w-full h-[400px] bg-gradient-to-br from-teal-200 to-purple-200 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">
                Leah Parchinski - Owner/Creative Director
              </h3>
              <p className="mb-4">
                Inspired by life, driven by passion, kind in spirit...
              </p>
              <p className="mb-4">
                As a graduate of the University of Florida Graphic Design
                Program, earning awards for "Best Senior" in her annual design
                show, Leah's creative journey began at Walt Disney World, where
                she worked in the Creative Costuming department. Following this,
                she worked for marketing, exhibit, and education departments,
                while at the Florida Museum she was awarded with a Graphic
                Design USA Award for her creative efforts.
              </p>
              <p>
                After leaving Gainesville, Leah joined forces with the creative
                minds at Evolve Design Group (formerly Graphex) in Orlando,
                Florida as a graphic artist and received several ADDY Awards
                while there as well as working with many Fortune 500 companies.
                In 2006, Parchinski ventured out on her own starting Leah
                Parchinski Design, based in Melbourne Beach, Florida. She
                continues to be inspired daily by the relationships with her
                clients, striving to advance their objectives and exceed their
                expectations. She thanks all of her clients for their continued
                support.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-serif mb-8 text-center text-teal-800">
            CONTACT
          </h2>
          <Card>
            <CardContent className="grid md:grid-cols-2 gap-8 p-6">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" className="min-h-[100px]" />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  Send
                </Button>
              </form>
              <div className="flex flex-col justify-center">
                <p className="text-lg mb-2">leahparchinski@gmail.com</p>
                <p className="text-lg">Tel: 321-987-6578</p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-r from-teal-100 to-purple-100 py-4 text-center text-sm text-teal-800"
        variants={itemVariants}
      >
        <p>© 2024 Leah Parchinski Design, LLC</p>
      </motion.footer>
    </motion.div>
  );
}
