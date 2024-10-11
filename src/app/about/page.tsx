import Container from "@/components/Container";
import Header from "@/components/Header";
import { MainNav } from "@/components/main-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              About Me
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div>
          <p className="text-muted-foreground text-lg py-4">
            Currently working as an Engineering Manager, I am dedicated to
            steering teams towards innovation, efficiency, and excellence. With
            a passion for both technology and people, I bridge the gap between
            technical prowess and effective collaboration.
          </p>{" "}
          <p className="text-muted-foreground text-lg py-4">
            My journey has been marked by a deep understanding of engineering
            principles, honed through years of hands-on experience. From
            conceptualization to execution, I have a track record of
            transforming intricate ideas into tangible solutions. However, my
            role extends far beyond technical prowess. I recognize that a
            successful engineering team is not only built on code but on the
            strengths of its members.
          </p>{" "}
          <p className="text-muted-foreground text-lg py-4">
            I thrive on fostering an environment that empowers individuals to
            reach their potential. By promoting open communication, recognizing
            achievements, and providing mentorship, I create a cohesive unit
            that delivers results greater than the sum of its parts. I believe
            that diverse perspectives fuel innovation, and I am committed to
            cultivating an inclusive workspace where all voices are heard and
            valued.
          </p>{" "}
          <p className="text-muted-foreground text-lg py-4">
            In a rapidly evolving technological landscape, I remain adaptable
            and eager to embrace change. Whether it's navigating complex
            challenges or identifying emerging trends, I am dedicated to leading
            my team with a blend of strategic thinking and a hands-on approach.
            My goal is to not only meet project goals but to exceed them,
            driving the team and the organization to new heights.
          </p>{" "}
          <p className="text-muted-foreground text-lg py-4">
            Collaboration, continuous learning, and a passion for progress
            define my approach to engineering management. Together, we will
            forge ahead, creating solutions that leave an indelible mark on both
            the industry and the world.
          </p>
        </div>
      </div>
    </>
  );
}
