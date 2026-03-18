const STORAGE_KEY = 'ceo_os_rotina_v5';

let appData = {
    foco: { prioridade_semana: "", gargalo_semana: "", prioridade_empresa: "", gargalo_empresa: "" },
    agenda: {},
    empresas: [
        {
            id: "fast-acai", nome: "Fast Açaí", status: "critico", fase: "Reestruturação", objetivo: "Sair da RJ, reorganizar a operação e reposicionar a marca.", responsabilidade: "Estratégico / financeiro", 
            tarefas: [
                { id: "fa1", titulo: "Estruturar a verdade financeira", prioridade: "alta", hoje: true, estado: "backlog", expandido: true, tag: "financeiro",
                  subtarefas: [
                      {id: "s1", titulo: "Levantar DRE real da operação", concluida: false},
                      {id: "s2", titulo: "Revisar receitas", concluida: false},
                      {id: "s3", titulo: "Levantar custos", concluida: false},
                      {id: "s4", titulo: "Organizar fluxo de caixa", concluida: false}
                  ] 
                },
                { id: "fa2", titulo: "Reorganizar operação interna", prioridade: "alta", hoje: false, estado: "backlog", expandido: false, tag: "operacional",
                  subtarefas: [
                      {id: "s1", titulo: "Mapear estrutura atual", concluida: false},
                      {id: "s2", titulo: "Identificar gargalos", concluida: false},
                      {id: "s3", titulo: "Definir estrutura mínima", concluida: false},
                      {id: "s4", titulo: "Criar processos básicos", concluida: false}
                  ] 
                },
                { id: "fa3", titulo: "Criar controle interno", prioridade: "alta", hoje: false, estado: "backlog", expandido: false, tag: "operacional",
                  subtarefas: [
                      {id: "s1", titulo: "Estruturar controle de estoque", concluida: false},
                      {id: "s2", titulo: "Criar controle de entrada e saída", concluida: false},
                      {id: "s3", titulo: "Validar produção", concluida: false},
                      {id: "s4", titulo: "Integrar com financeiro", concluida: false}
                  ] 
                },
                { id: "fa4", titulo: "Reposicionar a marca", prioridade: "media", hoje: false, estado: "backlog", expandido: false, tag: "branding",
                  subtarefas: [
                      {id: "s1", titulo: "Definir posicionamento", concluida: false},
                      {id: "s2", titulo: "Criar linha criativa Instagram", concluida: false},
                      {id: "s3", titulo: "Estudar referências", concluida: false},
                      {id: "s4", titulo: "Planejar conteúdo", concluida: false}
                  ] 
                }
            ]
        },
        {
            id: "fast-salgados", nome: "Fast Salgados", status: "risco", fase: "Validação", objetivo: "Criar controle real da operação, identificar gargalos.", responsabilidade: "Auditoria / operação", 
            tarefas: [
                { id: "fs1", titulo: "Criar verdade operacional", prioridade: "alta", hoje: true, estado: "backlog", expandido: true, tag: "operacional",
                  subtarefas: [
                      {id: "s1", titulo: "Criar controle de produção", concluida: false},
                      {id: "s2", titulo: "Criar controle de saída", concluida: false},
                      {id: "s3", titulo: "Criar controle de estoque", concluida: false},
                      {id: "s4", titulo: "Criar controle de faturamento", concluida: false}
                  ]
                },
                { id: "fs2", titulo: "Investigar desvios", prioridade: "alta", hoje: false, estado: "backlog", expandido: false, tag: "auditoria",
                  subtarefas: [
                      {id: "s1", titulo: "Cruzar produção vs saída", concluida: false},
                      {id: "s2", titulo: "Cruzar estoque vs vendas", concluida: false},
                      {id: "s3", titulo: "Validar relação com padaria", concluida: false},
                      {id: "s4", titulo: "Identificar inconsistências", concluida: false}
                  ]
                }
            ]
        },
        {
            id: "voleigo", nome: "VoleiGO", status: "validacao", fase: "MVP", objetivo: "Fechar os primeiros clientes e estruturar um produto.", responsabilidade: "Financeiro / produto", 
            tarefas: [
                { id: "vg1", titulo: "Definir MVP", prioridade: "alta", hoje: true, estado: "backlog", expandido: true, tag: "produto",
                  subtarefas: [
                      {id: "s1", titulo: "Revisar escopo", concluida: false},
                      {id: "s2", titulo: "Definir funcionalidades", concluida: false},
                      {id: "s3", titulo: "Alinhar com dev", concluida: false},
                      {id: "s4", titulo: "Cortar excessos", concluida: false}
                  ]
                },
                { id: "vg2", titulo: "Definir modelo de receita", prioridade: "alta", hoje: false, estado: "backlog", expandido: false, tag: "financeiro",
                  subtarefas: [
                      {id: "s1", titulo: "Definir pricing arenas", concluida: false},
                      {id: "s2", titulo: "Definir pricing atletas", concluida: false},
                      {id: "s3", titulo: "Validar modelo", concluida: false},
                      {id: "s4", titulo: "Simular receita", concluida: false}
                  ]
                }
            ]
        },
        {
            id: "vora-ai", nome: "Vora AI", status: "caixa", fase: "Primeiros Clientes", objetivo: "Criar produtos escaláveis, validando receita inicial.", responsabilidade: "Estratégico / comercial", 
            tarefas: [
                { id: "vr1", titulo: "Definir oferta inicial", prioridade: "alta", hoje: true, estado: "backlog", expandido: true, tag: "produto",
                  subtarefas: [
                      {id: "s1", titulo: "Escolher produtos", concluida: false},
                      {id: "s2", titulo: "Definir nicho", concluida: false},
                      {id: "s3", titulo: "Separar produto vs projeto", concluida: false},
                      {id: "s4", titulo: "Criar proposta", concluida: false}
                  ]
                },
                { id: "vr2", titulo: "Validar primeiro case", prioridade: "alta", hoje: false, estado: "backlog", expandido: false, tag: "comercial",
                  subtarefas: [
                      {id: "s1", titulo: "Fechar escopo", concluida: false},
                      {id: "s2", titulo: "Definir entrega mínima", concluida: false},
                      {id: "s3", titulo: "Acompanhar desenvolvimento", concluida: false},
                      {id: "s4", titulo: "Garantir entrega", concluida: false}
                  ]
                }
            ]
        },
        {
            id: "rubby", nome: "Rubby", status: "expansao", fase: "Expansão Comercial", objetivo: "Gerar caixa através de expansão acelerada.", responsabilidade: "Comercial", 
            tarefas: [
                { id: "rb1", titulo: "Criar máquina comercial", prioridade: "alta", hoje: true, estado: "backlog", expandido: true, tag: "comercial",
                  subtarefas: [
                      {id: "s1", titulo: "Definir pitch", concluida: false},
                      {id: "s2", titulo: "Criar abordagem", concluida: false},
                      {id: "s3", titulo: "Criar rotina de prospecção", concluida: false},
                      {id: "s4", titulo: "Criar script de venda", concluida: false}
                  ]
                },
                { id: "rb2", titulo: "Gerar leads", prioridade: "alta", hoje: false, estado: "backlog", expandido: false, tag: "comercial",
                  subtarefas: [
                      {id: "s1", titulo: "Mapear empresas", concluida: false},
                      {id: "s2", titulo: "Criar lista de leads", concluida: false},
                      {id: "s3", titulo: "Priorizar contatos", concluida: false}
                  ]
                }
            ]
        },
        {
            id: "fast-grains", nome: "Fast Grains", status: "validacao", fase: "Conceituação", objetivo: "Transformar o tahine em um produto B2C premium.", responsabilidade: "Produto / branding", 
            tarefas: [
                { id: "fg1", titulo: "Criar produto tahine", prioridade: "media", hoje: true, estado: "backlog", expandido: true, tag: "produto",
                  subtarefas: [
                      {id: "s1", titulo: "Ajustar sabor", concluida: false},
                      {id: "s2", titulo: "Ajustar textura", concluida: false},
                      {id: "s3", titulo: "Testar versões", concluida: false}
                  ]
                },
                { id: "fg2", titulo: "Definir marca", prioridade: "media", hoje: false, estado: "backlog", expandido: false, tag: "branding",
                  subtarefas: [
                      {id: "s1", titulo: "Criar posicionamento", concluida: false},
                      {id: "s2", titulo: "Definir público", concluida: false},
                      {id: "s3", titulo: "Criar embalagem", concluida: false}
                  ]
                }
            ]
        },
        {
            id: "drnk", nome: "DRNK", status: "", fase: "Monitoramento", objetivo: "Acompanhar financeiramente o projeto.", responsabilidade: "Auditoria Financeira", 
            tarefas: [
                { id: "dk1", titulo: "Controlar financeiro", prioridade: "baixa", hoje: true, estado: "backlog", expandido: true, tag: "financeiro",
                  subtarefas: [
                      {id: "s1", titulo: "Levantar orçamento", concluida: false},
                      {id: "s2", titulo: "Mapear fornecedores", concluida: false},
                      {id: "s3", titulo: "Validar custos", concluida: false}
                  ]
                }
            ]
        }
    ],
    decisoesGlobais: [
        "Revisar fluxo de caixa de todo o portfólio toda sexta-feira.",
        "",
        ""
    ],
    plannerConfig: {
        starts: "09:00",
        ends: "19:00",
        companies: [], // selected IDs
        intensity: "normal",
        priority: "caixa"
    },
    plannerRoutine: []
};

let currentView = 'dashboard';

const statusColors = { "critico": "var(--status-critico)", "risco": "var(--status-risco)", "validacao": "var(--status-validacao)", "caixa": "var(--status-caixa)", "expansao": "var(--status-expansao)", "": "transparent" };
const START_HOUR = 6;
const END_HOUR = 23; 

let currentAgendaDate = new Date().toISOString().split('T')[0];

document.addEventListener("DOMContentLoaded", () => {
    loadData();
    renderSidebar();
    switchView('dashboard');
    setInterval(() => {
        if(currentView === 'dashboard') renderRoutineTracker();
    }, 60000); // Check every minute
});

function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            appData = JSON.parse(saved);
            if(appData.agenda && typeof appData.agenda["09:00"] !== 'undefined' && typeof appData.agenda["09:00"] === 'string') {
                const today = new Date().toISOString().split('T')[0];
                const oldAgenda = appData.agenda;
                appData.agenda = {};
                appData.agenda[today] = oldAgenda;
                saveData();
            }
        } catch (e) { console.error("Erro ao ler", e); }
    } else {
        saveData(); 
    }
}

function forceRestoreFastAcai() {
    if(!confirm("Tem certeza que deseja apagar todos os dados e começar do zero na V5?")) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    updateKPIs();
    renderSidebar();
}

// ---- NAVIGATION & SIDEBAR ----
function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    if(!nav) return;
    
    let html = `
        <button class="nav-item ${currentView === 'dashboard' ? 'active' : ''}" id="nav-dashboard" onclick="switchView('dashboard')">
            <i class="ri-dashboard-line"></i> Painel de Execução
        </button>
        <button class="nav-item ${currentView === 'planner' ? 'active' : ''}" id="nav-planner" onclick="switchView('planner')">
            <i class="ri-magic-line"></i> Planejador Inteligente
        </button>
        <button class="nav-item ${currentView === 'agenda' ? 'active' : ''}" id="nav-agenda" onclick="switchView('agenda')" style="margin-bottom:1rem;">
            <i class="ri-calendar-todo-line"></i> Rotina & Agenda 24h
        </button>
        <div class="nav-section-title">Módulos Corporativos</div>
    `;

    appData.empresas.forEach(comp => {
        const dotColor = statusColors[comp.status] || 'transparent';
        html += `
            <button class="nav-item ${currentView === comp.id ? 'active' : ''}" id="nav-${comp.id}" onclick="switchView('${comp.id}')">
                <i class="ri-building-4-line"></i> ${comp.nome}
                <div class="status-dot-nav" style="background-color: ${dotColor}"></div>
            </button>
        `;
    });

    nav.innerHTML = html;
}

function switchView(viewId) {
    currentView = viewId;
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    
    if (viewId === 'dashboard') {
        document.getElementById('view-dashboard').style.display = 'flex';
        renderDashboard();
    } else if (viewId === 'agenda') {
        document.getElementById('view-agenda').style.display = 'flex';
        renderAgenda();
    } else if (viewId === 'planner') {
        document.getElementById('view-planner').style.display = 'flex';
        renderPlannerConfig();
        if(appData.plannerRoutine && appData.plannerRoutine.length > 0) renderPlannerTimeline();
    } else {
        document.getElementById('view-company').style.display = 'flex';
        renderCompanyDetail(viewId);
    }
    renderSidebar();
    
    // mobile reset
    document.getElementById('sidebar').classList.remove('open');
}

// ---- DASHBOARD PRINCIPAL ----
function renderDashboard() {
    populateFocusSelects();
    renderFieldsTop();
    populateFilters();
    renderModules();
    renderDecisions();
    renderRoutineTracker();
    renderConcluidasHoje();
    updateKPIs();
}

function renderConcluidasHoje() {
    const container = document.getElementById('concluidas-hoje-container');
    const section = document.getElementById('section-concluidas-hoje');
    if(!container || !section) return;

    const today = new Date().toISOString().split('T')[0];
    let concluidasHoje = [];

    appData.empresas.forEach(emp => {
        if(emp.tarefas) {
            const feitasHoje = emp.tarefas.filter(t => t.status === 'concluida' && t.dataConclusao === today);
            feitasHoje.forEach(t => {
                concluidasHoje.push({ empresaNome: emp.nome, titulo: t.titulo });
            });
        }
    });

    if(concluidasHoje.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    container.innerHTML = concluidasHoje.map(t => `
        <div style="display:flex; align-items:center; gap:0.5rem; padding:0.5rem; border-bottom:1px solid rgba(255,255,255,0.05); transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.02)'" onmouseout="this.style.background='transparent'">
            <i class="ri-checkbox-circle-fill" style="color:var(--status-caixa);"></i>
            <span style="color:var(--text-primary); font-size:0.95rem;">${t.titulo}</span>
            <span style="font-size:0.75rem; color:var(--text-secondary); background:rgba(255,255,255,0.05); padding:0.2rem 0.5rem; border-radius:12px; margin-left:auto;">${t.empresaNome}</span>
        </div>
    `).join('');
}

function populateFocusSelects() {
    const pSel = document.getElementById('prioridade-empresa');
    const gSel = document.getElementById('gargalo-empresa');
    if(!pSel || !gSel) return;
    let options = `<option value="">Geral</option>`;
    appData.empresas.forEach(c => { options += `<option value="${c.id}">${c.nome}</option>`; });
    pSel.innerHTML = options; gSel.innerHTML = options;
    if(appData.foco.prioridade_empresa) pSel.value = appData.foco.prioridade_empresa;
    if(appData.foco.gargalo_empresa) gSel.value = appData.foco.gargalo_empresa;
}

function renderFieldsTop() {
    const p = document.getElementById('prioridade-semana');
    const g = document.getElementById('gargalo-semana');
    if(p) p.value = appData.foco.prioridade_semana || "";
    if(g) g.value = appData.foco.gargalo_semana || "";
}

function saveFields() {
    const p = document.getElementById('prioridade-semana');
    const g = document.getElementById('gargalo-semana');
    const pSel = document.getElementById('prioridade-empresa');
    const gSel = document.getElementById('gargalo-empresa');
    if(p) appData.foco.prioridade_semana = p.value;
    if(g) appData.foco.gargalo_semana = g.value;
    if(pSel) appData.foco.prioridade_empresa = pSel.value;
    if(gSel) appData.foco.gargalo_empresa = gSel.value;
    saveData();
}

function updateKPIs() {
    let pendentes = 0, hoje = 0, concluidas = 0;
    appData.empresas.forEach(comp => {
        comp.tarefas.forEach(t => {
            if (t.estado === 'concluida') {
                concluidas++;
            } else {
                pendentes++;
                if (t.hoje) hoje++;
            }
        });
    });

    const kpiContainer = document.getElementById('kpi-container');
    if(kpiContainer) {
        kpiContainer.innerHTML = `
            <div class="kpi-mini"><span>Macros Ativas</span> <div style="color:var(--text-primary);">${pendentes}</div></div>
            <div class="kpi-mini" style="border-color:${hoje>0?'var(--border-focus)':'var(--border-soft)'}">
                <span style="color:${hoje>0?'var(--accent)':'var(--text-secondary)'}">Macros P/ Hoje</span> 
                <div style="color:${hoje>0?'var(--accent)':'var(--text-primary)'};">${hoje}</div>
            </div>
            <div class="kpi-mini"><span>Macros Concluídas</span> <div style="color:var(--status-caixa)">${concluidas}</div></div>
        `;
    }
}

function populateFilters() {
    const selEmp = document.getElementById('filter-module-empresa');
    if(!selEmp) return;
    const currentVal = selEmp.value;
    let html = `<option value="">Todas as Empresas</option>`;
    appData.empresas.forEach(c => { html += `<option value="${c.id}">${c.nome}</option>`; });
    selEmp.innerHTML = html;
    if([...selEmp.options].some(o => o.value === currentVal)) selEmp.value = currentVal;
}

function getTaskProgress(task) {
    if(!task.subtarefas || task.subtarefas.length === 0) return null;
    const concluidas = task.subtarefas.filter(s => s.concluida).length;
    const pct = Math.round((concluidas / task.subtarefas.length) * 100);
    return pct;
}

function renderModules() {
    const container = document.getElementById('dashboard-modules');
    if(!container) return;
    container.innerHTML = "";

    const filterEmp = document.getElementById('filter-module-empresa')?.value || "";
    const filterPri = document.getElementById('filter-module-prioridade')?.value || "";

    appData.empresas.forEach(comp => {
        if(filterEmp && comp.id !== filterEmp) return;

        let activeTasks = comp.tarefas.filter(t => t.estado === 'andamento' || (t.hoje && t.estado !== 'concluida'));
        if(filterPri) activeTasks = activeTasks.filter(t => t.prioridade === filterPri);
        if(activeTasks.length === 0) return;

        const htmlTasks = activeTasks.map(t => {
            const pct = getTaskProgress(t);
            const progressHtml = pct !== null ? `<span class="task-progress-text" style="color: ${pct===100?'var(--status-caixa)':'var(--accent)'};">(${pct}% concluído)</span>` : '';
            
            return `
                <div class="task-wrapper">
                    <div class="task-clean">
                        <input type="checkbox" class="task-checkbox-clean" onchange="toggleConcluidaCompany('${comp.id}', '${t.id}')">
                        <div style="display:flex; flex-direction:column; gap:0.4rem; flex-grow:1;">
                            <div style="display:flex; align-items:center;">
                                <span class="task-title-clean" contenteditable="true" oninput="updateTask('${comp.id}', '${t.id}', 'titulo', this.innerText)" style="flex-grow:0; display:inline-block;">${t.titulo}</span>
                                ${progressHtml}
                            </div>
                            <div style="display:flex; gap:0.5rem;">
                                ${t.hoje ? '<span class="badge-minimal badge-hoje" title="Hoje" onclick="toggleHoje(\''+comp.id+'\', \''+t.id+'\')">Hoje</span>' : ''}
                                ${t.estado === 'andamento' ? '<span class="badge-minimal badge-pauta" title="Em Pauta">Em Pauta</span>' : ''}
                                ${t.prioridade === 'alta' ? '<span class="badge-minimal badge-alta">Alta</span>' : (t.prioridade === 'media' ? '<span class="badge-minimal badge-media">Média</span>' : '<span class="badge-minimal badge-baixa">Baixa</span>')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const card = document.createElement('div');
        card.className = "module-card";
        card.innerHTML = `
            <div class="module-header" onclick="switchView('${comp.id}')">
                <span>${comp.nome}</span>
                <i class="ri-arrow-right-line" style="color:var(--text-secondary); font-size:1rem;"></i>
            </div>
            <div class="module-body">
                ${htmlTasks}
            </div>
        `;
        container.appendChild(card);
    });

    if(container.innerHTML === "") {
        container.innerHTML = `<div style="color: var(--text-secondary); padding: 1rem 0; font-style:italic;">Nenhum módulo ativo. Vá nas empresas e marque tarefas para Hoje.</div>`;
    }
}

function renderDecisions() {
    const d = document.getElementById('decisions-container'); 
    if(!d) return; d.innerHTML = "";
    appData.decisoesGlobais.forEach((dec, i) => {
        const div = document.createElement('div'); div.className = "decision-item";
        div.innerHTML = `<span style="color:var(--text-secondary);width:20px;font-weight:700;">${i+1}.</span>
            <input type="text" value="${dec}" placeholder="Decisão macro..." oninput="appData.decisoesGlobais[${i}]=this.value;saveData()">`;
        d.appendChild(div);
    });
}

// ---- PLANEJADOR INTELIGENTE (SMART PLANNER) ----
function renderPlannerConfig() {
    const c = document.getElementById('planner-companies-container');
    if(!c) return;
    if(!appData.plannerConfig) appData.plannerConfig = { companies: appData.empresas.filter(x=>x.status==='critico'||x.status==='risco').map(x=>x.id), starts: '09:00', ends: '23:00', intensity: 'normal', priority: 'caixa'};
    
    // Checkboxes
    let html = "";
    appData.empresas.forEach(emp => {
        const checked = appData.plannerConfig.companies.includes(emp.id) ? 'checked' : '';
        html += `<label class="company-cb-label"><input type="checkbox" value="${emp.id}" class="planner-cb" ${checked}> ${emp.nome}</label>`;
    });
    c.innerHTML = html;

    // Restore fields
    const conf = appData.plannerConfig;
    document.getElementById('planner-start').value = conf.starts || '09:00';
    document.getElementById('planner-end').value = conf.ends || '23:00';
    document.getElementById('planner-intensity').value = conf.intensity || 'normal';
    document.getElementById('planner-priority').value = conf.priority || 'caixa';
}

function getEnergyFromTagPri(tag, pri) {
    if(pri === "alta" || tag === "financeiro" || tag === "estratégico") return "alta";
    if(pri === "media" || tag === "operacional" || tag === "comercial" || tag === "produto") return "media";
    return "baixa";
}

function parseTime(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m; // minutes from 00:00
}

function formatTime(mins) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

function generateRoutine() {
    // Save Config
    const cbs = document.querySelectorAll('.planner-cb:checked');
    const selectedEmps = Array.from(cbs).map(cb => cb.value);
    
    if(selectedEmps.length === 0) { alert("Selecione pelo menos uma empresa."); return; }

    appData.plannerConfig.companies = selectedEmps;
    appData.plannerConfig.starts = document.getElementById('planner-start').value;
    appData.plannerConfig.ends = document.getElementById('planner-end').value;
    appData.plannerConfig.intensity = document.getElementById('planner-intensity').value;
    appData.plannerConfig.priority = document.getElementById('planner-priority').value;

    let startMins = parseTime(appData.plannerConfig.starts);
    let endMins = parseTime(appData.plannerConfig.ends);
    if(endMins <= startMins) { alert("Erro de horário"); return; }
    
    const intensity = appData.plannerConfig.intensity;
    let blockDur = 60, breakDur = 15, lunchDur = 60;
    if(intensity === 'leve') { blockDur = 45; breakDur = 15; lunchDur = 90; }
    if(intensity === 'pesado') { blockDur = 90; breakDur = 15; lunchDur = 45; }
    if(intensity === 'extremo') { blockDur = 90; breakDur = 5; lunchDur = 30; }

    // Gather Candidate Tasks from selected companies
    let pool = [];
    appData.empresas.forEach(emp => {
        if(selectedEmps.includes(emp.id)) {
            emp.tarefas.forEach(t => {
                if(t.estado !== 'concluida') {
                    // Score
                    let score = 0;
                    if(t.hoje) score += 100;
                    if(t.prioridade === 'alta') score += 50;
                    if(t.estado === 'andamento') score += 20;
                    if(emp.status === 'critico') score += 30;
                    if(emp.status === 'risco') score += 15;
                    
                    let energy = getEnergyFromTagPri(t.tag, t.prioridade);
                    
                    pool.push({...t, companyId: emp.id, companyName: emp.nome, score, energy});
                }
            });
        }
    });

    pool.sort((a,b) => b.score - a.score);

    // Timeline Generation Logic
    let currentMins = startMins;
    let routine = [];
    let prevCompany = "";
    let consecutiveBlocks = 0;

    let lunchScheduled = false;

    while(currentMins + blockDur <= endMins) {
        // Lunch check roughly around 12:00 - 13:30
        if(!lunchScheduled && currentMins >= 12*60 && currentMins <= 14*60) {
            routine.push({ type: 'break', title: "Pausa p/ Almoço e Descompressão", start: currentMins, end: currentMins + lunchDur });
            currentMins += lunchDur;
            lunchScheduled = true;
            prevCompany = ""; consecutiveBlocks = 0;
            continue;
        }

        if(pool.length === 0) break; // no more tasks

        // Pick a task
        let chosenIdx = 0;
        for(let i=0; i<pool.length; i++) {
            if(pool[i].companyId !== prevCompany || consecutiveBlocks < 2) {
                chosenIdx = i; break;
            }
        }
        
        let task = pool.splice(chosenIdx, 1)[0];
        
        routine.push({
            type: 'task',
            start: currentMins,
            end: currentMins + blockDur,
            companyName: task.companyName,
            companyId: task.companyId,
            taskId: task.id,
            macro: task.titulo,
            subtarefas: task.subtarefas ? task.subtarefas.filter(s=>!s.concluida).slice(0,3).map(s=>s.titulo) : [],
            energia: task.energy,
            tag: task.tag,
            prioridade: task.prioridade
        });

        if(task.companyId === prevCompany) consecutiveBlocks++;
        else { prevCompany = task.companyId; consecutiveBlocks = 1; }

        currentMins += blockDur;

        // Break
        if(currentMins + breakDur <= endMins && pool.length > 0 && !(currentMins >= 12*60 && !lunchScheduled)) {
            routine.push({ type: 'break', title: "Pausa Rápida / Respiro", start: currentMins, end: currentMins + breakDur });
            currentMins += breakDur;
        }
    }

    appData.plannerRoutine = routine;
    saveData();
    renderPlannerTimeline();
}

function renderPlannerTimeline() {
    const c = document.getElementById('planner-timeline-container');
    const txt = document.getElementById('planner-status-text');
    const btns = document.getElementById('planner-btn-actions');
    const btnApp = document.getElementById('btn-apply-planner');

    if(!appData.plannerRoutine || appData.plannerRoutine.length === 0) {
        if(c) c.innerHTML = `<div class="empty-state"><i class="ri-calendar-todo-line"></i><p>Ajuste as configurações ao lado e clique em Gerar.</p></div>`;
        if(txt) txt.innerText = "Rotina não gerada.";
        if(btns) btns.style.display = "none";
        return;
    }

    let html = "";
    appData.plannerRoutine.forEach(item => {
        let timeLabel = `${formatTime(item.start)} - ${formatTime(item.end)}`;
        if(item.type === 'break') {
            html += `
                <div class="timeline-block" style="background:transparent; border:1px dashed var(--border-soft); padding:0.8rem 1.25rem;">
                    <div class="tb-time" style="color:var(--text-secondary); margin-bottom:0;">${timeLabel} — ${item.title}</div>
                </div>
            `;
        } else {
            let badgePri = item.prioridade === 'alta' ? 'badge-alta' : (item.prioridade === 'media' ? 'badge-media' : 'badge-baixa');
            let subsHtml = item.subtarefas.map(s => `<li>${s}</li>`).join('');
            if(subsHtml) subsHtml = `<ul class="tb-subs">${subsHtml}</ul>`;
            
            html += `
                <div class="timeline-block">
                    <div class="tb-time">${timeLabel}</div>
                    <div class="tb-company"><i class="ri-building-4-line"></i> ${item.companyName}</div>
                    <div class="tb-macro">${item.macro}</div>
                    ${subsHtml}
                    <div class="tb-meta">
                        <span class="badge-minimal ${badgePri}">Pri: ${item.prioridade}</span>
                        <span class="badge-minimal badge-pauta" style="background:transparent; border-color:var(--border-soft); color:var(--text-secondary);">Energia ${item.energia}</span>
                        <span class="badge-minimal badge-baixa" style="background:transparent; border-color:var(--border-soft); color:var(--text-secondary);">${item.tag}</span>
                    </div>
                </div>
            `;
        }
    });

    if(c) c.innerHTML = html;
    if(txt) txt.innerHTML = `<strong>Agenda Otimizada!</strong> Gerou ${appData.plannerRoutine.filter(r=>r.type==='task').length} blocos focados.`;
    if(btns) btns.style.display = "flex";
    if(btnApp) btnApp.style.display = "flex";
}

function applyPlannerRoutine() {
    if(!confirm("Tem certeza? Isso marcará todas as macros desta agenda como 'Hoje'.")) return;
    
    appData.plannerRoutine.forEach(r => {
        if(r.type === 'task') {
            const task = appData.empresas.find(e => e.id === r.companyId)?.tarefas.find(t => t.id === r.taskId);
            if(task) { task.hoje = true; if(task.estado === 'concluida') task.estado = 'andamento'; }
        }
    });

    appData.activeRoutine = JSON.parse(JSON.stringify(appData.plannerRoutine));
    appData.routineDate = new Date().toDateString();

    saveData();
    alert("Tarefas enviadas para o Painel de Hoje com sucesso!");
    switchView('dashboard');
}

// ---- TRACKER DE ROTINA EM TEMPO REAL ----
function renderRoutineTracker() {
    const container = document.getElementById('routine-tracker-container');
    if(!container) return;
    
    if(!appData.activeRoutine || appData.activeRoutine.length === 0 || appData.routineDate !== new Date().toDateString()) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'flex';
    
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    
    let htmlSteps = '';
    
    appData.activeRoutine.forEach(block => {
        let stateClass = 'state-future';
        let statusText = 'NA FILA';
        let statusColor = 'var(--text-secondary)';
        let isTaskCompleted = false;
        
        if(block.type === 'task') {
            const task = appData.empresas.find(e => e.id === block.companyId)?.tarefas.find(t => t.id === block.taskId);
            isTaskCompleted = task && task.estado === 'concluida';
        } else {
            isTaskCompleted = currentMins >= block.end;
        }
        
        if(isTaskCompleted) {
            stateClass = 'state-done';
            statusText = 'CONCLUÍDO';
            statusColor = 'var(--status-caixa)';
        } else if (currentMins >= block.start && currentMins < block.end) {
            stateClass = 'state-current';
            statusText = 'EM ANDAMENTO';
            statusColor = 'var(--accent)';
        } else if (currentMins >= block.end && !isTaskCompleted) {
            stateClass = 'state-failed';
            statusText = 'PENDENTE / ATRASO';
            statusColor = 'var(--status-critico)';
        }
        
        let title = block.type === 'task' ? `[${block.companyName}] ${block.macro}` : block.title;
        let timeLabel = `${formatTime(block.start)} - ${formatTime(block.end)}`;
        
        htmlSteps += `
            <div class="tracker-step ${stateClass}">
                <div class="ts-time">${timeLabel}</div>
                <div class="ts-title" title="${title}">${title}</div>
                <div class="ts-status" style="color:${statusColor}">${statusText}</div>
            </div>
        `;
    });
    
    container.innerHTML = `
        <div class="tracker-header">
            <h3><i class="ri-radar-line" style="color:var(--accent);"></i> Real-time: Rotina do Dia</h3>
            <button class="btn" onclick="generateRoutineReport()"><i class="ri-file-list-3-line"></i> Conferência de Fim de Dia</button>
        </div>
        <div class="tracker-timeline-horiz">
            ${htmlSteps}
        </div>
    `;
    
    // Auto-scroll para o item atual
    setTimeout(() => {
        const horizLayout = container.querySelector('.tracker-timeline-horiz');
        const targetNode = container.querySelector('.state-current') || container.querySelector('.state-failed');
        if(targetNode && horizLayout) horizLayout.scrollLeft = targetNode.offsetLeft - 40;
    }, 100);
}

function generateRoutineReport() {
    if(!appData.activeRoutine) return;
    let concluidas = [];
    let pendentes = [];
    
    const currentMins = new Date().getHours() * 60 + new Date().getMinutes();
    
    appData.activeRoutine.forEach(block => {
        if(block.type !== 'task') return;
        const task = appData.empresas.find(e => e.id === block.companyId)?.tarefas.find(t => t.id === block.taskId);
        
        if(task && task.estado === 'concluida') {
            concluidas.push(`- [x] [${block.companyName}] ${task.titulo}`);
        } else if (currentMins >= block.end || !task || task.estado !== 'concluida') {
            pendentes.push(`- [ ] [${block.companyName}] ${task ? task.titulo : block.macro} (Falha/Atraso)`);
        }
    });
    
    let report = `CEO OS // Conferência de Execução Diária\n\n`;
    report += `O QUE EU CONSEGUI ORGANIZAR:\n`;
    report += concluidas.length > 0 ? concluidas.join('\n') : `Nenhuma tarefa principal finalizada na rotina.\n`;
    report += `\n\nO QUE FICOU PENDENTE / ATRASADO:\n`;
    report += pendentes.length > 0 ? pendentes.join('\n') : `Tudo em dia!\n`;
    
    prompt("Conferência de Fim de Dia concluída. Copie o resumo abaixo:", report);
}


// ---- AGENDA 24H VIEW ----
function changeAgendaDate(days) {
    const d = new Date(currentAgendaDate + 'T12:00:00');
    d.setDate(d.getDate() + days);
    currentAgendaDate = d.toISOString().split('T')[0];
    document.getElementById('agenda-date-picker').value = currentAgendaDate;
    renderAgenda();
}

function handleSmartAgendaEnter(e) {
    if(e.key === 'Enter') { e.preventDefault(); addSmartAgenda(); }
}

function addSmartAgenda() {
    const input = document.getElementById('smart-agenda');
    const text = input.value.trim();
    if(!text) return;

    let targetDate = currentAgendaDate;
    let cleanText = text;

    if(/amanhã|amanha/i.test(text)) {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        targetDate = d.toISOString().split('T')[0];
        cleanText = text.replace(/amanhã|amanha/gi, '').trim();
    }

    const match = cleanText.match(/\b([01]?[0-9]|2[0-3])[:hH]([0-5][0-9])?\b/i);
    if(match) {
        let hour = parseInt(match[1]);
        if(hour < 6) hour += 12; 
        if(hour > 23) hour = 23;
        let hourStr = hour.toString().padStart(2, '0') + ':00';
        
        if(!appData.agenda) appData.agenda = {};
        if(!appData.agenda[targetDate]) appData.agenda[targetDate] = {};

        let existing = (appData.agenda[targetDate][hourStr] || "").trim();
        appData.agenda[targetDate][hourStr] = existing.length > 0 ? existing + " | " + cleanText : cleanText;
        
        input.value = ""; 
        currentAgendaDate = targetDate;
        const picker = document.getElementById('agenda-date-picker');
        if(picker) picker.value = targetDate;
        
        saveData(); 
        renderAgenda();
    } else {
        alert("Não identifiquei a hora! (Ex: '14:30' ou '14h')");
    }
}

function renderAgenda() {
    const container = document.getElementById('agenda-container');
    const picker = document.getElementById('agenda-date-picker');
    if(picker && !picker.value) picker.value = currentAgendaDate;
    if(picker && picker.value !== currentAgendaDate) {
        currentAgendaDate = picker.value;
    }

    if(!container) return; container.innerHTML = "";
    
    if(!appData.agenda) appData.agenda = {};
    if(!appData.agenda[currentAgendaDate]) appData.agenda[currentAgendaDate] = {};
    
    const dayData = appData.agenda[currentAgendaDate];

    for(let h = START_HOUR; h <= END_HOUR; h++) {
        const hourStr = h.toString().padStart(2, '0') + ':00';
        const val = dayData[hourStr] || "";
        const isFilled = val.trim().length > 0;
        container.innerHTML += `
            <div class="agenda-slot ${isFilled ? 'filled' : ''}">
                <div class="agenda-time">${hourStr}</div>
                <input type="text" class="agenda-input" placeholder="Livre..." value="${val}" oninput="updateAgenda('${currentAgendaDate}', '${hourStr}', this.value); this.parentElement.classList.toggle('filled', this.value.trim().length > 0);">
            </div>
        `;
    }
}

function updateAgenda(dateStr, hourStr, value) {
    if(!appData.agenda) appData.agenda = {};
    if(!appData.agenda[dateStr]) appData.agenda[dateStr] = {};
    appData.agenda[dateStr][hourStr] = value; 
    saveData();
}

// ---- EMPRESA ESPECÍFICA DETAIL VIEW ----
function renderCompanyDetail(empId) {
    const container = document.getElementById('company-detail-container');
    const comp = appData.empresas.find(c => c.id === empId);
    if(!comp) return;

    const backlogTasks = comp.tarefas.filter(t => t.estado === 'backlog');
    const andamentoTasks = comp.tarefas.filter(t => t.estado === 'andamento');
    const concluidaTasks = comp.tarefas.filter(t => t.estado === 'concluida');

    const statusOptionsHtml = [
        { value: "", label: "Status..." }, { value: "critico", label: "Crítico" }, { value: "risco", label: "Risco" },
        { value: "validacao", label: "Validação" }, { value: "caixa", label: "Caixa" }, { value: "expansao", label: "Expansão" }
    ];

    const mkGroup = (title, tasks) => `
        <div class="task-group">
            <div class="task-group-title">${title} <span class="badge-minimal" style="background:transparent; color:var(--text-secondary); border:1px solid var(--border-soft);">${tasks.length}</span></div>
            <div class="tasks-container" style="display:flex; flex-direction:column; gap:0.5rem;">
                ${tasks.map(t => renderTaskWrapperHTML(t, comp.id)).join('')}
            </div>
        </div>`;

    const statusHtml = statusOptionsHtml.map(opt => `<option value="${opt.value}" ${comp.status === opt.value ? 'selected' : ''}>${opt.label}</option>`).join('');
    const dotColor = statusColors[comp.status] || 'transparent';

    container.innerHTML = `
        <div class="company-card" style="border:none; border-radius:0; background:transparent; box-shadow:none;">
            <div class="company-header">
                <div class="company-title-row">
                    <h3>${comp.nome}</h3>
                    <div class="status-dropdown">
                        <div class="status-dot" id="ind-detail-${comp.id}" style="background-color:${dotColor}"></div>
                        <select onchange="updateCompany('${comp.id}', 'status', this.value); document.getElementById('ind-detail-${comp.id}').style.backgroundColor = statusColors[this.value] || 'transparent'; renderSidebar();">${statusHtml}</select>
                    </div>
                </div>
                <div class="small-labels" style="grid-template-columns: 1fr; gap:0.5rem;">
                    <input type="text" placeholder="Objetivo Macro" value="${comp.objetivo || ''}" style="font-size:1.1rem; font-weight:600; color:var(--text-primary);" oninput="updateCompany('${comp.id}', 'objetivo', this.value)">
                </div>
            </div>
            
            <div class="add-task-form">
                <input type="text" id="add-task-${comp.id}" placeholder="Descreva uma nova macro-tarefa e aperte Enter..." onkeypress="handleTaskEnter(event, '${comp.id}')">
                <button class="btn-icon-large" onclick="addTask('${comp.id}')"><i class="ri-add-line"></i></button>
            </div>

            <div class="company-body">
                <div class="task-groups-grid">
                    ${mkGroup('Backlog Operacional', backlogTasks)}
                    ${mkGroup('Atualmente em Pauta', andamentoTasks)}
                    ${mkGroup('Finalizadas / Concluídas', concluidaTasks)}
                </div>
            </div>
        </div>
    `;
}

// ---- TASKS & SUBTASKS LOGIC REUSABLE ----
function renderTaskWrapperHTML(task, compId) {
    const priColor = task.prioridade === 'alta' ? 'alta' : (task.prioridade === 'media' ? 'media' : 'baixa');
    const stateFlags = { "backlog": "Backlog", "andamento": "Pauta", "concluida": "Feita" };
    const pct = getTaskProgress(task);
    
    let subHTML = "";
    if (task.expandido) {
        const subs = (task.subtarefas || []).map(s => `
            <div class="subtask-item ${s.concluida ? 'concluida' : ''}">
                <input type="checkbox" class="subtask-checkbox" ${s.concluida ? 'checked' : ''} onchange="toggleSubtask('${compId}', '${task.id}', '${s.id}')">
                <input type="text" class="subtask-title" value="${s.titulo}" oninput="updateSubtask('${compId}', '${task.id}', '${s.id}', this.value)">
                <button onclick="deleteSubtask('${compId}', '${task.id}', '${s.id}')" style="background:none; border:none; color:var(--text-secondary); cursor:pointer;"><i class="ri-close-line"></i></button>
            </div>
        `).join('');

        subHTML = `
            <div class="subtasks-container">
                ${subs}
                <input type="text" class="add-subtask-input" placeholder="+ Adicionar etapa (Enter)..." onkeypress="handleAddSubtaskEnter(event, '${compId}', '${task.id}')" id="add-sub-${task.id}">
            </div>
        `;
    }
    
    return `
        <div class="task-wrapper ${task.expandido ? 'expanded' : ''} ${task.estado === 'concluida' ? 'state-concluida' : ''}">
            <div class="task-clean">
                <button class="task-expand-btn ${task.expandido ? 'expanded' : ''}" onclick="toggleExpand('${compId}', '${task.id}')">
                    <i class="ri-arrow-right-s-line"></i>
                </button>
                <div style="flex-grow:1; display:flex; flex-direction:column; gap:0.6rem;">
                    <span class="task-title-clean" contenteditable="true" oninput="updateTask('${compId}', '${task.id}', 'titulo', this.innerText)">${task.titulo}</span>
                    <div style="display:flex; gap:0.4rem; align-items:center; flex-wrap:wrap;">
                        <span class="badge-minimal badge-${priColor}" onclick="cyclePriority('${compId}', '${task.id}')">Pri: ${task.prioridade}</span>
                        <span class="badge-minimal ${task.hoje ? 'badge-hoje' : 'badge-baixa'}" onclick="toggleHoje('${compId}', '${task.id}')">${task.hoje ? '⭐ Hoje' : 'Hojé?'}</span>
                        <span class="badge-minimal badge-baixa" onclick="cycleState('${compId}', '${task.id}')">${stateFlags[task.estado]}</span>
                        ${pct !== null ? `<span class="task-progress-text">${pct}%</span>` : ''}
                    </div>
                </div>
                <button class="task-actions" onclick="deleteTask('${compId}', '${task.id}')" title="Excluir" style="border:none;background:none;color:var(--text-secondary);cursor:pointer;opacity:0.3;transition:all 0.2s;" onmouseenter="this.style.opacity=1; this.style.color='var(--status-critico)'" onmouseleave="this.style.opacity=0.3; this.style.color='var(--text-secondary)'"><i class="ri-close-line"></i></button>
            </div>
            ${subHTML}
        </div>
    `;
}

function toggleExpand(empId, taskId) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(task) { task.expandido = !task.expandido; saveData(); renderCompanyDetail(empId); }
}

function toggleSubtask(empId, taskId, subId) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(task) {
        const sub = task.subtarefas.find(s => s.id === subId);
        if(sub) {
            sub.concluida = !sub.concluida;
            if(task.subtarefas.every(s => s.concluida) && task.subtarefas.length > 0) {
                task.estado = "concluida"; task.hoje = false; task.expandido = false;
                task.dataConclusao = new Date().toISOString().split('T')[0];
            } else {
                if (task.estado === 'concluida') { task.estado = 'andamento'; delete task.dataConclusao; }
            }
            saveData(); 
            if(currentView === 'dashboard') renderDashboard(); else renderCompanyDetail(empId);
        }
    }
}

function updateSubtask(empId, taskId, subId, value) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(task) { const sub = task.subtarefas.find(s => s.id === subId); if(sub) { sub.titulo = value; saveData(); } }
}

function handleAddSubtaskEnter(e, empId, taskId) {
    if(e.key === 'Enter') {
        e.preventDefault();
        const input = document.getElementById(`add-sub-${taskId}`);
        if(!input.value.trim()) return;
        const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
        if(task) {
            if(!task.subtarefas) task.subtarefas = [];
            task.subtarefas.push({ id: Date.now().toString(), titulo: input.value.trim(), concluida: false });
            if (task.estado === 'concluida') { task.estado = 'andamento'; delete task.dataConclusao; }
            saveData(); renderCompanyDetail(empId);
            setTimeout(() => { document.getElementById(`add-sub-${taskId}`).focus(); }, 50);
        }
    }
}

function deleteSubtask(empId, taskId, subId) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(task) { task.subtarefas = task.subtarefas.filter(s => s.id !== subId); saveData(); renderCompanyDetail(empId); }
}

function toggleConcluidaCompany(empId, taskId) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(task) { 
        if(task.estado !== 'concluida') {
            task.estado = "concluida"; task.hoje = false; task.expandido = false; 
            task.dataConclusao = new Date().toISOString().split('T')[0];
        } else {
            task.estado = "andamento"; delete task.dataConclusao;
        }
        saveData(); if(currentView === empId) renderCompanyDetail(empId); else renderDashboard();
    }
}

function updateTask(empId, taskId, field, value) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(task) { task[field] = value; saveData(); }
}

function addTask(empId) {
    const input = document.getElementById(`add-task-${empId}`);
    const titulo = input.value.trim();
    if(!titulo) return;
    const comp = appData.empresas.find(c => c.id === empId);
    if(comp) { 
        let targetPrioridade = 'media';
        let targetTag = 'operacional';
        let targetHoje = false;
        const lowerText = titulo.toLowerCase();
        
        if(/urgente|cliente|fechar|venda|pagar|crítico|critico/i.test(lowerText)) targetPrioridade = 'alta';
        if(/venda|comercial|prospect/i.test(lowerText)) targetTag = 'comercial';
        else if(/pagar|receber|nota|financeiro|caixa/i.test(lowerText)) targetTag = 'financeiro';
        else if(/estrategia|estratégia|planejar|sócio/i.test(lowerText)) targetTag = 'estrategico';
        
        if(/hoje|agora|urgente/i.test(lowerText)) targetHoje = true;
        if(/amanhã|amanha/i.test(lowerText)) targetHoje = false;

        comp.tarefas.unshift({ id: Date.now().toString(), titulo, prioridade: targetPrioridade, tag: targetTag, hoje: targetHoje, estado: "backlog", expandido: false, subtarefas: [] }); 
        input.value = ""; saveData(); if(currentView === empId) renderCompanyDetail(empId); 
    }
}

function handleTaskEnter(e, empId) {
    if(e.key === 'Enter') { e.preventDefault(); addTask(empId); }
}

function updateCompany(empId, field, value) {
    const comp = appData.empresas.find(c => c.id === empId);
    if(comp) { comp[field] = value; saveData(); }
}

function cycleState(empId, taskId) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(!task) return;
    const states = ["backlog", "andamento", "concluida"];
    task.estado = states[(states.indexOf(task.estado) + 1) % states.length];
    if(task.estado === 'concluida') { 
        task.hoje = false; task.expandido = false; 
        task.dataConclusao = new Date().toISOString().split('T')[0];
    } else {
        delete task.dataConclusao;
    }
    saveData(); 
    if(currentView === 'dashboard') renderDashboard(); else renderCompanyDetail(empId);
}

function cyclePriority(empId, taskId) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(!task) return;
    const prios = ["baixa", "media", "alta"];
    task.prioridade = prios[(prios.indexOf(task.prioridade) + 1) % prios.length]; saveData();
    if(currentView === 'dashboard') renderDashboard(); else renderCompanyDetail(empId);
}

function toggleHoje(empId, taskId) {
    const task = appData.empresas.find(c => c.id === empId)?.tarefas.find(t => t.id === taskId);
    if(task) { task.hoje = !task.hoje; saveData(); if(currentView === 'dashboard') renderDashboard(); else renderCompanyDetail(empId); }
}

function deleteTask(empId, taskId) {
    if(!confirm('Atenção: Excluir a tarefa principal também excluirá suas subtarefas permanentemente. Confirmar?')) return;
    const comp = appData.empresas.find(c => c.id === empId);
    if(comp) { comp.tarefas = comp.tarefas.filter(t => t.id !== taskId); saveData(); if(currentView === 'dashboard') renderDashboard(); else renderCompanyDetail(empId); }
}

function exportSummary() { alert("Exportação agendada."); }
