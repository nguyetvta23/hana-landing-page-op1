import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
        <div className="border-b border-white/5 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full py-5 flex items-center justify-between text-left hover:text-primary-400 transition-colors"
            >
                <span className="font-medium pr-4">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-slate-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQSection() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { questionKey: 'isFree', answerKey: 'isFreeAnswer' },
        { questionKey: 'dataProtection', answerKey: 'dataProtectionAnswer' },
        { questionKey: 'browserSpeed', answerKey: 'browserSpeedAnswer' },
        { questionKey: 'browsers', answerKey: 'browsersAnswer' },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4" />
                        <span>{t('faq.badge')}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t('faq.title')}
                    </h2>
                    <p className="text-slate-400">
                        {t('faq.subtitle')}
                    </p>
                </div>

                {/* FAQ List */}
                <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.questionKey}
                            question={t(`faq.questions.${faq.questionKey}`)}
                            answer={t(`faq.questions.${faq.answerKey}`)}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
