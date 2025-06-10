'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, Github, Instagram, Linkedin } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        setError('');
        setSuccess(false);

        try {
            const result = await emailjs.send(
                'service_3vvhsmr',
                'template_4b5rhfq',
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                '4lTmxMxaRvyLafH2n'
            );

            console.log('Email successfully sent!', result.text);
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            setError('Failed to send message. Please try again later.');
        } finally {
            setSending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                        Get in Touch
                    </h2>

                    {/* Contact Form */}
                    <div className=" bg-gray-300 rounded-xl p-8 shadow-lg border border-gray-400 hover:border-gray-300 transition-colors mb-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
                                    placeholder="Your message..."
                                />
                            </div>

                            {error && (
                                <div className="text-red-600 text-sm">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="text-green-600 text-sm">
                                    Message sent successfully!
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={sending}
                                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
                                    sending 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-gray-700 hover:bg-gray-800'
                                }`}
                            >
                                {sending ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center items-center gap-8">
                        <a
                            href="https://github.com/Hari-Gian"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-900 transition-colors"
                        >
                            <Github className="w-8 h-8" />
                        </a>
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-900 transition-colors"
                        >
                            <Instagram className="w-8 h-8" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-900 transition-colors"
                        >
                            <Linkedin className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
