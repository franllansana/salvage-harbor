"use client";

import { useEffect, useRef, useState } from "react";

const contactEmail = "info@celaris.nl";

const mailToSeller =
  "mailto:info@celaris.nl?subject=Salvage%20Harbor%20seller%20application";

const mailToBuyer =
  "mailto:info@celaris.nl?subject=Salvage%20Harbor%20sourcing%20request";

const threeModuleUrl =
  "https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js";

const categories = [
  {
    number: "01",
    title: "Casino Equipment",
    text: "Roulette equipment, poker tables, gaming furniture and casino seating from cruise ships.",
  },
  {
    number: "02",
    title: "Cruise Seating Lots",
    text: "Deck chairs, lounge seats, theatre seating, restaurant chairs and bar stools in commercial volumes.",
  },
  {
    number: "03",
    title: "Hospitality Inventory",
    text: "Cruise dining furniture, bar counters, buffet areas, galley equipment and horeca-ready lots.",
  },
  {
    number: "04",
    title: "Cabin Furniture",
    text: "Bedside units, desks, wardrobes, mirrors and compact furniture from ship cabins.",
  },
  {
    number: "05",
    title: "Luxury Cruise Interior",
    text: "Atrium décor, lounge pieces, wall panels, mirrors, carpets, artwork and statement design pieces.",
  },
  {
    number: "06",
    title: "Marine Objects",
    text: "Royal yacht furniture, ship bars, brass fixtures, signs, lamps and collectible nautical objects.",
  },
];

const sourcing = [
  {
    title: "Cruise refits & dry docks",
    text: "Cruise ships regularly replace interiors during upgrades. Furniture, lighting, casino equipment, cabin units, theatre seating and hospitality items can become available during refurbishment.",
  },
  {
    title: "Shipyards & marine contractors",
    text: "Shipyards and interior contractors often handle removal projects during refits. These projects can create large, matching commercial lots.",
  },
  {
    title: "Approved recycling yards",
    text: "When older vessels are responsibly recycled, reusable interiors and equipment may be removed before materials are processed.",
  },
  {
    title: "Brokers & liquidators",
    text: "Maritime inventory is spread across brokers, auctions and liquidators. Salvage Harbor brings this supply together in one curated marketplace.",
  },
];

const buyers = [
  "Hotels",
  "Restaurants",
  "Glamping parks",
  "Event builders",
  "Casino concepts",
  "Beach clubs",
  "Interior designers",
  "Collectors",
];

const supplySources = [
  "Cruise refits",
  "Dry docks",
  "Shipyards",
  "Marine brokers",
  "Yacht refits",
  "Auction houses",
  "Liquidators",
  "Recycling yards",
];

const businessPoints = [
  {
    title: "Maritime inventory only",
    text: "Listings must originate from cruise ships, ships, ferries, yachts or other verified maritime environments.",
  },
  {
    title: "Verified sellers only",
    text: "Shipyards, brokers, liquidators and professional maritime sellers are manually reviewed before listing.",
  },
  {
    title: "Proof of origin required",
    text: "Sellers provide company details, item origin, quantity, condition photos and relevant logistics information.",
  },
  {
    title: "Buyer approval before payout",
    text: "Payment is only released after the buyer has received and approved the corresponding items.",
  },
  {
    title: "10% success commission",
    text: "Salvage Harbor earns a 10% success fee when a transaction is completed.",
  },
  {
    title: "Direct contact",
    text: `Seller applications and sourcing requests currently go through ${contactEmail}.`,
  },
];

const listings = [
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/bars/palm-beach-casino-bar-msc-armonia.jpg?as=1&bc=transparent&hash=5FEFF38A850A020708304E2772C972D2&mh=720&mw=920",
    label: "Cruise casino lot",
    category: "Casino & Entertainment",
    title: "Cruise Casino Roulette Equipment",
    quantity: "8 roulette tables available",
    description:
      "Cruise casino setup with roulette tables, gaming chairs and commercial entertainment furniture.",
    newValue: "€4,000",
    price: "€1,950",
    saving: "51%",
    note: "Demo estimate based on comparable commercial-grade equipment, condition and volume.",
    origin: "Antalya, Turkey",
    priceLine: "From €1,950 each",
    seller: "Verified cruise liquidator",
    photo: "Cruise casino image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/restaurants/armonia-restaurant-il-girasole.jpg?as=1&bc=transparent&hash=0C08D3A9404A779BA78E3B519ADC768C&mh=1080&mw=1380",
    label: "Deck restaurant lot",
    category: "Outdoor Hospitality",
    title: "Cruise Deck Restaurant Furniture Lot",
    quantity: "160 chairs + 45 tables",
    description:
      "Outdoor cruise restaurant furniture for beach clubs, hotel terraces, glamping parks and hospitality concepts.",
    newValue: "€350",
    price: "€120",
    saving: "66%",
    note: "Demo estimate based on comparable commercial outdoor hospitality furniture.",
    origin: "Izmir, Turkey",
    priceLine: "From €120 per item",
    seller: "Verified shipyard broker",
    photo: "Cruise deck restaurant image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/entertainment/armonia-entertainment-theatre-show.jpg?as=1&bc=transparent&hash=063B54676573C89AFF485B65CF899542&mh=1080&mw=1380",
    label: "Cruise theatre lot",
    category: "Entertainment Interior",
    title: "Cruise Theatre & Auditorium Seating",
    quantity: "320 seats available",
    description:
      "Cruise ship theatre seating suitable for cinemas, universities, event halls and private theatres.",
    newValue: "€350",
    price: "€85",
    saving: "76%",
    note: "Demo estimate based on comparable theatre seating, condition and volume.",
    origin: "Genoa, Italy",
    priceLine: "From €85 per seat",
    seller: "Verified cruise inventory seller",
    photo: "Cruise theatre image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/restaurants/armonia-restaurant-la-pergola.jpg?as=1&bc=transparent&hash=7496C6F776D98C0C984D47B008D21768&mh=1080&mw=1380",
    label: "Dining room lot",
    category: "Hospitality Inventory",
    title: "Cruise Dining Chair & Table Lot",
    quantity: "240 chairs + 60 tables",
    description:
      "Cruise dining room furniture for restaurants, hotels, cafés, wedding venues and hospitality refurbishments.",
    newValue: "€180",
    price: "€65",
    saving: "64%",
    note: "Demo estimate based on comparable commercial dining furniture and volume.",
    origin: "Hamburg, Germany",
    priceLine: "From €65 per item",
    seller: "Verified marine reseller",
    photo: "Cruise dining room image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/restaurants-bars/bars/palm-beach-casino-bar-msc-armonia.jpg?as=1&bc=transparent&hash=5FEFF38A850A020708304E2772C972D2&mh=720&mw=920",
    label: "Ship bar package",
    category: "Bars & Nightlife",
    title: "Cruise Bar Stools & Counter",
    quantity: "42 stools + bar counter",
    description:
      "Cruise bar interior package for cocktail bars, rooftop venues, beach clubs and event builders.",
    newValue: "€250",
    price: "€90",
    saving: "64%",
    note: "Demo estimate based on comparable commercial bar furniture and condition.",
    origin: "Edinburgh, United Kingdom",
    priceLine: "From €90 per item",
    seller: "Verified hospitality liquidator",
    photo: "Cruise bar image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-ocean-view.jpg?as=1&bc=transparent&hash=B4971B732D9EEA7C9FA02F50D12BE876&mh=1080&mw=1380",
    label: "Ship cabin lot",
    category: "Cabin Interior",
    title: "Ship Cabin Interior & Wooden Units",
    quantity: "80 cabin sets available",
    description:
      "Cruise cabin bedroom furniture, desks, mirrors and storage units for glamping pods and boutique hotels.",
    newValue: "€350",
    price: "€120",
    saving: "66%",
    note: "Demo estimate based on comparable cruise cabin furniture sets and volume.",
    origin: "Marseille, France",
    priceLine: "From €120 per set",
    seller: "Verified interior broker",
    photo: "Cruise cabin image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-balcony.jpg?as=1&bc=transparent&hash=2CF228DF2D94963E942D84E065A0F061&mh=1080&mw=1380",
    label: "Balcony cabin lot",
    category: "Cabin Furniture",
    title: "Cruise Balcony Cabin Furniture",
    quantity: "60 cabin sets available",
    description:
      "Cabin beds, desks, side units, mirrors and compact storage pieces from cruise accommodation interiors.",
    newValue: "€500",
    price: "€190",
    saving: "62%",
    note: "Demo estimate based on comparable cabin furniture, condition and quantity.",
    origin: "Dover, United Kingdom",
    priceLine: "From €190 per set",
    seller: "Verified cruise interior seller",
    photo: "Cruise balcony cabin image",
    source: "https://www.msccruises.com/",
  },
  {
    image:
      "https://www.msccruises.com/int/-/media/global-contents/ships/fleet/armonia/cabins/tile-image/armonia-interior.jpg?as=1&bc=transparent&hash=E125EF874315E98492858FF9A32A5CAC&mh=1080&mw=1380",
    label: "Interior cabin lot",
    category: "Compact Maritime Interior",
    title: "Cruise Interior Cabin Furniture",
    quantity: "95 cabin sets available",
    description:
      "Compact cruise cabin pieces for themed accommodation, hostels, glamping projects and tiny homes.",
    newValue: "€420",
    price: "€150",
    saving: "64%",
    note: "Demo estimate based on comparable cabin furniture and commercial reuse value.",
    origin: "Barcelona, Spain",
    priceLine: "From €150 per set",
    seller: "Verified cabin interior broker",
    photo: "Cruise interior cabin image",
    source: "https://www.msccruises.com/",
  },
];

function StatCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-xl">
      <p className="text-2xl font-black leading-none text-white md:text-3xl">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200 md:text-sm">
        {label}
      </p>

      <h2 className="mt-4 text-3xl font-black tracking-[-0.055em] text-white md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-8 text-white/60 md:mt-6 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CruiseShipScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [sceneStatus, setSceneStatus] = useState<
    "loading" | "ready" | "disabled" | "error"
  >("loading");

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!desktopQuery.matches || reducedMotionQuery.matches) {
      setSceneStatus("disabled");
      return;
    }

    let mounted = true;
    let animationFrame = 0;
    let renderer: any = null;
    let resizeObserver: ResizeObserver | null = null;

    const mouse = {
      x: 0,
      y: 0,
    };

    let scrollProgress = 0;

    const handlePointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollProgress = Math.min(window.scrollY / window.innerHeight, 1);
    };

    const initialiseScene = async () => {
      try {
        const dynamicImport = new Function(
          "url",
          "return import(url)",
        ) as (url: string) => Promise<any>;

        const THREE = await dynamicImport(threeModuleUrl);

        if (!mounted || !canvas.parentElement) {
          return;
        }

        const container = canvas.parentElement;
        const scene = new THREE.Scene();

        scene.background = new THREE.Color(0x061017);
        scene.fog = new THREE.FogExp2(0x061017, 0.025);

        const camera = new THREE.PerspectiveCamera(
          42,
          container.clientWidth / container.clientHeight,
          0.1,
          150,
        );

        camera.position.set(11.5, 5.7, 15.5);
        camera.lookAt(0, 1.5, 0);

        renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.setSize(
          container.clientWidth,
          container.clientHeight,
          false,
        );

        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const hemisphereLight = new THREE.HemisphereLight(
          0xbcecff,
          0x061017,
          1.5,
        );

        scene.add(hemisphereLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
        keyLight.position.set(8, 13, 9);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 2048;
        keyLight.shadow.mapSize.height = 2048;
        keyLight.shadow.camera.left = -18;
        keyLight.shadow.camera.right = 18;
        keyLight.shadow.camera.top = 18;
        keyLight.shadow.camera.bottom = -18;

        scene.add(keyLight);

        const blueLight = new THREE.PointLight(0x43d9ff, 30, 30, 2);
        blueLight.position.set(-5, 3, 8);

        scene.add(blueLight);

        const warmLight = new THREE.PointLight(0xffc880, 18, 24, 2);
        warmLight.position.set(5, 5, -4);

        scene.add(warmLight);

        const ship = new THREE.Group();

        ship.position.set(-0.5, -0.05, 0);
        ship.rotation.set(0.01, -0.38, 0);

        scene.add(ship);

        const hullMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x071824,
          roughness: 0.28,
          metalness: 0.35,
          clearcoat: 0.7,
          clearcoatRoughness: 0.2,
        });

        const lowerHullMaterial = new THREE.MeshStandardMaterial({
          color: 0x142c3b,
          roughness: 0.36,
          metalness: 0.2,
        });

        const whiteMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xeaf4f5,
          roughness: 0.27,
          metalness: 0.05,
          clearcoat: 0.45,
          clearcoatRoughness: 0.25,
        });

        const darkGlassMaterial = new THREE.MeshStandardMaterial({
          color: 0x071c26,
          emissive: 0x104e62,
          emissiveIntensity: 0.55,
          roughness: 0.18,
          metalness: 0.45,
        });

        const windowMaterial = new THREE.MeshStandardMaterial({
          color: 0x72dffa,
          emissive: 0x29a6c4,
          emissiveIntensity: 1.7,
          roughness: 0.14,
          metalness: 0.15,
        });

        const warmWindowMaterial = new THREE.MeshStandardMaterial({
          color: 0xffd49b,
          emissive: 0xff9e45,
          emissiveIntensity: 1.4,
          roughness: 0.25,
        });

        const accentMaterial = new THREE.MeshStandardMaterial({
          color: 0xe06e32,
          roughness: 0.38,
          metalness: 0.08,
        });

        const railMaterial = new THREE.MeshStandardMaterial({
          color: 0xc9d6d9,
          roughness: 0.3,
          metalness: 0.65,
        });

        const createBox = (
          width: number,
          height: number,
          depth: number,
          x: number,
          y: number,
          z: number,
          material: any,
        ) => {
          const geometry = new THREE.BoxGeometry(width, height, depth);
          const mesh = new THREE.Mesh(geometry, material);

          mesh.position.set(x, y, z);
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          ship.add(mesh);

          return mesh;
        };

        const hullShape = new THREE.Shape();

        hullShape.moveTo(-6.4, -0.75);
        hullShape.lineTo(4.7, -0.75);
        hullShape.quadraticCurveTo(6.05, -0.58, 6.65, 0.1);
        hullShape.quadraticCurveTo(6.1, 0.75, 4.85, 0.95);
        hullShape.lineTo(-5.65, 0.95);
        hullShape.quadraticCurveTo(-6.35, 0.5, -6.4, -0.75);

        const hullGeometry = new THREE.ExtrudeGeometry(hullShape, {
          depth: 2.9,
          bevelEnabled: true,
          bevelSize: 0.12,
          bevelThickness: 0.12,
          bevelSegments: 4,
          curveSegments: 12,
        });

        hullGeometry.translate(0, 0, -1.45);

        const hull = new THREE.Mesh(hullGeometry, hullMaterial);

        hull.castShadow = true;
        hull.receiveShadow = true;

        ship.add(hull);

        createBox(
          11.3,
          0.18,
          2.85,
          -0.15,
          0.98,
          0,
          lowerHullMaterial,
        );

        createBox(10.1, 0.95, 2.68, -0.3, 1.52, 0, whiteMaterial);
        createBox(8.9, 0.85, 2.48, 0.05, 2.42, 0, whiteMaterial);
        createBox(7.55, 0.78, 2.28, 0.1, 3.22, 0, whiteMaterial);
        createBox(4.2, 0.8, 2.15, 2.25, 4.02, 0, whiteMaterial);

        const bridge = createBox(
          2.65,
          0.5,
          2.2,
          3.65,
          4.2,
          0,
          darkGlassMaterial,
        );

        bridge.rotation.z = -0.025;

        createBox(5.2, 0.15, 2.38, 0.15, 3.68, 0, railMaterial);
        createBox(6.7, 0.1, 2.4, -0.05, 2.85, 0, railMaterial);
        createBox(8.0, 0.1, 2.58, -0.2, 2.02, 0, railMaterial);

        const addWindowRow = (
          count: number,
          startX: number,
          spacing: number,
          y: number,
          z: number,
          material: any,
          width = 0.3,
        ) => {
          for (let index = 0; index < count; index += 1) {
            const geometry = new THREE.BoxGeometry(width, 0.12, 0.045);
            const windowMesh = new THREE.Mesh(geometry, material);

            windowMesh.position.set(startX + index * spacing, y, z);

            ship.add(windowMesh);
          }
        };

        addWindowRow(24, -4.8, 0.39, 1.56, 1.37, windowMaterial);
        addWindowRow(24, -4.8, 0.39, 1.56, -1.37, windowMaterial);

        addWindowRow(20, -3.9, 0.39, 2.42, 1.27, warmWindowMaterial);
        addWindowRow(20, -3.9, 0.39, 2.42, -1.27, warmWindowMaterial);

        addWindowRow(16, -3.0, 0.39, 3.23, 1.17, windowMaterial);
        addWindowRow(16, -3.0, 0.39, 3.23, -1.17, windowMaterial);

        addWindowRow(
          8,
          2.2,
          0.31,
          4.2,
          1.12,
          warmWindowMaterial,
          0.22,
        );

        for (let index = 0; index < 7; index += 1) {
          const boatGeometry = new THREE.CylinderGeometry(
            0.18,
            0.18,
            0.88,
            18,
          );

          const lifeboat = new THREE.Mesh(boatGeometry, accentMaterial);

          lifeboat.rotation.z = Math.PI / 2;
          lifeboat.position.set(-3.6 + index * 1.05, 1.06, 1.58);
          lifeboat.castShadow = true;

          ship.add(lifeboat);

          const oppositeBoat = lifeboat.clone();

          oppositeBoat.position.z = -1.58;

          ship.add(oppositeBoat);
        }

        const funnelGeometry = new THREE.CylinderGeometry(
          0.45,
          0.55,
          1.15,
          24,
        );

        const funnel = new THREE.Mesh(funnelGeometry, accentMaterial);

        funnel.position.set(-1.4, 4.55, 0);
        funnel.castShadow = true;

        ship.add(funnel);

        const funnelTopGeometry = new THREE.CylinderGeometry(
          0.38,
          0.42,
          0.28,
          24,
        );

        const funnelTop = new THREE.Mesh(
          funnelTopGeometry,
          darkGlassMaterial,
        );

        funnelTop.position.set(-1.4, 5.22, 0);

        ship.add(funnelTop);

        const domeGeometry = new THREE.SphereGeometry(0.38, 24, 18);
        const dome = new THREE.Mesh(domeGeometry, whiteMaterial);

        dome.position.set(0.3, 4.4, 0);
        dome.scale.y = 0.72;

        ship.add(dome);

        const secondDome = dome.clone();

        secondDome.position.set(-0.55, 4.33, 0);
        secondDome.scale.set(0.72, 0.52, 0.72);

        ship.add(secondDome);

        const mastGeometry = new THREE.CylinderGeometry(
          0.045,
          0.065,
          1.45,
          12,
        );

        const mast = new THREE.Mesh(mastGeometry, railMaterial);

        mast.position.set(1.3, 5, 0);

        ship.add(mast);

        const radarGeometry = new THREE.BoxGeometry(0.85, 0.06, 0.08);
        const radar = new THREE.Mesh(radarGeometry, railMaterial);

        radar.position.set(1.3, 5.55, 0);

        ship.add(radar);

        const poolGeometry = new THREE.BoxGeometry(1.7, 0.05, 0.85);
        const poolMaterial = new THREE.MeshStandardMaterial({
          color: 0x2be5ed,
          emissive: 0x138d9a,
          emissiveIntensity: 0.7,
          roughness: 0.12,
        });

        const pool = new THREE.Mesh(poolGeometry, poolMaterial);

        pool.position.set(-2.9, 3.67, 0);

        ship.add(pool);

        const waterUniforms = {
          uTime: {
            value: 0,
          },
          uDeepColor: {
            value: new THREE.Color(0x031a25),
          },
          uShallowColor: {
            value: new THREE.Color(0x0a6f83),
          },
        };

        const waterMaterial = new THREE.ShaderMaterial({
          uniforms: waterUniforms,
          transparent: false,
          side: THREE.DoubleSide,
          vertexShader: `
            uniform float uTime;
            varying float vWave;
            varying vec3 vWorldPosition;

            void main() {
              vec3 transformedPosition = position;

              float largeWave =
                sin(transformedPosition.x * 0.28 + uTime * 0.65) * 0.18;

              float smallWave =
                cos(transformedPosition.y * 0.42 + uTime * 0.8) * 0.1;

              float crossWave =
                sin(
                  (transformedPosition.x + transformedPosition.y) * 0.17
                  + uTime * 0.45
                ) * 0.08;

              transformedPosition.z += largeWave + smallWave + crossWave;

              vWave = transformedPosition.z;
              vWorldPosition =
                (modelMatrix * vec4(transformedPosition, 1.0)).xyz;

              gl_Position =
                projectionMatrix *
                modelViewMatrix *
                vec4(transformedPosition, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 uDeepColor;
            uniform vec3 uShallowColor;

            varying float vWave;
            varying vec3 vWorldPosition;

            void main() {
              float waveMix = smoothstep(-0.25, 0.35, vWave);

              vec3 waterColor =
                mix(uDeepColor, uShallowColor, waveMix);

              float distanceFade =
                smoothstep(65.0, 4.0, length(vWorldPosition.xz));

              waterColor += vec3(0.03, 0.12, 0.15) * distanceFade;

              gl_FragColor = vec4(waterColor, 1.0);
            }
          `,
        });

        const waterGeometry = new THREE.PlaneGeometry(
          110,
          110,
          120,
          120,
        );

        const water = new THREE.Mesh(waterGeometry, waterMaterial);

        water.rotation.x = -Math.PI / 2;
        water.position.y = -0.92;
        water.receiveShadow = true;

        scene.add(water);

        const starsGeometry = new THREE.BufferGeometry();
        const starPositions: number[] = [];

        for (let index = 0; index < 700; index += 1) {
          starPositions.push(
            (Math.random() - 0.5) * 90,
            Math.random() * 35 + 3,
            (Math.random() - 0.5) * 75,
          );
        }

        starsGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(starPositions, 3),
        );

        const starsMaterial = new THREE.PointsMaterial({
          color: 0x9deafa,
          size: 0.055,
          transparent: true,
          opacity: 0.62,
          depthWrite: false,
        });

        const stars = new THREE.Points(starsGeometry, starsMaterial);

        scene.add(stars);

        const glowGeometry = new THREE.SphereGeometry(2.4, 32, 24);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0x0f6376,
          transparent: true,
          opacity: 0.17,
        });

        const glow = new THREE.Mesh(glowGeometry, glowMaterial);

        glow.position.set(-16, 10, -22);
        glow.scale.set(2.2, 2.2, 2.2);

        scene.add(glow);

        const clock = new THREE.Clock();

        const resize = () => {
          if (!canvas.parentElement || !renderer) {
            return;
          }

          const width = canvas.parentElement.clientWidth;
          const height = canvas.parentElement.clientHeight;

          camera.aspect = width / height;
          camera.updateProjectionMatrix();

          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
          renderer.setSize(width, height, false);
        };

        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);

        window.addEventListener("pointermove", handlePointerMove, {
          passive: true,
        });

        window.addEventListener("scroll", handleScroll, {
          passive: true,
        });

        const animate = () => {
          if (!mounted) {
            return;
          }

          const time = clock.getElapsedTime();

          waterUniforms.uTime.value = time;

          ship.position.y =
            -0.05 + Math.sin(time * 0.72) * 0.075;

          ship.rotation.z =
            Math.sin(time * 0.45) * 0.012;

          ship.rotation.x =
            0.01 + Math.cos(time * 0.38) * 0.006;

          ship.rotation.y =
            -0.38 +
            Math.sin(time * 0.22) * 0.025 +
            mouse.x * 0.025;

          stars.rotation.y = time * 0.005;

          const targetCameraX =
            11.5 + mouse.x * 0.85 - scrollProgress * 1.1;

          const targetCameraY =
            5.7 - mouse.y * 0.45 + scrollProgress * 0.5;

          const targetCameraZ =
            15.5 - scrollProgress * 0.9;

          camera.position.x +=
            (targetCameraX - camera.position.x) * 0.025;

          camera.position.y +=
            (targetCameraY - camera.position.y) * 0.025;

          camera.position.z +=
            (targetCameraZ - camera.position.z) * 0.025;

          camera.lookAt(0, 1.65, 0);

          renderer.render(scene, camera);

          if (sceneStatus !== "ready") {
            setSceneStatus("ready");
          }

          animationFrame = window.requestAnimationFrame(animate);
        };

        animate();

        return () => {
          window.removeEventListener(
            "pointermove",
            handlePointerMove,
          );

          window.removeEventListener("scroll", handleScroll);
        };
      } catch (error) {
        console.error("Unable to load the 3D scene:", error);

        if (mounted) {
          setSceneStatus("error");
        }
      }
    };

    let removeListeners: (() => void) | undefined;

    initialiseScene().then((cleanup) => {
      removeListeners = cleanup;
    });

    return () => {
      mounted = false;

      window.cancelAnimationFrame(animationFrame);

      resizeObserver?.disconnect();
      removeListeners?.();

      renderer?.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 hidden overflow-hidden md:block">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />

      {sceneStatus === "loading" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#061017]">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/60 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-200" />
            Loading 3D cruise ship
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ListingCard({
  listing,
}: {
  listing: (typeof listings)[number];
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a171b] shadow-2xl shadow-black/20 md:rounded-[2rem]">
      <div className="relative h-72 overflow-hidden md:h-80">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071013] via-[#071013]/10 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#071013] md:left-5 md:top-5">
          {listing.label}
        </div>
      </div>

      <div className="p-5 md:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 md:text-sm">
          {listing.category}
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-[-0.05em] text-white md:text-3xl">
          {listing.title}
        </h3>

        <p className="mt-2 font-bold text-white/80">
          {listing.quantity}
        </p>

        <p className="mt-4 leading-7 text-white/60">
          {listing.description}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/[0.05] p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-white/40">
              Estimated new value
            </p>

            <p className="mt-1 text-xl font-black text-white line-through decoration-white/40">
              {listing.newValue}
            </p>
          </div>

          <div className="rounded-2xl bg-cyan-300 p-4 text-[#071013]">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] opacity-60">
              Salvage Harbor price
            </p>

            <p className="mt-1 text-xl font-black">
              {listing.price}
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-white/40">
              Potential saving
            </p>

            <p className="mt-1 text-xl font-black text-cyan-200">
              {listing.saving}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/40">
          {listing.note}
        </p>

        <div className="mt-6 grid gap-3 text-sm text-white/60 sm:grid-cols-2">
          <p>
            <span className="font-bold text-white">Origin</span>{" "}
            {listing.origin}
          </p>

          <p>
            <span className="font-bold text-white">Price</span>{" "}
            {listing.priceLine}
          </p>

          <p>
            <span className="font-bold text-white">Seller</span>{" "}
            {listing.seller}
          </p>

          <p>
            <span className="font-bold text-white">
              Platform fee
            </span>{" "}
            10% success commission
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-sm font-bold text-white">
            Secure payment
          </p>

          <p className="mt-2 text-sm leading-6 text-white/50">
            Funds are only released after the buyer has received and
            approved the corresponding items.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={mailToBuyer}
            className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-[#071013] transition hover:bg-cyan-200"
          >
            Request lot
          </a>

          <a
            href={listing.source}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/30 underline transition hover:text-white/60"
          >
            {listing.photo}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const enterMarketplace = () => {
    document
      .getElementById("marketplace")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071013] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061017]/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <a
            href="#"
            className="flex min-w-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white text-lg font-black text-[#071013] md:h-10 md:w-10 md:text-sm">
              S
            </div>

            <div className="min-w-0">
              <p className="truncate text-[0.9rem] font-bold tracking-[0.15em] text-white md:text-sm md:tracking-[0.22em]">
                Salvage Harbor
              </p>

              <p className="hidden text-xs text-white/45 sm:block">
                Verified cruise & ship salvage
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a
              href="#what-we-do"
              className="transition hover:text-white"
            >
              What we do
            </a>

            <a
              href="#categories"
              className="transition hover:text-white"
            >
              Categories
            </a>

            <a
              href="#sourcing"
              className="transition hover:text-white"
            >
              Sourcing
            </a>

            <a
              href="#marketplace"
              className="transition hover:text-white"
            >
              Marketplace
            </a>
          </nav>

          <a
            href={mailToSeller}
            className="shrink-0 rounded-full bg-white px-4 py-3 text-sm font-bold text-[#071013] transition hover:bg-cyan-200 md:px-5 md:py-2.5"
          >
            Request access
          </a>
        </div>
      </header>

      <section className="relative min-h-[900px] overflow-hidden bg-[#061017] md:min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(37,211,235,0.2),transparent_34%),radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(145deg,#061017_0%,#08232d_45%,#08141c_100%)]" />

        <CruiseShipScene />

        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#061017] via-[#061017]/73 to-transparent md:block" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061017] via-transparent to-[#061017]/20" />

        <div className="absolute inset-0 overflow-hidden md:hidden">
          <div className="absolute -right-32 top-28 h-80 w-80 rounded-full border border-cyan-200/10 bg-cyan-300/5 blur-sm" />

          <div className="absolute -left-24 top-80 h-64 w-64 rounded-full bg-cyan-300/10 blur-[90px]" />

          <svg
            viewBox="0 0 700 260"
            aria-hidden="true"
            className="absolute bottom-28 left-1/2 w-[680px] max-w-none -translate-x-1/2 text-white/[0.07]"
            fill="none"
          >
            <path
              d="M72 171H545L627 132L605 187C594 211 571 226 545 226H124C99 226 78 207 72 171Z"
              fill="currentColor"
            />

            <path
              d="M167 102H489L536 171H127L167 102Z"
              fill="currentColor"
            />

            <path
              d="M242 53H432L474 102H205L242 53Z"
              fill="currentColor"
            />

            <path
              d="M308 18H391L415 53H286L308 18Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[900px] max-w-7xl items-center px-4 pb-16 pt-28 md:min-h-screen md:px-8 md:pb-20 md:pt-32">
          <div className="max-w-[790px]">
            <div className="mb-6 inline-flex max-w-[340px] rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-sm font-medium leading-6 text-white/80 backdrop-blur-xl md:max-w-none md:px-4 md:py-2">
              Live 3D maritime marketplace experience
            </div>

            <h1 className="max-w-[760px] text-[3.25rem] font-black leading-[0.88] tracking-[-0.075em] text-white sm:text-[4.5rem] md:text-[5.7rem]">
              Maritime interiors with a second life.
            </h1>

            <p className="mt-7 max-w-[620px] text-[1.05rem] leading-8 text-white/70 md:text-xl">
              Verified cruise, yacht and ship interiors for hotels,
              restaurants, glamping concepts, event builders and
              collectors.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={enterMarketplace}
                className="w-full rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.17em] text-[#071013] transition hover:bg-cyan-200 sm:w-auto"
              >
                Enter marketplace
              </button>

              <a
                href={mailToSeller}
                className="w-full rounded-full border border-white/20 bg-white/[0.04] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.17em] text-white backdrop-blur-xl transition hover:bg-white/10 sm:w-auto"
              >
                Apply as seller
              </a>
            </div>

            <div className="mt-9 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 md:mt-12">
              <StatCard
                title="Ship"
                text="Cruise, yacht and maritime inventory"
              />

              <StatCard
                title="10%"
                text="Success commission"
              />

              <StatCard
                title="Verified"
                text="Seller and origin checks"
              />
            </div>

            <div className="mt-9 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/35 md:flex">
              <span className="h-px w-10 bg-white/25" />
              Move your cursor to explore the ship
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/30 md:flex">
          Scroll to explore
          <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      <section
        id="what-we-do"
        className="border-y border-white/10 bg-white/[0.025]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            label="What we do"
            title="A simpler way to source verified cruise and ship interiors."
          />

          <div className="space-y-5 text-base leading-8 text-white/65 md:space-y-6 md:text-lg">
            <p>
              Salvage Harbor helps hotels, restaurants, glamping
              parks, event builders and collectors buy verified cruise
              and ship interiors from professional maritime sellers.
            </p>

            <p>
              It offers a cost-effective way to source premium
              furniture, décor and hospitality equipment with genuine
              maritime character.
            </p>

            <p>
              We focus on bulk lots such as deck chairs, dining
              furniture, casino equipment, theatre seating, cabin
              interiors, ship bars and luxury maritime décor.
            </p>

            <p className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.08] p-5 text-base font-bold text-cyan-100">
              Questions, seller applications or sourcing requests?
              Email{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="underline"
              >
                {contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24"
      >
        <SectionHeading
          label="High-value categories"
          title="Real cruise, ship and yacht interiors."
          description="Cruise ships are floating hotels. Furniture, hospitality equipment, casino items and decorative pieces can be offered as professional project-ready lots."
        />

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.06] md:rounded-[2rem] md:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-sm font-black text-cyan-200">
                  {item.number}
                </span>

                <span className="text-sm text-white/30 transition group-hover:text-cyan-200">
                  View category →
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-[-0.045em] text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-white/55">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="sourcing"
        className="border-y border-white/10 bg-[#0a171b]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              label="Sourcing & trust"
              title="Where the inventory can come from."
              description="The platform focuses on verified maritime supply from refits, shipyards, brokers, auctions, liquidators and responsible recycling partners."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {sourcing.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 md:rounded-[2rem]"
                >
                  <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            label="Who buys this inventory?"
            title="One ship can supply an entire commercial concept."
            description="Matching deck chairs, dining furniture, bar counters, theatre seats and cabin furniture become more valuable when offered as complete commercial lots."
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {buyers.map((buyer) => (
              <div
                key={buyer}
                className="flex min-h-24 items-end rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 font-black text-white md:min-h-28 md:rounded-3xl md:p-5"
              >
                {buyer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            label="Typical supply sources"
            title="Built for a fragmented salvage market."
          />

          <div>
            <p className="max-w-3xl text-base leading-8 text-white/60 md:text-lg">
              Maritime items are often spread across dealers,
              shipyards, auctions and brokers. Salvage Harbor makes the
              supply easier to discover, compare and purchase.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {supplySources.map((source) => (
                <div
                  key={source}
                  className="rounded-2xl border border-white/10 bg-[#071013] px-5 py-4 text-sm font-bold text-white/70"
                >
                  {source}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="marketplace"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24"
      >
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            label="Marketplace preview"
            title="Cruise seating, dining rooms, casino lots and ship interiors."
            description="Demo listings show estimated new value, Salvage Harbor price, potential savings, origin, quantity and seller status."
          />

          <a
            href={mailToBuyer}
            className="shrink-0 rounded-full border border-cyan-300/35 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300 hover:text-[#071013]"
          >
            Request a lot
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 md:gap-8 lg:grid-cols-2">
          {listings.map((listing) => (
            <ListingCard
              key={listing.title}
              listing={listing}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a171b]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            label="Business model"
            title="Verified sellers, protected payments and 10% commission."
            description="Salvage Harbor creates a clearer route between professional maritime sellers and buyers looking for valuable reusable inventory."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {businessPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 md:rounded-[2rem]"
              >
                <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-white/55">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sellers"
        className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24"
      >
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300 text-[#071013] md:rounded-[2.5rem]">
          <div className="grid gap-10 p-6 md:p-12 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] opacity-55">
                Apply as seller
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] md:text-6xl">
                Have cruise furniture or maritime inventory?
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 opacity-70 md:text-lg">
                Apply to sell on Salvage Harbor. We focus on cruise
                interiors, hospitality equipment, casino furniture,
                bulk seating and rare maritime design pieces with clear
                legal origin.
              </p>

              <p className="mt-6 text-lg font-black">
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="underline"
                >
                  {contactEmail}
                </a>
              </p>

              <p className="mt-2 text-sm font-medium opacity-65">
                Salvage Harbor is currently operated by Celaris.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-4">
              <a
                href={mailToSeller}
                className="rounded-full bg-[#071013] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#10242a]"
              >
                Apply as verified seller
              </a>

              <a
                href={mailToBuyer}
                className="rounded-full border border-[#071013]/25 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#071013] transition hover:bg-[#071013]/10"
              >
                Send sourcing request
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Salvage Harbor Europe</p>

          <div className="flex flex-wrap gap-4">
            <span>Maritime inventory only</span>
            <span>Verified sellers</span>
            <span>Protected payments</span>
            <span>10% commission</span>

            <a
              href={`mailto:${contactEmail}`}
              className="text-cyan-200"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
