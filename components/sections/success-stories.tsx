"use client";
import Image from 'next/image';

export default function SuccessStories() {
  const stories = [
    {
      name: "Claire",
      role: "Web Developer",
      quote: "Qraft Academy transformed my web design career completely.",
      company: "Tech Corp",
      image: "/images/rect.png"
    },
    {
      name: "Collins",
      role: "UX Designer",
      quote: "The hands-on training prepared me for real-world challenges.",
      company: "Design Co",
      image: "/images/1_QuAwhEVWVs6pp9vjoojg7g.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Success Stories.
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div className="group p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300" key={index}>
              <div className="flex items-center mb-6">
                <div className="size-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                  <Image
                    alt={story.name}
                    className="object-cover size-full"
                    height={64}
                    src={story.image}
                    width={64}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">{story.name}</p>
                  <p className="text-blue-600">{story.role} at {story.company}</p>
                </div>
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                &quot;{story.quote}&quot;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
