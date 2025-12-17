const units = {
    1: {
        fantasy: "DROGARIA SENA",
        name: "DROGARIA GUMA LTDA",
        address: "Q CND 4, NÚMERO 01, LOJA 01 E 02",
        bairro: "TAGUATINGA NORTE (TAGUATINGA)",
        city: "BRASILIA - DF",
        cep: "72.120-045",
        cnpj: "18.769.030/0001-22",
        whatsapp: "61985922433",
        displayZap: "(61) 98592-2433",
        email: "MICHAELVILARINDO@GMAIL.COM",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.902083990201!2d-48.064958523877884!3d-15.809116184833304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a333dc8cd7759%3A0x901e35ed71ea80c!2sDroga%20Senna%20-%20Taguatinga!5e0!3m2!1sen!2sus!4v1765994455668!5m2!1sen!2sus"
    },
    2: {
        fantasy: "DROGARIA QNL",
        name: "DROGARIA QNL LTDA",
        address: "Q QNL 3 CONJUNTO J LOTE, 17",
        bairro: "TAGUATINGA NORTE (TAGUATINGA)",
        city: "BRASILIA - DF",
        cep: "72.150-310",
        cnpj: "51.908.840/0001-98",
        whatsapp: "61920010404",
        displayZap: "(61) 92001-0404",
        email: "RAFLESIAVINHAL@YAHOO.COM.BR",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5304262091404!2d-48.085453923877466!3d-15.82869518481655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcdc91195e673%3A0x948e8613a5c89d89!2sDrogasenna!5e0!3m2!1sen!2sus!4v1765994521205!5m2!1sen!2sus"
    },
    3: {
        fantasy: "DROGARIA GJS",
        name: "DROGARIA GJS LTDA",
        address: "Q QS 414 CONJUNTO A LOTE, 01, LOJA 3 E 4",
        bairro: "SAMAMBAIA NORTE (SAMAMBAIA)",
        city: "BRASILIA - DF",
        cep: "72.320-581",
        cnpj: "63.217.510/0001-35",
        whatsapp: "61920000008",
        displayZap: "(61) 92000-0008",
        email: "GILSON130667@GMAIL.COM",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.982071667976!2d-48.07274502387725!3d-15.85753958479166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a331e5bf444dd%3A0xcf36e16f582100c6!2sDroga%20Senna%20-%20Samambaia!5e0!3m2!1sen!2sus!4v1765994550516!5m2!1sen!2sus"
    },
    4: {
        fantasy: "DROGARIA SGJ",
        name: "DROGARIA SGJ LTDA",
        address: "Q QNO 17 CONJUNTO 2 LOTE 25, SN",
        bairro: "CEILANDIA NORTE (CEILANDIA)",
        city: "BRASILIA - DF",
        cep: "72.260-702",
        cnpj: "63.217.526/0001-48",
        whatsapp: "61920052061",
        displayZap: "(61) 92005-2061",
        email: "GILSON130667@GMAIL.COM",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0769945142506!2d-48.13760132387803!3d-15.799893684841225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcb38ad1a75e3%3A0x516eceb09ed7ae71!2sDroga%20Senna%20-%20Ceil%C3%A2ndia!5e0!3m2!1sen!2sus!4v1765994584600!5m2!1sen!2sus"
    }
};

function changeUnit(id) {
    const unit = units[id];
    const infoDiv = document.getElementById('unit-info');
    const map = document.getElementById('google-map');
    
    document.querySelectorAll('.unit-tab').forEach(btn => {
        btn.classList.remove('active', 'bg-primary', 'text-white', 'border-primary');
        btn.classList.add('border-gray-300', 'text-gray-500');
    });
    
    event.currentTarget.classList.add('active', 'bg-primary', 'text-white', 'border-primary');
    event.currentTarget.classList.remove('border-gray-300', 'text-gray-500');

    infoDiv.innerHTML = `
        <div>
            <span class="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Unidade ${unit.fantasy}</span>
            <h3 class="text-3xl font-extrabold text-secondary mb-6">${unit.name}</h3>
            <div class="space-y-4 text-gray-600">
                <p class="flex items-start gap-3"><svg class="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span>${unit.address}, ${unit.bairro}, ${unit.city} - CEP: ${unit.cep}</span></p>
                <p class="flex items-center gap-3"><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> CNPJ: ${unit.cnpj}</p>
                <p class="flex items-center gap-3"><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> ${unit.email}</p>
            </div>
        </div>
        <a href="https://wa.me/55${unit.whatsapp}" target="_blank" class="mt-8 flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition shadow-lg group">
            <svg class="w-6 h-6 group-hover:rotate-12 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Chamar no WhatsApp: ${unit.displayZap}
        </a>
    `;
    map.src = unit.map;
}

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScroll = currentScroll;

    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden');
}

window.onload = () => changeUnit(1);