#!/bin/bash
# Generates all pages for cbseparent.in

NAV='<nav>
<div class="nav-inner">
<a href="index.html" class="nav-logo">📚 cbse<span>parent</span>.in</a>
<div class="nav-links">
<a href="index.html">Home</a>
<a href="age-eligibility.html">Age Guide</a>
<a href="kv-schools.html">KV Schools</a>
<a href="army-schools.html">Army Schools</a>
<a href="scholarships.html">Scholarships</a>
<a href="board-exams.html">Board Exams</a>
<a href="after-class10.html">After Class 10</a>
<a href="blog.html" class="nav-cta">Blog</a>
</div>
<button class="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></button>
</div>
<div class="mobile-nav" id="mobile-nav">
<a href="index.html">🏠 Home</a>
<a href="age-eligibility.html">📅 Age Eligibility Guide</a>
<a href="kv-schools.html">🏫 KV Schools Guide</a>
<a href="army-schools.html">⭐ Army Schools Guide</a>
<a href="scholarships.html">🎓 Scholarships</a>
<a href="board-exams.html">📝 Board Exams</a>
<a href="cbse-vs-icse.html">⚖️ CBSE vs ICSE</a>
<a href="after-class10.html">🚀 After Class 10</a>
<a href="cuet-guide.html">🎯 CUET Guide</a>
<a href="study-tips.html">💡 Study Tips</a>
<a href="blog.html">📰 Blog</a>
</div>
</nav>
<div class="coming-soon-banner">
<p><em>APP COMING SOON</em> Our free CBSE Parent app is almost ready! <button class="notify-btn" onclick="document.getElementById('"'"'notify-section'"'"').scrollIntoView({behavior:'"'"'smooth'"'"'})">Notify Me →</button></p>
</div>'

FOOTER='<footer>
<div class="footer-inner">
<div class="footer-grid">
<div class="footer-brand">
<div class="footer-logo">📚 cbse<span>parent</span>.in</div>
<p>Your trusted guide for CBSE school admissions, age eligibility, KV schools, army schools, and scholarship information across India.</p>
</div>
<div class="footer-col">
<h4>Guides</h4>
<a href="age-eligibility.html">Age Eligibility</a>
<a href="kv-schools.html">KV Schools</a>
<a href="army-schools.html">Army Schools</a>
<a href="scholarships.html">Scholarships</a>
</div>
<div class="footer-col">
<h4>Resources</h4>
<a href="board-exams.html">Board Exams</a>
<a href="cbse-vs-icse.html">CBSE vs ICSE</a>
<a href="after-class10.html">After Class 10</a>
<a href="cuet-guide.html">CUET Guide</a>
<a href="study-tips.html">Study Tips</a>
</div>
<div class="footer-col">
<h4>More</h4>
<a href="blog.html">Blog</a>
<a href="index.html#calculator">Age Calculator</a>
<a href="privacy.html">Privacy Policy</a>
<a href="about.html">About Us</a>
</div>
</div>
<div class="footer-bottom">
<p>© 2025 cbseparent.in · Built with ❤️ by <a href="https://appspattarai.studio">Apps Pattarai</a></p>
<a href="privacy.html">Privacy Policy</a>
</div>
</div>
</footer>
<script src="js/main.js"></script>'

echo "NAV and FOOTER variables set"
echo "Ready to generate pages"
