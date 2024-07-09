import { MapPin, Phone } from 'lucide-react';


const ContactUs = () => {
    const contactData = [
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Our Address",
            details: ["2 no R.C.Church road,Patherghata", "Chattogram, Bangladesh"]
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Contact",
            details: ["Phone Number:+8801833844350", "Mail: tayyabamerituran@gmail.com"]
        },
    ];

    return (
        <div className="mx-auto m-10 max-w-7xl bg-gray-50 py-12 px-5 lg:px-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact Us</h2>
                <p className="mt-4 text-lg text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, beatae.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <p className="text-lg text-black">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem enim tempore perferendis quae dolorum veniam nisi sint totam, magnam pariatur.
                    </p>
                    <ul className="space-y-6">
                        {contactData.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-white">
                                    {item.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="mb-1 text-lg font-semibold text-black">
                                        {item.title}
                                    </h3>
                                    {item.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-gray-600">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="form">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">Ready to Get Started?</h2>
                    <form id="contactForm" className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                autoComplete="given-name"
                                placeholder="Your name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                name="name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                placeholder="Your email address"
                                className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                name="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="textarea" className="block text-sm font-medium text-gray-600">Message</label>
                            <textarea
                                id="textarea"
                                name="textarea"
                                placeholder="Write your message..."
                                className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
