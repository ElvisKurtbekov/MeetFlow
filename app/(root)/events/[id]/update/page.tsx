import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.actions"
import { UpdateEventParams } from "@/types"
import { auth } from "@clerk/nextjs/server"

type UpdateEventProbs = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({params: { id } }: UpdateEventProbs) => { 
  const {sessionClaims} = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id)

  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
            <h3 className="wrapper h3-bold text-center sm:text-left">Обновить мероприятие</h3>
        </section>

        <div className="wrapper my-8">
            <EventForm 
              type="Обновить" 
              event={event} 
              eventId={event._id} 
              userId={userId}
            />
        </div>
    </>

  )
}

export default UpdateEvent