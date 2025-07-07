'use client';

import React from 'react';

export default function CourseMastersPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">

      {/* Header Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Course Masters</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Course Production Services by Qraft Academy</h2>
        <p className="text-base sm:text-lg text-blue-600 font-medium">Your Partner in E-learning Course Development & Instructional Design</p>
        {/* Placeholder for a main header image or logo */}
        {/* <img src="/path/to/coursemasters-logo.png" alt="Course Masters by Qraft Academy Logo" className="mt-4 mx-auto max-h-24 object-contain"/> */}
      </section>

      {/* Overview and Value Proposition Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">CourseMasters Overview</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          CourseMasters is Qraft Academy’s end-to-end e-learning course production service, designed to
          transform expert knowledge and curriculum into engaging, accessible, and visually compelling digital
          learning experiences.
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          We provide full-service support—from instructional design and multimedia production to LMS integration—helping
          institutions, organizations, and experts deliver high-quality, mobile-ready courses at scale.
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Our Value Proposition</h3>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
          <li>Fullstack Course Production: From needs analysis to final deployment.</li>
          <li>Multiple Production Teams: Ability to handle multiple projects simultaneously.</li>
          <li>Flexible Collaboration: We work and co-create with your team</li>
          <li>SCORM & LMS-Ready Outputs: Courses can be deployed on any modern LMS.</li>
          <li>High-Quality, Low-Bandwidth Optimization: Ideal for African and global contexts.</li>
        </ul>
      </section>

      {/* What We Do / Core Services Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">What We Do / Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">What We Do</h3>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
              <li>Design and develop engaging e-learning courses</li>
              <li>Train content creators to produce professional-quality</li>
              <li>LOREM IPSUM (Assuming this is a placeholder, keep as is or clarify)</li>
            </ul>
            {/* Placeholder for icons related to What We Do */}
            {/* <div className="flex justify-around mt-4"> */}
            {/* <img src="/path/to/design-develop-icon.png" alt="Design and develop courses" className="h-12 w-12 object-contain"/> */}
            {/* <img src="/path/to/train-creators-icon.png" alt="Train content creators" className="h-12 w-12 object-contain"/> */}
            {/* </div> */}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Ideal For</h3>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
              <li>Corporate Learning & Development Teams</li>
              <li>NGOs, Development Agencies & International Organizations</li>
              <li>Educators & Academic Professionals</li>
              <li>Subject Matter Experts & Thought Leaders</li>
              <li>Universities, Colleges & Training Institutions</li>
              <li>Government & Public Sector Programs</li>
            </ul>
            {/* Placeholder for icons related to Ideal For audiences */}
            {/* <div className="flex justify-around mt-4"> */}
            {/* <img src="/path/to/corporate-icon.png" alt="Corporate Teams" className="h-12 w-12 object-contain"/> */}
            {/* <img src="/path/to/ngo-icon.png" alt="NGOs" className="h-12 w-12 object-contain"/> */}
            {/* Add other audience icons as needed */}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* CourseMasters Studios Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">CourseMasters Studios</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 text-center">Purpose-Built Spaces for World-Class E-Learning Content Creation</p>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          At CourseMasters, we operate three dedicated production studios, each
          engineered to deliver high-impact digital learning experiences.
          These studios serve as the creative engine
          behind our engaging, multimedia-rich
          e-learning courses.
        </p>

        {/* Course Audio Studio */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Pre & Post-Production Course Audio Studio</h3>
          <p className="text-base sm:text-lg text-gray-700 italic mb-4">Professional Voice, Script, and Sound for Seamless Learning</p>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2 mb-4">
            <li>Script Writing & Curriculum Adaptation – From raw curriculum to engaging, voice-ready scripts</li>
            <li>Voice-over Recording – Native, clear, and accessible narration for all learner types</li>
            <li>Audio Mixing & Mastering – Studio-quality sound with polishing, noise reduction, and syncing</li>
            <li>Custom Music & Sound Effects – Immersive soundscapes to enhance learning retention</li>
            <li>Multilingual & Inclusive Narration – Designed for global and diverse audiences</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700">This studio provides end-to-end voice and audio services tailored for digital learning environments.</p>
          {/* Placeholder for Audio Studio image/icon */}
          {/* <img src="/path/to/audio-studio-image.png" alt="Course Audio Studio" className="mt-4 mx-auto max-h-40 object-contain"/> */}
        </div>

        {/* Instructional Animation Studio */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Instructional Animation & Motion Graphics Studio</h3>
          <p className="text-base sm:text-lg text-gray-700 italic mb-4">Bringing Concepts to Life</p>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2 mb-4">
            <li>Storyboarding, scripting, and synced narration</li>
            <li>2D & 3D animations for educational content</li>
            <li>Explainer videos & animated infographics</li>
            <li>Whiteboard-style visualizations</li>
            <li>Animated transitions & overlays for course videos</li>
            <li>Interactive visual cues and learning interface animations</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700">This studio transforms complex ideas into engaging animated visuals to enhance learner comprehension.</p>
          {/* Placeholder for Animation Studio image/icon */}
          {/* <img src="/path/to/animation-studio-image.png" alt="Instructional Animation Studio" className="mt-4 mx-auto max-h-40 object-contain"/> */}
        </div>

        {/* Live-Action Video Production Studio */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Live-Action Course Video Production Studio</h3>
          <p className="text-base sm:text-lg text-gray-700 italic mb-4">Capturing Real Learning in Action</p>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2 mb-4">
            <li>Presenter-led course recordings</li>
            <li>Green screen and controlled studio shoots</li>
            <li>Field-based documentary-style footage</li>
            <li>Multi-angle camera setups, lighting, and sound</li>
            <li>Post-production: editing, B-roll, motion graphics, and subtitle</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700">Our live-action studio is designed for high-quality video capture of instructors, demonstrations, and real-world scenarios.</p>
          {/* Placeholder for Video Studio image/icon */}
          {/* <img src="/path/to/video-studio-image.png" alt="Live-Action Video Production Studio" className="mt-4 mx-auto max-h-40 object-contain"/> */}
        </div>
      </section>

      {/* Why Our Course Studios Matter Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Why Our Course Studios Matter</h2>
        <p className="text-base sm:text-lg text-gray-700 text-center">
          Our specialized studios ensure that every element—voice, visuals, and
          video—is crafted to the highest standards of quality, accessibility, and
          instructional value. Together, they bring structure, emotion, and clarity
          to every learning experience we create.
        </p>
      </section>

      {/* Our Team And Expertise Portfolio Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Our Team And Expertise Portfolio</h2>
        <p className="text-base sm:text-lg text-gray-700 italic mb-6 text-center">An Elite Team for World-Class E-Learning Production.</p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 text-center">Cross-functional expertise across every stage of course development.</p>

        {/* CourseMasters Core Team */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">CourseMasters Core Team</h3>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
            <li>Tugume Andrew - Project Manager | Hybrid Learning Specialist | Instructional Designer | SME</li>
            <li>Pius Kibazzi - Videographer / Video Editor</li>
            <li>Rashid Kasule - Motion Graphics Animator</li>
            <li>Andrew Okwir - Audio Engineer /Music Producer</li>
            <li>Peter Ojwang - Video Lighting & Sound Engineer</li>
            <li>Mrs Kevin Patience Oyella - Voice-over & Script Lead</li>
            <li>Caesar Mwaka - Art Director / Storyboarder and Illustrator</li>
            <li>Mwesigwa Benjamin - Graphics Designer</li>
          </ul>
          {/* Placeholder for team photos */}
          {/* <div className="flex flex-wrap justify-center gap-4 mt-6"> */}
          {/* <div className="text-center"> */}
          {/* <img src="/path/to/andrew-photo.png" alt="Tugume Andrew" className="h-24 w-24 rounded-full object-cover mx-auto"/> */}
          {/* <p className="text-sm text-gray-700 mt-2">Tugume Andrew</p> */}
          {/* </div> */}
          {/* Repeat for other team members */}
          {/* </div> */}
        </div>

        {/* Team Structure */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Team Structure</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            At the heart of CourseMasters is a scalable, multidisciplinary team
            structure designed to deliver high-quality e-learning experiences —
            on time and at scale. Our production ecosystem includes multiple
            specialized teams, each with the capacity to handle concurrent
            projects across various stages of course development.
          </p>

          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Core Production Teams</h4>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2 mb-6">
            <li>Instructional Design & Curriculum Team: Designs structured, outcome-driven learning experiences based on modern pedagogy.</li>
            <li>Pre & Post-Production Audio Team: Handles voice-over, script adaptation, audio engineering, mixing, and mastering.</li>
            <li>Instructional Animation & Motion Graphics Team: Produces animated explainers, infographics, and visual storytelling assets.</li>
            <li>Live-Action Course Video Production Team: Captures presenter-led videos, demonstrations, and field recordings with cinematic quality.</li>
            <li>Project Management Office (PMO): Oversees production timelines, quality control, and stakeholder engagement.</li>
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Technical & Support Teams</h4>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2 mb-6">
            <li>Learning Technology & LMS Integration Team: Configures LMS platforms and integrates SCORM/xAPI-compliant content.</li>
            <li>Quality Assurance & Accessibility Team: Ensures content is inclusive, error-free, and WCAG-compliant.</li>
            <li>Marketing & Outreach Team: Drives course visibility through branding, social media, and email campaigns.</li>
            <li>Support & Helpdesk Team: Provides real-time assistance to learners and instructors.</li>
            <li>Monitoring & Evaluation (M&E) Team: Tracks course performance, learner outcomes, and feedback.</li>
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Specialized Support Teams</h4>
          <p className="text-base sm:text-lg text-gray-700">Available based on scale, audience, and partner needs.</p>
        </div>

        {/* Individual Team Descriptions (Optional - could be separate sections or integrated) */}
        {/* Example: */}
        {/* <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Instructional Design & Curriculum</h3>
          <p className="text-base sm:text-lg text-gray-700">Building the pedagogical foundation of every course.</p>
        </div> */}
        {/* Repeat for other teams */}

      </section>

      {/* Technologies & Workflow Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Technologies & Workflow</h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 text-center">Our tech stack and operational engine.</h3>

        {/* Production Workflows */}
        <div className="mb-8">
          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Production Workflows</h4>
          <h5 className="text-lg font-semibold mb-2 text-gray-800">Live-Action Course Production Workflow</h5>
          <p className="text-base sm:text-lg text-gray-700 mb-4">Our live-action studio is designed for high-quality video capture of instructors, demonstrations, and real-world scenarios.</p>
          <p className="text-base sm:text-lg text-gray-700 mb-4">What We Produce:</p>
          <ol className="list-decimal list-inside text-base sm:text-lg text-gray-700 space-y-2">
            <li>Scripting & Storyboarding – Instructional Designers draft narratives.</li>
            <li>Set Preparation – Studio or field environment prepared.</li>
            <li>Filming – Video team shoots presenter-based or on-location footage.</li>
            <li>Post-Production – Video editors cut footage, add motion graphics, subtitles.</li>
            <li>QA & Accessibility Review – Review for clarity, accuracy, and compliance.</li>
            <li>Final Rendering & Delivery – Output in SCORM-compatible formats for LMS use.</li>
          </ol>
          {/* Placeholder for workflow diagram or icons */}
          {/* <img src="/path/to/workflow-diagram.png" alt="Live-Action Production Workflow" className="mt-4 mx-auto max-w-full h-auto"/> */}
        </div>

        {/* Add other workflow descriptions if available in the full vision document */}

      </section>

      {/* Partners Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Partners</h2>
        {/* Placeholder for partner logos */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* <img src="/path/to/partner1-logo.png" alt="Partner Name" className="h-16 object-contain"/> */}
          {/* <img src="/path/to/partner2-logo.png" alt="Partner Name" className="h-16 object-contain"/> */}
          {/* Add other partner logos */}
        </div>
      </section>

      {/* Consulting Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Consulting</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 text-center">Strategy and advisory services to guide your e-learning vision.</p>
        <p className="text-lg font-semibold mb-4 text-gray-800 text-center">Consulting Rate: $400 per day</p>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">We Offer:</h3>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
          <li>Needs assessment and instructional strategy</li>
          <li>Curriculum design and multimedia production advisory</li>
          <li>Platform and technology recommendations</li>
          <li>Monitoring & Evaluation (M&E) strategy</li>
          <li>Accessibility and inclusion reviews</li>
          <li>Capacity building for internal content teams</li>
        </ul>
      </section>

      {/* Contact Information Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-2">📞 <a href="tel:+256755017384" className="text-blue-600 hover:underline">+256 755017384</a></p>
        <p className="text-base sm:text-lg text-gray-700 mb-2">📧 <a href="mailto:info@qraftacademy.com" className="text-blue-600 hover:underline">info@qraftacademy.com</a></p>
        <p className="text-base sm:text-lg text-gray-700 mb-4">🌐 Website: <a href="https://qraftacademy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">qraftacademy.com</a></p>
        <p className="text-base sm:text-lg text-gray-700">📍 Location: Kampala, Uganda Plot 4–10 Kiwana Road, Bukoto, Kampala, Uganda</p>
      </section>

      {/* Existing Form Section */}
      <section className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">CourseMasters Application Form</h2>
        <div className="relative" style={{ height: '800px' }}>
          <iframe
            frameBorder="0"
            height="100%"
            marginHeight={0}
            marginWidth={0}
            src="https://docs.google.com/forms/d/e/1FAIpQLScyVIzVvJQ-8r3v8N5Iy_jBfDD_hTfdUQgz3hMdoHbFlVs7Cg/viewform?embedded=true"
            title="CourseMasters Application Form"
            width="100%"
          >
            Loading...
          </iframe>
        </div>
      </section>

      {/* Footer/Powered By Section */}
       <section className="w-full max-w-4xl text-center text-gray-600 text-sm mt-8">
        <p>Powered by Qraft Academy | Shaping the future of e-learning and education technology in Africa</p>
      </section>

    </div>
  );
}
