import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
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
              className="bg-white rounded-2xl shadow-sm border border-[#E8DFF5] p-8 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-[#F7F2FD]"
              />
              <h2
                className="text-xl font-bold mb-1"
                style={{ color: "#20124D", fontFamily: "'Lato', sans-serif" }}
              >
                {member.name}
              </h2>
              <p
                className="text-sm mb-5"
                style={{ color: "#5C28A4", fontFamily: "'Lato', sans-serif", fontWeight: 500 }}
              >
                {member.role}
              </p>

              <div className="flex flex-col gap-3 w-full">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 text-sm py-2.5 px-4 rounded-lg hover:bg-[#F7F2FD] transition-colors"
                  style={{ color: "#20124D", fontFamily: "'Lato', sans-serif" }}
                >
                  <Mail className="w-4 h-4 text-[#5C28A4]" />
                  {member.email}
                </a>

                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center gap-2 text-sm py-2.5 px-4 rounded-lg hover:bg-[#F7F2FD] transition-colors"
                    style={{ color: "#20124D", fontFamily: "'Lato', sans-serif" }}
                  >
                    <Phone className="w-4 h-4 text-[#5C28A4]" />
                    {member.phone}
                  </a>
                )}

                <a
                  href={member.vcard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-[#D4BAF4] text-[#5C28A4] hover:bg-[#F7F2FD]"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download VCard
                  </Button>
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
