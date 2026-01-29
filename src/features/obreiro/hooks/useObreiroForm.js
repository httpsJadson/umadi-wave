import { useState } from "react";
import { initialObreiroForm } from "@/features/obreiro/lib/initialForm";

export function useObreiroForm(open) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialObreiroForm);
  const [errors, setErrors] = useState({});

  const isOpen = Boolean(open);

  function resetAll() {
    setStep(1);
    setForm(initialObreiroForm);
    setErrors({});
  }

  function updateField(key) {
    return (e) => {
      const value = e.target.value;

      setForm((prev) => ({ ...prev, [key]: value }));

      
      setErrors((prev) => {
        if (!prev?.[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    };
  }

  function setSingle(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));

    
    setErrors((prev) => {
      if (!prev?.[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function toggleInArray(field, value) {
    setForm((prev) => {
      const arr = prev[field] || [];
      const has = arr.includes(value);
      return {
        ...prev,
        [field]: has ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });

    
    setErrors((prev) => {
      if (!prev?.[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function nextStep() {
    setStep((s) => Math.min(5, s + 1));
  }

  function prevStep() {
    setStep((s) => Math.max(1, s - 1));
  }

  return {
    isOpen,
    step,
    setStep,
    form,
    setForm,
    errors,
    setErrors,
    resetAll,
    updateField,
    setSingle,
    toggleInArray,
    nextStep,
    prevStep,
  };
}
