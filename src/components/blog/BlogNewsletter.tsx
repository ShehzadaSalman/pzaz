import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { z } from "zod";
import { useTranslation } from "react-i18next";

const newsletterSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
});

const BlogNewsletter = () => {
  const { t } = useTranslation("blog");
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
        setError(t("blog.newsletter_error_generic"));
      }
    } catch {
      setStatus("error");
      setError(t("blog.newsletter_error_network"));
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
            <span className="text-sm font-medium text-primary">{t("blog.newsletter_badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("blog.newsletter_title")}
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            {t("blog.newsletter_desc")}
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <CheckCircle className="w-5 h-5" />
              <span>{t("blog.newsletter_success")}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder={t("blog.newsletter_email_placeholder")}
                  className="pl-10 h-12"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(null); }}
                  disabled={status === "loading"}
                />
              </div>
              <Button type="submit" size="lg" className="h-12" disabled={status === "loading"}>
                {status === "loading" ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> {t("blog.newsletter_subscribing")}</>
                ) : t("blog.newsletter_subscribe")}
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
              {t("blog.newsletter_no_spam")}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
