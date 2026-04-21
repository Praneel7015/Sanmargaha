(() => {
  const wrap = document.getElementById("ka-map-wrap");
  if (!wrap) return;

  const NAME_MAP = {
    Bagalkot: "Bagalkot",
    Bagalkote: "Bagalkot",
    Bangalore: "Bengaluru Urban",
    "Bangalore Rural": "Bengaluru Rural",
    "Bangalore Urban": "Bengaluru Urban",
    "Bengaluru Rural": "Bengaluru Rural",
    "Bengaluru Urban": "Bengaluru Urban",
    Belgaum: "Belagavi",
    Belagavi: "Belagavi",
    Bellary: "Ballari",
    Ballari: "Ballari",
    Bidar: "Bidar",
    Bijapur: "Vijayapura",
    Vijayapura: "Vijayapura",
    Chamrajnagar: "Chamarajanagara",
    Chamarajanagar: "Chamarajanagara",
    Chamarajanagara: "Chamarajanagara",
    Chamarajnagar: "Chamarajanagara",
    Chikballapur: "Chikkaballapura",
    Chikkaballapura: "Chikkaballapura",
    Chickaballapura: "Chikkaballapura",
    Chikmagalur: "Chikkamagaluru",
    Chikkamagaluru: "Chikkamagaluru",
    Chickamagaluru: "Chikkamagaluru",
    Chitradurga: "Chitradurga",
    "Dakshin Kannad": "Dakshina Kannada",
    "Dakshina Kannada": "Dakshina Kannada",
    "Dakshina Kannad": "Dakshina Kannada",
    Davangere: "Davanagere",
    Davanagere: "Davanagere",
    Dharwad: "Dharwad",
    Dharwada: "Dharwad",
    Gadag: "Gadag",
    Gadaga: "Gadag",
    Gulbarga: "Kalaburagi",
    Kalaburagi: "Kalaburagi",
    Kalburgi: "Kalaburagi",
    Hassan: "Hassan",
    Haveri: "Haveri",
    Kodagu: "Kodagu",
    Coorg: "Kodagu",
    Kolar: "Kolar",
    Kolara: "Kolar",
    Koppal: "Koppal",
    Koppala: "Koppal",
    Mandya: "Mandya",
    Mysore: "Mysuru",
    Mysuru: "Mysuru",
    Raichur: "Raichur",
    Raichuru: "Raichur",
    Ramanagara: "Ramanagara",
    Ramnagar: "Ramanagara",
    Ramanagar: "Ramanagara",
    Shimoga: "Shivamogga",
    Shivamogga: "Shivamogga",
    Tumkur: "Tumakuru",
    Tumakuru: "Tumakuru",
    Udupi: "Udupi",
    "Uttar Kannad": "Uttara Kannada",
    "Uttar Kannand": "Uttara Kannada",
    "Uttara Kannada": "Uttara Kannada",
    "Uttara Kannad": "Uttara Kannada",
    Yadgir: "Yadgir",
    Yadagiri: "Yadgir",
    Vijayanagara: "Vijayanagara",
    Vijayanagar: "Vijayanagara"
  };

  const DISTRICTS = {
    Bagalkot: { students: 1500, schools: "30 Schools", color: "#8DC4E8" },
    Ballari: { students: 17200, schools: "144 Schools", color: "#F0D060" },
    Belagavi: { students: 2750, schools: "55 Schools", color: "#7BADE0" },
    "Bengaluru Rural": { students: 16600, schools: "162 Schools", color: "#F5C8C8" },
    "Bengaluru Urban": { students: 49250, schools: "455 Schools", color: "#E84040" },
    Bidar: { students: 19450, schools: "179 Schools", color: "#E8C840" },
    Chamarajanagara: { students: 11050, schools: "243 Schools", color: "#C8E0C0" },
    Chikkaballapura: { students: 16150, schools: "173 Schools", color: "#F0C0C0" },
    Chikkamagaluru: { students: 4250, schools: "118 Schools", color: "#78B878" },
    Chitradurga: { students: 16800, schools: "236 Schools", color: "#D06060" },
    "Dakshina Kannada": { students: 600, schools: "23 Schools", color: "#8CC88C" },
    Davanagere: { students: 16150, schools: "223 Schools", color: "#E08080" },
    Dharwad: { students: 750, schools: "15 Schools", color: "#7BADE0" },
    Gadag: { students: 800, schools: "16 Schools", color: "#D8C870" },
    Kalaburagi: { students: 45250, schools: "295 Schools", color: "#E8C840" },
    Hassan: { students: 13900, schools: "158 Schools", color: "#60A860" },
    Haveri: { students: 1400, schools: "28 Schools", color: "#A0CCE0" },
    Kodagu: { students: 450, schools: "9 Schools", color: "#509850" },
    Kolar: { students: 20300, schools: "146 Schools", color: "#F0D0D0" },
    Koppal: { students: 19500, schools: "190 Schools", color: "#D8C870" },
    Mandya: { students: 13900, schools: "138 Schools", color: "#A0D4A0" },
    Mysuru: { students: 34850, schools: "404 Schools", color: "#78B878" },
    Raichur: { students: 23800, schools: "256 Schools", color: "#E8C840" },
    Ramanagara: { students: 15150, schools: "214 Schools", color: "#F0D0D0" },
    Shivamogga: { students: 1650, schools: "33 Schools", color: "#E08080" },
    Tumakuru: { students: 17650, schools: "203 Schools", color: "#F0A8A8" },
    Udupi: { students: 500, schools: "10 Schools", color: "#A0D4A0" },
    "Uttara Kannada": { students: 1250, schools: "25 Schools", color: "#B0D4E8" },
    Vijayapura: { students: 1150, schools: "23 Schools", color: "#8DC4E8" },
    Yadgir: { students: 9100, schools: "172 Schools", color: "#E8C840" },
    Vijayanagara: { students: 15000, schools: "100 Schools", color: "#D8C870" }
  };

  const HIGHLIGHT_DISTRICTS = new Set(["Belagavi", "Dharwad", "Bengaluru Urban"]);
  const HIGHLIGHT_FILL = {
    Belagavi: "#2D6A4F",
    Dharwad: "#B44D5F",
    "Bengaluru Urban": "#2E4A8F"
  };
  const NON_CAMPUS_FILL = "#D8DCE3";

  const GEO_URLS = [
    "https://raw.githubusercontent.com/inosaint/StatesOfIndia/master/karnataka.geojson",
    "https://raw.githubusercontent.com/civictech-India/INDIA-GEO-JSON-Datasets/main/Karnataka/Karnataka_District_Boundary.json",
    "https://raw.githubusercontent.com/udit-001/india-maps-data/main/geojson/Karnataka.json",
    "https://raw.githubusercontent.com/geohacker/india/master/state/ka.json"
  ];

  const normalizeDistrict = (props = {}) => {
    let raw =
      props.NAME_2 ||
      props.district ||
      props.name ||
      props.DISTRICT ||
      props.dtname ||
      props.Name ||
      props.dt_name ||
      props.DIST_NAME ||
      "";

    raw = String(raw).trim();
    if (!raw) return raw;
    if (NAME_MAP[raw]) return NAME_MAP[raw];

    const lower = raw.toLowerCase();

    for (const key of Object.keys(NAME_MAP)) {
      if (key.toLowerCase() === lower) return NAME_MAP[key];
    }

    for (const key of Object.keys(NAME_MAP)) {
      const lowerKey = key.toLowerCase();
      if (lower.includes(lowerKey) || lowerKey.includes(lower)) return NAME_MAP[key];
    }

    return raw;
  };

  const isHighlightedDistrict = (name) => HIGHLIGHT_DISTRICTS.has(name);

  const getInfo = (feature) => {
    const name = normalizeDistrict(feature?.properties || {});
    return {
      name,
      data: DISTRICTS[name] || null,
      highlighted: isHighlightedDistrict(name)
    };
  };

  const bubbleRadius = (students) => {
    if (students >= 40000) return 18;
    if (students >= 15000) return 13;
    if (students >= 5000) return 10;
    return 7;
  };

  const showLoadError = () => {
    const loader = document.getElementById("ka-map-loader");
    if (!loader) return;
    loader.innerHTML = '<span style="color:#b00020;font-size:0.85rem;">Map data could not be loaded. Please check internet connection.</span>';
  };

  const renderMap = (geoData) => {
    const d3 = globalThis.d3;
    if (!d3) return;

    const loader = document.getElementById("ka-map-loader");
    if (loader) loader.remove();

    const tooltip = document.getElementById("kaTooltip");
    const ttName = document.getElementById("kaTTName");
    const ttNum = document.getElementById("kaTTNum");
    const ttSchools = document.getElementById("kaTTSchools");

    const width = 620;
    const height = 760;

    const svg = d3
      .select(wrap)
      .insert("svg", ":first-child")
      .attr("id", "ka-map-svg")
      .attr("viewBox", `0 0 ${width} ${height}`);

    const projection = d3.geoMercator().fitSize([width - 50, height - 60], geoData);
    const pathGen = d3.geoPath().projection(projection);
    const group = svg.append("g").attr("transform", "translate(25,20)");

    const paths = group
      .selectAll(".ka-district")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("class", "ka-district")
      .attr("d", pathGen)
      .attr("fill", (feature) => {
        const info = getInfo(feature);
        if (!info.highlighted) return NON_CAMPUS_FILL;
        return HIGHLIGHT_FILL[info.name] || "#0D5C63";
      })
      .style("opacity", 0)
      .on("mouseenter", (_event, feature) => {
        const info = getInfo(feature);
        const districtName = info.name;
        const hoveredCampus = info.highlighted;

        paths.classed("dimmed", (node) => {
          const nodeInfo = getInfo(node);
          return hoveredCampus && nodeInfo.highlighted && nodeInfo.name !== districtName;
        });
        paths.classed("active", (node) => {
          const nodeInfo = getInfo(node);
          return hoveredCampus && nodeInfo.name === districtName;
        });

        labels.classed("active", (node) => {
          const nodeInfo = getInfo(node);
          return hoveredCampus && nodeInfo.name === districtName;
        });

        outerBubbles.attr("r", (node) => {
          const nodeInfo = getInfo(node);
          if (!nodeInfo.highlighted) return 0;
          const base = nodeInfo.data ? bubbleRadius(nodeInfo.data.students) : 7;
          return hoveredCampus && nodeInfo.name === districtName ? base * 1.4 : base;
        });

        innerBubbles.attr("r", (node) => {
          const nodeInfo = getInfo(node);
          if (!nodeInfo.highlighted) return 0;
          const base = (nodeInfo.data ? bubbleRadius(nodeInfo.data.students) : 7) * 0.42;
          return hoveredCampus && nodeInfo.name === districtName ? base * 1.4 : base;
        });

        if (ttName) ttName.textContent = districtName;
        if (ttNum) ttNum.textContent = hoveredCampus && info.data ? info.data.students.toLocaleString("en-IN") : "-";
        if (ttSchools) ttSchools.textContent = hoveredCampus && info.data ? info.data.schools : "No campus in this district";

        const centroid = pathGen.centroid(feature);
        const svgElement = document.getElementById("ka-map-svg");
        if (!svgElement) return;

        const rect = svgElement.getBoundingClientRect();
        const scaleX = rect.width / width;
        const scaleY = rect.height / height;

        if (tooltip) {
          tooltip.style.left = `${24 + (centroid[0] + 25) * scaleX}px`;
          tooltip.style.top = `${24 + (centroid[1] + 20) * scaleY}px`;
          tooltip.classList.add("visible");
        }
      })
      .on("mouseleave", () => {
        paths.classed("dimmed", false).classed("active", false);
        labels.classed("active", false);

        outerBubbles.attr("r", (node) => {
          const info = getInfo(node);
          if (!info.highlighted) return 0;
          return info.data ? bubbleRadius(info.data.students) : 7;
        });

        innerBubbles.attr("r", (node) => {
          const info = getInfo(node);
          if (!info.highlighted) return 0;
          return (info.data ? bubbleRadius(info.data.students) : 7) * 0.42;
        });

        if (tooltip) tooltip.classList.remove("visible");
      });

    paths
      .transition()
      .duration(500)
      .delay((_feature, index) => index * 18)
      .style("opacity", 1);

    const outerBubbles = group
      .selectAll(".ka-bubble-outer")
      .data(geoData.features)
      .enter()
      .append("circle")
      .attr("class", (feature) => {
        const info = getInfo(feature);
        return `ka-bubble-outer${info.name === "Bengaluru Urban" ? " hero-bubble" : ""}`;
      })
      .attr("cx", (feature) => pathGen.centroid(feature)[0])
      .attr("cy", (feature) => pathGen.centroid(feature)[1])
      .attr("r", (feature) => {
        const info = getInfo(feature);
        if (!info.highlighted) return 0;
        return info.data ? bubbleRadius(info.data.students) : 7;
      })
      .style("opacity", 0);

    const innerBubbles = group
      .selectAll(".ka-bubble-inner")
      .data(geoData.features)
      .enter()
      .append("circle")
      .attr("class", (feature) => {
        const info = getInfo(feature);
        return `ka-bubble-inner${info.name === "Bengaluru Urban" ? " hero-bubble" : ""}`;
      })
      .attr("cx", (feature) => pathGen.centroid(feature)[0])
      .attr("cy", (feature) => pathGen.centroid(feature)[1])
      .attr("r", (feature) => {
        const info = getInfo(feature);
        if (!info.highlighted) return 0;
        return (info.data ? bubbleRadius(info.data.students) : 7) * 0.42;
      })
      .style("opacity", 0);

    outerBubbles
      .transition()
      .duration(400)
      .delay((_feature, index) => 300 + index * 14)
      .style("opacity", (feature) => (getInfo(feature).highlighted ? 1 : 0));

    innerBubbles
      .transition()
      .duration(400)
      .delay((_feature, index) => 300 + index * 14)
      .style("opacity", (feature) => (getInfo(feature).highlighted ? 1 : 0));

    const labels = group
      .selectAll(".ka-label")
      .data(geoData.features)
      .enter()
      .append("text")
      .attr("class", "ka-label")
      .attr("x", (feature) => pathGen.centroid(feature)[0])
      .attr("y", (feature) => {
        const info = getInfo(feature);
        return pathGen.centroid(feature)[1] + (info.data ? bubbleRadius(info.data.students) : 7) + 12;
      })
      .attr("font-size", (feature) => {
        const name = getInfo(feature).name || "";
        if (name.length > 14) return 6.5;
        if (name.length > 10) return 7.5;
        return 8.5;
      })
      .text((feature) => {
        const info = getInfo(feature);
        if (!info.highlighted) return "";
        return info.name === "Bengaluru Urban" ? "Bengaluru" : info.name;
      })
      .style("opacity", 0);

    labels
      .transition()
      .duration(400)
      .delay((_feature, index) => 500 + index * 14)
      .style("opacity", (feature) => (getInfo(feature).highlighted ? 1 : 0));
  };

  const loadGeoJson = async () => {
    let lastError = null;

    for (const url of GEO_URLS) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        if (data?.features?.length >= 20) {
          renderMap(data);
          return;
        }
      } catch (error) {
        if (error instanceof Error) {
          lastError = error;
          continue;
        }

        throw error;
      }
    }

    if (lastError) {
      console.warn("Karnataka map: all GeoJSON sources failed to load.", lastError);
    }

    showLoadError();
  };

  const waitForD3 = () =>
    new Promise((resolve) => {
      if ("d3" in globalThis) {
        resolve();
        return;
      }

      const timer = setInterval(() => {
        if ("d3" in globalThis) {
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });

  const startMap = async () => {
    await waitForD3();
    await loadGeoJson();
  };

  startMap();
})();
