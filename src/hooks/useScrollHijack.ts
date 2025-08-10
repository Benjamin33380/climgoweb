'use client';

import { useEffect, useState } from 'react';

interface ScrollHijackOptions {
  containerSelector: string;
  stepSelector: string;
  progressSelector: string;
  threshold?: number;
}

export const useScrollHijack = ({
  containerSelector,
  stepSelector,
  progressSelector,
  threshold = 0.5
}: ScrollHijackOptions) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    const steps = document.querySelectorAll(stepSelector);
    const progressPoints = document.querySelectorAll(progressSelector);

    if (!container || steps.length === 0) return;

    let scrollTimeout: NodeJS.Timeout;

    const updateProgressPoints = (activeStep: number) => {
      const progressLines = document.querySelectorAll('.progress-line');
      
      progressPoints.forEach((point, index) => {
        const stepNumber = index + 1;
        const pointElement = point as HTMLElement;
        
        if (stepNumber <= activeStep) {
          // Point actif ou complété
          pointElement.style.background = 'linear-gradient(135deg, #03144a, #1e40af)';
          pointElement.style.color = 'white';
          pointElement.style.boxShadow = '0 10px 25px rgba(3, 20, 74, 0.3)';
          pointElement.style.transform = 'scale(1.1)';
        } else {
          // Point inactif
          pointElement.style.background = 'linear-gradient(135deg, #e5e7eb, #9ca3af)';
          pointElement.style.color = '#6b7280';
          pointElement.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          pointElement.style.transform = 'scale(1)';
        }
      });

      // Mettre à jour les lignes de progression
      progressLines.forEach((line) => {
        const lineElement = line as HTMLElement;
        const fromStep = parseInt(lineElement.dataset.from || '1');
        const toStep = parseInt(lineElement.dataset.to || '2');
        
        if (activeStep >= toStep) {
          // Ligne complètement remplie
          lineElement.style.transform = 'scaleX(1)';
        } else if (activeStep >= fromStep) {
          // Ligne partiellement remplie
          const progress = Math.min(1, (activeStep - fromStep + 1) / 1);
          lineElement.style.transform = `scaleX(${progress})`;
        } else {
          // Ligne vide
          lineElement.style.transform = 'scaleX(0)';
        }
      });
    };

    const updateStepVisibility = (activeStep: number) => {
      steps.forEach((step, index) => {
        const stepElement = step as HTMLElement;
        const stepNumber = index + 1;
        
        if (stepNumber === activeStep) {
          // Bulle active
          stepElement.style.opacity = '1';
          stepElement.style.transform = 'translateY(0px) scale(1)';
          stepElement.classList.add('active');
        } else if (stepNumber < activeStep) {
          // Bulles déjà vues
          stepElement.style.opacity = '0.6';
          stepElement.style.transform = 'translateY(5px) scale(0.95)';
          stepElement.classList.remove('active');
        } else {
          // Bulles pas encore vues
          stepElement.style.opacity = '0.3';
          stepElement.style.transform = 'translateY(10px) scale(0.9)';
          stepElement.classList.remove('active');
        }
      });
    };

    const handleScroll = () => {
      if (isScrolling) return;

      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      const containerRect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;

      // Si le conteneur est visible
      if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
        let activeStep = 1;

        // Calculer quel step devrait être actif basé sur la position de scroll
        steps.forEach((step, index) => {
          const stepElement = step as HTMLElement;
          const stepRect = stepElement.getBoundingClientRect();
          const stepCenter = stepRect.top + stepRect.height / 2;

          if (stepCenter <= viewportCenter + (stepRect.height * threshold)) {
            activeStep = index + 1;
          }
        });

        if (activeStep !== currentStep) {
          setCurrentStep(activeStep);
          updateProgressPoints(activeStep);
          updateStepVisibility(activeStep);
        }
      }

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    const handleProgressPointClick = (stepNumber: number) => {
      const targetStep = steps[stepNumber - 1] as HTMLElement;
      if (targetStep) {
        targetStep.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    };

    // Ajouter les événements de clic aux points de progression
    progressPoints.forEach((point, index) => {
      const stepNumber = index + 1;
      point.addEventListener('click', () => handleProgressPointClick(stepNumber));
    });

    // Initialiser l'état
    updateProgressPoints(currentStep);
    updateStepVisibility(currentStep);

    // Ajouter l'événement de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      progressPoints.forEach((point, index) => {
        const stepNumber = index + 1;
        point.removeEventListener('click', () => handleProgressPointClick(stepNumber));
      });
    };
  }, [containerSelector, stepSelector, progressSelector, threshold, currentStep, isScrolling]);

  return { currentStep };
};
