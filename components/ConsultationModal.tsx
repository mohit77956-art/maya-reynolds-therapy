"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useConsultationModal } from "./ConsultationModalContext";

type SessionType = "In-person" | "Telehealth";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  sessionType: SessionType | "";
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  sessionType: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ConsultationModal() {
  const { isOpen, closeModal } = useConsultationModal();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // Reset form state each time the modal is opened fresh, and manage focus.
  useEffect(() => {
    if (isOpen) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      setValues(initialValues);
      setErrors({});
      setStatus("idle");
      // Move focus into the dialog once it's rendered.
      const id = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
      return () => {
        window.clearTimeout(id);
        document.body.style.overflow = "";
      };
    }
    // Restore focus to the trigger element on close.
    lastFocusedElement.current?.focus?.();
    return undefined;
  }, [isOpen]);

  // Close on Escape, and trap focus within the dialog while open.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.sessionType) {
      nextErrors.sessionType = "Please select a preferred session type.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please share a brief message.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    // No backend exists for this project yet. Simulate a submission so the
    // flow can be wired up to a real API/email service later.
    window.setTimeout(() => {
      setStatus("success");
    }, 600);
  }

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      onMouseDown={handleOverlayClick}
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
        aria-describedby="consultation-modal-description"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-paper border border-line rounded-card shadow-2xl px-6 py-8 md:px-8 md:py-10"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closeModal}
          aria-label="Close consultation form"
          className="absolute top-4 right-4 md:top-5 md:right-5 flex items-center justify-center w-9 h-9 rounded-card text-ink hover:bg-surface transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1L17 17M17 1L1 17"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-6">
            <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-moss/20 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5L10 17.5L19 6.5"
                  stroke="#8C9A7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2
              id="consultation-modal-title"
              className="font-display text-2xl md:text-3xl text-ink mb-3"
            >
              Request received
            </h2>
            <p
              id="consultation-modal-description"
              className="text-muted leading-relaxed max-w-sm mx-auto mb-8"
            >
              Thank you. Your consultation request has been received.
              We&apos;ll be in touch soon.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="inline-block bg-ink text-paper px-7 py-3 rounded-card hover:bg-moss transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="font-display italic text-moss text-base mb-2">
              Let&apos;s get started
            </p>
            <h2
              id="consultation-modal-title"
              className="font-display text-2xl md:text-3xl text-ink mb-2 leading-tight"
            >
              Schedule a Free Consultation
            </h2>
            <p
              id="consultation-modal-description"
              className="text-muted leading-relaxed mb-6"
            >
              Share a few details and we&apos;ll reach out to find a time
              that works for you.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="consultation-fullName"
                  className="block text-sm text-ink mb-1.5"
                >
                  Full Name <span className="text-ochre">*</span>
                </label>
                <input
                  id="consultation-fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={values.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  aria-required="true"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? "consultation-fullName-error" : undefined
                  }
                  className="w-full bg-paper border border-line rounded-card px-4 py-2.5 text-ink placeholder:text-muted/70 focus:border-moss focus:outline-none transition-colors"
                  placeholder="Jane Doe"
                />
                {errors.fullName && (
                  <p
                    id="consultation-fullName-error"
                    className="text-sm text-ochre mt-1.5"
                    role="alert"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="consultation-email"
                  className="block text-sm text-ink mb-1.5"
                >
                  Email Address <span className="text-ochre">*</span>
                </label>
                <input
                  id="consultation-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "consultation-email-error" : undefined
                  }
                  className="w-full bg-paper border border-line rounded-card px-4 py-2.5 text-ink placeholder:text-muted/70 focus:border-moss focus:outline-none transition-colors"
                  placeholder="jane@example.com"
                />
                {errors.email && (
                  <p
                    id="consultation-email-error"
                    className="text-sm text-ochre mt-1.5"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="consultation-phone"
                  className="block text-sm text-ink mb-1.5"
                >
                  Phone Number{" "}
                  <span className="text-muted">(optional)</span>
                </label>
                <input
                  id="consultation-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full bg-paper border border-line rounded-card px-4 py-2.5 text-ink placeholder:text-muted/70 focus:border-moss focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <fieldset>
                <legend className="block text-sm text-ink mb-1.5">
                  Preferred Session Type <span className="text-ochre">*</span>
                </legend>
                <div
                  className="flex flex-wrap gap-3"
                  role="radiogroup"
                  aria-invalid={Boolean(errors.sessionType)}
                  aria-describedby={
                    errors.sessionType
                      ? "consultation-sessionType-error"
                      : undefined
                  }
                >
                  {(["In-person", "Telehealth"] as SessionType[]).map(
                    (option) => {
                      const checked = values.sessionType === option;
                      return (
                        <label
                          key={option}
                          className={`flex-1 min-w-[140px] cursor-pointer text-center px-4 py-2.5 rounded-card border transition-colors ${
                            checked
                              ? "bg-ink text-paper border-ink"
                              : "bg-paper text-ink border-line hover:bg-surface"
                          }`}
                        >
                          <input
                            type="radio"
                            name="sessionType"
                            value={option}
                            checked={checked}
                            onChange={() => updateField("sessionType", option)}
                            className="sr-only"
                          />
                          {option}
                        </label>
                      );
                    }
                  )}
                </div>
                {errors.sessionType && (
                  <p
                    id="consultation-sessionType-error"
                    className="text-sm text-ochre mt-1.5"
                    role="alert"
                  >
                    {errors.sessionType}
                  </p>
                )}
              </fieldset>

              <div>
                <label
                  htmlFor="consultation-message"
                  className="block text-sm text-ink mb-1.5"
                >
                  Message <span className="text-ochre">*</span>
                </label>
                <textarea
                  id="consultation-message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "consultation-message-error" : undefined
                  }
                  className="w-full bg-paper border border-line rounded-card px-4 py-2.5 text-ink placeholder:text-muted/70 focus:border-moss focus:outline-none transition-colors resize-none"
                  placeholder="Tell us a bit about what you're looking for support with..."
                />
                {errors.message && (
                  <p
                    id="consultation-message-error"
                    className="text-sm text-ochre mt-1.5"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-ink text-paper px-7 py-3.5 rounded-card hover:bg-moss transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
