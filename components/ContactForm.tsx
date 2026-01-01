export default function ContactForm() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="p-3 rounded-lg bg-gray-800 text-white" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-gray-800 text-white" />
          <textarea placeholder="Message" className="p-3 rounded-lg bg-gray-800 text-white h-32" />
          <button type="submit" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
