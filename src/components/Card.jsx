import { FaRegFilePdf } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { FaFile } from "react-icons/fa";
import { motion,useAnimate } from "framer-motion"

const renderSwitch=(params)=> {
    const animate=useAnimate();
    switch (params) {
      case "xlsx":
        return <SiMicrosoftexcel size={30} color={"#339966"} />;
      case "csv":
        return <SiMicrosoftexcel size={30} color="#339966" />;
      case "pdf":
        return <FaRegFilePdf size={30} color="red" />;
      case "gdoc":
        return <SiGoogledocs size={30} color={"#0000FF"} />;
      case "doc":
        return <PiMicrosoftWordLogoFill size={30} color={"#0000FF"} />;
      case "docx":
        return <PiMicrosoftWordLogoFill size={30} color={"#0000FF"} />;
         default: 
         return <FaFile size={30} color={"orange"} />;
    }
}
const renderColor=(params)=>{
    switch (params) {
        case "xlsx":
          return "green"
        case "csv":
         return  "green"
        case "pdf":
          return "red"
        case "gdoc":
          return "blue"
        case "doc":
          return "blue"
        case "docx":
          return  "blue"
        default : return 'orange'
      }
}

function Card({filetype='xlsxs',filename,isDownload,referance}) {
  return (
    <motion.div  drag whileHover={{scale:1.1}} dragConstraints={referance} whileDrag={{scale:1.2}} animate={{x: 19,y: -23,scale: 1,rotate: 360}} className="card h-96 mt-10 ml-10 w-72 bg-[#FAF6F0] rounded-2xl flex flex-col justify-between  shadow-2xl cursor-pointer">
        <div className="icon flex items-center relative left-10 h-20">{renderSwitch(filetype)}</div>
        <p className="filename relative left-4 font-semibold text-lg  w-[90%] right-5 ">{filename}</p>
        <div className={`button w-full border font-bold bg-[${renderColor(filetype)}] text-white flex justify-center p-4 relative bottom-0 rounded-br-2xl rounded-bl-2xl cursor-pointer`}>{isDownload?"Download File":"Upload File"}</div>
    </motion.div>
  )
}

export default Card