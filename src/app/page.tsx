import Contact from "@/components/contact";
import Education from "@/components/education";
import Skills from "@/components/skills";
import HeroHighlightComponent from "@/components/custom/hero-highlight";
import { Separator } from "@/components/ui/separator";
import SpotlightComp from "@/components/custom/spotlightComp";
import GridBackground from "@/components/custom/grid-background";

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <SpotlightComp />
            <Separator />
            <HeroHighlightComponent />
            <Separator />
            <Education />
            <Separator />
            <GridBackground />
            <Separator />
            <Skills />
            <Separator />
            <Contact />
        </div>
    )
}
