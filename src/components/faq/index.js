import React, { useState } from "react";
import "./style.css"; // create this file

const faqData = [
    {
        question: "What is Children Left Behind?",
        answer:
            "Children Left Behind is a non-profit organization dedicated to supporting children in underserved communities by improving access to education, basic needs, and opportunities for a better future.",
    },
    {
        question: "How does my donation help?",
        answer:
            "Your donation directly supports child education, food assistance, healthcare, and community programs that uplift vulnerable children and families.",
    },
    {
        question: "Is my donation tax-deductible?",
        answer:
            "Yes, all donations made to Children Left Behind are tax-deductible as permitted by local law.",
    },
    {
        question: "How can I volunteer?",
        answer:
            "You can volunteer by joining our on-ground programs, events, or remote support initiatives. Visit the Volunteer page to register.",
    },
    {
        question: "Where does Children Left Behind operate?",
        answer:
            "We operate in multiple developing regions, focusing on rural communities and areas with limited access to education and healthcare.",
    },
    {
        question: "Can I sponsor a child?",
        answer:
            "Yes! You can sponsor a child’s education, nutrition, or healthcare. Sponsorship details are available on our Sponsor page.",
    },
    {
        question: "How do you ensure transparency?",
        answer:
            "We maintain complete transparency through regular reports, audited financials, and real-time project updates.",
    },
    {
        question: "What programs do you run?",
        answer:
            "We run programs related to child education, food security, healthcare, awareness campaigns, and community development.",
    },
    {
        question: "Can businesses or groups partner with you?",
        answer:
            "Yes, we welcome corporate partnerships, community groups, and NGOs to collaborate on impactful child welfare programs.",
    },
    {
        question: "How do I get updates about your work?",
        answer:
            "You can subscribe to our newsletter or follow our official social media channels for regular updates.",
    },
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>

            <div className="faq-list">
                {faqData.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <button
                            className={`faq-question ${activeIndex === index ? "active" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            {faq.question}
                            <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
                        </button>

                        <div
                            className={`faq-answer ${activeIndex === index ? "open" : ""
                                }`}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
