import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Plus } from 'lucide-react';
import Image from 'next/image';
import { sitesAndTools, informationFor, megaMenuContent } from '../data/menuData';

const MainMenu = () => {
  const [isExploreGimsOpen, setIsExploreGimsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [expandedMegaSection, setExpandedMegaSection] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isExploreGimsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExploreGimsOpen]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleMegaSection = (section) => {
    setExpandedMegaSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleMegaMenuClick = (menu) => {
    if (activeMegaMenu === menu) {
      setActiveMegaMenu(null);
      setExpandedMegaSection({});
    } else {
      setActiveMegaMenu(menu);
      setExpandedMegaSection({});
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#033E96]' : 'bg-transparent'}`}
      >
        {/* Extended gradient shade for better visibility */}
        {!isScrolled && (
          <div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-black/80 via-black/40 to-transparent -z-10 pointer-events-none transition-all duration-300" />
        )}

        <div className="border-b border-white border-opacity-20 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="hidden md:flex justify-end items-center gap-3 py-2 text-sm overflow-x-auto">
              {['Examination', 'Alumni', 'Research', 'IQAC', 'Virtual Tour'].map((link) => (
                <a key={link} href="#" className="text-white hover:text-[#FFC300] transition-all whitespace-nowrap px-2 py-1 hover:bg-white/10 rounded">{link}</a>
              ))}
              <button
                onClick={() => setIsExploreGimsOpen(true)}
                className="text-white hover:text-[#FFC300] transition-all whitespace-nowrap px-2 py-1 hover:bg-white/10 rounded text-xs cursor-pointer"
              >
                More +
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-sm flex items-center justify-center relative bg-white">
                    <Image src='/images/main-logo.png' alt="Logo" width={50} height={50} className='w-full h-auto px-2 py-2' />
                  </div>
                  <div>
                    <div className="text-white font-serif tracking-[0.15em] text-lg">GIMS</div>
                    <div className="text-white font-serif tracking-[0.2em] text-xs -mt-1 opacity-90">COLLEGE</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-6">
                {['aboutgims', 'program', 'admission', 'crc'].map((key) => (
                  <button
                    key={key}
                    onClick={() => handleMegaMenuClick(key)}
                    className={`text-white hover:text-[#FFC300] transition-colors text-xl font-bold tracking-wide cursor-pointer ${activeMegaMenu === key ? 'text-[#FFC300]' : ''}`}
                  >
                    {megaMenuContent[key].title}
                  </button>
                ))}
                <button className="p-2 text-white hover:text-[#FFC300] transition-colors cursor-pointer"><Search className="w-5 h-5" /></button>
              </div>

              <button onClick={() => setIsExploreGimsOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 hover:bg-[#FFC300] hover:text-[#033E96] transition-all rounded font-semibold text-sm cursor-pointer">
                <Menu className="w-4 h-4" /><span className="hidden sm:inline">Explore</span> GIMS
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeMegaMenu && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-30 mt-[118px]" onClick={() => setActiveMegaMenu(null)} />
          <div className="fixed top-[118px] left-0 right-0 z-40 bg-white shadow-2xl transition-all duration-300">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <h2 className="text-4xl font-serif text-[#822433] relative inline-block">
                    {megaMenuContent[activeMegaMenu].title}
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC300]"></span>
                  </h2>
                </div>

                <div className="lg:col-span-3">
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1 space-y-4">
                      {megaMenuContent[activeMegaMenu].sections.filter((_, index) => index % 2 === 0).map((section, originalIndex) => {
                        const index = originalIndex * 2;
                        const uniqueId = `${activeMegaMenu}-${index}`;
                        const isExpanded = expandedMegaSection[uniqueId];
                        return (
                          <div key={index} className="border-b border-gray-200 pb-3">
                            {section.type === 'link' ? (
                              <a
                                href={section.url}
                                className="flex items-center py-2 text-gray-900 hover:text-[#822433] transition-all group relative pl-0 hover:pl-8"
                              >
                                <span className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#822433] text-2xl font-light">
                                  →
                                </span>
                                <span className="font-bold text-lg">{section.title}</span>
                              </a>
                            ) : (
                              <div>
                                <button
                                  onClick={() => toggleMegaSection(uniqueId)}
                                  className={`w-full flex items-center justify-between py-2 group transition-all duration-300 relative cursor-pointer ${isExpanded ? 'text-[#822433] pl-8' : 'text-gray-900 hover:text-[#822433] pl-0 hover:pl-8'}`}
                                >
                                  <span className={`absolute left-0 transition-all duration-300 text-[#822433] text-2xl font-light ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                    →
                                  </span>
                                  <span className="font-bold text-lg">{section.title}</span>
                                  <div className="text-[#822433] font-bold text-xl transition-transform duration-300">
                                    {isExpanded ? '—' : '+'}
                                  </div>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-4 mb-2' : 'max-h-0 opacity-0'}`}>
                                  <div className="pl-8 space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                      <a
                                        key={itemIndex}
                                        href={item.url}
                                        className="block text-gray-600 hover:text-[#822433] transition-colors"
                                      >
                                        {item.name}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex-1 space-y-4">
                      {megaMenuContent[activeMegaMenu].sections.filter((_, index) => index % 2 === 1).map((section, originalIndex) => {
                        const index = originalIndex * 2 + 1;
                        const uniqueId = `${activeMegaMenu}-${index}`;
                        const isExpanded = expandedMegaSection[uniqueId];
                        return (
                          <div key={index} className="border-b border-gray-200 pb-3">
                            {section.type === 'link' ? (
                              <a
                                href={section.url}
                                className="flex items-center py-2 text-gray-900 hover:text-[#822433] transition-all group relative pl-0 hover:pl-8"
                              >
                                <span className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#822433] text-2xl font-light">
                                  →
                                </span>
                                <span className="font-bold text-lg">{section.title}</span>
                              </a>
                            ) : (
                              <div>
                                <button
                                  onClick={() => toggleMegaSection(uniqueId)}
                                  className={`w-full flex items-center justify-between py-2 group transition-all duration-300 relative cursor-pointer ${isExpanded ? 'text-[#822433] pl-8' : 'text-gray-900 hover:text-[#822433] pl-0 hover:pl-8'}`}
                                >
                                  <span className={`absolute left-0 transition-all duration-300 text-[#822433] text-2xl font-light ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                    →
                                  </span>
                                  <span className="font-bold text-lg">{section.title}</span>
                                  <div className="text-[#822433] font-bold text-xl transition-transform duration-300">
                                    {isExpanded ? '—' : '+'}
                                  </div>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-4 mb-2' : 'max-h-0 opacity-0'}`}>
                                  <div className="pl-8 space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                      <a
                                        key={itemIndex}
                                        href={item.url}
                                        className="block text-gray-600 hover:text-[#822433] transition-colors"
                                      >
                                        {item.name}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {isExploreGimsOpen && (
        <div className="fixed inset-0 z-50 bg-[#033E96] overflow-y-auto">
          <div className="min-h-screen">
            <div className="bg-[#033E96] border-b border-[#0451C4]">
              <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                  <div className="rounded-sm flex items-center justify-center relative bg-white">
                    <Image src='/images/main-logo.png' alt="Logo" width={50} height={50} className='w-full h-auto px-2 py-2' />
                  </div>
                  <div>
                    <div className="text-white font-serif tracking-[0.15em] text-lg">GIMS</div>
                    <div className="text-white font-serif tracking-[0.2em] text-xs -mt-1 opacity-90">COLLEGE</div>
                  </div>
                </a>
                <button
                  onClick={() => setIsExploreGimsOpen(false)}
                  className="text-white hover:text-[#FFC300] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                  <span className="text-sm font-medium">Close</span>
                </button>
              </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8">
              {/* Mobile Layout */}
              <div className="lg:hidden space-y-8">
                {/* Search First */}
                <div>
                  <h2 className="text-white text-2xl font-serif mb-6">Search GIMS.net.in</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-4 pr-12 rounded-lg border-2 border-gray-300 focus:border-[#FFC300] focus:outline-none text-lg"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                      <Search className="w-6 h-6 text-[#033E96]" />
                    </button>
                  </div>
                </div>

                {/* Accordions Second */}
                <div className="space-y-1">
                  {[
                    { title: 'Academics', items: ['Degrees & Programs', 'Graduate and Education Programs', 'Signature Programs', 'Academic Support', 'Academic Calendar', 'Academic Projects', 'GIMS Legacy'] },
                    { title: 'Admissions & Aid', items: ['Admissions Process', 'Financial Aid', 'Scholarships', 'Tuition & Fees'] },
                    { title: 'News & Events', items: ['Latest News', 'Campus Events', 'Academic Calendar', 'Press Releases'] },
                    { title: 'About', items: ['History', 'Mission & Vision', 'Leadership', 'Campus Tour'] },
                    { title: 'Student Life', items: ['Campus Life', 'Housing', 'Dining', 'Activities', 'Athletics'] }
                  ].map((section, index) => {
                    const sectionKey = section.title.toLowerCase().replace(/\s+/g, '');
                    const isExpanded = expandedSection === sectionKey;
                    return (
                      <div key={index} className="border border-white/30 rounded-none overflow-hidden">
                        <button
                          onClick={() => toggleSection(sectionKey)}
                          className={`w-full flex items-center justify-between px-4 py-4 text-white transition-all duration-300 group relative cursor-pointer ${isExpanded ? 'bg-white/10' : 'hover:bg-white/5'
                            }`}
                        >
                          <div className="flex items-center">
                            <span className={`absolute left-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFC300] text-xl font-light mr-3 ${isExpanded ? 'opacity-0' : ''
                              }`}>→</span>
                            <span className={`font-bold text-lg text-left transition-all duration-300 ${isExpanded ? 'pl-0' : 'group-hover:pl-8'
                              }`}>{section.title}</span>
                          </div>
                          <div className={`transition-all duration-300 ${isExpanded
                            ? 'w-8 h-8 bg-[#FFC300] rounded-full flex items-center justify-center'
                            : 'text-[#FFC300] font-bold text-2xl group-hover:bg-[#FFC300] group-hover:text-[#033E96] group-hover:w-8 group-hover:h-8 group-hover:rounded-full group-hover:flex group-hover:items-center group-hover:justify-center'
                            }`}>
                            {isExpanded ? (
                              <span className="text-[#033E96] font-bold text-lg">—</span>
                            ) : (
                              <span className="group-hover:text-[#033E96]">+</span>
                            )}
                          </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                          <div className="bg-white/5 px-4 py-4 space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <a
                                key={itemIndex}
                                href="#"
                                className="group flex items-center text-white hover:text-[#FFC300] transition-all py-2 text-base pl-8 relative"
                              >
                                <span className="absolute left-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFC300] text-lg">→</span>
                                <span className="group-hover:pl-6 transition-all duration-300">{item}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Information For Third */}
                <div>
                  <h2 className="text-white text-xl font-serif mb-6">Information for...</h2>
                  <div className="space-y-1">
                    {informationFor.map((info, index) => (
                      <a
                        key={index}
                        href="#"
                        className="group flex items-center text-white hover:text-[#FFC300] transition-all py-3 border-b border-white/20 hover:border-[#FFC300] relative pl-0 hover:pl-6"
                      >
                        <span className="absolute left-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFC300] text-xl font-light">→</span>
                        <span className="text-base">{info}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Sites and Tools Last */}
                <div>
                  <div className="bg-[#022D6F] rounded-3xl p-6 mb-6">
                    <h2 className="text-white text-xl font-serif mb-4">Sites and Tools</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {sitesAndTools.map((tool, index) => (
                        <a
                          key={index}
                          href={tool.url}
                          className="flex flex-col items-center justify-center p-3 bg-transparent hover:bg-white/10 rounded-lg transition-all text-center group min-h-[80px]"
                        >
                          <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                            {tool.icon === 'my' ? (
                              <span className="text-[#FFC300] italic font-serif text-lg">my</span>
                            ) : (
                              <span className="text-[#FFC300]">{tool.icon}</span>
                            )}
                          </div>
                          <div className="text-white text-xs font-medium text-center leading-tight">{tool.name}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <a href="#" className="text-white hover:text-[#FFC300] hover:underline">Resources & Help Center</a>
                    <a href="#" className="text-white hover:text-[#FFC300] hover:underline">Employee Directory</a>
                    <a href="#" className="text-white hover:text-[#FFC300] hover:underline">Offices & Services</a>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className='col-span-1'>
                  <div className="bg-[#022D6F] rounded-3xl p-6 mb-6">
                    <h2 className="text-white text-xl font-serif mb-4">Sites and Tools</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {sitesAndTools.map((tool, index) => (
                        <a
                          key={index}
                          href={tool.url}
                          className="flex flex-col items-center justify-center p-3 bg-transparent hover:bg-white/10 rounded-lg transition-all text-center group min-h-[80px]"
                        >
                          <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                            {tool.icon === 'my' ? (
                              <span className="text-[#FFC300] italic font-serif text-lg">my</span>
                            ) : (
                              <span className="text-[#FFC300]">{tool.icon}</span>
                            )}
                          </div>
                          <div className="text-white text-xs font-medium text-center leading-tight">{tool.name}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <a href="#" className="text-white hover:text-[#FFC300] hover:underline">Resources & Help Center</a>
                    <a href="#" className="text-white hover:text-[#FFC300] hover:underline">Employee Directory</a>
                    <a href="#" className="text-white hover:text-[#FFC300] hover:underline">Offices & Services</a>
                  </div>
                </div>

                <div className='col-span-2'>
                  <div className="mb-8">
                    <h2 className="text-white text-3xl font-serif mb-6">Search GIMS.net.in</h2>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-4 pr-12 rounded-lg border-2 border-gray-300 focus:border-[#FFC300] focus:outline-none text-lg"
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                        <Search className="w-6 h-6 text-[#033E96]" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-white text-xl lg:text-2xl font-serif mb-6">Information for...</h2>
                      <div className="space-y-1">
                        {informationFor.map((info, index) => (
                          <a
                            key={index}
                            href="#"
                            className="group flex items-center text-white hover:text-[#FFC300] transition-all py-3 border-b border-white/20 hover:border-[#FFC300] relative pl-0 hover:pl-6"
                          >
                            <span className="absolute left-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFC300] text-xl font-light">→</span>
                            <span className="text-base lg:text-lg">{info}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      {[
                        { title: 'Academics', items: ['Degrees & Programs', 'Graduate and Education Programs', 'Signature Programs', 'Academic Support', 'Academic Calendar', 'Academic Projects', 'GIMS Legacy'] },
                        { title: 'Admissions & Aid', items: ['Admissions Process', 'Financial Aid', 'Scholarships', 'Tuition & Fees'] },
                        { title: 'News & Events', items: ['Latest News', 'Campus Events', 'Academic Calendar', 'Press Releases'] },
                        { title: 'About', items: ['History', 'Mission & Vision', 'Leadership', 'Campus Tour'] },
                        { title: 'Student Life', items: ['Campus Life', 'Housing', 'Dining', 'Activities', 'Athletics'] }
                      ].map((section, index) => {
                        const sectionKey = section.title.toLowerCase().replace(/\s+/g, '');
                        const isExpanded = expandedSection === sectionKey;
                        return (
                          <div key={index} className="border border-white/30 rounded-none overflow-hidden">
                            <button
                              onClick={() => toggleSection(sectionKey)}
                              className={`w-full flex items-center justify-between px-4 lg:px-6 py-4 text-white transition-all duration-300 group relative cursor-pointer ${isExpanded ? 'bg-white/10' : 'hover:bg-white/5'
                                }`}
                            >
                              <div className="flex items-center">
                                <span className={`absolute left-4 lg:left-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFC300] text-xl font-light mr-3 ${isExpanded ? 'opacity-0' : ''
                                  }`}>→</span>
                                <span className={`font-bold text-lg lg:text-xl text-left transition-all duration-300 ${isExpanded ? 'pl-0' : 'group-hover:pl-8'
                                  }`}>{section.title}</span>
                              </div>
                              <div className={`transition-all duration-300 ${isExpanded
                                ? 'w-8 h-8 bg-[#FFC300] rounded-full flex items-center justify-center'
                                : 'text-[#FFC300] font-bold text-2xl group-hover:bg-[#FFC300] group-hover:text-[#033E96] group-hover:w-8 group-hover:h-8 group-hover:rounded-full group-hover:flex group-hover:items-center group-hover:justify-center'
                                }`}>
                                {isExpanded ? (
                                  <span className="text-[#033E96] font-bold text-lg">—</span>
                                ) : (
                                  <span className="group-hover:text-[#033E96]">+</span>
                                )}
                              </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                              }`}>
                              <div className="bg-white/5 px-4 lg:px-6 py-4 space-y-3">
                                {section.items.map((item, itemIndex) => (
                                  <a
                                    key={itemIndex}
                                    href="#"
                                    className="group flex items-center text-white hover:text-[#FFC300] transition-all py-2 text-base lg:text-lg pl-8 relative"
                                  >
                                    <span className="absolute left-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFC300] text-lg">→</span>
                                    <span className="group-hover:pl-6 transition-all duration-300">{item}</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="bg-white rounded-lg px-6 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-b from-[#FFC300] to-[#FFD700] rounded-full flex items-center justify-center">
                        <span className="text-[#033E96] text-lg font-bold">🦁</span>
                      </div>
                      <span className="font-bold text-[#033E96] text-lg">Athletics</span>
                    </div>
                    <div className="text-white text-center lg:text-right">
                      <div className="font-serif italic text-2xl lg:text-3xl">GIMS forward</div>
                      <div className="text-sm opacity-75 tracking-wider">THE CAMPAIGN FOR GIMS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainMenu;