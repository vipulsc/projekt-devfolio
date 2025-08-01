"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xnnzbqje");
  const [showSuccess, setShowSuccess] = useState(false);

  if (state.succeeded && !showSuccess) {
    setShowSuccess(true);
  }

  console.log("Form state:", state);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    handleSubmit(e);
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4 text-[var(--text-color)]">
        Contact.
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="border border-[var(--contact-border)] p-6 rounded-lg bg-[var(--skill-border)]/20 backdrop-blur-sm space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-[var(--text-color)]">
              Let&apos;s Connect
            </h2>
            <p className="text-sm text-[var(--text-color)] opacity-80">
              Ready to bring your ideas to life? I&apos;m here to help make it
              happen.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="font-medium mb-2 text-[var(--text-color)]">
                Start a conversation
              </h3>
              <p className="text-sm text-[var(--text-color)] opacity-75">
                Let&apos;s discuss your project and explore how we can work
                together to bring your vision to reality.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-[var(--text-color)]">
                Have a project in mind?
              </h3>
              <p className="text-sm text-[var(--text-color)] opacity-75">
                Share your ideas and requirements we&apos;ll explore the
                possibilities and create something amazing together.
              </p>
            </div>
          </div>
        </div>

        <div>
          <form
            onSubmit={handleFormSubmit}
            action="https://formspree.io/f/xnnzbqje"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 bg-transparent border border-[var(--contact-border)] rounded-lg text-[var(--text-color)] placeholder-gray-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No (Optional)"
                className="w-full px-4 py-3 bg-transparent border border-[var(--contact-border)] rounded-lg text-[var(--text-color)] placeholder-gray-400"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-transparent border border-[var(--contact-border)] rounded-lg text-[var(--text-color)] placeholder-gray-400"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-[var(--construction)] text-sm"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full px-4 py-3 bg-transparent border border-[var(--contact-border)] rounded-lg text-[var(--text-color)] placeholder-gray-400 resize-none"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-[var(--construction)] text-sm"
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>

            {showSuccess && (
              <div className="text-[var(--available)] text-sm text-center mt-2">
                Message sent! I&apos;ll connect with you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
