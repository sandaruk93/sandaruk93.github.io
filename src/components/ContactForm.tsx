'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mnjjayjz");

    if (state.succeeded) {
        return (
            <div className={styles.formContainer}>
                <div className={styles.successMessage}>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={styles.input}
                        required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="hello@example.com"
                        className={styles.input}
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here..."
                        className={styles.textarea}
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button type="submit" disabled={state.submitting} className={styles.submitButton}>
                    Send Message
                </button>
            </form>
        </div>
    );
}
