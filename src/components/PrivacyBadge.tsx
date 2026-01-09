import { useTranslation } from 'react-i18next';
import { Shield, Check, Lock, Eye, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function PrivacyBadge() {
    const { t } = useTranslation();

    const features = [
        { icon: Lock, key: 'encryption' },
        { icon: Shield, key: 'authentication' },
        { icon: Eye, key: 'httpsOnly' },
        { icon: FileCheck, key: 'securityAudit' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 to-slate-900/50 backdrop-blur-xl p-8 overflow-hidden"
        >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-heading font-bold text-white">
                            {t('privacy.title')}
                        </h3>
                        <p className="text-sm text-emerald-400">{t('privacy.subtitle')}</p>
                    </div>
                </div>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.key}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                        >
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                <feature.icon className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">
                                    {t(`privacy.features.${feature.key}.title`)}
                                </p>
                                <p className="text-xs text-slate-400">
                                    {t(`privacy.features.${feature.key}.description`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison note */}
                <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-sm text-slate-400 flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500" />
                        {t('privacy.comparison')}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
