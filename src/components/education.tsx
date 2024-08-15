import { EducationCard } from "./custom/education-card";
import { TracingBeam } from "./ui/tracing-beam";
import education from '@/lib/education.json';

export default function Experiences() {
    return (
        <section id="education" className="flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full">
                Where I&rsquo;ve studied
            </h2>
            <div className="flex flex-col gap-4 md:hidden">
                {education.map((education) => (
                    <EducationCard
                        key={education.title}
                        title={education.title}
                        name={education.name}
                        date={education.date}
                        description={education.description}
                        skills={education.skills}
                    />
                ))}
            </div>
            <TracingBeam className="px-6 hidden md:flex md:flex-col">
                <div className="flex flex-col gap-5">
                    {education.map((education) => (
                        <EducationCard
                            key={education.title}
                            title={education.title}
                            name={education.name}
                            date={education.date}
                            description={education.description}
                            skills={education.skills}
                        />
                    ))}
                </div>
            </TracingBeam>
        </section>
    );
}