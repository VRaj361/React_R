import React from 'react'

export const AboutUs = (props) => {
    return (
        <div>
        <h1>About us</h1>
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
                      <td>{user.age}</td>
                      <td>{user.gender}</td>
                    </tr>
                  
                );
              })}
            </tbody>
          </table>

        </div>
      );            
    }
