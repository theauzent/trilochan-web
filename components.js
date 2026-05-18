// components.js

const headerCode = `
    <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <img src="./images/logo.png" alt="Trilochan Logo" class="h-12 w-12 object-contain">
                <div>
                    <h1 class="text-2xl font-black text-teal-950 tracking-tight">TRILOCHAN</h1>
                    <p class="text-[10px] text-teal-700 font-bold uppercase tracking-widest">Manpower Supply</p>
                </div>
            </div>
            <nav class="hidden md:flex gap-8 font-semibold text-slate-600">
                <a href="index.html" class="hover:text-teal-600 transition-colors">Home</a>
                <a href="index.html#services-section" class="hover:text-teal-600 transition-colors">Work Models</a>
                <a href="dashboard.html" class="hover:text-teal-600 transition-colors">My Account</a>
            </nav>
            <a href="auth.html" class="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all">
                Find Work / Request Workers
            </a>
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
                <p class="text-sm font-medium text-slate-500">&copy; 2026 Trilochan Manpower Supply. All rights reserved.</p>
                <div class="text-xs space-x-4 mt-2">
                    <a href="about.html" class="hover:text-teal-400 transition-colors">About Us</a>
                    <a href="#" class="hover:text-teal-400 transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-teal-400 transition-colors">Terms & Conditions</a>
                    <a href="#" class="hover:text-teal-400 transition-colors">Contact Us</a>
                </div>
            </div>
            <div class="text-sm font-medium">
               Designed & Developed by 
                <a href="https://coderkaushal.netlify.app" target="_blank" class="text-teal-400 hover:text-teal-300 underline font-bold tracking-wide transition-colors">
                    Ashutosh Kaushal (CoderKaushal)
                </a>
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
`;

// Global toggle modal function
window.toggleReportModal = function(show) {
    const modal = document.getElementById('global-report-modal');
    if(modal) {
        if(show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
    }
}

// Inject components on load
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");
    
    if(headerContainer) headerContainer.innerHTML = headerCode;
    if(footerContainer) footerContainer.innerHTML = footerCode;

    // Report Form Database Submission Handler
    const reportForm = document.getElementById('global-report-form');
    if(reportForm) {
        reportForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('rep-submit-btn');
            btn.innerText = "Submitting...";
            btn.disabled = true;

            try {
                // Fetch firebase-config context dynamic modules dynamically
                const { db, doc, setDoc } = await import('./firebase-config.js');
                const reportId = "REP" + Math.random().toString(36).substring(2, 10).toUpperCase();
                
                await setDoc(doc(db, "reports", reportId), {
                    reportId: reportId,
                    contact: document.getElementById('rep-contact').value,
                    message: document.getElementById('rep-message').value,
                    timestamp: new Date().toISOString()
                });

                alert("Your issue has been reported. Our team will review it soon.");
                reportForm.reset();
                toggleReportModal(false);
            } catch (err) {
                alert("Submission Failed: " + err.message);
            } finally {
                btn.innerText = "Submit Report";
                btn.disabled = false;
            }
        });
    }
});