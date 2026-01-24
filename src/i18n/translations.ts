export type Language = 'en' | 'ta' | 'ms';

export const LANGUAGES: { code: Language; label: string; nativeLabel: string; shortLabel: string }[] = [
    { code: 'en', label: 'English', nativeLabel: 'English', shortLabel: 'Eng' },
    { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்', shortLabel: 'தமி' },
    { code: 'ms', label: 'Malay', nativeLabel: 'Melayu', shortLabel: 'Mal' },
];

type TranslationKeys = {
    // Navbar
    downloadNow: string;

    // Hero
    ramadanText: string;
    versionBadge: string;
    heroHeadline: string;
    heroHeadlineHighlight: string;
    heroSubheadline: string;
    appStoreRating: string;
    joinCommunity: string;
    ctaFree: string;

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

    // Testimonials
    testimonialsTitle: string;
    testimonialsSubtitle: string;

    // CTA
    ctaTitle: string;
    ctaDesc: string;

    // Footer
    footerCopyright: string;
};

export const translations: Record<Language, TranslationKeys> = {
    en: {
        // Navbar
        downloadNow: 'Download Now',

        // Hero
        ramadanText: 'This Ramadan Make every day & night count , Memorize , Recite, Reflect.',
        versionBadge: 'New Version 2.0.6 Out Now',
        heroHeadline: 'Ready to make this Ramadan',
        heroHeadlineHighlight: 'your strongest Hifdh yet?',
        heroSubheadline: 'From 0 to 1 Juz in 30 days. Track your progress, build consistency, and achieve your Hifdh goals.',
        appStoreRating: '4.8 on App Store',
        joinCommunity: 'Join thousands of Muslims worldwide',
        ctaFree: "It's Free, Start Now",

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
        feature1Title: 'Custom Page Mode',
        feature1Desc: 'Customize reading from 3 to 20 Ayahs. Create and track your own pages with page-level audio repetition for easier memorization.',
        feature2Title: 'Comprehensive Tracking',
        feature2Desc: 'Monitor your journey across all 114 Surahs and 30 Juz with visual progress indicators.',
        feature3Title: 'Advanced Analytics',
        feature3Desc: 'Detailed memorization statistics and performance metrics to visualize your daily efforts.',
        feature4Title: 'Spaced Repetition',
        feature4Desc: 'Smart review system designed for optimal retention and long-term memorization.',
        feature5Title: 'Audio Recitations',
        feature5Desc: 'High-quality verse-by-verse practice with customizable audio controls.',
        feature6Title: 'Study Plans',
        feature6Desc: 'Create customizable study plans and receive smart reminders to keep you on track.',

        // Stats
        statsTitle: 'Visualize Your Success',
        statsDesc: "They say what gets measured gets managed. iHafidh provides deep insights into your progress, helping you identify patterns and stay motivated.",
        statsList1: 'Daily & Weekly activity heatmaps',
        statsList2: 'Surah-wise completion metrics',
        statsList3: 'Achievement badges and milestones',

        // Daily Recitation
        dailyBadge: 'For Daily Readers',
        dailyTitle: 'Beyond Memorization',
        dailyDesc: "Whether you're aiming for Hifdh or just want a meaningful daily recitation, iHafidh provides a premium reading experience for every Muslim.",
        dailyFeature1Title: 'Daily Ayah Notifications',
        dailyFeature1Desc: 'Start your morning with a beautiful verse and reflection delivered to your device.',
        dailyFeature2Title: 'Multi-Language Tarjuma',
        dailyFeature2Desc: 'Access high-quality translations in English, Urdu, Tamil, French, and many more.',
        dailyFeature3Title: 'Scholarly Tafsirs',
        dailyFeature3Desc: 'Deepen your understanding with multi-language tafsirs directly in the reader.',

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

        // Latest Updates
        updatesTitle: 'Latest Updates (v2.0.6)',
        update1Title: 'Mushaf Audio Repeat',
        update1Desc: 'Repeat audio by Verse or Page level for effective Hifdh repetition.',
        update2Title: 'Tajweed Fonts',
        update2Desc: 'New color-coded Tajweed fonts in settings to perfect your pronunciation.',
        update3Title: 'Preview Reciter',
        update3Desc: 'Listen to audio samples when selecting your preferred Qari in settings.',
        update4Title: 'Custom Page Mode',
        update4Desc: 'Customize your reading experience from 3 up to 20 verses per page.',

        // Testimonials
        testimonialsTitle: 'Loved by the Ummah',
        testimonialsSubtitle: 'Join our growing community of dedicated Huffadh around the world.',

        // CTA
        ctaTitle: 'Start Your Hifdh Journey Now',
        ctaDesc: 'Join thousands of Muslims worldwide who are using iHafidh to master the Noble Quran.',

        // Footer
        footerCopyright: 'Built with heart for the Ummah.',
    },

    ta: {
        // Navbar
        downloadNow: 'பதிவிறக்கம்',

        // Hero
        ramadanText: 'இந்த புனித ரமலானில் ஒவ்வொரு பகலையும் இரவையும் மதிப்புமிக்கதாக மாற்றுங்கள் - குர்ஆனை மனனம் செய்யுங்கள், ஓதுங்கள், சிந்தியுங்கள்.',
        versionBadge: 'புதிய பதிப்பு வெளியிடப்பட்டுள்ளது',
        heroHeadline: 'இந்த ரமலானை உங்கள் சிறந்த',
        heroHeadlineHighlight: 'ஹிஃப்ழ் ஆண்டாக்கத் தயாரா?',
        heroSubheadline: '30 நாட்களில் 0 முதல் 1 ஜுஸ் வரை. உங்கள் முன்னேற்றத்தைக் கண்காணியுங்கள்,  உங்கள் ஹிஃப்ழ் இலக்குகளை அடையுங்கள்.',
        appStoreRating: 'App Store-இல் 4.8 மதிப்பீடு',
        joinCommunity: 'உலகெங்கிலும் உள்ள ஆயிரக்கணக்கான முஸ்லிம்களுடன் இணையுங்கள்',
        ctaFree: 'இப்போதே தொடங்குங்கள்',

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
        dailyBadge: 'தினசரி குர்ஆன் ஓதுபவர்களுக்கு',
        dailyTitle: 'மனப்பாடத்திற்கு அப்பால்',
        dailyDesc: 'நீங்கள் ஹிஃப்ழ் செய்ய விரும்புகிறீர்களா?அல்லது அர்த்தமுள்ள தினசரி ஓதுதலை விரும்புகிறீர்களா? iHafidh ஒவ்வொரு முஸ்லிமுக்கும் உயர்தர வாசிப்பு அனுபவத்தை வழங்குகிறது.',
        dailyFeature1Title: 'தினசரி ஆயத் அறிவிப்புகள்',
        dailyFeature1Desc: 'உங்கள் காலையை ஒரு அழகான ஆயத்துடனும் சிந்தனையுடனும் தொடங்குங்கள், Daily Notifications.',
        dailyFeature2Title: 'பல மொழி தர்ஜுமா',
        dailyFeature2Desc: 'ஆங்கிலம், உருது, தமிழ், பிரெஞ்சு மற்றும் பல மொழிகளில் தரமான மொழிபெயர்ப்புகளை அணுகுங்கள்.',
        dailyFeature3Title: 'அறிஞர்களின் தஃப்சீர்கள்',
        dailyFeature3Desc: 'வாசகத்தில் நேரடியாக பல மொழி தஃப்சீர்களுடன் உங்கள் புனித குர்ஆனின் புரிதலை ஆழப்படுத்துங்கள்.',

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

        // Latest Updates
        updatesTitle: 'சமீபத்திய புதுப்பிப்புகள் (v2.0.6)',
        update1Title: 'முஸ்ஹஃப் ஆடியோ இயக்கம்',
        update1Desc: 'திறமையான ஹிஃப்ழ் Revision ஆயத்து அல்லது பக்க அளவில் ஆடியோவை  இயக்குங்கள்.',
        update2Title: 'தஜ்வீத் எழுத்துருக்கள்',
        update2Desc: 'உங்கள் உச்சரிப்பை சரியாக்க அமைப்புகளில் புதிய வண்ணக் குறியீட்டு தஜ்வீத் எழுத்துருக்கள்.',
        update3Title: 'காரி முன்னோட்டம்',
        update3Desc: 'அமைப்புகளில் உங்களுக்கு விருப்பமான காரியைத் தேர்ந்தெடுக்கும்போது ஆடியோ மாதிரிகளைக் கேளுங்கள்.',
        update4Title: 'தனிப்பயன் பக்க முறை (Page Mode)',
        update4Desc: 'உங்கள் வசதிக்கேற்ப ஒரு பக்கத்திற்கு 3 முதல் 20 ஆயத்துக்கள் வரை உங்கள் வாசிப்பு .',

        // Testimonials
        testimonialsTitle: 'நற்சான்றிதழ்கள்',
        testimonialsSubtitle: 'உலகெங்கிலும் உள்ள வளர்ந்து வரும் ஹுஃப்பாழ்களின் சமூகத்தில் இணையுங்கள்.',

        // CTA
        ctaTitle: 'இப்போதே உங்கள் ஹிஃப்ழ் பயணத்தைத் தொடங்குங்கள்',
        ctaDesc: 'புனித குர்ஆனை ஓத iHafidh-ஐப் பயன்படுத்தும் உலகெங்கிலும் உள்ள ஆயிரக்கணக்கான முஸ்லிம்களுடன் இணையுங்கள்.',

        // Footer
        footerCopyright: 'உம்மத்திற்காக அன்புடன் உருவாக்கப்பட்டது.',
    },

    ms: {
        // Navbar
        downloadNow: 'Muat Turun',

        // Hero
        ramadanText: 'Ramadan ini, manfaatkan setiap siang dan malam. Hafal, Baca, Renungi.',
        versionBadge: 'Versi Baharu 2.0.6 Kini Tersedia',
        heroHeadline: 'Sedia jadikan Ramadan ini',
        heroHeadlineHighlight: 'hafazan terkuat anda?',
        heroSubheadline: 'Dari 0 ke 1 Juzuk dalam 30 hari. Jejaki kemajuan anda, bina konsistensi, dan capai matlamat hafazan anda.',
        appStoreRating: '4.8 di App Store',
        joinCommunity: 'Sertai ribuan Muslim di seluruh dunia',
        ctaFree: 'Percuma, Mula Sekarang',

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
        dailyBadge: 'Untuk Pembaca Harian',
        dailyTitle: 'Lebih Dari Sekadar Hafazan',
        dailyDesc: 'Sama ada anda menyasarkan hafazan atau hanya mahukan bacaan harian yang bermakna, iHafidh menyediakan pengalaman bacaan premium untuk setiap Muslim.',
        dailyFeature1Title: 'Pemberitahuan Ayat Harian',
        dailyFeature1Desc: 'Mulakan pagi anda dengan ayat yang indah dan renungan yang dihantar ke peranti anda.',
        dailyFeature2Title: 'Terjemahan Pelbagai Bahasa',
        dailyFeature2Desc: 'Akses terjemahan berkualiti tinggi dalam Bahasa Inggeris, Urdu, Tamil, Perancis, dan banyak lagi.',
        dailyFeature3Title: 'Tafsir Ilmiah',
        dailyFeature3Desc: 'Dalami pemahaman anda dengan tafsir pelbagai bahasa terus dalam pembaca.',

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

        // Latest Updates
        updatesTitle: 'Kemas Kini Terkini (v2.0.6)',
        update1Title: 'Ulangan Audio Mushaf',
        update1Desc: 'Ulang audio mengikut ayat atau halaman untuk ulangan hafazan yang berkesan.',
        update2Title: 'Fon Tajwid',
        update2Desc: 'Fon Tajwid berkod warna baharu dalam tetapan untuk menyempurnakan sebutan anda.',
        update3Title: 'Pratonton Qari',
        update3Desc: 'Dengar sampel audio semasa memilih Qari pilihan anda dalam tetapan.',
        update4Title: 'Mod Halaman Tersuai',
        update4Desc: 'Sesuaikan pengalaman bacaan anda dari 3 hingga 20 ayat setiap halaman.',

        // Testimonials
        testimonialsTitle: 'Dicintai Umat',
        testimonialsSubtitle: 'Sertai komuniti Huffaz yang berdedikasi yang semakin berkembang di seluruh dunia.',

        // CTA
        ctaTitle: 'Mulakan Perjalanan Hafazan Anda Sekarang',
        ctaDesc: 'Sertai ribuan Muslim di seluruh dunia yang menggunakan iHafidh untuk menguasai Al-Quran.',

        // Footer
        footerCopyright: 'Dibina dengan kasih sayang untuk Umat.',
    },
};
