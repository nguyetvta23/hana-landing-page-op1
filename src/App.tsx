import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Shield, Brain, ArrowRight, Check, Star, Users, Clock, Play, Chrome, FolderKanban, MessageCircle } from 'lucide-react';

// Import components
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { MobileMenu } from './components/MobileMenu';
import { FeatureCard } from './components/FeatureCard';
import { StepCard } from './components/StepCard';
import { VideoPopup } from './components/VideoPopup';
import { PrivacyBadge } from './components/PrivacyBadge';
import { FAQSection } from './components/FAQSection';

// Import các hình mockup
import extensionPopup from './assets/extension-popup.png';
import browserAction from './assets/browser-action.png';

// Link tới extension options
const EXTENSION_OPTIONS_URL = 'chrome-extension://aanhdfigalepndomldgkbhpdlihgnfoo/options.html';

// Link tới Chrome Web Store
const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/hana/ggafbdlheobfbbpdmonpcncbjidfilnd';

function App() {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-primary-500/30">
      {/* Background Effects - Hiệu ứng nền */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/0Uu_VJeVVfo"
      />

      {/* Navigation - Sticky Header */}
      <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto bg-slate-900/80 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight">Hana</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">{t('nav.features')}</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">{t('nav.howItWorks')}</a>
          <a href="#pricing" className="hover:text-white transition-colors">{t('nav.pricing')}</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={EXTENSION_OPTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-sm font-medium backdrop-blur-md"
          >
            {t('nav.signIn')}
          </a>
          <a
            href={CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 text-sm"
          >
            <Chrome className="w-4 h-4" />
            {t('nav.addToChrome')}
          </a>
        </div>

        {/* Mobile: Language Switcher + Hamburger Menu */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <MobileMenu
            chromeStoreUrl={CHROME_WEB_STORE_URL}
            extensionOptionsUrl={EXTENSION_OPTIONS_URL}
          />
        </div>
      </nav>

      {/* Hero Section - Phần Hero */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8"
          >
            {t('hero.headline1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500">
              {t('hero.headline2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={CHROME_WEB_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Chrome className="w-5 h-5" />
                {t('hero.ctaPrimary')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="px-8 py-4 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all font-medium flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>

          {/* Stats - Thống kê */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm"
          >
            <div className="flex items-center gap-2 text-slate-400">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span><strong className="text-white">4.9/5</strong> {t('hero.stats.rating')}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Users className="w-5 h-5 text-primary-400" />
              <span><strong className="text-white">10K+</strong> {t('hero.stats.users')}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span>{t('hero.stats.timeSaved')} <strong className="text-white">2h{t('hero.stats.perDay')}</strong></span>
            </div>
          </motion.div>

          {/* Hero Visual Mockup - Hình ảnh hero chính */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 relative mx-auto max-w-6xl"
          >
            <div className="absolute inset-0 bg-primary-500/20 blur-[80px] rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden">
              <img
                src={browserAction}
                alt={t('hero.imageAlt')}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Badge Section - Di chuyển lên đây để build trust sớm */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <PrivacyBadge />
        </div>
      </section>

      {/* How It Works Section - Cách hoạt động */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bên trái: Extension Popup */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden p-8 flex items-center justify-center">
                <img
                  src={extensionPopup}
                  alt={t('howItWorks.imageAlt')}
                  className="w-auto h-[500px] object-contain"
                />
              </div>
            </div>

            {/* Bên phải: Các bước */}
            <div className="order-1 md:order-2 space-y-8">
              <StepCard
                number="1"
                title={t('howItWorks.step1.title')}
                description={t('howItWorks.step1.description')}
              />
              <StepCard
                number="2"
                title={t('howItWorks.step2.title')}
                description={t('howItWorks.step2.description')}
              />
              <StepCard
                number="3"
                title={t('howItWorks.step3.title')}
                description={t('howItWorks.step3.description')}
              />
            </div>
          </div>
        </div>
      </section>



      {/* Features Section - Tính năng */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              {t('features.title')}
            </h2>
            <p className="text-slate-400 text-lg">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-6 h-6 text-primary-400" />}
              title={t('features.feature1.title')}
              description={t('features.feature1.description')}
            />
            <FeatureCard
              icon={<MessageCircle className="w-6 h-6 text-accent-500" />}
              title={t('features.feature2.title')}
              description={t('features.feature2.description')}
            />
            <FeatureCard
              icon={<FolderKanban className="w-6 h-6 text-sky-400" />}
              title={t('features.feature3.title')}
              description={t('features.feature3.description')}
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-violet-400" />}
              title={t('features.feature4.title')}
              description={t('features.feature4.description')}
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-amber-400" />}
              title={t('features.feature5.title')}
              description={t('features.feature5.description')}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-emerald-400" />}
              title={t('features.feature6.title')}
              description={t('features.feature6.description')}
            />
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section - Lời kêu gọi hành động */}
      <section id="pricing" className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-primary-900/50 to-slate-900 border border-primary-500/20 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.2),transparent_70%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-slate-300 mb-10 text-lg">
              {t('cta.subtitle')}
            </p>
            <a
              href={CHROME_WEB_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 hover:scale-105 transition-all shadow-xl shadow-primary-500/10 inline-flex items-center gap-2"
            >
              <Chrome className="w-5 h-5" />
              {t('cta.button')}
            </a>
            <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> {t('cta.badge1')}
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> {t('cta.badge2')}
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" /> {t('cta.badge3')}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold font-heading">Hana</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.twitter')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('footer.support')}</a>
          </div>
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
