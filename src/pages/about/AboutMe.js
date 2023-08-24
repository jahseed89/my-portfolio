import React, { useEffect, useState } from "react";
import { me2 } from "../../assets/index";
import { BrandLoader } from "../../components/index";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./aboutMe.scss";

const AboutMe = () => {
  const [loading, setLoading] = useState(false);

  const [text] = useTypewriter({
    words: [
      "Software Development",
    ],
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
              <img src={me2} alt="avatar" />
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
                Hello! It's nice having you here, I'm Samson Jahseed Ocran A
                Junior Software developer, using the latest tools and
                technologies used in frontend development to bring ideas to an
                accessible, human-centered products. I am a quick learner and
                fast in delivering Projects because I stay focuse on worikng
                extra hours to make sure I have a given project done. I love to
                learn and explore new technologies and passionate about problem
                solving.
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
// import React, { useState } from "react";
// import './aboutMe.scss'

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
