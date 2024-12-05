import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async () => {
  const {sessionClaims} = auth();
  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1})

  return (
    <>
    {/* My tickets */}
    <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <div className='wrapper flex items-center justify-center sm:justify-between'>
            <h3 className='h3-bold text-center sm:text-left'>Мои билеты</h3>
            <Button asChild size="lg" className='button hidden sm:flex'>
                <Link href="/#events">
                    Исследуйте больше мероприятий
                </Link>
            </Button>
        </div>
    </section>

    {/*<section className='wrapper my-8'>
    <Collection
            data={events?.data}
            emptyTitle="Билеты на мероприятия еще не приобретены"
            emptyStateSubtext="Не беспокойтесь - Вас ждет множество захватывающих мероприятий!"
            collectionType="My_Tickets"
            limit={3}
            page={1}
            urlParamName="ordersPage"
            totalPages={2}
          />
    </section>*/}

    {/* Events organized */}
    <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <div className='wrapper flex items-center justify-center sm:justify-between'>
            <h3 className='h3-bold text-center sm:text-left'>Созданные мероприятия</h3>
            <Button asChild size="lg" className='button hidden sm:flex'>
                <Link href="/events/create">
                    Cоздать новое мероприятие
                </Link>
            </Button>
        </div>
    </section>

    <section className='wrapper my-8'>
        <Collection
            data={organizedEvents?.data}
            emptyTitle="Мероприятия еще не были созданы"
            emptyStateSubtext="Создавай прямо сейчас"
            collectionType="Events_Organized"
            limit={6}
            page={1}
            urlParamName="eventsPage"
            totalPages={2}
        />
    </section>
    </>
  )
}

export default ProfilePage