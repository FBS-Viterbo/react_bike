import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="max-w-xs mx-auto text-center text-black">
        <h2 className="text-xl font-bold text-black mb-6">Contact Us</h2>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-2 text-sm text-black">
            <Mail size={15} className="text-black" />
            <span>contact@bikezone.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-black">
            <Phone size={15} className="text-black" />
            <span>+63 912 345 6789</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
