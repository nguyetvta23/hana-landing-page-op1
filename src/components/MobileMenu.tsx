import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
    chromeStoreUrl: string;
    extensionOptionsUrl: string;
}

export function MobileMenu({ chromeStoreUrl, extensionOptionsUrl }: MobileMenuProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Hamburger Button - Hiển thị trên mobile */}
            <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Menu className="w-6 h-6 text-white" />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        onClick={closeMenu}
                    />

                    {/* Menu Panel */}
                    <div className="fixed top-[73px] left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 z-50 md:hidden">
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {/* Navigation Links */}
                            <a
                                href="#features"
                                onClick={closeMenu}
                                className="text-slate-300 hover:text-white transition-colors py-2 text-base font-medium"
                            >
                                {t('nav.features')}
                            </a>
                            <a
                                href="#how-it-works"
                                onClick={closeMenu}
                                className="text-slate-300 hover:text-white transition-colors py-2 text-base font-medium"
                            >
                                {t('nav.howItWorks')}
                            </a>
                            <a
                                href="#pricing"
                                onClick={closeMenu}
                                className="text-slate-300 hover:text-white transition-colors py-2 text-base font-medium"
                            >
                                {t('nav.pricing')}
                            </a>

                            {/* Divider */}
                            <div className="border-t border-white/10" />

                            {/* Action Buttons */}
                            <a
                                href={extensionOptionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="px-4 py-2.5 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-sm font-medium text-center"
                            >
                                {t('nav.signIn')}
                            </a>
                            <a
                                href={chromeStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="px-4 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold text-center hover:scale-105 transition-all"
                            >
                                {t('nav.addToChrome')}
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
