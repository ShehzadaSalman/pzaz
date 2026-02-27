import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://projector.pzaz.io/api/send_contact_us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.fullName,
          email: form.email,
          company_name: form.companyName,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ fullName: "", companyName: "", email: "", phone: "", message: "" });
      onOpenChange(false);
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you shortly.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe" maxLength={100} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" name="companyName" value={form.companyName} onChange={handleChange} placeholder="Acme Inc." maxLength={100} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" maxLength={255} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" maxLength={20} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" maxLength={1000} rows={4} required />
          </div>
          <Button type="submit" disabled={submitting} className="mt-2">
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
