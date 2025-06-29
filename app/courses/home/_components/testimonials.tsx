export function Testimonials() {
  return (
    <section className="grid md:grid-cols-2 gap-12">
      {[1, 2].map((index) => (
        <div className="text-white space-y-4" key={index}>
          <p className="text-sm text-blue-300">01.</p>
          <p className="text-xl">
            Qraft Academy transformed my tech career. The training, mentorship, and real-world experience helped me land my dream job.
          </p>
          <div>
            <p className="font-medium">Michael K.</p>
            <p className="text-sm text-blue-300">CEO, Company Name</p>
          </div>
        </div>
      ))}
    </section>
  );
}