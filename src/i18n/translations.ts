export type Language = 'en' | 'ta' | 'ms' | 'ur';

export const LANGUAGES: { code: Language; label: string; nativeLabel: string; shortLabel: string }[] = [
    { code: 'en', label: 'English', nativeLabel: 'English', shortLabel: 'Eng' },
    { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்', shortLabel: 'தமி' },
    { code: 'ms', label: 'Malay', nativeLabel: 'Melayu', shortLabel: 'Mal' },
    { code: 'ur', label: 'Urdu', nativeLabel: 'اردو', shortLabel: 'اردو' },
];

type TranslationKeys = {
    // Banner
    bannerText: string;
    bannerCTA: string;

    // Navbar
    downloadNow: string;

    // Hero
    ramadanText: string;
    versionBadge: string;
    heroHeadline: string;
    heroHeadlineHighlight: string;
    heroHeadlineTafsir: string;
    heroHeadlineTafsirHighlight: string;
    heroSubheadline: string;
    appStoreRating: string;
    joinCommunity: string;
    ctaFree: string;
    sunnahFasting: string;
    availabilityText: string;

    // How It Works
    howItWorksTitle: string;
    howItWorksSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;

    // Features
    featuresTitle: string;
    featuresSubtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    feature5Title: string;
    feature5Desc: string;
    feature6Title: string;
    feature6Desc: string;

    // Stats
    statsTitle: string;
    statsDesc: string;
    statsList1: string;
    statsList2: string;
    statsList3: string;

    // Daily Recitation
    dailyBadge: string;
    dailyTitle: string;
    dailyDesc: string;
    dailyFeature1Title: string;
    dailyFeature1Desc: string;
    dailyFeature2Title: string;
    dailyFeature2Desc: string;
    dailyFeature3Title: string;
    dailyFeature3Desc: string;

    // AI Intelligent Quiz
    aiSectionBadge: string;
    aiSectionTitle: string;
    aiSectionDesc: string;
    aiFeature1Title: string;
    aiFeature1Desc: string;
    aiFeature2Title: string;
    aiFeature2Desc: string;
    aiFeature3Title: string;
    aiFeature3Desc: string;
    aiDisclaimer: string;
    aiHeroTagline: string;

    // FAQ
    faqTitle: string;
    faqSubtitle: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
    faq5Q: string;
    faq5A: string;
    goldenLandscapeTitle: string;
    goldenLandscapeDesc: string;

    // Latest Updates
    updatesTitle: string;
    update1Title: string;
    update1Desc: string;
    update2Title: string;
    update2Desc: string;
    update3Title: string;
    update3Desc: string;
    update4Title: string;
    update4Desc: string;
    update5Title: string;
    update5Desc: string;

    // Testimonials
    testimonialsTitle: string;
    testimonialsSubtitle: string;

    // CTA
    ctaTitle: string;
    ctaDesc: string;

    // Footer
    footerCopyright: string;
    privacyPolicy: string;
    support: string;

    // Download Drawer
    downloadTitle: string;
    downloadSubtitle: string;
    noSignInRequired: string;
    noDataCollection: string;
    privacyNote: string;
    orText: string;
    noAds: string;
    featuresCount: string;
    goldenQuranTitle: string;
    goldenQuranDesc: string;
    wbwTitle: string;
    wbwDesc: string;
    trustUsedBy: string;
    trustFree: string;
    ctaTailoredHow: string;
    ctaTailoredFeatures: string;
    ctaTailoredTestimonials: string;
    ctaTailoredFooter: string;
    landscapeNudge: string;

    // 24 Features
    categoryRecitation: string;
    categoryHifdh: string;
    categoryUI: string;
    categoryGrowth: string;
    f1Title: string; f1Desc: string;
    f2Title: string; f2Desc: string;
    f3Title: string; f3Desc: string;
    f4Title: string; f4Desc: string;
    f5Title: string; f5Desc: string;
    f6Title: string; f6Desc: string;
    f7Title: string; f7Desc: string;
    f8Title: string; f8Desc: string;
    f9Title: string; f9Desc: string;
    f10Title: string; f10Desc: string;
    f11Title: string; f11Desc: string;
    f12Title: string; f12Desc: string;
    f13Title: string; f13Desc: string;
    f14Title: string; f14Desc: string;
    f15Title: string; f15Desc: string;
    f16Title: string; f16Desc: string;
    f17Title: string; f17Desc: string;
    f18Title: string; f18Desc: string;
    f19Title: string; f19Desc: string;
    f20Title: string; f20Desc: string;
    f21Title: string; f21Desc: string;
    f22Title: string; f22Desc: string;
    f23Title: string; f23Desc: string;
    f24Title: string; f24Desc: string;
};

export const translations: Record<Language, TranslationKeys> = {
    en: {
        // Banner
        bannerText: '🎙️ New in v2.1.1 — Intelligent Quiz now evaluates your recitation word by word using AI.',
        bannerCTA: 'Download Free →',

        // Navbar
        downloadNow: 'Download Now',

        // Hero
        ramadanText: 'Beyond Ramadan: Master the Quran with our new Golden Mode & Word-by-Word Translation.',
        versionBadge: 'v2.1.1',
        heroHeadline: 'Read in Gold.',
        heroHeadlineHighlight: 'Understand Every Word.',
        heroHeadlineTafsir: 'Read in Gold.',
        heroHeadlineTafsirHighlight: 'Understand Every Word.',
        heroSubheadline: 'The ultimate Quran companion for memorizers and reciters. Track every Surah, quiz your recall with AI, and master your Hifdh journey.',
        availabilityText: 'Word by Word Translations available in English, Malay, Tamil & Urdu',
        appStoreRating: '4.9 on the App Store',
        joinCommunity: 'Used by Muslims in 40+ countries',
        ctaFree: "Download for Free",
        sunnahFasting: "Sunnah Fasting Calendar",

        // How It Works
        howItWorksTitle: 'How It Works',
        howItWorksSubtitle: 'Four simple steps to start your Quran journey today.',
        step1Title: 'Download & Setup',
        step1Desc: 'Install iHafidh from your app store and choose your preferred Mushaf style and translation.',
        step2Title: 'Set Your Goals',
        step2Desc: 'Define which Surahs or Juz you want to memorize and set a daily recitation target.',
        step3Title: 'Track Daily',
        step3Desc: 'Mark verses as revised or memorized. Watch your progress rings fill up in real-time.',
        step4Title: 'Analyze & Improve',
        step4Desc: 'Use detailed statistics to identify patterns and stay consistent using spaced repetition.',

        // Features
        featuresTitle: 'Powerful Features for Every Hafidh',
        featuresSubtitle: 'Everything you need to stay consistent and achieve your memorization goals.',
        feature1Title: 'Golden Read Mode',
        feature1Desc: 'Transform your screen into a premium landscape Golden Mushaf. Perfect for focused recitation and immersive study.',
        feature2Title: 'Comprehensive Tracking',
        feature2Desc: 'Monitor your journey across all 114 Surahs and 30 Juz with visual progress indicators.',
        feature3Title: 'Advanced Analytics',
        feature3Desc: 'Detailed memorization statistics and performance metrics to visualize your daily efforts.',
        feature4Title: 'Spaced Repetition',
        feature4Desc: 'Smart review system designed for optimal retention and long-term memorization.',
        feature5Title: 'Audio Recitations',
        feature5Desc: 'High-quality verse-by-verse practice with customizable audio controls.',
        feature6Title: '24 Power Features',
        feature6Desc: 'From Sunnah Fasting to Word-by-Word study, explore all 24 features designed for the complete Islamic lifestyle.',

        // Stats
        statsTitle: 'Visualize Your Success',
        statsDesc: "They say what gets measured gets managed. iHafidh provides deep insights into your progress, helping you identify patterns and stay motivated.",
        statsList1: 'Daily & Weekly activity heatmaps',
        statsList2: 'Surah-wise completion metrics',
        statsList3: 'Achievement badges and milestones',

        // Daily Recitation
        dailyBadge: 'For Every Muslim',
        dailyTitle: 'Read. Reflect. Understand.',
        dailyDesc: "Whether you're aiming for Hifdh or just want a meaningful daily recitation, iHafidh provides a premium reading experience for every Muslim.",
        dailyFeature1Title: 'Daily Ayah Notifications',
        dailyFeature1Desc: 'Start your morning with a beautiful verse and reflection delivered to your device.',
        dailyFeature2Title: 'Multi-Language Tarjuma',
        dailyFeature2Desc: 'Access high-quality translations in English, Urdu, Tamil, French, and many more.',
        dailyFeature3Title: 'Word-by-Word Translation',
        dailyFeature3Desc: 'Understand the depth of every single word in the Quran with our interactive WBW mode.',

        // AI Intelligent Quiz
        aiSectionBadge: 'New AI Capability',
        aiSectionTitle: 'Recite. Evaluate. Perfect.',
        aiSectionDesc: 'Recite a verse aloud in Quiz mode — our AI instantly evaluates your recitation with a word-by-word accuracy scorecard.',
        aiHeroTagline: 'Recite in AI — recite a verse aloud in Quiz mode, get a word-by-word accuracy scorecard instantly.',
        aiFeature1Title: '🎙️ Word-by-Word Scorecard',
        aiFeature1Desc: 'AI grades each Arabic word individually — see exactly which words you nailed and which need work.',
        aiFeature2Title: '✅ Auto-Mark Correct',
        aiFeature2Desc: 'Score 80% or above and the verse is automatically marked correct — no manual tapping needed.',
        aiFeature3Title: '🔄 Instant Retry',
        aiFeature3Desc: 'Re-record any verse without losing your progress on the others.',
        aiDisclaimer: '* AI can make mistakes. Tajweed rules and Quran recitation accuracy may differ from expert human review.',

        // FAQ
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Everything you need to know about the iHafidh app.',
        faq1Q: 'Is iHafidh free to use?',
        faq1A: 'Yes, the core features of iHafidh, including progress tracking and Quran recitation, are completely free to use with no hidden charges.',
        faq2Q: 'Does it work offline?',
        faq2A: 'Most features work perfectly offline. Your progress is saved locally. Audio recitations can be downloaded to work without an internet connection.',
        faq3Q: 'What Quran translations are available?',
        faq3A: 'We offer a wide range of translations in various languages including English (Asad, Pickthall, Sahih), Urdu, Tamil, French, Hindi, and more.',
        faq4Q: 'Can I track both Surah and Juz progress?',
        faq4A: 'Absolutely. iHafidh allows you to track your progress at both the Surah level (all 114) and Juz level (all 30) simultaneously.',
        faq5Q: 'How is iHafidh different from other Quran apps?',
        faq5A: 'Most Quran apps focus on reading. iHafidh is built specifically for memorization — combining progress tracking across all 114 Surahs and 30 Juz, spaced repetition, detailed analytics, and the immersive Golden Quran Mode. Now with AI-powered recitation evaluation — iHafidh app gives you a word-by-word accuracy scorecard from your own voice. It\'s a tool for those serious about their Hifdh journey, not just daily reading.',
        goldenLandscapeTitle: 'Adaptive Landscape',
        goldenLandscapeDesc: 'Designed for large tablets and smartphone orientation changes.',
        trustUsedBy: 'Used by Muslims in 40+ countries',
        trustFree: 'Free to Download',
        ctaTailoredHow: 'Start in Minutes — Download Free',
        ctaTailoredFeatures: 'Try iHafidh Free Today',
        ctaTailoredTestimonials: 'Join the Community — Download Now',
        ctaTailoredFooter: "Begin Your Hifdh Journey — It's Free",
        landscapeNudge: 'Rotate to landscape for a cinematic, distraction-free Quran experience',

        // Latest Updates
        updatesTitle: 'Latest Features (v2.1.1)',
        update1Title: 'Intelligent AI Quiz',
        update1Desc: 'Recite a verse and get an instant word-by-word AI accuracy scorecard.',
        update2Title: 'AI Auto-Mark',
        update2Desc: 'Verses scoring 80%+ are automatically marked correct — no manual tapping needed.',
        update3Title: 'Tajweed Fonts',
        update3Desc: 'New color-coded Tajweed fonts in settings to perfect your pronunciation.',
        update4Title: 'Preview Reciter',
        update4Desc: 'Listen to audio samples when selecting your preferred Qari in settings.',
        update5Title: 'Custom Page Mode',
        update5Desc: 'Customize your reading experience from 3 up to 20 verses per page.',

        // Testimonials
        testimonialsTitle: 'Loved by the Ummah',
        testimonialsSubtitle: 'Join our growing community of dedicated Huffadh around the world.',

        // CTA
        ctaTitle: 'Start Your Hifdh Journey Now',
        ctaDesc: 'Join thousands of Muslims worldwide who are using iHafidh to master the Noble Quran.',

        // Footer
        footerCopyright: 'Built with heart for the Ummah.',
        privacyPolicy: 'Privacy Policy',
        support: 'Support',

        // Download Drawer
        downloadTitle: 'Download iHafidh',
        downloadSubtitle: 'Select your store to start your journey.',
        noSignInRequired: 'No Sign-in Required',
        noDataCollection: 'No Data Collection',
        privacyNote: 'Your progress stays private on your device.',
        orText: 'OR',
        noAds: 'No Ads',
        featuresCount: '24 Features',
        goldenQuranTitle: "Golden Read Mode",
        goldenQuranDesc: "Rotate your phone to landscape for a premium golden experience.",
        wbwTitle: "Word-by-Word",
        wbwDesc: "Interactive translation for every single word.",

        // 24 Features
        categoryRecitation: 'Recitation Experience',
        categoryHifdh: 'Advanced Memorization',
        categoryUI: 'Premium Experience',
        categoryGrowth: 'Growth & Analytics',
        f1Title: 'Golden Read Mode', f1Desc: 'High-contrast gold text on midnight background for immersive night reading.',
        f2Title: 'Parchment Mode', f2Desc: 'Eye-friendly ivory canvas with espresso ink for a traditional feel.',
        f3Title: 'Landscape Support', f3Desc: 'Full rotation for a cinematic, distraction-free reading experience.',
        f4Title: 'Word-by-Word', f4Desc: 'Interactive dots beneath every Arabic word for instant meaning.',
        f5Title: 'Full Translation', f5Desc: 'High-quality translations for deeper contextual understanding.',
        f6Title: 'Juz Selection', f6Desc: 'Navigate the Quran by traditional divisions (Juz 1-30).',
        f7Title: 'Surah Navigation', f7Desc: 'Organized list for rapid jumping between chapters.',
        f8Title: 'Verse Selection', f8Desc: 'Granular navigation down to the specific Ayah.',
        f9Title: 'Visual Word Markers', f9Desc: 'Interactive dots to help anchor your memory during recitation.',
        f10Title: 'Active Recall', f10Desc: 'UI layouts designed to test your memory without looking at translation.',
        f11Title: 'Quranic Duas', f11Desc: 'Dedicated section for essential supplications found in the Quran.',
        f12Title: 'Favourites', f12Desc: 'One-tap "hearting" of verses to build a personal collection.',
        f13Title: 'Progress Tracking', f13Desc: 'Visual indicators of which Surahs or Juz you are memorizing.',
        f14Title: 'Custom Ranges', f14Desc: 'Ability to focus on specific sections for repetitive loops.',
        f15Title: 'Memorization Engine', f15Desc: 'Specialized logic for tracking memorization accuracy over time.',
        f16Title: 'Reading Mode Toggle', f16Desc: 'Seamless switching between Study and Pure Recitation views.',
        f17Title: 'Distraction-Free', f17Desc: 'Minimalist design that hides notifications during reading.',
        f18Title: 'Premium Typography', f18Desc: 'Custom-tuned Arabic fonts for clarity across all sizes.',
        f19Title: 'Modern Card Layout', f19Desc: 'Clean, mobile-first UI for browsing Surahs and verses.',
        f20Title: 'Offline Access', f20Desc: 'Read and use core tools without an active internet connection.',
        f21Title: 'Cross-Platform Sync', f21Desc: 'Uniform experience across both iOS and Android devices.',
        f22Title: 'Minimalist UI/UX', f22Desc: '"Vibe-coded" design philosophy focused on elegance and calm.',
        f23Title: 'Integrated Analytics', f23Desc: 'Insights into which features help you progress the most.',
        f24Title: 'Multi-Language', f24Desc: 'Localized metadata and translations for global markets.',
    },

    ta: {
        // Banner
        bannerText: '🎙️ புதிய வெளியீடு v2.1.1 — Intelligent Quiz இப்போது உங்கள் ஓதுதலை AI மூலம் வார்த்தைக்கு வார்த்தை மதிப்பிடுகிறது.',
        bannerCTA: 'Download Free →',

        // Navbar
        downloadNow: 'பதிவிறக்கம்',

        // Hero
        ramadanText: 'இந்த புனித ரமலானில் ஒவ்வொரு பகலையும் இரவையும் மதிப்புமிக்கதாக மாற்றுங்கள் - குர்ஆனை மனனம் செய்யுங்கள், ஓதுங்கள், சிந்தியுங்கள்.',
        versionBadge: 'v2.1.1',
        heroHeadline: 'தங்கத்தில் ஓதுங்கள்.',
        heroHeadlineHighlight: 'ஒவ்வொரு வார்த்தையையும் புரிந்து கொள்ளுங்கள்.',
        heroHeadlineTafsir: 'தங்கத்தில் ஓதுங்கள்.',
        heroHeadlineTafsirHighlight: 'ஒவ்வொரு வார்த்தையையும் புரிந்து கொள்ளுங்கள்.',
        heroSubheadline: 'ஓதுபவர்கள் மற்றும் மனப்பாடம் செய்பவர்கள் இருவருக்கும் ஏற்ற சிறந்த கருவி. iHafidh இப்போது உங்களுக்கு அதிவேக கோல்டன் லேண்ட்ஸ்கேப் மோடு மற்றும் துல்லியமான வார்த்தைக்கு வார்த்தை மொழிபெயர்ப்பை வழங்குகிறது.',
        availabilityText: 'Word by Word Translations is available in English, Malay, Tamil and Urdu',
        appStoreRating: 'App Store-இல் 4.9 மதிப்பீடு',
        joinCommunity: '40+ நாடுகளில் உள்ள முஸ்லிம்களால் பயன்படுத்தப்படுகிறது',
        ctaFree: 'இலவசமாக பதிவிறக்குங்கள்',
        sunnahFasting: 'சுன்னத் நோன்பு காலண்டர்',

        // How It Works
        howItWorksTitle: 'இயங்கும் முறை',
        howItWorksSubtitle: 'இன்றே உங்கள் குர்ஆன் பயணத்தைத் தொடங்க நான்கு எளிய படிகள்.',
        step1Title: 'பதிவிறக்கம் & அமைப்பு',
        step1Desc: 'App Store-இலிருந்து iHafidh-ஐ நிறுவி, உங்களுக்கு விருப்பமான முஸ்ஹஃப் பாணி மற்றும் மொழிபெயர்ப்பைத் தேர்ந்தெடுக்கவும்.',
        step2Title: 'இலக்குகளை அமைக்கவும்',
        step2Desc: 'எந்த சூராக்கள் அல்லது ஜுஸ்களை மனப்பாடம் செய்ய விரும்புகிறீர்கள் என்பதை வரையறுத்து, தினசரி ஓதுதல் இலக்கை நிர்ணயிக்கவும்.',
        step3Title: 'தினமும் கண்காணிக்கவும்',
        step3Desc: 'ஆயத்துக்களை திருப்பி ஓதியதாக அல்லது மனப்பாடம் செய்ததாகக் குறிக்கவும். உங்கள் முன்னேற்ற வளையங்கள் நிரம்புவதைப் பாருங்கள்.',
        step4Title: 'பகுப்பாய்வு செய்து மேம்படுத்துங்கள்',
        step4Desc: 'விரிவான புள்ளிவிவரங்களைப் பயன்படுத்தி முறைகளை அடையாளம் கண்டு, இடைவெளி மீள்நினைவு (Spaced Reptition) முறையைப் பயன்படுத்துங்கள்.',

        // Features
        featuresTitle: 'ஒவ்வொரு ஹாஃபிழுக்கும் சக்திவாய்ந்த அம்சங்கள்',
        featuresSubtitle: 'உங்கள் மனப்பாட இலக்குகளை அடையவும் தேவையான அனைத்து அம்சங்கள்.',
        feature1Title: 'பக்க முறை (Page Mode)',
        feature1Desc: '3 முதல் 20 ஆயத்துக்கள் வரை வாசிப்பைத் தனிப்பயனாக்குங்கள். எளிதான மனப்பாடத்திற்கு பக்க அளவிலான ஆடியோ மீண்டும் இயக்கத்துடன் உங்கள் சொந்த பக்கங்களை உருவாக்கி கண்காணிக்கவும்.',
        feature2Title: 'விரிவான கண்காணிப்பு',
        feature2Desc: 'முன்னேற்ற குறிகாட்டிகளுடன் அனைத்து 114 சூராக்கள் மற்றும் 30 ஜுஸ்களிலும் உங்கள் ஹிஃப்ழ் பயணத்தைக் கண்காணிக்கவும்.',
        feature3Title: 'மேம்பட்ட பகுப்பாய்வு',
        feature3Desc: 'உங்கள் தினசரி முயற்சிகளை விரிவான மனப்பாட புள்ளிவிவரங்கள் மற்றும் செயல்திறன் அளவீடுகள்.',
        feature4Title: 'இடைவெளி மீள்நினைவு',
        feature4Desc: 'சிறந்த தக்கவைப்பு மற்றும் நீண்டகால மனப்பாடத்திற்காக வடிவமைக்கப்பட்ட அமைப்பு.',
        feature5Title: 'ஆடியோ ஓதுதல்கள்',
        feature5Desc: 'உங்களுக்கேற்ப ஆடியோ கட்டுப்பாடுகளுடன் தரமான ஆயத்து வாரியான பயிற்சி.',
        feature6Title: 'ஹிஃப்ழ் திட்டங்கள்',
        feature6Desc: 'உங்களுக்கேற்ப ஹிஃப்ழ் திட்டங்களை உருவாக்கி, உங்களை சரியான பாதையில் வைத்திருக்க நினைவூட்டல்களைப் (Reminders) பெறுங்கள்.',

        // Stats
        statsTitle: 'உங்கள் முன்னேற்ற பயணத்தை காணுங்கள்',
        statsDesc: ' iHafidh  உங்கள் முன்னேற்றத்தில் ஆழமான நுண்ணறிவுகளை வழங்குகிறது, முறைகளை அடையாளம் காணவும் ஊக்கமாக இருக்கவும் உதவுகிறது.',
        statsList1: 'தினசரி & வாராந்திர செயல்பாட்டு  வரைபடங்கள் (Heat Maps)',
        statsList2: 'சூரா வாரியான நிறைவு அளவீடுகள்',
        statsList3: 'சாதனை பேட்ஜ்கள் மற்றும் மைல்கற்கள்',

        // Daily Recitation
        dailyBadge: 'ஒவ்வொரு முஸ்லிமுக்கும்',
        dailyTitle: 'படி. சிந்தி. புரிந்துகொள்.',
        dailyDesc: 'நீங்கள் ஹிஃப்ழ் செய்ய விரும்புகிறீர்களா?அல்லது அர்த்தமுள்ள தினசரி ஓதுதலை விரும்புகிறீர்களா? iHafidh ஒவ்வொரு முஸ்லிமுக்கும் உயர்தர வாசிப்பு அனுபவத்தை வழங்குகிறது.',
        dailyFeature1Title: 'தினசரி ஆயத் அறிவிப்புகள்',
        dailyFeature1Desc: 'உங்கள் காலையை ஒரு அழகான ஆயத்துடனும் சிந்தனையுடனும் தொடங்குங்கள், Daily Notifications.',
        dailyFeature2Title: 'பல மொழி தர்ஜுமா',
        dailyFeature2Desc: 'ஆங்கிலம், உருது, தமிழ், பிரெஞ்சு மற்றும் பல மொழிகளில் தரமான மொழிபெயர்ப்புகளை அணுகுங்கள்.',
        dailyFeature3Title: 'அறிஞர்களின் தஃப்சீர்கள்',
        dailyFeature3Desc: 'வாசகத்தில் நேரடியாக பல மொழி தஃப்சீர்களுடன் உங்கள் புனித குர்ஆனின் புரிதலை ஆழப்படுத்துங்கள்.',

        // AI Intelligent Quiz
        aiSectionBadge: 'புதிய AI அம்சம்',
        aiSectionTitle: 'ஓது. மதிப்பிடு. திருத்து.',
        aiSectionDesc: 'ஒரு வசனத்தை ஓதிக் காட்டுங்கள் — எங்கள் AI உங்கள் ஓதுதலை வார்த்தைக்கு வார்த்தை சதவீத மதிப்பெண்ணுடன் உடனடியாக மதிப்பிடும்.',
        aiHeroTagline: 'AI-உடன் ஓதுங்கள் — ஒரு வசனத்தை ஓதி, வார்த்தைக்கு வார்த்தை துல்லிய மதிப்பெண்ணை உடனடியாகப் பெறுங்கள்.',
        aiFeature1Title: '🎙️ வார்த்தைக்கு வார்த்தை மதிப்பெண்',
        aiFeature1Desc: 'AI ஒவ்வொரு அரபி வார்த்தையையும் தனிதநிலையில் மதிப்பிடும் — எந்த வார்த்தைகளை சரியாக ஓதினீர் என்பதையும் எத்தையும் பாருங்கள்.',
        aiFeature2Title: '✅ தானியல் சரி என்று குறிக்குங்கள்',
        aiFeature2Desc: '80% அல்லது அதிகமான மதிப்பெண் பெற்றால், ஆயத் தானியல் சரி என்று குறிக்கப்படும் — கையடி தேவையில்லை.',
        aiFeature3Title: '🔄 மறுபடியும் முயற்சி',
        aiFeature3Desc: 'மற்ற வசனஙகளில் உங்கள் முன்னேற்றத்தை இழகாமல் எந்த வசனத்தையும் மறுபடியும் முயற்சியுங்கள்.',
        aiDisclaimer: '* AI தவறுகளைச் செய்யலாம். தஜ்வீத் விதிகள் மற்றும் குர்ஆன் ஓதுதல் துல்லிய மதிப்பீடு மனித மதிப்பாய்விலிருந்து மாறுபடலாம்.',

        // FAQ
        faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)',
        faqSubtitle: 'iHafidh செயலி பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.',
        faq1Q: 'iHafidh இலவசமா?',
        faq1A: 'ஆம், முன்னேற்றக் கண்காணிப்பு மற்றும் குர்ஆன் ஓதுதல் உள்ளிட்ட iHafidh-இன் முக்கிய அம்சங்கள் மறைமுக கட்டணங்கள் இல்லாமல் முற்றிலும் இலவசமாக பயன்படுத்தலாம்.',
        faq2Q: 'இணையமின்றி செயல்படுமா?',
        faq2A: 'பெரும்பாலான அம்சங்கள் ஆஃப்லைனில் சரியாக செயல்படும். உங்கள் முன்னேற்றம் உள்ளூரில் சேமிக்கப்படும். இணைய இணைப்பு இல்லாமல் செயல்பட ஆடியோ ஓதுதல்களை பதிவிறக்கம் செய்யலாம்.',
        faq3Q: 'என்ன குர்ஆன் மொழிபெயர்ப்புகள் கிடைக்கின்றன?',
        faq3A: 'ஆங்கிலம் (அசத், பிக்தால், ஸஹீஹ்), உருது, தமிழ், பிரெஞ்சு, இந்தி மற்றும் பல மொழிகளில் பரந்த அளவிலான மொழிபெயர்ப்புகளை நாங்கள் வழங்குகிறோம்.',
        faq4Q: 'சூரா மற்றும் ஜுஸ் முன்னேற்றம் இரண்டையும் கண்காணிக்க முடியுமா?',
        faq4A: 'நிச்சயமாக. iHafidh சூரா நிலை (அனைத்து 114) மற்றும் ஜுஸ் நிலை (அனைத்து 30) இரண்டிலும் ஒரே நேரத்தில் உங்கள் முன்னேற்றத்தைக் காணலாம்.',
        faq5Q: 'மற்ற குர்ஆன் செயலிகளிலிருந்து iHafidh எவ்வாறு வேறுபடுகிறது?',
        faq5A: 'பெரும்பாலான குர்ஆன் செயலிகள் ஓதுவதில் கவனம் செலுத்துகின்றன. iHafidh குறிப்பாக மனப்பாடம் செய்வதற்காக உருவாக்கப்பட்டது — அனைத்து 114 சூராக்கள் மற்றும் 30 ஜூஸ்கள் முழுவதும் முன்னேற்றத்தைக் கண்காணித்தல், இடைவெளி மறுபடியும் (spaced repetition), விரிவான பகுப்பாய்வு மற்றும் அதிவேக கோல்டன் குர்ஆன் பயன்முறை ஆகியவற்றை இணைக்கிறது. இது தினசரி வாசிப்புக்கு மட்டுமின்றி, தங்கள் ஹிஃப்ழ் பயணத்தில் தீவிரமாக இருப்பவர்களுக்கான ஒரு கருவியாகும்.',
        goldenLandscapeTitle: 'தழுவல் நிலப்பரப்பு',
        goldenLandscapeDesc: 'பெரிய டேப்லெட்டுகள் மற்றும் ஸ்மார்ட்போன் நோக்குநிலை மாற்றங்களுக்காக வடிவமைக்கப்பட்டது.',
        trustUsedBy: '40+ நாடுகளில் உள்ள முஸ்லிம்களால் பயன்படுத்தப்படுகிறது',
        trustFree: 'பதிவிறக்கம் செய்ய இலவசம்',
        ctaTailoredHow: 'நிமிடங்களில் தொடங்குங்கள் - இலவசமாக பதிவிறக்குங்கள்',
        ctaTailoredFeatures: 'இன்று iHafidh-ஐ இலவசமாக முயற்சிக்கவும்',
        ctaTailoredTestimonials: 'சமூகத்தில் இணையுங்கள் - இப்போதே பதிவிறக்குங்கள்',
        ctaTailoredFooter: 'உங்கள் ஹிஃப்ழ் பயணத்தைத் தொடங்குங்கள் - இது இலவசம்',
        landscapeNudge: 'முழு கோல்டன் அனுபவத்தைப் பெற உங்கள் சாதனத்தைத் கிடைமட்டமாக மாற்றவும்',

        // Latest Updates
        updatesTitle: 'சமீபத்திய புதுப்பிப்புகள் (v2.1.1)',
        update1Title: 'அறிவார்ந்த AI வினாடி வினா',
        update1Desc: 'ஒரு வசனத்தை ஓதி, உங்கள் துல்லியத்தின் அடிப்படையில் வார்த்தைக்கு வார்த்தை AI மதிப்பெண்ணைப் பெறுங்கள்.',
        update2Title: 'தஜ்வீத் எழுத்துருக்கள்',
        update2Desc: 'உங்கள் உச்சரிப்பை சரியாக்க அமைப்புகளில் புதிய வண்ணக் குறியீட்டு தஜ்வீத் எழுத்துருக்கள்.',
        update3Title: 'காரி முன்னோட்டம்',
        update3Desc: 'அமைப்புகளில் உங்களுக்கு விருப்பமான காரியைத் தேர்ந்தெடுக்கும்போது ஆடியோ மாதிரிகளைக் கேளுங்கள்.',
        update4Title: 'தனிப்பயன் பக்க முறை (Page Mode)',
        update4Desc: 'உங்கள் வசதிக்கேற்ப ஒரு பக்கத்திற்கு 3 முதல் 20 ஆயத்துக்கள் வரை உங்கள் வாசிப்பு .',
        update5Title: 'குர்ஆன் துஆக்கள் தொகுப்பு',
        update5Desc: 'குர்ஆனில் இருந்து உண்மையான பிரார்த்தனைகளை அணுகவும். தினசரி ஆன்மீக வளர்ச்சிக்காக மெனுவில் கிடைக்கிறது.',

        // Testimonials
        testimonialsTitle: 'நற்சான்றிதழ்கள்',
        testimonialsSubtitle: 'உலகெங்கிலும் உள்ள வளர்ந்து வரும் ஹுஃப்பாழ்களின் சமூகத்தில் இணையுங்கள்.',

        // CTA
        ctaTitle: 'இப்போதே உங்கள் ஹிஃப்ழ் பயணத்தைத் தொடங்குங்கள்',
        ctaDesc: 'புனித குர்ஆனை ஓத iHafidh-ஐப் பயன்படுத்தும் உலகெங்கிலும் உள்ள ஆயிரக்கணக்கான முஸ்லிம்களுடன் இணையுங்கள்.',

        // Footer
        footerCopyright: 'உம்மத்திற்காக அன்புடன் உருவாக்கப்பட்டது.',
        privacyPolicy: 'Privacy Policy',
        support: 'Support',

        // Download Drawer
        downloadTitle: 'iHafidh-ஐ பதிவிறக்கவும்',
        downloadSubtitle: 'உங்கள் பயணத்தைத் தொடங்க உங்கள் ஸ்டோரைத் தேர்ந்தெடுக்கவும்.',
        noSignInRequired: 'உள்நுழைவு தேவையில்லை',
        noDataCollection: 'தகவல்கள் சேகரிக்கப்படுவதில்லை',
        privacyNote: 'உங்கள் முன்னேற்றம் உங்கள் சாதனத்திலேயே இருக்கும்.',
        orText: 'அல்லது',
        noAds: 'விளம்பரங்கள் இல்லை',
        featuresCount: '24 அம்சங்கள்',
        goldenQuranTitle: "தங்க குர்ஆன் முறை",
        goldenQuranDesc: "சிறந்த அனுபவத்திற்காக உங்கள் போனை கிடைமட்டமாக மாற்றவும்.",
        wbwTitle: "வார்த்தைக்கு வார்த்தை",
        wbwDesc: "ஒவ்வொரு வார்த்தைக்கும் ஊடாடும் மொழிபெயர்ப்பு.",

        // 24 Features
        categoryRecitation: 'Recitation Experience',
        categoryHifdh: 'Advanced Memorization',
        categoryUI: 'Premium Experience',
        categoryGrowth: 'Growth & Analytics',
        f1Title: 'Golden Read Mode', f1Desc: 'High-contrast gold text on midnight background for immersive night reading.',
        f2Title: 'Parchment Mode', f2Desc: 'Eye-friendly ivory canvas with espresso ink for a traditional feel.',
        f3Title: 'Landscape Support', f3Desc: 'Full rotation for a cinematic, distraction-free reading experience.',
        f4Title: 'Word-by-Word', f4Desc: 'Interactive dots beneath every Arabic word for instant meaning.',
        f5Title: 'Full Translation', f5Desc: 'High-quality translations for deeper contextual understanding.',
        f6Title: 'Juz Selection', f6Desc: 'Navigate the Quran by traditional divisions (Juz 1-30).',
        f7Title: 'Surah Navigation', f7Desc: 'Organized list for rapid jumping between chapters.',
        f8Title: 'Verse Selection', f8Desc: 'Granular navigation down to the specific Ayah.',
        f9Title: 'Visual Word Markers', f9Desc: 'Interactive dots to help anchor your memory during recitation.',
        f10Title: 'Active Recall', f10Desc: 'UI layouts designed to test your memory without looking at translation.',
        f11Title: 'Quranic Duas', f11Desc: 'Dedicated section for essential supplications found in the Quran.',
        f12Title: 'Favourites', f12Desc: 'One-tap "hearting" of verses to build a personal collection.',
        f13Title: 'Progress Tracking', f13Desc: 'Visual indicators of which Surahs or Juz you are memorizing.',
        f14Title: 'Custom Ranges', f14Desc: 'Ability to focus on specific sections for repetitive loops.',
        f15Title: 'Memorization Engine', f15Desc: 'Specialized logic for tracking memorization accuracy over time.',
        f16Title: 'Reading Mode Toggle', f16Desc: 'Seamless switching between Study and Pure Recitation views.',
        f17Title: 'Distraction-Free', f17Desc: 'Minimalist design that hides notifications during reading.',
        f18Title: 'Premium Typography', f18Desc: 'Custom-tuned Arabic fonts for clarity across all sizes.',
        f19Title: 'Modern Card Layout', f19Desc: 'Clean, mobile-first UI for browsing Surahs and verses.',
        f20Title: 'Offline Access', f20Desc: 'Read and use core tools without an active internet connection.',
        f21Title: 'Cross-Platform Sync', f21Desc: 'Uniform experience across both iOS and Android devices.',
        f22Title: 'Minimalist UI/UX', f22Desc: '"Vibe-coded" design philosophy focused on elegance and calm.',
        f23Title: 'Integrated Analytics', f23Desc: 'Insights into which features help you progress the most.',
        f24Title: 'Multi-Language', f24Desc: 'Localized metadata and translations for global markets.',
    },

    ms: {
        // Banner
        bannerText: '🎙️ Baru di v2.1.1 — Kuiz AI Pintar kini menilai bacaan anda perkataan demi perkataan menggunakan AI.',
        bannerCTA: 'Download Free →',

        // Navbar
        downloadNow: 'Muat Turun',

        // Hero
        ramadanText: 'Ramadan ini, manfaatkan setiap siang dan malam. Hafal, Baca, Renungi.',
        versionBadge: 'v2.1.1',
        heroHeadline: 'Jadikan Ramadan ini',
        heroHeadlineHighlight: 'hafazan terkuat anda.',
        heroHeadlineTafsir: 'Jadikan Ramadan ini',
        heroHeadlineTafsirHighlight: 'tafsir paling mendalam anda.',
        heroSubheadline: 'Dari 0 ke 1 Juzuk dalam 30 hari. Jejaki kemajuan anda, bina konsistensi, dan capai matlamat hafazan anda.',
        availabilityText: 'Word by Word Translations is available in English, Malay, Tamil and Urdu',
        appStoreRating: '4.9 di App Store',
        joinCommunity: 'Digunakan oleh Muslim di 40+ negara',
        ctaFree: 'Muat Turun Percuma',
        sunnahFasting: 'Kalendar Puasa Sunnah',

        // How It Works
        howItWorksTitle: 'Cara Ia Berfungsi',
        howItWorksSubtitle: 'Empat langkah mudah untuk memulakan perjalanan Al-Quran anda hari ini.',
        step1Title: 'Muat Turun & Sediakan',
        step1Desc: 'Pasang iHafidh dari app store anda dan pilih gaya Mushaf dan terjemahan pilihan anda.',
        step2Title: 'Tetapkan Matlamat Anda',
        step2Desc: 'Tentukan surah atau juzuk mana yang ingin anda hafal dan tetapkan sasaran bacaan harian.',
        step3Title: 'Jejak Setiap Hari',
        step3Desc: 'Tandakan ayat sebagai telah diulang atau dihafal. Lihat gelang kemajuan anda terisi secara langsung.',
        step4Title: 'Analisis & Tingkatkan',
        step4Desc: 'Gunakan statistik terperinci untuk mengenal pasti corak dan kekal konsisten menggunakan ulangan berjarak.',

        // Features
        featuresTitle: 'Ciri-ciri Berkuasa untuk Setiap Hafiz',
        featuresSubtitle: 'Semua yang anda perlukan untuk kekal konsisten dan mencapai matlamat hafazan anda.',
        feature1Title: 'Mod Halaman Tersuai',
        feature1Desc: 'Sesuaikan bacaan dari 3 hingga 20 ayat. Cipta dan jejak halaman anda sendiri dengan ulangan audio peringkat halaman untuk hafazan lebih mudah.',
        feature2Title: 'Penjejakan Menyeluruh',
        feature2Desc: 'Pantau perjalanan anda merentasi semua 114 surah dan 30 juzuk dengan penunjuk kemajuan visual.',
        feature3Title: 'Analitik Lanjutan',
        feature3Desc: 'Statistik hafazan terperinci dan metrik prestasi untuk menggambarkan usaha harian anda.',
        feature4Title: 'Ulangan Berjarak',
        feature4Desc: 'Sistem ulangkaji pintar yang direka untuk pengekalan optimum dan hafazan jangka panjang.',
        feature5Title: 'Bacaan Audio',
        feature5Desc: 'Latihan ayat demi ayat berkualiti tinggi dengan kawalan audio yang boleh disesuaikan.',
        feature6Title: 'Pelan Pengajian',
        feature6Desc: 'Cipta pelan pengajian yang boleh disesuaikan dan terima peringatan pintar untuk memastikan anda berada di landasan yang betul.',

        // Stats
        statsTitle: 'Visualisasikan Kejayaan Anda',
        statsDesc: 'Mereka berkata apa yang diukur akan diuruskan. iHafidh menyediakan pandangan mendalam tentang kemajuan anda, membantu anda mengenal pasti corak dan kekal bermotivasi.',
        statsList1: 'Peta haba aktiviti harian & mingguan',
        statsList2: 'Metrik penyelesaian mengikut surah',
        statsList3: 'Lencana pencapaian dan pencapaian penting',

        // Daily Recitation
        dailyBadge: 'Untuk Semua Muslim',
        dailyTitle: 'Baca. Renungi. Fahami.',
        dailyDesc: 'Sama ada anda menyasarkan hafazan atau hanya mahukan bacaan harian yang bermakna, iHafidh menyediakan pengalaman bacaan premium untuk setiap Muslim.',
        dailyFeature1Title: 'Pemberitahuan Ayat Harian',
        dailyFeature1Desc: 'Mulakan pagi anda dengan ayat yang indah dan renungan yang dihantar ke peranti anda.',
        dailyFeature2Title: 'Terjemahan Pelbagai Bahasa',
        dailyFeature2Desc: 'Akses terjemahan berkualiti tinggi dalam Bahasa Inggeris, Urdu, Tamil, Perancis, dan banyak lagi.',
        dailyFeature3Title: 'Tafsir Ilmiah',
        dailyFeature3Desc: 'Dalami pemahaman anda dengan tafsir pelbagai bahasa terus dalam pembaca.',

        // AI Intelligent Quiz
        aiSectionBadge: 'Keupayaan AI Baru',
        aiSectionTitle: 'Baca. Nilai. Sempurnakan.',
        aiSectionDesc: 'Tuturkan satu ayat — AI kami terus menilai bacaan anda dengan kad skor ketepatan perkataan demi perkataan.',
        aiHeroTagline: 'Baca dengan AI — tuturkan ayat, dapatkan kad skor ketepatan perkataan demi perkataan serta-merta.',
        aiFeature1Title: '🎙️ Kad Skor Perkataan Demi Perkataan',
        aiFeature1Desc: 'AI menilai setiap perkataan Arab secara individu — lihat tepat perkataan mana yang betul dan mana yang perlu latihan.',
        aiFeature2Title: '✅ Tanda Betul Automatik',
        aiFeature2Desc: 'Skor 80% atau lebih dan ayat ditanda betul secara automatik — tiada ketukan manual diperlukan.',
        aiFeature3Title: '🔄 Cuba Semula Serta-merta',
        aiFeature3Desc: 'Rakam semula mana-mana ayat tanpa kehilangan kemajuan anda pada ayat lain.',
        aiDisclaimer: '* AI boleh membuat kesilapan. Hukum Tajwid dan penilaian ketepatan bacaan Al-Quran mungkin berbeza daripada semakan manusia.',

        // FAQ
        faqTitle: 'Soalan Lazim',
        faqSubtitle: 'Semua yang perlu anda tahu tentang aplikasi iHafidh.',
        faq1Q: 'Adakah iHafidh percuma?',
        faq1A: 'Ya, ciri-ciri teras iHafidh, termasuk penjejakan kemajuan dan bacaan Al-Quran, adalah percuma sepenuhnya tanpa caj tersembunyi.',
        faq2Q: 'Adakah ia berfungsi secara luar talian?',
        faq2A: 'Kebanyakan ciri berfungsi dengan sempurna secara luar talian. Kemajuan anda disimpan secara setempat. Bacaan audio boleh dimuat turun untuk berfungsi tanpa sambungan internet.',
        faq3Q: 'Apakah terjemahan Al-Quran yang tersedia?',
        faq3A: 'Kami menawarkan pelbagai terjemahan dalam pelbagai bahasa termasuk Bahasa Inggeris (Asad, Pickthall, Sahih), Urdu, Tamil, Perancis, Hindi, dan banyak lagi.',
        faq4Q: 'Bolehkah saya jejak kemajuan Surah dan Juzuk?',
        faq4A: 'Sudah tentu. iHafidh membolehkan anda menjejaki kemajuan anda di peringkat Surah (semua 114) dan peringkat Juzuk (semua 30) secara serentak.',
        faq5Q: 'Bagaimana iHafidh berbeza daripada aplikasi Al-Quran yang lain?',
        faq5A: 'Kebanyakan aplikasi Al-Quran fokus kepada pembacaan. iHafidh dibina khusus untuk hafalan — menggabungkan penjejakan kemajuan merangkumi semua 114 Surah dan 30 Juz, pengulangan jarak (spaced repetition), analitik terperinci, dan Mod Emas Al-Quran yang imersif. Ia adalah alat untuk mereka yang serius dengan perjalanan Hifz mereka, bukan sekadar bacaan harian.',
        goldenLandscapeTitle: 'Landskap Adaptif',
        goldenLandscapeDesc: 'Direka untuk tablet besar dan perubahan orientasi telefon pintar.',
        trustUsedBy: 'Digunakan oleh Muslim di 40+ negara',
        trustFree: 'Percuma untuk Dimuat Turun',
        ctaTailoredHow: 'Mula dalam Minit — Muat Turun Percuma',
        ctaTailoredFeatures: 'Cuba iHafidh Percuma Hari Ini',
        ctaTailoredTestimonials: 'Sertai Komuniti — Muat Turun Sekarang',
        ctaTailoredFooter: 'Mulakan Perjalanan Hifdh Anda — Ia Percuma',
        landscapeNudge: 'Putar peranti anda ke landskap untuk membuka pengalaman Emas sepenuhnya',

        // Latest Updates
        updatesTitle: 'Kemas Kini Terkini (v2.1.1)',
        update1Title: 'Kuiz AI Pintar',
        update1Desc: 'Baca ayat dan dapatkan kad skor AI untuk ketepatan anda, satu perkataan demi satu perkataan.',
        update2Title: 'Fon Tajwid',
        update2Desc: 'Fon Tajwid berkod warna baharu dalam tetapan untuk menyempurnakan sebutan anda.',
        update3Title: 'Pratonton Qari',
        update3Desc: 'Dengar sampel audio semasa memilih Qari pilihan anda dalam tetapan.',
        update4Title: 'Mod Halaman Tersuai',
        update4Desc: 'Sesuaikan pengalaman bacaan anda dari 3 hingga 20 ayat setiap halaman.',
        update5Title: 'Koleksi Doa Quran',
        update5Desc: 'Akses doa-doa sahih dari Al-Quran. Tersedia dalam menu untuk pengayaan rohani harian.',

        // Testimonials
        testimonialsTitle: 'Dicintai Umat',
        testimonialsSubtitle: 'Sertai komuniti Huffaz yang berdedikasi yang semakin berkembang di seluruh dunia.',

        // CTA
        ctaTitle: 'Mulakan Perjalanan Hafazan Anda Sekarang',
        ctaDesc: 'Sertai ribuan Muslim di seluruh dunia yang menggunakan iHafidh untuk menguasai Al-Quran.',

        // Footer
        footerCopyright: 'Dibina dengan kasih sayang untuk Umat.',
        privacyPolicy: 'Privacy Policy',
        support: 'Support',

        // Download Drawer
        downloadTitle: 'Muat Turun iHafidh',
        downloadSubtitle: 'Pilih gedung aplikasi anda untuk memulakan perjalanan.',
        noSignInRequired: 'Tiada Log Masuk Diperlukan',
        noDataCollection: 'Tiada Pengumpulan Data',
        privacyNote: 'Kemajuan anda kekal peribadi pada peranti anda.',
        orText: 'ATAU',
        noAds: 'Tiada Iklan',
        featuresCount: '24 Ciri',
        goldenQuranTitle: "Mod Quran Emas",
        goldenQuranDesc: "Putar telefon anda ke landskap untuk pengalaman emas premium.",
        wbwTitle: "Kata-demi-Kata",
        wbwDesc: "Terjemahan interaktif untuk setiap perkataan.",

        // 24 Features
        categoryRecitation: 'Recitation Experience',
        categoryHifdh: 'Advanced Memorization',
        categoryUI: 'Premium Experience',
        categoryGrowth: 'Growth & Analytics',
        f1Title: 'Golden Read Mode', f1Desc: 'High-contrast gold text on midnight background for immersive night reading.',
        f2Title: 'Parchment Mode', f2Desc: 'Eye-friendly ivory canvas with espresso ink for a traditional feel.',
        f3Title: 'Landscape Support', f3Desc: 'Full rotation for a cinematic, distraction-free reading experience.',
        f4Title: 'Word-by-Word', f4Desc: 'Interactive dots beneath every Arabic word for instant meaning.',
        f5Title: 'Full Translation', f5Desc: 'High-quality translations for deeper contextual understanding.',
        f6Title: 'Juz Selection', f6Desc: 'Navigate the Quran by traditional divisions (Juz 1-30).',
        f7Title: 'Surah Navigation', f7Desc: 'Organized list for rapid jumping between chapters.',
        f8Title: 'Verse Selection', f8Desc: 'Granular navigation down to the specific Ayah.',
        f9Title: 'Visual Word Markers', f9Desc: 'Interactive dots to help anchor your memory during recitation.',
        f10Title: 'Active Recall', f10Desc: 'UI layouts designed to test your memory without looking at translation.',
        f11Title: 'Quranic Duas', f11Desc: 'Dedicated section for essential supplications found in the Quran.',
        f12Title: 'Favourites', f12Desc: 'One-tap "hearting" of verses to build a personal collection.',
        f13Title: 'Progress Tracking', f13Desc: 'Visual indicators of which Surahs or Juz you are memorizing.',
        f14Title: 'Custom Ranges', f14Desc: 'Ability to focus on specific sections for repetitive loops.',
        f15Title: 'Memorization Engine', f15Desc: 'Specialized logic for tracking memorization accuracy over time.',
        f16Title: 'Reading Mode Toggle', f16Desc: 'Seamless switching between Study and Pure Recitation views.',
        f17Title: 'Distraction-Free', f17Desc: 'Minimalist design that hides notifications during reading.',
        f18Title: 'Premium Typography', f18Desc: 'Custom-tuned Arabic fonts for clarity across all sizes.',
        f19Title: 'Modern Card Layout', f19Desc: 'Clean, mobile-first UI for browsing Surahs and verses.',
        f20Title: 'Offline Access', f20Desc: 'Read and use core tools without an active internet connection.',
        f21Title: 'Cross-Platform Sync', f21Desc: 'Uniform experience across both iOS and Android devices.',
        f22Title: 'Minimalist UI/UX', f22Desc: '"Vibe-coded" design philosophy focused on elegance and calm.',
        f23Title: 'Integrated Analytics', f23Desc: 'Insights into which features help you progress the most.',
        f24Title: 'Multi-Language', f24Desc: 'Localized metadata and translations for global markets.',
    },
    ur: {
        // Banner
        bannerText: '🎙️ v2.1.1 میں نیا — ذہین کوئز اب آپ کی تلاوت کا لفظ بہ لفظ AI کے ساتھ جائزہ لیتا ہے۔',
        bannerCTA: 'Download Free →',

        // Navbar
        downloadNow: 'ڈاؤن لوڈ کریں',

        // Hero
        ramadanText: 'اس رمضان ہر دن اور رات کو قیمتی بنائیں، حفظ کریں، تلاوت کریں اور غور و فکر کریں۔',
        versionBadge: 'v2.1.1',
        heroHeadline: 'گولڈ میں پڑھیں.',
        heroHeadlineHighlight: 'ہر لفظ کو سمجھیں۔',
        heroHeadlineTafsir: 'گولڈ میں پڑھیں.',
        heroHeadlineTafsirHighlight: 'ہر لفظ کو سمجھیں۔',
        heroSubheadline: 'تلاوت کرنے والوں اور حفظ کرنے والوں دونوں کے لیے بہترین ٹول۔ iHafidh اب آپ کے لیے عمیق گولڈن لینڈ اسکیپ موڈ اور درست لفظ بہ لفظ ترجمہ لاتا ہے تاکہ آپ کے تعلق کو مزید گہرا کیا جا سکے۔',
        availabilityText: 'Word by Word Translations is available in English, Malay, Tamil and Urdu',
        appStoreRating: 'ایپ اسٹور پر 4.9 ریٹنگ',
        joinCommunity: '40 سے زائد ممالک کے مسلمان استعمال کر رہے ہیں',
        ctaFree: 'مفت ڈاؤن لوڈ کریں',
        sunnahFasting: 'سنت روزہ کیلنڈر',

        // How It Works
        howItWorksTitle: 'یہ کیسے کام کرتا ہے',
        howItWorksSubtitle: 'آج ہی اپنا قرآنی سفر شروع کرنے کے لیے چار آسان اقدامات۔',
        step1Title: 'ڈاؤن لوڈ اور سیٹ اپ',
        step1Desc: 'اپنے ایپ اسٹور سے iHafidh انسٹال کریں اور اپنا پسندیدہ مصحف اسٹائل اور ترجمہ منتخب کریں۔',
        step2Title: 'اپنے اہداف طے کریں',
        step2Desc: 'واضح کریں کہ آپ کون سی سورتیں یا پارے حفظ کرنا چاہتے ہیں اور روزانہ تلاوت کا ہدف طے کریں۔',
        step3Title: 'روزانہ ٹریک کریں',
        step3Desc: 'آیات کو دہرائے گئے یا حفظ شدہ کے طور پر نشان زد کریں۔ اپنی پیشرفت کے حلقوں کو بھرتا ہوا دیکھیں۔',
        step4Title: 'تجزیہ اور بہتری',
        step4Desc: 'تفصیلی اعداد و شمار کا استعمال کرتے ہوئے پیٹرنز کی شناخت کریں اور اسپیسڈ ریپیٹیشن کے ذریعے مستقل مزاج رہیں۔',

        // Features
        featuresTitle: 'ہر حافظ کے لیے طاقتور خصوصیات',
        featuresSubtitle: 'وہ سب کچھ جو آپ کو مستقل مزاج رہنے اور اپنے حفظ کے اہداف حاصل کرنے کے لیے درکار ہے۔',
        feature1Title: 'کسٹم پیج موڈ',
        feature1Desc: '3 سے 20 آیات تک تلاوت کو اپنی ضرورت کے مطابق ڈھالیں۔ حفظ کو آسان بنانے کے لیے پیج لیول آڈیو ریپیٹ کے ساتھ اپنے صفحات بنائیں اور ٹریک کریں۔',
        feature2Title: 'جامع ٹریکنگ',
        feature2Desc: 'تمام 114 سورتوں اور 30 پاروں میں اپنے سفر کی نگرانی کریں پیشرفت کے اشاروں کے ساتھ۔',
        feature3Title: 'اعلی درجے کا تجزیہ',
        feature3Desc: 'اپنی روزانہ کی کوششوں کو دیکھنے کے لیے حفظ کے تفصیلی اعداد و شمار اور کارکردگی کے پیمانے۔',
        feature4Title: 'اسپیسڈ ریپیٹیشن',
        feature4Desc: 'بہترین یادداشت اور طویل مدتی حفظ کے لیے ڈیزائن کیا گیا اسمارٹ ریویو سسٹم۔',
        feature5Title: 'آڈیو تلاوت',
        feature5Desc: 'مرضی کے مطابق آڈیو کنٹرولز کے ساتھ اعلیٰ معیار کی آیت بہ آیت مشق۔',
        feature6Title: 'مطالعہ کے منصوبے',
        feature6Desc: 'اپنی مرضی کے مطابق اسٹڈی پلانز بنائیں اور ٹریک پر رہنے کے لیے اسمارٹ ریمائنڈرز حاصل کریں۔',

        // Stats
        statsTitle: 'اپنی کامیابی کو دیکھیں',
        statsDesc: 'iHafidh آپ کی پیشرفت کے بارے میں گہری بصیرت فراہم کرتا ہے، جو پیٹرنز کی شناخت اور تحریک میں مدد دیتا ہے۔',
        statsList1: 'روزانہ اور ہفتہ وار سرگرمی کے ہیٹ میپس',
        statsList2: 'سورہ وار تکمیل کے پیمانے',
        statsList3: 'کامیابی کے بیجز اور سنگ میل',

        // Daily Recitation
        dailyBadge: 'ہر مسلمان کے لیے',
        dailyTitle: 'پڑھیں۔ غور کریں۔ سمجھیں۔',
        dailyDesc: 'چاہے آپ کا مقصد حفظ ہو یا صرف روزانہ کی بامقصد تلاوت، iHafidh ہر مسلمان کے لیے تلاوت کا بہترین تجربہ فراہم کرتا ہے۔',
        dailyFeature1Title: 'روزانہ آیت کے نوٹیفیکیشن',
        dailyFeature1Desc: 'اپنے دن کا آغاز ایک خوبصورت آیت اور اس کے ہمراہ نصیحت کے ساتھ کریں۔',
        dailyFeature2Title: 'کثیر لسانی ترجمہ',
        dailyFeature2Desc: 'انگریزی، اردو، تمل، فرانسیسی اور بہت سی زبانوں میں اعلیٰ معیار کے تراجم تک رسائی حاصل کریں۔',
        dailyFeature3Title: 'علمی تفاسیر',
        dailyFeature3Desc: 'تلاوت کے دوران براہ راست کثیر لسانی تفاسیر کے ساتھ اپنی سمجھ کو گہرا کریں۔',

        // AI Intelligent Quiz
        aiSectionBadge: 'نئی AI صلاحیت',
        aiSectionTitle: 'پڑھیں۔ جائزہ لیں۔ مکمل کریں۔',
        aiSectionDesc: 'ایک آیت پڑھ کر سنائیں — ہماری AI فوری لفظ بہ لفظ درستگی اسکور کارڈ کے ساتھ آپ کی تلاوت کا جائزہ لیتی ہے۔',
        aiHeroTagline: 'AI کے ساتھ تلاوت کریں — آیت پڑھیں اور فوری لفظ بہ لفظ درستگی اسکور پائیں۔',
        aiFeature1Title: '🎙️ لفظ بہ لفظ اسکور کارڈ',
        aiFeature1Desc: 'AI ہر عربی لفظ کو انفرادی طور پر جانچتی ہے — دیکھیں کون سے الفاظ آپ نے صحیح پڑھے اور کون سے توجہ چاہتے ہیں۔',
        aiFeature2Title: '✅ خودکار درست نشاندہی',
        aiFeature2Desc: '80% یا زیادہ اسکور ملی تو آیت خودکار درست نشان کر دی جاتی ہے — ہاتھ سے تفصیل کی ضرورت نہیں۔',
        aiFeature3Title: '🔄 فوری دوبارہ کوشش',
        aiFeature3Desc: 'دوسری آیات میں آپ کی ترقی کھوئے بغیر کسی بھی آیت کو دوبارہ ریکارڈ کریں۔',
        aiDisclaimer: '* AI غلطیاں کر سکتا ہے۔ تجوید کے قواعد اور قرآن کی تلاوت کی درستگی انسانی جائزے سے مختلف ہو سکتی ہے۔',

        // FAQ
        faqTitle: 'اکثر پوچھے گئے سوالات',
        faqSubtitle: 'iHafidh ایپ کے بارے میں وہ سب کچھ جو آپ جاننا چاہتے ہیں۔',
        faq1Q: 'کیا iHafidh استعمال کرنے کے لیے مفت ہے؟',
        faq1A: 'جی ہاں، iHafidh کی بنیادی خصوصیات بشمول پروگریس ٹریکنگ اور تلاوت قرآن، بغیر کسی پوشیدہ چارجز کے مکمل طور پر استعمال کے لیے مفت ہیں۔',
        faq2Q: 'کیا یہ آف لائن کام کرتا ہے؟',
        faq2A: 'زیادہ تر خصوصیات آف لائن بالکل ٹھیک کام کرتی ہیں۔ آپ کی پیشرفت مقامی طور پر محفوظ کی جاتی ہے۔ انٹرنیٹ کے بغیر کام کرنے کے لیے آڈیو تلاوتیں ڈاؤن لوڈ کی جا سکتی ہیں۔',
        faq3Q: 'کون سے قرآنی تراجم دستیاب ہیں؟',
        faq3A: 'ہم انگریزی، اردو، تمل، فرانسیسی، ہندی اور بہت سی زبانوں میں تراجم کی ایک وسیع رینج پیش کرتے ہیں۔',
        faq4Q: 'کیا میں سورہ اور جزو دونوں کی پیشرفت ٹریک کر سکتا ہوں؟',
        faq4A: 'بالکل۔ iHafidh آپ کو سورہ اور پارہ دونوں سطحوں پر بیک وقت اپنی پیشرفت ٹریک کرنے کی اجازت دیتا ہے۔',
        faq5Q: 'آئی حافظ (iHafidh) دیگر قرآن ایپس سے کیسے مختلف ہے؟',
        faq5A: 'زیادہ تر قرآن ایپس تلاوت پر توجہ مرکوز کرتی ہیں۔ آئی حافظ خاص طور پر حفظ کے لیے بنایا گیا ہے — جو تمام 114 سورتوں اور 30 پاروں میں پیشرفت سے باخبر رہنے، سپیسڈ ریپیٹیشن، تفصیلی تجزیات، اور عمیق گولڈن قرآن موڈ کو یکجا کرتا ہے۔ یہ ان لوگوں کے لیے ایک بہترین ذریعہ ہے جو اپنے سفرِ حفظ کے بارے میں سنجیدہ ہیں، نہ کہ صرف روزانہ کی تلاوت کے لیے۔',
        goldenLandscapeTitle: 'اڈاپٹیو لینڈ اسکیپ',
        goldenLandscapeDesc: 'بڑے ٹیبلٹس اور اسمارٹ فون کی تبدیلیوں کے لیے ڈیزائن کیا گیا ہے۔',
        trustUsedBy: '40 سے زائد ممالک کے مسلمان استعمال کر رہے ہیں',
        trustFree: 'ڈاؤن لوڈ کرنے کے لیے مفت',
        ctaTailoredHow: 'منٹوں میں شروع کریں - مفت ڈاؤن لوڈ کریں',
        ctaTailoredFeatures: 'آج ہی iHafidh مفت آزمائیں',
        ctaTailoredTestimonials: 'کمیونٹی میں شامل ہوں - ابھی ڈاؤن لوڈ کریں',
        ctaTailoredFooter: 'اپنے حفظ کا سفر شروع کریں - یہ مفت ہے',
        landscapeNudge: 'مکمل گولڈن تجربہ حاصل کرنے کے لیے اپنے آلے کو لینڈ اسکیپ میں گھمائیں',

        // Latest Updates
        updatesTitle: 'تازہ ترین اپ ڈیٹس (v2.1.1)',
        update1Title: 'ذہین AI کوئز',
        update1Desc: 'آیت پڑھ کر سنائیں اور ہر لفظ کی درستگی پر AI اسکور کارڈ حاصل کریں۔',
        update2Title: 'تجویدی فونٹس',
        update2Desc: 'اپنے تلفظ کو درست کرنے کے لیے سیٹنگز میں نئے رنگین تجویدی فونٹس۔',
        update3Title: 'قاری کا پریویو',
        update3Desc: 'سیٹنگز میں اپنے پسندیدہ قاری کا انتخاب کرتے وقت تلاوت کے نمونے سنیں۔',
        update4Title: 'کسٹم پیج موڈ',
        update4Desc: 'فی صفحہ 3 سے 20 آیات تک تلاوت کے تجربے کو اپنی مرضی کے مطابق بنائیں۔',
        update5Title: 'قرآنی دعاؤں کا مجموعہ',
        update5Desc: 'قرآن سے مستند دعاؤں تک رسائی حاصل کریں۔ روزانہ روحانی ترقی کے لیے مینو میں دستیاب ہے۔',

        // Testimonials
        testimonialsTitle: 'امت کی پسند',
        testimonialsSubtitle: 'دنیا بھر میں وقف حفظ کرنے والوں کی ہماری بڑھتی ہوئی کمیونٹی میں شامل ہوں۔',

        // CTA
        ctaTitle: 'اپنا حفظ کا سفر ابھی شروع کریں',
        ctaDesc: 'دنیا بھر کے ان ہزاروں مسلمانوں میں شامل ہوں جو قرآن پاک پر عبور حاصل کرنے کے لیے iHafidh کا استعمال کر رہے ہیں۔',

        // Footer
        footerCopyright: 'امت کے لیے دل سے بنایا گیا۔',
        privacyPolicy: 'Privacy Policy',
        support: 'Support',

        // Download Drawer
        downloadTitle: 'iHafidh ڈاؤن لوڈ کریں',
        downloadSubtitle: 'اپنا سفر شروع کرنے کے لیے اسٹور منتخب کریں۔',
        noSignInRequired: 'لاگ ان کی ضرورت نہیں',
        noDataCollection: 'ڈیٹا اکٹھا نہیں کیا جاتا',
        privacyNote: 'آپ کی پیشرفت آپ کے آلے پر محفوظ رہتی ہے۔',
        orText: 'یا',
        noAds: 'کوئی اشتہار نہیں',
        featuresCount: '24 خصوصیات',
        goldenQuranTitle: "گولڈن قرآن موڈ",
        goldenQuranDesc: "بہترین تجربے کے لیے اپنے فون کو لینڈ اسکیپ میں گھمائیں۔",
        wbwTitle: "لفظ بہ لفظ",
        wbwDesc: "ہر لفظ کے لیے انٹرایکٹو ترجمہ۔",

        // 24 Features
        categoryRecitation: 'Recitation Experience',
        categoryHifdh: 'Advanced Memorization',
        categoryUI: 'Premium Experience',
        categoryGrowth: 'Growth & Analytics',
        f1Title: 'Golden Read Mode', f1Desc: 'High-contrast gold text on midnight background for immersive night reading.',
        f2Title: 'Parchment Mode', f2Desc: 'Eye-friendly ivory canvas with espresso ink for a traditional feel.',
        f3Title: 'Landscape Support', f3Desc: 'Full rotation for a cinematic, distraction-free reading experience.',
        f4Title: 'Word-by-Word', f4Desc: 'Interactive dots beneath every Arabic word for instant meaning.',
        f5Title: 'Full Translation', f5Desc: 'High-quality translations for deeper contextual understanding.',
        f6Title: 'Juz Selection', f6Desc: 'Navigate the Quran by traditional divisions (Juz 1-30).',
        f7Title: 'Surah Navigation', f7Desc: 'Organized list for rapid jumping between chapters.',
        f8Title: 'Verse Selection', f8Desc: 'Granular navigation down to the specific Ayah.',
        f9Title: 'Visual Word Markers', f9Desc: 'Interactive dots to help anchor your memory during recitation.',
        f10Title: 'Active Recall', f10Desc: 'UI layouts designed to test your memory without looking at translation.',
        f11Title: 'Quranic Duas', f11Desc: 'Dedicated section for essential supplications found in the Quran.',
        f12Title: 'Favourites', f12Desc: 'One-tap "hearting" of verses to build a personal collection.',
        f13Title: 'Progress Tracking', f13Desc: 'Visual indicators of which Surahs or Juz you are memorizing.',
        f14Title: 'Custom Ranges', f14Desc: 'Ability to focus on specific sections for repetitive loops.',
        f15Title: 'Memorization Engine', f15Desc: 'Specialized logic for tracking memorization accuracy over time.',
        f16Title: 'Reading Mode Toggle', f16Desc: 'Seamless switching between Study and Pure Recitation views.',
        f17Title: 'Distraction-Free', f17Desc: 'Minimalist design that hides notifications during reading.',
        f18Title: 'Premium Typography', f18Desc: 'Custom-tuned Arabic fonts for clarity across all sizes.',
        f19Title: 'Modern Card Layout', f19Desc: 'Clean, mobile-first UI for browsing Surahs and verses.',
        f20Title: 'Offline Access', f20Desc: 'Read and use core tools without an active internet connection.',
        f21Title: 'Cross-Platform Sync', f21Desc: 'Uniform experience across both iOS and Android devices.',
        f22Title: 'Minimalist UI/UX', f22Desc: '"Vibe-coded" design philosophy focused on elegance and calm.',
        f23Title: 'Integrated Analytics', f23Desc: 'Insights into which features help you progress the most.',
        f24Title: 'Multi-Language', f24Desc: 'Localized metadata and translations for global markets.',
    },
};
