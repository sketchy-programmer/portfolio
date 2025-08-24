import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const showAlertMessage = (type, message) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            console.log("Form Submitted:", formData)
            await emailjs.send("service_yop1c5p", "template_yxeuurl", {
                from_name: formData.name,
                to_name: "Paramvir Singh",
                from_email: formData.email,
                to_email: "singh.s.paramvir@gmail.com",
                message: formData.message,
            }, "Pt-q572Eu1oDglfEt");
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            showAlertMessage("success", "Your message has been sent");
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            showAlertMessage("danger", "Something went wrong");
        }
    }
    //service_yop1c5p
    //templete id: template_yxeuurl
    return (
        <section id="contact" className="relative flex justify-center items-center c-space
    section-spacing">
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            {showAlert && <Alert type={alertType} text={alertMessage} />}
            <div className="flex flex-col items-center justify-center 
        max-w-md p-5 max-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Let's Talk</h2>
                    <p className="font-normal text-neutral-400">
                        Whether you're looking to build a new website, improve your
                        existing platform or bring a unique project to life, I'm here
                        to help
                    </p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="feild-label">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            autoComplete="name"
                            placeholder="Jhon Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="feild-label">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            autoComplete="email"
                            placeholder="JhonDoe@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="feild-label">
                            Message
                        </label>
                        <input
                            id="message"
                            name="message"
                            type="text"
                            rows="4"
                            className="field-input field-input-focus"
                            autoComplete="message"
                            placeholder="Share Your Thoughts"
                            value={formData.message}
                            onChange={handleChange}
                            required />
                    </div>
                    <button type="submit" className="w-full px-1 py-3 text-lg text-center 
                    rounded-md cursor-pointer bg-radial from-lavender to-royal
                    hover-animation">
                        {!isLoading ? "Send" : "Sending..."}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact