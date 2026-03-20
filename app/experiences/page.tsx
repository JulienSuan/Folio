"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Experiences() {
  return (
    <div className="relative w-full min-h-full flex justify-center px-6 py-24 md:px-8">
      <div className="max-w-4xl w-full space-y-28">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight text-white">
              Parcours Professionnel
            </h1>
            <div className="h-[3px] w-24 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto md:mx-0" />
          </div>

          <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto md:mx-0">
            Mon évolution dans le développement web, du front-end orienté performance et UX jusqu’à l’exploration du full-stack.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

          <div className="space-y-20 md:space-y-28">

            <TimelineItem
              date="2025 – Now"
              title="Transition full-stack autodidacte"
              company="Autodidacte"
              side="right" 
              highlights={[
                "Apprentissage actif Node.js, Express, bases de données et API REST",
                "Utilisation de l’IA comme co-développeur",
                "Obtention du permis B",
                "Projets perso pour consolider full-stack (React/Next.js + Node)",
              ]}
              isEducation={true}
            />

            <TimelineItem
              date="2024 – 2025"
              title="Développeur Web – Next.js"
              company="Génération Internet / Dynabuy"
              side="left"
              highlights={[
                "Refonte complète et migration vers Next.js + TypeScript (du zéro au prod)",
                "Intégration fidèle des maquettes Adobe XD → composants React réutilisables",
                "Optimisation SSR/CSR, performances, SEO et Core Web Vitals",
                "Collaboration étroite avec l’API interne et l’équipe produit",
              ]}
            />

            <TimelineItem
              date="2024 – 2025"
              title="Projet interne Mercedes"
              company="(via Génération Internet)"
              side="right"
              highlights={[
                "Intégration de maquettes Figma dans une application Symfony + React",
                "Développement et refonte d’interfaces de gestion internes",
                "Amélioration de l’UX sur outils métier",
              ]}
            />

            <TimelineItem
              date="2023 – 2024"
              title="Développeur Web – Freelance"
              company="Indépendant"
              side="left"
              highlights={[
                "Conception & développement sites sur mesure (WordPress, WooCommerce, thèmes custom)",
                "Rédaction cahiers des charges + analyse besoins clients",
                "Optimisation SEO / performances + formation clients",
              ]}
            />

            <TimelineItem
              date="2021 – 2022"
              title="Développeur Web & SEO"
              company="Flexy-Web"
              side="right"
              highlights={[
                "Création et optimisation de thèmes / plugins custom (WordPress, Shopify, WooCommerce)",
                "Configuration et gestion de boutiques e-commerce",
                "Travail poussé sur le SEO et les performances marketing",
              ]}
            />

            <TimelineItem
              date="2019 – 2021"
              title="Formation Développeur d’applications"
              company="École / Autodidacte"
              side="left"
              highlights={[
                "Bac+3 Informatique – spécialisation React / Next.js",
                "Apprentissage intensif JavaScript, TypeScript, architecture front-end",
              ]}
              isEducation={true}
            />

          </div>
        </div>

      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[800px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
    </div>
  );
}

// Le composant TimelineItem reste exactement le même que dans ton code original
interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  side: "left" | "right";
  highlights: string[];
  isEducation?: boolean;
}

function TimelineItem({ date, title, company, side, highlights, isEducation = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
        side === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary/60 border-4 border-background z-10" />

      <div className={`w-full md:w-5/12 ${side === "right" ? "md:text-right" : "md:text-left"}`}>
        <div className={`p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-secondary/30 transition-all duration-300 ${isEducation ? "border-dashed border-secondary/40" : ""}`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              {title}
            </h3>
            <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
              {date}
            </span>
          </div>

          <p className="text-secondary text-base font-medium mb-5">
            {company}
          </p>

          <ul className="space-y-2.5 text-gray-300 text-sm pl-5 list-disc marker:text-secondary/70">
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}