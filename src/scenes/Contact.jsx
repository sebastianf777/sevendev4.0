import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact pt-28 pb-28 group">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0},
        }}
      >
        <div className="mb-14">
          <p className="text-4xl bg-yellow group-hover:bg-white text-deep-blue w-fit mx-auto">
            Contact:
            <span className="animate-custom-pulse">{''}|</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
       
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img className="w-full xs:w-[50vh] xs:h-[50vh]" src="../assets/portrait-3.png" alt="contact" />
        </motion.div> */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0 mx-auto"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/b7ecbf243411309c28baf6545e45e5c2"
            method="POST"
            className="text-deep-blue flex flex-col justify-center "
          >
            <input
              className="w-full bg-yellow font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-white mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-yellow font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-white mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-yellow font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-white mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="text-2xl bg-yellow text-deep-blue rounded-sm py-3 px-7 border-2 border-yellow hover:border-white hover:animate-[pulse_1s_infinite]
              hover:bg-transparent hover:text-white motion-safe:hover:scale-110 transition duration-500 mt-5 mx-auto w-fit"
              type="submit"
            >
              Let's Connect!
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
