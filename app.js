/* ===================================
   결 (Gyeol) Single-Page Program Book — App Logic
   =================================== */

// ==========================================
// Program & Performer Data
// ==========================================
const programData = [
  {
    id: 1,
    title: '태평가',
    composer: '조은혜',
    description: '이 작품은 신민요 「태평가」를 바탕으로 새롭게 편곡한 곡입니다. 태평가는 일제강점기라는 암울한 시대 속에서도 삶을 향한 낙관과 여유를 잃지 않았던 노래입니다. 저는 이 곡에 담긴 \'힘들지만 끝내 웃음을 놓지 않는 마음\'에 주목했습니다. 현실의 무게는 결코 가볍지 않았지만 사람들은 노래를 통해 서로를 위로하며 하루를 견뎌냈습니다. 이러한 모습은 치열한 일상 속에서도 묵묵히 자신의 삶을 살아가는 오늘날의 우리와도 닮아 있습니다. 시대는 달라졌지만 힘든 하루 끝에 다시 웃음을 찾아가는 마음만은 변하지 않았습니다. 이 곡이 시대를 넘어 이어지는 작은 위로와 공감의 노래로 전해지기를 바랍니다.',
    performers: [
      { name: '조은혜', role: '작곡' },
      { name: '김하진', role: '건반' },
      { name: '강준규', role: '기타' },
      { name: '조민식', role: '베이스' },
      { name: '김이삭', role: '드럼' },
      { name: '양수인', role: '보컬' },
      { name: '신동준', role: '색소폰' },
      { name: '김범수', role: '피리·태평소' },
    ]
  },
  {
    id: 2,
    title: '심중전',
    composer: '임한은',
    description: '본 곡 「심중전(心中戰)」은 한 사람의 내면에서 일어나는 갈등을 서사적 가사와 리듬 구조의 변화를 통해 표현한 작품입니다. 장르는 퓨전 재즈 기반의 크로스오버 형태로, 전통 장단의 요소와 현대적인 리듬 언어를 결합하였습니다.',
    performers: [
      { name: '임한은', role: '작곡' },
      { name: '김민준(건반)', role: '건반' },
      { name: '김동욱', role: '기타' },
      { name: '안재영', role: '베이스' },
      { name: '계백', role: '드럼' },
      { name: '김서연', role: '보컬' },
      { name: '천혜원', role: '가야금' },
      { name: '박다혜', role: '대금' },
    ]
  },
  {
    id: 3,
    title: '고성오광대',
    composer: '장예린',
    description: '경상남도 고성에서 전승되어 온 ‘고성오광대’에는 서민을 대변하는 말뚝이, 권세를 앞세운 양반, 그리고 조상의 업으로 문둥병을 앓게 된 문둥이가 등장합니다. 오늘날은 계급이 없고, 평등한 세상이라 말하지만, 여전히 기득권층은 존재하는 세상이라 생각합니다. 그러나 오늘 고성오광대 놀이를 통해, 말뚝이가 전하는 메세지는 오늘날 이 세상을 바꿀 힘이 있다고 생각합니다. 경계가 무너지는 순간, 함께 하시기 바랍니다.',
    performers: [
      { name: '장예린', role: '작곡·건반' },
      { name: '이창현', role: '건반' },
      { name: '정하민', role: '기타' },
      { name: '이주영', role: '베이스' },
      { name: '신동준', role: '색소폰' },
      { name: '양지성', role: '드럼' },
      { name: '정윤탁', role: '판소리' },
      { name: '김범수', role: '피리' },
      { name: '윤태현', role: '태평소' },
      { name: '박다혜', role: '대금' },
      { name: '정서희', role: '해금' },
      { name: '김민준(타악)', role: '사물' },
      { name: '박율이', role: '사물' },
      { name: '김정환', role: '사물' },
      { name: '김규희', role: '사물' },
      { name: '고은채', role: '무용' },
      { name: '서로다', role: '무용' },
      { name: '김수아', role: '무용' },
      { name: '이수인', role: '무용' },
      { name: '고예은', role: '무용' },
    ]
  },
  {
    id: 4,
    title: '수양대군 · 현덕왕후 · 마침표의 또 다른 이름은',
    composer: '김현겸',
    description: '• 몽중나락<br>1악장 : 수양대군 / 2악장 : 현덕왕후<br>수양대군이 계유정난을 통한 찬탈로 최고의 자리에 올랐으나, 꿈속에서 마주한 현덕왕후로 인한 악몽으로 결국 지옥(나락)을 맛보는 수양대군의 내면 심리를 음악적으로 표현한 곡입니다.<br><br>• 마침표의 또 다른 의미는<br>한 학기의 마무리와 곧 졸업을 앞둔 이들, 그리고 또다시 이별을 앞둔 모든 이들을 위하여, 마침표는 끝이 아닌 새로운 시작이라는 의미를 담아 제작한 곡입니다.',
    performers: [
      { name: '김현겸', role: '작곡·피아노' },
      { name: '김솔', role: '보컬' },
      { name: '이대호', role: '보컬' },
      { name: '허강석', role: '보컬' },
      { name: '김나연', role: '보컬' },
      { name: '조나림', role: '보컬' },
      { name: '김민종', role: '기타' },
      { name: '김현택', role: '기타' },
      { name: '조준우', role: '베이스' },
      { name: '주현우', role: '드럼' },
      { name: '백준오', role: '피아노' },
      { name: '최기준', role: '트럼펫' },
      { name: '조용성', role: '하모니카' },
      { name: '김시언', role: '경기민요' },
      { name: '임근희', role: '판소리' },
      { name: '송예인', role: '대금' },
      { name: '홍유경', role: '가야금' },
      { name: '김하랑', role: '피리' },
      { name: '이윤서', role: '해금' },
      { name: '장순우', role: '공' },
      { name: '서연우', role: '베이스드럼' },
      { name: '유예진', role: '장구' },
    ]
  },
  {
    id: 5,
    title: '처용가',
    composer: '고우현',
    description: '신라 향가 처용가의 ‘처용 아라비아인 설’과, 신라를 ‘황금의 땅 바실라’로 서술한 페르시아 서사시 ‘쿠쉬나메’를 바탕으로 처용을 영웅왕 페레이둔의 후예로 재해석한 곡입니다. 아라비아 선율과 현대적 사운드, 고대국어 발음을 재구한 가사와 낭송을 통해 역병의 신에게 아내를 잃은 처용의 분노와 위엄을 그리며, ‘관용은 힘 위에서 성립된다’는 주제를 형상화하였습니다.',
    performers: [
      { name: '고우현', role: '작곡·보컬' },
      { name: '김민지', role: '건반' },
      { name: '홍세영', role: '기타' },
      { name: '안보은', role: '베이스' },
      { name: '이시영', role: '드럼' },
      { name: '박효은', role: '보컬' },
      { name: '고은채', role: '무용' },
      { name: '나현지', role: '가야금' },
      { name: '박소현', role: '아쟁' },
      { name: '이연화', role: '아쟁' },
      { name: '김하랑', role: '피리·태평소' },
      { name: '송예인', role: '대금' },
      { name: '백인이', role: '해금' },
      { name: '김규희', role: '북·꽹과리' },
      { name: '박율이', role: '베이스드럼' },
      { name: '김민준(타악)', role: '장구' },
    ]
  },
  {
    id: 6,
    title: 'Whimori',
    composer: '이주하',
    description: '본 곡 휘모리(Whimori)는 한국 전통 장단 중 가장 빠르고 휘몰아치는 뜻을 표하는 장단이며, ‘휘모리장단’과 전자음악장르의 ‘저지클럽’ 리듬을 기반으로 국악의 ‘점고가락, 인사굿, 휘모리, 동살풀이, 자진모리, 별달거리, 영산 다드래기 맺음’과 정악곡 중 하나인 ‘취타’를 차용 및 변형하여 국악관현악과 밴드 사운드가 현대적인 무용음악으로 연출한 곡입니다.',
    performers: [
      { name: '이주하', role: '작곡' },
      { name: '허지우', role: '건반' },
      { name: '서보성', role: '기타' },
      { name: '현재현', role: '기타' },
      { name: '정주원', role: '베이스' },
      { name: '설완', role: '드럼' },
      { name: '홍채영', role: '보컬' },
      { name: '서연우', role: '모듬북' },
      { name: '홍유경', role: '가야금' },
      { name: '김범수', role: '피리' },
      { name: '윤태현', role: '태평소' },
      { name: '송예인', role: '대금' },
      { name: '김보라', role: '해금' },
      { name: '박율이', role: '장구' },
      { name: '김민준(타악)', role: '꽹과리' },
      { name: '장순우', role: '공·베이스드럼' },
      { name: '김서연', role: '판소리' },
      { name: '임근희', role: '판소리' },
      { name: '고은채', role: '무용' },
      { name: '서로다', role: '무용' },
      { name: '김수아', role: '무용' },
      { name: '이수인', role: '무용' },
      { name: '고예은', role: '무용' },
    ]
  },
  {
    id: 7,
    title: '끝서리',
    composer: '이채원',
    description: '일제강점기 시대를 배경으로 겉으로는 평화롭고 아름다운 풍경 속에 숨겨진 민족의 아픔과 저항의 감정을 담은 크로스오버 밴드곡입니다. 전통 장단과 현대 밴드의 사운드를 결합하여 시대적 비극과 희망을 동시에 표현한 곡입니다.',
    performers: [
      { name: '이채원', role: '작곡' },
      { name: '김호정', role: '건반' },
      { name: '김민종', role: '기타' },
      { name: '최윤석', role: '베이스' },
      { name: '김민혁', role: '드럼' },
      { name: '강소이', role: '보컬' },
      { name: '김은혜', role: '코러스' },
      { name: '정윤탁', role: '코러스' },
      { name: '김하랑', role: '피리·태평소' },
      { name: '박다혜', role: '대금' },
      { name: '유예진', role: '장구·종·징' },
    ]
  },
  {
    id: 8,
    title: '나의 바람',
    composer: '김호정',
    description: '이별하거나 닿을 수 없는 존재를 향해 운명에 순응하지 않고 끝까지 붙잡으려는 화자의 의지를 담은 사극 발라드 풍의 곡입니다. 자연물을 통해 감정을 투영하며 전통적인 정서인 한을 현대적인 사운드로 풀어냈습니다. 특유의 한과 서정적인 정서는 한국적인 감정을 가장 깊이 있게 전달할 수 있는 요소라고 생각합니다. 운명에 저항하고 사랑을 붙잡는 서사를 담고자 하였습니다.',
    performers: [
      { name: '김호정', role: '작곡·건반' },
      { name: '김민종', role: '기타' },
      { name: '최윤석', role: '베이스' },
      { name: '김민혁', role: '드럼' },
      { name: '김은혜', role: '보컬' },
      { name: '김하랑', role: '태평소' },
      { name: '홍유경', role: '가야금' },
      { name: '윤태경', role: '대금' },
      { name: '백인이', role: '해금' },
      { name: '유예진', role: '장구·꽹과리' },
    ]
  }
];

const songOrder = [
  '태평가',
  '나의 바람',
  '끝서리',
  '심중전',
  '수양대군 · 현덕왕후 · 마침표의 또 다른 이름은',
  'Whimori',
  '처용가',
  '고성오광대'
];

const staffData = [
  {
    role: '기획',
    members: [
      { name: '이유진', role: '기획' },
      { name: '이시헌', role: '기획' },
      { name: '이종은', role: '기획' },
    ]
  },
  {
    role: '디자인',
    members: [
      { name: '오준', role: '디자인' },
      { name: '우태은', role: '디자인' },
    ]
  },
  {
    role: '사진',
    members: [
      { name: '서재은', role: '사진' },
      { name: '손예지', role: '사진' },
    ]
  },
  {
    role: '무대',
    members: [
      { name: '이소은', role: '무대감독' },
      { name: '유서윤', role: '무대조감독' },
    ]
  },
  {
    role: '음향',
    members: [
      { name: '박윤재', role: '음향감독' },
    ]
  },
  {
    role: '홍보영상',
    members: [
      { name: '김건희', role: '홍보영상' },
      { name: '김민정', role: '홍보영상' },
      { name: '김상훈', role: '홍보영상' },
      { name: '김유민', role: '홍보영상' },
      { name: '박주하', role: '홍보영상' },
      { name: '정기백', role: '홍보영상' },
    ]
  }
];

// ==========================================
// Component Rendering
// ==========================================

// Render 8 Teams Accordion (Text-Only Name Lists)
function renderAccordion() {
  const container = document.getElementById('programAccordion');
  if (!container) return;

  container.innerHTML = '';

  const sortedSongs = [...programData].sort((a, b) => {
    return songOrder.indexOf(a.title) - songOrder.indexOf(b.title);
  });

  sortedSongs.forEach((song, idx) => {
    const songIndex = String(idx + 1).padStart(2, '0');
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    // Group performers by their role
    const groupedPerformers = {};
    song.performers.forEach(p => {
      const cleanRole = p.role.replace(/·/g, '·');
      if (!groupedPerformers[cleanRole]) {
        groupedPerformers[cleanRole] = [];
      }
      groupedPerformers[cleanRole].push(p.name.replace(/\(.*?\)/g, ''));
    });

    // Generate HTML rows for roles and performer names
    const performerRowsHtml = Object.entries(groupedPerformers).map(([role, names]) => {
      const namesText = names.join(', ');
      return `
        <div class="performer-row">
          <div class="performer-row-role">${role}</div>
          <div class="performer-row-names">${namesText}</div>
        </div>
      `;
    }).join('');

    accordionItem.innerHTML = `
      <div class="accordion-header">
        <div class="accordion-header-left">
          <span class="accordion-index">${songIndex}</span>
          <h3 class="accordion-song-title">${song.title}</h3>
          <span class="accordion-composer">작곡 ${song.composer}</span>
        </div>
        <div class="accordion-icon">
          <svg viewBox="0 0 24 24">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
          </svg>
        </div>
      </div>
      <div class="accordion-content">
        <div class="accordion-inner">
          <div class="accordion-body">
            <div class="song-desc">${song.description}</div>
            <div class="performer-list-text">
              ${performerRowsHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    accordionItem.querySelector('.accordion-header').addEventListener('click', () => {
      const isActive = accordionItem.classList.contains('active');
      
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        accordionItem.classList.add('active');
        setTimeout(() => {
          accordionItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
      }
    });

    container.appendChild(accordionItem);
  });
}

// Render Credits
function renderCredits() {
  const container = document.getElementById('creditsGrid');
  if (!container) return;

  container.innerHTML = '';

  staffData.forEach(group => {
    const groupCard = document.createElement('div');
    groupCard.className = 'credits-group';

    let sortedMembers = [...group.members];
    if (group.role === '기획') {
      const planningOrder = ['이유진', '이시헌', '이종은'];
      sortedMembers.sort((a, b) => planningOrder.indexOf(a.name) - planningOrder.indexOf(b.name));
    } else if (group.role === '무대') {
      const stageOrder = ['무대감독', '무대조감독'];
      sortedMembers.sort((a, b) => stageOrder.indexOf(a.role) - stageOrder.indexOf(b.role));
    } else {
      sortedMembers.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    }

    const membersText = sortedMembers.map(m => m.name).join(', ');

    groupCard.innerHTML = `
      <div class="credits-role">${group.role}</div>
      <div class="credits-members">
        ${membersText}
      </div>
    `;

    container.appendChild(groupCard);
  });
}

// ==========================================
// Initialization & Listeners
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderAccordion();
  renderCredits();

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.clientHeight;
      if (window.scrollY >= secTop - 200) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  });
  reveals.forEach(el => revealObserver.observe(el));
});
