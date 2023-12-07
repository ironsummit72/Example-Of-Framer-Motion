import Card from "./Card"
import Files from '../files.json'
function Foreground() {
  return (
    <>
      <div className="absolute top-0 left-0 z-[3] w-full h-auto grid grid-cols-3 ">
        <Card filetype="file" filename={'Upload Your File Here'}/>
        {
            Files.map((items)=><Card filename={items.filename.split('.')[0]} filetype={items.filename.split('.')[1]}/>)
        }
    </div>
    </>
  )
}

export default Foreground