import Card from "./Card"
import Files from '../files.json'
import { useRef } from "react"

function Foreground() {
    const referance=useRef(null);
  return (
    <>
      <div ref={referance} className="absolute top-0 left-0 z-[3] w-full h-screen grid grid-cols-3 ">
        {/* <Card referance={referance} filetype="file" filename={'Upload Your File Here'}/> */}
        {
            Files.map((items,index)=><Card referance={referance} key={index} isDownload={true} filename={items.filename.split('.')[0]} filetype={items.filename.split('.')[1]}/>)
        }
    </div>
    </>
  )
}

export default Foreground