import { useState, useEffect, use } from 'react';
import { Rocket, Brain, Zap, Target, Award, ArrowRight, Sparkles } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced algorithms analyze job descriptions and optimize your resume content for maximum impact."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate professional resumes in minutes, not hours. Our AI works at the speed of thought."
    },
    {
      icon: Target,
      title: "Industry-Tailored",
      description: "Customized templates and content suggestions for every industry and career level."
    },
    {
      icon: Award,
      title: "ATS Optimized",
      description: "Beat the robots with resumes designed to pass through Applicant Tracking Systems."
    }
  ];

  const stats = [
    { number: "500K+", label: "Resumes Created" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Industries Covered" },
    { number: "4.9/5", label: "User Rating" }
  ];

  const Nav=()=>{
    navigate("/add-resume")
  }

  return (
    <section className="relative min-h-screen bg-gray-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-blue-100 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 text-sm font-medium">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About
            <span className="inline-flex items-center gap-3 ml-4">
              <Rocket className="w-12 h-12 text-purple-600" />
              <span className="text-purple-600">AiResumeRocket</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing career success with AI-powered resume creation. 
            <span className="text-purple-600 font-semibold"> Launch your career into orbit</span> with 
            resumes that land interviews and secure dream jobs.
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`bg-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-16 shadow-sm transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe everyone deserves a chance to showcase their potential. AiResumeRocket democratizes 
              professional resume creation by harnessing cutting-edge artificial intelligence to help 
              job seekers at every level craft compelling, ATS-optimized resumes that open doors to 
              extraordinary opportunities.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all duration-300 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-16 shadow-sm transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Career?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of thousands of professionals who've transformed their job search with AI-powered resumes.
            </p>
            <button 
            onClick={Nav}
            className="inline-flex items-center gap-3 bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}