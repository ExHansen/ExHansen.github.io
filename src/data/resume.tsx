// Semua isi website ada di file ini.
// - Tambah/ubah pengalaman, project, skill, sertifikasi: edit array di bawah.
// - Urutan & on/off section: lihat `sections` (order, enabled).
// - Foto profil: taruh file di public/ lalu isi `avatarUrl` (misal "/me.jpg").
//   Selama kosong, lingkaran berisi inisial yang ditampilkan.

import { Icons } from "@/components/icons";
import { FileText, House } from "lucide-react";

const EMAIL = "hansen.vernandez@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/hansenvernandez";
const GITHUB = "https://github.com/ExHansen";
const CV_PDF = "/cv/Hansen-Vernandez-CV.pdf"; // versi publik, tanpa nomor HP

export const DATA = {
  name: "Hansen Vernandez",
  initials: "HV",
  url: "https://exhansen.github.io",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  description:
    "Data & AI engineer in Jakarta. I build data pipelines and AI tools, and I measure whether they're right instead of assuming it.",
  summary:
    "I work on data quality at [Insignia](/#work), an e-commerce data consultancy. Most of my work is turning business logic into checks: validation rules that run daily across ~20 production datasets, reconciliation against source-of-truth data, and root cause analysis when the numbers don't add up. I also build the pipelines themselves: I co-led our ~2 TB migration from BigQuery to ClickHouse + dbt, cut a mapping job from ~5 to ~2 minutes, and I'm a [ClickHouse-certified developer](/#hackathons).\n\nI graduated top of my class in Information Systems at [UPNVJ](/#education) (GPA 3.95/4.0). Outside work I build [data and AI projects](/#projects) where quality is measured, not assumed: **CareerOS Studio** (a $0/month dbt + Dagster + LangGraph job-market & CV agent with an anti-hallucination critic), a PayLater platform whose checks caught 8 injected faults within 2 minutes, a quality-control layer for LLM document extraction, an FMCG platform with demand forecasting, and an NLP classifier with 98% test accuracy. I'm looking for **Data Engineer** and **AI Engineer** roles, where a data-quality background helps every pipeline and every model.",
  avatarUrl: "/me.webp",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Tools I've used" },
    projects: {
      order: 5, enabled: true,
      label: "Projects",
      heading: "Things I've built",
      text: "Pipelines, dashboards, and AI projects I've built outside work, with the source code on GitHub.",
    },
    hackathons: {
      order: 6, enabled: true,
      label: "Achievements",
      heading: "Certifications & awards",
      text: "Industry certifications I've earned and competitions I've placed in.",
    },
    photos: {
      order: 7, enabled: true,
      label: "Photos",
      heading: "Moments along the way",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: `Hiring for a data role? Email me at [${EMAIL}](mailto:${EMAIL}) or message me on [LinkedIn](${LINKEDIN}). You can also [download my CV](${CV_PDF}).`,
    },
  },
  // Foto ada di public/photos/ (sudah di-crop & dikompres dari folder png/).
  // Tiap foto tampil dengan rasio aslinya; `caption` muncul kecil di bawahnya.
  photos: [
    {
      src: "/photos/graduation.webp",
      alt: "Hansen receiving a diploma at the UPNVJ graduation ceremony",
      caption: "Graduation day at UPNVJ, 2026.",
    },
    {
      src: "/photos/best-graduate-certificate.webp",
      alt: "Best Graduate certificate for D3 Information Systems, UPNVJ, dated 8 September 2026",
      caption: "Best Graduate award, D3 Information Systems, UPNVJ (Sep 2026).",
    },
    {
      src: "/photos/bused-runner-up.webp",
      alt: "Hansen's team holding a 'Juara 2' (runner-up) certificate at Insignia's BUSED pitching competition",
      caption: "Runner-up with my team at Insignia's BUSED pitching competition (Aug 2026).",
    },
    {
      src: "/photos/markethac-team.webp",
      alt: "Group photo of the Markethac team at an Insignia event",
      caption: "With the Markethac team at Insignia.",
    },
    {
      src: "/photos/untar-hackathon.webp",
      alt: "Team Little Mozart receiving the 2nd place trophy at the UNTAR Hackathon",
      caption: "2nd place at the UNTAR Hackathon with team Little Mozart (Nov 2022).",
    },
  ],
  // "Tools I've used" (section `skills`). Logo ada di public/tools/.
  // - `color`: logo satu warna (SVG dari Simple Icons, CC0) diwarnai dengan warna brand ini.
  //   `onLight: false` / `onDark: false` = pakai warna teks di mode terang / gelap
  //   (untuk brand yang terlalu pucat atau terlalu gelap).
  // - Tanpa `color`: logo berwarna asli (PNG/SVG); `invertOnDark` untuk logo hitam.
  // - Tanpa `logo`: ikon database generik.
  tools: [
    {
      category: "Languages",
      items: [
        { name: "Python", logo: "/tools/python.svg", color: "#3776AB" },
        { name: "SQL" },
      ],
    },
    {
      category: "Transformation & data quality",
      items: [
        { name: "dbt", logo: "/tools/dbt.png" },
        { name: "Soda", logo: "/tools/soda.png" },
        { name: "Pydantic", logo: "/tools/pydantic.svg", color: "#E92063" },
        { name: "pytest", logo: "/tools/pytest.svg", color: "#0A9EDC" },
      ],
    },
    {
      category: "Warehouses & storage",
      items: [
        { name: "ClickHouse", logo: "/tools/clickhouse.svg", color: "#FFCC01", onLight: false },
        { name: "BigQuery", logo: "/tools/googlebigquery.svg", color: "#669DF6" },
        { name: "PostgreSQL", logo: "/tools/postgresql.svg", color: "#4169E1" },
        { name: "DuckDB", logo: "/tools/duckdb.svg", color: "#FFF000", onLight: false },
        { name: "Snowflake", logo: "/tools/snowflake.svg", color: "#29B5E8", note: "familiar" },
        { name: "SeaweedFS (S3)", logo: "/tools/seaweedfs.jpg" },
      ],
    },
    {
      category: "Streaming & CDC",
      items: [
        { name: "Apache Kafka", logo: "/tools/apachekafka.svg", color: "#231F20", onDark: false },
        { name: "Debezium", logo: "/tools/debezium.png" },
      ],
    },
    {
      category: "Orchestration & DevOps",
      items: [
        { name: "Apache Airflow", logo: "/tools/apacheairflow.svg", color: "#017CEE" },
        { name: "Dagster" },
        { name: "Docker", logo: "/tools/docker.svg", color: "#2496ED" },
        { name: "Git", logo: "/tools/git.svg", color: "#F03C2E" },
        { name: "GitHub", logo: "/tools/github.svg", color: "#181717", onDark: false },
        { name: "GitHub Actions", logo: "/tools/githubactions.svg", color: "#2088FF" },
        { name: "Linux", logo: "/tools/linux.svg", color: "#FCC624", onLight: false },
      ],
    },
    {
      category: "BI & dashboards",
      items: [
        { name: "Metabase", logo: "/tools/metabase.svg", color: "#509EE3" },
        { name: "Looker Studio", logo: "/tools/lookerstudio.svg" },
        { name: "Power BI", logo: "/tools/powerbi.png" },
        { name: "Tableau", logo: "/tools/tableau.png", note: "familiar" },
      ],
    },
    {
      category: "Data science, ML & AI",
      items: [
        { name: "LangGraph" },
        { name: "FastAPI" },
        { name: "Ollama" },
        { name: "pandas", logo: "/tools/pandas.svg", color: "#150458", onDark: false },
        { name: "NumPy", logo: "/tools/numpy.svg", color: "#013243", onDark: false },
        { name: "scikit-learn", logo: "/tools/scikitlearn.svg", color: "#F7931E" },
        { name: "LightGBM", logo: "/tools/lightgbm.png" },
        { name: "statsforecast / mlforecast", logo: "/tools/nixtla.png" },
        { name: "Jupyter", logo: "/tools/jupyter.svg", color: "#F37626" },
        { name: "Streamlit", logo: "/tools/streamlit.svg", color: "#FF4B4B" },
      ],
    },
    {
      category: "Cloud",
      items: [
        { name: "Google Cloud", logo: "/tools/googlecloud.svg", color: "#4285F4" },
        { name: "ClickHouse Cloud", logo: "/tools/clickhouse.svg", color: "#FFCC01", onLight: false },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: CV_PDF, icon: FileText, label: "Download CV" },
    // Tambahkan lagi setelah ada tulisan di src/content/blog:
    // { href: "/blog", icon: Library, label: "Blog" },  (import Library dari "lucide-react")
  ],
  contact: {
    email: EMAIL,
    social: {
      GitHub: {
        name: "GitHub",
        url: GITHUB,
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: LINKEDIN,
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: `mailto:${EMAIL}`,
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Insignia (Markethac Business Unit)",
      href: "",
      badges: [],
      location: "Jakarta",
      title: "Data Quality Control",
      logoUrl: "/logos/insignia.png",
      start: "Mar 2026",
      end: undefined,
      description:
        "Co-led a BigQuery-to-ClickHouse + dbt migration (~2 TB, hundreds of tables, team of 5): wrote intermediate and mart dbt models, translated BigQuery SQL to ClickHouse, and ran the post-migration validation. Cut mapping runtime from ~5 to ~2 minutes (60% faster) by optimizing dbt SQL and automating the staging-to-production flow. Built validation rules run daily across ~20 production datasets, kept client data accuracy at ≥95%, and built a Focused Data Checking tool for the metrics clients review most.",
    },
    {
      company: "Insignia (Markethac Business Unit)",
      href: "",
      badges: [],
      location: "Jakarta",
      title: "Data Quality Control Intern",
      logoUrl: "/logos/insignia.png",
      start: "Sep 2025",
      end: "Feb 2026",
      description:
        "Monitored data quality daily across transaction, product, shop, and mapping datasets (~200 GB ingested per day). Ran root cause analysis on anomalies and client-raised issues with the data engineers, and prepared validated datasets for monthly client reports. Promoted to full-time after 6 months.",
    },
  ],
  education: [
    {
      school: "Universitas Pembangunan Nasional Veteran Jakarta",
      href: "https://www.upnvj.ac.id",
      degree: "A.Md. Information Systems · Best Graduate, GPA 3.95/4.0",
      logoUrl: "/logos/upnvj.jpg",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "CareerOS Studio — Local-First AI Agent & Job Market Platform",
      href: "https://github.com/ExHansen/cv-job-market-agent",
      dates: "Data platform & Agentic AI · Nov 2026",
      active: true,
      description:
        "**$0/month** automated Medallion job-market warehouse (DuckDB, dbt-duckdb, Dagster, Parquet) synced daily via GitHub Actions (**23/23 dbt & Dagster checks passing in CI**) with O(1) SHA256 incremental sync. Pairs a stateful LangGraph + Ollama (**8 GB VRAM Gemma 3 12B**) CV tailoring agent and deterministic anti-hallucination critic—reaching **84%–95% ATS alignment with zero fabricated claims**—with a 9-module FastAPI + Next.js studio traced in Arize Phoenix.",
      technologies: [
        "Python",
        "DuckDB",
        "dbt",
        "Dagster",
        "LangGraph",
        "Ollama",
        "FastAPI",
        "Next.js",
        "Arize Phoenix",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ExHansen/cv-job-market-agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/careeros-studio.png",
      video: "",
    },
    {
      title: "PayLater Data Platform",
      href: "https://github.com/ExHansen/paylater-data-platform",
      dates: "Data engineering · Nov 2026",
      active: true,
      description:
        "Data platform for a buy-now-pay-later lender: Postgres change data capture via Debezium and Kafka, a streaming risk engine (**p95 alert latency 860 ms**), a dbt warehouse with delinquency marts and an OJK-style monthly report, orchestrated by Airflow 3. Its data-quality checks are proven by injecting 8 real faults in CI: **every fault detected within 2 minutes**.",
      technologies: ["Python", "Kafka", "Debezium", "PostgreSQL", "dbt", "Airflow", "Quix Streams", "Streamlit", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ExHansen/paylater-data-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/paylater-data-platform.png",
      video: "",
    },
    {
      title: "LLM Document Extractor QC",
      href: "https://github.com/ExHansen/llm-doc-exctractor",
      dates: "AI & data quality · Nov 2026",
      active: true,
      description:
        "Quality-control layer for LLM document extraction: reads Indonesian invoices and receipts, checks every field against 17 finance rules (subtotal + PPN = total, NPWP format), scores its own confidence, and routes doubtful documents to a Streamlit review queue. With a simulated extractor, **nothing wrong was auto-approved** on synthetic invoices or real CORD receipts.",
      technologies: ["Python", "DuckDB", "Pydantic", "Streamlit", "pandas", "GitHub Actions"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ExHansen/llm-doc-exctractor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/llm-doc-extractor.png",
      video: "",
    },
    {
      title: "FMCG Commercial Data Platform",
      href: "https://github.com/ExHansen/fmcgDataPlatform",
      dates: "Data engineering & analytics",
      active: true,
      description:
        "End-to-end platform for a made-up FMCG company (8 brands, 3 distributors, 30 stores): SAP sell-in, distributor and POS data → S3 data lake → PostgreSQL + dbt → Metabase dashboards and a demand forecast. Idempotent backfills, 100% catch rate on injected data failures, and 60.8% forecast accuracy (1 − WAPE).",
      technologies: ["Python", "dbt", "Airflow", "PostgreSQL", "Metabase", "LightGBM", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ExHansen/fmcgDataPlatform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/fmcg-data-platform.png",
      video: "",
    },
    {
      title: "BBC News Article Classifier",
      href: "https://github.com/ExHansen/predict_bbc_article_category",
      dates: "Machine learning · Academic, UPNVJ",
      active: false,
      description:
        "Sorts BBC News articles into 5 topics (business, entertainment, politics, sport, tech) with a stacking ensemble model, reaching **98% test accuracy**. Full NLP pipeline (cleaning, lemmatization, TF-IDF) and a Streamlit app for live predictions.",
      technologies: ["Python", "scikit-learn", "NLTK", "Streamlit"],
      links: [
        {
          type: "Demo",
          href: "https://exhansen-predict-bbc-article-category-app-lqecfh.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ExHansen/predict_bbc_article_category",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/bbc-classifier.png",
      video: "",
    },
  ],
  // Dipakai sebagai section "Certifications & awards" (komponen bawaan template namanya hackathons).
  // Urutkan dari yang terbaru.
  hackathons: [
    {
      title: "Runner-up, BUSED Internal Pitching Competition",
      dates: "Aug 2026",
      location: "Insignia",
      description:
        "Led a team of 3 (data quality + developer) pitching an automated e-commerce reporting solution that other business units could adopt.",
      image: "/logos/insignia.png",
      links: [],
    },
    {
      title: "ClickHouse Developer Certification",
      dates: "Jun 2026",
      location: "ClickHouse Inc.",
      description: "",
      image: "/logos/clickhouse.png",
      links: [],
    },
    {
      title: "BNSP Junior Data Engineer",
      dates: "Feb 2026",
      location: "Badan Nasional Sertifikasi Profesi (Indonesia)",
      description: "",
      image: "/logos/bnsp.png",
      links: [],
    },
    {
      title: "IT Specialist – Data Analytics",
      dates: "2024",
      location: "Certiport",
      description: "",
      image: "/logos/certiport.png",
      links: [],
    },
    {
      title: "2nd Place, UNT(AR) Hackathon",
      dates: "Nov 2022",
      location: "Universitas Tarumanagara",
      description: "Led a team of 3 (team Little Mozart) building an augmented reality project with Unity and Blender.",
      image: "/logos/untar.png",
      links: [],
    },
  ],
} as const;
