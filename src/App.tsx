/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  ArrowUpRight,
  Maximize2,
  MousePointer2,
  Target
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <div className="text-sm font-bold tracking-widest uppercase">
            Brinton <span className="text-accent">Builds</span>
          </div>
          <div className="hidden items-center gap-12 text-[11px] font-semibold tracking-[0.2em] uppercase lg:flex">
            <span className="text-accent">Project: Arborize 01</span>
          </div>
          <a 
            href="#reserve" 
            className="group flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-accent"
          >
            Reserve Your Build
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative flex min-h-screen flex-col justify-end border-b border-line px-6 pt-32 pb-24 lg:px-12">
          <div className="absolute top-0 right-0 h-full w-1/3 border-l border-line bg-surface/30 px-6 pt-32 hidden lg:block">
             <div className="sticky top-40 space-y-12">
               <div className="space-y-4">
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Status</span>
                 <p className="font-display text-sm">Completed 2024</p>
               </div>
               <div className="space-y-4">
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Capability</span>
                 <p className="font-display text-sm">Full Redesign, Strategy, Copywriting</p>
               </div>
             </div>
          </div>

          <div className="max-w-4xl space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-accent"
            >
              Case Study
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl"
            >
              Setting the Tone for a Professional <span className="text-ink-dim italic">Arborist.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-lg text-ink-dim sm:text-xl lg:leading-relaxed"
            >
              A cinematic digital platform built to establish trust, showcase ISA certification, and turn local traffic into high-value estimate requests.
            </motion.p>
          </div>
        </section>

        {/* 2. PROJECT SNAPSHOT */}
        <section className="grid grid-cols-2 border-b border-line lg:grid-cols-4">
          <div className="flex border-r border-line p-8 lg:p-12">
            <div className="space-y-2">
              <span className="text-[9px] font-bold tracking-widest uppercase text-accent">Client</span>
              <p className="font-display text-sm font-medium">Arborize Ltd.</p>
            </div>
          </div>
          <div className="flex border-r border-line p-8 lg:p-12">
            <div className="space-y-2">
              <span className="text-[9px] font-bold tracking-widest uppercase text-accent">Industry</span>
              <p className="font-display text-sm font-medium">Arborist & Landscaping</p>
            </div>
          </div>
          <div className="flex border-r border-line p-8 lg:p-12">
            <div className="space-y-2">
              <span className="text-[9px] font-bold tracking-widest uppercase text-accent">Service Area</span>
              <p className="font-display text-sm font-medium">Simcoe County</p>
            </div>
          </div>
          <div className="flex p-8 lg:p-12">
            <div className="space-y-2">
              <span className="text-[9px] font-bold tracking-widest uppercase text-accent">Objective</span>
              <p className="font-display text-sm font-medium">Generate Estimate Requests</p>
            </div>
          </div>
        </section>

        {/* 3. THE CONTRACTOR */}
        <section className="grid border-b border-line lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-line p-8 lg:border-b-0 lg:border-r lg:p-24">
            <div className="max-w-md space-y-12">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">The Partner</span>
              <h2 className="font-display text-4xl font-medium tracking-tight">Expertise Already Existed.</h2>
              <div className="space-y-6 text-base text-ink-dim leading-relaxed">
                <p>
                  Arborize is a professional arborist and landscaping company. Jay McCague already had the expertise, heavy equipment, and a reputation for excellence.
                </p>
                <p>
                  With ISA Certified Arborist and TRAQ Qualified credentials, the credibility was unquestionable. The challenge was that their digital presence didn't reflect that fast enough for homeowners.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  ISA Certified
                </div>
                <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  TRAQ Qualified
                </div>
                <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  Fully Insured
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden bg-surface grayscale transition-all duration-700 hover:grayscale-0 lg:aspect-auto">
            <img 
              src="https://picsum.photos/seed/arborist-01/1200/1200" 
              alt="Arborist climbing a tree with professional gear" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 4. THE CHALLENGE */}
        <section className="grid border-b border-line lg:grid-cols-2">
          <div className="relative hidden aspect-square overflow-hidden bg-surface lg:block">
            <img 
              src="https://picsum.photos/seed/chainsaw-01/1200/1200" 
              alt="Chainsaw action with safety gear" 
              className="h-full w-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-24">
             <div className="max-w-md space-y-12">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">The Problem</span>
               <h2 className="font-display text-4xl font-medium tracking-tight">The "Compare" Trap.</h2>
               <div className="space-y-6 text-base text-ink-dim leading-relaxed">
                 <p>
                   Homeowners compare contractors at lightning speed. If a site feels outdated or generic, trust drops instantly.
                 </p>
                 <p>
                   Arborize had the professional strengths, but the website wasn't help them look as established as they truly were. It was time for a digital foundation that mirrored their operational excellence.
                 </p>
               </div>
             </div>
          </div>
        </section>

        {/* 5. THE APPROACH */}
        <section className="border-b border-line">
          <div className="border-b border-line p-8 lg:p-12">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">The Strategy</span>
          </div>
          <div className="grid lg:grid-cols-3">
            <div className="border-b border-line p-8 transition-colors hover:bg-surface/50 lg:border-b-0 lg:border-r lg:p-12">
              <div className="space-y-6">
                <span className="font-display text-xs text-accent">01.</span>
                <h3 className="font-display text-2xl font-medium">Build Trust First</h3>
                <p className="text-sm text-ink-dim leading-relaxed">
                  We brought certifications, credentials, and professional proof to the forefront, positioning Arborize as the authoritative choice immediately upon entry.
                </p>
              </div>
            </div>
            <div className="border-b border-line p-8 transition-colors hover:bg-surface/50 lg:border-b-0 lg:border-r lg:p-12">
              <div className="space-y-6">
                <span className="font-display text-xs text-accent">02.</span>
                <h3 className="font-display text-2xl font-medium">Clarify Services</h3>
                <p className="text-sm text-ink-dim leading-relaxed">
                  The architecture was rebuilt around user intent. Homeowners can now identify specialized tree health and removal services within three seconds.
                </p>
              </div>
            </div>
            <div className="p-8 transition-colors hover:bg-surface/50 lg:p-12">
              <div className="space-y-6">
                <span className="font-display text-xs text-accent">03.</span>
                <h3 className="font-display text-2xl font-medium">Convert Visitors</h3>
                <p className="text-sm text-ink-dim leading-relaxed">
                  We simplified the estimate request flow. Large, clear CTA touchpoints were introduced for mobile-first users on a timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. WEBSITE SHOWCASE */}
        <section className="bg-surface py-24 lg:py-48">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-24 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
              <div className="max-w-xl space-y-6">
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Showcase</span>
                 <h2 className="font-display text-4xl font-medium tracking-tight lg:text-5xl">Built to Win Work.</h2>
              </div>
              <p className="max-w-sm text-sm text-ink-dim opacity-80">
                A neutral, premium aesthetic that balances technical authority with high-trust design language.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-line bg-bg shadow-2xl">
              <div className="flex h-10 items-center gap-2 border-b border-line px-4">
                <div className="h-1.5 w-1.5 rounded-full bg-line" />
                <div className="h-1.5 w-1.5 rounded-full bg-line" />
                <div className="h-1.5 w-1.5 rounded-full bg-line" />
              </div>
              <div className="aspect-video w-full overflow-hidden bg-[#1a1a1a] transition-transform duration-1000 group-hover:scale-[1.02]">
                 <img 
                   src="https://picsum.photos/seed/web-preview/1600/900" 
                   alt="Website showcase mockup" 
                   className="h-full w-full object-cover"
                   referrerPolicy="no-referrer"
                 />
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-display text-xs font-semibold tracking-widest text-accent uppercase">
                  <Maximize2 className="h-3.5 w-3.5" />
                  Impactful Presence
                </div>
                <p className="text-[13px] text-ink-dim leading-relaxed">Certifications highlighted early to establish instant credibility.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-display text-xs font-semibold tracking-widest text-accent uppercase">
                  <MousePointer2 className="h-3.5 w-3.5" />
                  Mobile-First Flow
                </div>
                <p className="text-[13px] text-ink-dim leading-relaxed">Frictionless estimate request flow designed for mobile users.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-display text-xs font-semibold tracking-widest text-accent uppercase">
                  <Target className="h-3.5 w-3.5" />
                  Strategic Clarity
                </div>
                <p className="text-[13px] text-ink-dim leading-relaxed">Clear service explanations to remove homeowner doubt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE RESULT */}
        <section className="grid border-y border-line lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-line p-8 lg:border-b-0 lg:border-r lg:p-24">
             <div className="max-w-md space-y-12">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">The Result</span>
               <h2 className="font-display text-4xl font-medium tracking-tight">Silent Sales Partner.</h2>
               <div className="space-y-6 text-base text-ink-dim leading-relaxed">
                 <p>
                   Arborize now commands a visual presence that matches their operational excellence. The website serves as a silent sales partner that qualifies leads before they even pick up the phone.
                 </p>
                 <p>
                   Homeowners now understand the quality of the business faster, leading to higher trust and more intentional estimate requests.
                 </p>
               </div>
               <div className="border-l-2 border-accent pl-6 py-2">
                 <p className="font-display text-lg italic text-ink">
                   "The website finally reflects the quality of our work. It’s mint."
                 </p>
                 <p className="mt-4 text-[10px] font-bold tracking-widest uppercase text-accent">Jay McCague · Arborize Ltd.</p>
               </div>
             </div>
          </div>
          <div className="relative aspect-square overflow-hidden bg-surface lg:aspect-auto">
            <img 
              src="https://picsum.photos/seed/crew-01/1200/1200" 
              alt="Tree removal crew on residential property" 
              className="h-full w-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 8. SALES CLOSE / CTA */}
        <section id="reserve" className="flex flex-col items-center justify-center border-b border-line px-6 py-32 text-center lg:px-12 lg:py-64">
          <div className="max-w-3xl space-y-12">
            <h2 className="font-display text-5xl font-medium tracking-tight lg:text-7xl">
              Most Contractor Websites Exist. <span className="text-accent">Very Few Are Built to Win Work.</span>
            </h2>
            <p className="mx-auto max-w-lg text-lg text-ink-dim">
              Homeowners compare contractors online at lightning speed. The contractor who looks more established usually gets the call.
            </p>
            <div className="pt-8">
              <a 
                href="#" 
                className="group flex flex-col items-center gap-6"
              >
                <div className="flex h-20 w-80 items-center justify-center border border-ink bg-bg text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 group-hover:bg-ink group-hover:text-bg">
                  Reserve Your Build
                </div>
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-accent opacity-0 transition-opacity group-hover:opacity-100 italic">
                  Available for select projects.
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-12 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 text-[10px] font-bold tracking-widest uppercase lg:flex-row lg:items-center">
          <div className="flex items-center gap-8">
            <span className="text-ink-dim opacity-50">© 2024 Brinton Builds</span>
            <span className="text-ink-dim opacity-50">Based in Ontario</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="transition-colors hover:text-accent">Instagram</a>
            <a href="#" className="transition-colors hover:text-accent">LinkedIn</a>
            <a href="#" className="transition-colors hover:text-accent">Process</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
