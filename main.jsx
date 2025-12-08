import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import CourseList from './course/CourseList'
import Form from './form'

function MainContent()
{
  return(
    <h1>Hello This is Thanush</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <div>
    {/* <CourseList/> */}
    <Form/>
  </div>
)
