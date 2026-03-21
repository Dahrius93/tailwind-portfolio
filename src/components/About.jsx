import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Dietro ogni riga di codice c'è una storia. La mia inizia con una
            tazza di caffè, una pagina bianca e la curiosità di capire come
            funzionano le cose. Da autodidatta appassionato a sviluppatore
            front-end, ho imparato che la differenza tra un sito qualunque e uno
            che lascia il segno sta nell'attenzione ai dettagli — pixel,
            animazioni, e un po' di magia CSS.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
