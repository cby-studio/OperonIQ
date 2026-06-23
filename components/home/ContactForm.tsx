const fields = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'company', label: 'Company', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
];

export function ContactForm() {
  return (
    <section className="px-5 pb-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 shadow-glass backdrop-blur-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-operon-green">
            Contact
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">
            Start with a focused conversation.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Share the operating challenge, trusted data priority or digital
            workforce opportunity you are exploring. This form is a UI
            placeholder only.
          </p>
        </div>

        <form className="rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-glass backdrop-blur-2xl sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.id} className="block">
                <span className="text-sm font-semibold text-slate-200">
                  {field.label}
                </span>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  className="mt-3 w-full rounded-sm border border-white/10 bg-navy-950/65 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-operon-cyan/60 focus:ring-2 focus:ring-operon-cyan/15"
                  placeholder={field.label}
                />
              </label>
            ))}
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-200">
              Message
            </span>
            <textarea
              id="message"
              name="message"
              rows={7}
              className="mt-3 w-full resize-none rounded-sm border border-white/10 bg-navy-950/65 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-operon-cyan/60 focus:ring-2 focus:ring-operon-cyan/15"
              placeholder="Tell us what you are trying to operationalize."
            />
          </label>

          <div className="mt-8">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-sm bg-gradient-to-r from-operon-blue via-operon-cyan to-operon-green px-6 py-4 text-sm font-bold text-navy-950 shadow-line-glow transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
