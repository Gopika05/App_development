import React from 'react';
import './Sido.css';

const Sido = () => {
  return (
    <div className="sido">
      <ul>
        <li onClick={() => window.location.href = 'https://www.geneseo.edu/~aguilar/public/assets/courses/233/main_notes.pdf'}>Maths</li>
        <li onClick={() => window.location.href = 'https://tech.chemistrydocs.com/Books/Environmental/An-introduction-to-Environmental-Chemistry-By-M.Fazal-ur-Rehman.pdf'}>Environmental Science</li>
        <li onClick={() => window.location.href = 'https://dept.math.lsa.umich.edu/~idolga/physicsbook.pdf'}>Physics</li>
        <li onClick={() => window.location.href = 'https://v2vclass.com/images/coursepdf/enggfy/c2/applied%20chem%20sem2.pdf'}>Chemistry</li>
        <li onClick={() => window.location.href = 'https://www.example.com/history'}>History</li>
        <li onClick={() => window.location.href = 'https://resources.saylor.org/wwwresources/archived/site/textbooks/Essentials%20of%20Geographic%20Information%20Systems.pdf'}>Geography</li>
      </ul>
    </div>
  );
}

export default Sido;
