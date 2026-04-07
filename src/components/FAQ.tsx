import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "How long does it take to get set up?",
      a: "Most projects are fully built and launched within 7-14 business days. After our initial strategy call, we move fast."
    },
    {
      q: "Do I need to be tech-savvy to work with you?",
      a: "Not at all. We handle everything from setup to maintenance. You'll get a simple dashboard to see results, and we're always one message away."
    },
    {
      q: "What kinds of businesses do you work with?",
      a: "We specialize in local service businesses — medical spas, dental offices, law firms, gyms, roofers, cleaners, and more."
    },
    {
      q: "Is there a contract?",
      a: "No long-term contracts. We work month-to-month and earn your business every single month."
    },
    {
      q: "Can I keep my existing website?",
      a: "Yes! We can build automation on top of your existing site, or rebuild it if you want a performance upgrade."
    },
    {
      q: "What makes Zyfex Lab different from other agencies?",
      a: "We combine design and automation in one system. Most agencies do one or the other. We connect them — so your website doesn't just look good, it works for you 24/7."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0a0a10] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-[#7c6cf0] mb-4 tracking-wider">GOT QUESTIONS?</div>
          <h2 className="text-4xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/5">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-[#7c6cf0] transition-colors py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#9191a8] text-base pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}