import React from "react";
import { GrPersonalComputer, GrAlarm, GrTag  } from "react-icons/gr";

function Function() {
  return (
    <div className="flex flex-col">
      <section className="flex-col space-y-5 justify-center text-center max-w-5xl mx-auto py-40">
        <h1 className="font-bold text-5xl">HOW IT WORK FOR YOU</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dolor
          corrupti impedit non, tenetur debitis necessitatibus dolorem esse
          laborum suscipit distinctio vero quam numquam libero sequi? Deserunt,
          ipsum. Eos, reprehenderit.
        </p>
      </section>

      <section>
        <div className="flex">
          < GrPersonalComputer size="3px" />
          < GrAlarm />
          < GrTag />

        </div>
      </section>
    </div>
  );
}

export default Function;
