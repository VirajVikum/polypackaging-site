import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Section 1: Main Slider */}
      <section className="flex items-center justify-center h-64 bg-gray-100 border-b">
        <div className="text-3xl font-semibold">Main Slider (Placeholder)</div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-12 px-6 text-center border-b">
        <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
        <p className="max-w-2xl mx-auto text-gray-600">Brief description about the company goes here.</p>
      </section>

      {/* Section 3: Product Slider */}
      <section className="py-12 px-6 border-b">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
        <div className="flex justify-center gap-6">
          <div className="bg-blue-500 text-white rounded-lg w-32 h-40 flex flex-col items-center justify-center shadow-md">
            <span className="font-semibold">Food</span>
          </div>
          <div className="bg-blue-500 text-white rounded-lg w-32 h-40 flex flex-col items-center justify-center shadow-md">
            <span className="font-semibold">Health<br/>care</span>
          </div>
          <div className="bg-blue-500 text-white rounded-lg w-32 h-40 flex flex-col items-center justify-center shadow-md">
            <span className="font-semibold">Pet<br/>care</span>
          </div>
          <div className="bg-blue-500 text-white rounded-lg w-32 h-40 flex flex-col items-center justify-center shadow-md">
            <span className="font-semibold">Home<br/>care</span>
          </div>
        </div>
      </section>

      {/* Section 4: Technology / Why Choose Us */}
      <section className="py-12 px-6 text-center border-b">
        <h2 className="text-2xl font-bold mb-2">Why Choose Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">Highlight your technology, quality, or unique selling points here.</p>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-12 px-6 text-center border-b">
        <h2 className="text-2xl font-bold mb-2">Testimonials</h2>
        <p className="max-w-2xl mx-auto text-gray-600">"Great service!" - Customer Name</p>
      </section>

      {/* Section 6: Clients Slider */}
      <section className="py-12 px-6 text-center border-b">
        <h2 className="text-2xl font-bold mb-6">Our Clients</h2>
        <div className="flex justify-center gap-8">
          <div className="w-24 h-12 bg-gray-200 rounded shadow flex items-center justify-center">Logo 1</div>
          <div className="w-24 h-12 bg-gray-200 rounded shadow flex items-center justify-center">Logo 2</div>
          <div className="w-24 h-12 bg-gray-200 rounded shadow flex items-center justify-center">Logo 3</div>
        </div>
      </section>

      {/* Bottom Section: Contact Us */}
      <footer className="py-12 px-6 text-center bg-gray-50 mt-auto border-t">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">Email: info@example.com | Phone: 123-456-7890</p>
      </footer>
    </div>
  );
}
