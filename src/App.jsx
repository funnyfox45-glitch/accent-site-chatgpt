const navItems = [
  ['#services', 'Услуги'],
  ['#process', 'Как мы работаем'],
  ['#trust', 'Доверие'],
  ['#cases', 'Кейсы'],
  ['#team', 'Команда'],
  ['#tariffs', 'Тарифы'],
  ['#reviews', 'Отзывы'],
  ['#contact', 'Контакты']
]

const heroMetrics = [
  ['3000+', 'рабочих мест на обслуживании'],
  ['500+', 'серверов в сопровождении'],
  ['350+', 'B2B клиентов'],
  ['24/7', 'подключение к критичным инцидентам'],
  ['20 минут', 'время реакции на обращения'],
  ['До 1 часа', 'время решения проблем'],
  ['18 лет', 'на рынке ИТ услуг'],
  ['8000 р', 'стартовая стоимость обслуживания в месяц']
]

const services = [
  {
    tag: 'Core service',
    title: 'ИТ-аутсорсинг',
    text: 'Поддержка пользователей, рабочих мест, серверов, сетевого оборудования, прикладного ПО, резервного копирования и базовой ИБ. Удалённо и с выездом.',
    visual: (
      <svg viewBox="0 0 220 78"><rect x="10" y="18" width="56" height="38" rx="8"></rect><rect x="82" y="10" width="56" height="46" rx="8"></rect><rect x="154" y="22" width="56" height="34" rx="8"></rect><path className="accent" d="M66 36h16"></path><path className="accent" d="M138 36h16"></path></svg>
    ),
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"></rect><path className="accent" d="M8 20h8"></path><path d="M12 16v4"></path></svg>
    )
  },
  {
    tag: 'Dedicated',
    title: 'ИТ-аутстаффинг',
    text: 'Выделенный инженер на проект или площадку клиента без оформления в штат — когда нужна ёмкость команды и контролируемый ресурс.',
    visual: (
      <svg viewBox="0 0 220 78"><circle cx="48" cy="26" r="10"></circle><path d="M32 56c5-11 13-17 16-17s11 6 16 17"></path><rect className="accent" x="126" y="18" width="54" height="36" rx="10"></rect><path d="M93 36h25"></path></svg>
    ),
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"></circle><path d="M4 20c1-3 3-5 5-5s4 2 5 5"></path><path className="accent" d="M17 9h4"></path><path className="accent" d="M19 7v4"></path></svg>
    )
  },
  {
    tag: 'Assessment',
    title: 'ИТ-аудит и консалтинг',
    text: 'Оценка состояния ИТ-инфраструктуры, рисков, узких мест и подготовка рекомендаций для развития и повышения отказоустойчивости.',
    visual: (
      <svg viewBox="0 0 220 78"><rect x="18" y="16" width="74" height="44" rx="10"></rect><path className="accent" d="M34 44l12-14 12 9 18-18"></path><circle cx="156" cy="30" r="18"></circle><path d="M168 42l18 18"></path></svg>
    ),
    icon: (
      <svg viewBox="0 0 24 24"><path d="M4 18h16"></path><path className="accent" d="M7 15l3-4 3 2 4-6"></path><circle cx="7" cy="15" r="1"></circle><circle cx="10" cy="11" r="1"></circle><circle cx="13" cy="13" r="1"></circle><circle cx="17" cy="7" r="1"></circle></svg>
    )
  },
  {
    tag: 'Infrastructure',
    title: 'Сети, серверы, VPN, Wi‑Fi',
    text: 'Проектирование, модернизация и сопровождение сетевой и серверной инфраструктуры, защищённый доступ филиалов и удалённых сотрудников.',
    visual: (
      <svg viewBox="0 0 220 78"><rect x="12" y="22" width="48" height="32" rx="8"></rect><rect x="86" y="14" width="48" height="40" rx="8"></rect><rect x="160" y="22" width="48" height="32" rx="8"></rect><path className="accent" d="M60 38h26"></path><path className="accent" d="M134 38h26"></path></svg>
    ),
    icon: (
      <svg viewBox="0 0 24 24"><path className="accent" d="M4 10c4-4 12-4 16 0"></path><path d="M7 13c2-2 8-2 10 0"></path><path d="M10 16c1-1 3-1 4 0"></path><circle cx="12" cy="19" r="1.5"></circle></svg>
    )
  },
  {
    tag: 'Business apps',
    title: '1С и прикладные системы',
    text: 'Поддержка пользователей 1С, доработки, интеграции, обмены, производительность, сопровождение серверов 1С и связанной ИТ-инфраструктуры.',
    visual: (
      <svg viewBox="0 0 220 78"><rect x="20" y="12" width="82" height="54" rx="10"></rect><path className="accent" d="M40 30h42"></path><path d="M40 44h58"></path><path d="M132 22h58"></path><path className="accent" d="M132 38h42"></path><path d="M132 54h52"></path></svg>
    ),
    icon: (
      <svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2"></rect><path className="accent" d="M8 9h8"></path><path d="M8 13h5"></path></svg>
    )
  },
  {
    tag: 'Field works',
    title: 'СКС, СКУД, видеонаблюдение, IP-телефония',
    text: 'Проектирование, монтаж, запуск и дальнейшее сервисное обслуживание инженерных и телекоммуникационных систем на площадке клиента.',
    visual: (
      <svg viewBox="0 0 220 78"><path d="M24 56V26l30-14 30 14v30"></path><path className="accent" d="M49 56V40h10v16"></path><rect x="126" y="18" width="62" height="38" rx="10"></rect><circle className="accent" cx="157" cy="37" r="8"></circle></svg>
    ),
    icon: (
      <svg viewBox="0 0 24 24"><rect x="5" y="7" width="10" height="7" rx="2"></rect><path className="accent" d="M15 10l4-2v8l-4-2"></path><path d="M9 14v4"></path></svg>
    )
  }
]

const processSteps = [
  {
    step: 'Шаг 01',
    title: 'Диагностика',
    text: 'Фиксируем текущую ситуацию, состав сервисов, ключевые риски и требования бизнеса к доступности инфраструктуры.',
    visual: <svg viewBox="0 0 200 60"><rect x="10" y="10" width="70" height="40" rx="10"></rect><circle className="accent" cx="132" cy="28" r="16"></circle><path d="M144 40l18 12"></path></svg>
  },
  {
    step: 'Шаг 02',
    title: 'Предложение',
    text: 'Формируем состав услуг, SLA, формат поддержки, регламенты и границы ответственности под конкретную инфраструктуру.',
    visual: <svg viewBox="0 0 200 60"><rect x="12" y="14" width="48" height="32" rx="8"></rect><rect className="accent" x="76" y="14" width="48" height="32" rx="8"></rect><rect x="140" y="14" width="48" height="32" rx="8"></rect><path d="M60 30h16"></path><path d="M124 30h16"></path></svg>
  },
  {
    step: 'Шаг 03',
    title: 'Подключение',
    text: 'Настраиваем каналы обращений, мониторинг, удалённый доступ, резервное копирование и рабочие коммуникации команды.',
    visual: <svg viewBox="0 0 200 60"><rect x="12" y="16" width="58" height="28" rx="8"></rect><rect x="128" y="16" width="58" height="28" rx="8"></rect><path className="accent" d="M70 30h58"></path><circle className="accent" cx="99" cy="30" r="4"></circle></svg>
  },
  {
    step: 'Шаг 04',
    title: 'Сопровождение',
    text: 'Решаем инциденты, выполняем плановые работы, готовим отчётность и развиваем инфраструктуру вместе с ростом бизнеса.',
    visual: <svg viewBox="0 0 200 60"><path d="M18 42h34l12-18 18 8 18-20 18 30h34"></path><circle className="accent" cx="100" cy="20" r="6"></circle></svg>
  }
]

const scopeCards = [
  {
    title: '🖥 Поддержка пользователей и рабочих мест',
    text: 'Оперативная помощь сотрудникам по всем ИТ-вопросам:',
    items: ['настройка и обслуживание ПК и ноутбуков', 'подключение периферии: принтеры, сканеры, телефония', 'установка и обновление ПО', 'удалённая и выездная поддержка']
  },
  {
    title: '🖧 Сервера и инфраструктура',
    text: 'Обеспечиваем стабильную работу серверов и ключевых систем:',
    items: ['администрирование физических и виртуальных серверов', 'поддержка Active Directory, файловых сервисов, RDP', 'сопровождение 1С, SQL и бизнес-приложений', 'контроль ресурсов и производительности']
  },
  {
    title: '🌐 Сети и доступ',
    text: 'Настройка и поддержка сетевой инфраструктуры:',
    items: ['локальные и распределённые сети', 'VPN и удалённый доступ сотрудников', 'Wi‑Fi сети и безопасность подключения', 'диагностика и устранение сетевых проблем']
  },
  {
    title: '🔒 Резервное копирование и защита данных',
    text: 'Контроль сохранности информации и защита от потерь:',
    items: ['настройка резервного копирования backup', 'проверка восстановления данных', 'базовые меры информационной безопасности', 'контроль доступа пользователей']
  },
  {
    title: '📊 Мониторинг и предотвращение проблем',
    text: 'Работаем не по факту, а на опережение:',
    items: ['24/7 мониторинг серверов и сервисов', 'выявление потенциальных сбоев', 'автоматические уведомления и реакция', 'плановые работы и профилактика']
  },
  {
    title: '📈 Развитие ИТ-инфраструктуры',
    text: 'Не просто поддержка, а улучшение системы:',
    items: ['рекомендации по модернизации', 'оптимизация нагрузки и архитектуры', 'внедрение новых решений', 'подготовка ИТ под рост бизнеса']
  },
  {
    title: '👤 Выделенный сервис-менеджер',
    text: 'За вами закрепляется отдельный менеджер, который отвечает за коммуникацию и организацию работы:',
    items: ['единая точка входа по всем вопросам', 'контроль выполнения заявок и SLA', 'решение организационных и административных задач', 'участие в планировании работ и развитии ИТ']
  }
]

const stats = [
  ['3000+', 'рабочих мест на обслуживании'],
  ['500+', 'серверов в сопровождении'],
  ['350+', 'уникальных клиентов'],
  ['25 000+', 'выполненных заявок в год'],
  ['24/7', 'доступность поддержки'],
  ['18 лет', 'на рынке ИТ услуг']
]

const team = [
  ['O03A7816.jpg', 'Джумаев Олег', 'Генеральный директор', 'Отвечает за качество сервиса, управленческий контур и обязательства компании перед клиентом.'],
  ['O03A7818.jpg', 'Сиренко Сергей', 'Руководитель технической поддержки', 'Управляет эксплуатацией, реакцией на инциденты, приоритизацией обращений и устойчивостью поддержки.'],
  ['O03A7820.jpg', 'Тимофеев Дмитрий', 'Руководитель монтажного подразделения', 'Ведёт сложные проекты по СКС, видеонаблюдению, сетевой инфраструктуре и внедрению инженерных решений.'],
  ['Титов Максим, програмист 1С.jpg', 'Титов Максим', 'Старший программист 1С', 'Отвечает за доработки, интеграции, обмены и сложные прикладные задачи в контуре 1С.'],
  ['IMG_5356.JPG', 'Носырева Мария', 'Руководитель 1С направления', 'Организует работу 1С Направления и отвечает за управляемость проектов по автоматизации.']
]

const tariffs = [
  ['Базовый', 'Для малого офиса и типовой инфраструктуры', ['Поддержка пользователей и рабочих мест', 'Удалённое сопровождение и консультации', 'Плановые работы по согласованному регламенту', 'Стоимость — по результатам аудита']],
  ['Бизнес', 'Для компаний с серверами, 1С и филиальной структурой', ['Сопровождение серверов, сети и прикладных систем', 'SLA, мониторинг, резервное копирование', 'Удалённая поддержка и выезды на площадку', 'Стоимость — по результатам аудита']],
  ['Enterprise', 'Для критичной и распределённой инфраструктуры', ['Расширенный SLA и подключение к критичным инцидентам', 'Несколько контуров поддержки и выделенные специалисты', 'Регламентное развитие инфраструктуры и отчётность', 'Стоимость — по результатам аудита']]
]

const reviews = [
  ['Рекомендации клиентов', '«Подрядчик закрывает не только ежедневную поддержку, но и развитие инфраструктуры. Для бизнеса это важнее разовых выездов и точечных решений.»', 'B2B-клиент, производственный сектор', <svg viewBox="0 0 24 24"><path className="accent" d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h6"></path></svg>],
  ['SLA и управляемость', '«Для нас были критичны сроки реакции, прозрачность работ и единая точка ответственности. В этой модели мы это получили.»', 'B2B-клиент, торговая компания', <svg viewBox="0 0 24 24"><path d="M5 16V8"></path><path d="M12 16V5"></path><path className="accent" d="M19 16v-6"></path></svg>],
  ['Комплексный подрядчик', '«Команда держит в одном контуре пользователей, инфраструктуру, 1С и площадочные работы — без перекладывания ответственности между подрядчиками.»', 'B2B-клиент, распределённая сеть', <svg viewBox="0 0 24 24"><circle cx="7" cy="8" r="2.5"></circle><circle className="accent" cx="17" cy="8" r="2.5"></circle><path d="M3.5 18c1.5-3 3.5-4.5 6-4.5S14 15 15.5 18"></path><path d="M12 18c1-2.2 2.7-3.5 5-3.5"></path></svg>]
]

function App() {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="logo" href="#top">
            <img src="./assets/akcent_logo_PNG.png" alt="АКЦЕНТ" />
          </a>

          <nav className="nav">
            {navItems.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <div className="header-side">
            <div className="contact-meta">
              <div className="line-top">+7 (499) 113-40-28</div>
              <div className="messengers">
                <a className="msg-icon" href="#" aria-label="WhatsApp">WA</a>
                <a className="msg-icon" href="#" aria-label="MAX">MAX</a>
                <a className="msg-icon" href="#" aria-label="Telegram">TG</a>
              </div>
              <div className="line-small">Sales_service@acvl.ru</div>
              <div className="line-small">Работаем по всей России</div>
            </div>
            <a className="btn btn-primary" href="#contact">Получить аудит</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-eyebrow">
              <div className="eyebrow">ГК Акцент – развиваем ИТ инфраструктуру с 2008 года</div>
            </div>

            <div className="hero-main">
              <div className="hero-copy">
                <h1>ИТ-инфраструктура, которая работает стабильно — без простоев, хаоса и зависимости от людей</h1>
                <p className="lead">ГК Акцент - берём на себя всю ИТ-инфраструктуру — с SLA, 24/7 контролем, полной ответственностью за стабильную работу всех сервисов и командой, которая умеет работать с критичной инфраструктурой</p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#contact">Запросить коммерческое предложение</a>
                  <a className="btn btn-secondary" href="#cases">Посмотреть кейсы</a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="visual-main">
                  <div className="team-shot"><img src="./assets/O03A7804.jpg" alt="Команда ГК Акцент" /></div>
                </div>
              </div>
            </div>

            <div className="metrics" id="trust">
              {heroMetrics.map(([value, label]) => (
                <div className="metric" key={label}><b>{value}</b><span>{label}</span></div>
              ))}
            </div>
          </div>

          <div className="container quick-audit">
            <div className="audit-shell">
              <div className="audit-copy">
                <h2>Быстрый вход в проект: аудит текущего контура и сервисная модель под вашу ИТ-среду</h2>
                <p>Разберём текущую архитектуру, ключевые риски, точки отказа, критичные сервисы и подготовим предложение с составом услуг, SLA, этапами подключения и зоной ответственности.</p>
                <div className="audit-points">
                  <span>Работаем по всей России</span>
                  <span>B2B-клиенты</span>
                  <span>ИТ-аутсорсинг / 1С / сети / серверы</span>
                </div>
              </div>
              <form className="mini-form">
                <div className="mini-form-grid">
                  <input type="text" placeholder="Имя" />
                  <input type="tel" placeholder="Телефон" />
                  <input className="full" type="email" placeholder="E-mail" />
                  <select className="full" defaultValue="Интересующая услуга">
                    <option>Интересующая услуга</option>
                    <option>ИТ-аутсорсинг</option>
                    <option>1С</option>
                    <option>ИТ-аудит</option>
                    <option>Сети и серверы</option>
                  </select>
                  <div className="full"><button className="btn btn-primary" type="button">Получить аудит и КП</button></div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="section-head">
              <h2>Что мы закрываем в рамках одного ИТ-подрядчика</h2>
              <p>Услуги можно подключить отдельно или собрать в единый договор сопровождения. Это позволит сократить кол-во цепочек между разным подрядчиками</p>
            </div>

            <div className="grid-3">
              {services.map((item) => (
                <article className="card service" key={item.title}>
                  <div className="icon">{item.icon}</div>
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="service-visual">{item.visual}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <h2>Аутсорсинг вместо зависимости от одного системного администратора</h2>
              <p>Клиент получает не присутствие человека в офисе, а сервис с резервированием ролей, распределённой экспертизой и прозрачной управляемостью.</p>
            </div>
            <div className="enterprise-band">
              <div className="band-grid">
                <div className="band-side">
                  <h3>Штатный администратор</h3>
                  <ul className="clean">
                    <li>Отпуск, больничный, увольнение и человеческий фактор напрямую влияют на доступность сервиса.</li>
                    <li>Ограниченный набор компетенций: сети, серверы, ИБ, 1С и телеком редко живут в одном сильном специалисте.</li>
                    <li>Сложно измерить скорость реакции, качество решений и реальную загрузку.</li>
                    <li>Рост инфраструктуры требует новых наймов и расширения ФОТ.</li>
                  </ul>
                </div>
                <div className="band-side good">
                  <h3>АКЦЕНТ как сервисный подрядчик</h3>
                  <ul className="clean">
                    <li>Команда инженеров с разной специализацией и резервированием ролей.</li>
                    <li>Единые каналы обращений, приоритизация, отчётность и регламентная работа.</li>
                    <li>Поддержка пользователей, серверов, сетей и прикладных систем в одной зоне ответственности.</li>
                    <li>Плановое развитие инфраструктуры, а не только реакция на инциденты.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section-alt">
          <div className="container">
            <div className="section-head">
              <h2>Как начинается долгосрочное сотрудничество</h2>
              <p>Сотрудничество начинается не с оплаты, а с диагностики контекста бизнеса, риска и состава ИТ инфраструктуры. Аудит текущих сервисов – залог успешного сопровождения с первых дней</p>
            </div>

            <div className="process">
              {processSteps.map((item) => (
                <div className="step" key={item.title}>
                  <div className="step-num">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="step-visual">{item.visual}</div>
                </div>
              ))}
            </div>

            <div className="scope-wrap">
              <div className="scope-head">
                <h3>Что входит в услугу «ИТ аутсорсинг»</h3>
                <p>Полный контроль ИТ-инфраструктуры: от рабочих мест до серверов, с понятной зоной ответственности и предсказуемым результатом.</p>
              </div>

              <div className="grid-3">
                {scopeCards.map((card) => (
                  <article className="card scope-card" key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <ul>
                      {card.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cases">
          <div className="container">
            <div className="section-head">
              <h2>Кейсы, которые снимают главный вопрос: «вы уже решали похожие задачи?»</h2>
              <p>Мы не просто обещаем, мы показываем уровень нашей экспертизы и гарантируем результат клиентам</p>
            </div>

            <div className="case">
              <div className="case-main">
                <span className="tag">Производственная компания Зетта</span>
                <h3>Модернизация ИТ инфраструктуры производственной компании</h3>
                <p className="text-muted">Производственная компания с филиальной структурой, устаревшей локальной инфраструктурой и высокой критичностью 1С и ERP для основного контура бизнеса.</p>
                <div className="task-list">
                  <div><strong>Задача 1.</strong> Обеспечить стабильную работу 1С и ERP-системы.</div>
                  <div><strong>Задача 2.</strong> Организовать безопасный доступ для удалённых сотрудников и подрядчиков.</div>
                  <div><strong>Задача 3.</strong> Минимизировать риски потери данных и простоев производства.</div>
                  <div><strong>Задача 4.</strong> Подготовить ИТ к масштабированию бизнеса.</div>
                </div>
              </div>

              <div className="case-side">
                <div className="card">
                  <h3>Что было сделано</h3>
                  <div className="result-list">
                    <div>Перенос ключевых систем в отказоустойчивую среду: ЦОД + виртуализация.</div>
                    <div>Настройка защищенного удалённого доступа: VPN + RDP.</div>
                    <div>Внедрение системы резервного копирования и политики DR.</div>
                    <div>Оптимизация серверной инфраструктуры и нагрузок: 1С, SQL, файловые сервисы.</div>
                  </div>
                </div>
                <div className="card">
                  <h3>Результат</h3>
                  <div className="result-list">
                    <div>Бесперебойная работа ERP и 1С без критических сбоев.</div>
                    <div>Безопасный удалённый доступ для сотрудников и подрядчиков.</div>
                    <div>Снижение простоев производства из-за ИТ проблем.</div>
                    <div>Инфраструктура готова к росту нагрузки и расширению бизнеса.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="trust-stats" className="section-alt">
          <div className="container">
            <div className="section-head">
              <h2>ГК «Акцент» в цифрах</h2>
              <p>Масштаб компании в цифрах. Опыт и насмотренность, подтверждённая годами</p>
            </div>

            <div className="stats-band">
              {stats.map(([value, label]) => (
                <div className="stat" key={label}><b>{value}</b><span>{label}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="team">
          <div className="container">
            <div className="section-head">
              <h2>За сервисом стоят реальные руководители и инженеры</h2>
              <p>Показываем управленческий и технический контур: кто принимает решения, кто обеспечивает устойчивость поддержки и кто отвечает за глубокую экспертизу</p>
            </div>

            <div className="team-grid">
              {team.map(([image, name, role, text]) => (
                <article className="person" key={name}>
                  <img src={`./assets/${image}`} alt={name} />
                  <div className="person-body">
                    <h3>{name}</h3>
                    <div className="role">{role}</div>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tariffs" className="section-alt">
          <div className="container">
            <div className="section-head">
              <h2>Тарифы и формат подключения</h2>
              <p>Подбираем модель сопровождения под структуру бизнеса, количество пользователей, критичность сервисов и состав инфраструктуры.</p>
            </div>

            <div className="tariffs">
              {tariffs.map(([title, price, items]) => (
                <div className="tariff" key={title}>
                  <h3>{title}</h3>
                  <div className="price">{price}</div>
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="container">
            <div className="section-head">
              <h2>Отзывы и рекомендации</h2>
              <p>Благодарность реальных клиентов – лучший показатель эффективности компании</p>
            </div>
            <div className="reviews">
              {reviews.map(([title, quote, footer, icon]) => (
                <div className="review" key={title}>
                  <div className="review-badge">
                    <div className="icon">{icon}</div>
                    <strong>{title}</strong>
                  </div>
                  <blockquote><p>{quote}</p></blockquote>
                  <footer>{footer}</footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container" id="contact">
          <div className="cta">
            <div>
              <h2>Получите аудит текущей ИТ-инфраструктуры и сервисную модель под ваш бизнес</h2>
              <p>Разберём текущие узкие места, точки отказа, потребности по SLA и подготовим понятное предложение: состав услуг, формат подключения, сроки и зону ответственности.</p>
              <div className="trust-line">
                <span>Работаем по всей России</span>
                <span>B2B-клиенты</span>
                <span>ИТ-аутсорсинг / 1С / сети / серверы</span>
              </div>
            </div>
            <form className="form">
              <div className="form-grid">
                <input type="text" placeholder="Имя" />
                <input type="tel" placeholder="Телефон" />
                <input type="email" placeholder="E-mail" />
                <select defaultValue="Интересующая услуга">
                  <option>Интересующая услуга</option>
                  <option>ИТ-аутсорсинг</option>
                  <option>1С</option>
                  <option>ИТ-аудит</option>
                  <option>Сети и серверы</option>
                </select>
                <textarea placeholder="Кратко опишите задачу: сколько пользователей, какие сервисы критичны, что не устраивает в текущем подрядчике или внутренней поддержке"></textarea>
              </div>
              <button className="btn btn-primary" type="button">Получить предложение</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-logo">
            <img src="./assets/akcent_logo_PNG.png" alt="АКЦЕНТ" />
            <p>ИТ-аутсорсинг, 1С, сети, серверы и инженерная инфраструктура для бизнеса по всей России.</p>
            <div className="small">ООО «Акцент» • ИНН 2539090720</div>
          </div>
          <div>
            <h3>Контакты</h3>
            <p>+7 (499) 113-40-28<br />Sales_service@acvl.ru<br />Работаем по всей России</p>
          </div>
          <div>
            <h3>Навигация</h3>
            <p><a href="#services">Услуги</a><br /><a href="#cases">Кейсы</a><br /><a href="#team">Команда</a><br /><a href="#contact">Оставить заявку</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
