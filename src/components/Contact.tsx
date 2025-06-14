import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Contact: React.FC = () => (
  <section id="contact" className="bg-white py-20">
    <div className="container mx-auto px-6 md:px-20 text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="mt-4 text-lg text-gray-700 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm always open to new opportunities or collaborations. Feel free to
        send me an email or connect with me on LinkedIn and GitHub!
      </motion.p>

      <motion.div
        className="mt-8 flex justify-center space-x-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="mailto:benzabihidev@gmail.com"
          className="text-gray-600 hover:text-blue-600 text-4xl transition"
          aria-label="Email"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://linkedin.com/in/benzabihi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 text-4xl transition"
          aria-label="LinkedIn"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://github.com/benzabihi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 text-4xl transition"
          aria-label="GitHub"
        >
          <SiGithub />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
