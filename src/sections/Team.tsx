import React from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";

const Team = () => {
  return (
    <section id="team" className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="text-5xl text-center tracking-tighter font-medium">
                Our Team
              </h2>
              <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
                Meet the brains behind EcoCred.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          
        </div>
      </div>
    </section>
  );
};

export default Team;

