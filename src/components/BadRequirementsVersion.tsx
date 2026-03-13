import { motion } from "motion/react";
import { TrendingUp, DollarSign, Users, Eye, Clock, Bell, Star, Award, Zap, BarChart3, Activity, Wifi } from "lucide-react";

export function BadRequirementsVersion({ onReturnToGood }: { onReturnToGood: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed return button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={onReturnToGood}
          className="bg-[#FF6B00] text-white border-4 border-black px-6 py-3 font-black text-sm shadow-lg hover:bg-black hover:text-[#FF6B00] transition-colors"
        >
          ← RETURN TO GOOD VERSION
        </button>
      </div>

      {/* Navigation - good design but wrong priorities */}
      <nav className="fixed w-full top-0 z-40 bg-white border-b-4 border-black shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-[#FF6B00] border-4 border-black flex items-center justify-center">
                <span className="text-white font-black text-xl">VB</span>
              </div>
              <div>
                <div className="font-black text-lg">Valentina Berois</div>
                <div className="text-xs font-bold text-neutral-600">Premium Tier User</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-6 items-center"
            >
              <a href="#" className="font-bold text-sm hover:text-[#FF6B00] transition-colors">
                Login
              </a>
              <a href="#" className="font-bold text-sm hover:text-[#FF6B00] transition-colors">
                Subscribe
              </a>
              <a href="#" className="font-bold text-sm hover:text-[#FF6B00] transition-colors">
                Share Price
              </a>
              <button className="bg-[#FFD600] border-4 border-black px-4 py-2 font-black text-xs hover:bg-[#FF6B00] hover:text-white transition-colors">
                UPGRADE TO PRO
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Cookie Banner - stakeholder insisted */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white p-6 border-t-4 border-[#FF6B00]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="font-bold text-sm mb-2">🍪 COOKIE CONSENT REQUIRED</p>
              <p className="text-xs opacity-80">We use 847 cookies to track your behavior, sell your data to third parties, and show you personalized ads. By continuing, you agree to let us monetize your visit. Read our 45-page privacy policy for details.</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-white text-black px-6 py-3 font-black text-xs hover:bg-[#FFD600] transition-colors">
                ACCEPT ALL 847 COOKIES
              </button>
              <button className="border-2 border-white px-6 py-3 font-black text-xs hover:bg-white hover:text-black transition-colors">
                MANAGE (47 PAGES)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero - focused on metrics instead of value */}
      <section className="pt-28 pb-16 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-12 gap-4"
          >
            {/* Analytics Dashboard - "stakeholder wanted to see real-time metrics" */}
            <div className="col-span-12 md:col-span-8">
              <div className="bg-[#0066FF] border-4 border-black p-10">
                <div className="text-white">
                  <div className="inline-block px-3 py-1 bg-[#FFD600] text-black font-black text-xs mb-4">
                    LIVE DASHBOARD
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black leading-none mb-6">
                    REAL-TIME PORTFOLIO ANALYTICS
                  </h1>
                  <p className="text-base leading-relaxed mb-8 opacity-90">
                    Track engagement metrics, conversion rates, and visitor behavior in real-time. Because stakeholders wanted to see the numbers.
                  </p>
                  
                  {/* Vanity Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 border-2 border-white p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs font-bold">PAGE VIEWS</span>
                      </div>
                      <div className="text-3xl font-black">847,293</div>
                      <div className="text-xs mt-1">+23.4% vs last hour</div>
                    </div>
                    <div className="bg-white/10 border-2 border-white p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold">AVG TIME</span>
                      </div>
                      <div className="text-3xl font-black">2:34</div>
                      <div className="text-xs mt-1">-5.2% vs yesterday</div>
                    </div>
                    <div className="bg-white/10 border-2 border-white p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-bold">BOUNCE RATE</span>
                      </div>
                      <div className="text-3xl font-black">34.2%</div>
                      <div className="text-xs mt-1">+1.8% vs last week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monetization Focus */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
              <div className="bg-[#FFD600] border-4 border-black p-6">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-6 h-6" />
                  <div className="text-sm font-black leading-tight">PREMIUM TIER BENEFITS</div>
                </div>
                <div className="text-4xl font-black mb-2">$29.99/mo</div>
                <div className="text-xs font-bold">Unlock exclusive content access</div>
              </div>
              
              <div className="bg-[#00D67A] border-4 border-black p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-6 h-6" />
                  <div className="text-sm font-black leading-tight">REFERRAL PROGRAM</div>
                </div>
                <div className="text-2xl font-black mb-2">EARN $10</div>
                <div className="text-xs font-bold">For each friend who subscribes</div>
              </div>

              <button className="w-full bg-[#FF6B00] hover:bg-[#FF8533] border-4 border-black p-4 font-black text-white transition-colors">
                SUBSCRIBE NOW →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup - blocking content */}
      <section className="py-16 px-6 lg:px-8 bg-[#FFD600] border-y-4 border-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-5xl font-black mb-4">SUBSCRIBE TO CONTINUE</h2>
              <p className="text-lg font-bold mb-6">Join 847,293 subscribers to unlock the rest of this portfolio. We'll send you 3 emails per day.</p>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="flex-1 px-6 py-4 border-4 border-black font-bold"
                />
                <button className="bg-black text-white px-8 py-4 font-black border-4 border-black hover:bg-[#FF6B00] transition-colors">
                  SUBSCRIBE
                </button>
              </div>
              <div className="mt-4 text-xs font-bold opacity-70">
                By subscribing, you agree to receive promotional emails, partner offers, and targeted advertising.
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="border-4 border-black bg-white p-6">
                <div className="font-black text-sm mb-3">WHAT YOU'LL GET:</div>
                <ul className="space-y-2 text-sm font-bold">
                  <li>📧 Daily portfolio updates</li>
                  <li>📊 Weekly analytics reports</li>
                  <li>💰 Exclusive monetization tips</li>
                  <li>🎯 Partner advertisements</li>
                  <li>🔔 Push notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - but wrong focus */}
      <section id="work" className="py-24 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 border-t-4 border-white pt-6 mb-8">
              <span className="font-mono text-xs tracking-[0.3em] text-gray-500">SECTION—03</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2">
                SOCIAL MEDIA FEED
              </h2>
              <p className="text-sm font-bold text-gray-500 mt-4">Real-time updates from all platforms (stakeholder wanted social proof)</p>
            </div>

            {/* Social Media Cards instead of actual work */}
            <div className="col-span-12 md:col-span-4">
              <div className="border-4 border-white p-8 bg-white text-black h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-[#0066FF] border-2 border-black"></div>
                  <div>
                    <div className="font-black text-sm">@valentina_berois</div>
                    <div className="text-xs font-bold text-gray-600">LinkedIn • 2h ago</div>
                  </div>
                </div>
                <p className="text-sm font-bold mb-4">
                  Excited to announce our team reached 10K followers! 🎉 #growth #milestone #leadership
                </p>
                <div className="flex gap-4 text-xs font-black text-gray-600">
                  <span>❤️ 847 LIKES</span>
                  <span>💬 23 COMMENTS</span>
                  <span>🔄 156 SHARES</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="border-4 border-white p-8 bg-[#FFD600] text-black h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-black border-2 border-black"></div>
                  <div>
                    <div className="font-black text-sm">@vberois</div>
                    <div className="text-xs font-bold">Twitter/X • 5h ago</div>
                  </div>
                </div>
                <p className="text-sm font-bold mb-4">
                  Hot take: UX is dead. Long live AI-generated interfaces. 🤖 Thoughts?
                </p>
                <div className="flex gap-4 text-xs font-black">
                  <span>❤️ 2.3K LIKES</span>
                  <span>💬 456 REPLIES</span>
                  <span>🔄 892 RETWEETS</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="border-4 border-white p-8 bg-[#FF6B00] text-white h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-white border-2 border-black"></div>
                  <div>
                    <div className="font-black text-sm">Valentina B.</div>
                    <div className="text-xs font-bold">Instagram • 1d ago</div>
                  </div>
                </div>
                <p className="text-sm font-bold mb-4">
                  Office coffee setup ☕️ #worklife #design #coffee #mondayvibes
                </p>
                <div className="flex gap-4 text-xs font-black">
                  <span>❤️ 5.6K LIKES</span>
                  <span>💬 89 COMMENTS</span>
                  <span>📤 234 SHARES</span>
                </div>
              </div>
            </div>

            {/* Where's the actual work? */}
            <div className="col-span-12 mt-8">
              <div className="border-4 border-[#FF6B00] bg-[#FF6B00]/10 p-8 text-center">
                <p className="text-sm font-black text-[#FF6B00] mb-2">🔒 ACTUAL PROJECT WORK LOCKED</p>
                <p className="text-xs font-bold text-gray-500">Subscribe to Premium ($29.99/mo) to see case studies and portfolio projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification - nobody asked for this */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 border-t-4 border-black pt-6 mb-8">
              <span className="font-mono text-xs tracking-[0.3em] text-gray-500">SECTION—04</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2">
                YOUR ENGAGEMENT SCORE
              </h2>
              <p className="text-sm font-bold text-gray-600 mt-4">Stakeholder wanted to "increase engagement through gamification"</p>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="border-4 border-black bg-white p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-3" />
                <div className="text-4xl font-black mb-2">847</div>
                <div className="text-xs font-black">ENGAGEMENT POINTS</div>
                <div className="mt-4 text-xs font-bold text-gray-600">Earn more by scrolling!</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="border-4 border-black bg-[#FFD600] p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-3" />
                <div className="text-4xl font-black mb-2">Level 3</div>
                <div className="text-xs font-black">PORTFOLIO EXPLORER</div>
                <div className="mt-4 text-xs font-bold">234 points to Level 4</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="border-4 border-black bg-[#00D67A] p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-3" />
                <div className="text-4xl font-black mb-2">12/20</div>
                <div className="text-xs font-black">ACHIEVEMENTS</div>
                <div className="mt-4 text-xs font-bold">Keep visiting for more!</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="border-4 border-black bg-[#FF6B00] text-white p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-3" />
                <div className="text-4xl font-black mb-2">#847</div>
                <div className="text-xs font-black">GLOBAL RANKING</div>
                <div className="mt-4 text-xs font-bold">Top 5% of visitors!</div>
              </div>
            </div>

            {/* Achievement Unlocked Popup */}
            <div className="col-span-12">
              <div className="border-4 border-black bg-[#FFD600] p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black flex items-center justify-center">
                    <Bell className="w-8 h-8 text-[#FFD600]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-2xl mb-2">🎉 ACHIEVEMENT UNLOCKED!</div>
                    <div className="font-bold text-sm">You've spent 2 minutes on this page. Reward: +50 Engagement Points!</div>
                  </div>
                  <button className="bg-black text-white px-6 py-3 font-black text-sm hover:bg-[#FF6B00] transition-colors">
                    CLAIM REWARD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Performance - wrong priorities */}
      <section className="py-24 px-6 lg:px-8 bg-white border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 border-t-4 border-black pt-6 mb-8">
              <span className="font-mono text-xs tracking-[0.3em] text-gray-500">SECTION—05</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2">
                INFRASTRUCTURE KPIs
              </h2>
              <p className="text-sm font-bold text-gray-600 mt-4">"Dev team needs to showcase our technical excellence" - Engineering Manager</p>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="border-4 border-black p-6">
                <Activity className="w-8 h-8 mb-3" />
                <div className="text-xs font-black mb-2 text-gray-600">SERVER UPTIME</div>
                <div className="text-4xl font-black">99.97%</div>
                <div className="text-xs font-bold text-green-600 mt-2">↑ 0.02% from last month</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="border-4 border-black p-6">
                <Wifi className="w-8 h-8 mb-3" />
                <div className="text-xs font-black mb-2 text-gray-600">CDN LATENCY</div>
                <div className="text-4xl font-black">23ms</div>
                <div className="text-xs font-bold text-green-600 mt-2">↓ 5ms from baseline</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="border-4 border-black p-6">
                <BarChart3 className="w-8 h-8 mb-3" />
                <div className="text-xs font-black mb-2 text-gray-600">LOAD TIME</div>
                <div className="text-4xl font-black">0.8s</div>
                <div className="text-xs font-bold text-green-600 mt-2">Core Web Vitals: Green</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="border-4 border-black p-6">
                <Zap className="w-8 h-8 mb-3" />
                <div className="text-xs font-black mb-2 text-gray-600">API CALLS/MIN</div>
                <div className="text-4xl font-black">847K</div>
                <div className="text-xs font-bold text-gray-600 mt-2">Distributed globally</div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="border-4 border-black bg-gray-50 p-8">
                <h3 className="font-black text-2xl mb-4">TECH STACK DETAILS</h3>
                <div className="grid md:grid-cols-3 gap-4 text-xs font-bold">
                  <div>
                    <div className="font-black mb-2 text-gray-600">FRONTEND</div>
                    <div>React 18.2.0 • TypeScript 5.0 • Vite 4.3 • Tailwind CSS 4.0</div>
                  </div>
                  <div>
                    <div className="font-black mb-2 text-gray-600">BACKEND</div>
                    <div>Node.js 20 • Express 4.18 • PostgreSQL 15 • Redis 7.0</div>
                  </div>
                  <div>
                    <div className="font-black mb-2 text-gray-600">INFRASTRUCTURE</div>
                    <div>AWS • CloudFront • S3 • Lambda • RDS • ElastiCache</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-black/10">
                  <p className="text-xs font-bold text-gray-600">Nobody visiting this portfolio cares about these technical details, but stakeholders insisted.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reveal - explaining the problem */}
      <section className="py-24 px-6 lg:px-8 bg-[#FF6B00] text-white border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border-8 border-white p-12">
            <h2 className="text-5xl font-black mb-8 text-center">
              THIS IS BAD REQUIREMENTS! 📋❌
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="border-4 border-white p-6 bg-black">
                <h4 className="font-black mb-4 text-[#FFD600]">WHAT'S WRONG HERE:</h4>
                <ul className="space-y-3 text-sm font-bold">
                  <li>✗ Analytics dashboard instead of actual work</li>
                  <li>✗ Monetization focus over value delivery</li>
                  <li>✗ Newsletter blocking content access</li>
                  <li>✗ Social media feed instead of portfolio</li>
                  <li>✗ Gamification nobody asked for</li>
                  <li>✗ Technical metrics users don't care about</li>
                  <li>✗ Cookie banners and upgrade prompts</li>
                  <li>✗ Features prioritized for stakeholders, not users</li>
                </ul>
              </div>
              
              <div className="border-4 border-white p-6 bg-white text-black">
                <h4 className="font-black mb-4 text-[#FF6B00]">THE REAL PROBLEM:</h4>
                <ul className="space-y-3 text-sm font-bold">
                  <li>✓ Good UX/UI execution</li>
                  <li>✓ Technically well-built</li>
                  <li>✓ Responsive and accessible</li>
                  <li>✓ Fast and performant</li>
                  <li className="pt-4 border-t-2 border-black/20">❌ BUT: Completely wrong priorities!</li>
                  <li>❌ Solving problems users don't have</li>
                  <li>❌ Features for stakeholders, not visitors</li>
                  <li>❌ Hiding actual value behind paywalls</li>
                </ul>
              </div>
            </div>

            <div className="bg-black border-4 border-white p-8 text-center">
              <p className="text-3xl font-black mb-4 text-[#FFD600]">
                BAD REQUIREMENTS = WRONG PRODUCT
              </p>
              <p className="text-lg font-bold max-w-3xl mx-auto">
                No amount of good UX/UI design can save a product built on fundamentally wrong requirements. 
                The problem starts at the requirements phase - not in the design or development phase.
              </p>
              <div className="mt-6 pt-6 border-t-2 border-white/20">
                <p className="text-sm font-bold opacity-80">
                  This demonstrates how stakeholder requirements, vanity metrics, and misaligned priorities can derail a project before design even begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-black text-white border-t-4 border-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white flex items-center justify-center">
                  <span className="text-black font-black text-3xl">V</span>
                </div>
                <div>
                  <div className="font-black text-xl">VALENTINA BEROIS</div>
                  <div className="font-mono text-xs text-gray-500 tracking-[0.2em]">PREMIUM SUBSCRIBER</div>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-xs text-gray-500 mb-2">© 2026 ALL RIGHTS RESERVED</div>
              <div className="font-mono text-xs space-x-4">
                <span className="text-gray-500">VERSION</span>
                <span className="text-[#FFD600]">2.0.0 (BAD REQUIREMENTS DEMO)</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">BUILT FOR</span>
                <span className="text-[#FF6B00]">WRONG GOALS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
