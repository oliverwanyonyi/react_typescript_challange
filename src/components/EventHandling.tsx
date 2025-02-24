import { MouseEvent } from "react"


const EventHandling = () => {


  const handleClick = (e:MouseEvent<HTMLButtonElement>) =>{
console.log("Button Clicked:", e.currentTarget);

  }

  const handleMouseEnter = (e:MouseEvent<HTMLDivElement>) =>{
    console.log(e.currentTarget);
    
  }
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling</h2>
      <button type="button" onClick={handleClick}> Click Me </button>
    </div>
  )
}

export default EventHandling