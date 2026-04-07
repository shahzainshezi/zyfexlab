export default function TechStrip() {
  const items = [
    { title: "OpenAI GPT-4", desc: "Conversational AI" },
    { title: "Twilio SMS", desc: "Instant Notifications" },
    { title: "Google Ads", desc: "Traffic & Targeting" },
    { title: "Zapier + Make", desc: "Workflow Automation" },
    { title: "GoHighLevel", desc: "CRM & Pipelines" },
    { title: "Meta Ads", desc: "Social Retargeting" }
  ];

  return (
    <div className="w-full bg-[#0e0e16] border-y border-white/5 py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <span className="text-white font-bold text-lg mb-1">{item.title}</span>
              <span className="text-[#5a5a72] text-xs font-mono uppercase tracking-wider">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}