import Image from "next/image"
import Container from "./components/container"
import Subscription from "./components/subscription"
import heroImg from "../public/image/hero.png";
import sectionImg from "../public/image/section1.png";
import bigImg from "../public/image/bigImage.png";

export default function Home() {
  return (
    <main className="">
      <Container className="flex bg-gray-300 mt-16 pt:10 sm:pt-32 flex-col sm:flex-row">
        <div className="flex items-center w-full">
          <div className="mb-8">
            <h1 className=" text-2xl font-bold tracking-tight text-black dark:text-white">
              TOOF : T’es Ouvert ou Fermé ?
            </h1>
            <p className="py-5 leading-normal text-gray-600 dark:text-gray-300">
              Découvrez TOOF, votre compagnon pour simplifier la recherche des commerces ouverts ou fermés. En un coup d&apos;œil, soyez informé sur l&apos;état actuel des établissements autour de vous. Économisez du temps, évitez les déplacements inutiles. Téléchargez TOOF maintenant et restez connecté à l&apos;ouverture qui vous convient!
            </p>

            <div className="flex items-start sm:space-x-4 sm:space-y-0 sm:items-center">
              <div className="flex bg-black items-center w-auto rounded-lg px-4 py-2 mx-2">
                <div className="relative w-7 h-7 md:h-8 md:w-8">
                  <Image src="https://cdn-icons-png.flaticon.com/512/888/888841.png" fill alt="" />

                </div>
                <div className="text-left ml-3">
                  <p className='text-xs text-gray-200'>Download on </p>
                  <p className="text-sm text-gray-200 md:text-base"> Apple Store </p>
                </div>
              </div>
              <div className="flex bg-black items-center w-auto rounded-lg px-4 py-2 mx-2">
                <div className="relative w-7 h-7 md:h-8 md:w-8">
                  <Image src="https://cdn-icons-png.flaticon.com/512/888/888857.png" fill alt="" />
                </div>
                <div className="text-left ml-3">
                  <p className='text-xs text-gray-200'> Get it on </p>
                  <p className="text-sm text-gray-200 md:text-base"> Google Play </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="">
            <Image
              src={heroImg}
              width="416"
              height="417"
              className={"object-cover w-72 md:w-80 lg:w-96"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container className="flex items-center w-full flex-col-reverse sm:flex-ro sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pr-5">
          <div className=" relative w-full h-96">
            <Image src={sectionImg} alt="" fill />
          </div>

        </div>
        <div className="w-full p-0 sm:w-1/2 sm:pl-5">
          <h1 className=" text-2xl font-bold tracking-tight text-black dark:text-white">
            T’es Ouvert ?
          </h1>
          <p className="py-5 leading-normal text-gray-600 dark:text-gray-300 sm:py-5 ">
            Explorez les commerces ouverts avec TOOF - votre guide en temps réel! Des
            restaurants aux supermarchés, TOOF vous donne l&apos;accès instantané aux
            informations d&apos;ouverture. Fini les incertitudes, soyez informé et optimisez vos
            sorties.
          </p>
          <p className="pb-5 leading-normal text-gray-600 dark:text-gray-300">
            Vous cherchez un restaurant qui vous accueille maintenant ? TOOF vous offre
            une visibilité totale sur les opportunités qui s&apos;offrent à vous, garantissant une
            expérience sans tracas.
          </p>
        </div>
      </Container>
      <Container className="flex flex-col items-center sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pr-5">
          <h1 className=" text-2xl font-bold tracking-tight text-black dark:text-white">
            Ou Fermé ?
          </h1>
          <p className="py-5 leading-normal text-gray-600 dark:text-gray-300">
            Optimisez votre emploi du temps avec TOOF. Notre application vous informe
            en temps réel des commerces fermés à proximité, évitant ainsi les trajets
            inutiles. Profitez de la tranquillité d&apos;esprit en planifiant votre journée en toute
            sérénité.
          </p>
        </div>
        <div className="w-full pb-10 sm:w-1/2 sm:pl-5">
          <div className=" relative w-full h-96">
            <Image src={sectionImg} alt="" fill />
          </div>

        </div>
      </Container>
      <div className="flex flex-col-reverse bg-gray-300 mr-0 pl-10 pt:10 sm:py-10 sm:flex-row">
        <div className="flex items-center w-full sm:w-1/2 pr-10">
          <div className="mb-8">
            <h1 className=" text-2xl font-bold tracking-tight text-black dark:text-white">
              Accessible sur tout les supports !
            </h1>
            <p className="py-5 leading-normal text-gray-600 dark:text-gray-300">
              Vous êtes un professionnel ? TOOF a pensé à vous ! Notre espace dédié
              aux professionnels vous offre des fonctionnalités exclusives pour
              optimiser votre visibilité et informer efficacement vos clients.
            </p>
            <p className="leading-normal text-gray-600 dark:text-gray-300">
              Découvrez comment TOOF peut vous aider à atteindre de nouveaux clients,
              à gérer votre présence en ligne et à garantir une communication
              transparente sur vos horaires d&apos;ouverture. Simplifiez votre relation client
              grâce à TOOF Pro.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end w-full py-10 sm:w-1/2 sm:py-0">
          <div className="">
            <Image
              src={bigImg}
              width="516"
              height="517"
              className={"object-cover w-full md:w-80 lg:w-full"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <Container className=" flex flex-col gap-10 justify-between mb-10 sm:flex-row sm:gap-5 md:gap-7 lg:gap-10" >
        <Subscription />
        <Subscription />
        <Subscription />
      </Container>
    </main>
  )
}
