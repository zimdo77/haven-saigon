"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbgjrqrz");

  if (state.succeeded) {
    return (
      <div className="mt-6 flex min-h-[420px] items-center justify-center px-6 py-12 text-center">
        <div className="max-w-sm">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-olive/30">
            <Check className="size-5" />
          </div>

          <h3 className="mt-5 font-serif text-2xl md:text-3xl">
            Thank you for your message
          </h3>

          <p className="mt-4 leading-relaxed text-olive/70">
            We&apos;ve received your enquiry and will get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <input
        type="hidden"
        name="subject"
        value="Website enquiry from {{ name }}"
      />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className="w-full border border-border bg-white px-4 py-3 outline-none transition focus:border-olive"
        />

        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="mt-2 text-sm text-danger"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="w-full border border-border bg-white px-4 py-3 outline-none transition focus:border-olive"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-danger"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Your phone number (optional)"
          className="w-full border border-border bg-white px-4 py-3 outline-none transition focus:border-olive"
        />

        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
          className="mt-2 text-sm text-danger"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="How can we help?"
          className="w-full resize-none border border-border bg-white px-4 py-3 outline-none transition focus:border-olive"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-danger"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-olive px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send Enquiry"}
      </button>

      <ValidationError errors={state.errors} className="text-sm text-danger" />
    </form>
  );
}
