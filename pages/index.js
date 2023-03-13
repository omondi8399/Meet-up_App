import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://ndnsnnananan',
        address: 'some address S',
        description: 'This is a first message'
    },
    {
        id: 'm2',
        title: 'A first Meetup',
        image: 'https://ndnsnnananan',
        address: 'some address S',
        description: 'This is a first message'
    }
]

const HomePage = () => {
  return (
   <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage