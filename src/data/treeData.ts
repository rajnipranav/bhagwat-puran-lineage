// Complete Srimad-Bhagavatam Family Tree Data
// Based on the reference image and SB text

export type NodeType = 'divine' | 'sage' | 'kuru' | 'yadu' | 'solar' | 'manu' | 'other';

export interface TreeNode {
  id: string;
  label: string;
  role: string;
  type: NodeType;
  desc: string;
  ref: string;
  x?: number;
  y?: number;
}

export interface TreeEdge {
  from: string;
  to: string;
}

export const typeColors: Record<NodeType, {
  fill: string;
  stroke: string;
  text: string;
  sub: string;
  avbg: string;
  avtxt: string;
  tag: string;
  tagbg: string;
  tagcol: string;
}> = {
  divine: {
    fill: '#FFF3E0', stroke: '#E8820A', text: '#7B2D00', sub: '#A0612A',
    avbg: '#FFAB40', avtxt: '#7B2D00', tag: 'Celestial / Avatāra',
    tagbg: '#FFF3E0', tagcol: '#7B2D00'
  },
  sage: {
    fill: '#F3E5F5', stroke: '#7B1FA2', text: '#4A0072', sub: '#7B1FA2',
    avbg: '#CE93D8', avtxt: '#4A0072', tag: 'Ṛṣi / Sage',
    tagbg: '#F3E5F5', tagcol: '#4A0072'
  },
  kuru: {
    fill: '#E8F5E9', stroke: '#2E7D32', text: '#1B4D1F', sub: '#388E3C',
    avbg: '#81C784', avtxt: '#1B4D1F', tag: 'Kuru lineage',
    tagbg: '#E8F5E9', tagcol: '#1B4D1F'
  },
  yadu: {
    fill: '#FDF0F4', stroke: '#C2185B', text: '#7B0039', sub: '#C2185B',
    avbg: '#F48FB1', avtxt: '#7B0039', tag: 'Yadu lineage',
    tagbg: '#FDF0F4', tagcol: '#7B0039'
  },
  solar: {
    fill: '#E1F5FE', stroke: '#0277BD', text: '#013E5F', sub: '#0277BD',
    avbg: '#4FC3F7', avtxt: '#013E5F', tag: 'Solar / Ikṣvāku',
    tagbg: '#E1F5FE', tagcol: '#013E5F'
  },
  manu: {
    fill: '#FFF8E1', stroke: '#F9A825', text: '#7A5700', sub: '#F9A825',
    avbg: '#FFD54F', avtxt: '#7A5700', tag: 'Manu / Progenitor',
    tagbg: '#FFF8E1', tagcol: '#7A5700'
  },
  other: {
    fill: '#FAF3E0', stroke: '#A1887F', text: '#4E342E', sub: '#795548',
    avbg: '#BCAAA4', avtxt: '#4E342E', tag: 'Other lineage',
    tagbg: '#FAF3E0', tagcol: '#4E342E'
  }
};

export const edgeColors: Record<NodeType, string> = {
  divine: '#FFAB40', sage: '#CE93D8', kuru: '#81C784',
  yadu: '#F48FB1', solar: '#81D4FA', manu: '#FFE082', other: '#BCAAA4'
};

// Complete node data from the reference image
export const nodes: TreeNode[] = [
  // Supreme - Top
  { id: 'krishna', label: 'Kṛṣṇa', role: 'The Supreme Personality of Godhead', type: 'divine',
    desc: 'The Supreme Personality of Godhead, the source of all incarnations. The Bhāgavatam is His story.', ref: 'SB 1.1' },
  { id: 'brahma', label: 'Lord Brahmā', role: 'Supreme Creator', type: 'divine',
    desc: 'Born from the lotus navel of Garbhodakaśāyī Viṣṇu. First created being, progenitor of all demigods, sages, Manus and progenitors of the universe.', ref: 'SB 3.8–3.12' },
  
  // Svāyambhuva Manu and family
  { id: 'svayam', label: 'Svāyambhuva Manu', role: 'First Manu', type: 'manu',
    desc: 'The first Manu, born with Śatarūpā directly from Brahmā. Progenitor of humanity. His five children founded all the major royal dynasties of the universe.', ref: 'SB 3.12–3.22' },
  { id: 'priya', label: 'Priyavrata', role: 'World Emperor', type: 'manu',
    desc: 'Son of Svāyambhuva Manu. Ruled the entire universe. His chariot wheels created the seven oceans dividing the seven continents (dvīpas). Had 13 sons and 1 daughter.', ref: 'SB 5.1' },
  { id: 'uttana', label: 'Uttānapāda', role: 'King', type: 'manu',
    desc: 'Son of Svāyambhuva Manu, father of Dhruva Mahārāja. His queens were Sunīti (devoted) and Suruci (proud).', ref: 'SB 4.8' },
  { id: 'akuti', label: 'Ākūti', role: 'Daughter of Manu', type: 'manu',
    desc: 'Daughter of Svāyambhuva Manu. Married Ruci. Mother of Yajña (a Viṣṇu avatāra) and Dakṣiṇā.', ref: 'SB 4.1' },
  { id: 'prasuti', label: 'Prasūti', role: 'Daughter of Manu', type: 'manu',
    desc: 'Daughter of Svāyambhuva Manu, wife of Dakṣa Prajāpati. Mother of 24 daughters including Satī (wife of Lord Śiva) and Aditi.', ref: 'SB 4.1' },
  { id: 'devahuti', label: 'Devahūti', role: 'Daughter of Manu', type: 'manu',
    desc: 'Daughter of Svāyambhuva Manu, wife of Kardama Muni. Mother of Lord Kapila (Viṣṇu avatāra) who taught her the Sāṅkhya philosophy (SB Canto 3).', ref: 'SB 3.22–3.33' },
  
  // Saptarṣis - Sons of Brahmā
  { id: 'marici', label: 'Marīci', role: 'Saptarṣi / Prajāpati', type: 'sage',
    desc: 'Son of Brahmā, chief of the Prajāpatis and one of the Saptarṣis. Father of Kaśyapa who fathered all living beings.', ref: 'SB 3.12' },
  { id: 'atri', label: 'Atri', role: 'Saptarṣi', type: 'sage',
    desc: 'Son of Brahmā, Saptarṣi. Father of Soma (moon god), Dattātreya (Viṣṇu avatāra) and Durvāsā (Śiva avatāra).', ref: 'SB 3.12' },
  { id: 'angira', label: 'Aṅgirā', role: 'Saptarṣi', type: 'sage',
    desc: 'Son of Brahmā, one of the seven great sages. Progenitor of the Aṅgiras clan of priests and Vedic scholars. Father of Bṛhaspati (preceptor of the demigods).', ref: 'SB 3.12' },
  { id: 'pulastya', label: 'Pulastya', role: 'Saptarṣi / Prajāpati', type: 'sage',
    desc: 'Son of Brahmā, one of the seven great sages. Grandfather of Rāvaṇa through his son Viśravā. Also father of Kubera through Iḍaviḍā.', ref: 'SB 3.12' },
  { id: 'pulaha', label: 'Pulaha', role: 'Saptarṣi', type: 'sage',
    desc: 'Son of Brahmā, one of the seven great sages. Progenitor of several clans. Known for austerities on Gandhamādana mountain.', ref: 'SB 3.12' },
  { id: 'kratu', label: 'Kratu', role: 'Saptarṣi', type: 'sage',
    desc: 'Son of Brahmā, one of the seven great sages. Father of the 60,000 Vālakhilya sages who are the size of a thumb.', ref: 'SB 3.12' },
  { id: 'vasishtha', label: 'Vasiṣṭha', role: 'Saptarṣi / Rājakula-guru', type: 'sage',
    desc: 'Son of Brahmā, one of the seven great sages. Preceptor of the Solar dynasty (Ikṣvāku line). Guru of Lord Rāma. Author of the Yoga-Vasiṣṭha.', ref: 'SB 3.12, 9.6' },
  { id: 'bhrgu', label: 'Bhṛgu', role: 'Saptarṣi / Prajāpati', type: 'sage',
    desc: 'Son of Brahmā, one of the seven great sages. Progenitor of the Bhārgava clan. Tested Viṣṇu\'s supremacy by kicking His chest. Father of Śukrācārya (preceptor of demons) and Lakṣmī.', ref: 'SB 3.12, 10.89' },
  { id: 'daksha_b', label: 'Dakṣa', role: 'Prajāpati (son of Brahmā)', type: 'sage',
    desc: 'Son of Brahmā, one of the fourteen Prajāpatis. Father of 24 daughters, including Satī (wife of Śiva), Aditi, Diti, Danu and others. Held a great yajña excluding Lord Śiva, leading to Satī\'s death.', ref: 'SB 4.2–4.7' },
  
  // Second generation - key descendants
  { id: 'kashyapa', label: 'Kaśyapa', role: 'Father of all beings', type: 'sage',
    desc: 'Son of Marīci, the greatest Prajāpati. By his thirteen wives — Aditi, Diti, Danu, Kadrū, and others — he fathered all demigods, demons, nāgas, animals, birds and reptiles.', ref: 'SB 6.6' },
  { id: 'brhaspati', label: 'Bṛhaspati', role: 'Preceptor of demigods', type: 'sage',
    desc: 'Son of Aṅgirā, the preceptor (ācārya) of the demigods. His counsel guides Indra and the devas. The planet Jupiter is named for him.', ref: 'SB 6.7' },
  { id: 'shukra', label: 'Śukrācārya', role: 'Preceptor of demons', type: 'sage',
    desc: 'Son of Bhṛgu, the learned preceptor of the Asuras (demons). Possessed the mṛta-sañjīvanī vidyā (knowledge to revive the dead). Guru of Bali Mahārāja.', ref: 'SB 8.21' },
  
  // Kaśyapa's wives and children
  { id: 'aditi', label: 'Aditi', role: 'Mother of the gods', type: 'divine',
    desc: 'Daughter of Dakṣa, wife of Kaśyapa. Mother of the twelve Ādityas including Vivasvān. Performed austerities and received Lord Vāmana (Viṣṇu) as her son.', ref: 'SB 6.18, 8.17' },
  { id: 'diti', label: 'Diti', role: 'Mother of demons', type: 'divine',
    desc: 'Daughter of Dakṣa, wife of Kaśyapa. Mother of Hiraṇyakaśipu and Hiraṇyākṣa (both slain by Viṣṇu avatāras) and the forty-nine Maruts.', ref: 'SB 6.18' },
  { id: 'sati', label: 'Satī', role: 'Wife of Lord Śiva', type: 'divine',
    desc: 'Daughter of Dakṣa and Prasūti. Devoted wife of Lord Śiva. Left her body when her father publicly insulted Śiva at his yajña. Reborn as Pārvatī in the next life and reunited with Śiva.', ref: 'SB 4.2–4.4' },
  
  // From Aditi
  { id: 'vivasvan', label: 'Vivasvān (Sūrya)', role: 'Sun god', type: 'divine',
    desc: 'Son of Kaśyapa and Aditi, the sun god. Father of Vaivasvata Manu, Yama (god of death) and Yamunadevi (the river). Kṛṣṇa told Arjuna he had originally given the Gītā to Vivasvān.', ref: 'SB 6.6, BG 4.1' },
  { id: 'vaivasva', label: 'Vaivasvata Manu', role: 'Current (7th) Manu', type: 'manu',
    desc: 'The current (seventh) Manu of this age, son of Vivasvān. Also called Śrāddhadeva. His descendants founded the Ikṣvāku solar dynasty and, through Iḷā, the lunar dynasty.', ref: 'SB 8.13, 9.1' },
  
  // Solar Dynasty
  { id: 'ikshvaku', label: 'Ikṣvāku', role: 'Founder · Solar line', type: 'solar',
    desc: 'Son of Vaivasvata Manu, founder of the solar (Sūryavaṁśa) dynasty. Lord Rāma appeared in this lineage. First king to receive the Bhagavad-gītā knowledge from his father Vivasvān.', ref: 'SB 9.6, BG 4.1' },
  { id: 'nimi', label: 'Nimi', role: 'King · Janaka line', type: 'solar',
    desc: 'Son of Ikṣvāku. By churning (nimeṣa), Janaka was born from his body. Founded the Videha kingdom with capital Mithilā.', ref: 'SB 9.6' },
  { id: 'janaka', label: 'Janaka (Śīradhvaja)', role: 'King · Sītā\'s father', type: 'solar',
    desc: 'King of Mithilā, descendant of Nimi. Found Sītā while plowing the earth. Father of Sītādevī, wife of Lord Rāma. Known for his detachment and wisdom.', ref: 'SB 9.10' },
  { id: 'sita', label: 'Sītā Devī', role: 'Wife of Lord Rāma', type: 'divine',
    desc: 'The goddess of fortune, eternal consort of Lord Rāma. Daughter of King Janaka, found while he was plowing. The ideal of chastity and devotion.', ref: 'SB 9.10' },
  { id: 'sagara', label: 'Sagara', role: 'King · 60,000 sons', type: 'solar',
    desc: 'Descendant of Ikṣvāku. Had 60,000 sons who were burned to ashes by Kapila Muni\'s curse. His grandson Bhagīratha brought the Ganges to purify their ashes.', ref: 'SB 9.8' },
  { id: 'bhagiratha', label: 'Bhagīratha', role: 'Brought Gaṅgā to earth', type: 'solar',
    desc: 'Descendant of Sagara. Performed severe austerities to bring the celestial Gaṅgā river to earth to purify the ashes of his 60,000 ancestors.', ref: 'SB 9.9' },
  { id: 'khatvanga', label: 'Khaṭvāṅga', role: 'King', type: 'solar',
    desc: 'Descendant of Bhagīratha. A great king who achieved liberation in a moment by surrendering to Lord Viṣṇu.', ref: 'SB 9.9' },
  { id: 'dasharatha', label: 'Daśaratha', role: 'King of Ayodhyā', type: 'solar',
    desc: 'King of Ayodhyā, descendant of Ikṣvāku through Aja. Father of Lord Rāmacandra (by Kauśalyā), Bharata (by Kaikeyī), Lakṣmaṇa and Śatrughna (by Sumitrā).', ref: 'SB 9.10' },
  { id: 'rama', label: 'Lord Rāmacandra', role: '7th avatāra of Viṣṇu', type: 'divine',
    desc: 'The ideal king (maryādā-puruṣottama), seventh avatāra of Viṣṇu. Son of Daśaratha and Kauśalyā. His life and pastimes are the Rāmāyaṇa. Wife: Sītādevī. Killed Rāvaṇa and established Rāma-rājya.', ref: 'SB 9.10–9.11' },
  { id: 'lava', label: 'Lava & Kuśa', role: 'Twin sons of Rāma', type: 'solar',
    desc: 'Twin sons of Lord Rāma and Sītādevī, born in sage Vālmīki\'s āśrama during Sītā\'s exile. They sang the Rāmāyaṇa to their own father Rāma, not knowing who he was.', ref: 'SB 9.11' },
  
  // From Diti
  { id: 'hiranya_k', label: 'Hiraṇyakaśipu', role: 'Demon king', type: 'other',
    desc: 'Son of Kaśyapa and Diti. Killed by Nṛsiṁhadeva (man-lion avatāra of Viṣṇu). Father of Prahlāda Mahārāja, the supreme devotee.', ref: 'SB 7.2–7.10' },
  { id: 'hiranya_a', label: 'Hiraṇyākṣa', role: 'Demon killed by Varāha', type: 'other',
    desc: 'Son of Kaśyapa and Diti. Killed by Lord Varāha (boar incarnation of Viṣṇu) after he submerged the earth in the cosmic ocean.', ref: 'SB 3.18–3.19' },
  { id: 'prahlad', label: 'Prahlāda Mahārāja', role: 'Supreme devotee', type: 'divine',
    desc: 'Son of Hiraṇyakaśipu. The greatest devotee among the demons. Saved by Nṛsiṁhadeva. One of the twelve mahājanas (authorities on bhakti). His grandson Bali Mahārāja donated the three worlds to Vāmana.', ref: 'SB 7.4–7.10' },
  { id: 'virocana', label: 'Virocana', role: 'Son of Prahlāda', type: 'other',
    desc: 'Son of Prahlāda Mahārāja. Father of Bali Mahārāja.', ref: 'SB 8.19' },
  { id: 'bali', label: 'Bali Mahārāja', role: 'Devotee who gave 3 worlds', type: 'divine',
    desc: 'Grandson of Prahlāda. A great devotee who donated the three worlds to Lord Vāmana (dwarf incarnation). Bound by the Lord as His servant.', ref: 'SB 8.19–8.23' },
  
  // Lunar Dynasty - From Atri
  { id: 'soma', label: 'Soma (Candra)', role: 'Moon god', type: 'divine',
    desc: 'The moon god, son of Atri Muni. Founder of the lunar dynasty. His descendants include both the Yadu dynasty (Kṛṣṇa) and the Kuru dynasty (Pāṇḍavas).', ref: 'SB 9.14' },
  { id: 'budha', label: 'Budha', role: 'Son of Soma', type: 'divine',
    desc: 'Son of Soma (moon) and Tārā. Not the same as Gautama Buddha. By Iḷā (daughter of Vaivasvata Manu) he fathered Purūravā — the founding ancestor of both the Yadu and Kuru dynasties.', ref: 'SB 9.14' },
  { id: 'pururava', label: 'Purūravā', role: 'Lunar dynasty founder', type: 'other',
    desc: 'Son of Budha and Iḷā. Famous for his intense love for the apsarā Urvaśī. He is the founding ancestor of both the Yadu dynasty (Kṛṣṇa) and Kuru dynasty (Pāṇḍavas).', ref: 'SB 9.14' },
  { id: 'ayu', label: 'Āyu', role: 'Son of Purūravā', type: 'other',
    desc: 'Son of Purūravā and Urvaśī. His descendants split into the great Yadu and Kuru lineages that dominate the Bhāgavatam narrative.', ref: 'SB 9.17' },
  { id: 'nahusha', label: 'Nahuṣa', role: 'Fallen Indra', type: 'other',
    desc: 'Son of Āyu, temporarily became Indra. Was cursed to become a python by sage Agastya for his arrogance toward sages. Later released by Yudhiṣṭhira.', ref: 'SB 9.18' },
  { id: 'yayati', label: 'Yayāti', role: 'King of kings', type: 'other',
    desc: 'Son of Nahuṣa. Famous for exchanging his old age for son Pūru\'s youth. Married Devayānī (Śukrācārya\'s daughter) and Śarmiṣṭhā. Father of both Yadu and Pūru — roots of Kṛṣṇa\'s and the Pāṇḍavas\' lineages.', ref: 'SB 9.18–9.19' },
  
  // Yadu Dynasty
  { id: 'yadu', label: 'Yadu', role: 'Founder · Yadu clan', type: 'yadu',
    desc: 'Son of Yayāti and Devayānī. Refused to exchange youth with his father and was cursed that none of his descendants would be crowned as kings. Founder of the great Yadu dynasty from which Lord Kṛṣṇa descended.', ref: 'SB 9.23' },
  { id: 'kroshta', label: 'Kroṣṭā', role: 'Son of Yadu', type: 'yadu',
    desc: 'Son of Yadu. His descendants continued the Yadu lineage.', ref: 'SB 9.23' },
  { id: 'vrishni', label: 'Vṛṣṇi', role: 'Yadu branch progenitor', type: 'yadu',
    desc: 'Descendant of Kroṣṭā, progenitor of the Vṛṣṇi sub-clan — the specific line from which both Lord Kṛṣṇa and Lord Balarāma appeared in Dvāpara-yuga.', ref: 'SB 9.24' },
  { id: 'sura', label: 'Śūrasena', role: 'King of Mathurā', type: 'yadu',
    desc: 'King of Mathurā, descendant of Vṛṣṇi. Grandfather of Lord Kṛṣṇa through Vasudeva, and grandfather of the Pāṇḍavas through Pṛthā (Kuntī) who was adopted by Kuntibhoja.', ref: 'SB 9.24' },
  { id: 'vasudeva', label: 'Vasudeva', role: 'Father of Lord Kṛṣṇa', type: 'yadu',
    desc: 'Son of Śūrasena. Husband of Devakī (by whom he fathered Lord Kṛṣṇa) and Rohiṇī (by whom he fathered Balarāma). Imprisoned by his brother-in-law Kaṁsa.', ref: 'SB 10.1–10.3' },
  { id: 'kunti', label: 'Kuntī (Pṛthā)', role: 'Mother of Pāṇḍavas', type: 'kuru',
    desc: 'Daughter of Śūrasena, adopted by Kuntibhoja. Wife of Pāṇḍu. Mother of Karṇa (by Sūrya), Yudhiṣṭhira (by Dharmarāja), Bhīma (by Vāyu), and Arjuna (by Indra). A great devotee of Lord Kṛṣṇa.', ref: 'SB 1.8' },
  { id: 'krishna_y', label: 'Lord Kṛṣṇa', role: 'Svayam Bhagavān', type: 'divine',
    desc: 'The Supreme Personality of Godhead (svayam bhagavān), the source of all avatāras. Son of Vasudeva and Devakī, raised in Vṛndāvana by Nanda and Yaśodā. Speaker of the Bhagavad-gītā at Kurukṣetra. His divine pastimes fill the entire Canto 10 of the Bhāgavatam.', ref: 'SB 10.1–10.90' },
  { id: 'balarama', label: 'Lord Balarāma', role: 'First expansion of Kṛṣṇa', type: 'divine',
    desc: 'Son of Vasudeva and Rohiṇī. The original Saṅkarṣaṇa, first expansion of Lord Kṛṣṇa. God of immense strength. Carries plow (hala) and club (musala). Spiritual master of both Kṛṣṇa\'s pastimes.', ref: 'SB 10.2, 10.8' },
  { id: 'devaki', label: 'Devakī', role: 'Mother of Kṛṣṇa', type: 'yadu',
    desc: 'Wife of Vasudeva, mother of Lord Kṛṣṇa. Imprisoned by her brother Kaṁsa who killed her first six children. The seventh (Balarāma) was transferred to Rohiṇī\'s womb.', ref: 'SB 10.1–10.3' },
  { id: 'rohini', label: 'Rohiṇī', role: 'Mother of Balarāma', type: 'yadu',
    desc: 'Wife of Vasudeva, mother of Lord Balarāma. The seventh child of Devakī was mystically transferred to her womb to save him from Kaṁsa.', ref: 'SB 10.2' },
  
  // Kuru Dynasty
  { id: 'puru', label: 'Pūru', role: 'Founder · Kuru clan', type: 'kuru',
    desc: 'Son of Yayāti and Śarmiṣṭhā. Accepted his father\'s old age and was blessed as the heir. Founder of the Puru dynasty from which the Kurus — and ultimately the Pāṇḍavas — descended.', ref: 'SB 9.20' },
  { id: 'dushyanta', label: 'Duṣyanta', role: 'King', type: 'kuru',
    desc: 'Descendant of Pūru. Husband of Śakuntalā (the apsarā Menakā\'s daughter raised by sage Kaṇva). Father of Bharata.', ref: 'SB 9.20' },
  { id: 'shakuntala', label: 'Śakuntalā', role: 'Wife of Duṣyanta', type: 'other',
    desc: 'Daughter of the apsarā Menakā and Viśvāmitra. Raised by sage Kaṇva. Married King Duṣyanta and became mother of Bharata.', ref: 'SB 9.20' },
  { id: 'bharata_k', label: 'Bharata', role: 'World emperor', type: 'kuru',
    desc: 'Son of Duṣyanta (Puru dynasty) and the apsarā Śakuntalā. Great emperor after whom India is named "Bhārata." Ruled the entire known world from Hastināpura.', ref: 'SB 9.20' },
  { id: 'kuru', label: 'Kuru', role: 'Ancestor of Kurus', type: 'kuru',
    desc: 'Descendant of Bharata. Performed great austerities on the plains of Kurukṣetra, sanctifying it as the holiest land on earth. The famous Mahābhārata war was later fought there.', ref: 'SB 9.22' },
  { id: 'shantanu', label: 'Śāntanu', role: 'King of Hastināpura', type: 'kuru',
    desc: 'King of Hastināpura, descendant of Kuru. Father of Bhīṣma (by Gaṅgā), Citrāṅgada and Vicitravīrya (by Satyavatī). His lineage led directly to both the Pāṇḍavas and Kauravas.', ref: 'SB 9.22' },
  { id: 'ganga', label: 'Gaṅgā', role: 'River goddess', type: 'divine',
    desc: 'The celestial river goddess, wife of Śāntanu. Mother of Bhīṣma and seven other Vasus who took human birth. Returned to heaven after giving birth to Bhīṣma.', ref: 'SB 9.22' },
  { id: 'satyavati', label: 'Satyavatī', role: 'Queen · Mother of Vyāsa', type: 'other',
    desc: 'Daughter of a fisherman, later queen of Śāntanu. Mother of Citrāṅgada and Vicitravīrya. Before marriage, she gave birth to Vyāsadeva (Kṛṣṇa Dvaipāyana) by Parāśara Ṛṣi.', ref: 'SB 9.22' },
  { id: 'bhishma', label: 'Bhīṣma', role: 'Grandfather of Kurus', type: 'kuru',
    desc: 'Son of Śāntanu and Gaṅgā. Took the terrible vow (bhīṣma-pratigñā) of lifelong celibacy. One of the twelve mahājanas. Lay on a bed of arrows at Kurukṣetra and attained liberation while instructing Yudhiṣṭhira.', ref: 'SB 1.9, 9.22' },
  { id: 'chitrangada', label: 'Citrāṅgada', role: 'King', type: 'kuru',
    desc: 'Son of Śāntanu and Satyavatī. Killed by a namesake Gandharva king.', ref: 'SB 9.22' },
  { id: 'vichitravirya', label: 'Vicitravīrya', role: 'King', type: 'kuru',
    desc: 'Son of Śāntanu and Satyavatī. Died young without children. His wives Ambikā and Ambālikā had sons Dhṛtarāṣṭra and Pāṇḍu by Vyāsadeva (niyoga).', ref: 'SB 9.22' },
  { id: 'vyasa', label: 'Vyāsadeva', role: 'Compiler of Vedas', type: 'sage',
    desc: 'Kṛṣṇa Dvaipāyana Vyāsa, son of Parāśara and Satyavatī. Divided the one Veda into four. Compiled the Mahābhārata and the Bhāgavatam. Father of Dhṛtarāṣṭra, Pāṇḍu and Śuka.', ref: 'SB 1.1–1.7' },
  
  // Pāṇḍavas and Kauravas
  { id: 'dhrita', label: 'Dhṛtarāṣṭra', role: 'Blind king', type: 'kuru',
    desc: 'Son of Vicitravīrya and Ambikā (by Vyāsadeva). Born blind. Father of one hundred Kauravas led by Duryodhana. His excessive attachment to his sons caused the Mahābhārata war and the destruction of the Kuru dynasty.', ref: 'SB 1.13, 9.22' },
  { id: 'pandu', label: 'Pāṇḍu', role: 'Father of Pāṇḍavas', type: 'kuru',
    desc: 'Son of Vicitravīrya and Ambālikā (by Vyāsadeva). Father of the five Pāṇḍavas. Died early due to a curse from sage Kindama. His sons inherited the kingdom of Hastināpura.', ref: 'SB 9.22' },
  { id: 'gandhari', label: 'Gāndhārī', role: 'Wife of Dhṛtarāṣṭra', type: 'other',
    desc: 'Princess of Gandhāra, wife of Dhṛtarāṣṭra. Mother of 100 Kauravas including Duryodhana. Blindfolded herself to share her husband\'s blindness.', ref: 'SB 9.22' },
  { id: 'duryodhana', label: 'Duryodhana', role: 'Eldest Kaurava', type: 'kuru',
    desc: 'Eldest of the 100 Kauravas, son of Dhṛtarāṣṭra and Gāndhārī. The main antagonist of the Mahābhārata. His envy of the Pāṇḍavas led to the great war at Kurukṣetra.', ref: 'SB 1.7, 9.22' },
  { id: 'yudhi', label: 'Yudhiṣṭhira', role: 'Dharmarāja', type: 'kuru',
    desc: 'Eldest Pāṇḍava, son of Kuntī and Dharmarāja (Yama). Known as the most righteous king. Ruled after the Mahābhārata war and then handed the kingdom to Parīkṣit before ascending to the Himālayas.', ref: 'SB 1.12, 9.22' },
  { id: 'bhima', label: 'Bhīma', role: 'Son of Vāyu', type: 'kuru',
    desc: 'Second Pāṇḍava, son of Kuntī and Vāyu (wind god). Known for his immense strength and appetite. Killed all 100 Kauravas in the Mahābhārata war.', ref: 'SB 1.7, 9.22' },
  { id: 'arjuna', label: 'Arjuna', role: 'Recipient of the Gītā', type: 'kuru',
    desc: 'Third Pāṇḍava, son of Kuntī and Indra (king of heaven). The greatest archer of his age and best friend of Lord Kṛṣṇa. Received the Bhagavad-gītā on the Kurukṣetra battlefield. His chariot was named Nandighoṣa.', ref: 'SB 1.7, BG 1.28' },
  { id: 'nakula', label: 'Nakula', role: 'Twin Pāṇḍava', type: 'kuru',
    desc: 'Fourth Pāṇḍava, twin son of Mādrī and one of the Aśvinī-kumāras. Expert in sword fighting and horse care.', ref: 'SB 1.7, 9.22' },
  { id: 'sahadeva', label: 'Sahadeva', role: 'Twin Pāṇḍava', type: 'kuru',
    desc: 'Fifth Pāṇḍava, twin son of Mādrī and one of the Aśvinī-kumāras. Known for his wisdom and knowledge of astrology.', ref: 'SB 1.7, 9.22' },
  { id: 'madri', label: 'Mādrī', role: 'Wife of Pāṇḍu', type: 'kuru',
    desc: 'Second wife of Pāṇḍu, princess of Madra. Mother of the twins Nakula and Sahadeva by the Aśvinī-kumāras.', ref: 'SB 9.22' },
  
  // Next generation
  { id: 'subhadra', label: 'Subhadrā', role: 'Sister of Kṛṣṇa', type: 'yadu',
    desc: 'Sister of Lord Kṛṣṇa, daughter of Vasudeva and Devakī. Married Arjuna. Mother of Abhimanyu.', ref: 'SB 10.1' },
  { id: 'draupadi', label: 'Draupadī', role: 'Wife of Pāṇḍavas', type: 'kuru',
    desc: 'Daughter of Drupada, king of Pāñcāla. Won by Arjuna in a svayaṁvara. Became the common wife of all five Pāṇḍavas. An expansion of Lakṣmī.', ref: 'SB 1.7' },
  { id: 'abhimanyu', label: 'Abhimanyu', role: 'Heroic warrior', type: 'kuru',
    desc: 'Son of Arjuna and Subhadrā (Kṛṣṇa\'s sister). Learned the Cakravyūha military formation while still in the womb. On the 13th day of the Kurukṣetra war, he entered alone and fought against seven great warriors (mahārathas).', ref: 'SB 1.7, 9.22' },
  { id: 'parikshit', label: 'Parīkṣit Mahārāja', role: 'Last great emperor', type: 'kuru',
    desc: 'Son of Abhimanyu and Uttarā. Saved in the womb by Kṛṣṇa\'s Sudarśana cakra from Aśvatthāmā\'s brahmāstra. The last great emperor of this age. Cursed to die by snakebite in seven days — this prompted the seven-day recitation of the entire Śrīmad-Bhāgavatam by Śukadeva Gosvāmī.', ref: 'SB 1.3–1.19' },
  { id: 'janamejaya', label: 'Janamejaya', role: 'Son of Parīkṣit', type: 'kuru',
    desc: 'Son of Parīkṣit Mahārāja. Performed the great sarpa-yajña (snake sacrifice) to avenge his father\'s death by Takṣaka the serpent. Stopped by the young sage Āstīka at the request of the snakes\' mother Jaratkārū.', ref: 'SB 12.6' },
  
  // Additional important figures
  { id: 'dhruva', label: 'Dhruva Mahārāja', role: 'Pole star devotee', type: 'divine',
    desc: 'Son of Uttānapāda. At age five, rejected by stepmother Suruci, he meditated on Viṣṇu in the forest. Viṣṇu was pleased and granted him the eternal Dhruva-loka (pole star).', ref: 'SB 4.8–4.12' },
  { id: 'kapila', label: 'Lord Kapila', role: 'Avatāra · Sāṅkhya', type: 'divine',
    desc: 'Son of Kardama Muni and Devahūti, an avatāra of Viṣṇu. Taught Bhāgavata-Sāṅkhya philosophy to his mother Devahūti. His teachings are the foundation of Canto 3 chapters 25–33.', ref: 'SB 3.25–3.33' },
  { id: 'kardama', label: 'Kardama Muni', role: 'Sage · Husband of Devahūti', type: 'sage',
    desc: 'A great sage who married Devahūti, daughter of Svāyambhuva Manu. Father of Lord Kapila. Had nine daughters who married the nine Prajāpatis.', ref: 'SB 3.21–3.24' },
  { id: 'yajna', label: 'Yajña', role: 'Avatāra of Kṛṣṇa', type: 'divine',
    desc: 'Son of Ākūti and Ruci, an avatāra of Lord Viṣṇu. He appeared to restore the principles of sacrifice (yajña) when the world needed it.', ref: 'SB 1.3, 2.7' },
  { id: 'ruci', label: 'Ruci', role: 'Prajāpati', type: 'sage',
    desc: 'A Prajāpati who married Ākūti, daughter of Svāyambhuva Manu. Father of Yajña (a Viṣṇu avatāra) and Dakṣiṇā.', ref: 'SB 4.1' },
  
  // Other important sages and figures
  { id: 'parasara', label: 'Parāśara', role: 'Father of Vyāsa', type: 'sage',
    desc: 'A great sage, grandson of Vasiṣṭha. Father of Vyāsadeva by Satyavatī. Known for compiling various Purāṇas.', ref: 'SB 1.4' },
  { id: 'visvamitra', label: 'Viśvāmitra', role: 'Sage · Father of Śakuntalā', type: 'sage',
    desc: 'A king who became a brahmarṣi through severe austerities. Father of Śakuntalā by the apsarā Menakā. Guru of Lord Rāma.', ref: 'SB 9.20' },
  { id: 'menaka', label: 'Menakā', role: 'Apsarā', type: 'other',
    desc: 'A celestial nymph (apsarā) sent by Indra to distract Viśvāmitra. Mother of Śakuntalā.', ref: 'SB 9.20' },
  { id: 'kanva', label: 'Kaṇva', role: 'Sage · Raised Śakuntalā', type: 'sage',
    desc: 'A great sage who found and raised Śakuntalā in his hermitage.', ref: 'SB 9.20' },
  { id: 'drupada', label: 'Drupada', role: 'King of Pāñcāla', type: 'kuru',
    desc: 'King of Pāñcāla, father of Draupadī and Dhṛṣṭadyumna. Friend then enemy of Droṇa.', ref: 'SB 1.7' },
  { id: 'drona', label: 'Droṇa', role: 'Guru of Pāṇḍavas', type: 'sage',
    desc: 'The military guru who taught the Pāṇḍavas and Kauravas. Son of Bharadvāja. Father of Aśvatthāmā.', ref: 'SB 1.7' },
  { id: 'ashvatthama', label: 'Aśvatthāmā', role: 'Son of Droṇa', type: 'other',
    desc: 'Son of Droṇa. One of the few survivors of the Kurukṣetra war. Cursed by Kṛṣṇa to wander earth forever. Fired the brahmāstra at Parīkṣit in the womb.', ref: 'SB 1.7' },
  { id: 'karna', label: 'Karṇa', role: 'Son of Kuntī & Sūrya', type: 'kuru',
    desc: 'Eldest son of Kuntī (born before marriage) by Sūrya (sun god). Raised by a charioteer. Close friend of Duryodhana. One of the greatest warriors, killed by Arjuna.', ref: 'SB 9.23' },
  
  // Additional Yadu lineage figures
  { id: 'kamsa', label: 'Kaṁsa', role: 'Tyrant king of Mathurā', type: 'other',
    desc: 'Son of Ugrasena, king of Mathurā. Brother of Devakī. Tyrant who imprisoned his father and killed Devakī\'s children. Killed by Lord Kṛṣṇa.', ref: 'SB 10.1–10.44' },
  { id: 'akruura', label: 'Akrūra', role: 'Devotee of Kṛṣṇa', type: 'yadu',
    desc: 'A great devotee of Lord Kṛṣṇa, descendant of Yadu. Sent by Kaṁsa to bring Kṛṣṇa and Balarāma to Mathurā.', ref: 'SB 10.38' },
  { id: 'uddhava', label: 'Uddhava', role: 'Dear friend of Kṛṣṇa', type: 'yadu',
    desc: 'A great devotee and dear friend of Lord Kṛṣṇa. Sent by Kṛṣṇa to console the gopīs after His departure from Vṛndāvana.', ref: 'SB 10.46–10.47' },
  { id: 'narada', label: 'Nārada Muni', role: 'Travelling sage', type: 'sage',
    desc: 'A great devotee of Lord Viṣṇu who travels throughout the universe chanting His glories. Son of Brahmā. Narrator of many Bhāgavatam stories.', ref: 'SB 1.4–1.6' },
  { id: 'shuka', label: 'Śukadeva Gosvāmī', role: 'Narrator of Bhāgavatam', type: 'sage',
    desc: 'Son of Vyāsadeva. The great realized soul who narrated the entire Śrīmad-Bhāgavatam to King Parīkṣit during the last seven days of his life.', ref: 'SB 1.1–1.19, 2.1–12.13' },
  { id: 'prahlada_wife', label: 'Vindhyāvalī', role: 'Wife of Bali', type: 'other',
    desc: 'Wife of Bali Mahārāja. Mother of Bāṇāsura and 99 other sons.', ref: 'SB 8.19' },
  { id: 'banasura', label: 'Bāṇāsura', role: 'Thousand-armed demon', type: 'other',
    desc: 'Son of Bali Mahārāja. Had one thousand arms. A great devotee of Lord Śiva. Defeated by Lord Kṛṣṇa but spared due to Śiva\'s request.', ref: 'SB 10.62–10.63' },
  { id: 'amba', label: 'Ambā', role: 'Princess', type: 'other',
    desc: 'Elder daughter of the king of Kāśī. Rejected by Bhīṣma and Salva, she performed austerities to kill Bhīṣma. Reborn as Śikhaṇḍī.', ref: 'SB 9.22' },
  { id: 'ambika', label: 'Ambikā', role: 'Mother of Dhṛtarāṣṭra', type: 'other',
    desc: 'Daughter of the king of Kāśī. Wife of Vicitravīrya. Mother of Dhṛtarāṣṭra by Vyāsadeva (niyoga).', ref: 'SB 9.22' },
  { id: 'ambalika', label: 'Ambālikā', role: 'Mother of Pāṇḍu', type: 'other',
    desc: 'Youngest daughter of the king of Kāśī. Wife of Vicitravīrya. Mother of Pāṇḍu by Vyāsadeva (niyoga).', ref: 'SB 9.22' },
  { id: 'devayani', label: 'Devayānī', role: 'Daughter of Śukrācārya', type: 'other',
    desc: 'Daughter of Śukrācārya. Married Yayāti. Mother of Yadu and Turvasu.', ref: 'SB 9.18' },
  { id: 'sharmishtha', label: 'Śarmiṣṭhā', role: 'Wife of Yayāti', type: 'other',
    desc: 'Daughter of Vṛṣaparvā (king of demons). Given as servant to Devayānī, but later married Yayāti. Mother of Pūru.', ref: 'SB 9.18' },
  { id: 'suniti', label: 'Sunīti', role: 'Mother of Dhruva', type: 'other',
    desc: 'First wife of Uttānapāda, mother of Dhruva Mahārāja. A devoted queen.', ref: 'SB 4.8' },
  { id: 'suruci', label: 'Suruci', role: 'Queen · Stepmother of Dhruva', type: 'other',
    desc: 'Second wife of Uttānapāda, mother of Uttama. Her pride and rejection of Dhruva led him to seek the Lord\'s shelter.', ref: 'SB 4.8' },
  { id: 'uttara', label: 'Uttarā', role: 'Wife of Abhimanyu', type: 'kuru',
    desc: 'Daughter of King Virāṭa. Wife of Abhimanyu. Mother of Parīkṣit. Saved from Aśvatthāmā\'s brahmāstra by Kṛṣṇa while pregnant.', ref: 'SB 1.7' },
  { id: 'virata', label: 'Virāṭa', role: 'King', type: 'kuru',
    desc: 'King in whose kingdom the Pāṇḍavas hid during their exile. Father of Uttarā.', ref: 'SB 1.7' },
  { id: 'satrupa', label: 'Śatarūpā', role: 'Wife of Svāyambhuva Manu', type: 'manu',
    desc: 'The first woman, born with Svāyambhuva Manu from Brahmā. Mother of Priyavrata, Uttānapāda, Ākūti, Prasūti, and Devahūti.', ref: 'SB 3.12' },
  { id: 'urvashi', label: 'Urvaśī', role: 'Apsarā', type: 'other',
    desc: 'The most beautiful celestial nymph. Wife of Purūravā for some time. Mother of Āyu.', ref: 'SB 9.14' },
  { id: 'ila', label: 'Iḷā', role: 'Daughter of Vaivasvata Manu', type: 'manu',
    desc: 'Daughter of Vaivasvata Manu. Sometimes transformed into a man (Sudyumna). Mother/wife of Budha and mother of Purūravā.', ref: 'SB 9.1' },
  { id: 'tara', label: 'Tārā', role: 'Wife of Bṛhaspati', type: 'other',
    desc: 'Wife of Bṛhaspati (preceptor of demigods). Mother of Budha by Soma (moon god), causing a conflict between the gods.', ref: 'SB 9.14' },
  { id: 'vishrav', label: 'Viśravā', role: 'Son of Pulastya', type: 'sage',
    desc: 'Son of Pulastya. Father of Kubera (by Iḍaviḍā), Rāvaṇa, Kumbhakarṇa, Vibhīṣaṇa, and Śūrpaṇakhā (by Keśinī).', ref: 'SB 7.1' },
  { id: 'kubera', label: 'Kubera', role: 'God of wealth', type: 'divine',
    desc: 'Son of Viśravā and Iḍaviḍā. The god of wealth and treasurer of the demigods. Half-brother of Rāvaṇa.', ref: 'SB 4.1' },
  { id: 'ravana', label: 'Rāvaṇa', role: 'King of Laṅkā', type: 'other',
    desc: 'Son of Viśravā and Keśinī. The ten-headed demon king of Laṅkā. Kidnapped Sītā and was killed by Lord Rāma.', ref: 'SB 7.1, 9.10' },
  { id: 'vibhishana', label: 'Vibhīṣaṇa', role: 'Devotee of Rāma', type: 'other',
    desc: 'Son of Viśravā and Keśinī. Younger brother of Rāvaṇa. A great devotee of Lord Rāma. Helped Rāma defeat Rāvaṇa.', ref: 'SB 9.10' },
  { id: 'sukanya', label: 'Sukanyā', role: 'Wife of Cyavana Muni', type: 'other',
    desc: 'Daughter of Śaryāti. Married the old sage Cyavana Muni. Her devotion restored his youth and eyesight.', ref: 'SB 9.3' },
  { id: 'chyavana', label: 'Cyavana Muni', role: 'Sage', type: 'sage',
    desc: 'A great sage who was restored to youth by the Aśvinī-kumāras. Husband of Sukanyā.', ref: 'SB 9.3' },
  { id: 'revati', label: 'Revatī', role: 'Wife of Balarāma', type: 'yadu',
    desc: 'Daughter of Kakudmī. Married Lord Balarāma. Known for her exceptional height and beauty.', ref: 'SB 10.52' },
  { id: 'kakudmi', label: 'Kakudmī', role: 'King', type: 'other',
    desc: 'King of Kuśasthalī. Father of Revatī. Took his daughter to Brahmā to find a suitable husband and returned to find ages had passed.', ref: 'SB 9.3' },
  { id: 'ambarisha', label: 'Ambarīṣa Mahārāja', role: 'Great devotee', type: 'solar',
    desc: 'A great devotee king of the solar dynasty. Protected by Sudarśana cakra. One of the twelve mahājanas.', ref: 'SB 9.4–9.5' },
  { id: 'mandhata', label: 'Māndhātā', role: 'Emperor', type: 'solar',
    desc: 'A great emperor born from Yuvanāśva\'s right side. Ruled the entire earth.', ref: 'SB 9.6' },
  { id: 'mucukunda', label: 'Mucukunda', role: 'King who slept for ages', type: 'solar',
    desc: 'A king who slept for a very long time in a cave. When awakened by Kaṁsa\'s soldiers, his glance burned them to ashes.', ref: 'SB 10.51' },
  { id: 'saryati', label: 'Śaryāti', role: 'King', type: 'solar',
    desc: 'Son of Vaivasvata Manu. Father of Sukanyā and Ānarta.', ref: 'SB 9.3' },
  { id: 'anarta', label: 'Ānarta', role: 'King', type: 'other',
    desc: 'Son of Śaryāti. His descendants ruled the region of Ānarta (Gujarat). Father of Revata.', ref: 'SB 9.3' },
  { id: 'revata', label: 'Revata', role: 'King', type: 'other',
    desc: 'Son of Ānarta. Father of Kakudmī.', ref: 'SB 9.3' },
  { id: 'trishanku', label: 'Triśaṅku', role: 'King saved by Viśvāmitra', type: 'solar',
    desc: 'A king of the solar dynasty who was cursed by his guru but saved by Viśvāmitra. Established in a special heaven.', ref: 'SB 9.7' },
  { id: 'harishchandra', label: 'Hariścandra', role: 'King of truth', type: 'solar',
    desc: 'A famous king known for his unwavering commitment to truth. Tested severely by Viśvāmitra but never wavered.', ref: 'SB 9.7' },
  { id: 'rohita', label: 'Rohita', role: 'Son of Hariścandra', type: 'solar',
    desc: 'Son of Hariścandra. His father was about to sacrifice him to Varuṇa, but he was saved.', ref: 'SB 9.7' },
  { id: 'sagara_sons', label: '60,000 Sons of Sagara', role: 'Burned by Kapila', type: 'solar',
    desc: 'The 60,000 sons of King Sagara who disturbed sage Kapila and were burned to ashes by his curse.', ref: 'SB 9.8' },
  { id: 'amshuman', label: 'Aṁśumān', role: 'Grandson of Sagara', type: 'solar',
    desc: 'Grandson of Sagara. Father of Dilīpa. Tried to bring the Ganges but could not.', ref: 'SB 9.8' },
  { id: 'dilipa', label: 'Dilīpa', role: 'King', type: 'solar',
    desc: 'Son of Aṁśumān. Father of Bhagīratha. Known for his devotion to a cow.', ref: 'SB 9.9' },
  { id: 'raghu', label: 'Raghu', role: 'King · Raghu dynasty', type: 'solar',
    desc: 'A great king of the solar dynasty. So famous that the dynasty is called Raghuvaṁśa.', ref: 'SB 9.10' },
  { id: 'aja', label: 'Aja', role: 'King · Father of Daśaratha', type: 'solar',
    desc: 'Son of Raghu. Father of Daśaratha.', ref: 'SB 9.10' },
  { id: 'sumitra', label: 'Sumitrā', role: 'Mother of Lakṣmaṇa', type: 'solar',
    desc: 'One of the three wives of Daśaratha. Mother of Lakṣmaṇa and Śatrughna.', ref: 'SB 9.10' },
  { id: 'kausalya', label: 'Kauśalyā', role: 'Mother of Rāma', type: 'solar',
    desc: 'Chief queen of Daśaratha. Mother of Lord Rāmacandra.', ref: 'SB 9.10' },
  { id: 'kaikeyi', label: 'Kaikeyī', role: 'Mother of Bharata', type: 'solar',
    desc: 'One of the three wives of Daśaratha. Mother of Bharata. Her request for Rāma\'s exile led to the Rāmāyaṇa events.', ref: 'SB 9.10' },
  { id: 'bharata_r', label: 'Bharata', role: 'Son of Daśaratha', type: 'solar',
    desc: 'Son of Daśaratha and Kaikeyī. Ruled Ayodhyā as Rāma\'s representative during His exile. The ideal of brotherly devotion.', ref: 'SB 9.10' },
  { id: 'lakshmana', label: 'Lakṣmaṇa', role: 'Brother of Rāma', type: 'solar',
    desc: 'Son of Daśaratha and Sumitrā. Younger brother of Rāma. Accompanied Rāma to the forest. An expansion of Śeṣa Nāga.', ref: 'SB 9.10' },
  { id: 'shatrughna', label: 'Śatrughna', role: 'Son of Daśaratha', type: 'solar',
    desc: 'Son of Daśaratha and Sumitrā. Twin of Lakṣmaṇa. Killed Lavaṇāsura.', ref: 'SB 9.10' },
  { id: 'hanuman', label: 'Hanumān', role: 'Devotee of Rāma', type: 'divine',
    desc: 'The great monkey devotee of Lord Rāma. Son of Vāyu (wind god). Leaped across the ocean to Laṅkā. The ideal of selfless devotion.', ref: 'Rāmāyaṇa' },
  { id: 'sugriva', label: 'Sugrīva', role: 'Monkey king', type: 'other',
    desc: 'The monkey king who helped Lord Rāma find Sītā. Brother of Vāli.', ref: 'Rāmāyaṇa' },
  { id: 'vibhishana_l', label: 'Vibhīṣaṇa (Laṅkā)', role: 'King of Laṅkā', type: 'other',
    desc: 'After helping Rāma defeat Rāvaṇa, he was crowned king of Laṅkā.', ref: 'SB 9.10' },
  { id: 'indra', label: 'Indra', role: 'King of heaven', type: 'divine',
    desc: 'The king of the demigods, ruler of Svarga. Son of Kaśyapa and Aditi. Father of Arjuna.', ref: 'SB 6.6' },
  { id: 'yama', label: 'Yamarāja', role: 'God of death', type: 'divine',
    desc: 'The god of death and justice. Son of Vivasvān. Father of Yudhiṣṭhira.', ref: 'SB 6.6' },
  { id: 'vayu', label: 'Vāyu', role: 'God of wind', type: 'divine',
    desc: 'The wind god. Father of Bhīma and Hanumān.', ref: 'SB 6.6' },
  { id: 'ashvini', label: 'Aśvinī-kumāras', role: 'Twin gods of medicine', type: 'divine',
    desc: 'The twin gods of medicine and healing. Sons of Vivasvān. Fathers of Nakula and Sahadeva.', ref: 'SB 6.6' },
  { id: 'dharma', label: 'Dharmarāja', role: 'God of religion', type: 'divine',
    desc: 'The god of religion and righteousness. Father of Yudhiṣṭhira.', ref: 'SB 9.22' },
  { id: 'surya', label: 'Sūrya', role: 'Sun god', type: 'divine',
    desc: 'The sun god, also called Vivasvān. Father of Vaivasvata Manu, Yama, and Karṇa.', ref: 'SB 6.6' },
  { id: 'varuna', label: 'Varuṇa', role: 'God of waters', type: 'divine',
    desc: 'The god of waters and the ocean. One of the Ādityas.', ref: 'SB 6.6' },
  { id: 'mitra', label: 'Mitra', role: 'Āditya', type: 'divine',
    desc: 'One of the twelve Ādityas, son of Aditi and Kaśyapa. God of friendship and oaths.', ref: 'SB 6.6' },
  { id: 'pusha', label: 'Pūṣā', role: 'Āditya', type: 'divine',
    desc: 'One of the twelve Ādityas. God of nourishment.', ref: 'SB 6.6' },
  { id: 'parjanya', label: 'Parjanya', role: 'God of rain', type: 'divine',
    desc: 'One of the twelve Ādityas. God of rain and thunderstorms.', ref: 'SB 6.6' },
  { id: 'ansha', label: 'Aṁśa', role: 'Āditya', type: 'divine',
    desc: 'One of the twelve Ādityas.', ref: 'SB 6.6' },
  { id: 'bhaga', label: 'Bhaga', role: 'God of fortune', type: 'divine',
    desc: 'One of the twelve Ādityas. God of fortune and prosperity.', ref: 'SB 6.6' },
  { id: 'tvashtha', label: 'Tvaṣṭā', role: 'Divine architect', type: 'divine',
    desc: 'One of the twelve Ādityas. The divine architect and craftsman.', ref: 'SB 6.6' },
  { id: 'vivasvan_a', label: 'Vivasvān', role: 'Sun god', type: 'divine',
    desc: 'One of the twelve Ādityas, the sun god. Father of Vaivasvata Manu.', ref: 'SB 6.6' },
  { id: 'aryama', label: 'Aryamā', role: 'Āditya', type: 'divine',
    desc: 'One of the twelve Ādityas. God of customs and hospitality.', ref: 'SB 6.6' },
  { id: 'dhatr', label: 'Dhātṛ', role: 'Āditya', type: 'divine',
    desc: 'One of the twelve Ādityas. God of health and creation.', ref: 'SB 6.6' },
  { id: 'vamana', label: 'Lord Vāmana', role: 'Dwarf avatāra', type: 'divine',
    desc: 'The dwarf incarnation of Viṣṇu. Son of Aditi and Kaśyapa. Begged three steps of land from Bali and covered the universe.', ref: 'SB 8.18–8.23' },
  { id: 'narasimha', label: 'Lord Nṛsiṁha', role: 'Man-lion avatāra', type: 'divine',
    desc: 'The man-lion incarnation of Viṣṇu. Killed Hiraṇyakaśipu to protect Prahlāda.', ref: 'SB 7.8–7.9' },
  { id: 'varaha', label: 'Lord Varāha', role: 'Boar avatāra', type: 'divine',
    desc: 'The boar incarnation of Viṣṇu. Lifted the earth from the cosmic ocean and killed Hiraṇyākṣa.', ref: 'SB 3.13–3.19' },
  { id: 'matsya', label: 'Lord Matsya', role: 'Fish avatāra', type: 'divine',
    desc: 'The fish incarnation of Viṣṇu. Saved the Vedas from the demon Hayagrīva and warned King Satyavrata of the flood.', ref: 'SB 8.24' },
  { id: 'kurma', label: 'Lord Kūrma', role: 'Tortoise avatāra', type: 'divine',
    desc: 'The tortoise incarnation of Viṣṇu. Supported Mount Mandara during the churning of the ocean.', ref: 'SB 8.7' },
  { id: 'nrishimha', label: 'Lord Nṛsiṁha', role: 'Man-lion avatāra', type: 'divine',
    desc: 'The man-lion incarnation who killed Hiraṇyakaśipu to protect His devotee Prahlāda.', ref: 'SB 7.8' },
  { id: 'hayagriva', label: 'Lord Hayagrīva', role: 'Horse-headed avatāra', type: 'divine',
    desc: 'The horse-headed incarnation of Viṣṇu. Killed the demon Hayagrīva and restored the Vedas.', ref: 'SB 5.18' },
  { id: 'dattatreya', label: 'Lord Dattātreya', role: 'Avatāra of Viṣṇu', type: 'divine',
    desc: 'An incarnation of Viṣṇu, son of Atri and Anasūyā. A great teacher of yoga and spirituality.', ref: 'SB 4.1' },
  { id: 'durvasa', label: 'Durvāsā Muni', role: 'Avatāra of Śiva', type: 'sage',
    desc: 'A partial incarnation of Lord Śiva, son of Atri. Known for his terrible temper and curses.', ref: 'SB 4.1' },
  { id: 'nabhaga', label: 'Nabhaga', role: 'Son of Vaivasvata Manu', type: 'manu',
    desc: 'Son of Vaivasvata Manu. His descendants include Ambarīṣa Mahārāja.', ref: 'SB 9.1' },
  { id: 'nabhaga_disc', label: 'Nābhāga', role: 'Descendant', type: 'solar',
    desc: 'Descendant of Nabhaga. Father of Ambarīṣa Mahārāja.', ref: 'SB 9.6' },
  { id: 'viryavan', label: 'Viryavān', role: 'Son of Nābhāga', type: 'solar',
    desc: 'Son of Nābhāga. Father of Sudhanvā.', ref: 'SB 9.6' },
  { id: 'sudhanva', label: 'Sudhanvā', role: 'King', type: 'solar',
    desc: 'Son of Viryavān. Father of Traidhātava.', ref: 'SB 9.6' },
  { id: 'traidhatva', label: 'Traidhātava', role: 'King', type: 'solar',
    desc: 'Son of Sudhanvā. Father of Satyavrata.', ref: 'SB 9.6' },
  { id: 'satyavrata', label: 'Satyavrata', role: 'King', type: 'solar',
    desc: 'Son of Traidhātava. Later became Triśaṅku.', ref: 'SB 9.7' },
  { id: 'shunahshepa', label: 'Śunaḥśepha', role: 'Son of Hariścandra', type: 'solar',
    desc: 'Son of Hariścandra. Was to be sacrificed but saved.', ref: 'SB 9.7' },
  { id: 'shakti', label: 'Śakti', role: 'Son of Vasiṣṭha', type: 'sage',
    desc: 'Son of Vasiṣṭha. Father of Parāśara. Killed by a demon.', ref: 'SB 9.22' },
  { id: 'mrikanda', label: 'Mṛkaṇḍu', role: 'Sage', type: 'sage',
    desc: 'A great sage. Father of Mārkaṇḍeya Ṛṣi.', ref: 'SB 12.8' },
  { id: 'markandeya', label: 'Mārkaṇḍeya Ṛṣi', role: 'Immortal sage', type: 'sage',
    desc: 'A great sage who was blessed with a very long life. Saw the universal form of the Lord during the dissolution.', ref: 'SB 12.8–12.10' },
  { id: 'jaimini', label: 'Jaimini', role: 'Disciple of Vyāsa', type: 'sage',
    desc: 'A disciple of Vyāsadeva who compiled the Jaimini-śākhā of the Sāma Veda.', ref: 'SB 1.4' },
  { id: 'paila', label: 'Paila', role: 'Disciple of Vyāsa', type: 'sage',
    desc: 'A disciple of Vyāsadeva who compiled the Ṛg Veda.', ref: 'SB 1.4' },
  { id: 'vaisampayana', label: 'Vaiśampāyana', role: 'Disciple of Vyāsa', type: 'sage',
    desc: 'A disciple of Vyāsadeva who compiled the Yajur Veda.', ref: 'SB 1.4' },
  { id: 'sumantu', label: 'Sumantu', role: 'Disciple of Vyāsa', type: 'sage',
    desc: 'A disciple of Vyāsadeva who compiled the Atharva Veda.', ref: 'SB 1.4' },
  { id: 'romaharshana', label: 'Romaharṣaṇa', role: 'Sūta', type: 'sage',
    desc: 'A sūta (bard) who was killed by Balarāma for disrespecting brāhmaṇas.', ref: 'SB 1.4' },
  { id: 'suta_gosvami', label: 'Sūta Gosvāmī', role: 'Narrator', type: 'sage',
    desc: 'The son of Romaharṣaṇa. Narrated the Bhāgavatam and other Purāṇas to the sages at Naimiṣāraṇya.', ref: 'SB 1.1' },
  { id: 'saunaka', label: 'Śaunaka', role: 'Head of sages', type: 'sage',
    desc: 'The head of the sages at Naimiṣāraṇya who requested Sūta Gosvāmī to narrate the Bhāgavatam.', ref: 'SB 1.1' },
  { id: 'bahuka', label: 'Bahuka', role: 'King in disguise', type: 'other',
    desc: 'King Nahuṣa in the form of a python. Was released by Yudhiṣṭhira.', ref: 'SB 9.18' },
  { id: 'yati', label: 'Yati', role: 'Sannyāsī son of Yayāti', type: 'other',
    desc: 'Son of Yayāti who became a sannyāsī (renunciant) and refused the kingdom.', ref: 'SB 9.18' },
  { id: 'turvasu', label: 'Turvasu', role: 'Son of Yayāti', type: 'other',
    desc: 'Son of Yayāti and Devayānī. His descendants ruled in the southeast.', ref: 'SB 9.18' },
  { id: 'druhyu', label: 'Druhyu', role: 'Son of Yayāti', type: 'other',
    desc: 'Son of Yayāti and Devayānī. His descendants ruled in the west.', ref: 'SB 9.18' },
  { id: 'anudruhyu', label: 'Anudruhyu', role: 'Son of Yayāti', type: 'other',
    desc: 'Son of Yayāti and Devayānī. His descendants ruled in the north.', ref: 'SB 9.18' },
  { id: 'puru_disc', label: 'Descendants of Pūru', role: 'Kuru lineage', type: 'kuru',
    desc: 'The descendants of Pūru who continued the Kuru dynasty.', ref: 'SB 9.20' },
  { id: 'janamejaya_disc', label: 'Descendants of Janamejaya', role: 'Kuru lineage', type: 'kuru',
    desc: 'The descendants of Janamejaya who continued the Kuru dynasty until the present age of Kali.', ref: 'SB 12.1' },
  { id: 'kali', label: 'Kali-yuga', role: 'Current age', type: 'other',
    desc: 'The present age of quarrel and hypocrisy, which began after the departure of Lord Kṛṣṇa.', ref: 'SB 12.2–12.3' },
  { id: 'buddha', label: 'Lord Buddha', role: 'Avatāra of Viṣṇu', type: 'divine',
    desc: 'The ninth avatāra of Viṣṇu who appeared to delude the demons and establish non-violence.', ref: 'SB 1.3' },
  { id: 'kalki', label: 'Lord Kalki', role: 'Future avatāra', type: 'divine',
    desc: 'The future avatāra of Viṣṇu who will appear at the end of Kali-yuga to destroy the wicked and establish a new Satya-yuga.', ref: 'SB 12.2' },
  { id: 'pradyumna', label: 'Pradyumna', role: 'Son of Kṛṣṇa', type: 'yadu',
    desc: 'Son of Lord Kṛṣṇa and Rukmiṇī. An expansion of Kāmadeva (Cupid).', ref: 'SB 10.61' },
  { id: 'samba', label: 'Sāmba', role: 'Son of Kṛṣṇa', type: 'yadu',
    desc: 'Son of Lord Kṛṣṇa and Jāmbavatī. His abduction of Lakṣmaṇā led to the destruction of the Yadu dynasty.', ref: 'SB 10.68' },
  { id: 'rukmini', label: 'Rukmiṇī', role: 'Chief queen of Kṛṣṇa', type: 'yadu',
    desc: 'The chief queen of Lord Kṛṣṇa, princess of Vidarbha. Mother of Pradyumna.', ref: 'SB 10.52–10.54' },
  { id: 'satyabhama', label: 'Satyabhāmā', role: 'Queen of Kṛṣṇa', type: 'yadu',
    desc: 'One of the principal queens of Lord Kṛṣṇa. Daughter of Satrājit.', ref: 'SB 10.56' },
  { id: 'jambavati', label: 'Jāmbavatī', role: 'Queen of Kṛṣṇa', type: 'yadu',
    desc: 'One of the principal queens of Lord Kṛṣṇa. Daughter of Jāmbavān. Mother of Sāmba.', ref: 'SB 10.56' },
  { id: 'kalindi', label: 'Kālindī', role: 'Queen of Kṛṣṇa', type: 'yadu',
    desc: 'One of the queens of Lord Kṛṣṇa. Daughter of the sun god.', ref: 'SB 10.58' },
  { id: 'mitravinda', label: 'Mitravindā', role: 'Queen of Kṛṣṇa', type: 'yadu',
    desc: 'One of the queens of Lord Kṛṣṇa. Princess of Avanti.', ref: 'SB 10.58' },
  { id: 'satya', label: 'Satyā (Nāgnijitī)', role: 'Queen of Kṛṣṇa', type: 'yadu',
    desc: 'One of the queens of Lord Kṛṣṇa. Princess of Kośala.', ref: 'SB 10.58' },
  { id: 'bhadra', label: 'Bhadrā', role: 'Queen of Kṛṣṇa', type: 'yadu',
    desc: 'One of the queens of Lord Kṛṣṇa. Princess of Kaikeya.', ref: 'SB 10.58' },
  { id: 'lakshana', label: 'Lakṣmaṇā', role: 'Queen of Kṛṣṇa', type: 'yadu',
    desc: 'One of the queens of Lord Kṛṣṇa. Princess of Madra. Abducted by Sāmba.', ref: 'SB 10.68' },
  { id: 'nanda', label: 'Nanda Mahārāja', role: 'Foster father of Kṛṣṇa', type: 'yadu',
    desc: 'The foster father of Lord Kṛṣṇa. King of the cowherds in Vṛndāvana.', ref: 'SB 10.5' },
  { id: 'yashoda', label: 'Yaśodā', role: 'Foster mother of Kṛṣṇa', type: 'yadu',
    desc: 'The foster mother of Lord Kṛṣṇa. Wife of Nanda Mahārāja.', ref: 'SB 10.3' },
  { id: 'radha', label: 'Rādhārāṇī', role: 'Consort of Kṛṣṇa', type: 'divine',
    desc: 'The supreme goddess, eternal consort of Lord Kṛṣṇa. The embodiment of pure devotion (mahā-bhāva).', ref: 'CC Ādi 4' },
  { id: 'gopis', label: 'Gopīs', role: 'Cowherd maidens', type: 'yadu',
    desc: 'The cowherd maidens of Vṛndāvana, the topmost devotees of Lord Kṛṣṇa.', ref: 'SB 10.29–10.33' },
  { id: 'candra', label: 'Candra (Soma)', role: 'Moon god', type: 'divine',
    desc: 'The moon god, also called Soma. Founder of the lunar dynasty.', ref: 'SB 6.6' },
  { id: 'maruts', label: '49 Maruts', role: 'Storm gods', type: 'divine',
    desc: 'The forty-nine storm gods, sons of Diti. Indra\'s companions.', ref: 'SB 6.18' },
  { id: 'danu', label: 'Danu', role: 'Mother of demons', type: 'divine',
    desc: 'Daughter of Dakṣa, wife of Kaśyapa. Mother of the Dānavas (demons).', ref: 'SB 6.6' },
  { id: 'krodha', label: 'Krodhā', role: 'Wife of Kaśyapa', type: 'divine',
    desc: 'One of the wives of Kaśyapa. Mother of the snakes (nāgas).', ref: 'SB 6.6' },
  { id: 'vinata', label: 'Vinatā', role: 'Mother of Garuḍa', type: 'divine',
    desc: 'One of the wives of Kaśyapa. Mother of Garuḍa and Aruṇa.', ref: 'SB 6.6' },
  { id: 'kadru', label: 'Kadrū', role: 'Mother of snakes', type: 'divine',
    desc: 'One of the wives of Kaśyapa. Mother of the nāgas (snakes) including Śeṣa and Vāsuki.', ref: 'SB 6.6' },
  { id: 'garuda', label: 'Garuḍa', role: 'Carrier of Viṣṇu', type: 'divine',
    desc: 'The great eagle, carrier of Lord Viṣṇu. Son of Vinatā and Kaśyapa. Enemy of snakes.', ref: 'SB 6.6' },
  { id: 'shesha', label: 'Śeṣa Nāga', role: 'Bed of Viṣṇu', type: 'divine',
    desc: 'The thousand-headed serpent who serves as the bed of Lord Viṣṇu. An expansion of Balarāma.', ref: 'SB 5.25' },
  { id: 'vasuki', label: 'Vāsuki', role: 'King of snakes', type: 'other',
    desc: 'The king of the nāgas. Used as the rope to churn the ocean.', ref: 'SB 8.7' },
  { id: 'takshaka', label: 'Takṣaka', role: 'Snake who killed Parīkṣit', type: 'other',
    desc: 'The snake who bit and killed Parīkṣit Mahārāja.', ref: 'SB 1.18' },
  { id: 'asti', label: 'Āstīka', role: 'Sage who stopped snake sacrifice', type: 'sage',
    desc: 'The young sage who stopped Janamejaya\'s snake sacrifice. Son of Jaratkārū.', ref: 'SB 12.6' },
  { id: 'jaratkarnu', label: 'Jaratkārū', role: 'Sage · Mother of Āstīka', type: 'sage',
    desc: 'A sage who married the sister of Vāsuki. Mother of Āstīka.', ref: 'SB 12.6' },
];

// Complete edge data - parent-child relationships
export const edges: TreeEdge[] = [
  // Supreme
  ['krishna', 'brahma'],
  
  // Brahmā's children
  ['brahma', 'marici'],
  ['brahma', 'atri'],
  ['brahma', 'angira'],
  ['brahma', 'pulastya'],
  ['brahma', 'pulaha'],
  ['brahma', 'kratu'],
  ['brahma', 'vasishtha'],
  ['brahma', 'bhrgu'],
  ['brahma', 'daksha_b'],
  ['brahma', 'svayam'],
  ['brahma', 'narada'],
  
  // Svāyambhuva Manu and family
  ['svayam', 'satrupa'],
  ['svayam', 'priya'],
  ['svayam', 'uttana'],
  ['svayam', 'akuti'],
  ['svayam', 'prasuti'],
  ['svayam', 'devahuti'],
  
  // Ākūti's family
  ['akuti', 'ruci'],
  ['ruci', 'yajna'],
  
  // Devahūti's family
  ['devahuti', 'kardama'],
  ['kardama', 'kapila'],
  
  // Uttānapāda's family
  ['uttana', 'suniti'],
  ['uttana', 'suruci'],
  ['uttana', 'dhruva'],
  
  // Prasūti and Dakṣa
  ['prasuti', 'daksha_b'],
  ['daksha_b', 'aditi'],
  ['daksha_b', 'diti'],
  ['daksha_b', 'sati'],
  ['daksha_b', 'danu'],
  ['daksha_b', 'krodha'],
  ['daksha_b', 'vinata'],
  ['daksha_b', 'kadru'],
  
  // Marīci → Kaśyapa
  ['marici', 'kashyapa'],
  
  // Kaśyapa and wives
  ['kashyapa', 'aditi'],
  ['kashyapa', 'diti'],
  ['kashyapa', 'danu'],
  ['kashyapa', 'krodha'],
  ['kashyapa', 'vinata'],
  ['kashyapa', 'kadru'],
  
  // From Vinatā
  ['vinata', 'garuda'],
  ['vinata', 'shesha'],
  
  // From Kadrū
  ['kadru', 'vasuki'],
  ['kadru', 'takshaka'],
  
  // From Aditi - Ādityas
  ['aditi', 'vivasvan'],
  ['aditi', 'indra'],
  ['aditi', 'arya'],
  ['aditi', 'dhata'],
  ['aditi', 'mitra'],
  ['aditi', 'pusha'],
  ['aditi', 'bhaga'],
  ['aditi', 'tvashtha'],
  ['aditi', 'vamana'],
  
  // From Diti
  ['diti', 'hiranya_k'],
  ['diti', 'hiranya_a'],
  ['diti', 'maruts'],
  
  // Hiraṇyakaśipu's line
  ['hiranya_k', 'prahlad'],
  ['prahlad', 'virocana'],
  ['virocana', 'bali'],
  ['bali', 'prahlada_wife'],
  ['bali', 'banasura'],
  
  // Aṅgirā → Bṛhaspati
  ['angira', 'brhaspati'],
  ['brhaspati', 'tara'],
  
  // Bhṛgu → Śukrācārya
  ['bhrgu', 'shukra'],
  ['shukra', 'devayani'],
  
  // Atri → Soma
  ['atri', 'soma'],
  ['soma', 'tara'],
  ['soma', 'budha'],
  ['budha', 'ila'],
  ['ila', 'pururava'],
  ['pururava', 'urvashi'],
  ['pururava', 'ayu'],
  ['ayu', 'nahusha'],
  ['nahusha', 'yayati'],
  ['yayati', 'devayani'],
  ['yayati', 'sharmishtha'],
  ['yayati', 'yadu'],
  ['yayati', 'turvasu'],
  ['yayati', 'druhyu'],
  ['yayati', 'anudruhyu'],
  ['yayati', 'puru'],
  ['yayati', 'yati'],
  
  // Yadu dynasty
  ['yadu', 'kroshta'],
  ['kroshta', 'vrishni'],
  ['vrishni', 'sura'],
  ['sura', 'vasudeva'],
  ['sura', 'kunti'],
  ['vasudeva', 'devaki'],
  ['vasudeva', 'rohini'],
  ['vasudeva', 'krishna_y'],
  ['vasudeva', 'balarama'],
  ['vasudeva', 'subhadra'],
  ['kunti', 'karna'],
  ['kunti', 'yudhi'],
  ['kunti', 'bhima'],
  ['kunti', 'arjuna'],
  
  // Kṛṣṇa's queens
  ['krishna_y', 'rukmini'],
  ['krishna_y', 'satyabhama'],
  ['krishna_y', 'jambavati'],
  ['krishna_y', 'kalindi'],
  ['krishna_y', 'mitravinda'],
  ['krishna_y', 'satya'],
  ['krishna_y', 'bhadra'],
  ['krishna_y', 'lakshana'],
  ['krishna_y', 'pradyumna'],
  ['krishna_y', 'samba'],
  
  // Kṛṣṇa's foster parents
  ['nanda', 'yashoda'],
  ['yashoda', 'krishna_y'],
  
  // Pūru dynasty (Kuru)
  ['puru', 'dushyanta'],
  ['dushyanta', 'shakuntala'],
  ['shakuntala', 'bharata_k'],
  ['bharata_k', 'kuru'],
  ['kuru', 'shantanu'],
  ['shantanu', 'ganga'],
  ['shantanu', 'satyavati'],
  ['ganga', 'bhishma'],
  ['satyavati', 'chitrangada'],
  ['satyavati', 'vichitravirya'],
  ['satyavati', 'vyasa'],
  ['vyasa', 'parasara'],
  ['vyasa', 'shuka'],
  ['vyasa', 'dhrita'],
  ['vyasa', 'pandu'],
  ['vichitravirya', 'ambika'],
  ['vichitravirya', 'ambalika'],
  ['ambika', 'dhrita'],
  ['ambalika', 'pandu'],
  ['dhrita', 'gandhari'],
  ['gandhari', 'duryodhana'],
  ['pandu', 'kunti'],
  ['pandu', 'madri'],
  ['kunti', 'yudhi'],
  ['kunti', 'bhima'],
  ['kunti', 'arjuna'],
  ['madri', 'nakula'],
  ['madri', 'sahadeva'],
  ['arjuna', 'subhadra'],
  ['arjuna', 'draupadi'],
  ['subhadra', 'abhimanyu'],
  ['draupadi', 'abhimanyu'],
  ['abhimanyu', 'parikshit'],
  ['parikshit', 'janamejaya'],
  ['janamejaya', 'janamejaya_disc'],
  
  // Solar dynasty from Vaivasvata Manu
  ['vaivasva', 'ikshvaku'],
  ['vaivasva', 'ila'],
  ['vaivasva', 'saryati'],
  ['vaivasva', 'nabhaga'],
  
  // Ikṣvāku line
  ['ikshvaku', 'nimi'],
  ['nimi', 'janaka'],
  ['janaka', 'sita'],
  ['ikshvaku', 'trishanku'],
  ['ikshvaku', 'harishchandra'],
  ['harishchandra', 'rohita'],
  ['harishchandra', 'shunahshepa'],
  ['ikshvaku', 'sagara'],
  ['sagara', 'sagara_sons'],
  ['sagara', 'amshuman'],
  ['amshuman', 'dilipa'],
  ['dilipa', 'bhagiratha'],
  ['bhagiratha', 'khatvanga'],
  ['khatvanga', 'raghu'],
  ['raghu', 'aja'],
  ['aja', 'dasharatha'],
  ['dasharatha', 'kausalya'],
  ['dasharatha', 'kaikeyi'],
  ['dasharatha', 'sumitra'],
  ['kausalya', 'rama'],
  ['kaikeyi', 'bharata_r'],
  ['sumitra', 'lakshmana'],
  ['sumitra', 'shatrughna'],
  ['rama', 'sita'],
  ['rama', 'lava'],
  ['sita', 'lava'],
  
  // Śaryāti line
  ['saryati', 'sukanya'],
  ['saryati', 'anarta'],
  ['sukanya', 'chyavana'],
  ['anarta', 'revata'],
  ['revata', 'kakudmi'],
  ['kakudmi', 'revati'],
  ['revati', 'balarama'],
  
  // Nabhaga line
  ['nabhaga', 'nabhaga_disc'],
  ['nabhaga_disc', 'viryavan'],
  ['viryavan', 'sudhanva'],
  ['sudhanva', 'traidhatva'],
  ['traidhatva', 'satyavrata'],
  ['satyavrata', 'trishanku'],
  ['nabhaga_disc', 'ambarisha'],
  
  // Vasiṣṭha line
  ['vasishtha', 'shakti'],
  ['shakti', 'parasara'],
  ['parasara', 'vyasa'],
  
  // Pulastya line
  ['pulastya', 'vishrav'],
  ['vishrav', 'kubera'],
  ['vishrav', 'ravana'],
  ['vishrav', 'vibhishana'],
  
  // Viśvāmitra line
  ['visvamitra', 'shakuntala'],
  ['visvamitra', 'menaka'],
  ['menaka', 'shakuntala'],
  
  // Divine fathers of Pāṇḍavas
  ['dharma', 'yudhi'],
  ['vayu', 'bhima'],
  ['indra', 'arjuna'],
  ['ashvini', 'nakula'],
  ['ashvini', 'sahadeva'],
  ['surya', 'karna'],
  
  // Other divine connections
  ['vivasvan', 'vaivasva'],
  ['vivasvan', 'yama'],
  ['vivasvan', 'ashvini'],
  ['surya', 'karna'],
  ['varuna', 'bhishma'],
  
  // Avatāras
  ['krishna', 'matsya'],
  ['krishna', 'kurma'],
  ['krishna', 'varaha'],
  ['krishna', 'nrishimha'],
  ['krishna', 'vamana'],
  ['krishna', 'parasurama'],
  ['krishna', 'rama'],
  ['krishna', 'krishna_y'],
  ['krishna', 'buddha'],
  ['krishna', 'kalki'],
  ['krishna', 'dattatreya'],
  ['krishna', 'durvasa'],
  ['krishna', 'hayagriva'],
  
  // Vyāsa's disciples
  ['vyasa', 'jaimini'],
  ['vyasa', 'paila'],
  ['vyasa', 'vaisampayana'],
  ['vyasa', 'sumantu'],
  ['vyasa', 'romaharshana'],
  ['romaharshana', 'suta_gosvami'],
  ['suta_gosvami', 'saunaka'],
  
  // Mārkaṇḍeya
  ['mrikanda', 'markandeya'],
  
  // Kali-yuga
  ['krishna_y', 'kali'],
].map(([from, to]) => ({ from, to }));

// Function to get initials from name
export function getInitials(name: string): string {
  const words = name.replace(/Lord |Mahārāja |Mahārāja|Prajāpati |Śrī |Devī| |\(.*\)/g, '').split(/[\s-]/);
  const first = words[0]?.[0] || '?';
  const second = words[1]?.[0] || '';
  return (first + second).toUpperCase();
}

// Generate avatar URL
export function getAvatarUrl(id: string): string {
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `https://api.dicebear.com/7.x/initials/svg?seed=${id}&backgroundColor=${['FFAB40', 'CE93D8', '81C784', 'F48FB1', '4FC3F7', 'FFD54F', 'BCAAA4'][seed % 7]}&textColor=7B2D00`;
}

// Get node by id
export function getNodeById(id: string): TreeNode | undefined {
  return nodes.find(n => n.id === id);
}

// Get children of a node
export function getChildren(nodeId: string): TreeNode[] {
  const childIds = edges.filter(e => e.from === nodeId).map(e => e.to);
  return nodes.filter(n => childIds.includes(n.id));
}

// Get parents of a node
export function getParents(nodeId: string): TreeNode[] {
  const parentIds = edges.filter(e => e.to === nodeId).map(e => e.from);
  return nodes.filter(n => parentIds.includes(n.id));
}

// Search nodes
export function searchNodes(query: string): TreeNode[] {
  const lowerQuery = query.toLowerCase();
  return nodes.filter(n => 
    n.label.toLowerCase().includes(lowerQuery) ||
    n.role.toLowerCase().includes(lowerQuery) ||
    n.desc.toLowerCase().includes(lowerQuery)
  );
}

// Get nodes by type
export function getNodesByType(type: NodeType): TreeNode[] {
  return nodes.filter(n => n.type === type);
}

// Get all node types for filter
export const nodeTypes: { type: NodeType; label: string }[] = [
  { type: 'divine', label: 'Celestial / Avatāra' },
  { type: 'sage', label: 'Ṛṣi / Sage' },
  { type: 'kuru', label: 'Kuru Dynasty' },
  { type: 'yadu', label: 'Yadu Dynasty' },
  { type: 'solar', label: 'Solar / Ikṣvāku' },
  { type: 'manu', label: 'Manu / Progenitor' },
  { type: 'other', label: 'Other Lineages' },
];

// Get related nodes (parents, children, siblings)
export function getRelatedNodes(nodeId: string): TreeNode[] {
  const parents = getParents(nodeId);
  const children = getChildren(nodeId);
  const siblings = parents.flatMap(p => getChildren(p.id)).filter(s => s.id !== nodeId);
  return [...parents, ...children, ...siblings];
}

// Get path from root to node
export function getPathToRoot(nodeId: string): TreeNode[] {
  const path: TreeNode[] = [];
  let current = getNodeById(nodeId);
  
  while (current) {
    path.unshift(current);
    const parents = getParents(current.id);
    current = parents[0]; // Take first parent for simplicity
  }
  
  return path;
}

// Get all descendants of a node
export function getDescendants(nodeId: string): TreeNode[] {
  const descendants: TreeNode[] = [];
  const children = getChildren(nodeId);
  
  for (const child of children) {
    descendants.push(child);
    descendants.push(...getDescendants(child.id));
  }
  
  return descendants;
}

// Get all ancestors of a node
export function getAncestors(nodeId: string): TreeNode[] {
  const ancestors: TreeNode[] = [];
  const parents = getParents(nodeId);
  
  for (const parent of parents) {
    ancestors.push(parent);
    ancestors.push(...getAncestors(parent.id));
  }
  
  return ancestors;
}

// Check if two nodes are related
export function areRelated(nodeId1: string, nodeId2: string): boolean {
  if (nodeId1 === nodeId2) return true;
  
  const descendants1 = getDescendants(nodeId1);
  if (descendants1.some(d => d.id === nodeId2)) return true;
  
  const ancestors1 = getAncestors(nodeId1);
  if (ancestors1.some(a => a.id === nodeId2)) return true;
  
  return false;
}

// Get connection path between two nodes
export function getConnectionPath(fromId: string, toId: string): TreeNode[] | null {
  if (fromId === toId) return [getNodeById(fromId)!];
  
  // Check if toId is a descendant of fromId
  const descendants = getDescendants(fromId);
  if (descendants.some(d => d.id === toId)) {
    return getPathToRoot(toId).filter(n => 
      n.id === fromId || 
      n.id === toId || 
      areRelated(fromId, n.id) && areRelated(toId, n.id)
    );
  }
  
  // Check if toId is an ancestor of fromId
  const ancestors = getAncestors(fromId);
  if (ancestors.some(a => a.id === toId)) {
    return getPathToRoot(fromId).filter(n => 
      n.id === fromId || 
      n.id === toId || 
      areRelated(fromId, n.id) && areRelated(toId, n.id)
    );
  }
  
  // Find common ancestor
  const ancestors1 = getAncestors(fromId);
  const ancestors2 = getAncestors(toId);
  const commonAncestor = ancestors1.find(a => ancestors2.some(a2 => a2.id === a.id));
  
  if (commonAncestor) {
    const path1 = getPathToRoot(fromId).filter(n => 
      n.id === fromId || n.id === commonAncestor.id || areRelated(commonAncestor.id, n.id)
    );
    const path2 = getPathToRoot(toId).filter(n => 
      n.id === toId || n.id === commonAncestor.id || areRelated(commonAncestor.id, n.id)
    );
    return [...path1, ...path2.slice(1)];
  }
  
  return null;
}

// Export statistics
export const treeStats = {
  totalNodes: nodes.length,
  totalEdges: edges.length,
  byType: {
    divine: nodes.filter(n => n.type === 'divine').length,
    sage: nodes.filter(n => n.type === 'sage').length,
    kuru: nodes.filter(n => n.type === 'kuru').length,
    yadu: nodes.filter(n => n.type === 'yadu').length,
    solar: nodes.filter(n => n.type === 'solar').length,
    manu: nodes.filter(n => n.type === 'manu').length,
    other: nodes.filter(n => n.type === 'other').length,
  }
};
