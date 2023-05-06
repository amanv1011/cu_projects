import React, { useState } from "react";
import "./domainManage.css";

export default function DomainManage() {
  const [count, setCount] = useState(0);

  let a = 10;
  function increment() {
    a += 1;
    console.log(a);
  }
  return (
    <>
      <div className="outerCover">
        <div className="main cQuesMain">
          <div className="register">
            <center style={{ marginTop: "10px" }}>
              <h2>Domain List</h2>
            </center>
            <form action="" id="register">
              <table>
                <tr className="dom_manage_headtr">
                  <th className="dom_manage_headth">Domain Name</th>
                  <th className="dom_manage_headth">Status</th>
                  <th className="dom_manage_headth">Subject</th>
                </tr>
                <tr>
                  <td>BBA</td>
                  <td>
                    <select name="cars" id="cars">
                      <option value="volvo">Active</option>
                      <option value="saab">Deactive</option>
                    </select>
                  </td>
                  <td>
                    <button>Save</button>
                  </td>
                </tr>
                <tr>
                  <td>BBA</td>
                  <td>
                    <select name="cars" id="cars">
                      <option value="volvo">Active</option>
                      <option value="saab">Deactive</option>
                    </select>
                  </td>
                  <td>
                    <button>Save</button>
                  </td>
                </tr>
                <tr>
                  <td>BBA</td>
                  <td>
                    <select name="cars" id="cars">
                      <option value="volvo">Active</option>
                      <option value="saab">Deactive</option>
                    </select>
                  </td>
                  <td>
                    <button>Save</button>
                  </td>
                </tr>
                <tr>
                  <td>BBA</td>
                  <td>
                    <select name="cars" id="cars">
                      <option value="volvo">Active</option>
                      <option value="saab">Deactive</option>
                    </select>
                  </td>
                  <td>
                    <button>Save</button>
                  </td>
                </tr>
                <tr>
                  <td>BBA</td>
                  <td>
                    <select name="cars" id="cars">
                      <option value="volvo">Active</option>
                      <option value="saab">Deactive</option>
                    </select>
                  </td>
                  <td>
                    <button>Save</button>
                  </td>
                </tr>
              </table>
              <br />
              <br />

              <input type="submit" value="submit" name="submit" id="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
