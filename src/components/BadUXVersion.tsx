import { useState } from 'react';

export function BadUXVersion({ onReturnToGoodUX }: { onReturnToGoodUX: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [counter, setCounter] = useState(0);

  return (
    <div className="min-h-screen bg-white relative" style={{ width: '1024px', margin: '0 auto' }}>
      {/* Fixed return button - prominently placed */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={onReturnToGoodUX}
          className="bg-black text-white border-4 border-[#00FF00] px-6 py-3 font-black text-sm shadow-lg hover:bg-[#00FF00] hover:text-black transition-colors"
        >
          ← RETURN TO GOOD UX VERSION
        </button>
      </div>

      {/* Blinking header with terrible contrast */}
      <div className="border-b-2 border-black p-1" style={{ background: '#FFE066', animation: 'blink 2s infinite' }}>
        <style>{`
          @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
          @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
        <div className="overflow-hidden">
          {/* Light yellow text on lighter yellow background - terrible contrast */}
          <div className="whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite', color: '#FFFACD' }}>
            ★★★ WELCOME TO THE OFFICIAL PROFESSIONAL WEBSITE OF VALENTINA BEROIS UX DIRECTOR AND DIGITAL TRANSFORMATION EXPERT ★★★ PLEASE SCROLL DOWN FOR MORE INFORMATION ★★★
          </div>
        </div>
      </div>

      {/* Main content - complete chaos */}
      <table width="100%" cellPadding="0" cellSpacing="0" border={1} style={{ borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            {/* Left sidebar with poor contrast */}
            <td width="20%" valign="top" className="p-1" style={{ background: '#4D94FF' }}>
              <div className="text-center" style={{ fontSize: '7px', color: '#6BA3FF' }}>
                <p className="font-black" style={{ fontSize: '8px', color: '#85B3FF' }}>NAVIGATION MENU</p>
                {/* Links with insufficient contrast - blue on blue */}
                <p style={{ color: '#A3C4FF' }}>Home</p>
                <p style={{ color: '#A3C4FF' }}>About</p>
                <p style={{ color: '#A3C4FF' }}>Work</p>
                <p style={{ color: '#A3C4FF' }}>Contact</p>
                <p style={{ color: '#A3C4FF' }}>Links</p>
                <p style={{ color: '#A3C4FF' }}>Sitemap</p>
                <p style={{ color: '#A3C4FF' }}>FAQ</p>
                <p style={{ color: '#A3C4FF' }}>Legal</p>
                <br/>
                {/* Gray text on light gray background */}
                <div className="p-1" style={{ background: '#E0E0E0', border: '1px solid #999' }}>
                  <p className="font-black" style={{ color: '#B0B0B0' }}>VISITOR COUNT</p>
                  <p className="text-xs" style={{ color: '#C0C0C0' }}>{Math.floor(Math.random() * 99999)}</p>
                </div>
                <br/>
                {/* Light green on lighter green */}
                <div className="p-1" style={{ background: '#B8E6B8', border: '1px solid #90C890' }}>
                  <p className="font-black" style={{ fontSize: '7px', color: '#D0F0D0' }}>SITE AWARDS</p>
                  <p style={{ fontSize: '6px', color: '#E0FFE0' }}>⭐⭐⭐⭐⭐</p>
                  <p style={{ fontSize: '6px', color: '#C8E8C8' }}>Best Site 2024</p>
                </div>
              </div>
            </td>
            <td width="60%" valign="top" className="p-2">
              <center>
                {/* Orange text on yellow background */}
                <h1 className="font-black" style={{ fontSize: '16px', color: '#FFA500', background: '#FFEB99', padding: '2px' }}>VALENTINA BEROIS</h1>
                {/* Red text on pink background */}
                <p style={{ fontSize: '8px', color: '#FF6666', background: '#FFB3B3' }}>UX DIRECTOR | DIGITAL TRANSFORMATION LEADER | PRODUCT STRATEGY EXPERT</p>
                {/* Gray on light gray */}
                <p style={{ fontSize: '7px', color: '#999999', background: '#E8E8E8' }}>Est. 2011 • Based in Germany • Available for Consulting</p>
              </center>
              <hr style={{ borderColor: '#DDDDDD' }}/>
              
              {/* Everything mixed together with poor contrast */}
              <p style={{ fontSize: '9px', textAlign: 'justify', color: '#808080' }}>
                WELCOME! I am a professional user experience director with extensive background in leading digital transformation initiatives for enterprise-level organizations across multiple industries and verticals spanning automotive banking healthcare retail manufacturing technology telecommunications and other sectors. My expertise spans the full spectrum of UX design product strategy team leadership stakeholder management user research information architecture interaction design visual design prototyping testing analytics and more. I have successfully delivered numerous projects for global clients and have been working in this field since 2011 accumulating significant experience across B2B B2C mobile web and native application development contexts.
              </p>

              {/* Table with terrible contrast */}
              <table width="100%" border={1} cellPadding="1" cellSpacing="0" className="text-[8px]" style={{ borderColor: '#DDD' }}>
                <tbody>
                  {/* Yellow text on light yellow */}
                  <tr style={{ background: '#FFF4CC' }}>
                    <td style={{ color: '#FFD700' }}><b>YEARS EXPERIENCE</b></td>
                    <td style={{ color: '#FFD700' }}><b>PROJECTS</b></td>
                    <td style={{ color: '#FFD700' }}><b>CLIENTS</b></td>
                    <td style={{ color: '#FFD700' }}><b>TEAM SIZE</b></td>
                  </tr>
                  <tr style={{ color: '#A9A9A9', background: '#F0F0F0' }}>
                    <td>15+</td>
                    <td>30+</td>
                    <td>Many</td>
                    <td>Various</td>
                  </tr>
                </tbody>
              </table>

              {/* Form with poor contrast */}
              <form onSubmit={(e) => { e.preventDefault(); alert('Error'); }} style={{ border: '2px solid #CCC', padding: '4px', margin: '8px 0', background: '#D4F1D4' }}>
                <p className="font-black" style={{ fontSize: '9px', color: '#90C890' }}>QUICK CONTACT FORM</p>
                {/* Placeholders with low contrast */}
                <input type="text" placeholder="Name*" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', border: '1px solid #DDD', fontSize: '8px', padding: '2px', marginBottom: '2px', background: '#F0F0F0', color: '#A0A0A0' }} />
                <input type="email" placeholder="Email*" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', border: '1px solid #DDD', fontSize: '8px', padding: '2px', marginBottom: '2px', background: '#F0F0F0', color: '#A0A0A0' }} />
                <input type="text" placeholder="Message (min 500 chars)*" style={{ width: '100%', border: '1px solid #DDD', fontSize: '8px', padding: '2px', marginBottom: '2px', background: '#F0F0F0', color: '#A0A0A0' }} />
                {/* Button with poor contrast */}
                <button type="submit" className="font-black" style={{ fontSize: '8px', padding: '2px 4px', background: '#B0B0B0', color: '#D0D0D0', border: '1px solid #999' }}>SUBMIT</button>
                <span style={{ fontSize: '6px', marginLeft: '4px', color: '#BBB' }}>Allow 5-7 business days for response</span>
              </form>

              <p style={{ fontSize: '9px', textAlign: 'justify', color: '#777' }}>
                <b style={{ color: '#999' }}>CURRENT POSITION:</b> HEAD OF USER EXPERIENCE DEPARTMENT at KRONES AG (2023-Present) where I am currently employed in a leadership capacity overseeing all user experience related activities and initiatives responsible for strategic direction of UX department managing team of designers and researchers working closely with product management and engineering teams driving digital transformation initiative establishing design systems and best practices conducting stakeholder workshops leading discovery and research phases defining product strategy and roadmaps ensuring alignment with business objectives and other duties as assigned.
              </p>

              {/* Table with orange on red - colorblind nightmare */}
              <table width="100%" border={1} cellPadding="2" cellSpacing="0" style={{ borderColor: '#CCC' }}>
                <tbody>
                  <tr style={{ background: '#FF8566' }}>
                    <td colSpan={3} className="font-black text-center" style={{ fontSize: '10px', color: '#FFA583' }}>WORK HISTORY DETAILS</td>
                  </tr>
                  <tr style={{ fontSize: '8px', color: '#888', background: '#F5F5F5' }}>
                    <td width="30%"><b style={{ color: '#AAA' }}>2015-2023</b></td>
                    <td width="40%" style={{ color: '#999' }}>UX DIRECTOR POSITION</td>
                    <td width="30%" style={{ color: '#999' }}>INTIVE GMBH</td>
                  </tr>
                  <tr style={{ fontSize: '7px', color: '#BBB', background: '#FAFAFA' }}>
                    <td colSpan={3}>Previously held position of UX Director responsibilities included leading multiple client projects simultaneously managing cross-functional design teams delivering large-scale digital solutions establishing UX processes conducting research creating wireframes presenting to executives mentoring designers business development ensuring quality deliverables</td>
                  </tr>
                  <tr style={{ fontSize: '8px', color: '#888', background: '#F5F5F5' }}>
                    <td><b style={{ color: '#AAA' }}>2011-2015</b></td>
                    <td style={{ color: '#999' }}>SENIOR UX DESIGNER</td>
                    <td style={{ color: '#999' }}>VARIOUS CLIENTS</td>
                  </tr>
                </tbody>
              </table>

              <hr style={{ borderColor: '#E0E0E0' }}/>

              {/* Multi-column text with poor contrast */}
              <div style={{ columns: '2', columnGap: '8px', fontSize: '8px', color: '#909090' }}>
                <p><b style={{ color: '#A8A8A8' }}>SPECIALIZATIONS:</b> Strategy Design Leadership Innovation Transformation User Research Information Architecture Interaction Design Visual Design Prototyping Testing Analytics Team Building Stakeholder Management Agile Lean UX Design Thinking Service Design Systems Thinking Journey Mapping Personas Wireframing Accessibility WCAG Responsive Design Mobile First Progressive Enhancement Design Systems Component Libraries Figma Sketch Adobe XD Photoshop Illustrator InVision Axure Principle Framer HTML CSS JavaScript React Vue Angular TypeScript Git Jira Confluence Miro Mural Notion Airtable and more</p>
              </div>

              {/* Light text on light background */}
              <p style={{ fontSize: '9px', textAlign: 'center', background: '#FFF9CC', border: '2px solid #FFE680', padding: '4px', margin: '8px 0', color: '#FFED4E' }}>
                <b>⚡ PORTFOLIO CATEGORIES ⚡</b><br/>
                <span style={{ fontSize: '7px', color: '#FFEB99' }}>Enterprise B2B Projects (Confidential) | AI Experiments | Time Machine Archive | Case Studies | Process Documentation | Speaking Materials | Publications | Workshop Content | Training Resources</span>
              </p>

              {/* Green on green for colorblind users */}
              <table width="100%" border={1} cellPadding="2" cellSpacing="0" style={{ fontSize: '7px', borderColor: '#90C890' }}>
                <tbody>
                  <tr style={{ background: '#A8D8A8' }}>
                    <td colSpan={2} className="font-black" style={{ color: '#C0E8C0' }}>SPEAKING ENGAGEMENTS AND PRESENTATIONS</td>
                  </tr>
                  <tr style={{ background: '#D0F0D0', color: '#90C890' }}>
                    <td width="25%">Feb 2024</td>
                    <td>World IA Day Stuttgart 2024 - Presented talk about artificial intelligence applications in design</td>
                  </tr>
                  <tr style={{ background: '#E0FFE0', color: '#A0D0A0' }}>
                    <td>Feb 2023</td>
                    <td>World IA Day Barcelona 2023 - Delivered presentation on information architecture best practices</td>
                  </tr>
                  <tr style={{ background: '#D0F0D0', color: '#90C890' }}>
                    <td>2022</td>
                    <td>UX Nordic Conference Copenhagen - Workshop facilitator for service design methodologies</td>
                  </tr>
                  <tr style={{ background: '#E0FFE0', color: '#A0D0A0' }}>
                    <td>Various</td>
                    <td>Numerous other speaking engagements at conferences meetups corporate events educational institutions throughout career</td>
                  </tr>
                </tbody>
              </table>

              <center>
                <p style={{ fontSize: '8px', margin: '8px 0' }}>
                  {/* Low contrast button */}
                  <button onClick={() => setCounter(counter + 1)} className="font-black" style={{ fontSize: '9px', padding: '3px 6px', background: '#FFB380', color: '#FFD4B3', border: '2px solid #FFA366' }}>
                    CLICK HERE
                  </button>
                  <span style={{ color: '#CCC' }}> You clicked {counter} times!</span>
                </p>
              </center>

              <p style={{ fontSize: '8px', background: '#FAFAFA', border: '1px solid #E0E0E0', padding: '3px', color: '#A0A0A0' }}>
                <b style={{ color: '#B8B8B8' }}>PROFESSIONAL ACHIEVEMENTS:</b> Led digital transformation initiatives at multiple Fortune 500 companies • Built and scaled UX teams from ground up • Received positive feedback from clients and stakeholders • Contributed to industry knowledge through speaking and mentorship • Successfully delivered projects on time and within budget • Developed innovative solutions adopted by client organizations • Maintained long-term client relationships • Established UX best practices • Created design frameworks and toolkits • Improved user satisfaction metrics • Increased conversion rates • Reduced development time • Enhanced accessibility • Streamlined workflows • Mentored junior designers
              </p>

              <hr style={{ borderColor: '#E8E8E8' }}/>

              <table width="100%" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td width="50%" valign="top">
                      {/* Light yellow on lighter yellow */}
                      <div className="border p-1" style={{ fontSize: '7px', background: '#FFFACD', borderColor: '#FFED99', color: '#FFE066' }}>
                        <p className="font-black">CONTACT INFORMATION</p>
                        <p>Location: Germany</p>
                        <p>Timezone: CET/CEST</p>
                        <p>Email: Use form</p>
                        <p>LinkedIn: Available</p>
                        <p>Response: 5-7 days</p>
                      </div>
                    </td>
                    <td width="50%" valign="top">
                      {/* Light blue on lighter blue */}
                      <div className="border p-1" style={{ fontSize: '7px', background: '#B3D9FF', borderColor: '#99CCFF', color: '#CCE6FF' }}>
                        <p className="font-black">AVAILABILITY STATUS</p>
                        <p>Currently employed full-time</p>
                        <p>Open to consulting</p>
                        <p>Speaking engagements</p>
                        <p>Workshop facilitation</p>
                        <p>Subject to availability</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Red text on orange background */}
              <marquee style={{ fontSize: '9px', fontWeight: 'bold', margin: '8px 0', background: '#FFB380', padding: '4px', color: '#FF8566' }}>
                ⚡ CURRENTLY ACCEPTING NEW PROJECT INQUIRIES FOR 2026 AND BEYOND ⚡ CONTACT FOR AVAILABILITY AND RATES ⚡
              </marquee>

              <details style={{ fontSize: '8px', border: '1px solid #DDD', padding: '4px', margin: '4px 0', background: '#F8F8F8' }}>
                <summary className="font-black cursor-pointer" style={{ color: '#AAA' }}>FREQUENTLY ASKED QUESTIONS (CLICK TO EXPAND)</summary>
                <p style={{ color: '#999' }}><b style={{ color: '#AAA' }}>Q: What services do you offer?</b><br/>A: Services include but are not limited to UX strategy design leadership team building product strategy user research information architecture interaction design visual design prototyping testing and various other UX-related activities depending on project needs and client requirements.</p>
                <p style={{ color: '#999' }}><b style={{ color: '#AAA' }}>Q: What is your process?</b><br/>A: The process varies depending on project scope and client needs but typically involves discovery phase research phase design phase testing phase and implementation support phase with iterative cycles throughout.</p>
                <p style={{ color: '#999' }}><b style={{ color: '#AAA' }}>Q: What industries do you work with?</b><br/>A: Experience spans multiple industries including automotive banking healthcare retail manufacturing technology telecommunications and others across B2B and B2C contexts.</p>
              </details>

              <p style={{ fontSize: '7px', textAlign: 'center', color: '#BDBDBD' }}>
                This site is best viewed in Internet Explorer 6.0 at 1024x768 resolution • Last updated: 2026-03-04 • Visitors: {Math.floor(Math.random() * 99999)} • Established 2011 • © All Rights Reserved • Terms Apply • Privacy Policy • Cookie Policy • Legal Notice • Sitemap • Webmaster Contact
              </p>

            </td>
            {/* Right sidebar with poor contrast */}
            <td width="20%" valign="top" className="p-1" style={{ background: '#B8E6B8' }}>
              <div style={{ fontSize: '7px' }} className="text-center">
                <p className="font-black" style={{ fontSize: '8px', color: '#D0F0D0' }}>QUICK LINKS</p>
                {/* Light green on lighter green */}
                <p style={{ color: '#C8F0C8' }}>Home</p>
                <p style={{ color: '#C8F0C8' }}>Portfolio</p>
                <p style={{ color: '#C8F0C8' }}>Services</p>
                <p style={{ color: '#C8F0C8' }}>About Me</p>
                <p style={{ color: '#C8F0C8' }}>Blog</p>
                <p style={{ color: '#C8F0C8' }}>Resources</p>
                <p style={{ color: '#C8F0C8' }}>Downloads</p>
                <p style={{ color: '#C8F0C8' }}>Archive</p>
                <br/>
                <div className="border p-1" style={{ background: '#F0F0F0', borderColor: '#DDD' }}>
                  <p className="font-black" style={{ color: '#C0C0C0' }}>NEWS TICKER</p>
                  <p style={{ fontSize: '6px', color: '#D0D0D0' }}>• New project launched<br/>• Speaking at conference<br/>• Article published<br/>• Workshop scheduled</p>
                </div>
                <br/>
                {/* Pink on red - terrible for colorblind */}
                <div className="border p-1" style={{ background: '#FF9999', borderColor: '#FF6666' }}>
                  <p className="font-black" style={{ color: '#FFCCCC' }}>BADGES</p>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    <div className="border flex items-center justify-center text-[6px]" style={{ background: '#FFB3B3', width: '32px', height: '32px', borderColor: '#FF8080', color: '#FFD9D9' }}>UX</div>
                    <div className="border flex items-center justify-center text-[6px]" style={{ background: '#FFB3B3', width: '32px', height: '32px', borderColor: '#FF8080', color: '#FFD9D9' }}>IA</div>
                    <div className="border flex items-center justify-center text-[6px]" style={{ background: '#FFB3B3', width: '32px', height: '32px', borderColor: '#FF8080', color: '#FFD9D9' }}>UI</div>
                    <div className="border flex items-center justify-center text-[6px]" style={{ background: '#FFB3B3', width: '32px', height: '32px', borderColor: '#FF8080', color: '#FFD9D9' }}>SD</div>
                  </div>
                </div>
                <br/>
                <p className="font-black" style={{ fontSize: '6px', color: '#D8F0D8' }}>AFFILIATES</p>
                <p style={{ fontSize: '6px', color: '#E0F8E0' }}>Link Exchange Available</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Bottom reveal section */}
      <div className="border-4 border-black p-6 bg-[#FFD93D] m-4">
        <h2 className="text-3xl font-black mb-4 text-center">THIS IS TRULY TERRIBLE UX! 🔥</h2>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-black mb-2">LAYOUT NIGHTMARES:</h4>
            <ul className="space-y-1 font-bold">
              <li>✗ HTML tables for layout (1990s style)</li>
              <li>✗ Fixed width, zero responsiveness</li>
              <li>✗ Three column layout with sidebars</li>
              <li>✗ Everything crammed together</li>
              <li>✗ Centered text for no reason</li>
              <li>✗ Mixed alignment everywhere</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-2">CONTENT CHAOS:</h4>
            <ul className="space-y-1 font-bold">
              <li>✗ Contact form in middle of content</li>
              <li>✗ No logical flow or sections</li>
              <li>✗ Random information order</li>
              <li>✗ Critical info buried in tables</li>
              <li>✗ Everything mixed together</li>
              <li>✗ Walls of run-on text</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-2">TERRIBLE PATTERNS:</h4>
            <ul className="space-y-1 font-bold">
              <li>✗ Blinking header animation</li>
              <li>✗ Scrolling marquee text</li>
              <li>✗ Visitor counters and badges</li>
              <li>✗ Useless "click here" buttons</li>
              <li>✗ Details/summary accordions</li>
              <li>✗ "Best viewed in IE 6.0" message</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-2">READABILITY HELL:</h4>
            <ul className="space-y-1 font-bold">
              <li>✗ Text from 6px-10px (unreadable!)</li>
              <li>✗ No clear hierarchy at all</li>
              <li>✗ Justified text in narrow columns</li>
              <li>✗ Run-on sentences with no punctuation</li>
              <li>✗ Information in tiny table cells</li>
              <li>✗ Cannot scan or find anything</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white border-2 border-black">
          <p className="text-2xl font-black text-center mb-2">
            GEOCITIES-LEVEL BAD UX
          </p>
          <p className="text-center font-bold">
            Same visual style and colors - but fundamentally broken layout, hierarchy, content structure, and usability. This is what happens when you ignore every UX principle while keeping the UI aesthetic intact.
          </p>
        </div>
        
        {/* Add accessibility violations section */}
        <div className="mt-4 p-4 bg-black text-white border-2 border-white">
          <h4 className="font-black mb-2 text-center text-xl">WCAG & ACCESSIBILITY VIOLATIONS:</h4>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <ul className="space-y-1 font-bold">
              <li>✗ Light yellow on yellow (1.2:1 ratio)</li>
              <li>✗ Light blue on blue (1.5:1 ratio)</li>
              <li>✗ Gray on light gray (1.8:1 ratio)</li>
              <li>✗ Orange on red (colorblind nightmare)</li>
            </ul>
            <ul className="space-y-1 font-bold">
              <li>✗ Green on green (impossible for deuteranopia)</li>
              <li>✗ Pink on red badges (protanopia fails)</li>
              <li>✗ 6px-8px text violates minimum size</li>
              <li>✗ No focus indicators anywhere</li>
            </ul>
            <ul className="space-y-1 font-bold">
              <li>✗ Color as only info indicator</li>
              <li>✗ No alt text or labels</li>
              <li>✗ Marquee/blink = seizure risk</li>
              <li>✗ Fails WCAG AA & AAA completely</li>
            </ul>
          </div>
          <p className="text-center mt-3 text-sm font-black">
            This site would be completely unusable for users with visual impairments, color blindness, or using assistive technologies!
          </p>
        </div>
      </div>
    </div>
  );
}