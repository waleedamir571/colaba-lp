<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="Colaba.ai turns your story, voice and ideas into a finished book.">
  <title>Colaba.ai — The AI Co-Author That Listens</title>
  <link rel="icon" href="assets/images/favicon.png">
  <meta name="color-scheme" content="dark light">
  <script>
    /* Apply the required default before CSS is parsed to prevent a theme flash. */
    (() => {
      document.documentElement.dataset.theme = 'dark';
    })();
  </script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap-grid.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css?v=<?= filemtime(__DIR__ . '/style.css') ?>">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Colaba.ai home">
      <img class="logo-light" src="assets/images/figma/nav-logo.svg" alt="Colaba.ai" width="177" height="56">
      <img class="logo-dark" src="assets/images/figma/nav-logo-dark.svg" alt="" width="177" height="56">
    </a>
    <nav class="desktop-nav" aria-label="Primary">
      <a href="#studio">Studio</a><a href="#engine">Engine</a><a href="#library">Library</a><a
        href="#pricing">Pricing</a>
      <a href="#login">Login</a><a class="button button-small" href="#start">Begin</a>
    </nav>
    <button class="theme-toggle" type="button" aria-label="Switch to light mode" aria-pressed="true">
      <span class="theme-icon" aria-hidden="true">☾</span><span class="theme-label">Dark</span>
    </button>
    <button class="menu-toggle" type="button" aria-label="Open menu"
      aria-expanded="false"><span></span><span></span><span></span></button>
  </header>
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <a href="#studio">Studio</a><a href="#engine">Engine</a><a href="#library">Library</a><a
      href="#pricing">Pricing</a><a href="#start">Begin</a>
  </nav>

  <main id="main" class="container-fluid page-shell">
    <section class="hero" id="top">
      <div class="figma-wave-art" aria-hidden="true">
        <img src="assets/images/figma/hero-waves-base.png" alt="">
        <img src="assets/images/figma/hero-waves-overlay.png" alt="">
      </div>
      <canvas id="wave-canvas" aria-hidden="true"></canvas>
      <div class="hero-figma-tint" data-node-id="7054:559" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow">✦ Your story · Your voice · Your book</p>
        <h1><span class="hero-the">The </span><span class="hero-gradient typewriter" data-typewriter="AI co-author">AI
            co-author</span><span> that listens to your life, then writes your book in your voice.</span></h1>
        <p>Not a template. Not a ghostwriter you'll never meet. A conversation that becomes chapters — in the way only
          you would tell it.</p>
        <div class="actions"><a class="button" href="#start">Join the waitlist →</a><a class="text-link"
            href="#demo">Watch the 40-second demo</a></div>
      </div>
      <figure class="product-shot" id="demo"><img src="assets/images/banner.png"
          alt="Colaba writing studio conversation interface" width="1399" height="684"></figure>
      <p class="privacy-note">Your stories stay yours. Never used to train AI.</p>
    </section>

    <div class="story-rails" aria-hidden="true">
      <div class="story-rail story-rail-orange">
        <div class="rail-track">GHOSTWRITING　✕　AUDIO JOURNALS　✕　VOICE MEMOS　✕　DIARY ENTRIES　✕　LATE-NIGHT
          IDEAS　✕　GHOSTWRITING　✕　AUDIO JOURNALS　✕　VOICE MEMOS　✕　DIARY ENTRIES　✕　LATE-NIGHT IDEAS　✕　</div>
      </div>
      <div class="story-rail story-rail-white">
        <div class="rail-track">CUSTOM PRINTS　✕　DIARY ENTRIES　✕　GHOSTWRITING　✕　VOICE MEMOS　✕　LATE-NIGHT IDEAS　✕　CUSTOM
          PRINTS　✕　DIARY ENTRIES　✕　GHOSTWRITING　✕　VOICE MEMOS　✕　LATE-NIGHT IDEAS　✕　</div>
      </div>
      <div>VOICE MEMOS　✦　GHOSTWRITING　✦　DIARY ENTRIES　✦　LATE-NIGHT IDEAS　✦　AUDIO JOURNALS　✦　VOICE MEMOS　✦　GHOSTWRITING　✦
      </div>
    </div>

    <section class="section problem" id="studio" data-node-id="7054:659">
      <div class="two-col">
        <div class="problem-left">
          <p class="eyebrow">✦ Sound familiar?</p>
          <h2>Publishing <span class="highlight">A Book Sounds Simple</span> — Until You Actually Have To Write One</h2>
          <div class="doc-card">
            <div class="window-bar"><i></i><i></i><i></i><span>my-first-book-FINAL-v3.docx</span></div>
            <div class="doc-paper">
              <h3>Chapter 1</h3>
              <p>It was a bright cold day in…<b class="caret"></b></p>
              <hr>
              <hr>
              <hr class="short">
            </div>
            <div class="doc-status">Last edited 8 months ago</div>
          </div>
        </div>
        <div class="problem-copy">
          <div class="narrative-blocks">
            <p>The idea is easy enough: you have a story, a message, or years of knowledge worth sharing. You imagine
              turning it into a book, publishing it on Amazon, and finally seeing your name on the cover.</p>
            <p>Then you sit down to write. And suddenly, you're wondering:</p>
          </div>
          <ul class="questions">
            <li>Where do I even begin?</li>
            <li>How do I turn my ideas into a real book?</li>
            <li>What should I say in the first chapter?</li>
            <li>How do I keep my story organized?</li>
            <li>What if I'm not a writer?</li>
          </ul>
          <p>That’s where most book ideas get stuck. Not because the story isn’t worth telling—but because writing an
            entire book alone can feel overwhelming.</p>
          <div class="methods-stack">
            <div class="method">
              <h3>Trying To Write It Yourself</h3>
              <small>“Write me a book about…”</small>
              <p>A few flat, generic paragraphs at a time. No structure, no consistent voice, no formatting — nothing
                that resembles an actual book a reader would pay for.</p>
              <span>✕ TOO OVERWHELMING</span>
            </div>
            <div class="method">
              <h3>Hiring A Ghostwriter</h3>
              <small>The expensive route</small>
              <p>A professional ghostwriter can bring your story to life, but the cost can quickly become a
                barrier—especially when you’re still figuring out what your book should become.</p>
              <span>✕ TOO EXPENSIVE</span>
            </div>
            <div class="method">
              <h3>Using Generic AI Tools</h3>
              <small>The copy-paste book</small>
              <p>AI can generate words in seconds, but generic prompts rarely capture your personality, memories,
                experiences, or unique voice.</p>
              <span>✕ DOESN'T SOUND LIKE YOU</span>
            </div>
          </div>
          <p class="problem-ending">Months pass. The idea stays in your head. The book remains unwritten.<br>Until you
            find a better way to tell your story.</p>
        </div>
      </div>
    </section>

    <section class="section steps" id="engine" data-node-id="7054:730">
      <div class="steps-inner" data-node-id="7054:744">
        <h2>From Conversation To Book.<br><span class="highlight">Three Steps. Thats It</span></h2>
        <div class="steps-cards">
          <article class="step-card" data-node-id="7054:749">
            <div><b>01</b><small>15 Minutes</small>
              <h3>Have A Conversation</h3>
              <p>Colaba asks empathetic questions about your story, your reader, and your message.</p>
              <p class="step-support">Type or speak — like talking to a friend over coffee.</p>
              <em>Voice or Text</em>
              <em>Guided questions</em>
            </div><img src="assets/images/gif1.gif" alt="A Colaba guided conversation" loading="lazy">
          </article>
          <article class="step-card reverse" data-node-id="7054:803"><img src="assets/images/gif2.gif"
              alt="A chapter outline being organized" loading="lazy">
            <div><b>02</b><small>Instant</small>
              <h3>Get Your Outline</h3>
              <p>Colaba transforms your conversation into a structured chapter-by-chapter outline. Drag to reorder,
                click to edit, or tell Colaba what to change.</p><em>Editable</em>
              <em>Custom structure</em>
            </div>
          </article>
          <article class="step-card" data-node-id="7054:904">
            <div><b>03</b><small>10 min per chapter</small>
              <h3>Read Your Chapter</h3>
              <p>Colaba writes each chapter in your voice, using your stories and turning points. Revise with voice or
                text until it sounds exactly like you.</p><em>Your voice</em>
              <em>Unlimited revisions</em>
            </div><img src="assets/images/gif3.gif" alt="A finished chapter in Colaba" loading="lazy">
          </article>
        </div>
        <div class="center-actions"><a class="button" href="#start">Join the waitlist →</a><a class="text-link"
            href="#demo">Watch the 40-second demo</a></div>
        <p class="steps-privacy">Your stories stay yours. Never used to train AI.</p>
      </div>
    </section>

    <section class="section book-slider container-fluid px-0" id="library" aria-labelledby="books-title">
      <p class="eyebrow">✦ Fresh press</p>
      <h2 id="books-title">Written By Real Authors With <span class="highlight">Colaba AI</span></h2>
      <p>Browse books created by authors just like you</p>
      <div class="slider-shell figma-slider">
        <div class="slider-track" tabindex="0" aria-label="Featured books carousel">
          <figure class="book"><img src="assets/images/figma/book-01.png" alt="Deceptive Criminals by Tony Young">
          </figure>
          <figure class="book"><img src="assets/images/figma/book-02.png" alt="In the Watchful City"></figure>
          <figure class="book"><img src="assets/images/figma/book-03.png" alt="We Do Recover"></figure>
          <figure class="book"><img src="assets/images/figma/book-04.png" alt="Malamander by Thomas Taylor"></figure>
          <figure class="book"><img src="assets/images/figma/book-05.png" alt="A Guide to Mexico by Pamela Simko">
          </figure>
          <figure class="book"><img src="assets/images/figma/book-06.png" alt="Published author book cover"></figure>
        </div>
      </div>
      <div class="center-actions"><a class="text-link" href="#">Browse all books</a><a class="button"
          href="#start">Create your own book →</a></div>
    </section>

    <section class="section job">
      <p class="eyebrow">✦ The real reason books stay unfinished</p>
      <h2 class="left">Writing The Words Is Only Part Of The Job — <span class="highlight">The Rest Is What Slows Authors Down</span>
      </h2>
      <p class="left">A great book takes more than good writing. You need a clear structure, consistent voice, thoughtful editing,
        professional formatting, and a publishing-ready finish. Most authors are expected to handle it all themselves.
      </p>
      <div class="job-meter-labels"><span>Telling Your Story — 20%</span><span>Everything That Comes After — 80%</span>
      </div>
      <div class="job-meter"><i></i><span>SYSTEM_STATUS // 80% UNPAID_LABOR_DETECTED</span></div>
      <div class="job-grid">
        <div class="job-stat">
          <blockquote>Seven different jobs. One unfinished book.<br>That’s the hidden 80% that turns a great idea into
            another book that never makes it past the first draft.</blockquote>
          <small>COLABA.AI BRINGS THE PROCESS TOGETHER—SO YOU CAN FOCUS ON TELLING YOUR STORY.</small>
        </div>
        <div class="roles">
          <p><span><small>Today you're the</small><b>Storyteller</b></span><em>// Bring your ideas, memories, and
              experiences to life.</em></p>
          <p><span><small>Today you're the</small><b>Outline Architect</b></span><em>// Turn scattered thoughts into a
              compelling book structure.</em></p>
          <p><span><small>Today you're the</small><b>Editor</b></span><em>// Shape every chapter until your story flows
              naturally.</em></p>
          <p><span><small>Today you're the</small><b>Book Formatter</b></span><em>// Make every page polished,
              consistent, and publication-ready.</em></p>
          <p><span><small>Today you're the</small><b>Cover Designer</b></span><em>// Create a cover that makes your book
              impossible to overlook.</em></p>
          <p><span><small>Today you're the</small><b>Publishing Expert</b></span><em>// Navigate platforms, file
              requirements, metadata, &amp; publishing details.</em></p>
          <p><span><small>Today you're the</small><b>Quality Reviewer</b></span><em>// Check every detail before your
              book reaches readers.</em></p>
        </div>
      </div>
    </section>

    <section class="section pipeline">
      <p class="eyebrow">✦ Your story deserves a chance</p>
      <h2>The Difference Between A Manuscript And A<br><span class="highlight">Published Book Is One Decision</span>
      </h2>
      <p>Thousands of incredible stories never reach readers because authors get stuck between finishing the manuscript
        and publishing it.</p>
      <div class="pipeline-card">
        <h3>System Pipeline Visualization</h3>
        <p class="route colaba-route">[01] THE COLABA ROUTE // FROM IDEA TO PUBLISHED BOOK</p>
        <div class="pipeline-row"><span><small>Today</small><b>Your story starts here</b></span><span><small>Week
              1</small><b>Your story takes
              shape</b></span><span><small>Month 3</small><b>Your manuscript comes together</b></span><span><small>Month
              6</small><b>YOUR BOOK IS
              LIVE</b></span></div>
        <p class="route someday-route">[02] THE "SOMEDAY" ROUTE // WHAT USUALLY HAPPENS</p>
        <div class="pipeline-row pipeline-row-muted"><span><small>Month 1</small><b>Still waiting for the right
              time</b></span><span><small>Month 3</small><b>The idea is still sitting in your
              notes</b></span><span><small>Month 6</small><b>The draft is still unfinished</b></span></div>
      </div>
      <div class="status-card"><small>publication_status.log <i>●●●</i></small>
        <h3>Waiting Doesn't Feel Like A Decision. It Is.</h3>
        <p>Your story doesn't become a book by sitting in a folder. Every month you wait is another month your ideas
          remain unread, your message remains unheard, and your book remains unwritten.</p>
        <div class="status-invoice"><small>&gt; STORY STATUS</small>
          <p><span>Manuscript</span><b>INCOMPLETE</b></p>
          <p><span>Chapters</span><b>IN PROGRESS</b></p>
          <p><span>Readers</span><b>WAITING</b></p>
          <p><span>Publication</span><b>NOT STARTED</b></p>
          <footer><b>TOTAL TIME LOST / MO</b><b>STILL WRITING</b></footer>
        </div>
        <strong>STILL UNPUBLISHED</strong>
      </div>
      <button class="run-button"><span><small>There's a faster route.</small>Run Your Story</span><b>Run
          pipeline</b></button>
    </section>

    <section class="section audio" id="audiobook">
      <div class="audio-eyebrow">
        <p class="eyebrow">✦ Built-in audiobook studio</p>
      </div>
      <div class="audio-grid">
        <div class="audio-player">
          <header>
            <div><small>CHAPTER 3 OF 8</small>
              <h3>Build the Foundation</h3>
              <p>The Confident Creator</p>
            </div><button aria-label="Play audiobook">▶</button>
          </header>
          <div class="audio-progress"><i></i><span>04:12</span><span>12:38</span></div>
          <div class="audio-wave" aria-label="Animated audio waveform">
            <?php foreach ([12,28,16,36,12,42,20,48,16,52,28,48,36,42,24,18,28,12,36,20,42,16,28,12,8,16,24,12,18,8] as $i=>$h) echo '<i style="--wave-height:'.$h.'px;--wave-delay:'.($i*-0.07).'s"'.($i>17?' class="wave-muted"':'').'></i>'; ?>
          </div>
          <footer><span class="audio-avatar">C</span>
            <p><b>Celeste · warm, female</b><small>8 chapters ready to download</small></p><em>● NARRATING NOW</em>
          </footer>
        </div>
        <div class="audio-copy">
          <h2>Your Book, Narrated.<br>Included In <span class="highlight">Every Plan.</span></h2>
          <p>Turn any chapter into professional-quality audio with realistic AI voices. No second subscription, no
            separate tool, no hours of export time.</p>
          <ul class="feature-list">
            <li><b><i>01</i>Realistic narration, not robotic</b><span>Natural pacing and emotional range across 17
                lifelike voices. Preview any chapter before you commit credits.</span></li>
            <li><b><i>02</i>Per-chapter control</b><span>Regenerate individual chapters, swap voices, or re-narrate
                sections you want to tweak. Never start over.</span></li>
            <li><b><i>03</i>MP3 ready to publish</b><span>Download per chapter or a single merged file. ACX-compatible,
                Spotify-ready, yours to distribute.</span></li>
            <li><b><i>04</i>iPhone, iPad, and web</b><span>Listen anywhere. Narration syncs across devices so you can
                write on desktop and review on mobile.</span></li>
          </ul>
        </div>
      </div>
      <div class="audio-cta">
        <div><b>PUBLISH ANYWHERE</b><span>● AUDIBLE / ACX</span><span>● SPOTIFY FOR AUTHORS</span><span>● APPLE
            BOOKS</span><span>● GUMROAD / YOUR SITE</span></div>
        <p><a class="button" href="#start">See how audiobook generation works →</a><a href="#pricing">View plans</a></p>
      </div>
    </section>

    <section class="section compare" id="comparison">
      <div class="section-heading">
        <p class="eyebrow">✦ Why this works when other tools don't</p>
        <h2>Other AI Tools Generate Words. <span class="highlight">Colaba.ai Helps You Create A Book.</span></h2>
        <p>Most AI tools can write a paragraph in seconds. But a great book takes more than paragraphs—it needs your
          story, your voice, a clear structure, and a process that takes the manuscript from the first idea to a
          finished book.</p>
      </div>
      <div class="compare-grid">
        <article class="patchwork">
          <h3>The Patchwork Process</h3>
          <p>Different tools. Endless switching.</p>
          <ul>
            <li><b>Chatbots</b> — Generate text, but don't know your story.</li>
            <li><b>Word Processors</b> — Store your manuscript, but don't shape it.</li>
            <li><b>Design Tools</b> — Make pages look good, but don't build your book.</li>
            <li><b>Editors</b> — Fix the words after you've done the hard part.</li>
            <li><b>Publishing Platforms</b> — Upload your files and hope everything works.</li>
          </ul><span>✕ Too many tools. Too many steps.</span>
        </article>
        <b class="vs">VS</b>
        <article class="complete-process">
          <h3>The Complete Book Creation Experience</h3>
          <p>One story. One connected journey.</p>
          <ul>
            <li><b>Share Your Story</b> — Talk naturally and let your ideas take shape.</li>
            <li><b>Build Your Structure</b> — Turn conversations into a clear, compelling outline.</li>
            <li><b>Write In Your Voice</b> — Create chapters that sound like you, not a generic AI.</li>
            <li><b>Refine &amp; Review</b> — Read, edit, and shape your story as it develops.</li>
            <li><b>Prepare Your Book</b> — Bring everything together into a polished manuscript.</li>
            <li><b>Ready To Publish</b> — Take your finished book from idea to the world.</li>
          </ul><span>✓ Built to KDP standards from word one</span>
        </article>
      </div>
      <h3 class="compare-title">Not Just AI-Generated. Actually Yours.</h3>
      <div class="compare-outcomes">
        <div><b>One Connected Experience</b>
          <p>From your first conversation to your finished manuscript.</p>
        </div>
        <div><b>Your Voice, Preserved</b>
          <p>Your experiences stay at the heart of every chapter.</p>
        </div>
        <div><b>One Book, Finally Finished</b>
          <p>Start creating something readers can hold.</p>
        </div>
      </div>
      <p class="compare-note">The difference isn't more AI. It's a better way to use it.</p>
    </section>

    <section class="section languages" id="languages">
      <div class="section-heading">
        <p class="eyebrow">✦ Great stories deserve to be told in every language</p>
        <h2>Your Story Has No Language Barrier. <span class="highlight">Colaba.ai Helps You Turn It Into A Book.</span>
        </h2>
        <p>Most AI tools are built to generate text. Colaba.ai is built to understand your story—whether you express it
          in English, Spanish, Arabic, Hindi, or another language. Tell your story naturally. Build your book
          confidently. Reach readers anywhere.</p>
      </div>
      <div class="language-cards">
        <article><i><img src="assets/images/figma/language-icon.svg" alt=""></i>
          <h3>Speak Your Language</h3>
          <p>No complicated setup. Just start telling your story.</p>
        </article>
        <article><i><img src="assets/images/figma/language-icon.svg" alt=""></i>
          <h3>Write With Your Voice</h3>
          <p>Your ideas become natural, authentic chapters not robotic translations.</p>
        </article>
        <article><i><img src="assets/images/figma/language-icon.svg" alt=""></i>
          <h3>Build The Whole Book</h3>
          <p>From your first conversation to chapters, structure, and a finished manuscript.</p>
        </article>
      </div>
      <div class="language-pills">
        <span><i class="lang-flag"><img src="assets/images/figma/flags/gb.png" alt=""></i><b>English</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/es.png" alt=""></i><b>Spanish</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/de.png" alt=""></i><b>German</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/fr.png" alt=""></i><b>French</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/it.png" alt=""></i><b>Italian</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/br.png" alt=""></i><b>Portuguese</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/nl.png" alt=""></i><b>Dutch</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/jp.png" alt=""></i><b>Japanese</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/kr.png" alt=""></i><b>Korean</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/cn.png" alt=""></i><b>Chinese</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/in.png" alt=""></i><b>Hindi</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/sa.png" alt=""></i><b>Arabic</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/id.png" alt=""></i><b>Indonesian</b></span>
        <span><i class="lang-flag"><img src="assets/images/figma/flags/vn.png" alt=""></i><b>Vietnamese</b></span>
      </div>
      <p class="language-note">One story. One seamless experience. A world of possibilities.</p>
      <img class="language-globe" src="assets/images/globe.png" alt="" aria-hidden="true">
    </section>

    <section class="section testimonials" id="testimonials">
      <div class="section-heading">
        <p class="eyebrow">✦ Great stories deserve to be told in every language</p>
        <h2>Authors Who Switched to <span class="highlight">One Tool</span></h2>
        <p>Used to create lead magnets, guides, and client deliverables. Not demos.</p>
      </div>
      <div class="testimonial-grid">
        <?php
      $quotes = [
        ["I was paying for Atticus, Publisher Rocket, Midjourney, ChatGPT, and a formatter. Now it's just AIWriteBook. I imported my half-finished manuscript, it matched my writing voice perfectly, and I had a KDP-ready EPUB in two weeks. My royalties haven't changed—but my tool costs dropped from $150/month to one subscription.", "Jennifer H.", "KDP Publisher, 12 Books", "J"],
        ["I write 3-4 books a month across two romance series. The voice consistency is what sold me—readers can't tell which chapters I wrote vs. which the AI drafted. Series continuity used to be my biggest headache. Now it just works.", "Amanda C.", "Full-Time Author, 30+ Books", "A"],
        ["I had 40 pages of a novel sitting in Google Docs for two years. I uploaded it, the AI built an outline from what I'd already written, and guided me through finishing the rest. My book is on Amazon now. Still can't believe it.", "Ryan P.", "First-Time Author", "R"],
        ["The KDP metadata tools alone are worth it—keywords, categories, blurb optimization, all built in. But what really matters is that the chapters actually sound like me. I uploaded two of my previous books for voice training and the difference is night and day compared to ChatGPT.", "Karen W.", "KDP Publisher, 8 Books", "K"],
        ["I had years of coaching notes and workshop content but couldn't figure out how to structure it into a book. I uploaded everything, chose the nonfiction template with exercises and reflections, and the AI organized it beautifully—in my voice, not some generic self-help tone.", "Michael B.", "Life Coach & Author", "M"],
        ["The illustrations are what hooked me. My main character looks the same on every single page—that's nearly impossible with other AI art tools. I made a 32-page picture book with consistent characters in one weekend.", "Lisa T.", "Children's Book Creator", "L"]
      ];
      foreach ($quotes as $q) echo '<blockquote><div class="stars">'.str_repeat('<img src="assets/images/figma/testimonial-star.svg?v=2" alt="">',5).'</div><p>“'.htmlspecialchars($q[0]).'”</p><footer><span>'.$q[3].'</span><cite><b>'.htmlspecialchars($q[1]).'</b><small>'.htmlspecialchars($q[2]).'</small></cite></footer></blockquote>';
    ?>
      </div>
      <div class="trust-strip">
        <div><span>▣</span>
          <p><b>Secure Payments</b><small>Powered by Stripe</small></p>
        </div>
        <div><span>✦</span>
          <p><b>AI-Powered</b><small>Advanced AI writing</small></p>
        </div>
        <div><span>●</span>
          <p><b>Trusted Globally</b><small>500+ Active Creators</small></p>
        </div>
      </div>
    </section>

    <section class="section case-study" id="case-study">
      <div class="case-grid">
        <div class="case-intro">
          <p class="eyebrow">✦ Case file #001</p>
          <h2>The First <span class="highlight">Colaba.ai Book Started With A Story.</span> Here's What Happened When It
            Became A Real Book.</h2>
          <p class="case-subtitle">FROM FIRST CONVERSATION TO PUBLISHED BOOK</p>
        </div>
        <div class="case-copy">
          <p class="case-label">CASE FILE — BOOKS #001</p>
          <article><small>// Before</small>
            <h3>The Story Was There. The Book Wasn't.</h3>
            <p>The idea was clear. The experiences were real. The story had something worth saying.<br>But turning years
              of thoughts and memories into a structured, compelling book was another challenge entirely. The blank page
              wasn't the problem. Everything that came after it was.</p>
          </article>
          <article><small>// The build</small>
            <h3>So We Built A Better Way To Write.</h3>
            <p>Instead of asking the author to become a writer, editor, and publishing expert overnight, Colaba.ai
              started with what they already had—their story. Through natural conversations, ideas became chapters.
              Chapters became a manuscript. And the manuscript became a book shaped around the author's own voice and
              experiences. No staring at a blank page. No starting from scratch. Just a better way to begin.</p>
          </article>
          <article><small>// The verdict</small>
            <h3>One Story. One Finished Book. One Author Who Finally Saw It Through.</h3>
            <p>The story moved from an idea to a complete manuscript, ready for the next step toward publication.<br>The
              result wasn't just more words on a page. It was a book that finally existed.</p>
            <div class="case-tags"><span>Story Captured</span><span>Voice Preserved</span><span>Book Completed</span>
            </div>
          </article>
        </div>
      </div>
      <span class="stamp">KDP APPROVED ×2</span>
      <div class="case-footer"><a class="button" href="#start">See what your story can become →</a>
        <p>Every story is different. Results and timelines vary by project—but the process starts the same way: with
          your story.</p>
      </div>
    </section>

    <section class="section tools" id="tools">
      <div class="section-heading">
        <p class="eyebrow">✦ Instant publisher suite</p>
        <h2>30+ Free <span class="highlight">Author Tools</span></h2>
        <p>Powerful AI tools for research, writing, and publishing—all free to use</p>
      </div>
      <div class="tool-grid">
        <article class="tool-wide">
          <header>
            <h3><i>📊</i> Market Research</h3><b>4</b>
          </header>
          <div><span>Niche Finder</span><span>Competition Analyzer</span><span>Trend Spotter</span><span>Royalty
              Calculator</span></div>
        </article>
        <article class="tool-wide">
          <header>
            <h3><i>📝</i> Book Planning</h3><b>5</b>
          </header>
          <div><span>Book Ideas</span><span>Title Generator</span><span>Subtitle Generator</span><span>Outline
              Generator</span><span>Series Planner</span></div>
        </article>
        <article>
          <header>
            <h3><i>✍️</i> Writing Assistance</h3><b>8</b>
          </header>
          <div><span>Story Starter</span><span>Character Creator</span><span>Character Names</span><span>Plot Twist
              Generator</span><span>Dialogue Generator</span><span>Scene Builder</span><span>First Chapter
              Hook</span><span>World Builder</span></div>
        </article>
        <article>
          <header>
            <h3><i>📚</i> KDP Publishing</h3><b>7</b>
          </header>
          <div><span>Keyword Research</span><span>Blurb Generator</span><span>Category Finder</span><span>Author
              Bio</span><span>A+ Content</span><span>Back Matter</span><span>Copyright Page</span></div>
        </article>
        <article>
          <header>
            <h3><i>🎨</i> Visual Assets</h3><b>3</b>
          </header>
          <div><span>Cover Prompt</span><span>Mockup Generator</span><span>Social Graphics</span></div>
        </article>
        <article class="tool-wide">
          <header>
            <h3><i>📢</i> Marketing</h3><b>2</b>
          </header>
          <div><span>Blurb SEO Optimizer</span><span>Email Sequence</span></div>
        </article>
      </div><a class="tools-cta" href="#start"><strong>Ready to scale your publishing workflows?</strong><b>View all
          free tools</b></a>
    </section>

    <section class="section faq">
      <div>
        <p class="eyebrow">✦ Got questions?</p>
        <h2>Frequently Asked Questions</h2><a class="text-link" href="mailto:support@colaba.ai">Still need help? Contact
          support</a>
      </div>
      <div class="accordion">
        <details>
          <summary>Can I use what I create commercially?</summary>
          <p>Yes. You retain ownership and may publish or sell the work you create.</p>
        </details>
        <details>
          <summary>What can I export?</summary>
          <p>Export your manuscript and publishing assets in common production-ready formats.</p>
        </details>
        <details>
          <summary>What is included in the free plan?</summary>
          <p>You can explore the guided story process and free author tools before committing.</p>
        </details>
        <details>
          <summary>Can I cancel anytime?</summary>
          <p>Yes. There are no long-term contracts or cancellation penalties.</p>
        </details>
        <details>
          <summary>Is my content private?</summary>
          <p>Yes. Your stories stay yours and are not used to train AI.</p>
        </details>
      </div>
    </section>

    <section class="section risk" id="pricing">
      <div class="section-heading">
        <p class="eyebrow">✦ A risk-free way to start</p>
        <h2>If You’re Not Ready To Move Forward, <span class="highlight">You Don’t Pay.</span></h2>
        <p>Start with your story. See where it takes you.</p>
      </div>
      <div class="promise"><img src="assets/images/figma/30-days-seal.svg" alt="30 days" class="risk-seal"><small>[ YOUR
          STORY, YOUR DECISION ]</small>
        <h3>Start Without The Pressure</h3>
        <p>You don't need to have your entire book figured out before you begin. Start by sharing your story with
          Colaba.ai. Explore your ideas, shape your direction, and see how your book begins to take form. If it feels
          right, keep going. If it doesn't, you're never locked into a decision you aren't ready to make.</p>
        <div class="promise-checks"><span>✓ No pressure to commit</span><span>✓ Your story stays yours</span><span>✓ See
            the process before you commit</span></div>
        <div class="promise-system">
          <p><small>SYS_ID // COLABA_START</small><b>READY WHEN YOU ARE</b></p>
          <p><strong>Colaba.ai</strong><small>The AI co-author that listens to you.</small></p>
        </div>
      </div>
      <div class="risk-cta"><a class="button" href="#start">Start your story →</a>
        <p>The biggest risk isn't starting. It's letting another great story stay unwritten.</p>
      </div>
    </section>
  </main>

  <footer id="start">
    <div class="footer-figma-wave" aria-hidden="true">
      <img src="assets/images/figma/hero-waves-base.png" alt="">
      <img src="assets/images/figma/hero-waves-overlay.png" alt="">
    </div>
    <canvas id="footer-wave" aria-hidden="true"></canvas>
    <img class="footer-stars-art" src="assets/images/figma/footer-stars-dark.svg" alt="" aria-hidden="true">
    <img class="footer-logo-art footer-logo-light" src="assets/images/figma/footer-logo.svg" alt="" aria-hidden="true">
    <img class="footer-logo-art footer-logo-dark" src="assets/images/figma/footer-logo-dark.svg" alt=""
      aria-hidden="true">
    <div class="footer-content">
      <p class="eyebrow">✦ The ending</p>
      <h2>Every Story Deserves<br><span class="highlight">To Live Forever.</span></h2>
      <p>Start with a sentence today. We'll hand you back a book by the season's end.</p>
      <div class="center-actions"><a class="button" href="mailto:hello@colaba.ai">Start you story →</a><a
          class="text-link" href="mailto:hello@colaba.ai">Speak to a curator</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Duremere AI Solutions. All Rights Reserved.</span><span>Privacy Policy |
        Terms of Service</span></div>
  </footer>
  <script src="script.js?v=figma-20260729-34"></script>
</body>

</html>
