let currentTab = 'home';
let currentGroup = 'taberna';

const groupsData = {
  taberna: { title: "TABERNA | Bar da T.I", badge: "Coração da Comunidade", icon: "coffee", desc: "O ponto de encontro informal onde a galera chega exausta do trabalho para bater papo, desabafar, contar histórias de terror com clientes e criar conexões reais. É onde o networking vira amizade de verdade.", stat: "100% Descompressão" },
  laboratorio: { title: "LABORATÓRIO - Criando Meu Portfólio", badge: "Prática pura", icon: "laptop", desc: "Membros constroem e evoluem seus portfólios juntos. O diferencial aqui é o feedback coletivo, incentivo prático e revisão de código em grupo sem pedestal ou julgamento.", stat: "Foco em Projetos" },
  tigirls: { title: "TI Girls - Só para Meninas", badge: "Espaço Seguro", icon: "sparkles", desc: "Um hub exclusivo e acolhedor para as mulheres de tecnologia da comunidade. Focado em suporte mútuo, troca de vivências reais do mercado e fortalecimento das minas na área.", stat: "Apoio e Conexão" },
  english: { title: "English in Practice", badge: "Sem barreiras", icon: "globe", desc: "Grupo voltado para a prática de inglês técnico e conversação, crucial para quem quer conquistar as melhores vagas nacionais ou internacionais.", stat: "Fluência Coletiva" },
  gymrat: { title: "TECH FIT RAT | GymRat do TI", badge: "Qualidade de Vida", icon: "dumbbell", desc: "Porque o desenvolvedor moderno também cuida da carcaça. Grupo sobre saúde, bem-estar, rotina de treinos e alimentação saudável para quebrar o sedentarismo tech.", stat: "Mente Sã, Corpo São" },
  gamecoop: { title: "Game Modo Co-op", badge: "Cultura Gamer", icon: "gamepad-2", desc: "Grupo focado em jogatinas cooperativas, integração de times e pura descontração nerd de quem ama debater games e jogar junto no pós-trampo.", stat: "Integração e Lazer" },
  vagas: { title: "Vagas & Oportunidades TI", badge: "Carreira Real", icon: "briefcase", desc: "Compartilhamento de vagas legítimas, freelas e caminhos reais do mercado, direto de profissional para profissional, sem rodeios ou caô de agências frias.", stat: "Oportunidades de Base" },
  gitpush: { title: "Git Push & Site Taberna", badge: "Projetos Reais", icon: "git-branch", desc: "A galera trabalhando de forma totalmente colaborativa no desenvolvimento do site oficial da comunidade. Aqui colocamos em prática metodologias ágeis e código real.", stat: "Construção Ativa" },
  regional: { title: "Eventos SP & Campinas", badge: "Presencial", icon: "map-pin", desc: "Nossa maior força está em São Paulo e no Interior Paulista. Grupos criados especificamente para organizar encontros, meetups presenciais e integração cara a cara.", stat: "Networking de Perto" },
  equipes: { title: "Equipes Internas de Dev", badge: "Squads Práticos", icon: "users", desc: "Times fechados com nomes icônicos (#KITSUNE, #AXOLOTL-BYTE) desenvolvendo ferramentas reais. Parceiros podem patrocinar desafios diretos para estas squads.", stat: "Inovação de Base" }
};

const teamMembers = [
  { name: "Yanca Rivska", role: "Fundadora", img: "img/yanca.jpg" },
  { name: "Davi Fonseca", role: "Co-fundador", img: "img/davi.jpg" },
  { name: "Karolina Gusmão", role: "Administradora", img: "img/karol.jpg" },
  { name: "Beatriz Soares", role: "Administradora", img: "img/beatriz.jpg" },
  { name: "Gabriel Felipe", role: "Administrador", img: "img/gabrielfelipe.jpg" },
  { name: "Gabriel Marques", role: "Administrador", img: "img/gabrielmarques.jpg" },
  { name: "Guilherme Jesus", role: "Administrador", img: "img/guilherme.jpg" }
];

window.addEventListener('DOMContentLoaded', () => {
  renderGroupsList();
  renderTeamList();
  selectGroup('taberna');
  lucide.createIcons();
});

function switchTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(`tab-${tabId}`).classList.remove('hidden');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.className = "nav-btn px-4 py-2 text-xs tracking-wider uppercase text-slate-400 hover:text-slate-100 transition-all font-mono-custom";
  });
  document.getElementById(`nav-${tabId}`).className = "nav-btn px-4 py-2 text-xs tracking-wider uppercase text-cyan-400 border-b-2 border-cyan-400 transition-all font-bold font-mono-custom";

  document.querySelectorAll('.mob-btn').forEach(btn => {
    btn.className = "mob-btn px-4 py-2 text-[10px] uppercase tracking-wider rounded text-slate-400 shrink-0 font-mono-custom";
  });
  document.getElementById(`mob-${tabId}`).className = "mob-btn px-4 py-2 text-[10px] uppercase tracking-wider rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 font-bold font-mono-custom";

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderGroupsList() {
  const listContainer = document.getElementById('groups-list');
  listContainer.innerHTML = '';
  Object.keys(groupsData).forEach(key => {
    const item = groupsData[key];
    const btn = document.createElement('button');
    btn.id = `group-btn-${key}`;
    btn.className = "w-full text-left p-4 rounded-lg border border-slate-800 bg-[#0b0f19] hover:border-cyan-500/50 text-slate-400 transition-all flex items-center justify-between group";
    btn.onclick = () => selectGroup(key);
    btn.innerHTML = `
      <div class="flex items-center space-x-4">
        <div class="p-2 bg-slate-900 rounded-md group-hover:bg-cyan-950/30 transition-colors">
          <i data-lucide="${item.icon}" class="w-5 h-5 text-cyan-400"></i>
        </div>
        <span class="text-xs font-bold uppercase text-slate-300 group-hover:text-cyan-400 transition-colors font-mono-custom">${item.title}</span>
      </div>
      <i data-lucide="chevron-right" class="w-4 h-4 text-slate-600 group-hover:text-cyan-400"></i>
    `;
    listContainer.appendChild(btn);
  });
}

function selectGroup(key) {
  currentGroup = key;
  const data = groupsData[key];
  document.getElementById('detail-title').innerText = data.title;
  document.getElementById('detail-badge').innerText = data.badge;
  document.getElementById('detail-desc').innerText = data.desc;

  Object.keys(groupsData).forEach(groupKey => {
    const btn = document.getElementById(`group-btn-${groupKey}`);
    if (btn) {
      if (groupKey === key) {
        btn.className = "w-full text-left p-4 rounded-lg border border-cyan-500/50 bg-cyan-950/20 text-cyan-400 transition-all flex items-center justify-between shadow-[0_0_15px_rgba(6,182,212,0.1)]";
      } else {
        btn.className = "w-full text-left p-4 rounded-lg border border-slate-800 bg-[#0b0f19] hover:border-cyan-500/30 text-slate-400 transition-all flex items-center justify-between group";
      }
    }
  });
  lucide.createIcons();
}

function renderTeamList() {
  const container = document.getElementById('team-list');
  container.innerHTML = '';
  
  teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = "bg-[#0b0f19] border border-slate-800 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform hover:border-cyan-500/30 group";
    
    const avatarHTML = member.img 
      ? `<img src="${member.img}" alt="${member.name}" class="w-12 h-12 rounded-full object-cover mx-auto mb-4 border border-slate-700 group-hover:border-cyan-400 transition-colors">`
      : `<div class="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400 font-editorial font-bold text-lg border border-slate-700 group-hover:border-cyan-400 transition-colors">${member.name.charAt(0)}</div>`;

    card.innerHTML = `
      ${avatarHTML}
      <h4 class="text-sm font-bold text-white tracking-wide">${member.name}</h4>
      <span class="text-[10px] text-slate-500 block mt-1 uppercase tracking-widest font-mono-custom">${member.role}</span>
    `;
    
    container.appendChild(card);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const container = document.getElementById('form-container');
  const submitButton = e.target.querySelector('button[type="submit"]');
  const name = document.getElementById('form-name').value;
  const company = document.getElementById('form-company').value;
  const email = document.getElementById('form-email').value;
  const message = document.getElementById('form-msg').value;

  submitButton.disabled = true;
  submitButton.innerHTML = `<span>TRANSMITINDO...</span><i data-lucide="loader" class="w-4 h-4 animate-spin"></i>`;
  lucide.createIcons();

  fetch("https://formsubmit.co/ajax/galeradotigti@gmail.com", {
    method: "POST",
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ Nome: name, Empresa: company, Email: email, Mensagem: message })
  })
  .then(response => response.json())
  .then(data => {
    container.innerHTML = `
      <div class="text-center py-12 space-y-6">
        <div class="w-16 h-16 bg-cyan-950/40 border border-cyan-500/50 text-cyan-400 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <i data-lucide="check-circle-2" class="w-8 h-8"></i>
        </div>
        <h4 class="text-2xl font-editorial font-bold text-white uppercase">Sinal Recebido</h4>
        <p class="text-xs text-slate-400 max-w-md mx-auto font-mono-custom">Retornaremos em tempo recorde de compilação.</p>
      </div>
    `;
    lucide.createIcons();
  })
  .catch(error => {
    container.innerHTML = `
      <div class="text-center py-12 space-y-6">
        <div class="w-16 h-16 bg-red-950/40 border border-red-500/50 text-red-400 rounded-full flex items-center justify-center mx-auto">
          <i data-lucide="alert-triangle" class="w-8 h-8"></i>
        </div>
        <h4 class="text-2xl font-editorial font-bold text-white uppercase">Erro na Conexão</h4>
        <p class="text-xs text-slate-400 max-w-md mx-auto font-mono-custom">Envie e-mail direto para: <strong class="text-cyan-400">galeradotigti@gmail.com</strong></p>
      </div>
    `;
    lucide.createIcons();
  });
}
