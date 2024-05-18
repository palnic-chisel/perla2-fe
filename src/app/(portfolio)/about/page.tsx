'use client';
import React from 'react';
import PortfolioPage from '@/app/components/PortfolioPage/PortfolioPage';

const mockDescription =
  "Sono una psicologa, specializzanda in psicoterapia della Gestalt presso l'Istituto SGT di Torino. Ho studiato dapprima Scienze e Tecniche Psicologiche presso l'Università di Cagliari e poi Psicologia Clinica e di Comunità a Torino.\n" +
  'Sono diventata istruttrice di Mindfulness dopo aver conseguito un master semestrale a Milano nel 2019 e, per tale ragione, conduco abitualmente percorsi di Mindfulness rivolti sia ad individui singoli che a piccoli gruppi di persone.\n' +
  'Ho svolto nel 2018 un anno di tirocinio post lauream presso il servizio di Psicologia Evolutiva di Chivasso e dal 2020 ho intrapreso il tirocinio di specializzazione a Collegno, anche in questo caso presso il Servizio di Psicologia Evolutiva in cui svolgo abitualmente colloqui di sostegno psicologico sia a bambini e adolescenti che ai familiari.\n' +
  "Ho collaborato nel 2020 con l'associazione torinese di Psicologi per i Popoli svolgendo colloqui di supporto psicologico telefonicamente durante la prima ondata COVID.\n" +
  'Ho lavorato per due anni in una comunità riabilitativa psicosociale di adolescenti con disturbi di personalità e del comportamento.\n' +
  'Inoltre mi sono occupata per oltre un anno di adulti con disturbi neurodegenerativi e disturbi legati alla sfera psicologica presso una RAF in provincia di Vercelli.\n' +
  'Attualmente collaboro con i servizi sociali del Comune di Torino, avendo in carico affidi diurni di bambini e adolescenti a rischio psico-evolutivo.\n' +
  'Oltre ciò lavoro presso il mio studio privato a Torino in cui porto avanti la mia attività come libera professionista conducendo colloqui di sostegno psicologico ad adolescenti e adulti in studio e online.';

const mockImage = {
  alt: 'Adolescenti',
  src: 'https://images.pexels.com/photos/4841967/pexels-photo-4841967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  id: 1,
};

const content = {
  title: 'Chi sono',
  description: mockDescription,
  picture: mockImage,
};

export default function About() {
  return (
    <>
      <PortfolioPage content={content} />
    </>
  );
}
