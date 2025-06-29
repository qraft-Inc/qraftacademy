import { Card } from '@/components/ui/card';

const courses = [
  {
  title: 'Product Design Apprenticeship',
  date: '01 Sept 2024 - 01 Oct 2024',
  image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
},
  {
  title: 'Product Design Apprenticeship',
  date: '01 Sept 2024 - 01 Oct 2024',
  image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
},
  {
  title: 'Product Design Apprenticeship',
  date: '01 Sept 2024 - 01 Oct 2024',
  image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
},
  {
  title: 'Product Design Apprenticeship',
  date: '01 Sept 2024 - 01 Oct 2024',
  image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
},
  {
  title: 'Product Design Apprenticeship',
  date: '01 Sept 2024 - 01 Oct 2024',
  image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
},
];

export function AvailableCourses() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-white mb-8">Available Courses.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <Card 
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 border-0 overflow-hidden hover:scale-105 transition-transform duration-300" 
            key={index}
          >
            <img
              alt={course.title}
              className="w-full h-48 object-cover"
              src={course.image}
            />
            <div className="p-4 text-white">
              <h3 className="font-medium mb-2">{course.title}</h3>
              <p className="text-sm text-blue-200">{course.date}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}