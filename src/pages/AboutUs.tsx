import Contact from "./Contact";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image:
        "https://i.ibb.co/7Jx8VNf/christian-tenguan-P3gf-VKhz8d0-unsplash.jpg",
      bio: "John is the visionary behind our company. With over 20 years of experience in the industry, he leads our team with a focus on innovation and excellence.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://via.placeholder.com/150",
      bio: "Jane is our technology guru. She is responsible for overseeing all technical aspects and drives our tech strategy forward.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://via.placeholder.com/150",
      bio: "Jane is our technology guru. She is responsible for overseeing all technical aspects and drives our tech strategy forward.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://via.placeholder.com/150",
      bio: "Jane is our technology guru. She is responsible for overseeing all technical aspects and drives our tech strategy forward.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://via.placeholder.com/150",
      bio: "Jane is our technology guru. She is responsible for overseeing all technical aspects and drives our tech strategy forward.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://via.placeholder.com/150",
      bio: "Jane is our technology guru. She is responsible for overseeing all technical aspects and drives our tech strategy forward.",
    },

    // Add more team members as needed
  ];

  return (
    <div className="m-10 rounded-2xl min-h-screen">
      <div className="bg-gray-100 rounded-2xl m-10">
        {/* Information about the company */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl text-left font-medium mb-2">
            About Our Company
          </h2>
          <p className="text-gray-700 leading-loose">
            Our company is a leading provider of innovative solutions in the
            industry. We pride ourselves on delivering exceptional services and
            products that exceed our clients' expectations. Our team is
            dedicated to continuous improvement and staying ahead of the curve.
          </p>
        </section>

        {/* Mission and Vision Statements */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl text-left font-medium mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-loose">
            Our mission is to deliver exceptional services and solutions that
            exceed our clients' expectations. We are dedicated to innovation,
            quality, and customer satisfaction. Our team works tirelessly to
            stay ahead of the curve and bring you the best in the industry.
          </p>
          <h2 className="text-3xl text-left font-medium mb-2 mt-8">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-loose">
            Our vision is to be the global leader in our field, known for our
            commitment to excellence and our ability to adapt and innovate in a
            rapidly changing market.
          </p>
        </section>

        {/* Contact Information */}
      </div>
      <div>
        <Contact />
      </div>

      {/* Our Team Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-blue-700 text-center">{member.role}</p>
                <p className="text-gray-700 mt-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Store Location Information */}
      <section className="rounded-2xl mx-10 bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Our Store Location</h2>
          <p className="text-gray-700 leading-loose">
            Visit our store at the following location:
          </p>
          <p className="text-gray-700 leading-loose">
            Address: 2 no R.C.Church road,Patherghata
			Chattogram, Bangladesh
            <br />
            Store Hours: Monday - Friday, 9 AM - 5 PM
          </p>
        </div>
      </section>

      {/* Contact Component */}
    </div>
  );
};

export default AboutUs;
