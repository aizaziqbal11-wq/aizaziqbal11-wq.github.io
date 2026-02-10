// Code snippets for the background animation
        const codeSnippets = [
            '<span class="keyword">const</span> <span class="variable">user</span> <span class="operator">=</span> <span class="bracket">{</span>',
            '  <span class="string">"name"</span><span class="operator">:</span> <span class="string">"Alex Morgan"</span><span class="operator">,</span>',
            '  <span class="string">"role"</span><span class="operator">:</span> <span class="string">"Full-Stack Developer"</span><span class="operator">,</span>',
            '  <span class="string">"skills"</span><span class="operator">:</span> <span class="bracket">[</span><span class="string">"React"</span><span class="operator">,</span> <span class="string">"Node.js"</span><span class="operator">,</span> <span class="string">"Python"</span><span class="bracket">]</span>',
            '<span class="bracket">}</span><span class="operator">;</span>',
            '',
            '<span class="keyword">function</span> <span class="function">createAwesomeProject</span><span class="bracket">(</span><span class="variable">idea</span><span class="bracket">)</span> <span class="bracket">{</span>',
            '  <span class="keyword">const</span> <span class="variable">project</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="function">Project</span><span class="bracket">(</span><span class="variable">idea</span><span class="bracket">)</span><span class="operator">;</span>',
            '  <span class="variable">project</span><span class="operator">.</span><span class="function">addCreativity</span><span class="bracket">()</span><span class="operator">;</span>',
            '  <span class="variable">project</span><span class="operator">.</span><span class="function">implementFeatures</span><span class="bracket">()</span><span class="operator">;</span>',
            '  <span class="keyword">return</span> <span class="variable">project</span><span class="operator">.</span><span class="function">deploy</span><span class="bracket">()</span><span class="operator">;</span>',
            '<span class="bracket">}</span>',
            '',
            '<span class="comment">// Building the future, one line at a time</span>',
            '<span class="keyword">class</span> <span class="function">Developer</span> <span class="bracket">{</span>',
            '  <span class="function">constructor</span><span class="bracket">(</span><span class="variable">name</span><span class="bracket">)</span> <span class="bracket">{</span>',
            '    <span class="keyword">this</span><span class="operator">.</span><span class="variable">name</span> <span class="operator">=</span> <span class="variable">name</span><span class="operator">;</span>',
            '    <span class="keyword">this</span><span class="operator">.</span><span class="variable">passion</span> <span class="operator">=</span> <span class="string">"coding"</span><span class="operator">;</span>',
            '    <span class="keyword">this</span><span class="operator">.</span><span class="variable">coffeeLevel</span> <span class="operator">=</span> <span class="number">100</span><span class="operator">;</span>',
            '  <span class="bracket">}</span>',
            '',
            '  <span class="function">solve</span><span class="bracket">(</span><span class="variable">problem</span><span class="bracket">)</span> <span class="bracket">{</span>',
            '    <span class="keyword">while</span> <span class="bracket">(</span><span class="operator">!</span><span class="variable">problem</span><span class="operator">.</span><span class="variable">solved</span><span class="bracket">)</span> <span class="bracket">{</span>',
            '      <span class="keyword">this</span><span class="operator">.</span><span class="function">think</span><span class="bracket">()</span><span class="operator">;</span>',
            '      <span class="keyword">this</span><span class="operator">.</span><span class="function">code</span><span class="bracket">()</span><span class="operator">;</span>',
            '      <span class="keyword">this</span><span class="operator">.</span><span class="function">test</span><span class="bracket">()</span><span class="operator">;</span>',
            '      <span class="keyword">if</span> <span class="bracket">(</span><span class="keyword">this</span><span class="operator">.</span><span class="variable">coffeeLevel</span> <span class="operator"><</span> <span class="number">20</span><span class="bracket">)</span> <span class="bracket">{</span>',
            '        <span class="keyword">this</span><span class="operator">.</span><span class="function">drinkCoffee</span><span class="bracket">()</span><span class="operator">;</span>',
            '      <span class="bracket">}</span>',
            '    <span class="bracket">}</span>',
            '    <span class="keyword">return</span> <span class="string">"Problem solved! 🎉"</span><span class="operator">;</span>',
            '  <span class="bracket">}</span>',
            '<span class="bracket">}</span>',
            '',
            '<span class="keyword">const</span> <span class="variable">alex</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="function">Developer</span><span class="bracket">(</span><span class="string">"Alex Morgan"</span><span class="bracket">)</span><span class="operator">;</span>',
            '',
            '<span class="comment">// React Component Example</span>',
            '<span class="keyword">import</span> <span class="variable">React</span><span class="operator">,</span> <span class="bracket">{</span> <span class="variable">useState</span><span class="operator">,</span> <span class="variable">useEffect</span> <span class="bracket">}</span> <span class="keyword">from</span> <span class="string">"react"</span><span class="operator">;</span>',
            '',
            '<span class="keyword">const</span> <span class="function">Portfolio</span> <span class="operator">=</span> <span class="bracket">()</span> <span class="operator">=></span> <span class="bracket">{</span>',
            '  <span class="keyword">const</span> <span class="bracket">[</span><span class="variable">projects</span><span class="operator">,</span> <span class="variable">setProjects</span><span class="bracket">]</span> <span class="operator">=</span> <span class="function">useState</span><span class="bracket">([</span><span class="bracket">])</span><span class="operator">;</span>',
            '  <span class="keyword">const</span> <span class="bracket">[</span><span class="variable">loading</span><span class="operator">,</span> <span class="variable">setLoading</span><span class="bracket">]</span> <span class="operator">=</span> <span class="function">useState</span><span class="bracket">(</span><span class="keyword">true</span><span class="bracket">)</span><span class="operator">;</span>',
            '',
            '  <span class="function">useEffect</span><span class="bracket">(()</span> <span class="operator">=></span> <span class="bracket">{</span>',
            '    <span class="function">fetchProjects</span><span class="bracket">()</span><span class="operator">.</span><span class="function">then</span><span class="bracket">(</span><span class="variable">data</span> <span class="operator">=></span> <span class="bracket">{</span>',
            '      <span class="function">setProjects</span><span class="bracket">(</span><span class="variable">data</span><span class="bracket">)</span><span class="operator">;</span>',
            '      <span class="function">setLoading</span><span class="bracket">(</span><span class="keyword">false</span><span class="bracket">)</span><span class="operator">;</span>',
            '    <span class="bracket">}</span><span class="bracket">)</span><span class="operator">;</span>',
            '  <span class="bracket">}</span><span class="operator">,</span> <span class="bracket">[])</span><span class="operator">;</span>',
            '',
            '  <span class="keyword">return</span> <span class="bracket">(</span>',
            '    <span class="operator"><</span><span class="keyword">div</span> <span class="variable">className</span><span class="operator">=</span><span class="string">"portfolio"</span><span class="operator">></span>',
            '      <span class="bracket">{</span><span class="variable">loading</span> <span class="operator">?</span> <span class="operator"><</span><span class="function">Spinner</span> <span class="operator">/></span> <span class="operator">:</span> <span class="operator"><</span><span class="function">ProjectList</span> <span class="variable">projects</span><span class="operator">=</span><span class="bracket">{</span><span class="variable">projects</span><span class="bracket">}</span> <span class="operator">/></span><span class="bracket">}</span>',
            '    <span class="operator"><</span><span class="operator">/</span><span class="keyword">div</span><span class="operator">></span>',
            '  <span class="bracket">)</span><span class="operator">;</span>',
            '<span class="bracket">}</span><span class="operator">;</span>',
            '',
            '<span class="comment">// Node.js Server Setup</span>',
            '<span class="keyword">const</span> <span class="variable">express</span> <span class="operator">=</span> <span class="function">require</span><span class="bracket">(</span><span class="string">"express"</span><span class="bracket">)</span><span class="operator">;</span>',
            '<span class="keyword">const</span> <span class="variable">app</span> <span class="operator">=</span> <span class="function">express</span><span class="bracket">()</span><span class="operator">;</span>',
            '<span class="keyword">const</span> <span class="variable">PORT</span> <span class="operator">=</span> <span class="variable">process</span><span class="operator">.</span><span class="variable">env</span><span class="operator">.</span><span class="variable">PORT</span> <span class="operator">||</span> <span class="number">3000</span><span class="operator">;</span>',
            '',
            '<span class="variable">app</span><span class="operator">.</span><span class="function">use</span><span class="bracket">(</span><span class="variable">express</span><span class="operator">.</span><span class="function">json</span><span class="bracket">()</span><span class="bracket">)</span><span class="operator">;</span>',
            '',
            '<span class="variable">app</span><span class="operator">.</span><span class="function">get</span><span class="bracket">(</span><span class="string">"/api/projects"</span><span class="operator">,</span> <span class="keyword">async</span> <span class="bracket">(</span><span class="variable">req</span><span class="operator">,</span> <span class="variable">res</span><span class="bracket">)</span> <span class="operator">=></span> <span class="bracket">{</span>',
            '  <span class="keyword">try</span> <span class="bracket">{</span>',
            '    <span class="keyword">const</span> <span class="variable">projects</span> <span class="operator">=</span> <span class="keyword">await</span> <span class="function">getProjectsFromDB</span><span class="bracket">()</span><span class="operator">;</span>',
            '    <span class="variable">res</span><span class="operator">.</span><span class="function">json</span><span class="bracket">(</span><span class="variable">projects</span><span class="bracket">)</span><span class="operator">;</span>',
            '  <span class="bracket">}</span> <span class="keyword">catch</span> <span class="bracket">(</span><span class="variable">error</span><span class="bracket">)</span> <span class="bracket">{</span>',
            '    <span class="variable">res</span><span class="operator">.</span><span class="function">status</span><span class="bracket">(</span><span class="number">500</span><span class="bracket">)</span><span class="operator">.</span><span class="function">json</span><span class="bracket">({</span> <span class="string">"error"</span><span class="operator">:</span> <span class="variable">error</span><span class="operator">.</span><span class="variable">message</span> <span class="bracket">}</span><span class="bracket">)</span><span class="operator">;</span>',
            '  <span class="bracket">}</span>',
            '<span class="bracket">}</span><span class="bracket">)</span><span class="operator">;</span>',
            '',
            '<span class="variable">app</span><span class="operator">.</span><span class="function">listen</span><span class="bracket">(</span><span class="variable">PORT</span><span class="operator">,</span> <span class="bracket">()</span> <span class="operator">=></span> <span class="bracket">{</span>',
            '  <span class="variable">console</span><span class="operator">.</span><span class="function">log</span><span class="bracket">(</span><span class="string">`Server running on port ${PORT}`</span><span class="bracket">)</span><span class="operator">;</span>',
            '<span class="bracket">}</span><span class="bracket">)</span><span class="operator">;</span>',
            '',
            '<span class="comment">// Python Data Analysis</span>',
            '<span class="keyword">import</span> <span class="variable">pandas</span> <span class="keyword">as</span> <span class="variable">pd</span>',
            '<span class="keyword">import</span> <span class="variable">numpy</span> <span class="keyword">as</span> <span class="variable">np</span>',
            '<span class="keyword">from</span> <span class="variable">sklearn.model_selection</span> <span class="keyword">import</span> <span class="variable">train_test_split</span>',
            '',
            '<span class="keyword">def</span> <span class="function">analyze_data</span><span class="bracket">(</span><span class="variable">dataset</span><span class="bracket">)</span><span class="operator">:</span>',
            '    <span class="variable">df</span> <span class="operator">=</span> <span class="variable">pd</span><span class="operator">.</span><span class="function">read_csv</span><span class="bracket">(</span><span class="variable">dataset</span><span class="bracket">)</span>',
            '    <span class="variable">cleaned_data</span> <span class="operator">=</span> <span class="variable">df</span><span class="operator">.</span><span class="function">dropna</span><span class="bracket">()</span>',
            '    <span class="keyword">return</span> <span class="variable">cleaned_data</span><span class="operator">.</span><span class="function">describe</span><span class="bracket">()</span>',
            '',
            '<span class="comment">// MongoDB Query</span>',
            '<span class="keyword">const</span> <span class="variable">mongoose</span> <span class="operator">=</span> <span class="function">require</span><span class="bracket">(</span><span class="string">"mongoose"</span><span class="bracket">)</span><span class="operator">;</span>',
            '',
            '<span class="keyword">const</span> <span class="variable">userSchema</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="variable">mongoose</span><span class="operator">.</span><span class="function">Schema</span><span class="bracket">({</span>',
            '  <span class="string">name</span><span class="operator">:</span> <span class="bracket">{</span> <span class="string">type</span><span class="operator">:</span> <span class="variable">String</span><span class="operator">,</span> <span class="string">required</span><span class="operator">:</span> <span class="keyword">true</span> <span class="bracket">}</span><span class="operator">,</span>',
            '  <span class="string">email</span><span class="operator">:</span> <span class="bracket">{</span> <span class="string">type</span><span class="operator">:</span> <span class="variable">String</span><span class="operator">,</span> <span class="string">unique</span><span class="operator">:</span> <span class="keyword">true</span> <span class="bracket">}</span><span class="operator">,</span>',
            '  <span class="string">projects</span><span class="operator">:</span> <span class="bracket">[{</span> <span class="string">type</span><span class="operator">:</span> <span class="variable">mongoose</span><span class="operator">.</span><span class="variable">Schema</span><span class="operator">.</span><span class="variable">Types</span><span class="operator">.</span><span class="variable">ObjectId</span><span class="operator">,</span> <span class="string">ref</span><span class="operator">:</span> <span class="string">"Project"</span> <span class="bracket">}]</span>',
            '<span class="bracket">}</span><span class="bracket">)</span><span class="operator">;</span>',
            '',
            '<span class="comment">// Async/Await Best Practices</span>',
            '<span class="keyword">const</span> <span class="function">fetchUserData</span> <span class="operator">=</span> <span class="keyword">async</span> <span class="bracket">(</span><span class="variable">userId</span><span class="bracket">)</span> <span class="operator">=></span> <span class="bracket">{</span>',
            '  <span class="keyword">try</span> <span class="bracket">{</span>',
            '    <span class="keyword">const</span> <span class="variable">user</span> <span class="operator">=</span> <span class="keyword">await</span> <span class="variable">User</span><span class="operator">.</span><span class="function">findById</span><span class="bracket">(</span><span class="variable">userId</span><span class="bracket">)</span><span class="operator">;</span>',
            '    <span class="keyword">const</span> <span class="variable">projects</span> <span class="operator">=</span> <span class="keyword">await</span> <span class="variable">Project</span><span class="operator">.</span><span class="function">find</span><span class="bracket">({</span> <span class="string">userId</span> <span class="bracket">}</span><span class="bracket">)</span><span class="operator">;</span>',
            '    <span class="keyword">return</span> <span class="bracket">{</span> <span class="variable">user</span><span class="operator">,</span> <span class="variable">projects</span> <span class="bracket">}</span><span class="operator">;</span>',
            '  <span class="bracket">}</span> <span class="keyword">catch</span> <span class="bracket">(</span><span class="variable">error</span><span class="bracket">)</span> <span class="bracket">{</span>',
            '    <span class="variable">console</span><span class="operator">.</span><span class="function">error</span><span class="bracket">(</span><span class="string">"Error fetching user data:"</span><span class="operator">,</span> <span class="variable">error</span><span class="bracket">)</span><span class="operator">;</span>',
            '    <span class="keyword">throw</span> <span class="variable">error</span><span class="operator">;</span>',
            '  <span class="bracket">}</span>',
            '<span class="bracket">}</span><span class="operator">;</span>',
            '',
            '<span class="comment">// The journey continues...</span>',
            '<span class="variable">console</span><span class="operator">.</span><span class="function">log</span><span class="bracket">(</span><span class="string">"Building amazing things, one commit at a time! 🚀"</span><span class="bracket">)</span><span class="operator">;</span>'
        ];

        // Generate more code lines for full website coverage
        function generateCodeBackground() {
            const codeContainer = document.getElementById('codeContainer');
            const linesPerScreen = Math.ceil(window.innerHeight / 25);
            const totalLines = linesPerScreen * 6; // More lines for full website coverage

            for (let i = 0; i < totalLines; i++) {
                const codeLine = document.createElement('div');
                codeLine.className = 'code-line';
                
                // Select random code snippet
                const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                codeLine.innerHTML = randomSnippet;
                
                // Add random delay for typing animation
                codeLine.style.animationDelay = `${Math.random() * 3}s`;
                
                codeContainer.appendChild(codeLine);
            }
        }

        // Initialize code background
        generateCodeBackground();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle functionality
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');

        function toggleMenu() {
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
        }

        function closeMenu() {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        // Close menu when sidebar link is clicked
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeMenu();
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            // Scroll effects are now handled in the enhanced parallax function above
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });

        // Add hover effect to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

// ...existing code...

// Typing effect for hero subtitle (multi-line)
function typeWriterMulti(element, texts, speed = 100, pause = 1200, index = 0) {
    if (index >= texts.length) return;
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < texts[index].length) {
            element.textContent += texts[index].charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                typeWriterMulti(element, texts, speed, pause, index + 1);
            }, pause);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        typeWriterMulti(subtitle, ['Full-Stack Developer', 'Python Developer'], 100, 1200);
    }
});

// ...existing code...

        // Regenerate code background on window resize
        window.addEventListener('resize', () => {
            const codeContainer = document.getElementById('codeContainer');
            codeContainer.innerHTML = '';
            generateCodeBackground();
        });

        // Enhanced parallax effect for full website
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const codeContainer = document.getElementById('codeContainer');
            const particles = document.querySelectorAll('.particle');
            const parallaxSpeed = 0.3; // Slower for smoother effect
            
            if (codeContainer) {
                codeContainer.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }

            // Add parallax to particles as well
            particles.forEach((particle, index) => {
                const speed = 0.2 + (index * 0.05); // Different speeds for each particle
                particle.style.transform = `translateY(${scrolled * speed}px)`;
            });

            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        // Resume download function
// Updated Resume download function - Replace the existing one in script.js
function downloadResume() {
    // Method 1: Direct download with proper file path
    const resumeUrl = 'Aizaz_iqbal_CV.pdf'; // Make sure this file is in your root directory
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aizaz_Iqbal_Resume.pdf'; // This forces download instead of opening
    
    // Add some attributes to ensure download
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show success message
    showDownloadMessage();
}

// Alternative method using fetch for better control
function downloadResumeAdvanced() {
    const resumeUrl = 'Aizaz_iqbal_CV.pdf';
    
    fetch(resumeUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Resume file not found');
            }
            return response.blob();
        })
        .then(blob => {
            // Create blob URL
            const url = window.URL.createObjectURL(blob);
            
            // Create download link
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Aizaz_Iqbal_Resume.pdf';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            
            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            showDownloadMessage();
        })
        .catch(error => {
            console.error('Download failed:', error);
            alert('Sorry, the resume file could not be downloaded. Please contact me directly.');
        });
}

// Show download success message
function showDownloadMessage() {
    // Create a toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #64ffda, #00bcd4);
        color: #0d1117;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    toast.textContent = '📄 Resume download started!';
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// For testing purposes - use this if your file is in a subfolder
function downloadResumeFromFolder() {
    // If your CV is in a specific folder, update the path accordingly
    const resumeUrl = './assets/Aizaz_iqbal_CV.pdf'; // or whatever your folder structure is
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aizaz_Iqbal_Resume.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showDownloadMessage();
}
// Enhanced Navigation Active Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update the existing scroll event listener
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const codeContainer = document.getElementById('codeContainer');
    const particles = document.querySelectorAll('.particle');
    const parallaxSpeed = 0.3;
    
    if (codeContainer) {
        codeContainer.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }

    particles.forEach((particle, index) => {
        const speed = 0.2 + (index * 0.05);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });

    // Enhanced navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Fix navigation link hover issues
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});

// Theme Toggle Functionality
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the current theme
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        
        // Save theme preference
        const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        
        // Add a nice transition effect
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme);

// Alternative: Initialize theme immediately (add this to your existing script.js)
// You can also call initializeTheme() directly in your script.js file