import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
});

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = newsletterSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setStatus("loading");
    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/newsletter-subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: result.data.email }),
      });

      const data = await res.json();

      if (data.success && data.response === "newsletter_subscribed") {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Unable to subscribe. Please try again later.");
    }
  };

  return (
    <section className="py-20 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Stay Updated</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get weekly insights in your inbox
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Join 5,000+ filmmakers receiving our weekly digest of industry insights,
            production tips, and exclusive interviews.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <CheckCircle className="w-5 h-5" />
              <span>You're subscribed! Welcome aboard.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(null); }}
                  disabled={status === "loading"}
                />
              </div>
              <Button type="submit" size="lg" className="h-12" disabled={status === "loading"}>
                {status === "loading" ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Subscribing...</>
                ) : "Subscribe"}
              </Button>
            </form>
          )}

          {error && (
            <div className="flex items-center justify-center gap-1.5 mt-3 text-destructive text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {status !== "success" && (
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your inbox.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
