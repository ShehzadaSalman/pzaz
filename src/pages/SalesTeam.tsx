import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, Phone } from "lucide-react";
import teamTom from "@/assets/team-tom.webp";
import teamVince from "@/assets/team-vince.webp";

const teamMembers = [
  {
    name: "Tom Emmerson",
    role: "Chief Operating Officer",
    email: "tom@pzaz.io",
    phone: "+447723350102",
    vcard: "https://qr.me-qr.com/ru/entry/vcard/Ofcn0AY6",
    image: teamTom,
  },
  {
    name: "Vincent Weberink",
    role: "Chief Executive Officer",
    email: "vince@pzaz.io",
    vcard: "https://qr.me-qr.com/ru/entry/vcard/uHxO5W9R",
    image: teamVince,
  },
];

const SalesTeam = () => {
  return (
    <>
      <SEO
        title="Meet Our Sales Team – Pzaz"
        description="Reach out to the Pzaz sales team directly. We're here to assist you personally."
        url="https://pzaz.io/sales-team"
      />
      <Header />
      <main className="pt-28 pb-20 bg-[#faf9fb] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#20124D", fontFamily: "'Lato', sans-serif" }}
          >
            Meet Our Sales Team.
          </h1>
          <p
            className="text-lg md:text-xl mb-2"
            style={{ color: "#4E2273", fontFamily: "'Lato', sans-serif" }}
          >
            We're here to assist you personally.
          </p>
          <p
            className="text-base"
            style={{ color: "#6B7280", fontFamily: "'Lato', sans-serif" }}
          >
            Reach out directly—we're always happy to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-[24px] p-8 flex flex-col items-center text-center bg-gradient-to-br from-[#F7F2FD] to-[#E8DFF5] border border-[#D4BAF4]"
            >
              {/* Photo */}
              <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-6 border-2 border-[#D4BAF4] bg-gradient-to-br from-[#8B1DFF]/20 to-[#5C28A4]/30]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h2 className="text-xl font-bold mb-2 text-[#20124D] font-['Lato']">
                {member.name}
              </h2>

              {/* Role pill */}
              <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-[#5C28A4] text-white mb-5 font-['Lato']">
                {member.role}
              </span>

              {/* Contact links */}
              <div className="flex flex-col gap-2 w-full items-center">
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-[#20124D] hover:text-[#5C28A4] transition-colors font-['Lato']"
                >
                  {member.email}
                </a>

                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="text-sm text-[#20124D] hover:text-[#5C28A4] transition-colors font-['Lato']"
                  >
                    {member.phone}
                  </a>
                )}

                <a
                  href={member.vcard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#20124D] underline underline-offset-2 hover:text-[#5C28A4] transition-colors mt-1 font-['Lato']"
                >
                  Download VCard
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SalesTeam;
