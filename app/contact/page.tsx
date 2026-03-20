"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiGithub, FiMail, FiDownload, FiLinkedin, FiMessageSquare } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgoljbpj"; 

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const dataform = useRef(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Message envoyé ! Je te réponds très vite.");
        dataform.current.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData?.error || "Erreur lors de l'envoi");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Une erreur est survenue. Essaie par email directement.");
    }
  };

  return (
    <div className="relative w-full min-h-full flex justify-center px-6 py-24 md:px-8">
      <div className="max-w-4xl w-full space-y-28">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center"
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight text-white">
              Contact
            </h1>
            <div className="h-[3px] w-24 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto" />
          </div>

          <p className="text-gray-400 leading-relaxed text-lg max-w-2xl mx-auto">
            Discutons de ton projet, d'une opportunité, ou simplement de code (React, Next.js, TypeScript, Node…).
            Je suis ouvert aux collaborations, freelances et postes full-remote / hybride.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          <SocialLink href="https://github.com/JulienSuan" icon={<FiGithub size={28} />} label="GitHub" username="@JulienSuan" />
          <SocialLink href="https://www.linkedin.com/in/julien-bigot-903546243/" icon={<FiLinkedin size={28} />} label="LinkedIn" username="Julien Bigot" />
          <SocialLink href="mailto:jbigot.dev@gmail.com" icon={<FiMail size={28} />} label="Email" username="jbigot.dev@gmail.com" />
          <SocialLink href="https://discord.com/users/735922860249448468" icon={<RiDiscordLine size={28} />} label="Discord" username="aslan_v" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="/cv_bigot_julien.pdf"
            download="/cv_bigot_julien.pdf"
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 hover:border-secondary/60 text-white font-medium text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--secondary-rgb),0.25)] hover:scale-105 active:scale-100"
          >
            <FiDownload size={24} className="group-hover:animate-bounce" />
            Télécharger mon CV (PDF)
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-10 pt-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-semibold text-center text-white">
            Envoie-moi un message
          </h3>

          <form ref={dataform} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"          
                placeholder="Ton prénom"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-white placeholder-gray-500"
              />
              <input
                type="email"
                name="email"         
                placeholder="Ton email"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-white placeholder-gray-500"
              />
            </div>

            <textarea
              name="message"         
              placeholder="Ton message..."
              rows={5}
              required
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 text-white placeholder-gray-500 resize-none"
            />

            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div className="flex justify-center">
              <button
  type="submit"
  disabled={status === "loading"}
  className={`
    px-10 py-4 rounded-xl
    bg-gradient-to-r from-secondary/20 to-primary/10
    text-white font-medium
    border border-secondary/20 hover:border-secondary/50
    transition-all duration-300
    hover:shadow-[0_0_20px_rgba(var(--secondary-rgb),0.15)]
    hover:scale-[1.02]
    disabled:opacity-60 disabled:cursor-not-allowed
  `}
>
  {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
</button>
            </div>

            {status === "success" && (
              <p className="text-center text-green-400 font-medium">{message}</p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 font-medium">{message}</p>
            )}
          </form>

          <p className="text-center text-sm text-gray-500">
            Ou contacte-moi directement : jbigot.dev@gmail.com
          </p>
        </motion.div>

      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-secondary/5 blur-[140px] rounded-full pointer-events-none" />
    </div>
  );
}

// SocialLink reste identique (pas changé)
function SocialLink({ href, icon, label, username }: { href: string; icon: React.ReactNode; label: string; username: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-secondary/40 hover:bg-white/10 transition-all duration-300 min-w-[140px] text-center"
    >
      <div className="text-secondary group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <span className="text-white font-medium">{label}</span>
      <span className="text-sm text-gray-500">{username}</span>
    </a>
  );
}