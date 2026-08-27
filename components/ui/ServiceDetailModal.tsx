"use client";

import { useEffect } from "react";
import { ServiceItem } from "@/data/siteData";
import {
  X,
  CheckCircle2,
  Users,
  Lightbulb,
  Cpu,
  Layers,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const { details } = service;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 animate-scale-up my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/40 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/80 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
              <span>Service Specification</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {service.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              {service.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white border border-slate-200/80 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-left text-xs sm:text-sm">
          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Core Capabilities & Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 gap-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
              {details.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable For & Use Cases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Suitable For */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Who It's For</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                {details.suitableFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Use Cases */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>Typical Use Cases</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                {details.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">▸</span>
                    <span className="leading-snug">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Implementation Process */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Implementation Process</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {details.process.map((step) => (
                <div
                  key={step}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-medium"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>Technologies & Environments</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {details.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl transition-colors border border-transparent hover:border-slate-200"
          >
            Close
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Discuss This Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
