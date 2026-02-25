import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, Instagram, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject || null,
            message: formData.message,
            status: 'new',
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-pf-black pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pf-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pf-cyan/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-pf-text-secondary max-w-3xl mx-auto">
              Ready to start your project? Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-pf-dark rounded-xl p-8 border border-pf-purple/20 hover:border-pf-pink/50 hover:shadow-neon-purple transition-all duration-300" data-animate="fadeInUp" data-animate-delay="0s">
              <div className="w-14 h-14 rounded-lg bg-gradient-primary p-3 mb-4">
                <Mail className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pf-text mb-2">Email Us</h3>
              <p className="text-pf-text-secondary mb-4">Our team typically responds within 24 hours</p>
              <a href="mailto:hello@pixelflame.com" className="text-pf-pink hover:text-pf-cyan transition-colors">
                hello@pixelflame.com
              </a>
            </div>

            <div className="bg-pf-dark rounded-xl p-8 border border-pf-purple/20 hover:border-pf-cyan/50 hover:shadow-neon-cyan transition-all duration-300" data-animate="fadeInUp" data-animate-delay="0.1s">
              <div className="w-14 h-14 rounded-lg bg-gradient-secondary p-3 mb-4">
                <MapPin className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pf-text mb-2">Location</h3>
              <p className="text-pf-text-secondary mb-4">Working remotely, serving clients globally</p>
              <p className="text-pf-cyan">Remote-First Team</p>
            </div>

            <div className="bg-pf-dark rounded-xl p-8 border border-pf-purple/20 hover:border-pf-pink/50 hover:shadow-neon-purple transition-all duration-300" data-animate="fadeInUp" data-animate-delay="0.2s">
              <div className="w-14 h-14 rounded-lg bg-gradient-primary p-3 mb-4">
                <Send className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pf-text mb-2">Social Media</h3>
              <p className="text-pf-text-secondary mb-4">Follow us for updates and insights</p>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pf-pink hover:text-pf-cyan transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pf-pink hover:text-pf-cyan transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-pf-dark rounded-2xl p-8 md:p-12 border border-pf-purple/30" data-animate="fadeInUp">
              <h2 className="text-3xl font-display font-bold text-pf-text mb-8">Send Us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-green-500 font-semibold">Message sent successfully!</p>
                    <p className="text-pf-text-secondary text-sm mt-1">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-red-500 font-semibold">Failed to send message</p>
                    <p className="text-pf-text-secondary text-sm mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-pf-text font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-pf-black border border-pf-purple/30 rounded-lg text-pf-text focus:outline-none focus:border-pf-pink transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-pf-text font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-pf-black border border-pf-purple/30 rounded-lg text-pf-text focus:outline-none focus:border-pf-pink transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-pf-text font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pf-black border border-pf-purple/30 rounded-lg text-pf-text focus:outline-none focus:border-pf-cyan transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-pf-text font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pf-black border border-pf-purple/30 rounded-lg text-pf-text focus:outline-none focus:border-pf-cyan transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-primary rounded-lg font-semibold text-pf-text flex items-center justify-center space-x-2 hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
