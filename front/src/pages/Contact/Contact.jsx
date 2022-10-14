import { ContactUs } from "../../components";
import { motion } from "framer-motion";

function Contact() {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContactUs />
      </motion.div>
  );
}

export default Contact;
