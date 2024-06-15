import { useState } from "react"
import { motion } from "framer-motion"
import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton"
import "./sidebar.scss"

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
    // backgroundColor: "#77AAAD",
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    // backgroundColor: "#9DC3C1",
  },
}

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links isOpen={open}/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar