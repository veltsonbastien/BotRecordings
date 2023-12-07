import OptionButtons from "./components/OptionButtons";
import BotsLayout from "./BotsLayout/layout";
export default async function Home() {
  return (
      <>
          <main className="text-center font-mono rounded-sm" >
              <h1 className="text-3xl font-bold p-10"> Bot Recordings </h1>
              <p className="text-base font-light"> Easily add bots to your meetings! View video recordings and other meeting information.</p>
              <OptionButtons />
              <hr />
              <BotsLayout />
          </main>
      </>
  )
}
