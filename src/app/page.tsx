'use client';
import React, { useEffect, useState } from 'react';
import HomePageLayout from '@/app/components/HomePageLayout/HomePageLayout';
import { HandlersProvider } from '@/app/hooks/HandlersContext';
import SplashScreen from '@/app/components/SplashScreen/SplashScreen';
import Hero from './components/version2/pages/Hero/';
import Therapy from '@/app/components/version2/pages/Therapy';

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      sessionStorage.setItem('spashShown', 'true');
      setLoading(false);
    };

    fetchData();
  }, []);

  const isSplashScreenShown = () => {
    return sessionStorage.getItem('spashShown') === 'true';
  };

  if (isLoading && !isSplashScreenShown()) {
    return (
      <HandlersProvider>
        <SplashScreen />
      </HandlersProvider>
    );
  }

  return (
    <HandlersProvider>
      <HomePageLayout>
        <main className="flex flex-col h-[100%] flex relative overflow-x-hidden desktopsm:flex-row box-border">
          {/*<Hero />*/}
          <Therapy />
          {/*<CallMeButton /> */}
        </main>
      </HomePageLayout>
    </HandlersProvider>
  );
}
