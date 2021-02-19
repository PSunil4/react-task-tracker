import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react' 


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Order Grocery Online',
            day: 'March 1st at 1:00pm',
            reminder: false
        },
        {
            id: 3,
            text: 'Meeting at School',
            day: 'Feb 22 at 4:00pm',
            reminder: true
        }
    ]
  )

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
