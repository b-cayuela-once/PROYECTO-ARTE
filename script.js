/**
 * CONFIGURACIÓN Y CONSTANTES
 */
const CLOUD_NAME = "dfmdykczr";
const CLD_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto`;

/**
 * LISTA DE TODOS LOS ARTISTAS CON OBRA PERSONAL
 */
const artistsList = [
    { name: "Carmen Aldunate", img: "ARTE52.0_s6k3ag" },
    { name: "Guillermo Núñez", img: "ARTE38.0_fufsvn" },
    { name: "Francisco Ariztia", img: "ARTE50.0_gfn2ou" },
    { name: "Keka Ruiz Tagle", img: "ARTE49.0_zlpc21" },
    { name: "Carlos Catasse", img: "ARTE39.0_bjfszz" },
    { name: "Andrés ´Titi´ Gana", img: "ARTE4.0_hleuuv" },
    { name: "Anne Saussois", img: "ARTE46.0_zldvoa" },
    { name: "Roser Bru", img: "ARTE43.0_l4aemq" },
    { name: "Victor Delfín", img: "ARTE44.0_p5bvot" },
    { name: "Humberto Poblete-Bustamante", img: "ARTE42.0_sljr4r" },
    { name: "Ruperto Cádiz", img: "ARTE41.0_drkajf" },
    { name: "Matías Vergara Delorenzo", img: "ARTE40.0_eudhs1" },
    { name: "José Santos Guerra", img: "ARTE33.0_yxwuqs" },
    { name: "Ernesto Banderas", img: "ARTE31.0_a8tfjb" },
    { name: "Mario Gómez", img: "ARTE30.0_clg2lq" },
    { name: "Hernán Cueva", img: "ARTE29.0_ixulni" },
    { name: "José Balmes Parramón", img: "ARTE28.0_gesjby" },
    { name: "Roko Matjasic", img: "ARTE27.0_nmh0dc" },
    { name: "Santiago Aránguiz Sánchez", img: "ARTE26.0_huvipn" },
    { name: "Zdravko Ducmelic", img: "ARTE25.0_z6p28b" },
    { name: "Luis Tejada Amigo", img: "ARTE24.0_d6wntk" },
    { name: "Arturo Pacheco Altamirano", img: "ARTE22.0_bvxh7o" },
    { name: "Pablo Picasso", img: "ARTE21.0_tpmrv8" },
    { name: "Roy Lichtenstein", img: "ARTE20.0_w3haq3" },
    { name: "Hardy Wistuba", img: "ARTE19.0_zdqlmu" },
    { name: "Karel Appel", img: "ARTE18.0_phtc3a" },
    { name: "Roberto Matta", img: "ARTE9.0_ieb4vg" },
    { name: "Marco Antonio", img: "ARTE14.0_hplvra" },
    { name: "Juan Pablo Camus Valverde", img: "ARTE13.0_mjnrp5" },
    { name: "Mario Carreño", img: "ARTE12.0_xzotr6" },
    { name: "Miguel Ortiz", img: "ARTE11.0_qrwsyq" },
    { name: "Victor Hugo Bravo", img: "ARTE7.0_kznjme" },
    { name: "Mario Zeballos", img: "ARTE5.0_qhj3wv" },
    { name: "Totoy Zamudio", img: "ARTE2.0_onawcl" },
    { name: "Enrique Zañartu", img: "ARTE1.0_b4mvjq" }
];

const artworksData = [
    { id: 1, artist: "Enrique Zañartu", category: "Pintura", price: 0, status: "Vendido", description: "Vendido.", imgs: ["ARTE1.0_b4mvjq", "ARTE1.1_bf4f46", "ARTE1.2_solhky"] },
    { id: 2, artist: "Totoy Zamudio", category: "Pintura", price: 350000, status: "Disponible", description: "Dimensiones: 70 x 51 cms aprox no enmarcada.", imgs: ["ARTE2.0_onawcl", "ARTE2.1_u55cwr", "ARTE2.2_rtdrst"] },
    { id: 3, artist: "Totoy Zamudio", category: "Pintura", price: 350000, status: "Disponible", description: "Dimensiones: 70 x 51 cms aprox no enmarcada.", imgs: ["ARTE3.0_cztj9k", "ARTE3.1_t7vhbj", "ARTE3.2_moo7wm"] },
    { id: 4, artist: "Andrés ´Titi´ Gana", category: "Pintura", price: 680000, status: "Disponible", description: "Dimensiones: 70 x 50 cms aprox.", imgs: ["ARTE4.0_hleuuv", "ARTE4.1_mnoau0"] },
    { id: 5, artist: "Mario Zeballos", category: "Pintura", price: 220000, status: "Disponible", description: "Dimensiones: 28 x 40 cms aprox.", imgs: ["ARTE5.0_qhj3wv", "ARTE5.1_evlhlm", "ARTE5.2_ev7jxo"] },
    { id: 6, artist: "Mario Zeballos", category: "Pintura", price: 220000, status: "Disponible", description: "Dimensiones: 28 x 40 cms aprox.", imgs: ["ARTE6.0_vwn3yi", "ARTE6.1_coqg8a", "ARTE6.2_xt9vhr"] },
    { id: 7, artist: "Victor Hugo Bravo", category: "Pintura", price: 220000, status: "Disponible", description: "Dimensiones: 28 x 40 cms aprox.", imgs: ["ARTE7.0_kznjme", "ARTE7.1_nn89id", "ARTE7.2_cwylhe"] },
    { id: 8, artist: "Victor Hugo Bravo", category: "Pintura", price: 220000, status: "Disponible", description: "Dimensiones: 28 x 40 cms aprox.", imgs: ["ARTE8.0_hfr57a", "ARTE8.1_rrmp6b", "ARTE8.2_kwd2c2"] },
    { id: 9, artist: "Roberto Matta", category: "Pintura", price: 680000, status: "Disponible", description: "Dimensiones: 33 x 26 cms aprox sin marco.", imgs: ["ARTE9.0_ieb4vg", "ARTE9.1_fjqtfc", "ARTE9.2_ddurve"] },
    { id: 10, artist: "Roberto Matta", category: "Pintura", price: 650000, status: "Disponible", description: "Dimensiones: 33 x 26 cms aprox sin marco.", imgs: ["ARTE10.0_dzv7xk", "ARTE10.1_itvmgr", "ARTE10.2_ocx5em"] },
    { id: 11, artist: "Miguel Ortiz", category: "Escultura", price: 250000, status: "Disponible", description: "Dimensiones: 40 x 30 cms aprox sin enmarcar.", imgs: ["ARTE11.0_qrwsyq", "ARTE11.1_y41e6x", "ARTE11.2_pinbkn"] },
    { id: 12, artist: "Mario Carreño", category: "Escultura", price: 550000, status: "Disponible", description: "Dimensiones: 70 x 50 cms aprox sin enmarcar.", imgs: ["ARTE12.0_xzotr6", "ARTE12.1_gnhxan", "ARTE12.2_zrsrju"] },
    { id: 13, artist: "Juan Pablo Camus Valverde", category: "Escultura", price: 435000, status: "Disponible", description: "Dimensiones: 84 x 60 cms aprox.", imgs: ["ARTE13.0_mjnrp5", "ARTE13.1_r90ise", "ARTE13.2_bax0vv"] },
    { id: 14, artist: "Marco Antonio", category: "Escultura", price: 350000, status: "Disponible", description: "Dimensiones: 80 x 60 cms aprox.", imgs: ["ARTE14.0_hplvra", "ARTE14.1_tf4eat", "ARTE14.2_bmri78", "ARTE14.3_rgeb7k", "ARTE14.4_qsipov"] },
    { id: 15, artist: "Roberto Matta", category: "Escultura", price: 900000, status: "Disponible", description: "Dimensiones: 78 x 57 cms aprox.", imgs: ["ARTE15.0_wpvads", "ARTE15.1_nnd3lm", "ARTE15.2_uyvbke"] },
    { id: 16, artist: "Roberto Matta", category: "Escultura", price: 680000, status: "Disponible", description: "Dimensiones: 28 x 35 cms aprox.", imgs: ["ARTE16.0_tg61ia", "ARTE16.1_hisy8c", "ARTE16.2_ybod6t"] },
    { id: 17, artist: "Roberto Matta", category: "Escultura", price: 680000, status: "Disponible", description: "Dimensiones: 28 x 35 cms aprox.", imgs: ["ARTE17.0_a2e670", "ARTE17.1_in5uaw", "ARTE17.2_qidg6x"] },
    { id: 18, artist: "Karel Appel", category: "Escultura", price: 650000, status: "Disponible", description: "Dimensiones: 30 x 40 cms aprox.", imgs: ["ARTE18.0_phtc3a", "ARTE18.1_wdtnlx", "ARTE18.2_bpc732"] },
    { id: 19, artist: "Hardy Wistuba", category: "Escultura", price: 180000, status: "Disponible", description: "Dimensiones: 33 x 45 cms aprox.", imgs: ["ARTE19.0_zdqlmu", "ARTE19.1_grdgxt", "ARTE19.2_fxyocl"] },
    { id: 20, artist: "Roy Lichtenstein", category: "Escultura", price: 0, status: "Vendido", description: "Vendido.", imgs: ["ARTE20.0_w3haq3", "ARTE20.1_i88bsg", "ARTE20.2_zsl2lz"] },
    { id: 21, artist: "Pablo Picasso", category: "Fotografía", price: 450000, status: "Disponible", description: "Dimensiones: 32 x 26 cms aprox.", imgs: ["ARTE21.0_tpmrv8", "ARTE21.1_slpegx", "ARTE21.2_ofs9qy", "ARTE21.3_glsykv"] },
    { id: 22, artist: "Arturo Pacheco Altamirano", category: "Fotografía", price: 1200000, status: "Disponible", description: "Dimensiones: 34 x 42 cms aprox.", imgs: ["ARTE22.0_bvxh7o", "ARTE22.1_unpfpe", "ARTE22.2_j3hm59"] },
    { id: 23, artist: "Andrés 'Titi' Gana", category: "Fotografía", price: 500000, status: "Disponible", description: "Dimensiones: 40 x 47 cms aprox.", imgs: ["ARTE23.0_qbbsmq", "ARTE23.1_ebkywu"] },
    { id: 24, artist: "Luis Tejada Amigo", category: "Fotografía", price: 220000, status: "Disponible", description: "Dimensiones: 28 x 37 cms aprox.", imgs: ["ARTE24.0_d6wntk", "ARTE24.1_jf3yfd"] },
    { id: 25, artist: "Zdravko Ducmelic", category: "Fotografía", price: 150000, status: "Disponible", description: "Dimensiones: 37 x 50 cms aprox.", imgs: ["ARTE25.0_z6p28b", "ARTE25.1_bgsprz", "ARTE25.2_goeun2", "ARTE25.3_ptqeww"] },
    { id: 26, artist: "Santiago Aránguiz Sánchez", category: "Fotografía", price: 150000, status: "Disponible", description: "Dimensiones: 47 x 48 cms aprox.", imgs: ["ARTE26.0_huvipn", "ARTE26.1_heglfc", "ARTE26.2_wcwllu"] },
    { id: 27, artist: "Roko Matjasic", category: "Fotografía", price: 450000, status: "Disponible", description: "Dimensiones: 25 x 30 cms aprox.", imgs: ["ARTE27.0_nmh0dc", "ARTE27.1_fti195"] },
    { id: 28, artist: "José Balmes Parramón", category: "Fotografía", price: 0, status: "Vendido", description: "Vendido.", imgs: ["ARTE28.0_gesjby", "ARTE28.1_prylii"] },
    { id: 29, artist: "Hernán Cueva", category: "Fotografía", price: 300000, status: "Disponible", description: "Edición limitada de 100 unidades (1 de 100).", imgs: ["ARTE29.0_ixulni", "ARTE29.1_wmwnkr", "ARTE29.2_mfipof", "ARTE29.3_auemgz", "ARTE29.4_guivwa"] },
    { id: 30, artist: "Mario Gómez", category: "Fotografía", price: 350000, status: "Disponible", description: "Dimensiones: 65 x 65 cms aprox.", imgs: ["ARTE30.0_clg2lq", "ARTE30.1_vzvy8l"] },
    { id: 31, artist: "Ernesto Banderas", category: "Fotografía", price: 350000, status: "Disponible", description: "Dimensiones: 58 x 80 cms aprox.", imgs: ["ARTE31.0_a8tfjb", "ARTE31.1_padrw2", "ARTE31.2_lc5s2g", "ARTE31.3_brhmq7"] },
    { id: 32, artist: "Matías Vergara", category: "Grabado", price: 250000, status: "Disponible", description: "Dimensiones: 80 x 45 cms aprox.", imgs: ["ARTE32.0_nmtwkm", "ART32.1_yypyf2", "ARTE32.2_ryfoyc", "ARTE32.3_cr1vrf"] },
    { id: 33, artist: "José Santos Guerra", category: "Grabado", price: 480000, status: "Disponible", description: "Dimensiones: 70 x 50 cms aprox sin marco.", imgs: ["ARTE33.0_yxwuqs", "ARTE33.1_d4efex"] },
    { id: 34, artist: "José Santos Guerra", category: "Grabado", price: 380000, status: "Disponible", description: "Dimensiones: 60 x 40 cms sin marco.", imgs: ["ARTE34.0_ofi5v4", "ARTE34.1_gedn9e"] },
    { id: 35, artist: "José Santos Guerra", category: "Grabado", price: 380000, status: "Disponible", description: "Dimensiones: 60 x 40 cms sin marco.", imgs: ["ARTE35.0_de31n1", "ARTE35.1_rahz9e"] },
    { id: 38, artist: "Guillermo Núñez", category: "Grabado", price: 450000, status: "Disponible", description: "Dimensiones: 124 x 180.5 cms sin marco.", imgs: ["ARTE38.0_fufsvn", "ARTE38.1_kn33q6"] },
    { id: 39, artist: "Carlos Catasse", category: "Grabado", price: 999999, status: "Disponible", description: "Dimensiones: 43 x 59 cms aprox sin marco.", imgs: ["ARTE39.0_bjfszz", "ARTE39.1_q7hdrk"] },
    { id: 40, artist: "Matías Vergara Delorenzo", category: "Grabado", price: 999999, status: "Disponible", description: "Dimensiones: 40 x 50 cms aprox sin marco.", imgs: ["ARTE40.0_eudhs1", "ARTE40.1_xidgxp", "ARTE40.2_pwwmcy"] },
    { id: 41, artist: "Ruperto Cádiz", category: "Grabado", price: 0, status: "Vendido", description: "Vendido.", imgs: ["ARTE41.0_drkajf", "ARTE41.1_uiakam", "ARTE41.2_nlhkpw"] },
    { id: 42, artist: "Humberto Poblete-Bustamante", category: "Grabado", price: 999999, status: "Disponible", description: "Dimensiones: 67 x 85 cms aprox sin marco.", imgs: ["ARTE42.0_sljr4r", "ARTE42.1_h7uoyk"] },
    { id: 43, artist: "Roser Bru", category: "Grabado", price: 580000, status: "Disponible", description: "Dimensiones: 62 x 83 cms aprox sin marco.", imgs: ["ARTE43.0_l4aemq", "ARTE43.1_dz01wj", "ARTE43.2_yh6ep8"] },
    { id: 44, artist: "Victor Delfín", category: "Grabado", price: 850000, status: "Disponible", description: "Dimensiones: 66 x 84 cms aprox sin marco.", imgs: ["ARTE44.0_p5bvot", "ARTE44.1_xptxbj", "ARTE44.2_lqnxv1", "ARTE44.3_z7wh6e"] },
    { id: 45, artist: "Roser Bru", category: "Grabado", price: 450000, status: "Disponible", description: "Dimensiones: 108 x 88 cms aprox con marco.", imgs: ["ARTE45.0_zmkfmv", "ARTE45.1_llxll1", "ARTE45.2_lcp7rj"] },
    { id: 46, artist: "Anne Saussois", category: "Grabado", price: 195000, status: "Disponible", description: "Dimensiones: 79 x 69 cms aprox con marco.", imgs: ["ARTE46.0_zldvoa", "ARTE46.1_ps4r4t", "ARTE46.2_gtok6l"] },
    { id: 47, artist: "Andrés 'Titi' Gana", category: "Grabado", price: 450000, status: "Disponible", description: "Dimensiones: 78 x 68 cms aprox con marco.", imgs: ["ARTE47.0_vfuinj", "ARTE47.1_p52vfu", "ARTE47.2_ma1cpc"] },
    { id: 48, artist: "Carlos Catasse", category: "Grabado", price: 999999, status: "Disponible", description: "Dimensiones: 71 x 92 cms aprox con marco.", imgs: ["ARTE48.0_jlxpyg", "ARTE48.1_clanqt"] },
    { id: 49, artist: "Keka Ruiz Tagle", category: "Grabado", price: 999999, status: "Disponible", description: "Dimensiones: 90 x 85 cms aprox con marco.", imgs: ["ARTE49.0_zlpc21", "ARTE49.1_vaipom"] },
    { id: 50, artist: "Francisco Ariztia", category: "Grabado", price: 350000, status: "Disponible", description: "Dimensiones: 85 x 100 cms aprox con marco.", imgs: ["ARTE50.0_gfn2ou", "ARTE50.1_hugrie", "ARTE50.2_zyerdk"] },
    { id: 51, artist: "Guillermo Núñez", category: "Grabado", price: 480000, status: "Disponible", description: "Dimensiones: 90 x 110 cms aprox con marco.", imgs: ["ARTE51.0_docvhl", "ARTE51.1_zciwbh"] },
    { id: 52, artist: "Carmen Aldunate", category: "Grabado", price: 999999, status: "Disponible", description: "PENDIENTE.", imgs: ["ARTE52.0_s6k3ag"] },
    { id: 53, artist: "Carmen Aldunate", category: "Grabado", price: 999999, status: "Disponible", description: "PENDIENTE.", imgs: ["ARTE53.0_zzc6vg"] }
];

const allArtworks = artworksData.map(art => ({
    ...art,
    title: `Colección Artenostrum #${art.id}`,
    images: art.imgs.map(name => `${CLD_BASE_URL}/v1/${name}`)
}));

/**
 * FUNCIONES DE RENDERIZADO
 */

/**
 * RENDERIZADO DEL CARRUSEL INFINITO
 */
function renderCircles() {
    const container = document.getElementById('artist-circles');
    if (!container) return;
    
    // Duplicamos la lista para crear el efecto de bucle infinito sin saltos
    const doubleList = [...artistsList, ...artistsList];
    
    container.innerHTML = doubleList.map(art => {
        const thumbUrl = `${CLD_BASE_URL}/w_200,h_200,c_fill,g_auto/v1/${art.img}`;
        return `
            <div class="circle-item" title="Ver obras de ${art.name}" onclick="filterByArtist('${art.name}')">
                <img src="${thumbUrl}" 
                     class="circle-img" 
                     alt="${art.name}" 
                     onerror="this.src='https://placehold.co/200x200?text=Arte'">
                <p>${art.name}</p> 
            </div>
        `;
    }).join('');
}

function renderGallery(data) {
    const gallery = document.getElementById('main-gallery');
    if (!gallery) return;
    gallery.innerHTML = '';
    
    if (data.length === 0) {
        gallery.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 50px; color: #999;">No se encontraron obras con estos filtros.</p>';
        return;
    }

    data.forEach(art => {
        const waLink = `https://wa.me/56979083084?text=Hola, me interesa la obra N°${art.id} realizada por ${art.artist}`;
        const statusClass = art.status === "Vendido" ? "status-sold" : "status-available";
        
        const card = document.createElement('div');
        card.className = `art-card ${art.status === "Vendido" ? 'sold-out' : ''}`;
        card.innerHTML = `
            <div class="slider-container" id="slider-${art.id}">
                <span class="badge ${statusClass}">${art.status.toUpperCase()}</span>
                ${art.images.map((img, idx) => `
                    <img src="${img}" class="${idx === 0 ? 'active' : ''}" data-index="${idx}" 
                         onerror="this.src='https://placehold.co/400x500?text=Cargando...'">
                `).join('')}
                ${art.images.length > 1 ? `
                    <button class="nav-btn prev" onclick="moveSlide(${art.id}, -1)">❮</button>
                    <button class="nav-btn next" onclick="moveSlide(${art.id}, 1)">❯</button>
                ` : ''}
            </div>
            <div class="art-info">
                <p class="artist-tag" style="color:#b38b59; font-style:italic; font-size:12px;">${art.artist}</p>
                <h4>${art.title}</h4>
                <p style="font-size:13px; color:#666; margin:10px 0;">${art.description}</p>
                <span class="price">$${art.price.toLocaleString('es-CL')}</span>
                ${art.status === "Disponible" 
                    ? `<a href="${waLink}" target="_blank" class="btn-whatsapp">ADQUIRIR OBRA</a>`
                    : `<button class="btn-sold">VENDIDO</button>`
                }
            </div>
        `;
        gallery.appendChild(card);
    });
}

/**
 * LÓGICA DE NAVEGACIÓN Y FILTROS
 */

window.moveSlide = function(id, direction) {
    const slider = document.getElementById(`slider-${id}`);
    const imgs = slider.querySelectorAll('img');
    if (imgs.length <= 1) return;
    let activeIdx = Array.from(imgs).findIndex(img => img.classList.contains('active'));
    imgs[activeIdx].classList.remove('active');
    let nextIdx = (activeIdx + direction + imgs.length) % imgs.length;
    imgs[nextIdx].classList.add('active');
};

// Función para filtrar al hacer clic en un círculo
window.filterByArtist = function(artistName) {
    document.getElementById('artistFilter').value = artistName;
    document.getElementById('statusFilter').value = "Todos"; // Mostramos todas si clickea el artista
    applyFilters();
    document.getElementById('obras').scrollIntoView({ behavior: 'smooth' });
};

function applyFilters() {
    const search = document.getElementById('searchBar')?.value.toLowerCase() || "";
    const artist = document.getElementById('artistFilter')?.value || "Todos";
    const category = document.getElementById('categoryFilter')?.value || "Todas";
    const status = document.getElementById('statusFilter')?.value || "Disponible";
    const minP = parseInt(document.getElementById('minPrice')?.value) || 0;
    const maxP = parseInt(document.getElementById('maxPrice')?.value) || Infinity;

    const filtered = allArtworks.filter(art => {
        const matchSearch = art.artist.toLowerCase().includes(search);
        const matchArtist = (artist === "Todos" || art.artist === artist);
        const matchCategory = (category === "Todas" || art.category === category);
        const matchStatus = (status === "Todos" || art.status === status);
        const matchPrice = (art.price >= minP && art.price <= maxP);
        
        return matchSearch && matchArtist && matchCategory && matchStatus && matchPrice;
    });
    
    renderGallery(filtered);
}

/**
 * CONTADOR DE TIEMPO REAL Y PERSISTENTE
 */
function startCountdown() {
    const display = document.getElementById('countdown');
    if (!display) return;

    // CONFIGURACIÓN: Define aquí cuándo quieres que termine la actualización.
    // Formato: "Mes Día, Año Horas:Minutos:Segundos"
    // Ejemplo: Si hoy es 7 de enero, pondremos el 8 de enero.
    let targetDate = new Date("Jan 8, 2026 00:00:00").getTime();

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Cálculos de tiempo para horas, minutos y segundos
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar el resultado en el elemento con id="countdown"
        display.innerText = `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;

        // Si el conteo termina
        if (distance < 0) {
            clearInterval(timerInterval);
            display.innerText = "¡GALERÍA ACTUALIZADA!";
            // Opcional: Reiniciar la meta automáticamente para el día siguiente
            // targetDate = new Date().getTime() + (24 * 60 * 60 * 1000); 
        }
    }, 1000);
}

/**
 * INICIALIZACIÓN
 */
document.addEventListener('DOMContentLoaded', () => {
    // Poblar select de artistas
    const select = document.getElementById('artistFilter');
    if(select) {
        // Obtenemos lista única de artistas de la data real para asegurar match
        const uniqueArtists = [...new Set(allArtworks.map(a => a.artist))].sort();
        uniqueArtists.forEach(name => {
            const opt = document.createElement('option');
            opt.value = name; opt.innerText = name;
            select.appendChild(opt);
        });
    }
    
    renderCircles();
    applyFilters(); // Esto aplicará el filtro "Disponible" por defecto al cargar
    startCountdown();
});