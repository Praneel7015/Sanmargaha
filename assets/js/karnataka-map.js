(() => {
  const wrap = document.getElementById("ka-map-wrap");
  if (!wrap) return;

  const CAMPUS_DISTRICTS = {
    "Bengaluru Urban": {
      fill: "#25ac13", // Red for Bengaluru
      students: 49250,
      label: "Bengaluru",
      heroBubble: true,
      shortAddress: {
        line1: "8th Block Jayanagar",
        line2: "Bengaluru - 560070"
      }
    },
    Dharwad: {
      fill: "#6f19d1", // Yellow for Dharwad
      students: 750,
      label: "Dharwad",
      heroBubble: false,
      shortAddress: {
        line1: "Kalyan Nagar",
        line2: "Dharwad - 580007"
      }
    }
  };

  const DISTRICT_ALIASES = {
    bangalore: "Bengaluru Urban",
    "bangalore urban": "Bengaluru Urban",
    "bengaluru urban": "Bengaluru Urban",
    "bangalore rural": "Bengaluru Rural",
    "bengaluru rural": "Bengaluru Rural",
    dharwad: "Dharwad",
    dharwada: "Dharwad"
  };

  const NON_CAMPUS_FILL = "#D8DCE3";

  const GEO_URLS = [
    "https://raw.githubusercontent.com/inosaint/StatesOfIndia/master/karnataka.geojson",
    "https://raw.githubusercontent.com/civictech-India/INDIA-GEO-JSON-Datasets/main/Karnataka/Karnataka_District_Boundary.json",
    "https://raw.githubusercontent.com/udit-001/india-maps-data/main/geojson/Karnataka.json",
    "https://raw.githubusercontent.com/geohacker/india/master/state/ka.json"
  ];

  const getRawDistrictName = (props = {}) => {
    const keys = ["NAME_2", "district", "name", "DISTRICT", "dtname", "Name", "dt_name", "DIST_NAME"];
    for (const key of keys) {
      const value = props[key];
      if (value) return String(value).trim();
    }
    return "";
  };

  const toAliasKey = (value) =>
    String(value)
      .toLowerCase()
      .replaceAll(/[^a-z\s]/g, " ")
      .replaceAll(/\s+/g, " ")
      .trim();

  const normalizeDistrict = (props = {}) => {
    const raw = getRawDistrictName(props);
    if (!raw) return "";

    const normalized = toAliasKey(raw);
    const normalizedWithoutDistrict = normalized.replaceAll(/\bdistrict\b/g, "").replaceAll(/\s+/g, " ").trim();

    if (DISTRICT_ALIASES[normalizedWithoutDistrict]) return DISTRICT_ALIASES[normalizedWithoutDistrict];
    if (DISTRICT_ALIASES[normalized]) return DISTRICT_ALIASES[normalized];

    return raw;
  };

  const getInfo = (feature) => {
    const name = normalizeDistrict(feature?.properties || {});
    const campus = CAMPUS_DISTRICTS[name] || null;

    return {
      name,
      campus,
      highlighted: Boolean(campus)
    };
  };

  const bubbleRadius = (students) => {
    if (students >= 40000) return 18;
    if (students >= 15000) return 13;
    if (students >= 5000) return 10;
    return 7;
  };

  const getBaseBubbleRadius = (info) => {
    if (!info.highlighted || !info.campus) return 0;
    return bubbleRadius(info.campus.students);
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
        return info.campus?.fill || NON_CAMPUS_FILL;
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
          const base = getBaseBubbleRadius(nodeInfo);
          if (!base) return 0;
          return hoveredCampus && nodeInfo.name === districtName ? base * 1.4 : base;
        });

        innerBubbles.attr("r", (node) => {
          const nodeInfo = getInfo(node);
          const base = getBaseBubbleRadius(nodeInfo);
          if (!base) return 0;
          const innerBase = base * 0.42;
          return hoveredCampus && nodeInfo.name === districtName ? innerBase * 1.4 : innerBase;
        });

        if (ttName) ttName.textContent = districtName;
        const shortAddress = info.campus?.shortAddress || null;
        if (ttNum) ttNum.textContent = hoveredCampus && shortAddress ? shortAddress.line1 : "-";
        if (ttSchools) ttSchools.textContent = hoveredCampus && shortAddress ? shortAddress.line2 : "No campus in this district";

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
          return getBaseBubbleRadius(info);
        });

        innerBubbles.attr("r", (node) => {
          const info = getInfo(node);
          const base = getBaseBubbleRadius(info);
          return base ? base * 0.42 : 0;
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
        return `ka-bubble-outer${info.campus?.heroBubble ? " hero-bubble" : ""}`;
      })
      .attr("cx", (feature) => pathGen.centroid(feature)[0])
      .attr("cy", (feature) => pathGen.centroid(feature)[1])
      .attr("r", (feature) => getBaseBubbleRadius(getInfo(feature)))
      .style("opacity", 0);

    const innerBubbles = group
      .selectAll(".ka-bubble-inner")
      .data(geoData.features)
      .enter()
      .append("circle")
      .attr("class", (feature) => {
        const info = getInfo(feature);
        return `ka-bubble-inner${info.campus?.heroBubble ? " hero-bubble" : ""}`;
      })
      .attr("cx", (feature) => pathGen.centroid(feature)[0])
      .attr("cy", (feature) => pathGen.centroid(feature)[1])
      .attr("r", (feature) => {
        const base = getBaseBubbleRadius(getInfo(feature));
        return base ? base * 0.42 : 0;
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
        return pathGen.centroid(feature)[1] + getBaseBubbleRadius(info) + 12;
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
        return info.campus?.label || info.name;
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
