"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  FiCoffee,
  FiFilm,
} from "react-icons/fi";
import { MdTempleBuddhist, MdFitnessCenter, MdGamepad} from "react-icons/md"; 

export default function Profile() {
  return (
    <div className="relative w-full min-h-screen flex justify-center px-6 py-20 md:py-32">
      <div className="max-w-5xl w-full space-y-24 md:space-y-32">

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10 text-center md:text-left"
        >
          <div className="space-y-5">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Julien Bigot
            </h1>
            <div className="h-[3px] w-32 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto md:mx-0" />
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto md:mx-0">
            <p>
            Développeur <span className="text-white font-medium">Front-end</span> spécialisé en{" "}
            <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">React</span> et{" "}
            <span className="text-white font-medium">TypeScript</span> (3+ ans d'expérience).
          </p>
          <p>
            J'aime me battre avec un problème jusqu'à ce que je comprenne vraiment pourquoi ça ne marchait pas. Pas juste corriger — comprendre. C'est ce qui me donne envie d'écrire du code que je suis fier de relire six mois plus tard.
          </p>
          <p>
            Cela dit, je ne suis pas du genre à bouder les nouveaux outils. J'apprends à travailler avec l'IA, à m'en servir intelligemment mais j'aime quand même garder la partie réflexion pour moi. C'est tout de même ce qui caractérise un développeur.
          </p>
          </div>
        </motion.section>

        <Section title="Expertise Technique">
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js", "React", "TypeScript", "TailwindCSS", "Clean Architecture",
              "Design Patterns", "POO", "Design Systems", "API REST",
              "Git / GitHub", "SEO & Performance",
            ].map((tech) => (
              <StackBadge key={tech}>{tech}</StackBadge>
            ))}
          </div>
        </Section>
        <Section title="Expertise En Apprentissage">
          <div className="flex flex-wrap gap-3">
            {[
              "NodeJS", "NoSQL", "SQL", "HTTPS", "Express", "MongoDB", "PostgreSQL", "IA Agents"
            ].map((tech) => (
              <StackBadge key={tech}>{tech}</StackBadge>
            ))}
          </div>
        </Section>

        <Section title="Évolution Professionnelle">
          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Actuellement, j’approfondis le back-end avec <span className="text-white font-medium">Node.js</span> et les architectures full-stack. Mon objectif : maîtriser l’ensemble du cycle de développement pour concevoir et livrer des applications complètes et maintenables.
          </p>
        </Section>

        <Section title="En dehors du code">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
    <PassionCard
      imageUrl="/hobbies/run.gif"
      icon={<MdFitnessCenter size={28} />}
      title="Calisthénie"
      description="Routine quotidienne pour la force physique & mentale. Me permet de rester focus et énergique sur de longues sessions de code."
    />

    <PassionCard
      imageUrl="/hobbies/shin.gif"
      icon={<MdGamepad size={28} />}
      title="Jeux vidéo"
      description="Fan depuis toujours. J’intègre souvent des idées de level design, narration et UX tirées de Zelda BOTW, Monster Hunter, Outer Wilds… dans mes projets web."
    />

    <PassionCard
      imageUrl="/hobbies/jap.gif"
      icon={<MdTempleBuddhist size={28} />}
      title="Culture japonaise"
      description="Minimalisme, wabi-sabi, esthétique traditionnelle → ma principale source d’inspiration pour écrire du code propre et des interfaces élégantes."
    />
  </div>

  <div className="mt-12 space-y-8 text-gray-300 text-sm md:text-base">
    <div>
      <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-2">
        <MdGamepad className="text-secondary" /> Jeux marquants
      </h3>
      <p>Zelda: Breath of the Wild, Minish Cap • Monster Hunter World/Rise • Outer Wilds • Omori</p>
    </div>

    <div>
      <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-2">
        <FiFilm className="text-secondary" /> Animés & films favoris
      </h3>
      <p>Naruto, Vinland Saga, Made in Abyss • Tron Legacy, Kung Fu Panda, Le Cinquième Élément</p>
    </div>

    <div>
      <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-2">
        <FiCoffee className="text-secondary" /> Petits rituels
      </h3>
      <p>Calisthénie quotidienne • Balades côtières • Lecture SF/manga avant de dormir • Sieste tactique</p>
    </div>
  </div>

</Section>

      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/4 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-sm uppercase tracking-widest text-gray-500 font-medium">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

function StackBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.04 }}
      className="px-5 py-2.5 text-sm rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-200 hover:border-secondary/50 hover:bg-white/8"
    >
      {children}
    </motion.span>
  );
}

function PassionCard({
  imageUrl,
  icon,
  title,
  description,
}: {
  imageUrl?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white/4 backdrop-blur-lg border border-white/8 hover:border-secondary/40  shadow-sm hover:shadow-secondary/10 flex flex-col h-full"
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            unoptimized
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow gap-4">
        <div className="flex items-center gap-3">
          <div className="text-secondary text-opacity-90 text-2xl">{icon}</div>
          <h4 className="text-xl font-medium text-white">{title}</h4>
        </div>
        <p className="text-gray-400 leading-relaxed text-base flex-grow">{description}</p>
      </div>
    </motion.div>
  );
}