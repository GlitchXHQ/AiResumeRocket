// ContactUs.jsx
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Headphones, Clock, ArrowRight } from 'lucide-react';

export default function ContactUsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      info: "hello@airesumerocket.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      info: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with support",
      info: "Available 24/7",
      action: "Start Chat"
    }
  ];

  const supportOptions = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Having issues with the platform? Our tech team is here to help."
    },
    {
      icon: MessageCircle,
      title: "General Inquiries",
      description: "Questions about features, pricing, or partnerships? We'd love to hear from you."
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday - Friday: 9:00 AM - 6:00 PM PST. Weekend support via email."
    }
  ];

  return (
    <section className="relative min-h-screen bg-gray-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-64 h-64 bg-purple-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-24 left-20 w-48 h-48 bg-blue-100 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-purple-600">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about AiResumeRocket? We're here to help you launch your career to new heights.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-purple-300 hover:shadow-md transition-all duration-300 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4 mx-auto">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-3">{method.description}</p>
              <p className="text-purple-600 font-medium mb-4">{method.info}</p>
              <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Support Information */}
          <div className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Can Help</h2>
            <div className="space-y-6 mb-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                      <option.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Looking for Quick Answers?</h3>
              <p className="mb-4 opacity-90">
                Check out our comprehensive FAQ section for instant answers to common questions.
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-purple-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Visit FAQ
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Office Information */}
        <div className={`bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center transform transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4 mx-auto">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Our Office</h3>
          <p className="text-gray-600 mb-2">123 Innovation Drive, Suite 456</p>
          <p className="text-gray-600 mb-4">San Francisco, CA 94105</p>
          <p className="text-sm text-gray-500">
            Our office is open Monday through Friday, 9:00 AM - 6:00 PM PST. 
            Please schedule an appointment before visiting.
          </p>
        </div>
      </div>
    </section>
  );
}