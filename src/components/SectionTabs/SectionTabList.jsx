const sectionTabList = [
  'World',
  'Business',
  'Politics',
  'Lifestyle',
  'Tech',
  'Science',
  'Health',
];

function SectionTabList() {
  return (
    <ul>
      {sectionTabList.map((sectionTab) => (
        <li key={sectionTab}>
          <button>{sectionTab}</button>
        </li>
      ))}
    </ul>
  );
}

export default SectionTabList;
