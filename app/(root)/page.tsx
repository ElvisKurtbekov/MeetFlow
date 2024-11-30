import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const events = await getAllEvents({
    query: '',
    category: '',
    page: 1,
    limit: 6
  })

  

  return (
    <>
       <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Ваш идеальный помощник в организации мероприятий!</h1>
            <p className="p-regular-20 md:p-regular-24">Заказывайте и изучайте полезные советы от более чем 3 наставников в нашем глобальном сообществе.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events"> 
              Присоединиться
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
       </section>

       <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h3-bold">Доверие <br /> Благодаря Тысячам Событий</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          Поиск Фильт по категориям
        </div>

          <Collection
            data={[]}
            emptyTitle="Мероприятий не найдено"
            emptyStateSubtext="Возвращайтесь позже"
            collectionType="All_Events"
            limit={6}
            page={1}
            totalPages={2}
          />
       </section>
    </>
  );
}
