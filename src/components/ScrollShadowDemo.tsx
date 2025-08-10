'use client';

import { useState } from 'react';
import { GlobalScrollShadow } from './ui/GlobalScrollShadow';

export function ScrollShadowDemo() {
  const [config, setConfig] = useState({
    size: 120,
    blurIntensity: 25,
    shadowColor: 'rgba(3, 20, 74, 0.15)'
  });

  const presets = [
    {
      name: 'ClimGO Classique',
      config: { size: 120, blurIntensity: 25, shadowColor: 'rgba(3, 20, 74, 0.15)' }
    },
    {
      name: 'Subtile',
      config: { size: 80, blurIntensity: 15, shadowColor: 'rgba(0, 0, 0, 0.08)' }
    },
    {
      name: 'Dramatique',
      config: { size: 200, blurIntensity: 35, shadowColor: 'rgba(3, 20, 74, 0.25)' }
    },
    {
      name: 'Moderne',
      config: { size: 150, blurIntensity: 20, shadowColor: 'rgba(59, 130, 246, 0.12)' }
    }
  ];

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          🎨 Démonstration du Scroll Shadow Global
        </h1>
        
        {/* Contrôles */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Contrôles personnalisés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Taille des ombres: {config.size}px
              </label>
              <input
                type="range"
                min="50"
                max="300"
                value={config.size}
                onChange={(e) => setConfig({ ...config, size: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Intensité du flou: {config.blurIntensity}px
              </label>
              <input
                type="range"
                min="5"
                max="50"
                value={config.blurIntensity}
                onChange={(e) => setConfig({ ...config, blurIntensity: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Couleur
              </label>
              <input
                type="color"
                value={config.shadowColor.replace(/[rgba()]/g, '').split(',').slice(0, 3).join(',')}
                onChange={(e) => {
                  const rgb = e.target.value.match(/\d+/g)?.map(Number);
                  if (rgb) {
                    setConfig({ ...config, shadowColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.15)` });
                  }
                }}
                className="w-full h-10 rounded border"
              />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Configuration actuelle: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {JSON.stringify(config, null, 2)}
              </code>
            </p>
          </div>
        </div>

        {/* Presets */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Configurations prédéfinies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => setConfig(preset.config)}
                className="p-3 text-sm bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Démonstration du scroll shadow */}
        <GlobalScrollShadow
          size={config.size}
          shadowColor={config.shadowColor}
          blurIntensity={config.blurIntensity}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Zone de test du scroll shadow
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Faites défiler cette page pour voir l'effet du scroll shadow en action. 
            Les ombres apparaîtront en haut et en bas selon votre configuration.
          </p>
          
          {/* Contenu de test pour le scroll */}
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                Section de test {i + 1}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
          
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              🎯 Faites défiler vers le haut pour voir l'ombre supérieure
            </p>
          </div>
        </GlobalScrollShadow>
      </div>
    </div>
  );
}
