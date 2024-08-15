import { Reveal } from "./custom/reveal";
import Image from "next/image";

export default function About() {
  return (
    <section className="about-section flex flex-col items-center justify-center gap-4 sm:py-32 py-16" id="about">
      <div className="about-hero flex justify-center items-center" >
        <Image src="/projects_images/Hi.gif" alt="About Me" width={30} height={30}/>
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">About Me</h1>
      </div>
      <Reveal
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
      >
        <p className="about-text leading-7 text-sm sm:text-base md:text-lg p-5"> {/* Breakpoints for text size */}
          As a B.Tech Computer Science (Hons.) student at GLA University, I am passionate about leveraging technology to create impactful solutions. My expertise lies in full-stack development, particularly within the MERN stack, where I have honed my skills through various academic and personal projects.

         <br />
            <br />

          In addition to my proficiency in web development, I have a keen interest in Machine Learning and Deep Learning. I am driven by the potential of these technologies to solve complex problems and am continually seeking opportunities to expand my knowledge and apply these skills in innovative ways.

            <br />
            <br />

          I am enthusiastic about collaborating with like-minded professionals and contributing to projects that push the boundaries of technology. I am always open to new challenges and opportunities that allow me to grow and make a meaningful impact in the tech industry.

        </p>
      </Reveal>
    </section>
  );
}
