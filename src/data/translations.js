export const translations = {
    en: {
        hero: {
            title_prefix: "How the",
            title_highlight: "Web Works",
            subtitle: "A visual story for builders.",
            scroll_down: "↓"
        },
        section1: {
            title: "It starts with a folder.",
            p1_start: "Imagine you have a folder on your computer labeled",
            p1_strong: "\"My Website\"",
            p1_end: "Inside, you have all your code files.",
            p2: "You open it in your browser, and it works beautifully. You can see it, click around, and enjoy what you built.",
            p3_start: "But right now, this only exists on",
            p3_strong: "your physical machine",
            p3_end: ".",
            try_it: "Try It",
            try_desc: "Drag the floating files into the laptop screen!"
        },
        section2: {
            title: "The Hosting Problem.",
            p1_start: "What happens when you",
            p1_strong: "turn off",
            p1_end: "your laptop?",
            p2: "Your website disappears. It goes offline.",
            p3_start: "Also, you can't just give people your computer's IP address. Firewalls block it, and your internet is too slow.",
            p4_start: "You need a computer that",
            p4_strong: "never sleeps",
            p4_end: ".",
            interactive_label: "Interactive:",
            interactive_desc: "Pull the plug to see what happens!"
        },
        section3: {
            title: "So, you rent a computer.",
            p1_start: "So, you go shopping. Not for clothes, but for a",
            p1_strong: "powerful remote computer",
            p1_end: ".",
            p2: "You visit a hosting provider (like Hostinger) and essentially say:",
            quote: "\"Here is money. Please let me rent a slice of your super-computer for 2 years.\"",
            p3_start: "This is what",
            p3_strong: "Hosting",
            p3_end: "is. It's renting a computer that never shuts down, lives in a secure building, and has blazing fast internet."
        },
        section4: {
            title: "The Server Farm.",
            p1_start: "Your new remote computer lives in a",
            p1_strong: "Data Center",
            p1_end: ".",
            p2: "It's a huge building filled with thousands of powerful computers called Servers. They are stacked in racks, kept cool, and monitored 24/7.",
            p3: "This is where your website actually \"lives\"."
        },
        section5: {
            title: "The Cockpit (Terminal)",
            p1_start: "How do you talk to this remote computer? You don't use a mouse. You use the",
            p1_strong: "Terminal",
            p1_end: ".",
            p2: "Think of it like a chat window where you text commands to your server.",
            try_label: "Try It:",
            try_action: "Click the terminal and type",
            try_cmd: "ssh root",
            try_end: "to connect.",
            p3_start: "To get in, you need the",
            p3_strong: "Credentials",
            p3_end: "(Username & Password) that the hosting company gave you."
        },
        section6: {
            title: "Moving Code (Git)",
            p1: "Now you're logged in. But the server is empty. Your code is still on your laptop.",
            p2_start: "The best way to move it?",
            p2_strong: "GitHub",
            p2_end: ".",
            list1_strong: "Step 1:",
            list1_text: "Push code to GitHub (The Warehouse).",
            list2_strong: "Step 2:",
            list2_text: "Tell your server to \"Clone\" (download) it."
        },
        section7: {
            title: "The Address (IP)",
            p1_start: "Your server has a unique address, like a phone number. It's called an",
            p1_strong: "IP Address",
            p1_end: "(e.g., 172.217.16.46).",
            p2: "If you type this number into a browser, your website appears!",
            p3_start: "But humans are bad at remembering numbers. We prefer names like",
            p3_strong: "google.com",
            p3_end: "."
        },
        section8: {
            title: " The Name (DNS)",
            p1_start: "So you buy a",
            p1_strong: "Domain Name",
            p1_end: "(like mywebsite.com).",
            p2_start: "You need to connect this name to your server's IP address. This phonebook system is called",
            p2_strong: "DNS",
            p2_end: "(Domain Name System).",
            connect_label: "Connect:",
            connect_desc: "Plug the cable to link the Name to the IP!"
        },
        section9: {
            title: "The Lock (SSL)",
            p1_start: "Finally, you want your users to be safe. You install an",
            p1_strong: "SSL Certificate",
            p1_end: ".",
            p2: "It encrypts the data between the user and your website.",
            p3_start: "It turns the address bar",
            p3_strong: "green (or adds a lock icon)",
            p3_end: "so people trust you.",
            toggle_label: "Secure:",
            toggle_desc: "Click the lock to secure the connection!"
        },
        recap: {
            title: "You are live!",
            step1: "You wrote code locally.",
            step2: "You Rented a Server (Hosting).",
            step3: "You Pushed code to GitHub.",
            step4: "You Pulled code to the Server.",
            step5: "You Pointed a Domain (DNS) to the IP.",
            step6: "You Locked it with SSL.",
            congrats: "Now the whole world can see your creation.",
            scroll_top: "Scroll to Top",
            timeline: ["Local Code", "Buying Hosting", "Server Setup", "Domain Link", "SSL Secure"]
        }
    },
    hi: {
        hero: {
            title_prefix: "वेब कैसे",
            title_highlight: "काम करता है",
            subtitle: "बिल्डर्स के लिए एक दृश्य कहानी।",
            scroll_down: "↓"
        },
        section1: {
            title: "शुरुआत एक फ़ोल्डर से होती है।",
            p1_start: "कल्पना करें कि आपके कंप्यूटर पर एक फ़ोल्डर है जिसका नाम है",
            p1_strong: "\"My Website\"",
            p1_end: "इसके अंदर, आपकी सारी कोड फाइलें हैं।",
            p2: "आप इसे अपने ब्राउज़र में खोलते हैं, और यह खूबसूरती से काम करता है। आप इसे देख सकते हैं और जो आपने बनाया है उसका आनंद ले सकते हैं।",
            p3_start: "लेकिन अभी, यह केवल",
            p3_strong: "आपकी भौतिक मशीन (Physical Machine)",
            p3_end: "पर मौजूद है।",
            try_it: "कोशिश करें",
            try_desc: "फ़ाइलों को लैपटॉप स्क्रीन पर खींचें!"
        },
        section2: {
            title: "होस्टिंग की समस्या।",
            p1_start: "क्या होता है जब आप अपना लैपटॉप",
            p1_strong: "बंद (Turn Off)",
            p1_end: "कर देते हैं?",
            p2: "आपकी वेबसाइट गायब हो जाती है। यह ऑफलाइन हो जाती है।",
            p3_start: "इसके अलावा, आप लोगों को अपने कंप्यूटर का आईपी पता नहीं दे सकते। फायरवॉल इसे रोकते हैं, और आपका इंटरनेट बहुत धीमा है।",
            p4_start: "आपको एक ऐसे कंप्यूटर की आवश्यकता है जो",
            p4_strong: "कभी नहीं सोता",
            p4_end: "।",
            interactive_label: "इंटरैक्टिव:",
            interactive_desc: "पावर स्विच दबा कर देखें!"
        },
        section3: {
            title: "तो, आप एक कंप्यूटर किराए पर लेते हैं।",
            p1_start: "तो, आप खरीदारी करने जाते हैं। कपड़े नहीं, बल्कि एक",
            p1_strong: "शक्तिशाली रिमोट कंप्यूटर",
            p1_end: "।",
            p2: "आप एक होस्टिंग प्रदाता (जैसे Hostinger) के पास जाते हैं और मूल रूप से कहते हैं:",
            quote: "\"यहाँ पैसे हैं। कृपया मुझे अपने सुपर-कंप्यूटर का एक टुकड़ा 2 साल के लिए किराए पर लेने दें।\"",
            p3_start: "यही",
            p3_strong: "होस्टिंग (Hosting)",
            p3_end: "है। यह एक ऐसा कंप्यूटर किराए पर लेना है जो कभी बंद नहीं होता, एक सुरक्षित इमारत में रहता है, और जिसमें बहुत तेज़ इंटरनेट होता है।"
        },
        section4: {
            title: "सर्वर फ़ार्म (Server Farm)।",
            p1_start: "आपका नया रिमोट कंप्यूटर एक",
            p1_strong: "डेटा सेंटर",
            p1_end: "में रहता है।",
            p2: "यह सर्वर नामक हजारों शक्तिशाली कंप्यूटरों से भरी एक विशाल इमारत है। वे रैक में रखे जाते हैं, ठंडे रखे जाते हैं, और 24/7 निगरानी की जाती है।",
            p3: "यहीं पर आपकी वेबसाइट वास्तव में \"रहती\" है।"
        },
        section5: {
            title: "कॉकपिट (टर्मिनल)",
            p1_start: "आप इस रिमोट कंप्यूटर से कैसे बात करते हैं? आप माउस का उपयोग नहीं करते हैं। आप",
            p1_strong: "टर्मिनल (Terminal)",
            p1_end: "का उपयोग करते हैं।",
            p2: "इसे एक चैट विंडो की तरह सोचें जहाँ आप अपने सर्वर को कमांड टेक्स्ट करते हैं।",
            try_label: "कोशिश करें:",
            try_action: "टर्मिनल पर क्लिक करें और कनेक्ट करने के लिए",
            try_cmd: "ssh root",
            try_end: "टाइप करें।",
            p3_start: "अंदर जाने के लिए, आपको",
            p3_strong: "क्रेडेंशियल्स",
            p3_end: "(यूज़रनेम और पासवर्ड) की आवश्यकता होती है जो होस्टिंग कंपनी ने आपको दिए थे।"
        },
        section6: {
            title: "कोड मूव करना (Git)",
            p1: "अब आप लॉग इन हैं। लेकिन सर्वर खाली है। आपका कोड अभी भी आपके लैपटॉप पर है।",
            p2_start: "इसे स्थानांतरित करने का सबसे अच्छा तरीका?",
            p2_strong: "GitHub",
            p2_end: "।",
            list1_strong: "चरण 1:",
            list1_text: "कोड को GitHub (गोदाम) पर पुश करें।",
            list2_strong: "चरण 2:",
            list2_text: "अपने सर्वर को इसे \"क्लोन\" (डाउनलोड) करने के लिए कहें।"
        },
        section7: {
            title: "पता (IP Address)",
            p1_start: "आपके सर्वर का एक अनूठा पता होता है, जैसे फोन नंबर। इसे",
            p1_strong: "IP पता",
            p1_end: "(जैसे, 172.217.16.46) कहा जाता है।",
            p2: "यदि आप ब्राउज़र में इस नंबर को टाइप करते हैं, तो आपकी वेबसाइट दिखाई देती है!",
            p3_start: "लेकिन इंसानों को नंबर याद रखना मुश्किल लगता है। हम नाम पसंद करते हैं जैसे",
            p3_strong: "google.com",
            p3_end: "।"
        },
        section8: {
            title: "नाम (DNS)",
            p1_start: "तो आप एक",
            p1_strong: "डोमेन नाम",
            p1_end: "(जैसे mywebsite.com) खरीदते हैं।",
            p2_start: "आपको इस नाम को अपने सर्वर के IP पते से जोड़ना होगा। इस फोनबुक सिस्टम को",
            p2_strong: "DNS",
            p2_end: "(डोमेन नेम सिस्टम) कहा जाता है।",
            connect_label: "कनेक्ट करें:",
            connect_desc: "नाम को IP से जोड़ने के लिए केबल प्लग करें!"
        },
        section9: {
            title: "ताला (SSL)",
            p1_start: "अंत में, आप चाहते हैं कि आपके उपयोगकर्ता सुरक्षित रहें। आप एक",
            p1_strong: "SSL प्रमाणपत्र",
            p1_end: "इंस्टॉल करते हैं।",
            p2: "यह उपयोगकर्ता और आपकी वेबसाइट के बीच डेटा को एन्क्रिप्ट करता है।",
            p3_start: "यह एड्रेस बार को",
            p3_strong: "हरा (या एक ताला आइकन जोड़ता है)",
            p3_end: "बना देता है ताकि लोग आप पर भरोसा करें।",
            toggle_label: "सुरक्षित:",
            toggle_desc: "कनेक्शन सुरक्षित करने के लिए ताला क्लिक करें!"
        },
        recap: {
            title: "आप लाइव हैं!",
            step1: "आपने स्थानीय रूप से कोड लिखा।",
            step2: "आपने एक सर्वर किराए पर लिया (होस्टिंग)।",
            step3: "आपने कोड को GitHub पर पुश किया।",
            step4: "आपने सर्वर पर कोड पुल (Pull) किया।",
            step5: "आपने एक डोमेन (DNS) को IP से जोड़ा।",
            step6: "आपने इसे SSL से लॉक किया।",
            congrats: "अब पूरी दुनिया आपकी रचना देख सकती है।",
            scroll_top: "ऊपर स्क्रॉल करें",
            timeline: ["लोकल कोड", "होस्टिंग", "सर्वर सेटअप", "डोमेन लिंक", "SSL सुरक्षा"]
        }
    },
    hn: {
        hero: {
            title_prefix: "Web Kaise",
            title_highlight: "Kaam Karta Hai",
            subtitle: "Builders ke liye ek visual story.",
            scroll_down: "↓"
        },
        section1: {
            title: "Shuruaat ek folder se hoti hai.",
            p1_start: "Imagine kariye ki aapke computer par ek folder hai labeled",
            p1_strong: "\"My Website\"",
            p1_end: "Iske andar, aapki saari code files hain.",
            p2: "Aap ise apne browser mein kholte hain, aur ye beautifully kaam karta hai. Aap ise dekh sakte hain, click kar sakte hain.",
            p3_start: "Lekin abhi, ye sirf",
            p3_strong: "aapki physical machine",
            p3_end: "par exist karta hai.",
            try_it: "Try It",
            try_desc: "Files ko laptop screen par drag karein!"
        },
        section2: {
            title: "Hosting ki Problem.",
            p1_start: "Kya hota hai jab aap apna laptop",
            p1_strong: "turn off",
            p1_end: "kar dete hain?",
            p2: "Aapki website gayab ho jati hai. Offline ho jati hai.",
            p3_start: "Aur aap bas logon ko apna IP address nahi de sakte. Firewalls block kar denge, aur internet slow hoga.",
            p4_start: "Aapko ek aisa computer chahiye jo",
            p4_strong: "kabhi nahi sota",
            p4_end: ".",
            interactive_label: "Interactive:",
            interactive_desc: "Plug kheench kar dekhein!"
        },
        section3: {
            title: "Toh, aap ek computer rent karte hain.",
            p1_start: "Toh, aap shopping karne jaate hain. Kapdon ke liye nahi, balki ek",
            p1_strong: "powerful remote computer",
            p1_end: "ke liye.",
            p2: "Aap ek hosting provider (jaise Hostinger) ke paas jaate hain aur essentially kehte hain:",
            quote: "\"Ye lijiye paise. Please mujhe apne super-computer ka ek hissa 2 saal ke liye rent par de dijiye.\"",
            p3_start: "Yehi",
            p3_strong: "Hosting",
            p3_end: "hai. Ye ek aisa computer rent karna hai jo kabhi band nahi hota, ek secure building mein rehta hai, aur jismein super fast internet hota hai."
        },
        section4: {
            title: "Software Farm.",
            p1_start: "Aapka naya remote computer ek",
            p1_strong: "Data Center",
            p1_end: "mein rehta hai.",
            p2: "Ye ek huge building hai jo Servers naam ke thousands of powerful computers se bhari hai. Ye racks mein stacked hote hain, cool rakhe jaate hain.",
            p3: "Yahan aapki website actually \"lives\" karti hai."
        },
        section5: {
            title: "The Cockpit (Terminal)",
            p1_start: "Aap is remote computer se kaise baat karte hain? Aap mouse use nahi karte. Aap",
            p1_strong: "Terminal",
            p1_end: "use karte hain.",
            p2: "Ise ek chat window ki tarah samjhein jahan aap apne server ko commands text karte hain.",
            try_label: "Try It:",
            try_action: "Terminal par click karein aur connect karne ke liye",
            try_cmd: "ssh root",
            try_end: "type karein.",
            p3_start: "Andar jaane ke liye, aapko",
            p3_strong: "Credentials",
            p3_end: "(Username & Password) chahiye jo hosting company ne aapko diye the."
        },
        section6: {
            title: "Code Move Karna (Git)",
            p1: "Ab aap logged in hain. Lekin server empty hai. Aapka code abhi bhi aapke laptop par hai.",
            p2_start: "Ise move karne ka best tareeka?",
            p2_strong: "GitHub",
            p2_end: ".",
            list1_strong: "Step 1:",
            list1_text: "Code ko GitHub (The Warehouse) par push karein.",
            list2_strong: "Step 2:",
            list2_text: "Apne server ko ise \"Clone\" (download) karne ko kahein."
        },
        section7: {
            title: "Address (IP)",
            p1_start: "Aapke server ka ek unique address hota hai, phone number ki tarah. Ise",
            p1_strong: "IP Address",
            p1_end: "(e.g., 172.217.16.46) kehte hain.",
            p2: "Agar aap ye number browser mein type karein, toh aapki website dikh jati hai!",
            p3_start: "Lekin humans numbers yaad rakhne mein bad hote hain. Humein naam pasand hain jaise",
            p3_strong: "google.com",
            p3_end: "."
        },
        section8: {
            title: "Naam (DNS)",
            p1_start: "Toh aap ek",
            p1_strong: "Domain Name",
            p1_end: "(jaise mywebsite.com) khareedte hain.",
            p2_start: "Aapko is naam ko apne server ke IP address se connect karna hoga. Is phonebook system ko",
            p2_strong: "DNS",
            p2_end: "(Domain Name System) kehte hain.",
            connect_label: "Connect:",
            connect_desc: "Name ko IP se link karne ke liye cable plug karein!"
        },
        section9: {
            title: "Lock (SSL)",
            p1_start: "Finally, aap chahte hain ki aapke users safe rahein. Aap ek",
            p1_strong: "SSL Certificate",
            p1_end: "install karte hain.",
            p2: "Ye user aur aapki website ke beech ke data ko encrypt karta hai.",
            p3_start: "Ye address bar ko",
            p3_strong: "green (ya lock icon add karta hai)",
            p3_end: "bana deta hai taaki log aap par trust karein.",
            toggle_label: "Secure:",
            toggle_desc: "Connection secure karne ke liye lock par click karein!"
        },
        recap: {
            title: "Aap Live Hain!",
            step1: "Aapne locally code likha.",
            step2: "Aapne Server rent kiya (Hosting).",
            step3: "Aapne code GitHub par Push kiya.",
            step4: "Aapne Server par code Pull kiya.",
            step5: "Aapne Domain (DNS) ko IP se point kiya.",
            step6: "Aapne ise SSL se lock kiya.",
            congrats: "Ab poori duniya aapki creation dekh sakti hai.",
            scroll_top: "Upar Scroll Karein",
            timeline: ["Local Code", "Buying Hosting", "Server Setup", "Domain Link", "SSL Secure"]
        }
    }
};
