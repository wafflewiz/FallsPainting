import './App.css'
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
      <div>
      <Card>
        <CardHeader>
          <CardTitle>Contact us directly below!</CardTitle>
          <CardDescription>Choose your preferred contact method for a free quote!</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>
            <Mail className="mr-16 h-4 w-4" /> Email Us!
          </Button>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

        
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border">         
        </Calendar>
      </div> 
  )
}

export default App
