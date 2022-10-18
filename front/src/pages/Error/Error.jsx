import { Error } from "../../components";
import { motion } from "framer-motion";

function ErrorPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Error />
    </motion.div>
  );
}

export default ErrorPage;
