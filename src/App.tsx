import React from 'react';

const MsaaFlowchart = () => {
  return (
    <div className="w-full h-screen overflow-auto bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">M-SAA Report Preparation Process</h1>
        <p className="text-center text-sm text-gray-600 mb-6">ALS Portfolio Monthly/Quarterly Workflow</p>

        <svg viewBox="0 0 1400 2600" className="w-full border-2 border-gray-300 rounded-lg bg-white shadow-lg">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
            </marker>

            <linearGradient id="sectionGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="sectionGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="sectionGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="sectionGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fce7f3" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <rect x="50" y="50" width="1300" height="290" fill="url(#sectionGrad1)" stroke="#3b82f6" strokeWidth="2" rx="8" />
          <text x="70" y="80" fontSize="14" fontWeight="bold" fill="#1e40af">STEP 1: PREPARATION</text>

          <rect x="50" y="390" width="1300" height="580" fill="url(#sectionGrad2)" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="70" y="420" fontSize="14" fontWeight="bold" fill="#92400e">STEP 2A: GENERAL STATS (Clients Served & Hours of Care)</text>

          <rect x="50" y="1020" width="1300" height="690" fill="url(#sectionGrad3)" stroke="#6366f1" strokeWidth="2" rx="8" />
          <text x="70" y="1050" fontSize="14" fontWeight="bold" fill="#3730a3">STEP 2B: RESIDENT DAYS (Special Procedure)</text>

          <rect x="50" y="1760" width="1300" height="420" fill="url(#sectionGrad4)" stroke="#ec4899" strokeWidth="2" rx="8" />
          <text x="70" y="1790" fontSize="14" fontWeight="bold" fill="#831843">STEP 2C: ALS+CC HOURS (Second Special Procedure)</text>

          <ellipse cx="700" cy="120" rx="120" ry="40" fill="#10b981" stroke="#065f46" strokeWidth="2" />
          <text x="700" y="130" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">START</text>

          <line x1="700" y1="160" x2="700" y2="190" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="580" y="190" width="240" height="60" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" rx="4" />
          <text x="700" y="215" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Locate M-SAA Excel</text>
          <text x="700" y="233" textAnchor="middle" fontSize="12" fill="white">Spreadsheet in</text>
          <text x="700" y="248" textAnchor="middle" fontSize="12" fill="white">Community Care Unit</text>

          <line x1="700" y1="250" x2="700" y2="280" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="580" y="280" width="240" height="50" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" rx="4" />
          <text x="700" y="302" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Select Portfolio:</text>
          <text x="700" y="318" textAnchor="middle" fontSize="12" fill="white">Click ALS Button</text>

          <line x1="700" y1="330" x2="700" y2="360" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <line x1="700" y1="360" x2="700" y2="450" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="580" y="450" width="240" height="50" fill="#f59e0b" stroke="#92400e" strokeWidth="2" rx="4" />
          <text x="700" y="472" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Login to AlayaCare</text>
          <text x="700" y="488" textAnchor="middle" fontSize="12" fill="white">(SSO Credentials)</text>

          <line x1="700" y1="500" x2="700" y2="530" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="550" y="530" width="300" height="70" fill="#f59e0b" stroke="#92400e" strokeWidth="2" rx="4" />
          <text x="700" y="550" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Navigate to ALS Dashboard:</text>
          <text x="700" y="566" textAnchor="middle" fontSize="12" fill="white">Dashboard → Data Exploration</text>
          <text x="700" y="582" textAnchor="middle" fontSize="12" fill="white">→ Group → ALS micro trainings</text>
          <text x="700" y="598" textAnchor="middle" fontSize="12" fill="white">→ ALS - program dashboard</text>

          <line x1="700" y1="600" x2="700" y2="630" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <path d="M 700 630 L 870 690 L 700 750 L 530 690 Z" fill="#dc2626" stroke="#7f1d1d" strokeWidth="2" />
          <text x="700" y="680" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">⚠️ CRITICAL:</text>
          <text x="700" y="700" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Manual Date Filter</text>

          <line x1="700" y1="750" x2="700" y2="780" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="550" y="780" width="300" height="70" fill="#fbbf24" stroke="#92400e" strokeWidth="2" rx="4" />
          <text x="700" y="798" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Set YTD Date Range:</text>
          <text x="700" y="814" textAnchor="middle" fontSize="12" fill="#000">Start: April 1 (Fiscal Year)</text>
          <text x="700" y="830" textAnchor="middle" fontSize="12" fill="#000">End: Last Day of Previous Month</text>
          <text x="700" y="846" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Click Reload/Refresh</text>

          <line x1="700" y1="850" x2="700" y2="890" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <path d="M 550 890 L 850 890 L 870 930 L 830 930 L 830 960 L 570 960 L 570 930 L 530 930 Z" fill="#fde68a" stroke="#92400e" strokeWidth="2" />
          <text x="700" y="910" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Extract Data:</text>
          <text x="700" y="926" textAnchor="middle" fontSize="12" fill="#000">• Individual Served (Clients)</text>
          <text x="700" y="942" textAnchor="middle" fontSize="12" fill="#000">• Hours of Care</text>
          <text x="700" y="958" textAnchor="middle" fontSize="12" fill="#000">(RPOC, 25/45 ST, OLEX, STEX)</text>

          <line x1="700" y1="960" x2="700" y2="990" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <path d="M 580 990 L 820 990 L 700 1060 Z" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
          <text x="700" y="1015" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Numbers Higher</text>
          <text x="700" y="1035" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Than Previous?</text>

          <line x1="820" y1="1025" x2="1050" y2="1025" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="900" y="1017" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#059669">YES</text>

          <rect x="1050" y="995" width="240" height="60" fill="#10b981" stroke="#065f46" strokeWidth="2" rx="4" />
          <text x="1170" y="1017" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Manually Enter Data</text>
          <text x="1170" y="1033" textAnchor="middle" fontSize="12" fill="white">into M-SAA Excel</text>
          <text x="1170" y="1049" textAnchor="middle" fontSize="12" fill="white">(ALS Portfolio Section)</text>

          <line x1="580" y1="1025" x2="350" y2="1025" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="430" y="1017" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">NO</text>
          <line x1="350" y1="1025" x2="350" y2="815" stroke="#dc2626" strokeWidth="2" />
          <line x1="350" y1="815" x2="550" y2="815" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="250" y="920" fontSize="12" fontWeight="bold" fill="#dc2626">Re-check</text>
          <text x="250" y="935" fontSize="12" fontWeight="bold" fill="#dc2626">data</text>

          <line x1="1170" y1="1055" x2="1170" y2="1145" stroke="#374151" strokeWidth="2" />
          <line x1="1170" y1="1145" x2="700" y2="1145" stroke="#374151" strokeWidth="2" />
          <line x1="700" y1="1145" x2="700" y2="1175" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="550" y="1175" width="300" height="70" fill="#6366f1" stroke="#3730a3" strokeWidth="2" rx="4" />
          <text x="700" y="1193" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Navigate to Resident Days:</text>
          <text x="700" y="1209" textAnchor="middle" fontSize="12" fill="white">Scroll up → Click</text>
          <text x="700" y="1225" textAnchor="middle" fontSize="12" fill="white">"ALS&CC resident days New"</text>
          <text x="700" y="1241" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">⚠️ Don't use main dashboard card</text>

          <line x1="700" y1="1245" x2="700" y2="1280" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="550" y="1280" width="300" height="60" fill="#818cf8" stroke="#3730a3" strokeWidth="2" rx="4" />
          <text x="700" y="1300" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Scroll to bottom → Find table</text>
          <text x="700" y="1316" textAnchor="middle" fontSize="12" fill="white">"new tile" → Click "Explore"</text>
          <text x="700" y="1332" textAnchor="middle" fontSize="12" fill="white">Click Settings (gear) → Edit</text>

          <line x1="700" y1="1340" x2="700" y2="1370" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <path d="M 700 1370 L 900 1450 L 700 1530 L 500 1450 Z" fill="#dc2626" stroke="#7f1d1d" strokeWidth="2" />
          <text x="700" y="1435" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">⚠️ OVERRIDE DATE LOGIC</text>
          <text x="700" y="1455" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Set BOTH columns to</text>
          <text x="700" y="1475" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">same YTD range</text>

          <line x1="700" y1="1530" x2="700" y2="1570" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="520" y="1570" width="360" height="80" fill="#a5b4fc" stroke="#3730a3" strokeWidth="2" rx="4" />
          <text x="700" y="1588" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Set Date Ranges:</text>
          <text x="700" y="1604" textAnchor="middle" fontSize="12" fill="#000">"Status from Date": April 1 to Last Day Prev Month</text>
          <text x="700" y="1620" textAnchor="middle" fontSize="12" fill="#000">"to Date": April 1 to Last Day Prev Month</text>
          <text x="700" y="1636" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#000">Click "Run" button (right corner)</text>

          <line x1="700" y1="1650" x2="700" y2="1680" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <path d="M 550 1680 L 850 1680 L 870 1720 L 830 1720 L 830 1750 L 570 1750 L 570 1720 L 530 1720 Z" fill="#c7d2fe" stroke="#3730a3" strokeWidth="2" />
          <text x="700" y="1700" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Extract Resident Days:</text>
          <text x="700" y="1716" textAnchor="middle" fontSize="12" fill="#000">Find "total days active" column</text>
          <text x="700" y="1732" textAnchor="middle" fontSize="12" fill="#000">Take final cumulative number</text>
          <text x="700" y="1748" textAnchor="middle" fontSize="12" fill="#000">(biggest at bottom)</text>

          <line x1="850" y1="1715" x2="1050" y2="1715" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="1050" y="1685" width="240" height="60" fill="#10b981" stroke="#065f46" strokeWidth="2" rx="4" />
          <text x="1170" y="1707" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Manually Enter</text>
          <text x="1170" y="1723" textAnchor="middle" fontSize="12" fill="white">Resident Days Data</text>
          <text x="1170" y="1739" textAnchor="middle" fontSize="12" fill="white">into M-SAA Excel</text>

          <line x1="1170" y1="1745" x2="1170" y2="1865" stroke="#374151" strokeWidth="2" />
          <line x1="1170" y1="1865" x2="700" y2="1865" stroke="#374151" strokeWidth="2" />
          <line x1="700" y1="1865" x2="700" y2="1895" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="550" y="1895" width="300" height="70" fill="#ec4899" stroke="#831843" strokeWidth="2" rx="4" />
          <text x="700" y="1913" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Navigate to ALS+CC Hours:</text>
          <text x="700" y="1929" textAnchor="middle" fontSize="12" fill="white">Data Exploration → Group</text>
          <text x="700" y="1945" textAnchor="middle" fontSize="12" fill="white">→ Scroll down to</text>
          <text x="700" y="1961" textAnchor="middle" fontSize="12" fill="white">"ALS+CC Hours of Care"</text>

          <line x1="700" y1="1965" x2="700" y2="2000" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="550" y="2000" width="300" height="70" fill="#f9a8d4" stroke="#831843" strokeWidth="2" rx="4" />
          <text x="700" y="2018" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Set YTD Date Range:</text>
          <text x="700" y="2034" textAnchor="middle" fontSize="12" fill="#000">Start: April 1 (Fiscal Year)</text>
          <text x="700" y="2050" textAnchor="middle" fontSize="12" fill="#000">End: Last Day of Previous Month</text>
          <text x="700" y="2066" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Click Reload (may be slow)</text>

          <line x1="700" y1="2070" x2="700" y2="2110" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <path d="M 550 2110 L 850 2110 L 870 2150 L 830 2150 L 830 2180 L 570 2180 L 570 2150 L 530 2150 Z" fill="#fbcfe8" stroke="#831843" strokeWidth="2" />
          <text x="700" y="2130" textAnchor="middle" fontSize="12" fontWeight="600" fill="#000">Extract Data:</text>
          <text x="700" y="2146" textAnchor="middle" fontSize="12" fill="#000">Scroll down → Find</text>
          <text x="700" y="2162" textAnchor="middle" fontSize="12" fill="#000">"Total Hours" figure</text>
          <text x="700" y="2178" textAnchor="middle" fontSize="12" fill="#000">(ALS+CC combined)</text>

          <line x1="850" y1="2145" x2="1050" y2="2145" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <rect x="1050" y="2115" width="240" height="60" fill="#10b981" stroke="#065f46" strokeWidth="2" rx="4" />
          <text x="1170" y="2137" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Manually Enter</text>
          <text x="1170" y="2153" textAnchor="middle" fontSize="12" fill="white">ALS+CC Total Hours</text>
          <text x="1170" y="2169" textAnchor="middle" fontSize="12" fill="white">into M-SAA Excel</text>

          <line x1="1170" y1="2175" x2="1170" y2="2265" stroke="#374151" strokeWidth="2" />
          <line x1="1170" y1="2265" x2="700" y2="2265" stroke="#374151" strokeWidth="2" />
          <line x1="700" y1="2265" x2="700" y2="2295" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <path d="M 580 2295 L 820 2295 L 700 2365 Z" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
          <text x="700" y="2320" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#000">All Data Meets</text>
          <text x="700" y="2335" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#000">Growth Mandate?</text>
          <text x="700" y="2350" textAnchor="middle" fontSize="12" fill="#000">(Higher than previous)</text>

          <line x1="580" y1="2330" x2="300" y2="2330" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="400" y="2322" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">NO</text>

          <rect x="120" y="2303" width="180" height="55" fill="#fca5a5" stroke="#991b1b" strokeWidth="2" rx="4" />
          <text x="210" y="2325" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#000">REVIEW & VERIFY</text>
          <text x="210" y="2341" textAnchor="middle" fontSize="12" fill="#000">Check data sources</text>
          <text x="210" y="2356" textAnchor="middle" fontSize="12" fill="#000">and date filters</text>

          <line x1="700" y1="2365" x2="700" y2="2405" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="720" y="2385" textAnchor="start" fontSize="12" fontWeight="bold" fill="#059669">YES</text>

          <ellipse cx="700" cy="2445" rx="140" ry="40" fill="#10b981" stroke="#065f46" strokeWidth="2" />
          <text x="700" y="2445" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">REPORT COMPLETE</text>
          <text x="700" y="2463" textAnchor="middle" fontSize="12" fill="white">M-SAA Excel Ready for Submission</text>

          <g transform="translate(100, 2520)">
            <text x="0" y="0" fontSize="12" fontWeight="bold" fill="#374151">LEGEND:</text>
            <ellipse cx="80" cy="-3" rx="30" ry="12" fill="#10b981" stroke="#065f46" strokeWidth="1" />
            <text x="120" y="2" fontSize="12" fill="#374151">Start/End</text>

            <rect x="210" y="-10" width="40" height="16" fill="#3b82f6" stroke="#1e40af" strokeWidth="1" rx="2" />
            <text x="260" y="2" fontSize="12" fill="#374151">Process</text>

            <path d="M 350 -10 L 390 -2 L 350 6 L 310 -2 Z" fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
            <text x="400" y="2" fontSize="12" fill="#374151">Decision</text>

            <path d="M 480 -10 L 520 -10 L 525 6 L 515 6 L 515 8 L 485 8 L 485 6 L 475 6 Z" fill="#fde68a" stroke="#92400e" strokeWidth="1" />
            <text x="535" y="2" fontSize="12" fill="#374151">Data/Document</text>

            <path d="M 690 -12 L 732 -2 L 690 8 L 648 -2 Z" fill="#dc2626" stroke="#7f1d1d" strokeWidth="1" />
            <text x="742" y="2" fontSize="12" fill="#374151">Critical Step</text>
          </g>
        </svg>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Critical Notes:</h3>
          <ul className="text-sm text-yellow-900 space-y-1 list-disc list-inside">
            <li><strong>Growth Mandate:</strong> All numbers must be higher than previous period</li>
            <li><strong>Date Range:</strong> Always use YTD (April 1 to last day of previous month)</li>
            <li><strong>Resident Days:</strong> Do NOT use main dashboard card - use special procedure</li>
            <li><strong>Override Logic:</strong> Manually set BOTH date columns in Resident Days section</li>
            <li><strong>ALS+CC Hours:</strong> Report may load slowly - be patient</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
          <h3 className="font-bold text-blue-800 mb-2">📚 Reference Documents:</h3>
          <ul className="text-sm text-blue-900 space-y-1 list-disc list-inside">
            <li>002.AlayaCareAccessNavigation.pdf</li>
            <li>003.ResidentDaysData.pdf</li>
            <li>004.E.SecondSpecialProcedureALSCCHoursofCare.pdf</li>
            <li>005.Business Analyst Training-Monthly ALS Portfolio Preparation (M-SAA).mp4</li>
          </ul>
        </div>

        <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded text-center">
          <p className="text-xs text-gray-600">
            Documentation prepared by Abdullah Dursun based on knowledge transfer from Manpreet Kaur
          </p>
        </div>
      </div>
    </div>
  );
};

export default MsaaFlowchart;
