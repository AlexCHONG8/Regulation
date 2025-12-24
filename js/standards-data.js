/**
 * ==========================================
 * Summed Medtech Regulatory Tracker - Data
 * ==========================================
 *
 * This file contains ALL standards data.
 * To add/remove/update standards, edit this file only.
 *
 * Structure:
 * - id: Unique identifier
 * - code: Standard code (e.g., "ISO 13485")
 * - title_en: English title
 * - title_cn: Chinese title
 * - version: Year/version
 * - status: "current", "check", "obsolete", "draft"
 * - relevance: Product relevance category
 * - url: Link to official source
 * - category: Which tab it belongs to
 * - criticality: Optional (⭐⭐⭐, 🔧, etc.)
 *
 * Status codes:
 * - "current": ✅ Latest version
 * - "check": ⚠️ Check for update
 * - "obsolete": ❌ Superseded
 * - "draft": 📋 Draft/exposure draft
 *
 * Categories:
 * - "product": Product-Specific (auto-injector/pen-injector)
 * - "iso": ISO Standards
 * - "fda": FDA Regulations
 * - "nmpa-laws": NMPA Laws and Regulations
 * - "nmpa-gb": NMPA GB Standards
 * - "nmpa-yy": NMPA YY Standards
 * - "eu": EU Regulations
 * - "iec": IEC Standards
 * - "astm": ASTM Standards
 */

const STANDARDS_DATA = {
    // ============================================
    // PRODUCT-SPECIFIC STANDARDS (CRITICAL)
    // ============================================
    "product": [
        // ISO 11608 Series - Needle-Based Injection Systems
        {
            id: "P001",
            code: "ISO 11608-1",
            title_en: "Needle-based injection systems - Part 1: Requirements and test methods for needle-based injection systems",
            title_cn: "基于针头的注射系统 - 第1部分：基于针头的注射系统要求和试验方法",
            version: "2022",
            status: "current",
            relevance: "General requirements",
            criticality: "⭐⭐⭐",
            url: "https://www.iso.org/standard/75913.html",
            subsection: "iso11608"
        },
        {
            id: "P002",
            code: "ISO 11608-2",
            title_en: "Needle-based injection systems - Part 2: Requirements and test methods for needles",
            title_cn: "基于针头的注射系统 - 第2部分：针头要求和试验方法",
            version: "2022",
            status: "current",
            relevance: "Needles",
            criticality: "⭐⭐⭐",
            url: "https://www.iso.org/standard/75914.html",
            subsection: "iso11608"
        },
        {
            id: "P003",
            code: "ISO 11608-3",
            title_en: "Needle-based injection systems - Part 3: Finished containers",
            title_cn: "基于针头的注射系统 - 第3部分：成品容器",
            version: "2022",
            status: "current",
            relevance: "Finished containers",
            criticality: "⭐⭐⭐",
            url: "https://www.iso.org/standard/75915.html",
            subsection: "iso11608"
        },
        {
            id: "P004",
            code: "ISO 11608-4",
            title_en: "Needle-based injection systems - Part 4: Requirements and test methods for needles and containers for pen injectors",
            title_cn: "基于针头的注射系统 - 第4部分：笔式注射器用针头和容器的要求和试验方法",
            version: "2022",
            status: "current",
            relevance: "Pen injectors",
            criticality: "⭐⭐⭐",
            url: "https://www.iso.org/standard/75916.html",
            subsection: "iso11608"
        },
        {
            id: "P005",
            code: "ISO 11608-5",
            title_en: "Needle-based injection systems - Part 5: Requirements and test methods for automated functions",
            title_cn: "基于针头的注射系统 - 第5部分：自动化功能的要求和试验方法",
            version: "2022",
            status: "current",
            relevance: "Automated functions",
            criticality: "⭐⭐⭐ AUTO-INJECTOR",
            url: "https://www.iso.org/standard/75917.html",
            subsection: "iso11608"
        },
        {
            id: "P006",
            code: "ISO 11608-6",
            title_en: "Needle-based injection systems - Part 6: Requirements and test methods for electronic add-on devices",
            title_cn: "基于针头的注射系统 - 第6部分：电子附加装置的要求和试验方法",
            version: "2022",
            status: "current",
            relevance: "Electronic add-on devices",
            criticality: "⭐⭐ SMART INJECTOR",
            url: "https://www.iso.org/standard/83616.html",
            subsection: "iso11608"
        },
        {
            id: "P007",
            code: "ISO 11608-7",
            title_en: "Needle-based injection systems - Part 7: Electronic injection systems with automated features",
            title_cn: "基于针头的注射系统 - 第7部分：具有自动化功能的电子注射系统",
            version: "2016",
            status: "check",
            relevance: "Electronic injection systems",
            criticality: "⭐⭐ Check for update",
            url: "https://www.iso.org/",
            subsection: "iso11608"
        },
        // Sharps Protection
        {
            id: "P008",
            code: "ISO 23908",
            title_en: "Sharps injury protection - Requirements and test methods",
            title_cn: "锐器伤害防护 - 要求和试验方法",
            version: "2024",
            status: "current",
            relevance: "Sharps safety",
            criticality: "⭐⭐⭐",
            url: "https://www.iso.org/",
            subsection: "sharps"
        },
        {
            id: "P009",
            code: "GB/T 42063",
            title_en: "Sharps injury protection (IDT ISO 23908)",
            title_cn: "锐器伤害防护 (等同采用 ISO 23908)",
            version: "2022",
            status: "check",
            relevance: "Update to 2024 needed",
            criticality: "⭐⭐",
            url: "https://openstd.samr.gov.cn/",
            subsection: "sharps"
        },
        {
            id: "P010",
            code: "FDA Sharps Guidance",
            title_en: "Medical Devices with Sharps Injury Prevention Features",
            title_cn: "具有锐器伤害防护特征的医疗器械",
            version: "2024",
            status: "current",
            relevance: "Sharps safety",
            criticality: "⭐⭐⭐",
            url: "https://www.fda.gov/",
            subsection: "sharps"
        },
        // Human Factors
        {
            id: "P011",
            code: "IEC 62366-1",
            title_en: "Usability engineering for medical devices",
            title_cn: "医疗器械可用性工程",
            version: "2020",
            status: "current",
            relevance: "Usability engineering",
            criticality: "⭐⭐⭐",
            url: "https://webstore.iec.ch/",
            subsection: "humanFactors"
        },
        {
            id: "P012",
            code: "YY/T 1474",
            title_en: "Usability engineering (IDT IEC 62366-1)",
            title_cn: "可用性工程 (等同采用 IEC 62366-1)",
            version: "2016",
            status: "current",
            relevance: "Usability engineering",
            criticality: "⭐⭐⭐",
            url: "https://openstd.samr.gov.cn/",
            subsection: "humanFactors"
        },
        {
            id: "P013",
            code: "AAMI HE75",
            title_en: "Human factors engineering design of medical devices",
            title_cn: "医疗器械人因工程设计",
            version: "2009",
            status: "current",
            relevance: "Human factors reference",
            criticality: "⭐⭐⭐",
            url: "https://www.aami.org/",
            subsection: "humanFactors"
        },
        {
            id: "P014",
            code: "FDA HF Guidance",
            title_en: "Applying Human Factors to Medical Devices",
            title_cn: "医疗器械人因工程应用",
            version: "2016",
            status: "current",
            relevance: "Human factors",
            criticality: "⭐⭐⭐",
            url: "https://www.fda.gov/media/117480/download",
            subsection: "humanFactors"
        },
        {
            id: "P015",
            code: "NMPA Usability",
            title_en: "Medical device usability engineering registration review guidance",
            title_cn: "医疗器械可用性工程注册审查指导原则",
            version: "2024",
            status: "current",
            relevance: "Usability engineering",
            criticality: "⭐⭐⭐",
            url: "https://www.cmde.org.cn/",
            subsection: "humanFactors"
        },
        // Software & Cybersecurity
        {
            id: "P016",
            code: "IEC 62304",
            title_en: "Medical device software - Software life cycle processes",
            title_cn: "医疗器械软件 - 软件生命周期过程",
            version: "2006",
            status: "current",
            relevance: "Software lifecycle",
            url: "https://webstore.iec.ch/",
            subsection: "software"
        },
        {
            id: "P017",
            code: "YY/T 0664",
            title_en: "Medical device software life cycle processes (IDT IEC 62304)",
            title_cn: "医疗器械软件生命周期过程",
            version: "2020",
            status: "current",
            relevance: "Software lifecycle",
            url: "https://openstd.samr.gov.cn/",
            subsection: "software"
        },
        {
            id: "P018",
            code: "IEC 81001-5-1",
            title_en: "Health software security",
            title_cn: "健康软件安全",
            version: "2021",
            status: "current",
            relevance: "Cybersecurity",
            url: "https://webstore.iec.ch/",
            subsection: "software"
        },
        {
            id: "P019",
            code: "YY/T 1843",
            title_en: "Medical electrical equipment cybersecurity",
            title_cn: "医用电气设备网络安全",
            version: "2022",
            status: "current",
            relevance: "Cybersecurity",
            url: "https://openstd.samr.gov.cn/",
            subsection: "software"
        },
        // Packaging & Testing
        {
            id: "P020",
            code: "ASTM D4169",
            title_en: "Performance testing of shipping containers and systems",
            title_cn: "运输容器和系统性能测试",
            version: "2023",
            status: "current",
            relevance: "Packaging testing",
            url: "https://www.astm.org/",
            subsection: "packaging"
        },
        {
            id: "P021",
            code: "ASTM F1980",
            title_en: "Accelerated aging of sterile barrier systems",
            title_cn: "无菌屏障系统加速老化",
            version: "2021",
            status: "current",
            relevance: "Accelerated aging",
            url: "https://www.astm.org/",
            subsection: "packaging"
        },
        {
            id: "P022",
            code: "ISO 11607-1",
            title_en: "Packaging for terminally sterilized medical devices",
            title_cn: "最终灭菌医疗器械包装",
            version: "2019",
            status: "current",
            relevance: "Packaging",
            url: "https://www.iso.org/",
            subsection: "packaging"
        }
    ],

    // ============================================
    // ISO STANDARDS
    // ============================================
    "iso": [
        {
            id: "I001",
            code: "ISO 13485",
            title_en: "Quality management systems - Requirements for regulatory purposes",
            title_cn: "质量管理体系 - 用于法规的要求",
            version: "2016",
            status: "current",
            relevance: "QMS Foundation",
            url: "https://www.iso.org/standard/59752.html"
        },
        {
            id: "I002",
            code: "ISO 14971",
            title_en: "Application of risk management to medical devices",
            title_cn: "医疗器械风险管理应用",
            version: "2019",
            status: "current",
            relevance: "Risk Management",
            url: "https://www.iso.org/standard/74004.html"
        },
        {
            id: "I003",
            code: "ISO 10993-1",
            title_en: "Biological evaluation - Part 1: Evaluation and testing",
            title_cn: "生物学评价 - 第1部分：评价与试验",
            version: "2009",
            status: "check",
            relevance: "Check for 2024 update",
            url: "https://www.iso.org/standard/64960.html"
        },
        {
            id: "I004",
            code: "ISO 14155",
            title_en: "Clinical investigation - Good clinical practice",
            title_cn: "临床试验 - 良好临床实践",
            version: "2020",
            status: "current",
            relevance: "Clinical trials",
            url: "https://www.iso.org/standard/71646.html"
        },
        {
            id: "I005",
            code: "ISO 15223-1",
            title_en: "Symbols to be used with medical device labels",
            title_cn: "医疗器械标签用符号",
            version: "2021",
            status: "current",
            relevance: "Labeling",
            url: "https://www.iso.org/standard/79870.html"
        },
        {
            id: "I006",
            code: "ISO 80369-20",
            title_en: "Small-bore connectors - Common test methods",
            title_cn: "小口径连接器 - 通用试验方法",
            version: "2024",
            status: "current",
            relevance: "Connector compatibility",
            url: "https://www.iso.org/"
        },
        {
            id: "I007",
            code: "ISO 11040-4",
            title_en: "Pre-filled syringes - Part 4: Requirements and testing",
            title_cn: "预灌封注射器 - 第4部分：要求和试验",
            version: "2024",
            status: "current",
            relevance: "Prefilled syringes",
            criticality: "🔧",
            url: "https://www.iso.org/"
        },
        {
            id: "I008",
            code: "ISO 11607-1",
            title_en: "Packaging for terminally sterilized medical devices",
            title_cn: "最终灭菌医疗器械包装",
            version: "2019",
            status: "current",
            relevance: "Packaging",
            url: "https://www.iso.org/"
        },
        {
            id: "I009",
            code: "ISO 24971",
            title_en: "Guidance on the application of ISO 14971",
            title_cn: "ISO 14971应用指南",
            version: "2020",
            status: "current",
            relevance: "Risk guidance",
            url: "https://www.iso.org/"
        },
        {
            id: "I010",
            code: "ISO 9001",
            title_en: "Quality management systems - Requirements",
            title_cn: "质量管理体系 - 要求",
            version: "2015",
            status: "current",
            relevance: "QMS requirements",
            url: "https://www.iso.org/"
        },
        {
            id: "I011",
            code: "ISO 14644-1",
            title_en: "Cleanrooms - Classification of air cleanliness",
            title_cn: "洁净室 - 空气洁净度分级",
            version: "2015",
            status: "current",
            relevance: "Cleanroom",
            url: "https://www.iso.org/"
        }
    ],

    // ============================================
    // FDA REGULATIONS
    // ============================================
    "fda": [
        // CFR Parts
        {
            id: "F001",
            code: "21 CFR 210",
            title_en: "Current Good Manufacturing Practice in Manufacturing, Processing, Packing, or Holding of Drugs",
            title_cn: "药品生产、加工、包装或保存的现行良好生产规范",
            version: "Current",
            status: "current",
            relevance: "Combination products",
            url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=210"
        },
        {
            id: "F002",
            code: "21 CFR 211",
            title_en: "Current Good Manufacturing Practice for Finished Pharmaceuticals",
            title_cn: "成品药的现行良好生产规范",
            version: "Current",
            status: "current",
            relevance: "Drug-device combos",
            url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=211"
        },
        {
            id: "F003",
            code: "21 CFR 4",
            title_en: "Current Good Manufacturing Practice for Combination Products",
            title_cn: "组合产品的现行良好生产规范",
            version: "Current",
            status: "current",
            relevance: "Combination products",
            criticality: "🔧 CRITICAL",
            url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=4"
        },
        {
            id: "F004",
            code: "21 CFR 820",
            title_en: "Quality System Regulation",
            title_cn: "质量体系法规",
            version: "Current",
            status: "current",
            relevance: "QMS",
            url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=820"
        },
        {
            id: "F005",
            code: "21 CFR 801",
            title_en: "Labeling",
            title_cn: "标签",
            version: "Current",
            status: "current",
            relevance: "Labeling",
            url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=801"
        },
        {
            id: "F006",
            code: "21 CFR 803",
            title_en: "Medical Device Reporting",
            title_cn: "医疗器械报告",
            version: "Current",
            status: "current",
            relevance: "MDR",
            url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=803"
        },
        // FDA Guidance Documents
        {
            id: "F007",
            code: "FDA HF Guidance",
            title_en: "Applying Human Factors and Usability Engineering to Medical Devices",
            title_cn: "医疗器械人因工程与可用性工程应用",
            version: "2016",
            status: "current",
            relevance: "Human factors",
            criticality: "🔧",
            url: "https://www.fda.gov/media/117480/download"
        },
        {
            id: "F008",
            code: "FDA Software Guidance",
            title_en: "Content of Premarket Submissions for Device Software Functions",
            title_cn: "器械软件功能的上市前提交内容",
            version: "2023",
            status: "current",
            relevance: "Software",
            url: "https://www.fda.gov/media/119703/download"
        },
        {
            id: "F009",
            code: "FDA Cybersecurity",
            title_en: "Medical Device Cybersecurity",
            title_cn: "医疗器械网络安全",
            version: "2023",
            status: "current",
            relevance: "Cybersecurity",
            url: "https://www.fda.gov/media/119703/download"
        },
        {
            id: "F010",
            code: "FDA Combination GMP",
            title_en: "Current Good Manufacturing Practice Requirements for Combination Products",
            title_cn: "组合产品的现行良好生产规范要求",
            version: "2017",
            status: "current",
            relevance: "Combination products",
            criticality: "🔧 CRITICAL",
            url: "https://www.fda.gov/media/117474/download"
        },
        {
            id: "F011",
            code: "FDA Sharps Guidance",
            title_en: "Sharps Injury Prevention Features",
            title_cn: "锐器伤害防护特征",
            version: "2024",
            status: "current",
            relevance: "Sharps safety",
            criticality: "🔧 CRITICAL",
            url: "https://www.fda.gov/"
        }
    ],

    // ============================================
    // NMPA LAWS AND REGULATIONS
    // ============================================
    "nmpa-laws": [
        {
            id: "N001",
            code: "医疗器械监督管理条例",
            title_en: "Supervision and Administration Regulation on Medical Devices",
            title_cn: "医疗器械监督管理条例",
            version: "2025.01.07",
            status: "current",
            relevance: "Foundation regulation",
            criticality: "🔧 CRITICAL",
            url: "https://www.nmpa.gov.cn/"
        },
        {
            id: "N002",
            code: "医疗器械注册与备案管理办法",
            title_en: "Registration and Filing Management Measures",
            title_cn: "医疗器械注册与备案管理办法",
            version: "2021 - Order 47",
            status: "current",
            relevance: "Registration",
            url: "https://www.nmpa.gov.cn/"
        },
        {
            id: "N003",
            code: "医疗器械生产监督管理办法",
            title_en: "Production Supervision and Administration Measures",
            title_cn: "医疗器械生产监督管理办法",
            version: "2022 - Order 53",
            status: "current",
            relevance: "Production",
            url: "https://www.nmpa.gov.cn/"
        },
        {
            id: "N004",
            code: "医疗器械分类规则",
            title_en: "Classification Rules",
            title_cn: "医疗器械分类规则",
            version: "2015 - Order 15",
            status: "current",
            relevance: "Classification",
            url: "https://www.nmpa.gov.cn/"
        },
        {
            id: "N005",
            code: "医疗器械说明书和标签管理规定",
            title_en: "Instructions and Labeling Management Provisions",
            title_cn: "医疗器械说明书和标签管理规定",
            version: "2014 - Order 6",
            status: "current",
            relevance: "Labeling",
            url: "https://www.nmpa.gov.cn/"
        }
    ],

    // ============================================
    // NMPA GB STANDARDS
    // ============================================
    "nmpa-gb": [
        {
            id: "G001",
            code: "GB/T 42061-2022",
            title_en: "Quality management systems (IDT ISO 13485:2016)",
            title_cn: "质量管理体系 (等同采用 ISO 13485:2016)",
            version: "2022",
            status: "current",
            relevance: "QMS",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "G002",
            code: "GB/T 42062-2022",
            title_en: "Risk management (IDT ISO 14971:2019)",
            title_cn: "风险管理 (等同采用 ISO 14971:2019)",
            version: "2022",
            status: "current",
            relevance: "Risk Management",
            criticality: "🔧",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "G003",
            code: "GB/T 16886.1-2022",
            title_en: "Biological evaluation - Part 1: Evaluation and testing",
            title_cn: "生物学评价 - 第1部分：评价与试验",
            version: "2022",
            status: "current",
            relevance: "Biological evaluation",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "G004",
            code: "GB 9706.1-2020",
            title_en: "Medical electrical equipment - Part 1: General safety requirements",
            title_cn: "医用电气设备 - 第1部分：通用安全要求",
            version: "2020",
            status: "current",
            relevance: "Electrical safety",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "G005",
            code: "GB/T 25000.51-2016",
            title_en: "Systems and software engineering - Part 51: RUSP quality",
            title_cn: "系统与软件工程 - 第51部分：就绪可用软件产品质量",
            version: "2016",
            status: "check",
            relevance: "Software quality",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "G006",
            code: "GB/T 42063-2022",
            title_en: "Sharps injury protection (IDT ISO 23908)",
            title_cn: "锐器伤害防护 (等同采用 ISO 23908)",
            version: "2022",
            status: "check",
            relevance: "Update to 2024 needed",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "G007",
            code: "GB 9706.102-2021",
            title_en: "Medical electrical equipment - Part 1-2: EMC requirements",
            title_cn: "医用电气设备 - 第1-2部分：电磁兼容要求",
            version: "2021",
            status: "current",
            relevance: "EMC",
            url: "https://openstd.samr.gov.cn/"
        }
    ],

    // ============================================
    // NMPA YY STANDARDS
    // ============================================
    "nmpa-yy": [
        {
            id: "Y001",
            code: "YY/T 0664-2020",
            title_en: "Medical device software - Software life cycle processes (IDT IEC 62304)",
            title_cn: "医疗器械软件 - 软件生命周期过程",
            version: "2020",
            status: "current",
            relevance: "Software lifecycle",
            criticality: "🔧",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "Y002",
            code: "YY/T 1474-2016",
            title_en: "Usability engineering application to medical devices (IDT IEC 62366-1)",
            title_cn: "可用性工程应用 (等同采用 IEC 62366-1)",
            version: "2016",
            status: "current",
            relevance: "Usability engineering",
            criticality: "🔧",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "Y003",
            code: "YY/T 1843-2022",
            title_en: "Medical electrical equipment - Cybersecurity basic requirements",
            title_cn: "医用电气设备 - 网络安全基本要求",
            version: "2022",
            status: "current",
            relevance: "Cybersecurity",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "Y004",
            code: "YY/T 1437-2023",
            title_en: "Application guide for GB/T 42062",
            title_cn: "GB/T 42062应用指南",
            version: "2023",
            status: "current",
            relevance: "Risk management guidance",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "Y005",
            code: "YY/T 1768.1-2021",
            title_en: "Needle-based injection systems - Part 1 (IDT ISO 11608-1:2014)",
            title_cn: "基于针头的注射系统 - 第1部分",
            version: "2021",
            status: "check",
            relevance: "Update to 2022 needed",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "Y006",
            code: "YY/T 0681.1-2018",
            title_en: "Sterile medical device packaging - Part 1: Accelerated aging",
            title_cn: "无菌医疗器械包装 - 第1部分：加速老化",
            version: "2018",
            status: "current",
            relevance: "Packaging",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "Y007",
            code: "YY/T 0916.7-2024",
            title_en: "Small-bore connectors - Part 7: Intravascular/subcutaneous",
            title_cn: "小口径连接器 - 第7部分：血管内/皮下",
            version: "2024",
            status: "current",
            relevance: "Connectors",
            url: "https://openstd.samr.gov.cn/"
        },
        {
            id: "Y008",
            code: "YY/T 0466.1-2023",
            title_en: "Medical devices - Symbols - Part 1: General requirements",
            title_cn: "医疗器械 - 符号 - 第1部分：通用要求",
            version: "2023",
            status: "current",
            relevance: "Symbols",
            url: "https://openstd.samr.gov.cn/"
        }
    ],

    // ============================================
    // EU REGULATIONS
    // ============================================
    "eu": [
        {
            id: "E001",
            code: "EU 2017/745",
            title_en: "Medical Device Regulation (MDR)",
            title_cn: "医疗器械法规 (MDR)",
            version: "2017",
            status: "current",
            relevance: "Medical devices",
            criticality: "🔧 CRITICAL",
            url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745"
        },
        {
            id: "E002",
            code: "EU 2017/746",
            title_en: "In Vitro Diagnostic Regulation (IVDR)",
            title_cn: "体外诊断法规 (IVDR)",
            version: "2017",
            status: "current",
            relevance: "In vitro diagnostics",
            url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0746"
        },
        {
            id: "E003",
            code: "EU 2021/2226",
            title_en: "MDR Amendment",
            title_cn: "MDR修正案",
            version: "2021",
            status: "current",
            relevance: "MDR update",
            url: "https://eur-lex.europa.eu/"
        },
        {
            id: "E004",
            code: "EN ISO 13485",
            title_en: "Medical devices - Quality management systems",
            title_cn: "医疗器械 - 质量管理体系",
            version: "2016",
            status: "current",
            relevance: "Harmonized under MDR",
            url: "https://www.iso.org/"
        },
        {
            id: "E005",
            code: "EN ISO 14971",
            title_en: "Medical devices - Risk management",
            title_cn: "医疗器械 - 风险管理",
            version: "2019",
            status: "current",
            relevance: "Harmonized under MDR",
            url: "https://www.iso.org/"
        },
        {
            id: "E006",
            code: "EN ISO 11608 series",
            title_en: "Needle-based injection systems",
            title_cn: "基于针头的注射系统",
            version: "2022",
            status: "current",
            relevance: "Harmonized under MDR",
            criticality: "🔧 CRITICAL",
            url: "https://www.iso.org/"
        },
        {
            id: "E007",
            code: "EN ISO 23908",
            title_en: "Sharps injury protection",
            title_cn: "锐器伤害防护",
            version: "2024",
            status: "current",
            relevance: "Sharps safety",
            criticality: "🔧",
            url: "https://www.iso.org/"
        }
    ],

    // ============================================
    // IEC STANDARDS
    // ============================================
    "iec": [
        {
            id: "EC001",
            code: "IEC 60601-1",
            title_en: "Medical electrical equipment - Part 1: General requirements for basic safety",
            title_cn: "医用电气设备 - 第1部分：基本安全和基本性能通用要求",
            version: "2012",
            status: "current",
            relevance: "Electrical safety",
            url: "https://webstore.iec.ch/"
        },
        {
            id: "EC002",
            code: "IEC 60601-1-6",
            title_en: "Medical electrical equipment - Part 1-6: General requirements - Usability",
            title_cn: "医用电气设备 - 第1-6部分：通用要求 - 可用性",
            version: "2020",
            status: "current",
            relevance: "Usability",
            criticality: "🔧",
            url: "https://webstore.iec.ch/"
        },
        {
            id: "EC003",
            code: "IEC 62304",
            title_en: "Medical device software - Software life cycle processes",
            title_cn: "医疗器械软件 - 软件生命周期过程",
            version: "2006",
            status: "current",
            relevance: "Software lifecycle",
            criticality: "🔧",
            url: "https://webstore.iec.ch/"
        },
        {
            id: "EC004",
            code: "IEC 62366-1",
            title_en: "Application of usability engineering to medical devices",
            title_cn: "可用性工程在医疗器械中的应用",
            version: "2020",
            status: "current",
            relevance: "Usability engineering",
            criticality: "🔧",
            url: "https://webstore.iec.ch/"
        },
        {
            id: "EC005",
            code: "IEC 81001-5-1",
            title_en: "Health software and health IT systems safety - Part 5-1: Security",
            title_cn: "健康软件和健康IT系统安全 - 第5-1部分：安全",
            version: "2021",
            status: "current",
            relevance: "Cybersecurity",
            criticality: "🔧",
            url: "https://webstore.iec.ch/"
        }
    ],

    // ============================================
    // ASTM STANDARDS
    // ============================================
    "astm": [
        {
            id: "A001",
            code: "ASTM D4169-23",
            title_en: "Standard Practice for Performance Testing of Shipping Containers and Systems",
            title_cn: "运输容器和系统性能测试的标准实施规程",
            version: "2023",
            status: "current",
            relevance: "Packaging testing",
            criticality: "🔧",
            url: "https://www.astm.org/"
        },
        {
            id: "A002",
            code: "ASTM F1980-21",
            title_en: "Standard Guide for Accelerated Aging of Sterile Barrier Systems",
            title_cn: "无菌屏障系统加速老化标准指南",
            version: "2021",
            status: "current",
            relevance: "Accelerated aging",
            criticality: "🔧",
            url: "https://www.astm.org/"
        },
        {
            id: "A003",
            code: "ASTM D642-15",
            title_en: "Standard Test Method for Determining Compressive Resistance of Shipping Containers",
            title_cn: "测定运输容器抗压阻力的标准试验方法",
            version: "2015",
            status: "current",
            relevance: "Packaging",
            url: "https://www.astm.org/"
        },
        {
            id: "A004",
            code: "ASTM D5276-19",
            title_en: "Standard Test Method for Drop Test of Loaded Containers",
            title_cn: "装载容器跌落试验的标准试验方法",
            version: "2019",
            status: "current",
            relevance: "Drop testing",
            url: "https://www.astm.org/"
        },
        {
            id: "A005",
            code: "ASTM D4728-17",
            title_en: "Standard Test Method for Random Vibration Testing of Shipping Containers",
            title_cn: "运输容器随机振动试验的标准试验方法",
            version: "2017",
            status: "current",
            relevance: "Vibration testing",
            url: "https://www.astm.org/"
        }
    ]
};

// Cross-reference table data
const CROSS_REFERENCE_DATA = [
    {
        topic_en: "Quality Management System",
        topic_cn: "质量管理体系",
        nmpa: "GB/T 42061-2022",
        fda: "21 CFR 820",
        eu: "EN ISO 13485",
        iso: "ISO 13485:2016"
    },
    {
        topic_en: "Risk Management",
        topic_cn: "风险管理",
        nmpa: "GB/T 42062-2022",
        fda: "General QSR principles",
        eu: "EN ISO 14971",
        iso: "ISO 14971:2019"
    },
    {
        topic_en: "Software Lifecycle",
        topic_cn: "软件生命周期",
        nmpa: "YY/T 0664-2020",
        fda: "General principles",
        eu: "EN IEC 62304",
        iso: "IEC 62304:2006"
    },
    {
        topic_en: "Usability Engineering",
        topic_cn: "可用性工程",
        nmpa: "YY/T 1474-2016",
        fda: "HF Guidance",
        eu: "EN IEC 62366",
        iso: "IEC 62366-1:2020"
    },
    {
        topic_en: "Biological Evaluation",
        topic_cn: "生物学评价",
        nmpa: "GB/T 16886 series",
        fda: "FDA Blue Book guidance",
        eu: "EN ISO 10993 series",
        iso: "ISO 10993 series"
    },
    {
        topic_en: "Electrical Safety",
        topic_cn: "电气安全",
        nmpa: "GB 9706.1-2020",
        fda: "AAMI/IEC 60601 series",
        eu: "EN IEC 60601 series",
        iso: "IEC 60601-1:2012"
    },
    {
        topic_en: "Cybersecurity",
        topic_cn: "网络安全",
        nmpa: "YY/T 1843-2022",
        fda: "Cybersecurity guidances",
        eu: "EN IEC 81001-5-1",
        iso: "IEC 81001-5-1:2021"
    },
    {
        topic_en: "Sharps Protection",
        topic_cn: "锐器防护",
        nmpa: "GB/T 42063-2022",
        fda: "Sharps Injury Prevention Guidance",
        eu: "EN ISO 23908",
        iso: "ISO 23908:2024"
    },
    {
        topic_en: "Needle-Based Injection Systems",
        topic_cn: "基于针头的注射系统",
        nmpa: "YY/T 1768.1-2021",
        fda: "Device-specific guidances",
        eu: "EN ISO 11608 series",
        iso: "ISO 11608:2022 series"
    },
    {
        topic_en: "Labeling/Symbols",
        topic_cn: "标签/符号",
        nmpa: "YY/T 0466.1-2023",
        fda: "21 CFR 801",
        eu: "EN ISO 15223-1",
        iso: "ISO 15223-1:2021"
    },
    {
        topic_en: "Packaging",
        topic_cn: "包装",
        nmpa: "YY/T 0681 series",
        fda: "FDA packaging guidances",
        eu: "EN ISO 11607",
        iso: "ISO 11607-1:2019"
    },
    {
        topic_en: "Accelerated Aging",
        topic_cn: "加速老化",
        nmpa: "YY/T 0681.1-2018",
        fda: "ASTM F1980 referenced",
        eu: "ASTM F1980",
        iso: "ASTM F1980-21"
    },
    {
        topic_en: "Shipping Testing",
        topic_cn: "运输测试",
        nmpa: "NMPA uses ASTM",
        fda: "ASTM D4169 referenced",
        eu: "EN ASTM standards",
        iso: "ASTM D4169-23"
    }
];

// Priority update items
const PRIORITY_UPDATES = {
    high: [
        {
            code: "ISO 11608 series",
            current: "Mixed versions (2014, 2016, 2022)",
            latest: "2022 for Parts 1-6",
            action: "Update to 2022",
            status: "current"
        },
        {
            code: "ISO 23908",
            current: "GB/T 42063-2022",
            latest: "ISO 23908:2024",
            action: "Update GB to 2024",
            status: "check"
        },
        {
            code: "ISO/FDIS 10993-1:2025",
            current: "ISO 10993-1:2009",
            latest: "2025 (FDIS stage)",
            action: "Monitor FDIS",
            status: "draft"
        }
    ],
    medium: [
        {
            code: "YY/T 1768.1-2021",
            current: "2021 (ISO 11608-1:2014)",
            latest: "ISO 11608-1:2022",
            action: "Update YY standard",
            status: "check"
        },
        {
            code: "ASTM D4169",
            current: "Multiple versions (2016, 2022, 2023)",
            latest: "2023",
            action: "Use D4169-23",
            status: "current"
        },
        {
            code: "ASTM F1980",
            current: "2016, 2021",
            latest: "2021",
            action: "Use F1980-21",
            status: "current"
        }
    ],
    draft: [
        {
            code: "中华人民共和国医疗器械管理法 (草案征求意见稿)",
            current_en: "Medical Device Management Law (Draft for Comments)",
            current_cn: "医疗器械管理法 (草案征求意见稿)",
            expected: "TBD",
            action: "HIGH PRIORITY",
            status: "draft"
        },
        {
            code: "医疗器械人因设计技术审查指导原则 (征求意见稿第二版)",
            current_en: "Human Factors Design Technical Review Guidance (Draft 2nd Edition)",
            current_cn: "人因设计技术审查指导原则 (征求意见稿第二版)",
            expected: "2025?",
            action: "Monitor",
            status: "draft"
        }
    ]
};
