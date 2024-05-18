'use client';
import React from 'react';
import PortfolioPage from '@/app/components/PortfolioPage/PortfolioPage';

const mockDescription =
  'Ho conosciuto la psicoterapia della Gestalt quasi per caso durante la\n' +
  '          mia triennale a Cagliari e mi ha da subito appassionata. Si tratta di\n' +
  '          una scuola di psicoterapia post analitica a stampo\n' +
  '          umanistico-esistenziale con influenze date dalla teoria di campo di\n' +
  '          Lewin, dalla bioenergetica e dallo zen. Il/la terapeuta della Gestalt\n' +
  '          durante le sedute condotte, utilizza se stesso e le proprie competenze\n' +
  '          in maniera tale che il/la paziente diventi più consapevole del proprio\n' +
  '          modo di muoversi nel mondo, a partire dal sentire fisico ed emotivo;\n' +
  '          ci si focalizza quindi più sul "come" si attuano certi comportamenti\n' +
  '          nel qui e ora che sul "perché". Ciò non significa che non si analizzi\n' +
  "          mai il passato, tutt'altro; lo si fa nel momento in cui si prende\n" +
  '          consapevolezza della sua influenza nel qui e ora del/della paziente.\n' +
  '          Secondo la psicoterapia della Gestalt gli esseri umani non possono\n' +
  "          vivere se non in relazione con l'ambiente in cui sono immersi e hanno\n" +
  '          in sè la capacità di autoregolazione e adattamento creativo rispetto\n' +
  '          al suddetto ambiente. Può accadere che questa capacità di adattamento,\n' +
  '          in momenti di difficoltà di intensità variabile, perda il suo aspetto\n' +
  '          creativo diventando più rigida e inflessibile: in queste situazioni si\n' +
  '          sperimentano in terapia nuove possibilità di stare in relazione con\n' +
  '          il/la terapeuta di modo che, di volta in volta, possano essere poi\n' +
  '          assimilate dal/dalla paziente. Si aggiungono dunque nuove modalità di\n' +
  '          stare in relazione e i pazienti riacquisiscono quella libertà creativa\n' +
  '          di muoversi nel mondo che è insita in ciascuno di noi.';

const mockImage = {
  alt: 'Adolescenti',
  src: 'https://images.pexels.com/photos/4841967/pexels-photo-4841967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  id: 1,
};

const content = {
  title: 'L &apos approccio gestaltico',
  description: mockDescription,
  picture: mockImage,
};

export default function Approach() {
  return <PortfolioPage content={content} />;
}
