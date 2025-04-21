"use client";
import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";

import { toSlug } from "@/utils/slug";

interface TeamMember {
  id: string;
  name: string;
  image: string;
  position: string;
  email: string;
  phone: string;
  facebook: string;

  profile: {
    image: string;
    position: string;
  };
}

interface TeamCardProps {
  team: TeamMember[];
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <>
      {team.map((member) => (
        <Link
          key={member.id}
          href={`/agent/${member.id}/${toSlug(member.name)}/${toSlug(member.position || "agent")}`}
        >
          <Card isPressable className="w-full" shadow="sm">
            <CardBody className="overflow-hidden p-0">
              <img
                alt={member.name}
                className="w-full h-72 object-cover object-top"
                loading="lazy"
                src={`https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/profiles/${member.profile.image}`}
              />
            </CardBody>
            <CardFooter className="flex flex-col text-center">
              <h1 className="text-base font-bold uppercase">{member.name}</h1>
              <p className="text-default-500 text-sm capitalize">
                {member.profile.position}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
}
