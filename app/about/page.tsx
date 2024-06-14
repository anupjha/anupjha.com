import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/anup.jpeg" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Engineering Manager @Vyapar
          </p>
        </div>
        <p className=" break-normal text-muted-foreground text-l py-4">
        Currently working as an Engineering Manager, I am dedicated to steering teams towards innovation, efficiency, and excellence. With a passion for both technology and people, I bridge the gap between technical prowess and effective collaboration.

        My journey has been marked by a deep understanding of engineering principles, honed through years of hands-on experience. From conceptualization to execution, I have a track record of transforming intricate ideas into tangible solutions. However, my role extends far beyond technical prowess. I recognize that a successful engineering team is not only built on code but on the strengths of its members.

        In a rapidly evolving technological landscape, I remain adaptable and eager to embrace change. Whether it's navigating complex challenges or identifying emerging trends, I am dedicated to leading my team with a blend of strategic thinking and a hands-on approach. My goal is to not only meet project goals but to exceed them, driving the team and the organization to new heights.

        I thrive on fostering an environment that empowers individuals to reach their potential. By promoting open communication, recognizing achievements, and providing mentorship, I create a cohesive unit that delivers results greater than the sum of its parts. I believe that diverse perspectives fuel innovation, and I am committed to cultivating an inclusive workspace where all voices are heard and valued.

        Collaboration, continuous learning, and a passion for progress define my approach to engineering management. Together, we will forge ahead, creating solutions that leave an indelible mark on both the industry and the world.

        </p>

      </div>
    </div>
  );
}
