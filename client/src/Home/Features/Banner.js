import "./Banner.css";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <motion.div
    initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      id="banner"
      className="top-layer"
    >
      <h2 id="app-name"> Busy </h2>
    </motion.div>
  );
}
