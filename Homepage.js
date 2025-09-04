// ------------ Data -------------
    const ARTICLES = [
      {
        id:"cpu", title:"CPU (Central Processing Unit)", category:"Hardware",
        summary:"The CPU fetches, decodes, and executes instructions in a cycle.",
        tags:["hardware","processor","ALU","control unit","registers"],
        content:`<p>The <strong>CPU</strong> is often called the computer's brain. It follows the <em>fetch–decode–execute</em> cycle:</p>
        <ol><li><strong>Fetch</strong> an instruction from memory (via the program counter).</li>
        <li><strong>Decode</strong> it to determine the operation and operands.</li>
        <li><strong>Execute</strong> using the <em>ALU</em> (arithmetic logic unit), registers, and cache.</li></ol>
        <h3>Key Terms</h3>
        <ul><li><strong>Clock speed</strong> (GHz): cycles per second.</li>
        <li><strong>Cores</strong>: independent processing units in one chip.</li>
        <li><strong>Cache</strong> (L1/L2/L3): small, fast memory near the CPU.</li></ul>
        <h3>Why it matters</h3><p>More cores help with multitasking; higher IPC (instructions per cycle) and efficient caches boost real performance beyond raw GHz.</p>`
      },
      {
        id:"gpu", title:"GPU (Graphics Processing Unit)", category:"Hardware",
        summary:"Optimized for parallel work (graphics, AI) with thousands of cores.",
        tags:["hardware","graphics","parallel","cuda","opencl"],
        content:`<p>A <strong>GPU</strong> excels at <em>parallel</em> workloads such as rendering and machine learning. It has many smaller cores compared to a CPU.</p>
        <h3>Use Cases</h3><ul><li>Games & 3D rendering</li><li>AI/ML training & inference</li><li>Video encoding/decoding</li></ul>`
      },
      {
        id:"ram", title:"RAM (Memory)", category:"Hardware",
        summary:"Short‑term, fast storage that programs use while running.",
        tags:["memory","DDR","latency","capacity"],
        content:`<p><strong>RAM</strong> temporarily stores data the CPU needs right now. More RAM lets you keep more apps/tabs open.</p>
        <ul><li><strong>Latency</strong> vs <strong>bandwidth</strong>: both affect speed.</li><li>Volatile: contents vanish when power is off.</li></ul>`
      },
      {
        id:"storage", title:"Storage (SSD/HDD)", category:"Hardware",
        summary:"Long‑term data storage; SSDs are much faster and more durable than HDDs.",
        tags:["ssd","hdd","nvme","sata"],
        content:`<p><strong>SSDs</strong> use flash memory; <strong>HDDs</strong> use spinning disks. NVMe SSDs (PCIe) are faster than SATA SSDs.</p>
        <h3>Tips</h3><ul><li>Use SSD for OS & apps; HDD for archives.</li><li>Back up important files (3‑2‑1 rule).</li></ul>`
      },
      {
        id:"os", title:"Operating Systems", category:"Software",
        summary:"The OS manages hardware, files, processes, and provides a user interface.",
        tags:["kernel","process","thread","filesystem","windows","linux","macOS"],
        content:`<p>An <strong>OS</strong> abstracts hardware and offers services: process scheduling, memory management, device drivers, I/O, and security.</p>
        <h3>Popular OS</h3><ul><li>Windows: broad app support</li><li>Linux: open‑source, many distros</li><li>macOS: integrated with Apple hardware</li></ul>`
      },
      {
        id:"fs", title:"File Systems", category:"Software",
        summary:"Structures how data is named and stored (e.g., NTFS, ext4, APFS).",
        tags:["ntfs","ext4","apfs","inode","metadata"],
        content:`<p>A <strong>file system</strong> maps file names to blocks on disk and tracks permissions, timestamps, and directories.</p>`
      },
      {
        id:"net", title:"Computer Networks", category:"Networking",
        summary:"Computers communicate using layered models like OSI and TCP/IP.",
        tags:["osi","tcp","ip","ethernet","wifi","routing"],
        content:`<p><strong>Networking</strong> moves data between devices. The <em>TCP/IP</em> model includes: Link, Internet, Transport, Application.</p>
        <ul><li><strong>IP</strong>: addressing & routing</li><li><strong>TCP</strong>: reliable streams</li><li><strong>UDP</strong>: faster, no guarantee</li></ul>`
      },
      {
        id:"web", title:"The Web vs The Internet", category:"Networking",
        summary:"The web is a service on the Internet (uses HTTP/HTTPS).",
        tags:["http","https","dns","browser","server"],
        content:`<p>The <strong>Internet</strong> is the global network of networks. The <strong>web</strong> uses HTTP(S), URLs, and browsers to fetch pages from servers.</p>`
      },
      {
        id:"security", title:"Cybersecurity Basics", category:"Security",
        summary:"Protect confidentiality, integrity, and availability (CIA triad).",
        tags:["malware","phishing","mfa","encryption","passwords"],
        content:`<p>Security aims to preserve <strong>C</strong>onfidentiality, <strong>I</strong>ntegrity, and <strong>A</strong>vailability.</p>
        <h3>Top Practices</h3>
        <ul><li>Use a password manager + <strong>MFA</strong>.</li>
        <li>Keep OS and apps updated.</li>
        <li>Beware of phishing; verify links and senders.</li>
        <li>Backups protect against ransomware.</li></ul>`
      },
      {
        id:"crypto", title:"Encryption 101", category:"Security",
        summary:"Transforms readable data into ciphertext; keys unlock it.",
        tags:["aes","rsa","public key","tls"],
        content:`<p><strong>Encryption</strong> scrambles data with a key. <em>Symmetric</em> (AES) uses one key; <em>asymmetric</em> (RSA, ECC) uses public/private keys. HTTPS uses TLS to protect web traffic.</p>`
      },
      {
        id:"db", title:"Databases", category:"Software",
        summary:"Organized data with query capability (SQL vs NoSQL).",
        tags:["sql","nosql","index","transaction","acid"],
        content:`<p><strong>Databases</strong> store and query data. <strong>Relational</strong> (SQL) use tables and ACID transactions; <strong>NoSQL</strong> optimize for scale or flexibility.</p>`
      },
      {
        id:"dsa", title:"Algorithms & Data Structures", category:"Programming",
        summary:"Efficient ways to organize and process data (Big‑O).",
        tags:["big-o","array","list","tree","graph","sort","search"],
        content:`<p><strong>Data structures</strong> (arrays, lists, trees, graphs) and <strong>algorithms</strong> (sorting, searching) affect performance. Big‑O describes how time/space grow with input size.</p>`
      },
      {
        id:"lang", title:"Programming Languages", category:"Programming",
        summary:"Different tools for different jobs (compiled vs interpreted).",
        tags:["python","c","java","js","typescript"],
        content:`<p>Languages vary by paradigm and runtime. <strong>Compiled</strong> (C/C++) turn into machine code; <strong>interpreted/JIT</strong> (Python/JS/Java) run via VMs or interpreters.</p>`
      },
      {
        id:"virt", title:"Virtualization & Containers", category:"Software",
        summary:"Run isolated systems or apps (VMs, Docker, Kubernetes).",
        tags:["vm","hypervisor","container","k8s"],
        content:`<p><strong>Virtual machines</strong> emulate hardware for full OS isolation. <strong>Containers</strong> isolate processes with shared OS (lighter). Orchestrators like Kubernetes manage many containers.</p>`
      },
      {
        id:"cloud", title:"Cloud Computing", category:"Software",
        summary:"On‑demand compute/storage over the internet (IaaS, PaaS, SaaS).",
        tags:["iaas","paas","saas","scalability"],
        content:`<p><strong>Cloud</strong> offers elastic resources. Models include <em>IaaS</em> (infrastructure), <em>PaaS</em> (platform), and <em>SaaS</em> (software).</p>`
      },
      {
        id:"ai", title:"AI & Machine Learning Basics", category:"AI/ML",
        summary:"Systems that learn from data to make predictions or decisions.",
        tags:["ai","ml","model","training","dataset"],
        content:`<p><strong>Machine learning</strong> fits models to data. Types: supervised, unsupervised, reinforcement. Common tasks: classification, regression, clustering.</p>`
      },
      {
        id:"hist", title:"Brief History of Computers", category:"History",
        summary:"From mechanical calculators to smartphones.",
        tags:["eniac","transistor","integrated circuit","microprocessor"],
        content:`<p>Milestones:</p>
        <ul>
          <li>1837: Babbage's Analytical Engine (concept).</li>
          <li>1940s: ENIAC & early electronic computers.</li>
          <li>1947: <em>Transistor</em> invented at Bell Labs.</li>
          <li>1958: <em>Integrated circuit</em> (IC) emerges.</li>
          <li>1971: First commercial <em>microprocessor</em>.</li>
          <li>1981: IBM PC popularizes personal computing.</li>
          <li>1991: The World Wide Web becomes public.</li>
          <li>2007: Smartphones redefine mobile computing.</li>
        </ul>`
      }
    ];

    const CATEGORIES = ["All","Hardware","Software","Networking","Security","Programming","AI/ML","History"];

    // ------------ Render -------------
    const grid = document.getElementById('grid');
    const filterBar = document.getElementById('filterBar');
    const searchInput = document.getElementById('searchInput');

    function renderChips(){
      filterBar.innerHTML = '';
      CATEGORIES.forEach(cat=>{
        const btn = document.createElement('button');
        btn.className = 'chip';
        btn.textContent = cat;
        btn.dataset.cat = cat;
        btn.onclick = ()=>{
          document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
          btn.classList.add('active');
          renderGrid(searchInput.value.trim(), cat);
        };
        if(cat==='All') btn.classList.add('active');
        filterBar.appendChild(btn);
      })
    }

    function highlight(text,term){
      if(!term) return text;
      const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'ig');
      return text.replace(re,'<mark>$1</mark>');
    }

    function renderGrid(query='', category='All'){
      const q = query.toLowerCase();
      grid.innerHTML = '';
      const items = ARTICLES.filter(a=>{
        const hitCat = category==='All' || a.category===category;
        const hay = (a.title + ' ' + a.summary + ' ' + a.tags.join(' ')).toLowerCase();
        const hitQ = !q || hay.includes(q);
        return hitCat && hitQ;
      });
      if(items.length===0){
        grid.innerHTML = `<div class="card"><h3>No results</h3><p>Try a different keyword or category.</p></div>`;
        return;
      }
      items.forEach(a=>{
        const el = document.createElement('article');
        el.className = 'card';
        el.innerHTML = `
          <h3>${highlight(a.title, q)}</h3>
          <p>${highlight(a.summary, q)}</p>
          <div class="tags">${a.tags.slice(0,4).map(t=>`<span class='tag'>${t}</span>`).join('')}</div>
          <button class='btn' aria-label='Read ${a.title}'>Read</button>
        `;
        el.querySelector('.btn').onclick = ()=> openArticle(a.id);
        grid.appendChild(el);
      })
    }

    // ------------ Search UX -------------
    document.getElementById('searchBtn').addEventListener('click',()=>{
      renderGrid(searchInput.value.trim(), currentCategory());
      location.hash = '#topics';
    });
    searchInput.addEventListener('keydown',e=>{
      if(e.key==='Enter'){
        renderGrid(searchInput.value.trim(), currentCategory());
        location.hash = '#topics';
      }
    });
    window.addEventListener('keydown',e=>{
      if((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==='k'){
        e.preventDefault();
        searchInput.focus();
      }
    })

    function currentCategory(){
      const active = document.querySelector('.chip.active');
      return active?active.dataset.cat:'All';
    }

    // ------------ Article Sheet -------------
    const layer = document.getElementById('articleLayer');
    const titleEl = document.getElementById('articleTitle');
    const contentEl = document.getElementById('articleContent');

    function openArticle(id){
      const art = ARTICLES.find(a=>a.id===id);
      if(!art) return;
      titleEl.textContent = art.title;
      contentEl.innerHTML = art.content;
      layer.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      history.pushState({}, '', `#article/${id}`);
    }
    function closeArticle(){
      layer.style.display = 'none';
      document.body.style.overflow = '';
      if(location.hash.startsWith('#article/')) history.pushState({}, '', '#topics');
    }
    layer.addEventListener('click', e=>{ if(e.target===layer) closeArticle(); });

    // ------------ Drawer (mobile) -------------
    function closeDrawer(){ document.getElementById('check').checked = false; }
    window.closeDrawer = closeDrawer;

    // ------------ Nav active highlight -------------
    const navLinks = Array.from(document.querySelectorAll('#navLinks a'));
    function setActiveFromHash(){
      const h = location.hash || '#home';
      navLinks.forEach(a=>a.classList.toggle('active', h.startsWith(a.getAttribute('href'))));
    }
    window.addEventListener('hashchange',()=>{
      setActiveFromHash();
      // Open article if deep link
      const m = location.hash.match(/^#article\/(.+)$/);
      if(m) openArticle(m[1]);
    });

    // ------------ Init -------------
    renderChips();
    renderGrid();
    setActiveFromHash();
    if(location.hash.startsWith('#article/')){
      const id = location.hash.split('/')[1];
      openArticle(id);
    }
