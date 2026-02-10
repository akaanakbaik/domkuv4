import { useState, useEffect } from 'react';

interface IPLocationData {
  country?: string;
  region?: string;
  city?: string;
  timezone?: string;
}

const useIPDetection = () => {
  const [location, setLocation] = useState<IPLocationData | null>(null);
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectIP = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        setLocation({
          country: data.country,
          region: data.region,
          city: data.city,
          timezone: data.timezone
        });

        // Set language based on country
        const detectedLang = data.country === 'ID' ? 'id' : 'en';
        setLanguage(detectedLang);
      } catch (error) {
        console.error('Failed to detect IP location:', error);
        setLanguage('en'); // Default to English
      } finally {
        setIsLoading(false);
      }
    };

    detectIP();
  }, []);

  return { location, language, isLoading };
};

export default useIPDetection;