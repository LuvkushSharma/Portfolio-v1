import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { Button } from "./ui/button";
import { AtSign, Github, Linkedin } from "lucide-react";
import { Reveal } from "./custom/reveal";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import me from "@/lib/img/me.jpg";

export default function Hero() {
  const name = [{ text: "Luvkush" }, { text: "Sharma" }];

  return (
    <header
      id="hero"
      className="flex flex-col sm:flex-row h-screen w-full justify-center items-center gap-4 mt-10"
    > 
      <div className="flex flex-col gap-2 w-full">
        <TypewriterEffectSmooth words={name} />
        <Reveal
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
        >
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Fullstack Developer
          </h3>
        </Reveal>
        <Reveal
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, delay: 0.2 },
          }}
        >
          <p className="leading-7">
            I plan, design, build, test and deploy software. With the help of
            tea of course.
          </p>
        </Reveal>
        <div className="flex gap-4">
          <TooltipProvider>
            <Reveal
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://www.linkedin.com/in/luvkush-sharma-4581a3225/"
                    passHref
                    target="_blank"
                  >
                    <Button variant="secondary" size="icon" className="hover:">
                      <Linkedin />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </Reveal>
            <Reveal
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 0.2 },
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://github.com/LuvkushSharma" passHref target="_blank">
                    <Button variant="secondary" size="icon">
                      <Github />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </Reveal>
            <Reveal
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 0.4 },
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="mailto:nikhil.453.123@gmail.com" passHref target="_blank">
                    <Button variant="secondary" size="icon">
                      <AtSign />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>
            </Reveal>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex relative w-full justify-center items-center">
        <Image
          src={me}
          alt="Me"
          width={0} // Set to 0 to make it responsive
          height={0} // Set to 0 to make it responsive
          sizes="(max-width: 640px) 100px, (max-width: 768px) 200px, (max-width: 1024px) 300px, 450px"
          style={{
            objectFit: "contain",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
          className={`rounded-full shadow-lg shadow-gray-300/50 transform transition duration-500 hover:scale-105 w-[50%] max-w-[450px] h-auto`}
        />
      </div>
    </header>
  );
}
