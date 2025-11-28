import React from "react";
import "./style.css"; // optional styles

const Faq = () => {
    const faqs = [
        {
            q: "What is Children Left Behind?",
            a: "Children Left Behind is a non-profit organization dedicated to supporting children from underserved communities by providing education, basic needs, medical care, and developmental support."
        },
        {
            q: "How does my donation help children?",
            a: "Your donation directly supports programs such as nutrition support, education kits, health care access, counselling, safe shelter, and community-based child development activities."
        },
        {
            q: "Is my donation tax-deductible?",
            a: "Yes. All contributions are processed through registered non-profit partners, and eligible donors receive a tax-deduction receipt after donation."
        },
        {
            q: "How can I volunteer?",
            a: "You can join as a volunteer by signing up on our 'Join Hands' page. Volunteers help with events, awareness drives, tutoring, fundraising, and community outreach."
        },
        {
            q: "Do you work only in India?",
            a: "Our mission began in India, but we are expanding through global partnerships to reach children in developing countries who lack access to basic needs."
        },
        {
            q: "How do you ensure the safety of children?",
            a: "Our team follows strict child-protection guidelines, background checks for volunteers, partner verification, and constant monitoring of on-ground activities."
        },
        {
            q: "Can I sponsor a child directly?",
            a: "Yes. You can sponsor a child's education, meals, or healthcare through our monthly sponsorship programs. Updates and progress reports are shared regularly."
        },
        {
            q: "How are funds utilized?",
            a: "80% of all donations go directly to child programs such as education kits, meals, rehabilitation, and medical support. The remaining is used for administration and outreach activities."
        },
        {
            q: "Can I partner my organization with Children Left Behind?",
            a: "Absolutely. We collaborate with schools, corporates, NGOs, and community leaders to scale our impact. Contact us through our partnership inquiry form."
        },
        {
            q: "How can I stay informed about your work?",
            a: "You can subscribe to our newsletter or follow us on social media for updates, stories of impact, events, and programs."
        }
    ];

    return (
        <div className="faq-page container py-5">
            <div className="text-center mb-5">
                <span className="faq-tag">FAQs</span>
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <p className="faq-subtitle">
                    Find answers to the most commonly asked questions about our mission,
                    donations, child programs, and how you can make a difference.
                </p>
            </div>

            <div className="accordion" id="faqAccordion">
                {faqs.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading-${index}`}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded="false"
                            >
                                {item.q}
                            </button>
                        </h2>

                        <div
                            id={`collapse-${index}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">{item.a}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
