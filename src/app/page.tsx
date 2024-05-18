'use client';
import React, { useEffect, useState } from 'react';
import LeftColumn from '@/app/components/HomePage/LeftColumn/LeftColumn';
import RightColumn from '@/app/components/HomePage/RightColumn/RightColumn';
import CallMeButton from '@/app/components/CallMeButton/CallMeButton';
import HomePageLayout from '@/app/components/HomePageLayout/HomePageLayout';
import { HandlersProvider } from '@/app/hooks/HandlersContext';
import SplashScreen from '@/app/components/SplashScreen/SplashScreen';

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
        <main className="flex flex-col h-[100%] flex relative overflow-x-hidden desktopsm:flex-row">
          <LeftColumn />
          <RightColumn />
          <CallMeButton />
        </main>
      </HomePageLayout>
    </HandlersProvider>
  );
}
