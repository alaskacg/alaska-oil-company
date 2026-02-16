import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Droplet, Shield, Users, Briefcase, TrendingUp, 
  MapPin, Award, Phone, Menu, X, ChevronRight,
  CheckCircle, Factory, Leaf
} from 'lucide-react'
import { useState } from 'react'

function App() {
  return (
    <Router basename="/alaska-oil-company">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/operations" element={<OperationsPage />} />
        <Route path="/environmental" element={<EnvironmentalPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Droplet className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Alaska Oil Company</span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/operations" className="hover:text-blue-400 transition">Operations</Link>
            <Link to="/environmental" className="hover:text-blue-400 transition">Environmental</Link>
            <Link to="/safety" className="hover:text-blue-400 transition">Safety</Link>
            <Link to="/careers" className="hover:text-blue-400 transition">Careers</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/operations" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Operations</Link>
            <Link to="/environmental" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Environmental</Link>
            <Link to="/safety" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Safety</Link>
            <Link to="/careers" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link to="/contact" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-6 w-6 text-blue-400" />
              <span className="font-bold">Alaska Oil Company</span>
            </div>
            <p className="text-slate-400 text-sm">Responsible energy development for Alaska's future.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/operations" className="block text-slate-400 hover:text-white">Operations</Link>
              <Link to="/environmental" className="block text-slate-400 hover:text-white">Environmental</Link>
              <Link to="/safety" className="block text-slate-400 hover:text-white">Safety</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Careers</h3>
            <div className="space-y-2 text-sm">
              <Link to="/careers" className="block text-slate-400 hover:text-white">Current Openings</Link>
              <Link to="/careers" className="block text-slate-400 hover:text-white">Benefits</Link>
              <Link to="/careers" className="block text-slate-400 hover:text-white">Culture</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Anchorage, Alaska</p>
              <p>(907) 555-0100</p>
              <p>info@akoilcompany.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Alaska Oil Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Alaska Oil Company - Responsible Energy Development</title>
        <meta name="description" content="Alaska Oil Company: Leading oil exploration and production on Alaska's North Slope with environmental stewardship and community commitment." />
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10 text-center container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Alaska Oil Company</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">Powering Alaska's Future Responsibly</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/operations" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
              Our Operations
            </Link>
            <Link to="/careers" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-slate-600">Years Operating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-slate-600">Employees</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150K</div>
              <div className="text-slate-600">Barrels/Day</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-600">Safety Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Our Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition">
              <Factory className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">North Slope Operations</h3>
              <p className="text-slate-600">State-of-the-art extraction facilities with advanced technology and environmental controls.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition">
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Environmental Stewardship</h3>
              <p className="text-slate-600">Industry-leading environmental practices protecting Alaska's pristine wilderness.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Safety Excellence</h3>
              <p className="text-slate-600">Comprehensive safety protocols ensuring employee and environmental protection.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Community Partnership</h3>
              <p className="text-slate-600">$50M+ invested annually in Alaska communities and workforce development.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition">
              <Award className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Regulatory Excellence</h3>
              <p className="text-slate-600">Full compliance with all federal, state, and local regulations.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Innovation</h3>
              <p className="text-slate-600">Investing in next-generation extraction and environmental technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Alaska's Energy Leader</h2>
          <p className="text-xl mb-8 text-blue-100">We're hiring skilled professionals for positions across Alaska.</p>
          <Link to="/careers" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition">
            View Open Positions <ChevronRight className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function OperationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Operations - Alaska Oil Company</title>
        <meta name="description" content="Alaska Oil Company's North Slope operations deliver reliable energy production with environmental responsibility." />
      </Helmet>
      <Navigation />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Operations Overview</h1>
          <p className="text-xl text-slate-300">World-class energy production on Alaska's North Slope</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">North Slope Operations</h2>
            <div className="space-y-4 text-slate-600">
              <p className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span>150,000 barrels per day production capacity</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Advanced horizontal drilling technology</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Year-round production facilities</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Pipeline infrastructure to Valdez</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Infrastructure</h2>
            <div className="space-y-4 text-slate-600">
              <p className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>5 major production facilities</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>300+ miles of pipelines</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>State-of-the-art processing plants</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Emergency response systems</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Technology & Innovation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Extended Reach Drilling</h3>
              <p className="text-slate-600">Accessing reserves while minimizing surface footprint</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Smart Monitoring</h3>
              <p className="text-slate-600">Real-time environmental and operational monitoring</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Spill Prevention</h3>
              <p className="text-slate-600">Advanced leak detection and prevention systems</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function EnvironmentalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Environmental Stewardship - Alaska Oil Company</title>
        <meta name="description" content="Our commitment to environmental protection and sustainable operations in Alaska." />
      </Helmet>
      <Navigation />
      
      <div className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Environmental Commitment</h1>
          <p className="text-xl text-green-100">Protecting Alaska's pristine environment for future generations</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-slate-600 mb-8">
            Alaska Oil Company is committed to industry-leading environmental stewardship. We invest heavily in 
            environmental protection, wildlife conservation, and sustainable operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-green-50 p-8 rounded-xl">
            <Leaf className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Wildlife Protection</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Year-round wildlife monitoring</li>
              <li>• Seasonal operation adjustments</li>
              <li>• Habitat preservation programs</li>
              <li>• Partnerships with wildlife agencies</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Spill Prevention</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Triple-redundant containment systems</li>
              <li>• 24/7 monitoring and response teams</li>
              <li>• Regular equipment inspection</li>
              <li>• Advanced leak detection technology</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Environmental Certifications</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
              <p className="font-semibold">ISO 14001</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
              <p className="font-semibold">EPA Compliance</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
              <p className="font-semibold">State Certified</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
              <p className="font-semibold">Wildlife Safe</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function SafetyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Safety Record - Alaska Oil Company</title>
        <meta name="description" content="Industry-leading safety record with comprehensive employee protection programs." />
      </Helmet>
      <Navigation />
      
      <div className="bg-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Safety Excellence</h1>
          <p className="text-xl text-red-100">Our employees and environment are our top priority</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">99.9%</div>
            <div className="text-slate-600">Safety Record</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">0</div>
            <div className="text-slate-600">Major Incidents (5 years)</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">10,000+</div>
            <div className="text-slate-600">Safety Training Hours/Year</div>
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Safety Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Employee Safety</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Comprehensive safety training</li>
                <li>• Personal protective equipment</li>
                <li>• Regular safety drills</li>
                <li>• Mental health support</li>
                <li>• Emergency response teams</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Operational Safety</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Equipment maintenance protocols</li>
                <li>• Safety management systems</li>
                <li>• Incident reporting and analysis</li>
                <li>• Contractor safety requirements</li>
                <li>• Continuous improvement programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Careers - Alaska Oil Company</title>
        <meta name="description" content="Join Alaska Oil Company. Competitive pay, excellent benefits, and career growth opportunities." />
      </Helmet>
      <Navigation />
      
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100">Build your career with Alaska's energy leader</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Competitive Pay</h3>
            <p className="text-slate-600">Industry-leading salaries with performance bonuses</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Great Benefits</h3>
            <p className="text-slate-600">Health, dental, vision, 401k matching, and more</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Career Growth</h3>
            <p className="text-slate-600">Training, development, and advancement opportunities</p>
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-xl mb-12">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Current Openings</h2>
          <div className="space-y-4">
            {[
              { title: 'Production Engineer', location: 'North Slope', type: 'Full-time' },
              { title: 'Safety Manager', location: 'Anchorage', type: 'Full-time' },
              { title: 'Environmental Specialist', location: 'North Slope', type: 'Full-time' },
              { title: 'Field Technician', location: 'North Slope', type: 'Full-time' },
              { title: 'Operations Manager', location: 'Anchorage', type: 'Full-time' },
            ].map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                  <span className="text-blue-600 font-semibold">{job.type}</span>
                </div>
                <p className="text-slate-600 mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {job.location}
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact - Alaska Oil Company</title>
        <meta name="description" content="Contact Alaska Oil Company for business inquiries, investor relations, or media requests." />
      </Helmet>
      <Navigation />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">Get in touch with Alaska Oil Company</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Get In Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Headquarters</h3>
                <p className="text-slate-600">
                  Alaska Oil Company<br />
                  1234 Energy Drive<br />
                  Anchorage, AK 99501
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Phone</h3>
                <p className="text-slate-600">
                  Main: (907) 555-0100<br />
                  Investor Relations: (907) 555-0101<br />
                  Media: (907) 555-0102
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Email</h3>
                <p className="text-slate-600">
                  General: info@akoilcompany.com<br />
                  Careers: careers@akoilcompany.com<br />
                  Media: media@akoilcompany.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
