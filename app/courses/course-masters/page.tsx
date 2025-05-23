'use client'; // Add this directive at the top

import { motion } from 'framer-motion'; // Moved this import above next/image
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function CourseMastersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                CourseMasters
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
                Course Production Services by Qraft Academy
              </h2>
              <p className="text-xl text-gray-800 font-medium">
                Your Partner in E-learning Course Development & Instructional Design
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-lg"
                  variant="default" 
                >
                  📥 Apply to Learn Course Production
                </Button>
                <Button 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
                  variant="outline" 
                >
                  🎬 Get Your Course Developed
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden bg-blue-50">
                <Image
                  alt="Course production"
                  className="object-cover"
                  fill
                  src="/images/hero.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-16 mb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-purple-50" />
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            1. What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Design and develop engaging e-learning courses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">●</span>
                  <span>Curriculum design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">●</span>
                  <span>Interactive content creation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">●</span>
                  <span>Multimedia integration</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Train content creators</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">●</span>
                  <span>Instructional design training</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">●</span>
                  <span>Course production workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">●</span>
                  <span>Quality assurance processes</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 mb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-blue-50" />
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            About CourseMasters
          </h2>
          <p className="mb-10 text-lg text-gray-700 max-w-3xl mx-auto text-center">
            CourseMasters is a Qraft Academy flagship e-learning course production service - designed to help institutions, 
            enterprises, and development partners create high-quality, inclusive, and visually engaging digital learning content.
          </p>
          <p className="mb-10 text-lg text-gray-700 max-w-3xl mx-auto text-center">
            We specialize in transforming ideas, curriculums, and subject-matter expertise into immersive
            e-learning experiences that are accessible across devices and learning contexts.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mission</h3>
              <p className="text-gray-700">
                To provide high-quality and engaging online courses tailored to diverse learning needs.
              </p>
            </Card>
            <Card className="p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Vision</h3>
              <p className="text-gray-700">
                To revolutionize the knowledge economy and online education by making high-quality learning experiences for everyone.
              </p>
            </Card>
            <Card className="p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Core Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">●</span>
                  <span>Quality: Commitment to excellence in course content and delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">●</span>
                  <span>Innovation: Embracing the latest technologies and methodologies in e-learning</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="relative py-16 mb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-purple-50" />
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Target Audience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Corporations: For workforce training programs",
              "Educators: Professionals seeking to enhance their teaching methods",
              "Institutions: Schools, Colleges, Universities aiming to expand online offerings",
              "Non-Governmental Organizations (NGOs): Organizations focused on community development, advocacy, and education", 
              "Subject Matter Experts / Thought Leaders: Individuals looking to share their expertise"
            ].map((item, i) => (
              <Card 
                key={i} 
                className="p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all"
              >
                <p className="text-gray-700">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Studios */}
      <section className="relative py-16 mb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-blue-50" />
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
            🎬 Our Technical Studios
          </h2>
          <h3 className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto">
            Specialized Spaces for World-Class Course Content Creation
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1️⃣ Instructional Animation & Motion Graphics Studio",
                description: "🎨 Bringing Concepts to Life with 2D/3D animations and explainer videos"
              },
              {
                title: "2️⃣ Live-Action Course Video Production Studio", 
                description: "🎥 Capturing Real Learning in Action with professional videography"
              },
              {
                title: "3️⃣ Pre & Post-Production Course Audio Studio",
                description: "🎧 High-Fidelity Sound for Digital Learning with studio-quality audio"
              }
            ].map((studio, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{studio.title}</h3>
                  <p className="text-gray-700">{studio.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative text-center py-20 rounded-xl overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-800 to-purple-800">
          <Image
            alt="CTA background"
            className="object-cover mix-blend-overlay opacity-20"
            fill
            priority
            src="/images/hero.png"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Ready to Create Your Course?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium transition-all hover:scale-105"
              variant="default" 
            >
              Get Started
            </Button>
            <Button 
              className="text-white border-white hover:bg-white/20 px-8 py-4 text-lg font-medium transition-all hover:scale-105"
              variant="outline" 
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
