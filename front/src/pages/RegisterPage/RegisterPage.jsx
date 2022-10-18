import { Register } from "../../components";
import { motion } from "framer-motion";

function RegisterPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Register />
    </motion.div>
  );
}

export default RegisterPage;
