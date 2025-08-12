import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import StarStreakBackground from "../Model/StarStreakBackground.jsx";
import { motion , useInView  } from "framer-motion";
import { InView } from "react-intersection-observer";

const Contact = () => {
  const [Toast, setToast] = useState([]);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Data, setData] = useState();
  const AnimationRef = useRef();
  const [Loading, setLoading] = useState(false);
  const ContactDRef = useRef(null);
  const ContactRef = useRef(null);
  const inView = useInView(ContactDRef , ContactRef);

  const addToast = (message) => {
    if (message === "Plase wait email is sending...") {
      setToast((prev) => [
        ...prev,
        {
          id: Date.now(),
          message: message,
          status: true,
          animation: "animate__bounceInRight",
        },
      ]);
    } else if (message === "Mail is sended") {
      setToast((prev) => [
        ...prev,
        {
          id: Date.now(),
          message: message,
          status: true,
          animation: "animate__bounceInRight",
        },
      ]);
    } else {
      setToast((prev) => [
        ...prev,
        {
          id: Date.now(),
          message: message,
          status: false,
          animation: "animate__bounceInRight",
        },
      ]);
    }
  };

  const RemoveToast = (id) => {
    setTimeout(() => {
      setToast((prev) => prev.filter((t) => t.id !== id));
    }, 700);
  };

  useEffect(() => {
    if (Toast.length > 0) {
      const timer = setTimeout(() => {
        RemoveToast(Toast[0].id);
        setToast((prev) =>
          prev.map((toast) => ({
            ...toast,
            animation: "animate__bounceOutRight",
          }))
        );
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [Toast]);

  const validateForm = () => {
    if (!Name.trim() || !Email.trim() || !Message.trim()) {
      addToast("Somthing is Wrong, please Re-cheak your message");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(Email)) {
      addToast("Please enter valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Name && !Email && !Message) {
      addToast("Please fill all fields");
      return;
    } else if (!Name) {
      addToast("Please enter your name");
      return;
    } else if (!Email) {
      addToast("Please enter your email");
      return;
    } else if (!Message) {
      addToast("Please enter your message");
      return;
    }

    if (!validateForm()) return;

    const template = {
      name: Name,
      email: Email,
      message: Message,
    };
    setLoading(true);
    setData(template);
    addToast("Plase wait email is sending...");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        template,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setEmail("");
      setName("");
      setMessage("");
      addToast("Mail is sended");
    } catch (error) {
      console.error("Error sending email:", error);
      addToast("Failed to send message. Please try again later.");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="Contact"
      className="w-full relative bg-black lg:h-screen h-auto lg:p-0 py-7 overflow-hidden z-20"
    >
      <div ref={AnimationRef} className="fixed top-20 end-0 z-50 text-white">
        {Toast.map((toast) => (
          <div
            key={toast.id}
            className={`mt-1 h-5 w-auto min-w-86 bg-gradient-to-tl to-[#4a1b88] from-[#8138ae] animate__animated ${toast.animation} rounded-2xl flex items-center shadow-lg p-5`}
          >
            {toast.status ? (
              <div
                className="border border-green-400 rounded-full h-5 w-5 flex items-center justify-center mr-3 cursor-pointer"
                onClick={() => setToast({ status: false, message: null })}
              >
                <i className="fa-solid fa-check"></i>
              </div>
            ) : (
              <div
                className="border border-red-500 rounded-full h-5 w-5 flex items-center justify-center mr-3 cursor-pointer"
                onClick={() => setToast({ status: false, message: null })}
              >
                <p className="text-red-600 mb-1">x</p>
              </div>
            )}
            {toast.message}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarStreakBackground />
      </div>

      <div className="flex lg:flex-row flex-col md:flex-row md:mx-3 sm:mx-2 items-center justify-center h-full gap-y-10 lg:gap-x-80 md:gap-x-30 z-10 select-none">
        <motion.div
          ref={ContactDRef}
          initial={{ opacity: 0, x: -100 }}
          animate={ inView ?{ opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.9 , delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            Contact Details
          </h1>
          <div className="flex flex-col items-start space-y-4 ">
            <div className="flex flex-row items-start gap-x-10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                <i className="fa-solid fa-phone"></i>
              </h3>
              <p className="text-lg text-gray-300">+91 7972247112</p>
            </div>
            <div className="flex flex-row items-start gap-x-10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                <i className="fa-solid fa-envelope"></i>
              </h3>
              <p className="text-lg text-gray-300">
                omkar.gudappe205@gmail.com
              </p>
            </div>
            <div className="flex flex-row items-start gap-x-10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                <i className="fa-solid fa-location-dot"></i>
              </h3>
              <p className="text-lg text-gray-300">Pune, Maharashtra, Nigdi</p>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col items-center ">
          <motion.div 
            className="border-2 border-[#4218a5] p-9 rounded-lg bg-gradient-to-b from-purple-900 via-gray-900 to-black shadow-lg flex flex-col items-center"
            ref={ContactRef}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.9 , delay: 0.5 }}
          >
            <h1 className="text-white flex justify-center mb-5">Feedback</h1>
            <input
              value={Name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded-md border border-gray-300 mb-4 w-64 text-gray-400 placeholder:text-gray-400"
              placeholder="Enter your name"
            />
            <input
              value={Email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-md border border-gray-300 mb-4 w-64 text-gray-400 placeholder:text-gray-400"
              placeholder="Enter your email"
            />
            <textarea
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 rounded-md border border-gray-300 mb-4 w-64 text-gray-400 placeholder:text-gray-400"
              placeholder="Enter your message"
              rows="4"
            ></textarea>
            <div className="flex flex-row justify-start items-start gap-12">
              <button
                type="submit"
                disabled={Loading}
                className={`bg-gradient-to-tl to-purple-900 via-gray-900 from-black text-white px-4 py-2 rounded-md hover:bg-[#583171] hover:scale-105 active:scale-95 transition-colors ${
                  Loading ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={handleSubmit}
              >
                {Loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        e
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex flex-row gap-2">
                    <span>
                      <i className="fa-solid fa-paper-plane"></i>
                    </span>
                    Send Message
                  </div>
                )}
              </button>
              <button
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                className="bg-gradient-to-tr to-purple-900 via-gray-900 from-black text-white px-4 py-2 rounded-md hover:bg-[#583171] hover:scale-105 active:scale-95 transition-colors cursor-pointer flex justify-start"
              >
                Clear
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
