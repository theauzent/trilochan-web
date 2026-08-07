const headerCode = `
    <div class="bg-amber-500 text-white text-center text-sm py-1.5 font-medium flex flex-wrap justify-center items-center gap-x-2">
        Website under development. For urgent queries, please email us at <a href="mailto:companytrilochan@gmail.com" class="underline hover:opacity-90 font-bold transition-opacity">companytrilochan@gmail.com</a>.
        <span class="hidden sm:inline">|</span> For technical support, please use our <a href="#" onclick="toggleReportModal(true)" class="underline hover:opacity-90 font-bold transition-opacity">Report Problem</a> feature.
    </div>
    <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <img src="./images/logo.png" alt="Trilochan Logo" class="h-12 w-12 object-contain">
                <div>
                    <h1 class="text-2xl font-black text-teal-950 tracking-tight">TRILOCHAN</h1>
                    <p class="text-[10px] text-teal-700 font-bold uppercase tracking-widest">Manpower Supply</p>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <nav class="hidden md:flex items-center gap-8 font-semibold text-slate-600">
                    <a href="index.html" class="hover:text-teal-600 transition-colors">Home</a>
                    <a href="index.html#services-section" class="hover:text-teal-600 transition-colors">Work Models</a>
                    <a href="dashboard.html" class="hover:text-teal-600 transition-colors">My Account</a>
                    <div id="google_element" class="min-w-[100px]"></div>
                </nav> 
                <a href="auth.html" class="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all"> 
                    Join Us
                </a>
            </div>
        </div>
    </header>
`;

const footerCode = `
    <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="flex flex-col items-center md:items-start gap-2">
                <div class="flex items-center gap-3">
                    <h2 class="text-xl font-black text-slate-200 tracking-tight">TRILOCHAN</h2>
                </div>
                <p class="text-sm font-medium text-slate-500 text-center md:text-left">© 2026 Trilochan Manpower Supply. All rights reserved. <br>
                    Engineered & Architected by <a href="https://theauzent.netlify.app" target="_blank" rel="noopener noreferrer" class="text-blue-400 font-bold underline">Auzent</a>.
                </p>
                
                <div class="text-xs space-x-4 mt-4 text-center md:text-left">
                    <a href="about.html" class="hover:text-teal-400 transition-colors">About Us</a>
                    <a href="privacy-policy.html" class="hover:text-teal-400 transition-colors">Privacy Policy</a>
                    <a href="terms-conditions.html" class="hover:text-teal-400 transition-colors">Terms & Conditions</a>
                    <a href="refund-policy.html" class="hover:text-teal-400 transition-colors">Refund Policy</a>
                    <a href="contact.html" class="hover:text-teal-400 transition-colors">Contact Us</a>
                </div>
                
                <div class="mt-4 flex items-center md:justify-start justify-center">
                    <a href="https://instagram.com/trilochancompany" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm font-bold bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 hover:border-pink-500/50">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                        </svg>
                        <span>@trilochancompany</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <button onclick="toggleReportModal(true)" class="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2 transition-all transform hover:scale-105">
        ⚠️ <span>Report Problem</span>
    </button>

    <div id="global-report-modal" class="hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-slate-200">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-black text-slate-900">Report an Issue</h3>
                <button onclick="toggleReportModal(false)" class="text-slate-400 hover:text-slate-600 text-xl font-bold">&times;</button>
            </div>
            <form id="global-report-form" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Your Contact (Email or Mobile)</label>
                    <input type="text" id="rep-contact" required class="w-full border rounded-xl px-4 py-2.5 text-sm bg-slate-50 focus:outline-red-500" placeholder="e.g., Mobile Number or user@email.com">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Describe the issue</label>
                    <textarea id="rep-message" required rows="4" class="w-full border rounded-xl px-4 py-2.5 text-sm bg-slate-50 focus:outline-red-500" placeholder="Tell us what problem you are facing..."></textarea>
                </div>
                <button type="submit" id="rep-submit-btn" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors text-sm">
                    Submit Report
                </button>
            </form>
        </div>
    </div>
    
    <div id="toast-container" class="fixed top-20 right-6 z-[100] flex flex-col gap-3 pointer-events-none"></div>
`;

// Global toggle modal function
window.toggleReportModal = function(show) {
    const modal = document.getElementById('global-report-modal');
    if(modal) {
        if(show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
    }
}

// Custom Toast Notification System
window.showToast = function(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if(!container) return;

    const toast = document.createElement('div');
    
    const bgColor = type === 'success' ? 'bg-emerald-500' : 'bg-red-500';
    const icon = type === 'success' ? '✓' : '✕';

    toast.className = `${bgColor} text-white px-5 py-3 rounded-xl shadow-xl font-medium text-sm flex items-center gap-3 transform transition-all duration-300 translate-x-full opacity-0 pointer-events-auto`;
    
    toast.innerHTML = `
        <span class="font-black text-lg">${icon}</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
        toast.classList.add('translate-x-0', 'opacity-100');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('translate-x-0', 'opacity-100');
        toast.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Inject components on load
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");
    
    if(headerContainer) headerContainer.innerHTML = headerCode;
    if(footerContainer) footerContainer.innerHTML = footerCode;

    // Google Translate Integration
    const style = document.createElement('style');
    style.innerHTML = `
        .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; position: relative !important; }
        #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
        .goog-text-highlight { background: none !important; box-shadow: none !important; }
        .goog-te-menu-frame { z-index: 100000 !important; }
        .goog-te-gadget-simple { border: 1px solid #cbd5e1 !important; background-color: #f8fafc !important; padding: 6px 12px !important; border-radius: 8px !important; font-size: 14px !important; cursor: pointer !important; }
        .goog-te-gadget-simple .goog-te-menu-value span { color: #334155 !important; font-weight: 700 !important; }
        .goog-te-gadget-simple .goog-te-menu-value span:hover { color: #0d9488 !important; }
        .goog-te-gadget-icon { display: none !important; }
    `;
    document.head.appendChild(style);

    window.loadGoogleTranslate = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,hi',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_element');
    }

    // Form Handlers (Report)
    const reportForm = document.getElementById('global-report-form');
    if(reportForm) {
        reportForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('rep-submit-btn');
            btn.innerText = "Submitting...";
            btn.disabled = true;

            try {
                const { db, doc, setDoc } = await import('./firebase-config.js');
                const reportId = "REP" + Math.random().toString(36).substring(2, 10).toUpperCase();
                
                await setDoc(doc(db, "reports", reportId), {
                    reportId: reportId,
                    contact: document.getElementById('rep-contact').value,
                    message: document.getElementById('rep-message').value,
                    timestamp: new Date().toISOString()
                });

                showToast("Your issue has been reported successfully!", "success");
                reportForm.reset();
                toggleReportModal(false);
            } catch (err) {
                showToast("Submission Failed: " + err.message, "error");
            } finally {
                btn.innerText = "Submit Report";
                btn.disabled = false;
            }
        });
    }

    // Form Handlers (Contact)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('contact-submit-btn');
            btn.innerText = "Sending...";
            btn.disabled = true;

            try {
                const { db, doc, setDoc } = await import('./firebase-config.js');
                const contactId = "CON" + Math.random().toString(36).substring(2, 10).toUpperCase();

                await setDoc(doc(db, "contacts", contactId), {
                    contactId: contactId,
                    fullName: document.getElementById('contact-name').value,
                    email: document.getElementById('contact-email').value,
                    userId: document.getElementById('contact-user-id')?.value || null,
                    message: document.getElementById('contact-message').value,
                    timestamp: new Date().toISOString()
                });

                showToast("Message sent! We will contact you soon.", "success");
                contactForm.reset();
            } catch (err) {
                showToast("Failed to send: " + err.message, "error");
            } finally {
                btn.innerText = "Send Message";
                btn.disabled = false;
            }
        });
    }

    // Add Worker Form
    const addWorkerForm = document.getElementById('add-worker-form');
    if (addWorkerForm) {
        addWorkerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('add-worker-submit-btn');
            btn.innerText = "Processing...";
            btn.disabled = true;

            try {
                const { db, doc, setDoc } = await import('./firebase-config.js');
                const workerId = "TRW" + Math.random().toString(36).substring(2, 10).toUpperCase();

                const workerPhotoInput = document.getElementById('worker-photo');
                const workerAadhaarInput = document.getElementById('worker-aadhaar');

                let photoBase64 = '';
                if (workerPhotoInput.files.length > 0) {
                    photoBase64 = await convertFileToBase64(workerPhotoInput.files[0]);
                }

                let aadhaarBase64 = '';
                if (workerAadhaarInput.files.length > 0) {
                    aadhaarBase64 = await convertFileToBase64(workerAadhaarInput.files[0]);
                }

                await setDoc(doc(db, "workers", workerId), {
                    trilochanId: workerId,
                    name: document.getElementById('worker-name').value,
                    phone: document.getElementById('worker-phone').value,
                    age: parseInt(document.getElementById('worker-age').value),
                    skill: document.getElementById('worker-skill').value,
                    address: document.getElementById('worker-address').value,
                    photoBase64: photoBase64,
                    aadhaarBase64: aadhaarBase64,
                    status: 'active',
                    createdAt: new Date().toISOString()
                });

                showToast("Worker added successfully!", "success");
                addWorkerForm.reset();
                document.getElementById('worker-photo-preview').classList.add('hidden');
                document.getElementById('worker-aadhaar-preview').classList.add('hidden');
                if (document.getElementById('workers-grid-box') && !document.getElementById('workers-grid-box').classList.contains('hidden')) {
                    if (typeof window.loadSystemData === 'function') {
                        window.loadSystemData();
                    }
                }
            } catch (err) {
                showToast("Failed to add worker: " + err.message, "error");
            } finally {
                btn.innerText = "Add Worker";
                btn.disabled = false;
            }
        });
    }

    const translateScript = document.createElement('script');
    translateScript.src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    document.body.appendChild(translateScript);
});

function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}