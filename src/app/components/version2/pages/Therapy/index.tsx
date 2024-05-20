import React from 'react';
import TextBlock from '@/app/components/version2/TextBlock';
import Videoclip from '@/app/components/version2/pages/Therapy/Videoclip';
import { lightGreyColor } from '@/app/components/version2/resources/constants';
import Services from '@/app/components/version2/pages/Therapy/Services';

export const sectionWrapperStyle =
  'relative flex flex-col w-full justify-center desktopsm:w-[50%] desktopsm:h-[100%] desktopsm:overflow-hidden ';
export const baseSectionStyle =
  'relative overflow-hidden box-border h-full flex flex-col gap-8 items-center justify-start w-full desktopsm:h-[50vh]';

const content1Mock =
  "Scegliere di rivolgersi a un/una psicologo/a rappresenta un modo per prendersi cura della propria salute e per conoscersi più a fondo; si impara a dialogare con le diverse parti di sé, anche quelle che generalmente si cerca di nascondere agli altri ma soprattutto a se stessi. È una strada segnata da consapevolezze e scoperte arricchenti, in cui io accompagno chi si rivolge a me a volersi un po' più bene.\n" +
  'Amo il mio lavoro e credo ciò che lo caratterizza sia: autenticità, relazione e coraggio. Se già ti trovi su questa pagina e stai curiosando, credo che tu sia provvist* di una buona dose di coraggio!';
const content2Mock =
  "Secondo la psicoterapia della Gestalt gli esseri umani non possono vivere se non in relazione con l'ambiente in cui sono immersi e hanno in sè la capacità di autoregolazione e adattamento creativo rispetto al suddetto ambiente. Può accadere che questa capacità di adattamento, in momenti di difficoltà di intensità variabile, perda il suo aspetto creativo diventando più rigida e inflessibile: in queste situazioni si sperimentano in terapia nuove possibilità di stare in relazione con il/la terapeuta di modo che, di volta in volta, possano essere poi assimilate dal/dalla paziente. Si aggiungono dunque nuove modalità di stare in relazione e i pazienti riacquisiscono quella libertà creativa di muoversi nel mondo che è insita in ciascuno di noi.";
const content3Mock =
  "Scegliere di rivolgersi a un/una psicologo/a rappresenta un modo per prendersi cura della propria salute e per conoscersi più a fondo; si impara a dialogare con le diverse parti di sé, anche quelle che generalmente si cerca di nascondere agli altri ma soprattutto a se stessi. È una strada segnata da consapevolezze e scoperte arricchenti, in cui io accompagno chi si rivolge a me a volersi un po' più bene.\n" +
  'Amo il mio lavoro e credo ciò che lo caratterizza sia: autenticità, relazione e coraggio. Se già ti trovi su questa pagina e stai curiosando, credo che tu sia provvist* di una buona dose di coraggio!';

const categoryMock = 'LA PSICOTERAPIA';

const Therapy = () => {
  // const { isMenuPopupOpen } = useHandlersContext();
  return (
    <>
      <div id="therapy" className={sectionWrapperStyle}>
        <section
          id="therapy-section"
          className={`${baseSectionStyle} bg-[${lightGreyColor}] py-[3rem]`}
        >
          <div className="px-[3rem] py-[1rem]">
            <TextBlock
              content={content1Mock}
              category={categoryMock}
              label={'IL TUO PERCORSO'}
            />
          </div>
          <Videoclip />
          <div className="px-[3rem] py-[1rem]">
            <TextBlock
              content={content2Mock}
              category={categoryMock}
              label={'IL MIO APPROCCIO'}
            />
          </div>
          <Services />
          <div className="px-[3rem] py-[1rem]">
            <TextBlock
              content={content3Mock}
              category={categoryMock}
              label={'COME FARE'}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Therapy;
