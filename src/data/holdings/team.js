// src/data/team.js

const teamImages = import.meta.glob('@assets/holdings/team/*.{jpg,jpeg,png}', { eager: true });

const img = (filename) => {
  const match = Object.entries(teamImages).find(([path]) => path.endsWith(`/${filename}`));
  return match ? match[1].default : '';
};

export const team = [
  {
    name: 'Mr HP Chauke',
    role: 'Executive Chairman',
    image: img('patrick.jpg'),
    bio: 'Patrick Chauke brings over four decades of distinguished experience in politics, policy development, and business leadership. He began his parliamentary career as a Whip in the National Assembly in 1994 and chaired high-profile committees including Home Affairs and the Standing Committee on Public Accounts. He served as MEC for Sports and Recreation in the North West Province and has held executive roles in mining and agriculture.',
  },
  {
    name: 'Mr Jason Ngobeni',
    role: 'CEO',
    image: img('jason.jpg'),
    bio: 'Jason Ngobeni is a seasoned business and financial consultant with over 25 years of experience in public finance, risk management, infrastructure development, and economic transformation. An MBA graduate from the University of Pretoria, he has served as City Manager of Tshwane and City Treasurer of Johannesburg. Since 2016, he has advised on high-impact municipal and economic development projects.',
  },
  {
    name: 'Mr Bongani Mahlori',
    role: 'CFO',
    image: img('bongani.jpg'),
    bio: 'Bongani Mahlori is a Chartered Accountant with over 15 years of experience across Property, Retail, Finance, and Technology. He specialises in securing property funding, structuring smart city PPPs, leading mergers and acquisitions, and navigating complex development finance frameworks. He leads LawFin Consulting, a global finance and legal advisory firm.',
  },
  {
    name: 'Mr Vusumuzi Riba',
    role: 'Corporate Finance & Infrastructure Advisory',
    image: img('vusi.jpg'),
    bio: 'Vusumuzi Riba is a highly experienced corporate finance and investment banking executive with more than two decades of expertise in M&A, capital raising, BEE transactions, and infrastructure advisory across Africa. He has held senior leadership positions at Standard Bank, PwC, Absa, and Nedbank, advising on landmark transactions for MTN Group, Telkom, Old Mutual, and others.',
  },
  {
    name: 'Ms Phumzile Phala',
    role: 'General Manager',
    image: img('phumzile.jpg'),
    bio: 'Phumzile Phala is an admitted Attorney, Notary, and Conveyancer with over 25 years of post-admission experience. She holds BA and LLB degrees from UCT and served as Chairperson of the Valuation Appeals Board for eight years. She possesses extensive expertise in corporate and commercial law, property law, and property developments.',
  },
  {
    name: 'Ms Ntsako Maringa',
    role: 'Business Analyst',
    image: img('ntsako.jpg'),
    bio: 'Ntsako Maringa is a skilled Business Analyst specializing in analyzing and evaluating business processes, systems, and strategies to drive efficiency and improvement. With expertise in data analysis, problem-solving, and stakeholder engagement, Ntsako bridges the gap between business operations and IT solutions.',
  },
  {
    name: 'Mr Lulama Qqawa',
    role: 'Development Planner',
    image: img('lulama.jpg'),
    bio: 'Lulama Qqawa is an experienced Development Planner with a strong background in housing development, urban planning, and property management. He holds a Master of Philosophy in Housing Development and Management from UCT. As CEO of Uluvu Social Housing Institution, he manages a project pipeline of over 1,500 units valued at R700 million.',
  },
  {
    name: 'Mr Bunmi Ilori',
    role: 'Architect',
    image: img('bunmi.jpg'),
    bio: 'Bunmi Ilori trained at the Birmingham School of Architecture (1979–1986) and worked with leading firms in London, Chicago, and Botswana. He is now Managing Director of IDC Architects, based in South Africa with continental interest.',
  },
  {
    name: 'Mr Meselele (Ruby) Ramatsui',
    role: 'Executive: Nuclear & Energy',
    image: img('meselele.jpg'),
    bio: 'Meselele Ramatsui is a highly accomplished executive with over 20 years of experience in the nuclear sector. He holds an MBA from UNISA SBL, a Postgraduate Certificate in Project Management from the University of Wales, and PRINCE2 Practitioner certifications. His core competencies include executive leadership, strategic planning, and turnaround execution.',
  },
  {
    name: 'Mr Paul Ntshabele',
    role: 'Agriculture & Rural Development',
    image: img('paul.jpg'),
    bio: 'Paul Ntshabele is the founder and Executive Director of PSJ Group, a diversified agricultural holdings company. He holds exclusive rights to Sakata Seed Corporation\'s genetics in specific markets across South Africa. He co-founded the Land Rehabilitation Company and spearheads the One Million Hectare Integrated Food Production Initiative.',
  },
  {
    name: 'Ms Sibongile Marokana',
    role: 'Security Expert',
    image: img('sibongile.jpg'),
    bio: 'Sibongile Marokana is a seasoned Security Expert with 10 years of experience. As founder and head of Lerumo Lasechaba Security, she specializes in VIP protection, event security, property guarding, CCTV surveillance, and cybersecurity, with a strong focus on high-risk environments within sports, education, and financial sectors.',
  },
  {
    name: 'Ms Kim Rossouw',
    role: 'Stakeholder Engagement',
    image: img('kim.jpg'),
    bio: 'Kim Rossouw is a seasoned administrative and stakeholder engagement professional with over 24 years of experience in senior-level government administration and private sector collaboration. She is known for her professionalism, discretion, and strong leadership capabilities in governance, operational coordination, and relationship management.',
  },
];