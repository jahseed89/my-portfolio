import React, { useEffect, useState } from "react";
import { me4 } from "../../assets/index";
import { BrandLoader } from "../../components/index";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./aboutMe.scss";

const AboutMe = () => {
  const [loading, setLoading] = useState(false);

  const [text] = useTypewriter({
    words: ["Software Development"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="about">
      {loading ? (
        <BrandLoader />
      ) : (
        <>
          <div className="page-content">
            <div className="img-holder">
              <img src={me4} alt="avatar" />
            </div>
            <div className="bio-section">
              <h1>About Me</h1>
              <h3>
                <span>{text}</span>
                <span>
                  <Cursor cursorStyle=" _#" />
                </span>
              </h3>
              <p>
                As Frontend Developer, I possess a passion for crafting
                exceptional user experiences. Specializing in the creation of
                pixel-perfect and responsive web interfaces, I leverage modern
                frontend technologies, notably React, Typescript, to bring designs to life.
                Proficient in HTML, CSS, and JavaScript, I combine technical
                expertise with a keen eye for design and usability. My focus is
                on delivering interfaces that not only exhibit visual excellence
                but also ensure seamless interactions and an enjoyable user
                journey. At the core of my development approach is a commitment
                to user-centric design, aiming to create experiences that are
                both smooth and engaging for every user. Throughout internships
                and collaborative group projects, I have refined my ability to
                work effectively with designers and backend developers,
                contributing to the successful realization of web applications.
                I recognize the significance of teamwork in delivering a
                cohesive user experience. Committed to continuous learning, I
                stay abreast of industry trends and best practices in frontend
                development. Regularly following industry blogs, attending
                webinars, and undertaking online courses, I am dedicated to
                remaining current with the ever-evolving landscape of frontend
                technologies. I thrive on tackling complex problems and am
                driven to find innovative solutions. As a junior developer, I am
                enthusiastic about applying my problem-solving skills to
                contribute to the team's success and adapt to new challenges.
              </p>

              <div className="in-summary">
                <h3>Summary</h3>
                <p>
                  <span>Nickname</span>
                  <span>Jahseed</span>
                </p>
                <p>
                  <span>Pronouns</span>
                  <span>He/Him/His</span>
                </p>
                <p>
                  <span>Education</span>
                  <span>Computer Science of National Deplomah</span>
                </p>
                <p>
                  <span>Myers-briggs</span>
                  <span>ISFJ</span>
                </p>
                <p>
                  <span>Current Location</span>
                  <span>Lagos, Nigeria</span>
                </p>
                <p>
                  <span>Interests</span>
                  <span>Raggae Music, Forieng Movies</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-line-container"></div>
        </>
      )}
    </div>
  );
};

export default AboutMe;

// function TransactionTable({ txns }) {
//   const [dateSelected, setDateSelected] = useState("2019-11-29");
//   const [sortingOrder, setSortingOrder] = useState("asc"); // Initial sorting order
//   const [sortedTxns, setSortedTxns] = useState(txns); // Initially display unsorted transactions

//   const handelDate = (e) => {
//     setDateSelected(e.target.value);
//   };

//   // Handling the filter click
//   const handleFilter = () => {
//     const filteredTnxns = txns.filter((txn) => txn.date === dateSelected);
//     setSortedTxns(filteredTnxns); // Update sorted transactions when filtered
//   };

//   const sort = () => {
//     // Toggle sorting order
//     const newSortingOrder = sortingOrder === "asc" ? "desc" : "asc";

//     // Sort the transactions based on the amount and sorting order
//     const sortedTnxns = [...sortedTxns].sort((a, b) => {
//       return newSortingOrder === "asc"
//         ? a.amount - b.amount
//         : b.amount - a.amount;
//     });

//     setSortingOrder(newSortingOrder);
//     setSortedTxns(sortedTnxns);
//   };

//   return (
//     <div className="layout-column align-items-center mt-50">
//       <section className="layout-row align-items-center justify-content-center">
//         <label className="mr-10">Transaction Date</label>
//         <input
//           id="date"
//           type="date"
//           defaultValue="2019-11-29"
//           value={dateSelected}
//           onChange={handelDate}
//         />
//         <button className="small" onClick={handleFilter}>
//           Filter
//         </button>
//       </section>

//       <div className="card mt-50">
//         <table className="table">
//           <thead>
//             <tr className="table">
//               <th className="table-header">Date</th>
//               <th className="table-header">Description</th>
//               <th className="table-header">Type</th>
//               <th className="table-header">
//                 <span id="amount" onClick={sort}>
//                   Amount ($)
//                 </span>
//               </th>
//               <th className="table-header">Available Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedTxns.map((txn) => {
//               return (
//                 <tr key={txn.id}>
//                   <td>{txn.date}</td>
//                   <td>{txn.description}</td>
//                   <td>{txn.type === 1 ? 'Debit' : 'Credit'}</td>
//                   <td>{txn.amount}</td>
//                   <td>{txn.balance}</td>

//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TransactionTable;
