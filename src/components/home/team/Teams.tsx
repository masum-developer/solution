import SectionStarter from "@/components/shared/SectionStarter";
import React from "react";
import SingleMember from "./SingleMember";
import RootContainer from "@/components/shared/RootContainer";
import { teamList } from "./team";

const Teams = () => {
  return (
    <div data-aos="fade-up" className="bg-multi-icon-bg mt-16 pb-32 pt-1 dark:bg-black dark:text-white">
      <RootContainer>
        <SectionStarter title="Our team" description="Welcome Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 gap-y-32 mt-32">
          {teamList.map((member, index) => (
            <SingleMember key={index} member={member} />
          ))}
        </div>
      </RootContainer>
    </div>
  );
};

export default Teams;
