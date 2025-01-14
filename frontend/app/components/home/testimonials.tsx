'use client';

import { useState, useEffect } from "react";
import styles from "../../customStyles/testimonials.module.css";

const testimonials = [
    {
        text: "“We have been working with OneShot Translation for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.”",
        name: "John Smith",
        title: "Marketing Director at XYZ Corp",
    },
    {
        text: "“The team is professional, responsive, and truly cares about the success of our business. We highly recommend OneShot Translation to any company looking to grow their online presence.”",
        name: "Jane Doe",
        title: "CEO at ABC Inc.",
    },
    {
        text: "“Highly recommend OneShot Translation to any company looking to grow their online presence.”",
        name: "Alice Brown",
        title: "Founder at Brown Studios",
    },
    {
        text: "“Fantastic service and a team that truly understands our needs.”",
        name: "Michael Johnson",
        title: "Project Manager at Acme Inc.",
    },
];

const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const newIntervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // 5-second duration
        setIntervalId(newIntervalId);
        return () => clearInterval(newIntervalId);
    }, []);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        if (intervalId) {
            clearInterval(intervalId);
            const newIntervalId = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 5000);
            setIntervalId(newIntervalId);
        }
    };

    const getVisibleTestimonials = () => {
        const start = activeIndex;
        const end = (activeIndex + 3) % testimonials.length;
        if (start < end) return testimonials.slice(start, end);
        return [...testimonials.slice(start), ...testimonials.slice(0, end)];
    };

    const NavigationDots = () => (
        <div className={styles.navigationDots}>
            {testimonials.map((_, index) => (
                <div
                    key={index}
                    className={`${styles.dot} ${
                        index === activeIndex ? styles.dotActive : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                >
                    {index === activeIndex && (
                        <div
                            className={styles.loadingBar}
                            style={{ width: '100%' }}
                        ></div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className={styles.testimonialContainer}>
            <div className={styles.headingSubheading}>
                <div className={styles.heading}>
                    <div className={styles.headingLine}>
                        <b className={styles.headingText}>Testimonials</b>
                    </div>
                </div>
                <div className={styles.subtitle}>
                    <b>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our multilingual communication Services</b>
                </div>
            </div>
            {/* Testimonials */}
            <div className={styles.testimonialBlock}>
                <div className={styles.testimonialSlider}>
                    {getVisibleTestimonials().map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${styles.testimonial} ${
                                index === 1 ? styles.testimonialActive : ""
                            }`}
                        >
                            <p className={styles.testimonialText}>{testimonial.text}</p>
                            <div className={styles.authorInfo}>
                                <p className={styles.authorName}>{testimonial.name}</p>
                                <p className={styles.authorTitle}>{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots with Loading Bar */}
            <NavigationDots />
        </div>
    );
};

export default TestimonialCarousel;
