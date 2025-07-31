import HeaderMain from "../Main/header";

import PresenceAnimate from "../Animation/presence-animate";
import About from "../Main/about";
import SkillWrapper from "../Main/skill-wrapper";

export default function Main() {
  return (
    <>
      {/* <div className="w-full flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-0">
        <div className="w-full max-w-4xl flex flex-col transition-all duration-700 ease-in-out">
          <HeaderMain />
        </div>
      </div> */}
      <div className="w-full max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-14 py-6 xl:py-0 transition-all duration-700 ease-in-out">
        <PresenceAnimate delay={0.05}>
          <HeaderMain />
        </PresenceAnimate>
        <PresenceAnimate delay={0.1}>
          <About />
        </PresenceAnimate>
        <PresenceAnimate delay={0.1}>
          <SkillWrapper />
        </PresenceAnimate>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur
        consectetur ea commodi id. Repellat incidunt obcaecati modi maxime eum,
        fugit cum pariatur beatae, architecto inventore animi, delectus
        accusamus consequatur velit unde? Eum alias nulla incidunt rem nihil
        eveniet temporibus reiciendis, eius illum magni labore dolorum
        aspernatur vero enim consequuntur blanditiis distinctio consectetur,
        nobis a minus atque, illo ratione ut et. Labore cumque dolor maiores
        sint, libero nemo exercitationem quos blanditiis adipisci animi porro
        itaque earum similique beatae ab pariatur asperiores quia praesentium
        quisquam aliquid aperiam suscipit. Aut veniam beatae quis nam tempora.
        Assumenda doloribus doloremque iste dignissimos suscipit repellendus.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur
        consectetur ea commodi id. Repellat incidunt obcaecati modi maxime eum,
        fugit cum pariatur beatae, architecto inventore animi, delectus
        accusamus consequatur velit unde? Eum alias nulla incidunt rem nihil
        eveniet temporibus reiciendis, eius illum magni labore dolorum
        aspernatur vero enim consequuntur blanditiis distinctio consectetur,
        nobis a minus atque, illo ratione ut et. Labore cumque dolor maiores
        sint, libero nemo exercitationem quos blanditiis adipisci animi porro
        itaque earum similique beatae ab pariatur asperiores quia praesentium
        quisquam aliquid aperiam suscipit. Aut veniam beatae quis nam tempora.
        Assumenda doloribus doloremque iste dignissimos suscipit repellendus.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur
        consectetur ea commodi id. Repellat incidunt obcaecati modi maxime eum,
        fugit cum pariatur beatae, architecto inventore animi, delectus
        accusamus consequatur velit unde? Eum alias nulla incidunt rem nihil
        eveniet temporibus reiciendis, eius illum magni labore dolorum
        aspernatur vero enim consequuntur blanditiis distinctio consectetur,
        nobis a minus atque, illo ratione ut et. Labore cumque dolor maiores
        sint, libero nemo exercitationem quos blanditiis adipisci animi porro
        itaque earum similique beatae ab pariatur asperiores quia praesentium
        quisquam aliquid aperiam suscipit. Aut veniam beatae quis nam tempora.
        Assumenda doloribus doloremque iste dignissimos suscipit repellendus.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur
        consectetur ea commodi id. Repellat incidunt obcaecati modi maxime eum,
        fugit cum pariatur beatae, architecto inventore animi, delectus
        accusamus consequatur velit unde? Eum alias nulla incidunt rem nihil
        eveniet temporibus reiciendis, eius illum magni labore dolorum
        aspernatur vero enim consequuntur blanditiis distinctio consectetur,
        nobis a minus atque, illo ratione ut et. Labore cumque dolor maiores
        sint, libero nemo exercitationem quos blanditiis adipisci animi porro
        itaque earum similique beatae ab pariatur asperiores quia praesentium
        quisquam aliquid aperiam suscipit. Aut veniam beatae quis nam tempora.
        Assumenda doloribus doloremque iste dignissimos suscipit repellendus.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur
        consectetur ea commodi id. Repellat incidunt obcaecati modi maxime eum,
        fugit cum pariatur beatae, architecto inventore animi, delectus
        accusamus consequatur velit unde? Eum alias nulla incidunt rem nihil
        eveniet temporibus reiciendis, eius illum magni labore dolorum
        aspernatur vero enim consequuntur blanditiis distinctio consectetur,
        nobis a minus atque, illo ratione ut et. Labore cumque dolor maiores
        sint, libero nemo exercitationem quos blanditiis adipisci animi porro
        itaque earum similique beatae ab pariatur asperiores quia praesentium
        quisquam aliquid aperiam suscipit. Aut veniam beatae quis nam tempora.
        Assumenda doloribus doloremque iste dignissimos suscipit repellendus.
        <br></br>
        <br></br>
      </div>
    </>
  );
}
