import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  BookOpen
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: "Web Development", href: "#" },
      { name: "Data Science", href: "#" },
      { name: "Machine Learning", href: "#" },
      { name: "Digital Marketing", href: "#" },
      { name: "UI/UX Design", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Mission", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Student Support", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden" id="footer">
      {/* Floating background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10">
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Brand & Newsletter */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    EduMaster
                  </span>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Empowering learners worldwide with cutting-edge education and personalized learning experiences. Join thousands who've transformed their careers with us.
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Stay Updated</h4>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm text-white placeholder-white/50"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {Object.entries(footerLinks).map(([section, links], idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-lg mb-6 text-white">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </h4>
                      <ul className="space-y-3">
                        {links.map((link, i) => (
                          <li key={i}>
                            <a
                              href={link.href}
                              className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info + Map + Socials */}
              <div>
                <h4 className="font-bold text-lg mb-6 text-white">Get in Touch</h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70">
                      A,B, Gopalsamy, 140, Gopalasamy Koil St, Sridevi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-white/70">8870060607</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-white/70">hrvinsup@gmail.com</span>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="rounded-lg overflow-hidden mb-8">
                  <iframe
                    title="VINSUP Skill Academy Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.501820891761!2d76.9741105!3d11.036264299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85963b47c9905%3A0xccf88b0cf54e457e!2sVINSUP%20SKILL%20ACADEMY!5e0!3m2!1sen!2sin!4v1718123456789!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Social Links */}
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-white/60 text-sm">
                © {currentYear} EduMaster. All rights reserved. Transforming education, one student at a time.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
