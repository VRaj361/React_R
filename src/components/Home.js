import React from "react";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
export default function Home(props) {
    var ele=1;
    var st={color:"red"}
    var std={backgroundColor:"green", color:"white"}
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {props.obj.map((user) => {
            return (
              
                <tr>
                  <td>{user.name}</td>
                  <td style={user.age>21?st:std}>{user.age}</td>
                  <td>{user.gender}</td>
                </tr>
              
            );
          })}
        </tbody>
      </table>

      <AboutUs ele={ele} obj={props.obj}/>
      <ContactUs ele={ele}/>
    </div>
  );
}
